# Library Book Manager

IT 2001 Web Programming project. A single-page web application for managing a small library: books, authors, categories and loans.

## Description

Librarians (admins) manage the catalogue and loans. Members (users) browse books, borrow them and see their own loans.

## Tech stack

PHP + FlightPHP (REST API), PDO, MySQL, HTML/CSS/JS, Bootstrap 5. Auth with JWT.

## Entities and relationships

Users, Authors, Categories, Books, Loans. See [docs/ERD.md](docs/ERD.md).
Author 1:N Books, Category 1:N Books, User 1:N Loans, Book 1:N Loans.

## External API

**Open Library** (https://openlibrary.org). When an admin adds a book, entering an ISBN fetches the cover, description and page count. If the API is down, the form still works manually.

## Run the frontend locally (Milestone 1)

The views are loaded with `fetch`, so opening `index.html` by double-click will not work.

1. Install the **Live Server** extension in VS Code.
2. Right-click `frontend/index.html` and choose **Open with Live Server**.
