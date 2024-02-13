// server.js

const express = require('express');
const userRoutes = require('./modules/users/routes/user.routes');
const userDetailsRoutes = require('./modules/userDetails/routes/userDetails.routes');
const userSalaryRoutes = require('./modules/userSalary/routes/userSalary.routes')

const app = express();
app.use(express.json());

app.use(userRoutes, userDetailsRoutes, userSalaryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
