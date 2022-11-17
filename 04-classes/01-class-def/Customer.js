var Customer = /** @class */ (function () {
    function Customer(a, b) {
        this.firstName = a;
        this.lastName = b;
    }
    return Customer;
}());
var mycustomer = new Customer("Abhinav", " Kesari");
// mycustomer.firstName= "Abhinav";
// mycustomer.lastName= " Kesari";
console.log(mycustomer.firstName + mycustomer.lastName);
