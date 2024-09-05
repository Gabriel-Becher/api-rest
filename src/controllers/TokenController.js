import Usuario from "../models/Usuario";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

class TokenController {
  async store(req, res) {
    const { email = "", senha = "" } = req.body;

    if (!email || !senha) {
      return res.status(401).json({ errors: ["Credenciais inválidas"] });
    }
    const user = await Usuario.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ errors: ["Usuário não existe"] });
    } else {
      if (!(await user.passwordIsValid(senha))) {
        return res.status(401).json({ errors: ["Senha inválida"] });
      }
    }
    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json(token);
  }
}

export default new TokenController();
