import {IFurnitureTable} from "./furniture-table.interface";
import {IFurnitureChair} from "./furniture-chair.interface";

export interface IFurnitureFactory {
    buildTable(): IFurnitureTable;
    buildChair(): IFurnitureChair;
}
