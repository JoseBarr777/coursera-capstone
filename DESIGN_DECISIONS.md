# Design Decisions

## Routing
- **Library:** React Router
- **Mode:** Declarative
- **Reason:** Chosen due to starting a React project from scratch using Vite, and declarative mode fits well with this setup.
- **Implementation:**
  - Routes are defined in `App.jsx` rather than `main.jsx` to keep the entry point focused on bootstrapping and providers.
  - The `BrowserRouter` and `RootLayout` are placed in `main.jsx` as global wrappers around the application.
  - This structure provides a persistent layout (header, navigation, footer) across all routes.
  - Navigation between routes uses React Router's navigation components (`Link`, `NavLink`) instead of traditional anchor tags to maintain SPA functionality.

## Project Structure
- **Pages vs Components:**
  - Pages are placed in a dedicated `Pages` directory rather than in the components folder
  - This creates a clear separation between page-level components and reusable UI components
- **Root Components:**
  - Root-level components (like `RootLayout`) are organized in a `components/root` directory
  - This isolates global layout components from feature-specific components
- **Organizational Philosophy:**
  - Components are organized by feature/concern rather than by type
  - This approach improves maintainability as the application grows

---

## Future Decisions
- *(Add future architectural or technology choices here, such as state management, styling, testing, deployment, etc.)*