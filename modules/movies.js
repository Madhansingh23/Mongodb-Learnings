// insert one
// import mongoose from "mongoose";
// const movieschema=new mongoose.Schema({
//     name:{type:String,required:true,trim:true},
//     ratings:{type:Number,required:true,min:1,max:5},
//     money:{
//         type:mongoose.Decimal128,
//         required:true,
//         validate:v=>v>=10,
//     },
//     genre:{type:Array},
//     isActive:{type:Boolean},
//     comments:[{
//         value:{type:String},published:{type:Date,default:Date.now}},
//     ]
// });
// const moviemodel=mongoose.model("Movie",movieschema);
// const createdoc=async()=>{
//     try{
//         const m1=new moviemodel({
//             name:"Extraction",
//             ratings:4,
//             money:60000,
//             genre:['action','adventure'],
//             isActive:true,
//             comments:[{value:"This is an amazing movie"}],
//         });
//         const result=await m1.save();
//     }catch(error){
//     console.log(error);
//     }
// }
// export {createdoc};


//insert many
// import mongoose from "mongoose";
// const movieschema=new mongoose.Schema({
//     name:{type:String,required:true,trim:true},
//     ratings:{type:Number,required:true,min:1,max:5},
//     money:{
//         type:mongoose.Decimal128,
//         required:true,
//         validate:v=>v>=10,
//     },
//     genre:{type:Array},
//     isActive:{type:Boolean},
//     comments:[{
//         value:{type:String},published:{type:Date,default:Date.now}},
//     ]
// });
// const moviemodel=mongoose.model("Movie",movieschema);
// const insertmanydoc=async()=>{
//     try{
//         const m1=new moviemodel({
//             name:"Avengers",
//             ratings:5,
//             money:1000000,
//             genre:['action','adventure'],
//             isActive:true,
//             comments:[{value:"This is an  fantasticamazing movie"}],
//         });
//         const m2=new moviemodel({
//             name:"Avengers2",
//             ratings:4.5,
//             money:600000,
//             genre:['action','adventure'],
//             isActive:true,
//             comments:[{value:"This is an amazing movie"}],
//         });
//         const m3=new moviemodel({
//             name:"Avenger3",
//             ratings:3.8,
//             money:700000,
//             genre:['action','adventure'],
//             isActive:true,
//             comments:[{value:"This is an amazing movie"}],
//         });
//         const m4=new moviemodel({
//             name:"Avenger4",
//             ratings:4.2,
//             money:9000000,
//             genre:['action','adventure'],
//             isActive:true,
//             comments:[{value:"This is an masterpiece movie"}],
//         });
//         const m5=new moviemodel({
//             name:"Avengers5",
//             ratings:5,
//             money:60000,
//             genre:['action','adventure'],
//             isActive:true,
//             comments:[{value:"This is an  mass amazing movie"}],
//         });
//         const result=await moviemodel.insertMany([m1,m2,m3,m4,m5]);
//     }catch(error){
//     console.log(error);
//     }
// }

// export {insertmanydoc};

