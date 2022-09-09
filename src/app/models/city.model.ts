import { geography } from "./geography.model";
import { history } from "./history.model";
import { hotel } from "./hotel.model";
import { touristPlaces } from "./tourist-places.model";
export class City {
    id: number;
    name: string;
    description: string;
    imagePath: string;
    history: history[];
    geography: geography[];
    touristPlaces: touristPlaces[];
    // hotels: hotel[];

    constructor(id: number,
        name: string,
        description: string,
        imagePath: string,
        history: history[],
        geography: geography[],
        touristPlaces: touristPlaces[]) {
        this.id = id
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.history = history;
        this.geography = geography;
        this.touristPlaces = touristPlaces;
        // this.hotels = hotels;
    }

}
