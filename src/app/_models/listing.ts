export class Listing {
    image_url: string;
    restaurent_name: string;
    description: string;
    name: string;
    rating: string;
    cost: string;

    constructor( image_url: string,
        restaurent_name: string,
        description: string,
        name: string,
        rating: string,
        cost: string) {
        this.image_url = image_url;
        this.description = description;
        this.restaurent_name = restaurent_name;
        this.name = name;
        this.rating = rating;
        this.cost = cost;
    }

}