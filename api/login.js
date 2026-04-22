export default function handler(req, res) {
  const USERS = {
    ahmed: { password: "1234", folder: "ahmed" },
    ali: { password: "1234", folder: "ali" }
  };

  const { username, password } = req.body;

  const user = USERS[username];

  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid login" });
  }

  res.json({ folder: user.folder });
}