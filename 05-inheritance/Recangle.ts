import { Shape } from "./Shape";

export class Recangle extends Shape{

    constructor(theX : number,theY : number,private _l :number,private _b:number){
        super(theX,theY);
    }
    
    
    public get l() : number {
        return this._l;
    }
    
    public get b() : number {
        return this._b;
    }

    
    public set l(v : number) {
        this._l = v;
    }
    
    
    public set b(v : number) {
        this._b = v;
    }
    
    
    
    


     public getInfo(): string {
         return super.getInfo() + `, l=${this._l}  b=${this._b}`;
     }


}