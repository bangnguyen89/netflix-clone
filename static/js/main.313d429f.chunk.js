(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{23:function(e,t,a){e.exports=a(67)},28:function(e,t,a){},29:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),o=a.n(r),i=(a(28),a(29),a(4)),l=a.n(i),s=a(5),u=a(3),m=a(18),f=a(21),d=a.n(f),v=a(22),h=a.n(v).a.create({baseURL:"https://api.themoviedb.org/3/"});a(64);var p=function(e){var t=e.title,a=e.fetchUrl,r=e.isLargeRow,o=Object(n.useState)([]),i=Object(u.a)(o,2),f=i[0],v=i[1],p=Object(n.useState)(""),g=Object(u.a)(p,2),_=g[0],b=g[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(a);case 2:return t=e.sent,console.log(t.data.results),v(t.data.results),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),c.a.createElement("div",{className:"row"},c.a.createElement("h2",null,t),c.a.createElement("div",{className:"row__posters"},f.map((function(e){return c.a.createElement("img",{className:"row__poster ".concat(r&&"row__posterLarge"),key:e.id,onClick:function(){return function(e){_?b(""):d()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);b(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},src:"".concat("https://image.tmdb.org/t/p/original").concat(r?e.poster_path:e.backdrop_path),alt:e.name})}))),_&&c.a.createElement(m.a,{videoId:_,opts:{height:"390",width:"100%",playVars:{autoplay:1}}}))},g="888a85750d9af1a8005ef27f336bbc53",_={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_network=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(g,"&with_genres=99")};a(65);var b=function(){var e,t,a=Object(n.useState)([]),r=Object(u.a)(a,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(_.fetchNetflixOriginals);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*(t.data.results.length-1))]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original//'.concat(null===o||void 0===o?void 0:o.backdrop_path,'")'),backgroundPosition:"center center"}},c.a.createElement("div",{className:"banner__contents"},c.a.createElement("h1",{className:"banner__title"},(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_name)),c.a.createElement("div",{className:"banner__buttons"},c.a.createElement("button",{className:"banner__button"},"Play"),c.a.createElement("button",{className:"banner__button"},"My List")),c.a.createElement("h1",{className:"banner__description"},(e=null===o||void 0===o?void 0:o.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),c.a.createElement("div",{className:"banner__fadeBottom"}))};a(66);var w=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?r(!0):r(!1)})),function(){window.removeEventListener("scroll")}}),[]),c.a.createElement("div",{className:"nav ".concat(a&&"nav__black")},c.a.createElement("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png",alt:"Netflix logo"}),c.a.createElement("img",{className:"nav__avatar",src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",alt:"Netflix logo"}))};var E=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(w,null),c.a.createElement(b,null),c.a.createElement(p,{title:"NETFLIX ORIGINAL",fetchUrl:_.fetchNetflixOriginals,isLargeRow:!0}),c.a.createElement(p,{title:"Trending Now",fetchUrl:_.fetchTrending}),c.a.createElement(p,{title:"Top Rated",fetchUrl:_.fetchTopRated}),c.a.createElement(p,{title:"Action Movies",fetchUrl:_.fetchActionMovies}),c.a.createElement(p,{title:"Comedy Movies",fetchUrl:_.fetchComedyMovies}),c.a.createElement(p,{title:"Horror Movies",fetchUrl:_.fetchHorrorMovies}),c.a.createElement(p,{title:"Romance Movies",fetchUrl:_.fetchRomanceMovies}),c.a.createElement(p,{title:"Documentaries",fetchUrl:_.fetchDocumentaries}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.313d429f.chunk.js.map