import Aluno from "../models/Aluno";
import Foto from "../models/Foto";

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        attributes: [
          "id",
          "nome",
          "sobrenome",
          "email",
          "idade",
          "peso",
          "altura",
        ],
        order: [["created_at", "DESC"]],
      });
      res.status(200).json(alunos);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      res.status(200).json(aluno);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }

  async show(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      res.status(200).json(aluno);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }

  async update(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({ errors: ["Aluno não encontrado"] });
      }
      const alunoAtualizado = await aluno.update(req.body);
      return res.status(200).json(alunoAtualizado);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((erro) => erro.message) });
    }
  }

  async delete(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      console.log(aluno);
      if (!aluno) {
        return res.status(400).json({ errors: ["Aluno não encontrado"] });
      }
      await aluno.destroy();
      return res.status(200).json({ apagado: true });
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((erro) => erro.message) });
    }
  }
}

export default new AlunoController();
