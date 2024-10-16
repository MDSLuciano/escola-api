import User from "../models/User"

class UserController {
  async store(req, res) {
    try{
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser
      res.json({ id, nome, email });
    } catch(e){
        res.status(400).json({
          errors: e.errors.map(erro => erro.message),//pega todos os erros e coloca em um objeto contendo um array de erros
        })
    }
  }

  // Index
  async index(req, res) {
    try{
      const users = await User.findAll({ attributes: ['id','nome', 'email'] });
      res.json(users)
    }catch(e){
      return res.json(null)
    }
  }
  // Show
  async show(req, res) {
    try{
      const user = await User.findByPk(req.params.id);//Isso procura a Primary Key (id)
      
      const { id, nome, email } = user
      res.json({ id, nome, email})
    }catch(e){
      return res.json(null)
    }
  }

  // Update
  async update(req, res) {
    try{

      const user = await User.findByPk(req.userId);//Isso procura a Primary Key (id)

      if(!user){
        return res.status(400).json({
          errors: ["Usuário não existe"]
        })
      }

      const novosDados = await user.update(req.body)
      const { id, nome, email } = novosDados
      res.json({ id, nome, email })
    }catch(e){
      res.status(400).json({
        errors: e.errors.map(erro => erro.message),//pega todos os erros e coloca em um objeto contendo um array de erros
      })
    }
  }
  // Delete
  async delete(req, res) {
    try{

      const user = await User.findByPk(req.userId);//Isso procura a Primary Key (id)

      if(!user){
        return res.status(400).json({
          errors: ["Usuário não existe"]
        })
      }
      await user.destroy()
      res.json(null)
    }catch(e){
      res.status(400).json({
        errors: e.errors.map(erro => erro.message),//pega todos os erros e coloca em um objeto contendo um array de erros
      })
    }
  }
}


export default new UserController();