//all docs to find all movies
// import mongoose from "mongoose";
// const movieschema=new mongoose.Schema({
//     name:{type:String,required:true,trim:true},
//     ratings:{type:Number,required:true,min:1,max:5},
//     money:{
//         type:mongoose.Decimal128,
//         required:true,
//         validate:v=>v>=10,
//     },
//     genre:{type:Array},
//     isActive:{type:Boolean},
//     comments:[{
//         value:{type:String},published:{type:Date,default:Date.now}},
//     ]
// });
// const moviemodel=mongoose.model("Movie",movieschema);
// const alldoc=async()=>{
//     try{
//         const m1=new moviemodel({
//             name:"Avengers",
//             ratings:5,
//             money:1000000,
//             genre:['action','adventure'],
//             isActive:true,
//             comments:[{value:"This is an  fantasticamazing movie"}],
//         });
//         const m2=new moviemodel({
//             name:"Avengers2",
//             ratings:4.5,
//             money:600000,
//             genre:['action','adventure'],
//             isActive:true,
//             comments:[{value:"This is an amazing movie"}],
//         });
//         const m3=new moviemodel({
//             name:"Avenger3",
//             ratings:3.8,
//             money:700000,
//             genre:['action','adventure'],
//             isActive:true,
//             comments:[{value:"This is an amazing movie"}],
//         });
//         const m4=new moviemodel({
//             name:"Avenger4",
//             ratings:4.2,
//             money:9000000,
//             genre:['action','adventure'],
//             isActive:true,
//             comments:[{value:"This is an masterpiece movie"}],
//         });
//         const m5=new moviemodel({
//             name:"Avengers5",
//             ratings:5,
//             money:60000,
//             genre:['action','adventure'],
//             isActive:true,
//             comments:[{value:"This is an  mass amazing movie"}],
//         });
//         const result=await moviemodel.find();
//         //iteratoion to take all 
//         result.forEach((movie)=>{
//             console.log(movie.name);
//         })
//     }catch(error){
//     console.log(error);
//     }
// }

// export {alldoc};


//single doc by id with all find functions
// import mongoose from "mongoose";
// const movieschema=new mongoose.Schema({
//     name:{type:String,required:true,trim:true},
//     ratings:{type:Number,required:true,min:1,max:5},
//     money:{
//         type:mongoose.Decimal128,
//         required:true,
//         validate:v=>v>=10,
//     },
//     genre:{type:Array},
//     isActive:{type:Boolean},
//     comments:[{
//         value:{type:String},published:{type:Date,default:Date.now}},
//     ]
// });
// const moviemodel=mongoose.model("Movie",movieschema);
// const singledoc=async()=>{
//     try{
//         // const result=await moviemodel.findById("674c0688ddf67167392710bd");// find by object id
//         // const result=await moviemodel.find({"name:Extraction 2"});// to find with a value property
//         // const result=await moviemodel.find().limit(3);//to set limit(3)
//         // const result=await moviemodel.find().skip(2);//to set skip(2)
//         // const result=await moviemodel.find().countDocuments();//to count documents
//         // const result=await moviemodel.find().sort({name:-1});//to sort by descending order
//         // const result=await moviemodel.find({money:{$gt:50000}});//to set money limit greter then and less than as lt
//         // const result=await moviemodel.find({money:{$ne:60000}});//except the give movie not equal
//         // const result=await moviemodel.find({$and:[{money:60000},{ratings:4}]});//equal with two condition check
//         // const result=await moviemodel.findById("674c0688ddf67167392710bd","john wick");//if you know two column
//         console.log(result);
//         // console.log(result.name); // for name alone
//     }catch(error){
//     console.log(error);
//     }
// }
// export {singledoc};


//for update
import mongoose from "mongoose";
const movieschema=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    ratings:{type:Number,required:true,min:1,max:5},
    money:{
        type:mongoose.Decimal128,
        required:true,
        validate:v=>v>=10,
    },
    genre:{type:Array},
    isActive:{type:Boolean},
    comments:[{
        value:{type:String},published:{type:Date,default:Date.now}},
    ]
});
const moviemodel=mongoose.model("Movie",movieschema);
const singledoc=async()=>{
    try{
    //change singledoc function to singledoc("674c0688ddf67167392710bd") in indexedDB.js
   
    // for update one
    //     const result=await moviemodel.updateOne(
    //     {_id:id},
    //     {name:"Madhan biopic"}
    // );

    // for update many
    // const result=await moviemodel.updateMany(
    //     {ratings:3},
    //     {name:"Madhan biopic"}
    // );

    //delete by id
    // const result=await moviemodel.findByIdAndDelete("674c0688ddf67167392710bd");// find by object id

    //delete one
    // const result=await moviemodel.deleteOne(
    //         {name:"Madhan biopic"}
    //     );

    //delete many
    const result=await moviemodel.deleteMany(
            {name:"Madhan biopic"}
        );
        console.log(result);
    }catch(error){
    console.log(error);
    }
}
export {singledoc};

