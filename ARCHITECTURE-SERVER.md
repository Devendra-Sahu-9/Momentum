🚀 Momentum

Clean Architecture implementation using CQRS + MediatR + FluentValidation + AutoMapper + EF Core

📌 Overview

Momentum is built using Clean Architecture principles with strict separation of concerns and a scalable enterprise-ready structure.

This project implements:

✅ Clean Architecture

✅ CQRS (Command Query Responsibility Segregation)

✅ MediatR (Mediator Pattern)

✅ FluentValidation

✅ AutoMapper

✅ Entity Framework Core

✅ Dependency Rule Enforcement

🏗️ Solution Structure
Momentum.sln
│
├── Momentum.API → Presentation Layer
├── Momentum.Application → Application Layer (CQRS + MediatR)
├── Momentum.Domain → Core Business Layer
└── Momentum.Infrastructure → External Implementations
🧠 Architecture Principles
🔁 Dependency Rule

Dependencies must point inward.

API → Application → Domain
Infrastructure → Application → Domain

❌ Domain must never depend on Application or Infrastructure
❌ Application must never depend on Infrastructure

📂 Layer Responsibilities
🟣 1. Domain Layer (Momentum.Domain)

Contains core business logic only.

Includes:

Entities

Enums

Value Objects

Domain Exceptions

Business Rules

Must NOT include:

EF Core

MediatR

Controllers

AutoMapper

External libraries

🔵 2. Application Layer (Momentum.Application)

Implements:

CQRS

MediatR Handlers

Validation

Mapping

Interfaces for infrastructure

Structure
Application
├── CQRS
│ ├── Commands
│ ├── Queries
│ └── Behaviors
├── DTOs
├── Validators
├── Mappings
└── Interfaces
⚡ CQRS Implementation
🟢 Commands

Modify system state

Return minimal result (ID / Unit)

Never return full entities

Example:

public record CreateUserCommand(string Email) : IRequest<Guid>;
🔵 Queries

Read-only operations

Return DTOs

No side effects

Example:

public record GetUserByIdQuery(Guid Id) : IRequest<UserDto>;
🧩 MediatR Flow
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

Controllers never directly call services or repositories.

🔄 Pipeline Behaviors

Used for cross-cutting concerns:

Validation

Logging

Performance monitoring

Transactions

Execution order:

Request
↓
ValidationBehavior
↓
Handler
↓
Response
✅ Validation (FluentValidation)

Validation is handled via MediatR pipeline behavior.

Example:

public class CreateUserValidator : AbstractValidator<CreateUserCommand>
{
public CreateUserValidator()
{
RuleFor(x => x.Email)
.NotEmpty()
.EmailAddress();
}
}
🔁 Mapping (AutoMapper)

Maps:

Entity → DTO

DTO → Entity

Mapping profiles are located in:

Application/Mappings
🔴 3. Infrastructure Layer (Momentum.Infrastructure)

Handles external concerns:

EF Core DbContext

Repository implementations

Third-party services

File storage

Email providers

Structure
Infrastructure
├── Persistence
├── Repositories
└── Services
🟡 4. API Layer (Momentum.API)

Handles:

Controllers

Middleware

Authentication

Dependency Injection

Swagger

Controllers must:

Only use IMediator

Never access DbContext directly

Never contain business logic

🔁 Full Request Lifecycle
Client
↓
Controller (API)
↓
IMediator
↓
Pipeline Behaviors
↓
Handler (Application)
↓
Repository Interface
↓
Infrastructure
↓
Database
🔒 Strict Architectural Rules

Domain must not reference any other project.

Application must not reference Infrastructure.

Controllers must not contain business logic.

Handlers must not perform validation directly.

Validation must use FluentValidation.

Queries must not modify state.

Commands must not return full entities.

DTOs must not expose EF entities.

🧪 Testing Strategy
Unit Tests

Domain entities

Command handlers

Query handlers

Mock:

Repository interfaces

External services

Integration Tests

Infrastructure

Database interactions

🚀 Getting Started
1️⃣ Restore packages
dotnet restore
2️⃣ Apply migrations
dotnet ef database update
3️⃣ Run API
dotnet run --project Momentum.API
📈 Scalability Strategy

As the system grows:

Add new Commands/Queries in Application layer

Add new Pipeline Behaviors for cross-cutting concerns

Introduce caching layer if needed

Add event-driven architecture if required

🎯 Why This Architecture?
Benefit Explanation
Maintainable Clear separation of concerns
Testable Handlers isolated
Scalable Modular design
Replaceable Infrastructure can be swapped
Clean No tight coupling
📌 Tech Stack

.NET 8

MediatR

FluentValidation

AutoMapper

Entity Framework Core

SQL Server

🏁 Final Note

Momentum follows enterprise-grade architectural standards and is designed for long-term maintainability and scalability.
