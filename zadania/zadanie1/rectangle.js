export default class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width * this.height;
    }
    perimeter(){
        return (this.width + this.height) * 2;
    }
}