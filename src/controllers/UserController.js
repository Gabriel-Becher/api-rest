import Usuario from "../models/Usuario";

class UserController {
  async store(req, res) {
    try {
      const novoUsuario = await Usuario.create({
        nome: req.body.nome,
        email: req.body.email,
        password: String(req.body.password),
      });
      return res.status(200).json({
        message: "Usuário cadastrado com sucesso",
        Usuario: novoUsuario,
      });
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll({
        attributes: ["id", "nome", "email"],
      });
      res.status(200).json(usuarios);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }

  async show(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) {
        return res.status(400).json({ error: "Usuário não encontrado" });
      }
      console.log(usuario);
      const { id, nome, email } = usuario;
      res.status(200).json({ id, nome, email });
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }

  async update(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.userId);
      if (!usuario) {
        return res.status(400).json({
          errors: ["Usuário não encontrado"],
        });
      }
      const novoUsuario = await usuario.update(req.body);
      const { id, nome, email } = novoUsuario;
      res.status(200).json({ id, nome, email });
    } catch (e) {
      res.status(400).json({ erro: e });
    }
  }

  async delete(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.userId);
      if (!usuario) {
        return res.status(400).json({
          errors: ["Usuário não encontrado"],
        });
      }
      await usuario.destroy();
      res.status(200).json({
        message: "Usuário deletado com sucesso",
      });
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }
}

export default new UserController();
