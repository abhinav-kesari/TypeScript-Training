import { Shape } from "./Shape";
import { Circle } from "./Circle";
import {Recangle } from "./Recangle"

let myshape = new Shape(2,3);
let mycircle = new Circle(2,3,1);
let myRec = new Recangle(0,0,3,1);

let myshapes : Shape[] = [myshape,mycircle,myRec];

for (const a of myshapes) {
    console.log(a.getInfo());
}
