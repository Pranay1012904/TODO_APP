const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
});

const Todo=mongoose.model('Todo_List',todoSchema);
module.exports=Todo;