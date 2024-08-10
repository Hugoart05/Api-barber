import { DataTypes, Sequelize, Model, InferAttributes, InferCreationAttributes } from 'sequelize';
import DbContext from './DbContext';
import { IPlano } from './models/IPlanoModel';

export const sequelize = DbContext.getInstanceDb();

export class Usuario extends Model<InferAttributes<Usuario>, InferCreationAttributes<Usuario>> {
    id!: number;
    nome!: string;
    email!: string;
    password!: string;
    createdAt?: Date;
    updatedAt?: Date;
    planoid: number;
    plan?:Plano
}

Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 20
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            max: 100,
            notNull: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    planoid: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        sequelize,
        modelName: 'Usuario',
        tableName: 'usuarios',
        timestamps: true
    });

export class Estabelecimento extends Model {
    id!: number;
    nome!: string;
    usuarioid!: number;
    categoriaid!: number;
}

Estabelecimento.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuarioid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoriaid: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Estabelecimento',
    tableName: 'estabelecimentos',
    timestamps: false
});

export class Categoria extends Model {
    id!: number;
    nome!: string;
}

Categoria.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Categoria',
    tableName: 'categorias',
    timestamps: false
});

export class Funcionario extends Model {
    id!: number;
    nome!: string;
    usuarioid!: number;
    email!: string;
    estabelecimentoid!: number;

    addServico: (servico: Servico) => Promise<void>
    getServico: () => Promise<Servico[]>
    setServico: (servico: Servico[]) => Promise<void>
    removeServico: (servico: Servico | Servico[]) => Promise<void>
    hasServico: (servico: Servico) => Promise<boolean>
}

Funcionario.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuarioid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estabelecimentoid: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Funcionario',
    tableName: 'funcionarios',
    timestamps: false
});


export class Servico extends Model {
    id!: number;
    nome!: string;
    imageUrl!: string
    preco!: number;
    estabelecimentoid!: number;
}

Servico.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: true
    },
    imageurl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    preco: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false
    },
    estabelecimentoid: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        sequelize,
        modelName: 'Servico',
        tableName: 'servicos',
        timestamps: false
    });

export class Plano extends Model {
    id!: number
    nome!: string
    numeroMaximoEstabelecimento!: number
    numeroMaximoDePersonalizacao!: number
    maxMudancaNome!: number
    numeroMaximoServico!: number
    maxProdutosPermitidos!: number
}


Plano.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numeroMaximoEstabelecimento: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    numeroMaximoDePersonalizacao: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    maxMudancaNome: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    numeroMaximoServico: {
        type: DataTypes.INTEGER
    },
    maxProdutosPermitidos: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Plano',
    tableName: 'planos',
});


// Definir relacionamentos
Usuario.hasMany(Estabelecimento, { foreignKey: 'usuarioid' });
Estabelecimento.belongsTo(Usuario, { foreignKey: 'usuarioid' });

Estabelecimento.belongsTo(Categoria, { foreignKey: 'categoriaid' });
Categoria.hasMany(Estabelecimento, { foreignKey: 'categoriaid' });

Funcionario.belongsTo(Estabelecimento, { foreignKey: 'estabelecimentoid' });
Estabelecimento.hasMany(Funcionario, { foreignKey: 'estabelecimentoid' });

Estabelecimento.hasMany(Servico, { foreignKey: "estabelecimentoid" })
Servico.belongsTo(Estabelecimento, { foreignKey: "estabelecimentoid" })

Funcionario.belongsToMany(Servico, { through: "FuncionarioServico" })
Servico.belongsToMany(Funcionario, { through: "FuncionarioServico" })

Usuario.belongsTo(Plano, { foreignKey: "planoid",as:'plan' })
Plano.hasMany(Usuario, { foreignKey: "planoid", as:'usuarios' })