# Quirky Node.js Demo App

A fun, quirky Express.js service that delivers amusing animal facts through a REST API and CLI.

## Features

- **REST API** - Get random animal facts from the `/fact` endpoint
- **CLI Tool** - Print a random fact to your terminal
- **Well Tested** - Complete with Jest tests and 80%+ coverage

## Requirements

- Node.js >= 18
- npm

## Installation

```bash
# Clone the repository
git clone https://github.com/rdwr-taly/copilot-101.git
cd copilot-101

# Install dependencies
npm install
```

## Usage

### Starting the Server

```bash
npm start
```

This will start the server at http://localhost:3000

### API Endpoints

- **GET /** - Returns basic app info
- **GET /fact** - Returns a random quirky animal fact in JSON format:
  ```json
  {
    "fact": "Otters hold hands while sleeping to avoid drifting apart."
  }
  ```

### Using the CLI

To get a random fact in your terminal:

```bash
npm run fact
```

## Development

### Running Tests

```bash
npm test
```

This will run Jest tests and show coverage metrics.

## Project Structure

```
├── app.js                # Main Express application
├── src/
│   ├── facts.js          # Animal facts service
│   └── cli.js            # CLI utility
├── __tests__/
│   └── app.test.js       # Tests for the application
└── docs/
    └── PRD.md            # Product Requirements Document
```

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Module System**: ECMAScript Modules
- **Testing**: Jest