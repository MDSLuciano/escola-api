import Aluno from "../models/Aluno";
import Photo from "../models/Photo";

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ["id","nome","sobrenome", "email","idade","peso", "altura",],
      order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
      include: {
        model: Photo,
        attributes: ['filename'],
      }
    });
    res.json(alunos)
  }

  async store(req, res){ 
    try{
      const aluno = await Aluno.create(req.body)

      return res.json(aluno)

    }catch(e){
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      })
    }


   }
  async show(req, res){
    try{
      const { id } = req.params;

      if(!id){
        return res.status(400).json({
          errors: ["Missing ID"]
        })
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ["id","nome","sobrenome", "email","idade","peso", "altura",],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['filename'],
        }
      });

      if(!aluno) {
        if(!id){
          return res.status(400).json({
            errors: ["Student does not exist"],
          })
        }
      };

      return res.json(aluno);

    }catch(e){
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      })
    }
    
  }
  async delete(req, res){
    try{
      const { id } = req.params;

      if(!id){
        return res.status(400).json({
          errors: ["Missing ID"]
        })
      };

      const aluno = await Aluno.findByPk(id);

      if(!aluno) {
        if(!id){
          return res.status(400).json({
            errors: ["Student does not exist"],
          })
        }
      };

      await aluno.destroy();

      return res.json({ deleted: true });

    }catch(e){
      if (e.errors && Array.isArray(e.errors)) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      } else {
        return res.status(400).json({
          errors: [e.message],
        });
      }
    }
  }
  async update(req, res){
    try{
      const { id } = req.params;

      if(!id){
        return res.status(400).json({
          errors: ["Missing ID"]
        })
      }

      const aluno = await Aluno.findByPk(id)

      if(!aluno) {
        if(!id){
          return res.status(400).json({
            errors: ["Student does not exist"],
          })
        }
      }

      const alunoAtualizado = await aluno.update(req.body)
      return res.json(alunoAtualizado)

    }catch(e){
      if (e.errors && Array.isArray(e.errors)) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      } else {
        return res.status(400).json({
          errors: [e.message],
        });
      }
    }
  }

}

export default new AlunoController();
