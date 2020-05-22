require('dotenv').config()

var ev = process.env.DB_HOST || "localhost"

console.log(ev)