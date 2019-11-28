import {IFurnitureFactory} from "./interfaces/furniture-factory.interface";
import {IFurnitureChair} from "./interfaces/furniture-chair.interface";
import {IFurnitureTable} from "./interfaces/furniture-table.interface";

export class FurnitureFactory implements IFurnitureFactory {
    buildChair(): IFurnitureChair {
        return undefined;
    }

    buildTable(): IFurnitureTable {
        return undefined;
    }
}
