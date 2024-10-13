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

  // Index
  async index(req, res) {
    try{
      const users = await User.findAll();
      res.json(users)
    }catch(e){
      return res.json(null)
    }
  }
  // Show
  async show(req, res) {
    try{
      const user = await User.findByPk(req.params.id);//Isso procura a Primary Key (id)
      res.json(user)
    }catch(e){
      return res.json(null)
    }
  }

  // Update
  async update(req, res) {
    try{
      if(!req.params.id){
        return res.status(400).json({errors: ["ID não enviado"]})
      }

      const user = await User.findByPk(req.params.id);//Isso procura a Primary Key (id)

      if(!user){
        return res.status(400).json({
          errors: ["Usuário não existe"]
        })
      }

      const novosDados = await user.update(req.body)

      res.json(novosDados)
    }catch(e){
      res.status(400).json({
        errors: e.errors.map(erro => erro.message),//pega todos os erros e coloca em um objeto contendo um array de erros
      })
    }
  }
  // Delete
  async delete(req, res) {
    try{
      if(!req.params.id){
        return res.status(400).json({errors: ["ID não enviado"]})
      }

      const user = await User.findByPk(req.params.id);//Isso procura a Primary Key (id)

      if(!user){
        return res.status(400).json({
          errors: ["Usuário não existe"]
        })
      }
      await user.destroy()
      res.json(user)
    }catch(e){
      res.status(400).json({
        errors: e.errors.map(erro => erro.message),//pega todos os erros e coloca em um objeto contendo um array de erros
      })
    }
  }
}


export default new UserController();
