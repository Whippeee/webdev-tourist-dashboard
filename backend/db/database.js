const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

const db = new sqlite3.Database("./db/tourist.db");

const schema = fs.readFileSync("./db/schema.sql").toString();

db.exec(schema, err => {
  if (err) console.log("DB error", err);
  else console.log("Database ready");
});

module.exports = db;
