// declare class

// export class using module.exports
class Shape{
    constructor(){
        this.color="yellow";
    }
    drawShape(){
        console.log("here");
    }
    calculateArea(){
        console.log("here");
    }
}
module.exports=Shape;