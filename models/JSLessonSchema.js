const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const JSLessonSchema=new Schema({
  name:{
    type:String,
    required:true,
  },
  lesson_description:{
    type:String,
    required:true
  },
  url_id:{
    type:String,
    required:true
  }
})


const JSLesson= mongoose.model('JSLesson',JSLessonSchema);
module.exports =JSLesson
