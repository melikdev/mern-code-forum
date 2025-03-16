# Coding Forum

A full-stack coding forum where developers can ask, answer, and discuss programming-related questions. Built with modern web technologies for a seamless user experience.

## Features

- User authentication via Clerk
- Ask, edit, and delete questions
- Answer questions and engage in discussions
- Optimistic UI updates using React Query
- Responsive and modern UI with ShadCN and Tailwind CSS

## Tech Stack

### Frontend

- React
- TypeScript
- React Query
- ShadCN
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Clerk (authentication)

## Installation

### Prerequisites

- Node.js (>= 16)
- MongoDB
- Clerk account for authentication

### Setup

1. Clone the repository:

   ```sh
   git clone https://github.com//melikdev/mern-coding-forum.git
   cd coding-forum
   ```

2. Install dependencies for both frontend and backend:

   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Create a `.env` files as it is in the `.env.example` file and fill in the required values:

4. Start the development servers:

   ```sh
   # In one terminal (backend)
   cd server
   npm run dev

   # In another terminal (frontend)
   cd client
   npm run dev
   ```

5. Open http\://localhost:{port} in your browser to view the app.

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.
