import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      res.status(200).json(alunos);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }
}

export default new HomeController();
