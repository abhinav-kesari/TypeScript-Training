import { Shape } from "./Shape";
import { Circle } from "./Circle";
import {Recangle } from "./Recangle"

let myshape = new Shape(2,3);
console.log(myshape.getInfo());

let mycircle = new Circle(2,3,1);
console.log(mycircle.getInfo());

let myRec = new Recangle(0,0,3,1);
console.log(myRec.getInfo());