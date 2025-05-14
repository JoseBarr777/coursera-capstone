# Design Decisions

## Routing
- **Library:** React Router
- **Mode:** Declarative
- **Reason:** Chosen due to starting a React project from scratch using Vite, and declarative mode fits well with this setup.
- **Implementation:**
  - Routes are defined in `App.jsx` rather than `main.jsx` to keep the entry point focused on bootstrapping and providers.
  - This allows for a persistent layout (e.g., header, nav, footer) to wrap all routes, which is a common pattern in real-world applications.
  - This structure is more maintainable and scalable as the app grows.

---

## Future Decisions
- *(Add future architectural or technology choices here, such as state management, styling, testing, deployment, etc.)*