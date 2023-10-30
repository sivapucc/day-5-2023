class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getArea(){
        return (Math.PI*(Math.pow(this.radius,2)));
    }
    setRadius(radius){
            this.radius=radius;
    }
    getCircumferences(){
        return ((2*Math.PI)*this.radius)
    }

};
Circle.prototype.getColor=function(){
    return this.color;
}
Circle.prototype.setColor = function (color) {
    this.color = color;
};
Circle.prototype.toString = function () {
    return `Radius: ${this.radius}   Color: ${this.color}`;
};
var c1=new Circle(5,"red");
console.log(c1.getArea());
console.log(c1.getCircumferences());
console.log(c1.setRadius(5));
console.log(c1.toString());