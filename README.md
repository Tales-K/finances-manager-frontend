# Project Structure

The project follows a well-organized structure with clear separation of concerns:

## Core Application Files
- `App.jsx` - Main application component
- `main.jsx` - Application entry point

## API Layer
- `api/` - Contains API-related files
  - `api-specs.json` - API specifications
  - `index.js` - API service implementations

## Components
- `components/` - Reusable UI components
  - `Button.jsx` - Custom button component with styles
  - `Navigation.jsx` - Navigation component
  - Component styles are co-located with their respective components

## Layout
- `layout/` - Layout-related components
  - `Header.jsx` - Application header with navigation

## Pages
- `pages/` - Main application pages
  - `Dashboard/` - Main dashboard view
    - `AccountsCard.jsx` - Accounts overview component
    - `CreditCardsCard.jsx` - Credit cards summary
    - `TransactionsList.jsx` - Transactions display
    - `ReceivablesList.jsx` - Receivables management
  - `Login/` - Authentication page
  - `Reports/` - Financial reports section
  - `Transactions/` - Transaction management

## Assets and Styles
- `static/` - Static assets (icons, logos)
- `styles/` - Global styles and theming
  - `theme.css` - Application-wide theme variables

# Development Conventions

1. Components should be organized by feature/page in the `pages/` directory
2. Shared components go in the `components/` directory
3. Each component should have its own CSS file when styles are needed
4. API calls should be centralized in the `api/` directory
5. Layout components that are used across multiple pages should be in the `layout/` directory
