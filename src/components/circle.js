// import using require

// declare class


// export class using module.exports
const Shape=require('./shape');
class Circle extends Shape{
    constructor(){
        super();
    }
    calculateArea(){
        console.log("Area"+this.color);
        return 3.14;
    }
}
module.exports=Circle;