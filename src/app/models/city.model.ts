import { geography } from "./geography.model";
import { history } from "./history.model";
import { hotel } from "./hotel.model";
import { touristPlaces } from "./tourist-places.model";
export class City {
    id: number;
    name: string;
    description: string;
    image: string;
    history: history[];
    // hotels: hotel[];

    constructor(id: number,
        name: string,
        description: string,
        image: string,
        history: history[],
    ) {
        this.id = id
        this.name = name;
        this.description = description;
        this.image = image;
        this.history = history;
        // this.geography = geography;
        // this.touristPlaces = touristPlaces;
        // this.hotels = hotels;
    }

}
    // history: history[],
    //     geography: geography[],
    //     touristPlaces: touristPlaces[]