class Customer{
     firstName : string ;
     lastName : string;

    constructor(a : string , b : string){
        this.firstName = a;
        this.lastName = b;
    }

}
let mycustomer = new Customer("Abhinav"," Kesari");
// mycustomer.firstName= "Abhinav";
// mycustomer.lastName= " Kesari";
console.log(mycustomer.firstName + mycustomer.lastName);
