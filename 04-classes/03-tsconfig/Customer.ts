class Customer{
     private _firstName: string;
     private _lastName: string;

     public get firstName(): string {
         return this._firstName;
        }
        public set firstName(value: string) {
            this._firstName = value;
        }
        
        public get lastName(): string {
            return this._lastName;
        }
        public set lastName(value: string) {
            this._lastName = value;
        }
        constructor(a : string , b : string){
            this._firstName = a;
            this._lastName = b;
        }
   
   
   

}
let mycustomer = new Customer("Abhinav","Kesari");
mycustomer.firstName= "Abhinav2";
mycustomer.lastName= " Kesari2";

console.log(mycustomer.firstName + mycustomer.lastName);
