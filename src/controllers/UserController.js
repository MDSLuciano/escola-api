import User from "../models/User"

class UserController {
  async store(req, res) {
    try{
      const novoUser = await User.create(req.body)
      res.json(novoUser)
    } catch(e){
        res.status(400).json({
          errors: e.errors.map(erro => erro.message),//pega todos os erros e coloca em um objeto contendo um array de erros

        })
    }

  }
}


export default new UserController();
