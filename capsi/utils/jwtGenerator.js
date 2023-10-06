const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(user_id) {
    const data = {
        user: {
            id: user_id
        }
    };
    return jwt.sign(data, process.env.jwtSecret, { expiresIn: "1h" });
}

module.exports = jwtGenerator;