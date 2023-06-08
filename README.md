# My Personal Website

This is a repository for my personal website built with React and Sanity.io.

## About

This website is built using React, a popular JavaScript library for building user interfaces, and Sanity.io, a platform for structured content with a powerful API. The content management is handled through Sanity Studio, allowing for easy updates and maintenance.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed on your local development machine:

- Node.js and npm. Node is a JavaScript runtime. Npm is a Node package manager. [Download them here](https://nodejs.org/).
- Sanity CLI. This is used to start, manage, and export a Sanity project. Install it via npm using `npm install -g @sanity/cli`.

### Installation

1. **Clone the Repository**

   Start by cloning the repository to your local machine:

   ```bash
   git clone https://github.com/sc-stack/Personal-Website.git
   ```

2. **Install Node Packages**

   Navigate into the 'website' directory and install the required packages:

   ```bash
   cd frontend
   npm install
   ```

3. **Setup Sanity**

   Next, navigate into the 'studio' directory and install the required packages:

   ```bash
   cd backend
   npm install
   ```

   Now, run the Sanity initiation:

   ```bash
   npm run dev
   ```

   Follow the instructions. When asked which dataset configuration to use, select `production`.

   **Note:** You will need to be logged in to your Sanity account. If you're not, the CLI will ask you to log in.

4. **Start the Development Server**

   Now, navigate back to the 'website' directory and run the development server:

   ```bash
   cd frontend
   npm start
   ```

   The React application will start on `localhost:3000` (or another port if you have it set differently).

   And, in a new terminal window, navigate to the 'studio' directory and start the Sanity server:

   ```bash
   cd backend
   npm run dev
   ```

   The Sanity Studio will start on `localhost:3333`.

Now, you're all set to begin development!

## Deploying

Deployment will depend on your host. Be sure to check their specific instructions for deploying React and Sanity applications.

## Built With

- [React](https://reactjs.org/)
- [Sanity.io](https://www.sanity.io/)

## Authors

[sc-stack](https://github.com/sc-stack)


