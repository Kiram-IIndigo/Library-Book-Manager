```mermaid
erDiagram
    USERS ||--o{ LOANS : borrows
    BOOKS ||--o{ LOANS : "is lent in"
    AUTHORS ||--o{ BOOKS : writes
    CATEGORIES ||--o{ BOOKS : groups

    USERS {
        int id PK
        string full_name
        string email UK
        string password_hash
        string role "admin or user"
        datetime created_at
    }
    AUTHORS {
        int id PK
        string name
        string country
        text bio
    }
    CATEGORIES {
        int id PK
        string name UK
        string description
    }
    BOOKS {
        int id PK
        string title
        string isbn UK
        int pages
        string cover_url
        text description
        int copies_available
        int author_id FK
        int category_id FK
    }
    LOANS {
        int id PK
        int user_id FK
        int book_id FK
        date loan_date
        date due_date
        date returned_date
        string status "active, returned, overdue"
    }
```

One author writes many books (Authors 1 to N Books).
One category groups many books (Categories 1 to N Books).
One user has many loans (Users 1 to N Loans).
One book appears in many loans (Books 1 to N Loans).
Users and Books are therefore many-to-many through Loans.
