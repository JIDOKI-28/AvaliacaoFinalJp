const database = require('../config/database');
const cliente = require('../model/clientes')
const filme = require('../model/filmes')

class ModelFilmesLocados {
    constructor() {
        this.model = database.db.define('filmes_locados', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            idClientes: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: cliente,
                    key: "id"
                }
            },
            idFilmes: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: filme,
                    key: "id"
                }
            },
            dataLocacao: {
                type: database.db.Sequelize.DATE
            },
            dataDevolucao: {
                type: database.db.Sequelize.DATE,
                allowNull: true
            }
        })
        this.model.hasMany(filme, { foreignKey: 'idFilmes' });
        filme.belongsTo(this.model, { foreignKey: 'idFilmes' });

        this.model.hasMany(cliente, { foreignKey: 'idClientes' });
        cliente.belongsTo(this.model, { foreignKey: 'idClientes' });

    }
}
module.exports = new ModelFilmesLocados().model 