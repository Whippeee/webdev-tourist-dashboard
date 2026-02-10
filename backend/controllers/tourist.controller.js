const db = require("../db/database");

exports.register = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const query =
    "INSERT INTO tourists (name, email, password) VALUES (?, ?, ?)";

  db.run(query, [name, email, password], function (err) {
    if (err) {
      return res.status(400).json({ message: "Email already exists" });
    }
    res.json({
      message: "Tourist registered successfully",
      tourist_id: this.lastID
    });
  });
};
