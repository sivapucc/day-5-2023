class Person{
    constructor(name,age,gender,email,phone,qualification,address){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.qualification = qualification;
        this.address=address;
    }
};

const p1=new Person("siva",26,"male","sivapucc@gmail.com","8608654408","Bca","Mayiladuthrai");
console.log(p1);
console.log(p1.name);