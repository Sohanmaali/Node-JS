import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/nodelearn");
        // await mongoose.connect(`${process.env.DATABASE_URL}`);
    } catch (error) {
        console.log("ERROR ", error);
        process.exit(1);
    }
};
export default dbConnect;
