import mongoose from "mongoose";

//here we are creating mongoose schema for our name photo and prompt.
//Models are used to Create db connections and schemas.
const Post = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    prompt:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    }
})

const postSchema = new mongoose.model('post', Post);

export default postSchema;
