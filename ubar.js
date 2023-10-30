class uber{
    constructor(name,km){
        this.name = name;
        this.km = km;
    }
    price(){
        //6 rupees per kilomer
        return this.km * 6;
    }
}

const customer1 = new uber("siva",50);
console.log(customer1.price());
console.log(`Hi..!:${customer1.name} your destination price amount:${customer1.price()}`);