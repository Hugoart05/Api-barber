import { Sequelize } from "sequelize";

class DbContext {
    private static dbinstance: Sequelize;
    constructor() {
    }

    public static getInstanceDb() {
        if (!DbContext.dbinstance) {
            DbContext.dbinstance = new Sequelize('buscafacil', 'root', '123456', {
                host: 'localhost',
                port: 3306,
                dialect: 'mysql'
            })
        }
        return DbContext.dbinstance
    }
}

export default DbContext