import Sequelize , { Model } from 'sequelize';

export default class Foto extends Model {
  static init(sequelize){
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate:{
          notEmpty:{
            msg: 'Campo não pode ficar vazio.'
          }
        }
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate:{
          notEmpty:{
            msg: 'Campo não pode ficar vazio.'
          }
        }
      },
    },{
      sequelize,
      tableName: 'photos',
    });
    return this;
  }

  static associate(models){
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id'})//Utilizando chave estrangeira para vincular entre as tabelas.
  }
}
