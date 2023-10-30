//class creation
class Movie{
    //constructor creation----->constor assign values to attributes
    constructor(title,studio,rating="PG"){  //if rating has no value , automaticaly assign "PG" as defalut value
        
        this.title = title;
        this.studio = studio;
        this.rating = rating;


    }

    //methods creation
    getPG()
    {   //filtering the array of objects
        let arr = [{title:this.title,studio:this.studio,rating:this.rating}];
        let res = arr.filter((ele)=>{
                return ele.rating==="PG";
        });
        //printing the result
        for(var i of res){
            return i.title;
        }
    }
};
//object or instance creation
const flim = new Movie("Doctor","Sk production","PG13");
const m2 = new Movie("Jailer","Lika production");
const m3 = new Movie("Casino Royale","Eon Productions");
const m4 = new Movie("Leo","LCU production");
//calling methods
console.log(m2.getPG());
console.log(m3.getPG());
console.log(m4.getPG());
console.log(flim.getPG());