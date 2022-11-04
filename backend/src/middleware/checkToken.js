const jwt = require("jsonwebtoken");

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ error: "Acesso negado" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Acesso negado" });

  try {
    const secret = process.env.JWT_SECRET;
    jwt.verify(token, secret);
    next();
  } catch (e) {
    return res.status(400).json({ error: "Token inválido" });
  }
}

module.exports = checkToken;
