// import mongoose  from "mongoose";
// const connectdb=async (DATABASE_URL)=>{
//     try{
//         await mongoose.connect(DATABASE_URL);
//         console.log("Database Connected...");
//     }catch(error)
//     {
//         console.log(error);
//     }
// };
// export default connectdb;

//same for all as it is connection
import mongoose  from "mongoose";
const connectdb=async (DATABASE_URL)=>{
    try{
        await mongoose.connect(DATABASE_URL);
        console.log("Database Connected...");
    }catch(error)
    {
        console.log(error);
    }
};
export default connectdb;

