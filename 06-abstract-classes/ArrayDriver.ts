import { Shape } from "./Shape";
import { Circle } from "./Circle";
import {Recangle } from "./Recangle"


let mycircle = new Circle(2,3,1);
let myRec = new Recangle(0,0,3,1);

let myshapes : Shape[] = [];
myshapes.push(mycircle);
myshapes.push(myRec);


for (const a of myshapes) {
    console.log(a.getInfo());
    console.log(a.calArea());
    console.log();
}
