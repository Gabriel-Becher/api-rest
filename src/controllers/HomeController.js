import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Joao",
      sobrenome: "Burger",
      email: "joaoburger@hotmail.com",
      idade: 18,
      peso: 85.6,
      altura: 1.72,
    });
    res.status(200).json({
      dado: novoAluno,
    });
  }
}

export default new HomeController();
