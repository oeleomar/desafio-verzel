const routes = require("express").Router();
const jwt = require("jsonwebtoken");

routes.post("/login", (req, res) => {
  const { user, password } = req.body;

  if (!user || !password)
    return res.status(400).json({ error: "Campos inválidos" });

  if (
    process.env.ADMIN_USER !== user ||
    process.env.ADMIN_PASSWORD !== password
  )
    return res
      .status(422)
      .json({ error: "Acesso não autorizado, verifique usuário e senha" });

  try {
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign({ user }, secret, { expiresIn: 60 * 10 });
    res.status(200).json({ msg: "Autenticado com sucesso", token });
  } catch (e) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = routes;
