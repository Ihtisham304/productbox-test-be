# productbox-test-be

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Ihtisham304/productbox-test-be.git
cd productbox-test-be
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a .env file in the root directory and add the following environment variables:

```bash
PROMISES_PORT=3000
ASYNC_PORT=3001
CALLBACKS_PORT=3002
```

## Running the Servers

### 1. Promises Implementation

```bash
npm run start:promises
```

Runs on port 3000.

### 1. Async.js Implementation

```bash
npm run start:async
```

Runs on port 3001.

### 1. Callbacks Implementation

```bash
npm run start:callbacks
```

Runs on port 3002.
