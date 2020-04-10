const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const React_TutorialIndexSchema=new Schema({
  name:{
    type:String,
    required:true,
  },
  url_id:{
    type:String,
    required:true
  }
})


const ReactTutorialIndex= mongoose.model('ReactTutorialIndex',React_TutorialIndexSchema);
module.exports =ReactTutorialIndex
