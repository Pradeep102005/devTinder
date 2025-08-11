const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// 1️⃣ Basic GET route
app.get('/', (req, res) => {
    res.send('Welcome to the Routes Playground 🚀');
});

// 2️⃣ GET route with path parameter
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is ${userId}`);
});

// 3️⃣ GET route with query parameter
app.get('/search', (req, res) => {
    const keyword = req.query.keyword;
    res.send(`You searched for: ${keyword}`);
});

// 4️⃣ POST route (handle request body)
app.post('/user', (req, res) => {
    const { firstName, lastName } = req.body;
    res.send(`User ${firstName} ${lastName} created successfully!`);
});

// 5️⃣ PUT route (update resource)
app.put('/user/:id', (req, res) => {
    const userId = req.params.id;
    const { firstName, lastName } = req.body;
    res.send(`User ${userId} updated to ${firstName} ${lastName}`);
});

// 6️⃣ DELETE route
app.delete('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ${userId} deleted successfully!`);
});

// 7️⃣ Route chaining
app.route('/book')
    .get((req, res) => res.send('Get book details'))
    .post((req, res) => res.send('Add a new book'))
    .put((req, res) => res.send('Update the book'));

// 8️⃣ 404 handling route (must be last)
app.use((req, res) => {
    res.status(404).send('Route not found ❌');
});

// Start server
app.listen(7777, () => {
    console.log('Server running on http://localhost:7777');
});
