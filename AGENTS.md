# AGENTS.md: context for AI coding assistants

## Project

Library Book Manager: a single-page web app with a REST backend. Admins manage books, authors, categories and loans; users browse and borrow books.

## Tech stack

Backend: PHP, FlightPHP, PDO, MySQL. Pure PHP only, no HTML in backend files.
Frontend: HTML, CSS, JavaScript, Bootstrap 5. No PHP in frontend files.
Auth: JWT. Roles: `admin`, `user`.
External API: Open Library (book data by ISBN).
Docs: OpenAPI/Swagger.

## Architecture rules (the AI must follow these)

1. Layers: `routes -> services -> dao -> database`. Routes never call DAOs. Only services call DAOs.
2. All SQL uses PDO prepared statements. Never concatenate user input into SQL.
3. Secrets (DB credentials, JWT secret, API keys) live only in `backend/config/config.php`, which is not committed. Commit `config.example.php` instead.
4. Auth, role check, request logging and error handling are reusable middleware, not code copied into routes.
5. Every API response is JSON with the correct HTTP status (200, 201, 400, 401, 403, 404, 500). Never expose stack traces, SQL or file paths.
6. Frontend is a SPA: navigation without page reloads. From Milestone 5, only frontend service files make AJAX calls; views do not.
7. Do not generate code I cannot explain. Prefer simple, readable code with comments.
8. In Milestone 1 the Edit, Delete, Save and Look up buttons are placeholders. They are connected to the backend in Milestone 4.

## Folder structure

```
backend/   routes/ services/ dao/ middleware/ config/ logs/
frontend/  index.html  css/  js/  views/  assets/
docs/      AI_LOG.md  ERD.md
```

## Naming conventions

PHP classes: `PascalCase` (`BookService`, `BookDao`). Files match the class name.
PHP methods/variables: `camelCase`. DB tables and columns: `snake_case`, plural table names.
Routes: lowercase and plural (`/books`, `/books/@id`).
Frontend files: `kebab-case` or lowercase single words (`books.html`, `app.js`).
