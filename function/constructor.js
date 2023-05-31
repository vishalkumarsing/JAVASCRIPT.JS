function rectangle(){
    this.length=1
    this.breadth=2
    this. draw=function(){
        console.log('drawing')
    }
}

//constructor
let rectangleobject=new rectangle();
//adding

rectangleobject.color='yellow';
console.log(rectangleobject);
//dlelte 
delete rectangleobject.color;
console.log(rectangleobject);



