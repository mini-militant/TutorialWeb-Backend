const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const ReactLessonSchema=new Schema({
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


const ReactLesson= mongoose.model('ReactLesson',ReactLessonSchema);
module.exports =ReactLesson
