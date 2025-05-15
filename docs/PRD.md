# PRD: Quirky Node.js Demo App

## Purpose
Demonstrate GitHub Copilot Agent Mode by building a fun, quirky Node.js service that delivers amusing animal facts.

## Scope
- Single Express endpoint `/fact`.
- CLI utility to fetch and display a fact.

## Features
1. **GET /fact**: Returns `{ "fact": string }` with a random quirky animal fact.
2. **CLI**: `npm run fact` to print a fact to the console.
3. **Unit Tests**: At least 80% coverage with Jest.

## User Stories
- As a curious visitor, I want a random quirky animal fact so I can be entertained.
- As a developer, I need clear setup and test instructions to run the demo smoothly.

## Acceptance Criteria
- Endpoint responds with HTTP 200 and valid JSON.
- CLI prints a fact without errors.
- Tests pass and coverage ≥ 80%.

## Tech Stack
- Node.js, Express.js, Jest

## Milestones
- **Day 1**: Scaffold project, endpoint, and basic tests.
- **Day 2**: Complete tests, README, and finalize commits.