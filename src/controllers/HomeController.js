import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    return res.status(200).json("Ok");
  }
}

export default new HomeController();
