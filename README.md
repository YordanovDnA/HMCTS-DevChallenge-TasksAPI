# HMCTS-DevChallenge-TasksAPI

A **Node.js** and **Express** RESTful API for managing tasks.  
Part of the **Junior Software Developer** coding challenge for **HMCTS**.

> For the front-end repository, visit: [HMCTS-DevChallenge-Front-end](https://github.com/YordanovDnA/HMCTS-DevChallenge-Tasks-Front-end)

---

## Dependencies used

- **_Express_** – Web server framework
- **_Mongoose_** – MongoDB object modeling
- **_dotenv_** – Environment variable management
- **_Cors_** – Middleware for Cross-Origin Resource Sharing
- **_Jest_** and **_Supertest_** – For testing

---

## Installation and Setup

Clone the repository and install dependencies:

```bash
npm install
```

|Make sure you have a running instance of MongoDB (local or cloud like MongoDB Atlas).

Create a .env file in the root directory and add your environment variables:

```bash
MONGO_URI=your_mongo_db_connection_string
PORT=5000
```

## Running the API

Start the development server with:

```bash
npm run dev
```

**_(uses nodemon for automatic server restarts)_**

Or, to start normally:

```bash
npm start
```

The server will run by default on:
http://localhost:5000

## API endpoints

| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| GET    | /api/v1/ctm/tasks     | Fetch all tasks     |
| POST   | /api/v1/ctm/tasks     | Create a new task   |
| PATCH  | /api/v1/ctm/tasks/:id | Update task status  |
| DELETE | /api/v1/ctm/tasks/:id | Delete a task by ID |

## Running tests

```bash
npm run test
```

This will run backend unit and integration tests using Jest and Supertest.
