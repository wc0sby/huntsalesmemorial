(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(12),o=n.n(r),c=(n(76),n(2)),s=n(3),l=n(5),h=n(4),u=n(6),m=(n(78),n(64)),d=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).renderLinks=function(e){return e.map(function(e,t){return i.a.createElement("div",{key:t,href:"#",style:{textDecoration:"none",color:"white"}},i.a.createElement(m.Link,{activeClass:"active",className:e.class,to:e.class,spy:!0,smooth:!0,duration:1600},e.name))})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.links;return i.a.createElement("nav",{style:{fontFamily:"Reenie Beanie, cursive",fontSize:"1.45em",width:"60%",opacity:"50%",display:"flex",justifyContent:"space-around",position:"fixed"}},this.renderLinks(e))}}]),t}(a.Component),p=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{position:"absolute",bottom:"50%",right:40}},i.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/C79t9X4A3xc",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}}]),t}(a.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={main:{display:"flex"},header:{marginLeft:"2%",alignSelf:"center"},link:{textDecoration:"none"}};return i.a.createElement("article",{className:"about-me"},i.a.createElement("div",{style:e.main},i.a.createElement("img",{src:this.props.imgLink,alt:"",style:{width:"35%",height:"35%"}}),i.a.createElement("div",{style:e.header},i.a.createElement("h1",null,this.props.header),i.a.createElement("cite",null,this.props.source))),i.a.createElement("p",null,this.props.content),i.a.createElement("a",{style:e.link,href:this.props.srcLink},i.a.createElement("span",{style:{color:"grey",alignSelf:"flex-end"}},"Read More")))}}]),t}(a.Component),f=[{header:"Hunt Sales on Recovery, Regrets & Returning With 'One Day' Video: Premiere",source:"Billboard.com",content:'Hunt Sales is best known for his work with others -- including membership in the David Bowie-fronted Tin Machine and playing drums for Todd Rundgren, Iggy Pop, Bootsy Collins, Lowell Fulson and the band Paris. Now he\'s stepping out front with a solo album, Get Your Shit Together, due out Jan. 25 with a lead single "One Day," whose video is premiering exclusively below, out now.',imgLink:"https://www.billboard.com/files/media/Hunt-Sales-2018-cr-George-Hancock-billboard-1548.jpg",srcLink:"https://www.billboard.com/articles/columns/rock/8482420/hunt-sales-one-day-video-premiere"},{header:"HUNT SALES MEMORIAL",source:"Big Legal Mess Records",content:"MEMPHIS, Tenn. \u2014 A conventional bio of Hunt Sales would start by noting his famous associations, recounting his much-revered work as a sideman for Todd Rundgren, Iggy Pop and David Bowie. It would trumpet the fact that he\u2019s long been considered one of the world\u2019s greatest drummers, a secret weapon deployed in the service of rock royalty. But that\u2019s not how Sales identifies, nor how he sees himself.",imgLink:"https://cdn.shopify.com/s/files/1/2968/8216/collections/hunt_sales_memorial_-_get_your_shit_together-3000px_1_800x.jpg?v=1539719633",srcLink:"https://biglegalmessrecords.com/collections/hunt-sales-memorial"}],w=n(40),b=n(65),y=n.n(b),v={container:{padding:"8% 10% 1%"},card:{maxWidth:"90%",maxHeight:680,background:"rgba(68, 68, 68, 0.1)",color:"white",textAlign:"left",margin:"2% 10%"},flexContainer:{display:"flex"},image:{maxHeight:"25%"}},E=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.height,n=e.name,a=e.classes;return i.a.createElement("div",null,i.a.createElement("section",{style:{height:t},className:n,name:n},i.a.createElement("div",{className:a.container},i.a.createElement("h1",{style:{color:"white",textAlign:"left"}},n.toUpperCase()),i.a.createElement("div",{style:v.flexContainer},i.a.createElement("img",{style:{maxHeight:.6*t,transform:"Rotate(-10deg)",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},src:"assets/Hunt Urinal Shot.JPG",alt:""}),i.a.createElement("div",{style:{maxHeight:600,overflow:"auto"}},function(e,t){return e.map(function(e,n){return i.a.createElement(y.a,{className:t.card},i.a.createElement(g,{header:e.header,source:e.source,content:e.content,imgLink:e.imgLink,srcLink:e.srcLink}))})}(f,a))))))}}]),t}(a.Component),j=Object(w.withStyles)(v)(E),O=n(69),k=n.n(O),S=n(41),x=n(42);function L(){var e=Object(S.a)(["\n  width: 100%;\n  height: 100%;\n"]);return L=function(){return e},e}function C(){var e=Object(S.a)(["\n  width: 32%;\n  height: 55%;\n  bottom: 2%;\n  left: 12%;\n  position: absolute;\n"]);return C=function(){return e},e}var _=x.a.div(C()),D=x.a.img(L()),H=function(e){return i.a.createElement(_,null,i.a.createElement(D,{src:"../assets/THSM_Full.png"}))},A=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={label:{color:"white"},button:{margin:"2%"}};return i.a.createElement("form",{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"},i.a.createElement("input",{type:"hidden",name:"cmd",value:"_s-xclick"}),i.a.createElement("input",{type:"hidden",name:"hosted_button_id",value:this.props.id}),i.a.createElement("div",null,i.a.createElement("div",{style:e.label},i.a.createElement("input",{type:"hidden",name:"on0",value:"Size"}),"Select Size"),i.a.createElement("select",{name:"os0"},i.a.createElement("option",{value:"S"},"S $25.00 USD"),i.a.createElement("option",{value:"M"},"M $25.00 USD"),i.a.createElement("option",{value:"L"},"L $25.00 USD"),i.a.createElement("option",{value:"XL"},"XL $25.00 USD"))),i.a.createElement("input",{type:"hidden",name:"currency_code",value:"USD"}),i.a.createElement("input",{style:e.button,type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}),i.a.createElement("img",{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}))}}]),t}(a.Component),B=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"CardGrid"},i.a.createElement("div",{className:"ShirtImg"},i.a.createElement("img",{src:"http://localhost:3001/img/".concat(this.props.shirt,".png"),alt:"test",style:{width:"75%",height:"75%"}})),i.a.createElement("div",{className:"Box"}," ",i.a.createElement(A,{id:this.props.id})," "))}}]),t}(a.Component),M=(n(157),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"getBoxes",value:function(e){return e.map(function(e,t){return i.a.createElement(B,{shirt:e.file,id:e.id})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"shop",name:"shop"},i.a.createElement("div",{className:"ShirtGrid"},i.a.createElement("h1",{style:{color:"white",textAlign:"left",marginLeft:"10%"}},"Merch"),this.getBoxes([{id:"YSHH2QY6YD532",color:"black",file:"tshirt1"},{id:"AB5FMA9A5KRCA",color:"red",file:"tshirt2"}])))}}]),t}(a.Component)),N=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={height:n.props.dimensions.height,width:n.props.dimensions.width},n.renderPages=function(e){return e.map(function(e,t){switch(e.name){case"About":case"Gigs":return i.a.createElement(j,{height:n.state.height,width:n.state.width,name:e.class,key:t});case"Shop":return i.a.createElement(M,null)}})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"updateDimensions",value:function(){if(window.innerWidth<500)this.setState({width:450,height:102});else{var e=window.innerWidth,t=window.innerHeight;this.setState({width:e,height:t})}}},{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"render",value:function(){var e=[{class:"main",name:"Main"},{class:"shop",name:"Shop"},{class:"about",name:"About"}];return i.a.createElement(i.a.Fragment,null,i.a.createElement(k.a,null,i.a.createElement("div",{style:{backgroundColor:"brown",width:"100%"}},i.a.createElement("main",{className:"main",name:"main"},i.a.createElement("header",{className:"App-header"},i.a.createElement(H,null),i.a.createElement(d,{links:e}),i.a.createElement(p,null)),this.renderPages(e)))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R={height:0,width:0},U=function(){var e=R;return e.height=window.innerHeight,e.width=window.innerWidth,e};o.a.render(i.a.createElement(N,{dimensions:U(),newSize:U}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},71:function(e,t,n){e.exports=n(160)},76:function(e,t,n){},78:function(e,t,n){}},[[71,2,1]]]);
//# sourceMappingURL=main.cb3c568b.chunk.js.map