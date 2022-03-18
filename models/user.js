'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    nome: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    genero: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    celular: DataTypes.STRING,
    apelido: DataTypes.STRING,
    eh_admin: DataTypes.BOOLEAN,
    esta_ativo: DataTypes.BOOLEAN,
    foto_perfil: DataTypes.STRING,
    bio: DataTypes.STRING,
    site: DataTypes.STRING,
    esta_verificado: DataTypes.BOOLEAN,
    eh_marca: DataTypes.BOOLEAN,
    privado: DataTypes.BOOLEAN
  }, {
    sequelize, // config de conexao
    modelName: 'User', // nome da model.
    tableName: 'usuarios', //nome da tabela
    timestamps: false // nao precisamos de timestamps
  });
  return User;
};