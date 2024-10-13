import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Machado',
      email: 'mariamachado.com',
      idade: 32,
      peso: 132,
      altura: 2.4,

    })
    res.json(novoAluno)
  }
}

export default new HomeController();
