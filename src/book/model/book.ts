import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table
export class Book extends Model {

    @Column({primaryKey: true})
    id: number;
    @Column
    title: string;

    @Column
    author: string;

}
