var Customer = /** @class */ (function () {
    function Customer(a, b) {
        this._firstName = a;
        this._lastName = b;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
var mycustomer = new Customer("Abhinav", "Kesari");
mycustomer.firstName = "Abhinav2";
mycustomer.lastName = " Kesari2";
console.log(mycustomer.firstName + mycustomer.lastName);
