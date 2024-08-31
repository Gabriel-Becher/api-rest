import Usuario from "../models/Usuario";

class UserController {
  async store(req, res) {
    try {
      const novoUsuario = await Usuario.create({
        nome: "Jo",
        email: "joaoburger@hotmail.com",
        password: "123456",
      });
      res.status(200).json({
        dado: novoUsuario,
      });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
