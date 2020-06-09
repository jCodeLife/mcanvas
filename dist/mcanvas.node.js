!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.MCanvas=e():t.MCanvas=e()}(global,(function(){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=3)}([function(t,e){t.exports=require("tslib")},function(t,e){t.exports=require("canvas")},function(t,e){t.exports=require("stackblur-canvas")},function(t,e,r){t.exports=r(5)},function(t,e,r){"use strict";r.r(e),r.d(e,"_Canvas",(function(){return n}));var i=r(1),n={name:"NodeCanvas",create:function(t,e){void 0===t&&(t=500),void 0===e&&(e=500);var r=Object(i.createCanvas)(t,e),n=r.getContext("2d");return[r,n]},loadImage:function(t){return Object(i.loadImage)(t)}}},function(t,e,r){"use strict";r.r(e),r.d(e,"MCanvas",(function(){return x})),r.d(e,"MImage",(function(){return O}));var i={};function n(t){var e=i.toString.call(t);return null===t?t+"":Number.isNaN(t)?"NaN":"object"==typeof t||"function"==typeof t?i[e]||"object":typeof t}"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach((function(t){i["[object "+t+"]"]=t.toLowerCase()}));var o={primitive:function(t){return["string","number"].includes(n(t))},array:function(t){return"array"===n(t)},str:function(t){return"string"===n(t)},obj:function(t){return"object"===n(t)},arr:function(t){return"array"===n(t)},num:function(t){return"number"===n(t)},fn:function(t){return"function"===n(t)},undef:function(t){return"undefined"===n(t)},def:function(t){return!o.undef(t)},null:function(t){return"null"===n(t)},empty:function(t){switch(n(t)){case"object":return 0===Object.keys(t).length;case"array":return 0===t.length;case"string":return!t.trim();case"undefined":case"null":case"NaN":case"boolean":return!0;default:return!1}},Nil:function(t){return["null","undefined"].includes(n(t))},NaN:function(t){return"NaN"===n(t)},promise:function(t){return!!t&&(o.obj(t)||o.fn(t))&&o.fn(t.then)}};function a(t){var e={},r=e.toString,i=e.hasOwnProperty,n=i.toString,o=n.call(Object);if(!t||"[object Object]"!==r.call(t))return!1;var a=Object.getPrototypeOf(t);if(!a)return!0;var s=i.call(a,"constructor")&&a.constructor;return"function"==typeof s&&n.call(s)===o}function s(){for(var t,e,r,i,n,o,c=[],u=0;u<arguments.length;u++)c[u]=arguments[u];var h=arguments[0]||{},f=1,d=arguments.length,p=!1;for("boolean"==typeof h&&(p=h,h=arguments[f]||{},f++),"object"!=typeof h&&"function"!=typeof h&&(h={}),f===d&&(h=this,f--);f<d;f++)if(null!==(t=arguments[f]))for(e in t)if(t.hasOwnProperty(e)){if(n=h[e],h===(i=t[e]))continue;p&&i&&(a(i)||(o=Array.isArray(i)))?(o?(o=!1,r=n&&Array.isArray(n)?n:[]):r=n&&a(n)?n:{},h[e]=s(p,r,i)):void 0!==i&&(h[e]=i)}return h}function c(t,e){for(var r in t)t.hasOwnProperty(r)&&e(r,t[r])}function u(t){return"IMG"===t.tagName?{iw:t.naturalWidth,ih:t.naturalHeight}:{iw:t.width,ih:t.height}}function h(t,e){return t.indexOf&&-1!==t.indexOf(e)}function f(t,e,r,i){var n=r;if(o.str(r))if(h(r,":")&&"pos"===i){var a=r.split(":"),s=a[0],c=a[1];switch(s){case"left":case"top":n=+c.replace("px","");break;case"right":case"bottom":n=t-+c.replace("px","")-e}}else n=h(r,"px")?+r.replace("px",""):h(r,"%")?("crop"===i?e:t)*+r.replace("%","")/100:h(["top","left"],r)?0:h(["bottom","right"],r)?t-e:"center"===r?(t-e)/2:"origin"===r?e:+r;return Math.round(n)}function d(t,e){var r=e;return o.str(e)&&(r=h(e,"px")?+e.replace("px",""):h(e,"%")?t*+e.replace("%","")/100:"center"===e?t/2:+e),Math.round(r)}function p(t){throw new Error("[MCanvas ERROR]: "+t)}var l=r(4)._Canvas,g={getImage:function(t){return"string"==typeof t?v.loadImage(t):"object"==typeof t?Promise.resolve(t):Promise.reject("getImage error, src="+t)},drawRoundRectPath:function(t,e,r,i){t.beginPath(),t.arc(e-i,r-i,i,0,Math.PI/2),t.lineTo(i,r),t.arc(i,r-i,i,Math.PI/2,Math.PI),t.lineTo(0,i),t.arc(i,i,i,Math.PI,3*Math.PI/2),t.lineTo(e-i,0),t.arc(e-i,i,i,3*Math.PI/2,2*Math.PI),t.lineTo(e,r-i),t.closePath()},drawRoundRect:function(t,e,r,i,n,o,a,s,c){void 0===o&&(o=0),void 0===a&&(a="#fff"),void 0===s&&(s=0),void 0===c&&(c="#000");var u=Math.min(i,n);2*o>u&&(o=u/2),t.save(),t.translate(e,r),g.drawRoundRectPath(t,i,n,o),t.fillStyle=a,t.fill(),t.lineWidth=s,t.strokeStyle=c,t.stroke(),t.restore()}},v=s(!0,l,g);function y(t,e){var r=u(t),i=r.iw,n=r.ih,o=s(!0,{x:0,y:0,width:"100%",height:"100%",radius:0},e),a=o.width,c=o.height,h=o.x,p=o.y,l=o.radius;(a=d(i,a))>i&&(a=i),(c=d(n,c))>n&&(c=n),h=f(i,a,h,"pos"),p=f(n,c,p,"pos"),l=d(i,l);var g=v.create(a,c),y=g[0],x=g[1];return y.width=a,y.height=c,v.drawRoundRect(x,0,0,a,c,l),x.globalCompositeOperation="source-in",x.drawImage(t,-h,-p,i,n),{cvs:y,ctx:x}}var x=function(){function t(t){void 0===t&&(t={}),this.queue=[],this.fn={success:function(){},error:function(t){}},this.data={textId:0,text:{},bgConfig:null},this._defaultFontFamily="helvetica neue,hiragino sans gb,Microsoft YaHei,arial,tahoma,sans-serif",this.ops=s({width:500,height:500,backgroundColor:""},t),this._init()}return t.prototype._init=function(){var t,e=this.ops,r=e.width,i=e.height,n=e.backgroundColor;t=v.create(r,i),this.cvs=t[0],this.ctx=t[1],n&&this._setBgColor(n)},t.prototype.background=function(t,e){var r=this;return void 0===e&&(e={type:"origin"}),t||this.data.bgConfig?(t?(e.image=t,this.data.bgConfig=e):this.data.bgConfig&&(e=this.data.bgConfig),this.queue.push((function(){e.color&&r._setBgColor(e.color),v.getImage(e.image).then((function(t){return r._background(t,e)})).catch(r.fn.error)})),this):(p("the init background must has a image."),this)},t.prototype._setBgColor=function(t){this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.cvs.width,this.cvs.height)},t.prototype._getBgAlign=function(t,e,r,i){var n;return o.str(t)?"50%"===t||"center"===t?n=Math.abs((e-r/i)/2):"100%"===t?n=Math.abs(e-r/i):"0%"===t&&(n=0):n=o.num(t)?t:0,n},t.prototype._background=function(t,e){var r,i,n,o,a,s,c,h,f,d=u(t),l=d.iw,g=d.ih,v=l/g,y=this.cvs.width/this.cvs.height;switch(e.type){case"crop":v>y?(n=g*y,o=g,f=this.cvs.height/g):(o=(n=l)/y,f=this.cvs.width/l),r=this._getBgAlign(e.left,l,this.cvs.width,f),i=this._getBgAlign(e.top,g,this.cvs.height,f),s=a=0,h=this.cvs.height,c=this.cvs.width;break;case"contain":i=r=0,n=l,o=g,v>y?(h=(c=this.cvs.width)/v,a=e.left||0,s=e.top||0===e.top?e.top:(this.cvs.height-h)/2):(c=(h=this.cvs.height)*v,s=e.top||0,a=e.left||0===e.left?e.left:(this.cvs.width-c)/2);break;case"origin":this.cvs.width=l,this.cvs.height=g,r=i=0,n=l,o=g,a=s=0,c=this.cvs.width,h=this.cvs.height;break;default:return void p("background type error!")}this.ctx.drawImage(t,r,i,n,o,a,s,c,h),this._next()},t.prototype.rect=function(t){var e=this;return void 0===t&&(t={}),this.queue.push((function(){var r=e.cvs,i=r.width,n=r.height,o=t.fillColor,a=void 0===o?"#fff":o,s=t.strokeColor,c=void 0===s?a:s,u=t.strokeWidth,d=void 0===u?0:u,p=t.radius,l=void 0===p?0:p,g=t.width,y=void 0===g?100:g,x=t.height,m=void 0===x?100:x,w=t.x,b=void 0===w?0:w,_=t.y,I=void 0===_?0:_;y=f(i,0,y,"pos")-2*d,m=f(n,0,m,"pos")-2*d,b=f(i,y,b,"pos")+(h(b,"right")?-d:d),I=f(n,m,I,"pos")+(h(I,"bottom")?-d:d),v.drawRoundRect(e.ctx,b,I,y,m,l,a,d,c),e._resetCtx()._next()})),this},t.prototype.circle=function(t){var e=this;return void 0===t&&(t={}),this.queue.push((function(){var r=t.fillColor,i=void 0===r?"#fff":r,n=t.strokeColor,o=void 0===n?i:n,a=t.strokeWidth,s=void 0===a?0:a,c=e.cvs,u=c.width,d=c.height,p=t.x,l=void 0===p?0:p,g=t.y,v=void 0===g?0:g,y=t.radius,x=f(u,0,void 0===y?100:y,"pos")-2*s;l=f(u,2*x,l,"pos")+x+(h(l,"right")?-s:s),v=f(d,2*x,v,"pos")+x+(h(v,"bottom")?-s:s),e.ctx.beginPath(),e.ctx.arc(l,v,x,0,2*Math.PI,!1),e.ctx.fillStyle=i,e.ctx.fill(),e.ctx.strokeStyle=o,e.ctx.lineWidth=s,e.ctx.stroke(),e.ctx.closePath(),e._resetCtx()._next()})),this},t.prototype._resetCtx=function(){return this.ctx.setTransform(1,0,0,1,0,0),this},t.prototype.watermark=function(t,e){if(void 0===e&&(e={}),!t)return p("there is not image of watermark."),this;var r=e.width,i=void 0===r?"40%":r,n=e.pos,o=void 0===n?"rightbottom":n,a=e.margin,s=void 0===a?20:a,c={x:0,y:0,scale:1,rotate:0};switch(o){case"leftTop":c.x="left:"+s,c.y="top:"+s;break;case"leftBottom":c.x="left:"+s,c.y="bottom:"+s;break;case"rightTop":c.x="right:"+s,c.y="top:"+s;break;case"rightBottom":c.x="right:"+s,c.y="bottom:"+s}return this.add(t,{width:i,pos:c}),this},t.prototype.add=function(t,e){var r=this,i={width:"100%",crop:{x:0,y:0,width:"100%",height:"100%",radius:0},pos:{x:0,y:0,scale:1,rotate:0}};return(o.arr(t)?t:[{image:t,options:e}]).map((function(t){var e=t.image,n=t.options;r.queue.push((function(){v.getImage(e).then((function(t){r._add(t,r._handleOps(t,s(!0,i,n)))})).catch(r.fn.error)}))})),this},t.prototype._add=function(t,e){var r,i=e.crop,n=e.pos,o=e.width;0===o&&function(t){throw new Error("[MCanvas WARN]: "+t)}("the width of mc-element is zero");var a,s,c,h,f=u(t),d=f.iw,p=f.ih,l=i.width,g=i.height,x=i.radius;(l!==d||g!==p||x>0)&&(t=y(t,i).cvs);var m,w,b,_,I,j,C=l/g,M=d>p?d/p:p/d,O=1.4*M>5?5:1.4*M,k=v.create(Math.round(l*O),Math.round(g*O)),q=k[0],P=k[1],S=C>1?4096/q.width:4096/q.height;m=-Math.round(l/2),w=-Math.round(g/2),b=l,_=Math.round(l/C),(q.width>4096||q.height>4096)&&S&&(r=[q.width,q.height,m,w,b,_].map((function(t){return Math.round(t*S)})),q.width=r[0],q.height=r[1],m=r[2],w=r[3],b=r[4],_=r[5]),P.translate(q.width/2,q.height/2),P.rotate(n.rotate),P.drawImage(t,m,w,b,_),c=Math.round(o*O),h=Math.round(c/C),j=(I=(O-1)*o/2)/C,a=Math.round(n.x+c*(1-n.scale)/2-I),s=Math.round(n.y+h*(1-n.scale)/2-j),c*=n.scale,h*=n.scale,this.ctx.drawImage(q,a,s,c,h),this._next()},t.prototype._getRotate=function(t){return o.str(t)?parseFloat(t)*Math.PI/180:o.num(t)?t*Math.PI/180:0},t.prototype._handleOps=function(t,e){var r,i,n=this.cvs,o=n.width,a=n.height,s=u(t),c=s.iw,h=s.ih,p=c/h,l=f(o,c,e.width,"pos"),g=f(o,c,e.crop.width,"crop"),v=f(a,h,e.crop.height,"crop"),y={width:g,height:v,x:f(c,g,e.crop.x,"crop"),y:f(h,v,e.crop.y,"crop"),radius:d(g,e.crop.radius)};y.x>c&&(y.x=c),y.y>h&&(y.y=h),r=c-y.x,i=h-y.y,y.width>r&&(y.width=r),y.height>i&&(y.height=i);var x=e.pos,m=x.x,w=x.y,b=x.rotate,_=x.scale,I=void 0===_?1:_;return{width:l,crop:y,pos:{x:f(o,l,m,"pos"),y:f(a,l/p,w,"pos"),scale:I,rotate:this._getRotate(b)}}},t.prototype._createStyle=function(t,e){return{font:t+"px "+this._defaultFontFamily,lineHeight:e,color:"#000",type:"fill",lineWidth:1,shadow:{color:null,blur:0,offsetX:0,offsetY:0}}},t.prototype.text=function(t,e){var r=this;void 0===e&&(e={});var i=this.cvs.width/20;return this.queue.push((function(){var n,o=s(!0,{width:300,align:"left",smallStyle:r._createStyle(.8*i,.9*i),normalStyle:r._createStyle(i,1.1*i),largeStyle:r._createStyle(1.3*i,1.4*i),pos:{x:0,y:0,rotate:0}},e),a=r._parse(String(t)),c=0;a.map((function(t){t.size>c&&(c=t.size,n=t.type)}));var u=parseInt(o[n+"Style"].font);u&&o.width<u&&(o.width=u),r._text(a,o),r._resetCtx()._next()})),this},t.prototype._parse=function(t){for(var e=t.split(/<s>|<b>/),r=[],i=0;i<e.length;i++){var n=e[i];if(/<\/s>|<\/b>/.test(n)){var o=/<\/s>/.test(n)?"</s>":"</b>",a=/<\/s>/.test(n)?"small":"large",s=e[i].split(o);r.push({type:a,text:s[0],size:"small"===a?0:2}),s[1]&&r.push({type:"normal",text:s[1],size:1})}else e[i]&&r.push({text:e[i],type:"normal",size:1})}return r},t.prototype._text=function(t,e){var r=this;this.data.textId++,this.data.text[this.data.textId]={};var i,n=e.width=f(this.cvs.width,0,e.width,"pos"),o=1,a=0,s=this._getLineHeight(t,e),u=f(this.cvs.width,n,0,"pos"),d=f(this.cvs.height,0,0,"pos")+s;this.data.text[this.data.textId][o]={data:[],lineWidth:0},t.map((function(t){i=e[t.type+"Style"],r.ctx.font=i.font;var c=r.ctx.measureText(t.text).width,f=t.text.replace(/<br>/g,"|");if(a+c>n||h(f,"|"))for(var p=0,l=f.length;p<l;p++){var g,v=f[p];if(c=r.ctx.measureText(v).width,!(a+c>n||"|"===v)||(u=a=0,d+=s,o+=1,r.data.text[r.data.textId][o]={data:[],lineWidth:0},"|"!==v))(g=r.data.text[r.data.textId][o]).data.push({context:v,x:u,y:d,style:i,width:c}),u+=c,g.lineWidth=a+=c}else(g=r.data.text[r.data.textId][o]).data.push({context:f,x:u,y:d,style:i,width:c}),u+=c,g.lineWidth=a+=c}));var p=v.create(n,this._getTextRectHeight(o)),l=p[0],g=p[1],y=l.height,x=l.width,m=f(this.cvs.width,x,e.pos.x,"pos"),w=f(this.cvs.height,y,e.pos.y,"pos");c(this.data.text[this.data.textId],(function(t,i){var o=0;i.lineWidth<n&&("center"===e.align?o=(n-i.lineWidth)/2:"right"===e.align&&(o=n-i.lineWidth)),i.data.map((function(t){t.x+=o,r._fillText(g,t)}))})),this.ctx.translate(m+x/2,w+y/2),this.ctx.rotate(this._getRotate(e.pos.rotate)),this.ctx.drawImage(l,-x/2,-y/2,x,y)},t.prototype._getLineHeight=function(t,e){var r,i=0;return t.map((function(t){(r=e[t.type+"Style"].lineHeight)>i&&(i=r)})),i},t.prototype._fillText=function(t,e){var r=e.context,i=e.x,n=e.y,o=e.style,a=o.align,s=o.lineWidth,u=o.shadow,h=o.font,f=o.gradient,d=o.lineHeight,p=u.color,l=u.blur,g=u.offsetX,v=u.offsetY;if(t.font=h,t.textAlign=a,t.textBaseline="alphabetic",t.lineWidth=s,t.shadowColor=p,t.shadowBlur=l,t.shadowOffsetX=g,t.shadowOffsetY=v,f){var y=f.type,x=f.colorStop,m=void 0,w=void 0,b=void 0,_=void 0;1===y?(m=i,w=n,b=i+e.width,_=n):(m=i,w=n-d,b=i,_=n);var I=t.createLinearGradient(m,w,b,_),j=x.length||0;c(x,(function(t,e){I.addColorStop(1/j*(+t+1),e)})),t[o.type+"Style"]=I}else t[o.type+"Style"]=o.color;t[o.type+"Text"](r,i,n),this._resetCtx()},t.prototype._getTextRectHeight=function(t){var e=this.data.text[this.data.textId][t].data[0];return e.y+e.style.lineHeight},t.prototype.draw=function(t){var e=this;return void 0===t&&(t={}),new Promise((function(r,i){var n={type:"jpeg",quality:.9,exportType:"base64",success:function(t){},error:function(t){}};o.fn(t)?n.success=t:"jpg"===(n=s(!0,n,t)).type&&(n.type="jpeg"),e.fn.error=function(t){n.error(t),i(t)},e.fn.success=function(){"canvas"===n.exportType?(n.success(e.cvs),r(e.cvs)):setTimeout((function(){var t=e.cvs.toDataURL("image/"+n.type,n.quality);n.success(t),r(t)}),0)},e._next()}))},t.prototype._next=function(){if(this.queue.length>0){this.ctx.save();var t=this.queue.shift();t&&t(),this.ctx.restore()}else this.fn.success()},t.prototype.clear=function(){return this.ctx.clearRect(0,0,this.cvs.width,this.cvs.height),this},t}(),m=r(0),w=function(){function t(t){var e=this;this.isFirst=!0,this.queue=[],this._next=function(t){if(e.isFirst||(t=e.after(t)),e.queue.length>0){var r=e.queue.shift();r&&(t=e.before(t),r(e._next,t),e.isFirst=!1)}else e.end(t),e.queue=[]};var r=t||{},i=r.before,n=void 0===i?function(t){return t}:i,o=r.after,a=void 0===o?function(t){return t}:o;this.before=n,this.after=a}return t.prototype.push=function(t){o.fn(t)&&this.queue.push(t)},t.prototype.perform=function(t,e){this.end=t,this._next(e)},t}(),b=(function(){function t(){this._queue=new w}t.prototype.line=function(t){var e=this;return this._queue.push((function(r,i){setTimeout((function(){return Object(m.__awaiter)(e,void 0,void 0,(function(){var e;return Object(m.__generator)(this,(function(n){return e=t(i),o.promise(e)?e.then(r):r(e),[2]}))}))}),0)})),this},t.prototype.start=function(t,e){this._queue.perform(t,e)}}(),r(2));function _(t,e){void 0===e&&(e=20);var r=t.width,i=t.height,n=t.getContext("2d");return b.canvasRGBA(t,0,0,r,i,e),[t,n]}function I(t,e){void 0===e&&(e="hor");var r,i,n,o,a=t.width,s=t.height,c=t.getContext("2d"),u=c.getImageData(0,0,a,s).data,h=c.createImageData(a,s),f=h.data;for(r=0;r<s;r++)for(i=0;i<a;i++)n=4*(r*a+i),f[o="hor"===e?4*(r*a+(a-i-1)):4*((s-r-1)*a+i)]=u[n],f[o+1]=u[n+1],f[o+2]=u[n+2],f[o+3]=u[n+3];return c.putImageData(h,0,0),[t,c]}function j(t){var e,r,i=t.width,n=t.height,o=t.getContext("2d"),a=o.getImageData(0,0,i,n).data,s=o.createImageData(i,n),c=s.data;for(e=0;e<a.length;e+=4)r=.3*a[e]+.59*a[e+1]+.11*a[e+2],c[e]=c[e+1]=c[e+2]=r,c[e+3]=a[e+3];return o.putImageData(s,0,0),[t,o]}function C(t,e){void 0===e&&(e=10);var r,i,n,o,a,s,c,u,h,f,d,p,l,g,v,y=t.width,x=t.height,m=t.getContext("2d"),w=m.getImageData(0,0,y,x).data,b=m.createImageData(y,x),_=b.data,I=Math.ceil(y/e),j=Math.ceil(x/e);for(r=0;r<j;r++)for((s=(a=r*e)+e)>x&&(s=x),i=0;i<I;i++){for((o=(n=i*e)+e)>y&&(o=y),p=l=g=v=0,d=(o-n)*(s-a),u=a;u<s;u+=1)for(h=u*y,c=n;c<o;c+=1)p+=w[f=h+c<<2],l+=w[f+1],g+=w[f+2],v+=w[f+3];for(p=p/d+.5|0,l=l/d+.5|0,g=g/d+.5|0,v=v/d+.5|0,u=a;u<s;u++)for(h=u*y,c=n;c<o;c++)_[f=h+c<<2]=p,_[f+1]=l,_[f+2]=g,_[f+3]=v}return m.putImageData(b,0,0),[t,m]}function M(t,e,r){void 0===e&&(e=2),void 0===r&&(r=32);var i,n,o,a,s,c,u,h,f,d,p,l,g,v,y,x,m,w,b=t.width,_=t.height,I=t.getContext("2d"),j=I.getImageData(0,0,b,_).data,C=I.createImageData(b,_),M=C.data,O=[],k=[],q=[],P=[],S=[],R=[],T=0;for(c=0;c<_;c++)for(s=0;s<b;s++){for(u=0;u<r;u++)O[u]=k[u]=q[u]=P[u]=S[u]=R[u]=0;for(h=-e;h<=e;h++)if(!((i=c+h)<0||i>=_))for(o=i*b,f=-e;f<=e;f++)(n=s+f)<0||n>=b||(d=j[a=o+n<<2],v=(p=j[a+1])*r>>8,y=(l=j[a+2])*r>>8,P[g=d*r>>8]+=d,S[v]+=p,R[y]+=l,O[g]+=1,k[v]+=1,q[y]+=1);for(x=m=w=0,u=1;u<r;u++)O[u]>O[x]&&(x=u),k[u]>k[m]&&(m=u),q[u]>q[w]&&(w=u);M[T]=P[x]/O[x]|0,M[T+1]=S[m]/k[m]|0,M[T+2]=R[w]/q[w]|0,M[T+3]=j[T+3],T+=4}return I.putImageData(C,0,0),[t,I]}var O=function(){function t(t){this._image=t,this._queue=new w,this.clear()}return t.prototype.clear=function(){return this._getImage()._drawCanvas(),this},t.prototype._drawCanvas=function(){return this._run((function(t){var e=u(t),r=e.iw,i=e.ih,n=v.create(r,i),o=n[0],a=n[1];return a.drawImage(t,0,0,r,i),{cvs:o,ctx:a}}))},t.prototype._getImage=function(){var t=this;return this._run((function(){return new Promise((function(e){return Object(m.__awaiter)(t,void 0,void 0,(function(){var t=this;return Object(m.__generator)(this,(function(r){return o.str(this._image)?v.getImage(this._image).then((function(r){return e(t._image=r)})).catch(this._error):e(this._image),[2]}))}))}))}))},t.prototype._run=function(t){var e=this;return this._queue.push((function(r,i){setTimeout((function(){return Object(m.__awaiter)(e,void 0,void 0,(function(){var e;return Object(m.__generator)(this,(function(n){return e=t(i),o.promise(e)?e.then(r):r(e),[2]}))}))}),0)})),this},t.prototype.draw=function(t){var e=this;return void 0===t&&(t={}),new Promise((function(r,i){var n={type:"jpeg",quality:1,exportType:"base64",success:function(t){},error:function(t){}};o.fn(t)?n.success=t:"jpg"===(n=s(!0,n,t)).type&&(n.type="jpeg");var a=n.exportType,c=n.type,u=n.quality,h=n.success,f=n.error,d=function(t){h(t),r(t),e.clear()};e._error=function(t){f(t),i(t)},e._queue.perform((function(t){var e=t.cvs,r=t.quality;"canvas"===a?d(e):setTimeout((function(){var t=e.toDataURL("image/"+c,r||u);d(t)}),0)}))}))},t.prototype.crop=function(t){return void 0===t&&(t={}),this._run((function(e){return y(e.cvs,t)}))},t.prototype.compress=function(t){return void 0===t&&(t={}),this._run((function(e){var r=e.cvs,i=e.ctx,n=t.quality,a=t.width,s=t.height,c=r.width/r.height;if(!o.num(a)&&!o.num(s))return{cvs:r,ctx:i,quality:n};o.num(a)||(a=s*c),o.num(s)||(s=a/c);var u=v.create(a,s),h=u[0],f=u[1];return f.drawImage(r,0,0,a,s),{cvs:h,ctx:f,quality:n}}))},t.prototype.filter=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return this._run((function(r){var i,n,o,a,s,c=r.cvs,u=c,h=r.ctx;switch(t){case"blur":u=(i=_.apply(void 0,Object(m.__spreadArrays)([c],e)))[0],h=i[1];break;case"flip":u=(n=I.apply(void 0,Object(m.__spreadArrays)([c],e)))[0],h=n[1];break;case"gray":u=(o=j(c))[0],h=o[1];break;case"mosaic":u=(a=C.apply(void 0,Object(m.__spreadArrays)([c],e)))[0],h=a[1];break;case"oil":u=(s=M.apply(void 0,Object(m.__spreadArrays)([c],e)))[0],h=s[1]}return{cvs:u,ctx:h}}))},t}();e.default=x}])}));