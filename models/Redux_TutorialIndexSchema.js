const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const Redux_TutorialIndexSchema=new Schema({
  name:{
    type:String,
    required:true,
  },
  url_id:{
    type:String,
    required:true
  }
})


const ReduxTutorialIndex= mongoose.model('ReduxTutorialIndex',Redux_TutorialIndexSchema);
module.exports =ReduxTutorialIndex
