/*id 
nome 
valor 
data*/

const {Model, DataTypes} = require('sequelize')

const sequelize = require("../config/db");

class Crypto extends Model{

}

Crypto.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING, 
        allowNull: false
    },
    valor:{
        type: DataTypes.DOUBLE, 
        allowNull: false
    },
    data:{
        type: DataTypes.DATE, 
        allowNull: false
    },
    createdAt: {
        type: Date,
        allowNull: false
    },
    updatedAt: {
        type: Date,
        allowNull: false
    }
},{
    sequelize,
    modelName:'crypto',
    freezeTableName: true
})

module.exports = Crypto