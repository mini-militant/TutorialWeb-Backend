(window.webpackJsonptutorial=window.webpackJsonptutorial||[]).push([[0],{60:function(e,t,a){e.exports=a(77)},65:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=a(13),i=a(10),s=a(16),m=a(19),u=a(21),p=a(32),h=a(15),d=a(28),E=(a(65),function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar fixed-top",id:"navbar"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Tech Curiosity"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",{className:"current"},r.a.createElement(d.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Services"))))))}),f=a(112),b=a(114),v=a(116),g=a(115),j=a(117),w=(a(71),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={toTutorial:!1},a.handleClick=function(){a.setState({toTutorial:!0})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){if(!0===this.state.toTutorial)switch(this.props.name){case"React":this.props.history.push({pathname:"/react"});break;case"Redux":this.props.history.push("/redux");break;case"JS":this.props.history.push("/js");break;default:this.props.history.push("/")}return r.a.createElement("div",{className:"container"},r.a.createElement(f.a,{className:"card",onClick:this.handleClick},r.a.createElement(b.a,null,r.a.createElement(g.a,{id:"imageIcon",component:"img",alt:"img",height:"140",image:this.props.imgUrl}),r.a.createElement(v.a,null,r.a.createElement(j.a,{gutterBottom:!0,variant:"h5",component:"h2"},this.props.name)))))}}]),t}(r.a.Component)),y=Object(p.f)(w),k=(a(72),a(73),function(){return r.a.createElement("section",{id:"showcase"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Learn Something Trending"),r.a.createElement("h5",null,"Tired of looking for trending tech tutorials! Your wait is over."),r.a.createElement("h5",null," Scroll down to find the trending tech stacks.")),r.a.createElement("div",{className:"arrow bounce"},r.a.createElement("i",{className:"fa fa-angle-double-down",style:{fontSize:"70px"}}))))}),O=(a(74),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"js-footer-area"},r.a.createElement("div",{className:"site-footer dark-bg"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("p",{className:"logo"},"Tech Curiosity"),r.a.createElement("hr",null),r.a.createElement("p",{className:"logo_under"},"Be Curious. \xa9 copyright-2019")),r.a.createElement("div",{className:"col-sm-5"},r.a.createElement("ul",{className:"footer-links"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"AboutUs")))),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("ul",{className:"social-list"},r.a.createElement("li",null,r.a.createElement("a",{href:"/",target:"_blank"},r.a.createElement("i",{className:"fa fa-facebook-official"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"/",target:"_blank"},r.a.createElement("i",{className:"fa fa-twitter"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"/",target:"_blank"},r.a.createElement("i",{className:"fa fa-github"})))),r.a.createElement("div",{className:"footer-contact-us"},r.a.createElement("p",null,"Email : \xa0",r.a.createElement("a",{href:"mail@d.c"},"helloDumy@gmail.com"))))))))}}]),t}(r.a.Component)),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:[]},fetch("/api/home").then(function(e){return e.json()}).then(function(e){return a.setState({data:e})}),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(k,null),r.a.createElement("section",{id:"container-cards"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"flex-container"},this.state.data.map(function(e){return r.a.createElement("div",{key:e._id},r.a.createElement(y,{name:e.name,imgUrl:e.img_url}))})),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("br",null))),r.a.createElement(O,null))}}]),t}(r.a.Component),x=a(54),C=a(12),S=a(120),I=a(119),T=a(118),_=a(123),B=a(124),R=a(122),U=a(52),A=a.n(U),L=a(126),M=a(125),H=a(121),P=a(51),z=a(20),D=(a(75),function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={TopicContents:[]};var n="";switch(a.props.match.path){case"/react/:topicId":n="/api".concat("/react/getLessons");break;case"/redux/:topicId":n="/api".concat("/redux/getLessons");break;default:return Object(s.a)(a,null)}return fetch(n).then(function(e){return e.json()}).then(function(e){return a.setState({TopicContents:e})}),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.TopicContents.filter(function(t){return t.url_id===e.props.match.params.topicId});return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),t.map(function(e){return r.a.createElement("div",{key:e._id,style:{width:"100%"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("h1",{style:{color:"black",textAlign:"center",fontSize:30,paddingTop:20,fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"}},e.name),r.a.createElement("br",null),r.a.createElement(T.a,null),r.a.createElement("div",{style:{padding:"20px 20px 20px 50px",margin:"auto",lineHeight:"1.8em",width:"100%",height:"auto",textAlign:"justify"},dangerouslySetInnerHTML:{__html:e.lesson_description}}))))}))}}]),t}(r.a.Component)),F=a(53),J=a.n(F),W=Object(P.a)(function(e){return{root:{display:"flex"},drawer:Object(C.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(C.a)({marginLeft:240},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)")}),menuButton:Object(C.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3),backgroundColor:"white"}}});var G=Object(p.f)(function(e){var t=e.container,a=W(),n=Object(z.a)(),l=r.a.useState(!1),c=Object(x.a)(l,2),o=c[0],i=c[1],s=function(){i(!o)},m=r.a.createElement("div",null,r.a.createElement("img",{src:"https://thumbsplus.tutsplus.com/uploads/users/769/posts/32107/preview_image/react400.png?height=300&width=300",alt:"imagesd",width:"100%",height:"auto"}),r.a.createElement(T.a,null),r.a.createElement(M.a,null,e.tutorialIndex.map(function(t){var a=t.name,n=t.url_id;return r.a.createElement("div",{key:n},r.a.createElement(d.b,{to:"".concat(e.match.url,"/").concat(n),activeStyle:{color:"#bf4743"}},r.a.createElement(L.a,null,r.a.createElement("div",{style:{fontFamily:"Changa",fontSize:"16px"}},a))),r.a.createElement(T.a,null))})));return r.a.createElement("div",{className:a.root},r.a.createElement(I.a,null),r.a.createElement(S.a,{position:"fixed",className:a.appBar},r.a.createElement(H.a,null,r.a.createElement(R.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:s,className:a.menuButton},r.a.createElement(A.a,null)),r.a.createElement(d.a,{to:"/"}," ",r.a.createElement(J.a,{style:{color:"white"}})," "),"\xa0\xa0\xa0",r.a.createElement(j.a,{variant:"h6",noWrap:!0},e.tutoName))),r.a.createElement("nav",{className:a.drawer,"aria-label":"mailbox folders"},r.a.createElement(B.a,{smUp:!0,implementation:"css"},r.a.createElement(_.a,{container:t,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:o,onClose:s,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},m)),r.a.createElement(B.a,{xsDown:!0,implementation:"css"},r.a.createElement(_.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},m))),r.a.createElement("main",{className:a.content},r.a.createElement(p.a,{path:"".concat(e.match.path,"/:topicId"),component:D})))}),Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={tutorialIndex:[],tutoName:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="";switch(this.props.match.path){case"/react":t="/api".concat("/react"),this.setState({tutoName:"React"});break;case"/redux":t="/api".concat("/redux"),this.setState({tutoName:"Redux"});break;default:return null}fetch(t).then(function(e){return e.json()}).then(function(t){return e.setState({tutorialIndex:t})})}},{key:"render",value:function(){return console.log("IndexTutorial props",this.props),r.a.createElement("div",null,r.a.createElement(G,{tutoName:this.state.tutoName,tutorialIndex:this.state.tutorialIndex}))}}]),t}(n.Component),$=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Object(h.a)();return r.a.createElement("div",null,r.a.createElement(p.b,{history:e},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:N}),r.a.createElement(p.a,{path:"/react",component:Y}),r.a.createElement(p.a,{path:"/redux",component:Y}),r.a.createElement(p.a,{path:"/js",component:Y}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[60,1,2]]]);
//# sourceMappingURL=main.409ca54a.chunk.js.map