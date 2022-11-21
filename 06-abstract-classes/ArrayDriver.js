"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Recangle_1 = require("./Recangle");
var mycircle = new Circle_1.Circle(2, 3, 1);
var myRec = new Recangle_1.Recangle(0, 0, 3, 1);
var myshapes = [];
myshapes.push(mycircle);
myshapes.push(myRec);
for (var _i = 0, myshapes_1 = myshapes; _i < myshapes_1.length; _i++) {
    var a = myshapes_1[_i];
    console.log(a.getInfo());
    console.log(a.calArea());
    console.log();
}
