import {Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table
export class Book extends Model {

    @Column({primaryKey: true})
    id: number;
    @Column
    title: string;

    @Column
    author: string;
//id, , title, rank, small_image_url, medium_image_url, price, nb_of_pages, year_of_publication, author, description
    @Column
    isbn_13: string;

    @Column
    rank: number;

    @Column
    small_image_url: string;

    @Column
    medium_image_url: string;

    @Column(DataType.DECIMAL)
    price: number;
    @Column
    nb_of_pages: number;

    @Column
    year_of_publication: number;


    @Column
    description: string;

}
