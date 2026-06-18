# Multi-Tenant CRM API

CRM API that supports multiple companies.

## Solved Problem

This project demonstrates a practical portfolio implementation for crm api that supports multiple companies.

## Features

- Tenant management
- Company records
- Contact records
- Lead management
- Opportunity management
- Activity history

## Technologies

- Category: dotnet-api
- Template: api-service
- Difficulty: large

## Architecture

The project is organized around a small but expandable production-style structure:

- `src/` contains the application source.
- `tests/` contains automated checks.
- `docs/` contains architecture and usage notes.
- `.github/workflows/` contains the CI workflow.

## Installation

Clone the repository and use the command documented for the selected technology stack.

## Environment Variables

No secrets are committed. Use local environment variables or a private `.env` file when integrating real services.

## API Usage Examples

See `docs/usage.md` for example flows and commands.

## Test Commands

Run the test command configured in the CI workflow for this project type.

## Screenshots

Screenshots can be added under `docs/screenshots/` after the UI or API demo is available.

## Planned Development Stages

- chore: initialize project structure
- feat: add core domain model
- feat: configure persistence or state layer
- feat: implement main workflow
- feat: add public interface
- test: add automated coverage
- docs: add installation and usage documentation
- ci: add build and test workflow
- feat: add validation rules for contact records
- feat: add reporting view for lead management
- feat: add export or integration support for opportunity management
- refactor: improve service boundaries for activity history
- fix: handle edge cases for tenant management
- perf: improve query or request performance for company records
- test: add integration tests for contact records
- docs: document architecture decisions for lead management
- chore: add sample data for opportunity management
- feat: add audit logging for activity history
- feat: add notification flow for tenant management
- test: add regression coverage for company records
- ci: publish quality report for contact records
- docs: add screenshots and roadmap for lead management
- chore: prepare release notes for opportunity management
- feat: add advanced dashboard metrics for activity history

## Future Improvements

- Add production deployment notes.
- Add observability and monitoring examples.
- Add richer integration tests.
