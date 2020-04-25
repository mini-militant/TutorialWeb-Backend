const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const JS_TutorialIndexSchema=new Schema({
  name:{
    type:String,
    required:true,
  },
  url_id:{
    type:String,
    required:true
  }
})


const JSTutorialIndex= mongoose.model('JSTutorialIndex',JS_TutorialIndexSchema);
module.exports =JSTutorialIndex
