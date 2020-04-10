const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const SubjectSchema=new Schema({
  name:{
    type:String,
    required:true,
  },
  img_url:{
    type:String,
    required:true
  }
})


const Subject= mongoose.model('Subject',SubjectSchema);
module.exports =Subject
