import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import DbContext from "../DbContext";
import { Estabelecimento, Plano } from "../db";

export interface IUsuario {
    id: number,
    nome: string,
    email: string,
    password: string,
    planoid: number
    createdAt?: Date,
    updatedAt?: Date
}

