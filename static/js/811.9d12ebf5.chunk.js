"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[811,367,310],{830:function(e,t,r){r.d(t,{Ch:function(){return o},Hx:function(){return f},Y5:function(){return l},wr:function(){return u},xc:function(){return p}});var n=r(861),a=r(757),s=r.n(a),c=r(294),i="c6abe789c2cce447fb640bf7c33e7b21";c.Z.defaults.baseURL="https://api.themoviedb.org/";var u=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("3/trending/all/week?api_key=".concat(i,"&include_adult=false&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("3/search/movie?api_key=".concat(i,"&query=").concat(t,"&include_adult=false&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("3/movie/".concat(t,"?api_key=").concat(i,"&append_to_response=videos,images,credits&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("3/movie/".concat(t,"/credits?api_key=").concat(i,"&append_to_response=videos,images,credits&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("3/movie/".concat(t,"/reviews?api_key=").concat(i,"&append_to_response=videos,images,credits&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},811:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var n=r(87),a=r(689),s=r(367),c=r(310),i=r(791),u=r(184),o=function(){return(0,u.jsxs)("div",{className:"main-container",children:[(0,u.jsx)("header",{className:"header",children:(0,u.jsxs)("nav",{children:[(0,u.jsx)(n.OL,{to:"/",element:(0,u.jsx)(s.default,{}),children:"HOME"}),(0,u.jsx)(n.OL,{to:"/movies",element:(0,u.jsx)(c.default,{}),children:"MOVIES"})]})}),(0,u.jsx)("main",{children:(0,u.jsx)(i.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading..."}),children:(0,u.jsx)(a.j3,{})})})]})}},854:function(e,t,r){var n=r(748),a=r(184);t.Z=function(){return(0,a.jsx)(n.p2,{height:"160",width:"160",color:"#61d0a9",ariaLabel:"circles-loading",wrapperStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"",visible:!0})}},367:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(791),u=r(87),o=r(830),l=r(184),p=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.wr)();case 3:t=e.sent,s(t.results),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsxs)("div",{className:"container-home",children:[(0,l.jsx)("h1",{children:"Trending today"}),(0,l.jsx)("ul",{className:"list",children:r.map((function(e){return(0,l.jsx)("li",{className:"movie-item",children:(0,l.jsxs)(u.rU,{to:"/movies/".concat(e.id),state:{from:"/"},children:[e.poster_path?(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title}):(0,l.jsx)("p",{children:"No Poster Available"}),(0,l.jsx)("h3",{children:e.title||e.name})]})},e.id)}))})]})}},310:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(791),u=r(830),o=r(402),l=r(854),p=r(689),f=r(87),h=r(184),d=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],d=(0,i.useState)(!1),v=(0,a.Z)(d,2),m=v[0],x=v[1],g=(0,i.useState)(!1),j=(0,a.Z)(g,2),w=j[0],b=j[1],y=(0,p.TH)(),k=(0,f.lr)(),Z=(0,a.Z)(k,2),_=Z[0],S=Z[1],N=_.get("query")||"";(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""===N){e.next=9;break}return x(!0),b(!1),e.next=6,(0,u.Ch)(N);case 6:(t=e.sent).length||o.ZP.error("Sorry,there are no films for this request. Try something different."),s(t);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),b(!0);case 14:return e.prev=14,x(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[N,b]);return(0,h.jsxs)("div",{className:"container-movie",children:[(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.query.value.trim();""===t&&o.ZP.error("Please enter your request!"),S({query:t}),e.target.reset()},className:"search-form",children:[(0,h.jsx)("button",{type:"submit",children:"Search"}),(0,h.jsx)("input",{name:"query",type:"text",autoFocus:!0,placeholder:"Search movies"})]}),(0,h.jsxs)("div",{className:"list",children:[m&&(0,h.jsx)(l.Z,{}),r.map((function(e){return(0,h.jsxs)(f.rU,{to:"/movies/".concat(e.id),state:{from:y},className:"movie-item",children:[e.poster_path?(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title}):!w&&(0,h.jsx)("p",{children:"No Poster Available"}),(0,h.jsx)("h3",{children:e.title})]},e.id)}))]}),(0,h.jsx)(o.x7,{position:"top-right"})]})}}}]);
//# sourceMappingURL=811.9d12ebf5.chunk.js.map