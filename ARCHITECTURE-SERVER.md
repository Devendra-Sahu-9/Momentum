# 🚀 Momentum

Clean Architecture implementation using CQRS + MediatR + FluentValidation + AutoMapper + EF Core.

---

# 📌 Overview

Momentum follows Clean Architecture principles with strict separation of concerns and enterprise-ready scalability.

Implemented Patterns & Tools:

- Clean Architecture
- CQRS (Command Query Responsibility Segregation)
- MediatR (Mediator Pattern)
- FluentValidation
- AutoMapper
- Entity Framework Core
- Dependency Rule Enforcement

---

# 🏗️ Solution Structure

```
Momentum.sln
│
├── Momentum.API              → Presentation Layer
├── Momentum.Application      → Application Layer (CQRS + MediatR)
├── Momentum.Domain           → Core Business Layer
└── Momentum.Infrastructure   → External Implementations
```

---

# 🧠 Architecture Principles

## Dependency Rule

Dependencies must always point inward.

Allowed:

API → Application → Domain  
Infrastructure → Application → Domain  

Not Allowed:

Domain → Application  
Domain → Infrastructure  
Application → Infrastructure  
Application → API  

The Domain layer must never depend on any other layer.

---

# 📂 Layer Responsibilities

---

## 🟣 1. Domain Layer (Momentum.Domain)

Contains core business logic only.

Includes:
- Entities
- Enums
- Value Objects
- Domain Exceptions
- Business Rules

Must NOT include:
- EF Core
- MediatR
- Controllers
- AutoMapper
- External libraries

Example Entity:

```csharp
public class User
{
    public Guid Id { get; private set; }
    public string Email { get; private set; }

    public User(string email)
    {
        Email = email ?? throw new ArgumentNullException(nameof(email));
    }
}
```

---

## 🔵 2. Application Layer (Momentum.Application)

Contains:
- CQRS implementation
- MediatR Handlers
- Validation
- Mapping
- Interfaces for infrastructure

Structure:

```
Application
├── CQRS
│   ├── Commands
│   ├── Queries
│   └── Behaviors
├── DTOs
├── Validators
├── Mappings
└── Interfaces
```

---

# ⚡ CQRS Pattern

## Commands
- Modify system state
- Return minimal result (ID or Unit)
- Never return full entities

Example:

```csharp
public record CreateUserCommand(string Email) : IRequest<Guid>;
```

---

## Queries
- Read-only operations
- Return DTOs
- No side effects

Example:

```csharp
public record GetUserByIdQuery(Guid Id) : IRequest<UserDto>;
```

---

# 🧩 MediatR Request Flow

```
Controller
    ↓
IMediator
    ↓
Pipeline Behaviors
    ↓
Handler
    ↓
Repository Interface
    ↓
Infrastructure Implementation
    ↓
Database
```

Controllers must never directly call repositories or DbContext.

---

# 🔄 Pipeline Behaviors

Used for cross-cutting concerns:
- Validation
- Logging
- Performance tracking
- Transactions

Execution Order:

```
Request
   ↓
ValidationBehavior
   ↓
Handler
   ↓
Response
```

---

# ✅ Validation (FluentValidation)

Validation occurs before handler execution.

Example:

```csharp
public class CreateUserValidator : AbstractValidator<CreateUserCommand>
{
    public CreateUserValidator()
    {
        RuleFor(x => x.Email)
            .NotEmpty()
            .EmailAddress();
    }
}
```

---

# 🔁 Mapping (AutoMapper)

Used to map:

- Entity → DTO
- DTO → Entity

Mapping profiles are located in:

Application/Mappings

---

## 🔴 3. Infrastructure Layer (Momentum.Infrastructure)

Handles external concerns:

- EF Core DbContext
- Repository implementations
- Third-party services
- Email providers
- File storage

Structure:

```
Infrastructure
├── Persistence
├── Repositories
└── Services
```

---

## 🟡 4. API Layer (Momentum.API)

Responsible for:

- Controllers
- Middleware
- Authentication
- Dependency Injection
- Swagger configuration

Rules:
- Controllers use IMediator only
- No business logic inside controllers
- No direct DbContext access

Example Controller:

```csharp
[ApiController]
[Route("api/users")]
public class UsersController : ControllerBase
{
    private readonly IMediator _mediator;

    public UsersController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost]
    public async Task<IActionResult> Create(CreateUserCommand command)
    {
        var id = await _mediator.Send(command);
        return Ok(id);
    }
}
```

---

# 🔒 Architectural Rules (Strict)

1. Domain must not reference any other project.
2. Application must not reference Infrastructure.
3. Controllers must not contain business logic.
4. Handlers must not perform validation manually.
5. Validation must use FluentValidation.
6. Queries must not modify data.
7. Commands must not return full entities.
8. DTOs must not expose EF Core entities.

---

# 🧪 Testing Strategy

Unit Tests:
- Domain entities
- Command handlers
- Query handlers

Mock:
- Repository interfaces
- External services

Integration Tests:
- Infrastructure layer
- Database interactions

---

# 🚀 Getting Started

Restore packages:

```
dotnet restore
```

Apply migrations:

```
dotnet ef database update
```

Run API:

```
dotnet run --project Momentum.API
```

---

# 📈 Scalability Strategy

As the system grows:

- Add new Commands/Queries in Application layer
- Add new Pipeline Behaviors
- Introduce caching layer if required
- Implement event-driven architecture if needed

---

# 🎯 Why This Architecture?

- High maintainability
- Clear separation of concerns
- Scalable structure
- Testable business logic
- Replaceable infrastructure
- Enterprise-ready foundation

---

# 🏁 Final Note

Momentum is structured for long-term scalability, maintainability, and production-grade architecture standards.
