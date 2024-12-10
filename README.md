# SBA_319
Sneaker Review API

A RESTful API for managing sneaker collections, user authentication, and commenting on sneakers. Built with Node.js, Express, and MongoDB.
Features

    User registration and login
    Add, update, and delete sneakers
    Comment on sneakers
    Track sneaker status (Owned, Wishlist)

    The server will be available at http://localhost:5000.

API Endpoints
User Routes

    POST /api/users: Register a new user
    GET /api/users: Get all users
    GET /api/users/:id: Get a user by ID
    PUT /api/users/:id: Update user info
    DELETE /api/users/:id: Delete user

Sneaker Routes

    POST /api/sneakers: Add a new sneaker
    GET /api/sneakers: Get all sneakers
    GET /api/sneakers/:id: Get a sneaker by ID
    PUT /api/sneakers/:id: Update a sneaker
    DELETE /api/sneakers/:id: Delete a sneaker

Comment Routes

    POST /api/comments: Add a comment to a sneaker
    GET /api/comments: Get all comments
    GET /api/comments/:id: Get a comment by ID
    PUT /api/comments/:id: Update a comment
    DELETE /api/comments/:id: Delete a comment