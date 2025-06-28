import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { getAccounts, getCreditCards, getTags, getCategories } from "../../api";
import "./FilterBar.css";

export default function FilterBar({ 
  filterText, 
  onFilterTextChange, 
  filterType, 
  onFilterTypeChange,
  selectedAccount,
  onAccountChange,
  selectedCard,
  onCardChange,
  selectedCategory,
  onCategoryChange,
  selectedTags,
  onTagsChange
}) {
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [showCardDropdown, setShowCardDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showTagsDropdown, setShowTagsDropdown] = useState(false);
  
  const [accounts, setAccounts] = useState([]);
  const [cards, setCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  // Refs for dropdown containers
  const typeDropdownRef = useRef(null);
  const accountDropdownRef = useRef(null);
  const cardDropdownRef = useRef(null);
  const categoryDropdownRef = useRef(null);
  const tagsDropdownRef = useRef(null);

  const { register, watch } = useForm({
    defaultValues: {
      searchText: filterText || ""
    }
  });

  const searchText = watch("searchText");

  // Fetch data on component mount
  useEffect(() => {
    const fetchFilterData = async () => {
      try {
        const [accountsData, cardsData, categoriesData, tagsData] = await Promise.all([
          getAccounts(),
          getCreditCards(),
          getCategories(),
          getTags()
        ]);
        
        setAccounts(accountsData);
        setCards(cardsData);
        setCategories(categoriesData);
        setTags(tagsData);
      } catch (error) {
        console.error("Error fetching filter data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilterData();
  }, []);

  // Update parent when search text changes
  useEffect(() => {
    onFilterTextChange(searchText);
  }, [searchText, onFilterTextChange]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (typeDropdownRef.current && !typeDropdownRef.current.contains(event.target)) {
        setShowTypeDropdown(false);
      }
      if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target)) {
        setShowAccountDropdown(false);
      }
      if (cardDropdownRef.current && !cardDropdownRef.current.contains(event.target)) {
        setShowCardDropdown(false);
      }
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
        setShowCategoryDropdown(false);
      }
      if (tagsDropdownRef.current && !tagsDropdownRef.current.contains(event.target)) {
        setShowTagsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFilterChange = (type) => {
    onFilterTypeChange(type);
    setShowTypeDropdown(false);
  };

  const handleAccountChange = (accountId) => {
    onAccountChange(accountId);
    setShowAccountDropdown(false);
  };

  const handleCardChange = (cardId) => {
    onCardChange(cardId);
    setShowCardDropdown(false);
  };

  const handleCategoryChange = (categoryId) => {
    onCategoryChange(categoryId);
    setShowCategoryDropdown(false);
  };

  const handleTagToggle = (tagId) => {
    const currentTags = selectedTags || [];
    const newTags = currentTags.includes(tagId)
      ? currentTags.filter(id => id !== tagId)
      : [...currentTags, tagId];
    onTagsChange(newTags);
  };

  const getFilterLabel = (type) => {
    const labels = {
      all: "All transactions",
      income: "Income", 
      "income-received": "Income received",
      "income-pending": "Income not received",
      expenses: "Expenses",
      "expenses-paid": "Expenses paid", 
      "expenses-pending": "Expenses not paid",
      transfers: "Transfers",
      "transfers-paid": "Transfers paid",
      "transfers-pending": "Transfers not paid", 
      fixed: "Fixed transactions",
      installments: "Installment transactions"
    };
    return labels[type] || "All transactions";
  };

  const getAccountName = (accountId) => {
    if (!accountId) return "All accounts";
    const account = accounts.find(a => a.id === accountId);
    return account ? account.name : "All accounts";
  };

  const getCardName = (cardId) => {
    if (!cardId) return "All cards";
    const card = cards.find(c => c.id === cardId);
    return card ? card.name : "All cards";
  };

  const getCategoryName = (categoryId) => {
    if (!categoryId) return "All categories";
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : "All categories";
  };

  const getSelectedTagsText = () => {
    if (!selectedTags || selectedTags.length === 0) return "All tags";
    if (selectedTags.length === 1) {
      const tag = tags.find(t => t.id === selectedTags[0]);
      return tag ? tag.name : "All tags";
    }
    return `${selectedTags.length} tags selected`;
  };

  if (loading) {
    return (
      <div className="filter-bar loading">
        <div className="loading-text">Loading filters...</div>
      </div>
    );
  }

  return (
    <div className="filter-bar">
      {/* Search Input */}
      <div className="filter-input-container">
        <FaSearch className="search-icon" />
        <input
          {...register("searchText")}
          type="text"
          placeholder="Search transactions..."
          className="filter-input"
        />
      </div>
      
      {/* Transaction Type Filter */}
      <div className="filter-dropdown-container" ref={typeDropdownRef}>
        <button 
          className="filter-dropdown-btn"
          onClick={() => setShowTypeDropdown(!showTypeDropdown)}
        >
          <span>{getFilterLabel(filterType)}</span>
          <FaChevronDown className={`dropdown-arrow ${showTypeDropdown ? 'open' : ''}`} />
        </button>
        
        {showTypeDropdown && (
          <div className="filter-dropdown">
            <button 
              className={`filter-option ${filterType === "all" ? "active" : ""}`}
              onClick={() => handleFilterChange("all")}
            >
              <span className="checkmark">✓</span>
              All transactions
            </button>
            <div className="filter-section">
              <div className="filter-section-title">Income</div>
              <button 
                className={`filter-option ${filterType === "income" ? "active" : ""}`}
                onClick={() => handleFilterChange("income")}
              >
                <span className="checkmark">✓</span>
                All income
              </button>
              <button 
                className={`filter-option ${filterType === "income-received" ? "active" : ""}`}
                onClick={() => handleFilterChange("income-received")}
              >
                <span className="checkmark">✓</span>
                Income received
              </button>
              <button 
                className={`filter-option ${filterType === "income-pending" ? "active" : ""}`}
                onClick={() => handleFilterChange("income-pending")}
              >
                <span className="checkmark">✓</span>
                Income not received
              </button>
            </div>
            <div className="filter-section">
              <div className="filter-section-title">Expenses</div>
              <button 
                className={`filter-option ${filterType === "expenses" ? "active" : ""}`}
                onClick={() => handleFilterChange("expenses")}
              >
                <span className="checkmark">✓</span>
                All expenses
              </button>
              <button 
                className={`filter-option ${filterType === "expenses-paid" ? "active" : ""}`}
                onClick={() => handleFilterChange("expenses-paid")}
              >
                <span className="checkmark">✓</span>
                Expenses paid
              </button>
              <button 
                className={`filter-option ${filterType === "expenses-pending" ? "active" : ""}`}
                onClick={() => handleFilterChange("expenses-pending")}
              >
                <span className="checkmark">✓</span>
                Expenses not paid
              </button>
            </div>
            <div className="filter-section">
              <div className="filter-section-title">Transfers</div>
              <button 
                className={`filter-option ${filterType === "transfers" ? "active" : ""}`}
                onClick={() => handleFilterChange("transfers")}
              >
                <span className="checkmark">✓</span>
                All transfers
              </button>
              <button 
                className={`filter-option ${filterType === "transfers-paid" ? "active" : ""}`}
                onClick={() => handleFilterChange("transfers-paid")}
              >
                <span className="checkmark">✓</span>
                Transfers paid
              </button>
              <button 
                className={`filter-option ${filterType === "transfers-pending" ? "active" : ""}`}
                onClick={() => handleFilterChange("transfers-pending")}
              >
                <span className="checkmark">✓</span>
                Transfers not paid
              </button>
            </div>
            <div className="filter-section">
              <div className="filter-section-title">Other</div>
              <button 
                className={`filter-option ${filterType === "fixed" ? "active" : ""}`}
                onClick={() => handleFilterChange("fixed")}
              >
                <span className="checkmark">✓</span>
                Fixed transactions
              </button>
              <button 
                className={`filter-option ${filterType === "installments" ? "active" : ""}`}
                onClick={() => handleFilterChange("installments")}
              >
                <span className="checkmark">✓</span>
                Installment transactions
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Account Filter */}
      <div className="filter-dropdown-container" ref={accountDropdownRef}>
        <button 
          className="filter-dropdown-btn"
          onClick={() => setShowAccountDropdown(!showAccountDropdown)}
        >
          <span>{getAccountName(selectedAccount)}</span>
          <FaChevronDown className={`dropdown-arrow ${showAccountDropdown ? 'open' : ''}`} />
        </button>
        
        {showAccountDropdown && (
          <div className="filter-dropdown">
            <button 
              className={`filter-option ${!selectedAccount ? "active" : ""}`}
              onClick={() => handleAccountChange(null)}
            >
              <span className="checkmark">✓</span>
              All accounts
            </button>
            {accounts.map(account => (
              <button 
                key={account.id}
                className={`filter-option ${selectedAccount === account.id ? "active" : ""}`}
                onClick={() => handleAccountChange(account.id)}
              >
                <span className="checkmark">✓</span>
                {account.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Card Filter */}
      <div className="filter-dropdown-container" ref={cardDropdownRef}>
        <button 
          className="filter-dropdown-btn"
          onClick={() => setShowCardDropdown(!showCardDropdown)}
        >
          <span>{getCardName(selectedCard)}</span>
          <FaChevronDown className={`dropdown-arrow ${showCardDropdown ? 'open' : ''}`} />
        </button>
        
        {showCardDropdown && (
          <div className="filter-dropdown">
            <button 
              className={`filter-option ${!selectedCard ? "active" : ""}`}
              onClick={() => handleCardChange(null)}
            >
              <span className="checkmark">✓</span>
              All cards
            </button>
            {cards.map(card => (
              <button 
                key={card.id}
                className={`filter-option ${selectedCard === card.id ? "active" : ""}`}
                onClick={() => handleCardChange(card.id)}
              >
                <span className="checkmark">✓</span>
                {card.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Category Filter */}
      <div className="filter-dropdown-container" ref={categoryDropdownRef}>
        <button 
          className="filter-dropdown-btn"
          onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
        >
          <span>{getCategoryName(selectedCategory)}</span>
          <FaChevronDown className={`dropdown-arrow ${showCategoryDropdown ? 'open' : ''}`} />
        </button>
        
        {showCategoryDropdown && (
          <div className="filter-dropdown">
            <button 
              className={`filter-option ${!selectedCategory ? "active" : ""}`}
              onClick={() => handleCategoryChange(null)}
            >
              <span className="checkmark">✓</span>
              All categories
            </button>
            {categories.map(category => (
              <button 
                key={category.id}
                className={`filter-option ${selectedCategory === category.id ? "active" : ""}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                <span className="checkmark">✓</span>
                <span 
                  className="category-color" 
                  style={{ backgroundColor: category.color }}
                ></span>
                {category.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tags Filter */}
      <div className="filter-dropdown-container" ref={tagsDropdownRef}>
        <button 
          className="filter-dropdown-btn"
          onClick={() => setShowTagsDropdown(!showTagsDropdown)}
        >
          <span>{getSelectedTagsText()}</span>
          <FaChevronDown className={`dropdown-arrow ${showTagsDropdown ? 'open' : ''}`} />
        </button>
        
        {showTagsDropdown && (
          <div className="filter-dropdown tags-dropdown">
            <button 
              className={`filter-option ${!selectedTags || selectedTags.length === 0 ? "active" : ""}`}
              onClick={() => onTagsChange([])}
            >
              <span className="checkmark">✓</span>
              All tags
            </button>
            {tags.map(tag => (
              <button 
                key={tag.id}
                className={`filter-option ${selectedTags?.includes(tag.id) ? "active" : ""}`}
                onClick={() => handleTagToggle(tag.id)}
              >
                <span className="checkmark">✓</span>
                <span 
                  className="tag-color" 
                  style={{ backgroundColor: tag.color }}
                ></span>
                {tag.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
