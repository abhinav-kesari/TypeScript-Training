"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var mycricket = new CricketCoach_1.CricketCoach();
var mygolf = new GolfCoach_1.GolfCoach();
console.log(mycricket.getDailyWorkout());
console.log(mygolf.getDailyWorkout());
