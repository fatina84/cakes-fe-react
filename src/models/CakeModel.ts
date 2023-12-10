class CakeModel {
    id: number;
    title: string;
    occasion: string;
    description: string;
    weight?: number;
    date?: Date;
    numberportions?: number;
    img?: string;

    constructor(id: number, title: string, occasion: string,
        description: string, weight: number, date: Date, numberportions: number, img: string) {
        this.id = id;
        this.title = title;
        this.occasion = occasion;
        this.description = description;
        this.weight = weight;
        this.date = date;
        this.numberportions = numberportions;
        this.img = img;
    }
} export default CakeModel;