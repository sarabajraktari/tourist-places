export class City {
    id: number;
    name: string;
    description: string;
    imagePath: string;


    constructor(id: number, name: string, description: string, imagePath: string) {
        this.id = id
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }

}
