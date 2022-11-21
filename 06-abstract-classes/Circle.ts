import { Shape } from "./Shape";

export class Circle extends Shape {
    
    calArea(): number{
        return Math.PI*this._radius*this._radius;
    };
    constructor(theX : number, theY:number,private _radius : number){
        super(theX,theY);
    }
    
    
    public get radius() : number {
        return this._radius;
    }
    
    public set radius(v : number) {
        this._radius = v;
    }
    
    

    public getInfo(): string {
        
        return super.getInfo() + `, radius=${this._radius}`;
    }


}