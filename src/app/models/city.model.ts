import { geography } from "./geography.model";
import { history } from "./history.model";
import { hotel } from "./hotel.model";

export class City {
    id: number;
    name: string;
    description: string;
    imagePath: string;
    history: history[];
    geography: geography[];
    // economy: string;
    // hotels: hotel[];

    constructor(id: number, name: string, description: string, imagePath: string, history: history[], geography: geography[]) {
        this.id = id
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.history = history;
        this.geography = geography;
        // this.economy = economy;
        // this.hotels = hotels;
    }

}
