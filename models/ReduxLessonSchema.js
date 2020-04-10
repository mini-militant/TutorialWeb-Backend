const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const ReduxLessonSchema=new Schema({
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


const ReduxLesson= mongoose.model('ReduxLesson',ReduxLessonSchema);
module.exports =ReduxLesson
