const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require("mongoose");
const path = require("path");
const fs = require('fs');

const JSTutorialIndex = require('./models/JS_TutorialIndexSchema')
const ReactTutorialIndex = require('./models/React_TutorialIndexSchema')
const ReduxTutorialIndex = require('./models/Redux_TutorialIndexSchema')
const Subject = require('./models/SubjectSchema')

const ReactLesson = require('./models/ReactLessonSchema')
const ReduxLesson = require('./models/ReduxLessonSchema')
const JSLesson = require('./models/JSLessonSchema')
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


//database connection
mongoose.connect("mongodb+srv://shailesh:Ultra@143@tutorialweb-q7u8o.mongodb.net/TutorialWeb?retryWrites=true&w=majority",
{useNewUrlParser: true,useUnifiedTopology:true});
mongoose.connection.once('open',()=>{
  console.log("Connected to mongodb Atlas");
});

app.get('/',(req,res,next)=>{
  JSLesson.create({
     name:'JS-Intro',
     lesson_description:'js -home',
     url_id:'JS-home'
  });
  res.send('hello');
});

app.get('/api/home',function(req,res){
  Subject.find({},function(err,subjects){
    if(err){
      console.log(err);
    }
    else{
      const subject=subjects.map(subject=>subject)
      res.send( subject);
    }
  })

})
/* ReactTutorialIndex sidebar content*/
app.get('/api/react',function(req,res){
  ReactTutorialIndex.find({},function(err,tutorialIndexs){
    if(err){
      console.log(err);
    }
    else{
      const tutorialIndex=tutorialIndexs.map(tutorialIndex=>tutorialIndex)
      res.send( tutorialIndex);
    }
  })
})
/* ReduxTutorialIndex sidebar content*/
app.get('/api/redux',function(req,res){
  ReduxTutorialIndex.find({},function(err,tutorialIndexs){
    if(err){
      console.log(err);
    }
    else{
      const tutorialIndex=tutorialIndexs.map(tutorialIndex=>tutorialIndex)
      res.send( tutorialIndex);
    }
  })
})
/* JSIndex sidebar content*/
app.get('/api/js',function(req,res){
  JSIndex.find({},function(err,tutorialIndexs){
    if(err){
      console.log(err);
    }
    else{
      const tutorialIndex=tutorialIndexs.map(tutorialIndex=>tutorialIndex)
      res.send( tutorialIndex);
    }
  })
})

/* React Lesson*/
app.get('/api/react/getLessons',function(req,res){
  ReactLesson.find({},function(err,reactLessons){
    if(err){
      console.log(err);
    }
    else{
      const reactLesson=reactLessons.map(reactLesson=>reactLesson)
      res.send( reactLesson);
    }
  })
})
/* Redux Lesson*/
app.get('/api/redux/getLessons',function(req,res){
  ReduxLesson.find({},function(err,reduxLessons){
    if(err){
      console.log(err);
    }
    else{
      const reduxLesson=reduxLessons.map(reduxLesson=>reduxLesson)
      res.send( reduxLesson);
    }
  })
})

/* JS Lesson*/
app.get('/api/js/getLessons',function(req,res){
  JSLesson.find({},function(err,JSLessons){
    if(err){
      console.log(err);
    }
    else{
      const JSLesson=JSLessons.map(JSLesson=>JSLesson)
      res.send( JSLesson);
    }
  })
})

//serve static assets in production
if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('client/build'))

  app.get('*',(req,res)=>{

    res.sendFile(path.join(__dirname,'build','index.html'));
  })
}


const port=process.env.PORT || 4002;

app.listen(port,function(req,res){
  console.log("server started");
})
