var Zp=Object.defineProperty;var Kp=(o,e,t)=>e in o?Zp(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var ie=(o,e,t)=>(Kp(o,typeof e!="symbol"?e+"":e,t),t);import{q as za,h as Dt,s as hr,f as jt,o as qe,j as at,b as he,t as Ut,d as Pe,x as Jp,y as $t,z as ka,p as Ui,m as zi,_ as Vn,i as Va,F as vs,k as Yr,A as Ha,B as Ga,C as Nn,D as Xh,c as vn,w as Bt,a as Wt,E as cn,G as Od,H as Fd,n as Bd,I as Qp,J as Ud,l as kr,v as Vr,L as zd,M as em,N as tm}from"./index-34ee2b13.js";import{g as Pi,i as nm,d as im,u as hc,f as sm}from"./common-073756f3.js";import{$ as It}from"./jquery-0079c693.js";var Qc=function(){this._tweens={},this._tweensAddedDuringUpdate={}};Qc.prototype={getAll:function(){return Object.keys(this._tweens).map(function(o){return this._tweens[o]}.bind(this))},removeAll:function(){this._tweens={}},add:function(o){this._tweens[o.getId()]=o,this._tweensAddedDuringUpdate[o.getId()]=o},remove:function(o){delete this._tweens[o.getId()],delete this._tweensAddedDuringUpdate[o.getId()]},update:function(o,e){var t=Object.keys(this._tweens);if(t.length===0)return!1;for(o=o!==void 0?o:Se.now();0<t.length;){this._tweensAddedDuringUpdate={};for(var n=0;n<t.length;n++){var i=this._tweens[t[n]];i&&i.update(o)===!1&&(i._isPlaying=!1,e||delete this._tweens[t[n]])}t=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var Se=new Qc;Se.Group=Qc,Se._nextId=0,Se.nextId=function(){return Se._nextId++},typeof self>"u"&&typeof process<"u"&&process.hrtime?Se.now=function(){var o=process.hrtime();return 1e3*o[0]+o[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?Se.now=self.performance.now.bind(self.performance):Date.now!==void 0?Se.now=Date.now:Se.now=function(){return new Date().getTime()},Se.Tween=function(o,e){this._object=o,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=Se.Easing.Linear.None,this._interpolationFunction=Se.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=e||Se,this._id=Se.nextId()},Se.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},to:function(o,e){return this._valuesEnd=Object.create(o),e!==void 0&&(this._duration=e),this},duration:function(o){return this._duration=o,this},start:function(o){for(var e in this._group.add(this),this._isPlaying=!0,this._onStartCallbackFired=!1,this._startTime=o!==void 0?typeof o=="string"?Se.now()+parseFloat(o):o:Se.now(),this._startTime+=this._delayTime,this._valuesEnd){if(this._valuesEnd[e]instanceof Array){if(this._valuesEnd[e].length===0)continue;this._valuesEnd[e]=[this._object[e]].concat(this._valuesEnd[e])}this._object[e]!==void 0&&(this._valuesStart[e]=this._object[e],!(this._valuesStart[e]instanceof Array)&&(this._valuesStart[e]*=1),this._valuesStartRepeat[e]=this._valuesStart[e]||0)}return this},stop:function(){return this._isPlaying&&(this._group.remove(this),this._isPlaying=!1,this._onStopCallback!==null&&this._onStopCallback(this._object),this.stopChainedTweens()),this},end:function(){return this.update(1/0),this},stopChainedTweens:function(){for(var o=0,e=this._chainedTweens.length;o<e;o++)this._chainedTweens[o].stop()},group:function(o){return this._group=o,this},delay:function(o){return this._delayTime=o,this},repeat:function(o){return this._repeat=o,this},repeatDelay:function(o){return this._repeatDelayTime=o,this},yoyo:function(o){return this._yoyo=o,this},easing:function(o){return this._easingFunction=o,this},interpolation:function(o){return this._interpolationFunction=o,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(o){return this._onStartCallback=o,this},onUpdate:function(o){return this._onUpdateCallback=o,this},onComplete:function(o){return this._onCompleteCallback=o,this},onStop:function(o){return this._onStopCallback=o,this},update:function(o){var e,t,n;if(o<this._startTime)return!0;for(e in this._onStartCallbackFired===!1&&(this._onStartCallback!==null&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),t=(o-this._startTime)/this._duration,t=this._duration===0||1<t?1:t,n=this._easingFunction(t),this._valuesEnd)if(this._valuesStart[e]!==void 0){var i=this._valuesStart[e]||0,s=this._valuesEnd[e];s instanceof Array?this._object[e]=this._interpolationFunction(s,n):(typeof s=="string"&&(s=s.charAt(0)==="+"||s.charAt(0)==="-"?i+parseFloat(s):parseFloat(s)),typeof s=="number"&&(this._object[e]=i+(s-i)*n))}if(this._onUpdateCallback!==null&&this._onUpdateCallback(this._object),t!==1)return!0;if(0<this._repeat){for(e in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat){if(typeof this._valuesEnd[e]=="string"&&(this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(this._valuesEnd[e])),this._yoyo){var r=this._valuesStartRepeat[e];this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=r}this._valuesStart[e]=this._valuesStartRepeat[e]}return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=o+this._repeatDelayTime:this._startTime=o+this._delayTime,!0}this._onCompleteCallback!==null&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration);return!1}},Se.Easing={Linear:{None:function(o){return o}},Quadratic:{In:function(o){return o*o},Out:function(o){return o*(2-o)},InOut:function(o){return(o*=2)<1?.5*o*o:-.5*(--o*(o-2)-1)}},Cubic:{In:function(o){return o*o*o},Out:function(o){return--o*o*o+1},InOut:function(o){return(o*=2)<1?.5*o*o*o:.5*((o-=2)*o*o+2)}},Quartic:{In:function(o){return o*o*o*o},Out:function(o){return 1- --o*o*o*o},InOut:function(o){return(o*=2)<1?.5*o*o*o*o:-.5*((o-=2)*o*o*o-2)}},Quintic:{In:function(o){return o*o*o*o*o},Out:function(o){return--o*o*o*o*o+1},InOut:function(o){return(o*=2)<1?.5*o*o*o*o*o:.5*((o-=2)*o*o*o*o+2)}},Sinusoidal:{In:function(o){return 1-Math.cos(o*Math.PI/2)},Out:function(o){return Math.sin(o*Math.PI/2)},InOut:function(o){return .5*(1-Math.cos(Math.PI*o))}},Exponential:{In:function(o){return o===0?0:Math.pow(1024,o-1)},Out:function(o){return o===1?1:1-Math.pow(2,-10*o)},InOut:function(o){return o===0?0:o===1?1:(o*=2)<1?.5*Math.pow(1024,o-1):.5*(2-Math.pow(2,-10*(o-1)))}},Circular:{In:function(o){return 1-Math.sqrt(1-o*o)},Out:function(o){return Math.sqrt(1- --o*o)},InOut:function(o){return(o*=2)<1?-.5*(Math.sqrt(1-o*o)-1):.5*(Math.sqrt(1-(o-=2)*o)+1)}},Elastic:{In:function(o){return o===0?0:o===1?1:-Math.pow(2,10*(o-1))*Math.sin(5*(o-1.1)*Math.PI)},Out:function(o){return o===0?0:o===1?1:Math.pow(2,-10*o)*Math.sin(5*(o-.1)*Math.PI)+1},InOut:function(o){return o===0?0:o===1?1:(o*=2)<1?-.5*Math.pow(2,10*(o-1))*Math.sin(5*(o-1.1)*Math.PI):.5*Math.pow(2,-10*(o-1))*Math.sin(5*(o-1.1)*Math.PI)+1}},Back:{In:function(o){return o*o*(2.70158*o-1.70158)},Out:function(o){return--o*o*(2.70158*o+1.70158)+1},InOut:function(o){var e=2.5949095;return(o*=2)<1?o*o*((1+e)*o-e)*.5:.5*((o-=2)*o*((1+e)*o+e)+2)}},Bounce:{In:function(o){return 1-Se.Easing.Bounce.Out(1-o)},Out:function(o){return o<1/2.75?7.5625*o*o:o<2/2.75?7.5625*(o-=1.5/2.75)*o+.75:o<2.5/2.75?7.5625*(o-=2.25/2.75)*o+.9375:7.5625*(o-=2.625/2.75)*o+.984375},InOut:function(o){return o<.5?.5*Se.Easing.Bounce.In(2*o):.5*Se.Easing.Bounce.Out(2*o-1)+.5}}},Se.Interpolation={Linear:function(o,e){var t=o.length-1,n=t*e,i=Math.floor(n),s=Se.Interpolation.Utils.Linear;return e<0?s(o[0],o[1],n):1<e?s(o[t],o[t-1],t-n):s(o[i],o[t<i+1?t:i+1],n-i)},Bezier:function(o,e){for(var t=0,n=o.length-1,i=Math.pow,s=Se.Interpolation.Utils.Bernstein,r=0;r<=n;r++)t+=i(1-e,n-r)*i(e,r)*o[r]*s(n,r);return t},CatmullRom:function(o,e){var t=o.length-1,n=t*e,i=Math.floor(n),s=Se.Interpolation.Utils.CatmullRom;return o[0]===o[t]?(e<0&&(i=Math.floor(n=t*(1+e))),s(o[(i-1+t)%t],o[i],o[(i+1)%t],o[(i+2)%t],n-i)):e<0?o[0]-(s(o[0],o[0],o[1],o[1],-n)-o[0]):1<e?o[t]-(s(o[t],o[t],o[t-1],o[t-1],n-t)-o[t]):s(o[i?i-1:0],o[i],o[t<i+1?t:i+1],o[t<i+2?t:i+2],n-i)},Utils:{Linear:function(o,e,t){return(e-o)*t+o},Bernstein:function(o,e){var t=Se.Interpolation.Utils.Factorial;return t(o)/t(e)/t(o-e)},Factorial:function(){var o=[1];return function(e){var t=1;if(o[e])return o[e];for(var n=e;1<n;n--)t*=n;return o[e]=t}}(),CatmullRom:function(o,e,t,n,i){var s=.5*(t-o),r=.5*(n-e),a=i*i;return(2*e-2*t+s+r)*(i*a)+(-3*e+3*t-2*s-r)*a+s*i+e}}},function(o){typeof define=="function"&&define.amd?define([],function(){return Se}):typeof module<"u"&&typeof exports=="object"?module.exports=Se:o!==void 0&&(o.TWEEN=Se)}(globalThis);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wa="145",ts={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kd=0,uc=1,Vd=2,rm=3,om=0,eh=1,Hd=2,Ys=3,Un=0,tn=1,Lt=2,oi=0,ds=1,Qs=2,dc=3,fc=4,Gd=5,rs=100,Wd=101,Xd=102,pc=103,mc=104,qd=200,$d=201,Yd=202,jd=203,th=204,nh=205,Zd=206,Kd=207,Jd=208,Qd=209,ef=210,tf=0,nf=1,sf=2,Da=3,rf=4,of=5,af=6,lf=7,ho=0,cf=1,hf=2,bn=0,uf=1,df=2,ff=3,Xa=4,pf=5,qa=300,Di=301,Ni=302,xs=303,jr=304,ur=306,wn=1e3,zt=1001,er=1002,xt=1003,Zr=1004,am=1004,Kr=1005,lm=1005,it=1006,$a=1007,cm=1007,li=1008,hm=1008,Oi=1009,mf=1010,gf=1011,ih=1012,vf=1013,Ci=1014,dn=1015,yn=1016,xf=1017,_f=1018,fs=1020,yf=1021,bf=1022,Xt=1023,wf=1024,Mf=1025,Ii=1026,_s=1027,Sf=1028,Tf=1029,Af=1030,Ef=1031,Cf=1033,Sa=33776,Ta=33777,Aa=33778,Ea=33779,gc=35840,vc=35841,xc=35842,_c=35843,Lf=36196,yc=37492,bc=37496,wc=37808,Mc=37809,Sc=37810,Tc=37811,Ac=37812,Ec=37813,Cc=37814,Lc=37815,Rc=37816,Pc=37817,Ic=37818,Dc=37819,Nc=37820,Oc=37821,Fc=36492,Rf=2200,Pf=2201,If=2202,tr=2300,ys=2301,Ca=2302,ls=2400,cs=2401,Jr=2402,Ya=2500,sh=2501,um=0,Df=1,rh=2,zn=3e3,Xe=3001,Nf=3200,Of=3201,ci=0,Ff=1,dm="",Dn="srgb",Li="srgb-linear",fm=0,La=7680,pm=7681,mm=7682,gm=7683,vm=34055,xm=34056,_m=5386,ym=512,bm=513,wm=514,Mm=515,Sm=516,Tm=517,Am=518,Bf=519,nr=35044,Qt=35048,Em=35040,Cm=35045,Lm=35049,Rm=35041,Pm=35046,Im=35050,Dm=35042,Nm="100",Bc="300 es",Na=1035;class Hn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qh=1234567;const ps=Math.PI/180,Qr=180/Math.PI;function nn(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[o&255]+Nt[o>>8&255]+Nt[o>>16&255]+Nt[o>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function _t(o,e,t){return Math.max(e,Math.min(t,o))}function oh(o,e){return(o%e+e)%e}function Om(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function Fm(o,e,t){return o!==e?(t-o)/(e-o):0}function Hr(o,e,t){return(1-t)*o+t*e}function Bm(o,e,t,n){return Hr(o,e,1-Math.exp(-t*n))}function Um(o,e=1){return e-Math.abs(oh(o,e*2)-e)}function zm(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function km(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Vm(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Hm(o,e){return o+Math.random()*(e-o)}function Gm(o){return o*(.5-Math.random())}function Wm(o){o!==void 0&&(qh=o);let e=qh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xm(o){return o*ps}function qm(o){return o*Qr}function Uc(o){return(o&o-1)===0&&o!==0}function Uf(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Oa(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function $m(o,e,t,n,i){const s=Math.cos,r=Math.sin,a=s(t/2),l=r(t/2),c=s((e+n)/2),h=r((e+n)/2),u=s((e-n)/2),d=r((e-n)/2),f=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":o.set(a*h,l*u,l*d,a*c);break;case"YZY":o.set(l*d,a*h,l*u,a*c);break;case"ZXZ":o.set(l*u,l*d,a*h,a*c);break;case"XZX":o.set(a*h,l*g,l*f,a*c);break;case"YXY":o.set(l*f,a*h,l*g,a*c);break;case"ZYZ":o.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function si(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function rt(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var zf=Object.freeze({__proto__:null,DEG2RAD:ps,RAD2DEG:Qr,generateUUID:nn,clamp:_t,euclideanModulo:oh,mapLinear:Om,inverseLerp:Fm,lerp:Hr,damp:Bm,pingpong:Um,smoothstep:zm,smootherstep:km,randInt:Vm,randFloat:Hm,randFloatSpread:Gm,seededRandom:Wm,degToRad:Xm,radToDeg:qm,isPowerOfTwo:Uc,ceilPowerOfTwo:Uf,floorPowerOfTwo:Oa,setQuaternionFromProperEuler:$m,normalize:rt,denormalize:si});class ${constructor(e=0,t=0){$.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],p=i[0],m=i[3],v=i[6],x=i[1],_=i[4],y=i[7],w=i[2],M=i[5],E=i[8];return s[0]=r*p+a*x+l*w,s[3]=r*m+a*_+l*M,s[6]=r*v+a*y+l*E,s[1]=c*p+h*x+u*w,s[4]=c*m+h*_+u*M,s[7]=c*v+h*y+u*E,s[2]=d*p+f*x+g*w,s[5]=d*m+f*_+g*M,s[8]=d*v+f*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*a*c-n*s*h+n*a*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*r-a*c,d=a*l-h*s,f=c*s-r*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=u*p,e[1]=(i*c-h*n)*p,e[2]=(a*n-i*r)*p,e[3]=d*p,e[4]=(h*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=f*p,e[7]=(n*l-c*t)*p,e[8]=(r*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-i*c,i*l,-i*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],r=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*s+n*l,i[3]=t*r+n*c,i[6]=t*a+n*h,i[1]=-n*s+t*l,i[4]=-n*r+t*c,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function kf(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}const Ym={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function js(o,e){return new Ym[o](e)}function eo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ms(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ra(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const ml={[Dn]:{[Li]:ms},[Li]:{[Dn]:Ra}},ln={legacyMode:!0,get workingColorSpace(){return Li},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(ml[e]&&ml[e][t]!==void 0){const n=ml[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mt={r:0,g:0,b:0},pn={h:0,s:0,l:0},Do={h:0,s:0,l:0};function gl(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function No(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ln.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Li){return this.r=e,this.g=t,this.b=n,ln.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Li){if(e=oh(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=gl(r,s,e+1/3),this.g=gl(r,s,e),this.b=gl(r,s,e-1/3)}return ln.toWorkingColorSpace(this,i),this}setStyle(e,t=Dn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ln.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ln.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ln.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ln.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Dn){const n=Vf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return ln.fromWorkingColorSpace(No(this,Mt),e),_t(Mt.r*255,0,255)<<16^_t(Mt.g*255,0,255)<<8^_t(Mt.b*255,0,255)<<0}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Li){ln.fromWorkingColorSpace(No(this,Mt),t);const n=Mt.r,i=Mt.g,s=Mt.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Li){return ln.fromWorkingColorSpace(No(this,Mt),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Dn){return ln.fromWorkingColorSpace(No(this,Mt),e),e!==Dn?`color(${e} ${Mt.r} ${Mt.g} ${Mt.b})`:`rgb(${Mt.r*255|0},${Mt.g*255|0},${Mt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(pn),pn.h+=e,pn.s+=t,pn.l+=n,this.setHSL(pn.h,pn.s,pn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pn),e.getHSL(Do);const n=Hr(pn.h,Do.h,t),i=Hr(pn.s,Do.s,t),s=Hr(pn.l,Do.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}oe.NAMES=Vf;let Ls;class ah{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=eo("canvas")),Ls.width=e.width,Ls.height=e.height;const n=Ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=eo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ms(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ms(t[n]/255)*255):t[n]=ms(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class hs{constructor(e=null){this.isSource=!0,this.uuid=nn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(vl(i[r].image)):s.push(vl(i[r]))}else s=vl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function vl(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ah.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jm=0;class mt extends Hn{constructor(e=mt.DEFAULT_IMAGE,t=mt.DEFAULT_MAPPING,n=zt,i=zt,s=it,r=li,a=Xt,l=Oi,c=1,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=nn(),this.name="",this.source=new hs(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wn:e.x=e.x-Math.floor(e.x);break;case zt:e.x=e.x<0?0:1;break;case er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wn:e.y=e.y-Math.floor(e.y);break;case zt:e.y=e.y<0?0:1;break;case er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=qa;class Je{constructor(e=0,t=0,n=0,i=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],p=l[2],m=l[6],v=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,y=(f+1)/2,w=(v+1)/2,M=(h+d)/4,E=(u+p)/4,b=(g+m)/4;return _>y&&_>w?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=M/n,s=E/n):y>w?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=M/i,s=b/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=E/s,i=b/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-p)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rt extends Hn{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:it,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uo extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zm extends Rt{constructor(e,t,n){super(e,t),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new uo(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class ja extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Km extends Rt{constructor(e,t,n){super(e,t),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new ja(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Jm extends Rt{constructor(e,t,n,i={}){super(e,t,i),this.isWebGLMultipleRenderTargets=!0;const s=this.texture;this.texture=[];for(let r=0;r<n;r++)this.texture[r]=s.clone(),this.texture[r].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class Pt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[r+0],f=s[r+1],g=s[r+2],p=s[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=p;return}if(u!==p||l!==d||c!==f||h!==g){let m=1-a;const v=l*d+c*f+h*g+u*p,x=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const w=Math.sqrt(_),M=Math.atan2(w,v*x);m=Math.sin(m*M)/w,a=Math.sin(a*M)/w}const y=a*x;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+p*y,m===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*a+i*c-s*l,this._y=i*h+r*l+s*a-n*c,this._z=s*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(e=0,t=0,n=0){S.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($h.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,l=e.w,c=l*t+r*i-a*n,h=l*n+a*t-s*i,u=l*i+s*n-r*t,d=-s*t-r*n-a*i;return this.x=c*l+d*-s+h*-a-u*-r,this.y=h*l+d*-r+u*-s-c*-a,this.z=u*l+d*-a+c*-r-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xl.copy(this).projectOnVector(e),this.sub(xl)}reflect(e){return this.sub(xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xl=new S,$h=new Pt;class Sn{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>r&&(r=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,r,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>r&&(r=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,r,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,a=s.count;r<a;r++)qi.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(qi)}else n.boundingBox===null&&n.computeBoundingBox(),_l.copy(n.boundingBox),_l.applyMatrix4(e.matrixWorld),this.union(_l);const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),Oo.subVectors(this.max,wr),Rs.subVectors(e.a,wr),Ps.subVectors(e.b,wr),Is.subVectors(e.c,wr),mi.subVectors(Ps,Rs),gi.subVectors(Is,Ps),$i.subVectors(Rs,Is);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-$i.z,$i.y,mi.z,0,-mi.x,gi.z,0,-gi.x,$i.z,0,-$i.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-$i.y,$i.x,0];return!yl(t,Rs,Ps,Is,Oo)||(t=[1,0,0,0,1,0,0,0,1],!yl(t,Rs,Ps,Is,Oo))?!1:(Fo.crossVectors(mi,gi),t=[Fo.x,Fo.y,Fo.z],yl(t,Rs,Ps,Is,Oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return qi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new S,new S,new S,new S,new S,new S,new S,new S],qi=new S,_l=new Sn,Rs=new S,Ps=new S,Is=new S,mi=new S,gi=new S,$i=new S,wr=new S,Oo=new S,Fo=new S,Yi=new S;function yl(o,e,t,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){Yi.fromArray(o,s);const a=i.x*Math.abs(Yi.x)+i.y*Math.abs(Yi.y)+i.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),h=n.dot(Yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Qm=new Sn,Yh=new S,Bo=new S,bl=new S;class ki{constructor(e=new S,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bl.subVectors(e,this.center);const t=bl.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(bl.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?Bo.set(0,0,1).multiplyScalar(e.radius):Bo.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Yh.copy(e.center).add(Bo)),this.expandByPoint(Yh.copy(e.center).sub(Bo)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new S,wl=new S,Uo=new S,vi=new S,Ml=new S,zo=new S,Sl=new S;class fo{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.direction).multiplyScalar(t).add(this.origin),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){wl.copy(e).add(t).multiplyScalar(.5),Uo.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(wl);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Uo),a=vi.dot(this.direction),l=-vi.dot(Uo),c=vi.lengthSq(),h=Math.abs(1-r*r);let u,d,f,g;if(h>0)if(u=r*l-a,d=r*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const p=1/h;u*=p,d*=p,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Uo).multiplyScalar(d).add(wl),f}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),i=qn.dot(qn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||s>i||((s>n||n!==n)&&(n=s),(r<i||i!==i)&&(i=r),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,i,s){Ml.subVectors(t,e),zo.subVectors(n,e),Sl.crossVectors(Ml,zo);let r=this.direction.dot(Sl),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(zo.crossVectors(vi,zo));if(l<0)return null;const c=a*this.direction.dot(Ml.cross(vi));if(c<0||l+c>r)return null;const h=-a*vi.dot(Sl);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,a,l,c,h,u,d,f,g,p,m){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=r,v[9]=a,v[13]=l,v[2]=c,v[6]=h,v[10]=u,v[14]=d,v[3]=f,v[7]=g,v[11]=p,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ds.setFromMatrixColumn(e,0).length(),s=1/Ds.setFromMatrixColumn(e,1).length(),r=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=r*h,f=r*u,g=a*h,p=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-p*c,t[9]=-a*l,t[2]=p-d*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,p=c*u;t[0]=d+p*a,t[4]=g*a-f,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-a,t[2]=f*a-g,t[6]=p+d*a,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,p=c*u;t[0]=d-p*a,t[4]=-r*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=r*h,t[9]=p-d*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,f=r*u,g=a*h,p=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+p,t[1]=l*u,t[5]=p*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,f=r*c,g=a*l,p=a*c;t[0]=l*h,t[4]=p-d*u,t[8]=g*u+f,t[1]=u,t[5]=r*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-p*u}else if(e.order==="XZY"){const d=r*l,f=r*c,g=a*l,p=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+p,t[5]=r*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=p*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eg,e,tg)}lookAt(e,t,n){const i=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),xi.crossVectors(n,Kt),xi.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),xi.crossVectors(n,Kt)),xi.normalize(),ko.crossVectors(Kt,xi),i[0]=xi.x,i[4]=ko.x,i[8]=Kt.x,i[1]=xi.y,i[5]=ko.y,i[9]=Kt.y,i[2]=xi.z,i[6]=ko.z,i[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],p=n[6],m=n[10],v=n[14],x=n[3],_=n[7],y=n[11],w=n[15],M=i[0],E=i[4],b=i[8],T=i[12],R=i[1],D=i[5],V=i[9],U=i[13],O=i[2],z=i[6],Y=i[10],k=i[14],F=i[3],I=i[7],N=i[11],ee=i[15];return s[0]=r*M+a*R+l*O+c*F,s[4]=r*E+a*D+l*z+c*I,s[8]=r*b+a*V+l*Y+c*N,s[12]=r*T+a*U+l*k+c*ee,s[1]=h*M+u*R+d*O+f*F,s[5]=h*E+u*D+d*z+f*I,s[9]=h*b+u*V+d*Y+f*N,s[13]=h*T+u*U+d*k+f*ee,s[2]=g*M+p*R+m*O+v*F,s[6]=g*E+p*D+m*z+v*I,s[10]=g*b+p*V+m*Y+v*N,s[14]=g*T+p*U+m*k+v*ee,s[3]=x*M+_*R+y*O+w*F,s[7]=x*E+_*D+y*z+w*I,s[11]=x*b+_*V+y*Y+w*N,s[15]=x*T+_*U+y*k+w*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],p=e[7],m=e[11],v=e[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+p*(+t*l*f-t*c*d+s*r*d-i*r*f+i*c*h-s*l*h)+m*(+t*c*u-t*a*f-s*r*u+n*r*f+s*a*h-n*c*h)+v*(-i*a*h-t*l*u+t*a*d+i*r*u-n*r*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],p=e[13],m=e[14],v=e[15],x=u*m*c-p*d*c+p*l*f-a*m*f-u*l*v+a*d*v,_=g*d*c-h*m*c-g*l*f+r*m*f+h*l*v-r*d*v,y=h*p*c-g*u*c+g*a*f-r*p*f-h*a*v+r*u*v,w=g*u*l-h*p*l-g*a*d+r*p*d+h*a*m-r*u*m,M=t*x+n*_+i*y+s*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=x*E,e[1]=(p*d*s-u*m*s-p*i*f+n*m*f+u*i*v-n*d*v)*E,e[2]=(a*m*s-p*l*s+p*i*c-n*m*c-a*i*v+n*l*v)*E,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*E,e[4]=_*E,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*v+t*d*v)*E,e[6]=(g*l*s-r*m*s-g*i*c+t*m*c+r*i*v-t*l*v)*E,e[7]=(r*d*s-h*l*s+h*i*c-t*d*c-r*i*f+t*l*f)*E,e[8]=y*E,e[9]=(g*u*s-h*p*s-g*n*f+t*p*f+h*n*v-t*u*v)*E,e[10]=(r*p*s-g*a*s+g*n*c-t*p*c-r*n*v+t*a*v)*E,e[11]=(h*a*s-r*u*s-h*n*c+t*u*c+r*n*f-t*a*f)*E,e[12]=w*E,e[13]=(h*p*i-g*u*i+g*n*d-t*p*d-h*n*m+t*u*m)*E,e[14]=(g*a*i-r*p*i-g*n*l+t*p*l+r*n*m-t*a*m)*E,e[15]=(r*u*i-h*a*i+h*n*l-t*u*l-r*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,l=e.z,c=s*r,h=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,c=s+s,h=r+r,u=a+a,d=s*c,f=s*h,g=s*u,p=r*h,m=r*u,v=a*u,x=l*c,_=l*h,y=l*u,w=n.x,M=n.y,E=n.z;return i[0]=(1-(p+v))*w,i[1]=(f+y)*w,i[2]=(g-_)*w,i[3]=0,i[4]=(f-y)*M,i[5]=(1-(d+v))*M,i[6]=(m+x)*M,i[7]=0,i[8]=(g+_)*E,i[9]=(m-x)*E,i[10]=(1-(d+p))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ds.set(i[0],i[1],i[2]).length();const r=Ds.set(i[4],i[5],i[6]).length(),a=Ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],mn.copy(this);const c=1/s,h=1/r,u=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,t.setFromRotationMatrix(mn),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(r+s)/(r-s),f=-2*r*s/(r-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,r){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(r-s),u=(t+e)*l,d=(n+i)*c,f=(r+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ds=new S,mn=new Re,eg=new S(0,0,0),tg=new S(1,1,1),xi=new S,ko=new S,Kt=new S,jh=new Re,Zh=new Pt;class dr{constructor(e=0,t=0,n=0,i=dr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-_t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}dr.DefaultOrder="XYZ";dr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class po{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ng=0;const Kh=new S,Ns=new Pt,$n=new Re,Vo=new S,Mr=new S,ig=new S,sg=new Pt,Jh=new S(1,0,0),Qh=new S(0,1,0),eu=new S(0,0,1),rg={type:"added"},tu={type:"removed"};class ze extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DefaultUp.clone();const e=new S,t=new dr,n=new Pt,i=new S(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new Yt}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=ze.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ze.DefaultMatrixWorldAutoUpdate,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis(eu,e)}translateOnAxis(e,t){return Kh.copy(e).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis(eu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vo.copy(e):Vo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Mr,Vo,this.up):$n.lookAt(Vo,Mr,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),Ns.setFromRotationMatrix($n),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(tu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,ig),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,sg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),g=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ze.DefaultUp=new S(0,1,0);ze.DefaultMatrixAutoUpdate=!0;ze.DefaultMatrixWorldAutoUpdate=!0;const gn=new S,Yn=new S,Tl=new S,jn=new S,Os=new S,Fs=new S,nu=new S,Al=new S,El=new S,Cl=new S;class un{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gn.subVectors(e,t),i.cross(gn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){gn.subVectors(i,t),Yn.subVectors(n,t),Tl.subVectors(e,t);const r=gn.dot(gn),a=gn.dot(Yn),l=gn.dot(Tl),c=Yn.dot(Yn),h=Yn.dot(Tl),u=r*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,g=(r*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jn),jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(e,t,n,i,s,r,a,l){return this.getBarycoord(e,t,n,i,jn),l.set(0,0),l.addScaledVector(s,jn.x),l.addScaledVector(r,jn.y),l.addScaledVector(a,jn.z),l}static isFrontFacing(e,t,n,i){return gn.subVectors(n,t),Yn.subVectors(e,t),gn.cross(Yn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),gn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return un.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,a;Os.subVectors(i,n),Fs.subVectors(s,n),Al.subVectors(e,n);const l=Os.dot(Al),c=Fs.dot(Al);if(l<=0&&c<=0)return t.copy(n);El.subVectors(e,i);const h=Os.dot(El),u=Fs.dot(El);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(Os,r);Cl.subVectors(e,s);const f=Os.dot(Cl),g=Fs.dot(Cl);if(g>=0&&f<=g)return t.copy(s);const p=f*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Fs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return nu.subVectors(s,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(nu,a);const v=1/(m+p+d);return r=p*v,a=d*v,t.copy(n).addScaledVector(Os,r).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let og=0;class lt extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=nn(),this.name="",this.type="Material",this.blending=ds,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=th,this.blendDst=nh,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ht extends lt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new S,Ho=new $;class Qe{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=nr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ho.fromBufferAttribute(this,t),Ho.applyMatrix3(e),this.setXY(t,Ho.x,Ho.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ag extends Qe{constructor(e,t,n){super(new Int8Array(e),t,n)}}class lg extends Qe{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class cg extends Qe{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class hg extends Qe{constructor(e,t,n){super(new Int16Array(e),t,n)}}class lh extends Qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ug extends Qe{constructor(e,t,n){super(new Int32Array(e),t,n)}}class ch extends Qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dg extends Qe{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}}class we extends Qe{constructor(e,t,n){super(new Float32Array(e),t,n)}}class fg extends Qe{constructor(e,t,n){super(new Float64Array(e),t,n)}}let pg=0;const an=new Re,Ll=new ze,Bs=new S,Jt=new Sn,Sr=new Sn,Et=new S;class De extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=nn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kf(e)?ch:lh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Yt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Ll.lookAt(e),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new we(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];Sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(Jt.min,Sr.min),Jt.expandByPoint(Et),Et.addVectors(Jt.max,Sr.max),Jt.expandByPoint(Et)):(Jt.expandByPoint(Sr.min),Jt.expandByPoint(Sr.max))}Jt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Et.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Et.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(e,c),Et.add(Bs)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<a;R++)c[R]=new S,h[R]=new S;const u=new S,d=new S,f=new S,g=new $,p=new $,m=new $,v=new S,x=new S;function _(R,D,V){u.fromArray(i,R*3),d.fromArray(i,D*3),f.fromArray(i,V*3),g.fromArray(r,R*2),p.fromArray(r,D*2),m.fromArray(r,V*2),d.sub(u),f.sub(u),p.sub(g),m.sub(g);const U=1/(p.x*m.y-m.x*p.y);isFinite(U)&&(v.copy(d).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(U),x.copy(f).multiplyScalar(p.x).addScaledVector(d,-m.x).multiplyScalar(U),c[R].add(v),c[D].add(v),c[V].add(v),h[R].add(x),h[D].add(x),h[V].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let R=0,D=y.length;R<D;++R){const V=y[R],U=V.start,O=V.count;for(let z=U,Y=U+O;z<Y;z+=3)_(n[z+0],n[z+1],n[z+2])}const w=new S,M=new S,E=new S,b=new S;function T(R){E.fromArray(s,R*3),b.copy(E);const D=c[R];w.copy(D),w.sub(E.multiplyScalar(E.dot(D))).normalize(),M.crossVectors(b,D);const U=M.dot(h[R])<0?-1:1;l[R*4]=w.x,l[R*4+1]=w.y,l[R*4+2]=w.z,l[R*4+3]=U}for(let R=0,D=y.length;R<D;++R){const V=y[R],U=V.start,O=V.count;for(let z=U,Y=U+O;z<Y;z+=3)T(n[z+0]),T(n[z+1]),T(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new S,s=new S,r=new S,a=new S,l=new S,c=new S,h=new S,u=new S;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?f=l[p]*a.data.stride+a.offset:f=l[p]*h;for(let v=0;v<h;v++)d[g++]=c[f++]}return new Qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new De,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const iu=new Re,Us=new fo,Rl=new ki,_i=new S,yi=new S,bi=new S,Pl=new S,Il=new S,Dl=new S,Go=new S,Wo=new S,Xo=new S,qo=new $,$o=new $,Yo=new $,Nl=new S,jo=new S;class st extends ze{constructor(e=new De,t=new ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Rl.copy(n.boundingSphere),Rl.applyMatrix4(s),e.ray.intersectsSphere(Rl)===!1)||(iu.copy(s).invert(),Us.copy(e.ray).applyMatrix4(iu),n.boundingBox!==null&&Us.intersectsBox(n.boundingBox)===!1))return;let r;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,m=f.length;p<m;p++){const v=f[p],x=i[v.materialIndex],_=Math.max(v.start,g.start),y=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let w=_,M=y;w<M;w+=3){const E=a.getX(w),b=a.getX(w+1),T=a.getX(w+2);r=Zo(this,x,e,Us,l,c,h,u,d,E,b,T),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const p=Math.max(0,g.start),m=Math.min(a.count,g.start+g.count);for(let v=p,x=m;v<x;v+=3){const _=a.getX(v),y=a.getX(v+1),w=a.getX(v+2);r=Zo(this,i,e,Us,l,c,h,u,d,_,y,w),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,m=f.length;p<m;p++){const v=f[p],x=i[v.materialIndex],_=Math.max(v.start,g.start),y=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let w=_,M=y;w<M;w+=3){const E=w,b=w+1,T=w+2;r=Zo(this,x,e,Us,l,c,h,u,d,E,b,T),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const p=Math.max(0,g.start),m=Math.min(l.count,g.start+g.count);for(let v=p,x=m;v<x;v+=3){const _=v,y=v+1,w=v+2;r=Zo(this,i,e,Us,l,c,h,u,d,_,y,w),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function mg(o,e,t,n,i,s,r,a){let l;if(e.side===tn?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,e.side!==Lt,a),l===null)return null;jo.copy(a),jo.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(jo);return c<t.near||c>t.far?null:{distance:c,point:jo.clone(),object:o}}function Zo(o,e,t,n,i,s,r,a,l,c,h,u){_i.fromBufferAttribute(i,c),yi.fromBufferAttribute(i,h),bi.fromBufferAttribute(i,u);const d=o.morphTargetInfluences;if(s&&d){Go.set(0,0,0),Wo.set(0,0,0),Xo.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const m=d[g],v=s[g];m!==0&&(Pl.fromBufferAttribute(v,c),Il.fromBufferAttribute(v,h),Dl.fromBufferAttribute(v,u),r?(Go.addScaledVector(Pl,m),Wo.addScaledVector(Il,m),Xo.addScaledVector(Dl,m)):(Go.addScaledVector(Pl.sub(_i),m),Wo.addScaledVector(Il.sub(yi),m),Xo.addScaledVector(Dl.sub(bi),m)))}_i.add(Go),yi.add(Wo),bi.add(Xo)}o.isSkinnedMesh&&(o.boneTransform(c,_i),o.boneTransform(h,yi),o.boneTransform(u,bi));const f=mg(o,e,t,n,_i,yi,bi,Nl);if(f){a&&(qo.fromBufferAttribute(a,c),$o.fromBufferAttribute(a,h),Yo.fromBufferAttribute(a,u),f.uv=un.getUV(Nl,_i,yi,bi,qo,$o,Yo,new $)),l&&(qo.fromBufferAttribute(l,c),$o.fromBufferAttribute(l,h),Yo.fromBufferAttribute(l,u),f.uv2=un.getUV(Nl,_i,yi,bi,qo,$o,Yo,new $));const g={a:c,b:h,c:u,normal:new S,materialIndex:0};un.getNormal(_i,yi,bi,g.normal),f.face=g}return f}class hi extends De{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(u,2));function g(p,m,v,x,_,y,w,M,E,b,T){const R=y/E,D=w/b,V=y/2,U=w/2,O=M/2,z=E+1,Y=b+1;let k=0,F=0;const I=new S;for(let N=0;N<Y;N++){const ee=N*D-U;for(let j=0;j<z;j++){const te=j*R-V;I[p]=te*x,I[m]=ee*_,I[v]=O,c.push(I.x,I.y,I.z),I[p]=0,I[m]=0,I[v]=M>0?1:-1,h.push(I.x,I.y,I.z),u.push(j/E),u.push(1-N/b),k+=1}}for(let N=0;N<b;N++)for(let ee=0;ee<E;ee++){const j=d+ee+z*N,te=d+ee+z*(N+1),ae=d+(ee+1)+z*(N+1),ue=d+(ee+1)+z*N;l.push(j,te,ue),l.push(te,ae,ue),F+=6}a.addGroup(f,F,T),f+=F,d+=k}}static fromJSON(e){return new hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ir(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ot(o){const e={};for(let t=0;t<o.length;t++){const n=ir(o[t]);for(const i in n)e[i]=n[i]}return e}function gg(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}const sr={clone:ir,merge:Ot};var vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yt extends lt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vg,this.fragmentShader=xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=gg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Za extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pt extends Za{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ps*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=90,ks=1;class Hf extends ze{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new pt(zs,ks,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new S(1,0,0)),this.add(i);const s=new pt(zs,ks,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new S(-1,0,0)),this.add(s);const r=new pt(zs,ks,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(new S(0,1,0)),this.add(r);const a=new pt(zs,ks,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new S(0,-1,0)),this.add(a);const l=new pt(zs,ks,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new S(0,0,1)),this.add(l);const c=new pt(zs,ks,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new S(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=bn,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class mo extends mt{constructor(e,t,n,i,s,r,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Di,super(e,t,n,i,s,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gf extends Rt{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new mo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:it}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new hi(5,5,5),s=new yt({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:oi});s.uniforms.tEquirect.value=t;const r=new st(i,s),a=t.minFilter;return t.minFilter===li&&(t.minFilter=it),new Hf(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const Ol=new S,_g=new S,yg=new Yt;class ti{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ol.subVectors(n,t).cross(_g.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ol),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yg.getNormalMatrix(e),i=this.coplanarPoint(Ol).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vs=new ki,Ko=new S;class Ka{constructor(e=new ti,t=new ti,n=new ti,i=new ti,s=new ti,r=new ti){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],f=n[9],g=n[10],p=n[11],m=n[12],v=n[13],x=n[14],_=n[15];return t[0].setComponents(a-i,u-l,p-d,_-m).normalize(),t[1].setComponents(a+i,u+l,p+d,_+m).normalize(),t[2].setComponents(a+s,u+c,p+f,_+v).normalize(),t[3].setComponents(a-s,u-c,p-f,_-v).normalize(),t[4].setComponents(a-r,u-h,p-g,_-x).normalize(),t[5].setComponents(a+r,u+h,p+g,_+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSprite(e){return Vs.center.set(0,0,0),Vs.radius=.7071067811865476,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ko.x=i.normal.x>0?e.max.x:e.min.x,Ko.y=i.normal.y>0?e.max.y:e.min.y,Ko.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wf(){let o=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function bg(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=o.createBuffer();o.bindBuffer(h,f),o.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,f=h.updateRange;o.bindBuffer(u,c),f.count===-1?o.bufferSubData(u,0,d):(t?o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(o.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:r,remove:a,update:l}}class Vi extends De{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],p=[],m=[];for(let v=0;v<h;v++){const x=v*d-r;for(let _=0;_<c;_++){const y=_*u-s;g.push(y,-x,0),p.push(0,0,1),m.push(_/a),m.push(1-v/l)}}for(let v=0;v<l;v++)for(let x=0;x<a;x++){const _=x+c*v,y=x+c*(v+1),w=x+1+c*(v+1),M=x+1+c*v;f.push(_,y,M),f.push(y,w,M)}this.setIndex(f),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(p,3)),this.setAttribute("uv",new we(m,2))}static fromJSON(e){return new Vi(e.width,e.height,e.widthSegments,e.heightSegments)}}var wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ag=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cg="vec3 transformed = vec3( position );",Lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Pg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ig=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Hg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",jg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,a0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,h0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,u0=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,d0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,p0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,g0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,v0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,b0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,S0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,T0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,D0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,N0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,O0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,F0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,V0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,H0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,G0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,W0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,$0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tv=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,nv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,rv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ov=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,dv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,fv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,pv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,mv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,gv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,vv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,xv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,_v=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bv=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mv=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Av=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ev=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iv=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ov=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$v=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Zv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ge={alphamap_fragment:wg,alphamap_pars_fragment:Mg,alphatest_fragment:Sg,alphatest_pars_fragment:Tg,aomap_fragment:Ag,aomap_pars_fragment:Eg,begin_vertex:Cg,beginnormal_vertex:Lg,bsdfs:Rg,iridescence_fragment:Pg,bumpmap_pars_fragment:Ig,clipping_planes_fragment:Dg,clipping_planes_pars_fragment:Ng,clipping_planes_pars_vertex:Og,clipping_planes_vertex:Fg,color_fragment:Bg,color_pars_fragment:Ug,color_pars_vertex:zg,color_vertex:kg,common:Vg,cube_uv_reflection_fragment:Hg,defaultnormal_vertex:Gg,displacementmap_pars_vertex:Wg,displacementmap_vertex:Xg,emissivemap_fragment:qg,emissivemap_pars_fragment:$g,encodings_fragment:Yg,encodings_pars_fragment:jg,envmap_fragment:Zg,envmap_common_pars_fragment:Kg,envmap_pars_fragment:Jg,envmap_pars_vertex:Qg,envmap_physical_pars_fragment:u0,envmap_vertex:e0,fog_vertex:t0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:s0,gradientmap_pars_fragment:r0,lightmap_fragment:o0,lightmap_pars_fragment:a0,lights_lambert_fragment:l0,lights_lambert_pars_fragment:c0,lights_pars_begin:h0,lights_toon_fragment:d0,lights_toon_pars_fragment:f0,lights_phong_fragment:p0,lights_phong_pars_fragment:m0,lights_physical_fragment:g0,lights_physical_pars_fragment:v0,lights_fragment_begin:x0,lights_fragment_maps:_0,lights_fragment_end:y0,logdepthbuf_fragment:b0,logdepthbuf_pars_fragment:w0,logdepthbuf_pars_vertex:M0,logdepthbuf_vertex:S0,map_fragment:T0,map_pars_fragment:A0,map_particle_fragment:E0,map_particle_pars_fragment:C0,metalnessmap_fragment:L0,metalnessmap_pars_fragment:R0,morphcolor_vertex:P0,morphnormal_vertex:I0,morphtarget_pars_vertex:D0,morphtarget_vertex:N0,normal_fragment_begin:O0,normal_fragment_maps:F0,normal_pars_fragment:B0,normal_pars_vertex:U0,normal_vertex:z0,normalmap_pars_fragment:k0,clearcoat_normal_fragment_begin:V0,clearcoat_normal_fragment_maps:H0,clearcoat_pars_fragment:G0,iridescence_pars_fragment:W0,output_fragment:X0,packing:q0,premultiplied_alpha_fragment:$0,project_vertex:Y0,dithering_fragment:j0,dithering_pars_fragment:Z0,roughnessmap_fragment:K0,roughnessmap_pars_fragment:J0,shadowmap_pars_fragment:Q0,shadowmap_pars_vertex:ev,shadowmap_vertex:tv,shadowmask_pars_fragment:nv,skinbase_vertex:iv,skinning_pars_vertex:sv,skinning_vertex:rv,skinnormal_vertex:ov,specularmap_fragment:av,specularmap_pars_fragment:lv,tonemapping_fragment:cv,tonemapping_pars_fragment:hv,transmission_fragment:uv,transmission_pars_fragment:dv,uv_pars_fragment:fv,uv_pars_vertex:pv,uv_vertex:mv,uv2_pars_fragment:gv,uv2_pars_vertex:vv,uv2_vertex:xv,worldpos_vertex:_v,background_vert:yv,background_frag:bv,cube_vert:wv,cube_frag:Mv,depth_vert:Sv,depth_frag:Tv,distanceRGBA_vert:Av,distanceRGBA_frag:Ev,equirect_vert:Cv,equirect_frag:Lv,linedashed_vert:Rv,linedashed_frag:Pv,meshbasic_vert:Iv,meshbasic_frag:Dv,meshlambert_vert:Nv,meshlambert_frag:Ov,meshmatcap_vert:Fv,meshmatcap_frag:Bv,meshnormal_vert:Uv,meshnormal_frag:zv,meshphong_vert:kv,meshphong_frag:Vv,meshphysical_vert:Hv,meshphysical_frag:Gv,meshtoon_vert:Wv,meshtoon_frag:Xv,points_vert:qv,points_frag:$v,shadow_vert:Yv,shadow_frag:jv,sprite_vert:Zv,sprite_frag:Kv},pe={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Yt},uv2Transform:{value:new Yt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Yt}}},xn={basic:{uniforms:Ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new oe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ot([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ot([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new oe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ot([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ot([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ot([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ot([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ot([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ot([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},cube:{uniforms:Ot([pe.envmap,{opacity:{value:1}}]),vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ot([pe.common,pe.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ot([pe.lights,pe.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};xn.physical={uniforms:Ot([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new $(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};function Jv(o,e,t,n,i,s){const r=new oe(0);let a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(p,m){let v=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=e.get(x));const _=o.xr,y=_.getSession&&_.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?g(r,a):x&&x.isColor&&(g(x,1),v=!0),(o.autoClear||v)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ur)?(c===void 0&&(c=new st(new hi(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:ir(xn.cube.uniforms),vertexShader:xn.cube.vertexShader,fragmentShader:xn.cube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(h!==x||u!==x.version||d!==o.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new st(new Vi(2,2),new yt({name:"BackgroundMaterial",uniforms:ir(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==o.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=o.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,m){t.buffers.color.setClear(p.r,p.g,p.b,m,s)}return{getClearColor:function(){return r},setClearColor:function(p,m=1){r.set(p),a=m,g(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(r,a)},render:f}}function Qv(o,e,t,n){const i=o.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},l=m(null);let c=l,h=!1;function u(O,z,Y,k,F){let I=!1;if(r){const N=p(k,Y,z);c!==N&&(c=N,f(c.object)),I=v(O,k,Y,F),I&&x(O,k,Y,F)}else{const N=z.wireframe===!0;(c.geometry!==k.id||c.program!==Y.id||c.wireframe!==N)&&(c.geometry=k.id,c.program=Y.id,c.wireframe=N,I=!0)}F!==null&&t.update(F,34963),(I||h)&&(h=!1,b(O,z,Y,k),F!==null&&o.bindBuffer(34963,t.get(F).buffer))}function d(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(O){return n.isWebGL2?o.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?o.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function p(O,z,Y){const k=Y.wireframe===!0;let F=a[O.id];F===void 0&&(F={},a[O.id]=F);let I=F[z.id];I===void 0&&(I={},F[z.id]=I);let N=I[k];return N===void 0&&(N=m(d()),I[k]=N),N}function m(O){const z=[],Y=[],k=[];for(let F=0;F<i;F++)z[F]=0,Y[F]=0,k[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Y,attributeDivisors:k,object:O,attributes:{},index:null}}function v(O,z,Y,k){const F=c.attributes,I=z.attributes;let N=0;const ee=Y.getAttributes();for(const j in ee)if(ee[j].location>=0){const ae=F[j];let ue=I[j];if(ue===void 0&&(j==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),j==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor)),ae===void 0||ae.attribute!==ue||ue&&ae.data!==ue.data)return!0;N++}return c.attributesNum!==N||c.index!==k}function x(O,z,Y,k){const F={},I=z.attributes;let N=0;const ee=Y.getAttributes();for(const j in ee)if(ee[j].location>=0){let ae=I[j];ae===void 0&&(j==="instanceMatrix"&&O.instanceMatrix&&(ae=O.instanceMatrix),j==="instanceColor"&&O.instanceColor&&(ae=O.instanceColor));const ue={};ue.attribute=ae,ae&&ae.data&&(ue.data=ae.data),F[j]=ue,N++}c.attributes=F,c.attributesNum=N,c.index=k}function _(){const O=c.newAttributes;for(let z=0,Y=O.length;z<Y;z++)O[z]=0}function y(O){w(O,0)}function w(O,z){const Y=c.newAttributes,k=c.enabledAttributes,F=c.attributeDivisors;Y[O]=1,k[O]===0&&(o.enableVertexAttribArray(O),k[O]=1),F[O]!==z&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,z),F[O]=z)}function M(){const O=c.newAttributes,z=c.enabledAttributes;for(let Y=0,k=z.length;Y<k;Y++)z[Y]!==O[Y]&&(o.disableVertexAttribArray(Y),z[Y]=0)}function E(O,z,Y,k,F,I){n.isWebGL2===!0&&(Y===5124||Y===5125)?o.vertexAttribIPointer(O,z,Y,F,I):o.vertexAttribPointer(O,z,Y,k,F,I)}function b(O,z,Y,k){if(n.isWebGL2===!1&&(O.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const F=k.attributes,I=Y.getAttributes(),N=z.defaultAttributeValues;for(const ee in I){const j=I[ee];if(j.location>=0){let te=F[ee];if(te===void 0&&(ee==="instanceMatrix"&&O.instanceMatrix&&(te=O.instanceMatrix),ee==="instanceColor"&&O.instanceColor&&(te=O.instanceColor)),te!==void 0){const ae=te.normalized,ue=te.itemSize,X=t.get(te);if(X===void 0)continue;const Te=X.buffer,be=X.type,Ce=X.bytesPerElement;if(te.isInterleavedBufferAttribute){const de=te.data,ke=de.stride,Q=te.offset;if(de.isInstancedInterleavedBuffer){for(let K=0;K<j.locationSize;K++)w(j.location+K,de.meshPerAttribute);O.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let K=0;K<j.locationSize;K++)y(j.location+K);o.bindBuffer(34962,Te);for(let K=0;K<j.locationSize;K++)E(j.location+K,ue/j.locationSize,be,ae,ke*Ce,(Q+ue/j.locationSize*K)*Ce)}else{if(te.isInstancedBufferAttribute){for(let de=0;de<j.locationSize;de++)w(j.location+de,te.meshPerAttribute);O.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let de=0;de<j.locationSize;de++)y(j.location+de);o.bindBuffer(34962,Te);for(let de=0;de<j.locationSize;de++)E(j.location+de,ue/j.locationSize,be,ae,ue*Ce,ue/j.locationSize*de*Ce)}}else if(N!==void 0){const ae=N[ee];if(ae!==void 0)switch(ae.length){case 2:o.vertexAttrib2fv(j.location,ae);break;case 3:o.vertexAttrib3fv(j.location,ae);break;case 4:o.vertexAttrib4fv(j.location,ae);break;default:o.vertexAttrib1fv(j.location,ae)}}}}M()}function T(){V();for(const O in a){const z=a[O];for(const Y in z){const k=z[Y];for(const F in k)g(k[F].object),delete k[F];delete z[Y]}delete a[O]}}function R(O){if(a[O.id]===void 0)return;const z=a[O.id];for(const Y in z){const k=z[Y];for(const F in k)g(k[F].object),delete k[F];delete z[Y]}delete a[O.id]}function D(O){for(const z in a){const Y=a[z];if(Y[O.id]===void 0)continue;const k=Y[O.id];for(const F in k)g(k[F].object),delete k[F];delete Y[O.id]}}function V(){U(),h=!0,c!==l&&(c=l,f(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:V,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:y,disableUnusedAttributes:M}}function ex(o,e,t,n){const i=n.isWebGL2;let s;function r(c){s=c}function a(c,h){o.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=o,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),t.update(h,s,u)}this.setMode=r,this.render=a,this.renderInstances=l}function tx(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=o.getParameter(34930),d=o.getParameter(35660),f=o.getParameter(3379),g=o.getParameter(34076),p=o.getParameter(34921),m=o.getParameter(36347),v=o.getParameter(36348),x=o.getParameter(36349),_=d>0,y=r||e.has("OES_texture_float"),w=_&&y,M=r?o.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:M}}function nx(o){const e=this;let t=null,n=0,i=!1,s=!1;const r=new ti,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const g=u.length!==0||d||n!==0||i;return i=d,t=h(u,f,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,f){const g=u.clippingPlanes,p=u.clipIntersection,m=u.clipShadows,v=o.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const x=s?0:n,_=x*4;let y=v.clippingState||null;l.value=y,y=h(g,d,_,f);for(let w=0;w!==_;++w)y[w]=t[w];v.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const p=u!==null?u.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const v=f+p*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<v)&&(m=new Float32Array(v));for(let _=0,y=f;_!==p;++_,y+=4)r.copy(u[_]).applyMatrix4(x,a),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function ix(o){let e=new WeakMap;function t(r,a){return a===xs?r.mapping=Di:a===jr&&(r.mapping=Ni),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const a=r.mapping;if(a===xs||a===jr)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Gf(l.height/2);return c.fromEquirectangularTexture(o,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ws extends Za{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zs=4,su=[.125,.215,.35,.446,.526,.582],os=20,Fl=new ws,ru=new oe;let Bl=null;const is=(1+Math.sqrt(5))/2,Hs=1/is,ou=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,is,Hs),new S(0,is,-Hs),new S(Hs,0,is),new S(-Hs,0,is),new S(is,Hs,0),new S(-is,Hs,0)];class zc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Bl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bl),e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:it,minFilter:it,generateMipmaps:!1,type:yn,format:Xt,encoding:zn,depthBuffer:!1},i=au(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sx(s)),this._blurMaterial=rx(s,e,t)}return i}_compileMaterial(e){const t=new st(this._lodPlanes[0],e);this._renderer.compile(t,Fl)}_sceneToCubeUV(e,t,n,i){const a=new pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ru),h.toneMapping=bn,h.autoClear=!1;const f=new ht({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new st(new hi,f);let p=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(ru),p=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):x===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const _=this._cubeSize;Jo(i,x*_,v>2?_:0,_,_),h.setRenderTarget(i),p&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Di||e.mapping===Ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lu());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new st(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Jo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Fl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=ou[(i-1)%ou.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new st(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*os-1),p=s/g,m=isFinite(s)?1+Math.floor(h*p):os;m>os&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);const v=[];let x=0;for(let E=0;E<os;++E){const b=E/p,T=Math.exp(-b*b/2);v.push(T),E===0?x+=T:E<m&&(x+=2*T)}for(let E=0;E<v.length;E++)v[E]=v[E]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=v,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const y=this._sizeLods[i],w=3*y*(i>_-Zs?i-_+Zs:0),M=4*(this._cubeSize-y);Jo(t,w,M,3*y,2*y),l.setRenderTarget(t),l.render(u,Fl)}}function sx(o){const e=[],t=[],n=[];let i=o;const s=o-Zs+1+su.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>o-Zs?l=su[r-o+Zs-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,p=3,m=2,v=1,x=new Float32Array(p*g*f),_=new Float32Array(m*g*f),y=new Float32Array(v*g*f);for(let M=0;M<f;M++){const E=M%3*2/3-1,b=M>2?0:-1,T=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];x.set(T,p*g*M),_.set(d,m*g*M);const R=[M,M,M,M,M,M];y.set(R,v*g*M)}const w=new De;w.setAttribute("position",new Qe(x,p)),w.setAttribute("uv",new Qe(_,m)),w.setAttribute("faceIndex",new Qe(y,v)),e.push(w),i>Zs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function au(o,e,t){const n=new Rt(o,e,t);return n.texture.mapping=ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jo(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function rx(o,e,t){const n=new Float32Array(os),i=new S(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function lu(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function cu(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function hh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ox(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===xs||l===jr,h=l===Di||l===Ni;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new zc(o)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new zc(o));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function ax(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lx(o,e,t,n){const i={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],34962);const f=u.morphAttributes;for(const g in f){const p=f[g];for(let m=0,v=p.length;m<v;m++)e.update(p[m],34962)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let p=0;if(f!==null){const x=f.array;p=f.version;for(let _=0,y=x.length;_<y;_+=3){const w=x[_+0],M=x[_+1],E=x[_+2];d.push(w,M,M,E,E,w)}}else{const x=g.array;p=g.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const w=_+0,M=_+1,E=_+2;d.push(w,M,M,E,E,w)}}const m=new(kf(d)?ch:lh)(d,1);m.version=p;const v=s.get(u);v&&e.remove(v),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function cx(o,e,t,n){const i=n.isWebGL2;let s;function r(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){o.drawElements(s,f,a,d*l),t.update(f,s,1)}function u(d,f,g){if(g===0)return;let p,m;if(i)p=o,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,f,a,d*l,g),t.update(f,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=u}function hx(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ux(o,e){return o[0]-e[0]}function dx(o,e){return Math.abs(e[1])-Math.abs(o[1])}function fx(o,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new Je,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==p){let z=function(){U.dispose(),s.delete(h),h.removeEventListener("dispose",z)};m!==void 0&&m.texture.dispose();const _=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let T=0;_===!0&&(T=1),y===!0&&(T=2),w===!0&&(T=3);let R=h.attributes.position.count*T,D=1;R>e.maxTextureSize&&(D=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const V=new Float32Array(R*D*4*p),U=new uo(V,R,D,p);U.type=dn,U.needsUpdate=!0;const O=T*4;for(let Y=0;Y<p;Y++){const k=M[Y],F=E[Y],I=b[Y],N=R*D*4*Y;for(let ee=0;ee<k.count;ee++){const j=ee*O;_===!0&&(r.fromBufferAttribute(k,ee),V[N+j+0]=r.x,V[N+j+1]=r.y,V[N+j+2]=r.z,V[N+j+3]=0),y===!0&&(r.fromBufferAttribute(F,ee),V[N+j+4]=r.x,V[N+j+5]=r.y,V[N+j+6]=r.z,V[N+j+7]=0),w===!0&&(r.fromBufferAttribute(I,ee),V[N+j+8]=r.x,V[N+j+9]=r.y,V[N+j+10]=r.z,V[N+j+11]=I.itemSize===4?r.w:1)}}m={count:p,texture:U,size:new $(R,D)},s.set(h,m),h.addEventListener("dispose",z)}let v=0;for(let _=0;_<f.length;_++)v+=f[_];const x=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(o,"morphTargetBaseInfluence",x),d.getUniforms().setValue(o,"morphTargetInfluences",f),d.getUniforms().setValue(o,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let p=n[h.id];if(p===void 0||p.length!==g){p=[];for(let y=0;y<g;y++)p[y]=[y,0];n[h.id]=p}for(let y=0;y<g;y++){const w=p[y];w[0]=y,w[1]=f[y]}p.sort(dx);for(let y=0;y<8;y++)y<g&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(ux);const m=h.morphAttributes.position,v=h.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const w=a[y],M=w[0],E=w[1];M!==Number.MAX_SAFE_INTEGER&&E?(m&&h.getAttribute("morphTarget"+y)!==m[M]&&h.setAttribute("morphTarget"+y,m[M]),v&&h.getAttribute("morphNormal"+y)!==v[M]&&h.setAttribute("morphNormal"+y,v[M]),i[y]=E,x+=E):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),v&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const _=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(o,"morphTargetBaseInfluence",_),d.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function px(o,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const Xf=new mt,qf=new uo,$f=new ja,Yf=new mo,hu=[],uu=[],du=new Float32Array(16),fu=new Float32Array(9),pu=new Float32Array(4);function fr(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=hu[i];if(s===void 0&&(s=new Float32Array(i),hu[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function Tt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function At(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Ja(o,e){let t=uu[e];t===void 0&&(t=new Int32Array(e),uu[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function mx(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function gx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;o.uniform2fv(this.addr,e),At(t,e)}}function vx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;o.uniform3fv(this.addr,e),At(t,e)}}function xx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;o.uniform4fv(this.addr,e),At(t,e)}}function _x(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;pu.set(n),o.uniformMatrix2fv(this.addr,!1,pu),At(t,n)}}function yx(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;fu.set(n),o.uniformMatrix3fv(this.addr,!1,fu),At(t,n)}}function bx(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;du.set(n),o.uniformMatrix4fv(this.addr,!1,du),At(t,n)}}function wx(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Mx(o,e){const t=this.cache;Tt(t,e)||(o.uniform2iv(this.addr,e),At(t,e))}function Sx(o,e){const t=this.cache;Tt(t,e)||(o.uniform3iv(this.addr,e),At(t,e))}function Tx(o,e){const t=this.cache;Tt(t,e)||(o.uniform4iv(this.addr,e),At(t,e))}function Ax(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Ex(o,e){const t=this.cache;Tt(t,e)||(o.uniform2uiv(this.addr,e),At(t,e))}function Cx(o,e){const t=this.cache;Tt(t,e)||(o.uniform3uiv(this.addr,e),At(t,e))}function Lx(o,e){const t=this.cache;Tt(t,e)||(o.uniform4uiv(this.addr,e),At(t,e))}function Rx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Xf,i)}function Px(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$f,i)}function Ix(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Yf,i)}function Dx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qf,i)}function Nx(o){switch(o){case 5126:return mx;case 35664:return gx;case 35665:return vx;case 35666:return xx;case 35674:return _x;case 35675:return yx;case 35676:return bx;case 5124:case 35670:return wx;case 35667:case 35671:return Mx;case 35668:case 35672:return Sx;case 35669:case 35673:return Tx;case 5125:return Ax;case 36294:return Ex;case 36295:return Cx;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Dx}}function Ox(o,e){o.uniform1fv(this.addr,e)}function Fx(o,e){const t=fr(e,this.size,2);o.uniform2fv(this.addr,t)}function Bx(o,e){const t=fr(e,this.size,3);o.uniform3fv(this.addr,t)}function Ux(o,e){const t=fr(e,this.size,4);o.uniform4fv(this.addr,t)}function zx(o,e){const t=fr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function kx(o,e){const t=fr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Vx(o,e){const t=fr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Hx(o,e){o.uniform1iv(this.addr,e)}function Gx(o,e){o.uniform2iv(this.addr,e)}function Wx(o,e){o.uniform3iv(this.addr,e)}function Xx(o,e){o.uniform4iv(this.addr,e)}function qx(o,e){o.uniform1uiv(this.addr,e)}function $x(o,e){o.uniform2uiv(this.addr,e)}function Yx(o,e){o.uniform3uiv(this.addr,e)}function jx(o,e){o.uniform4uiv(this.addr,e)}function Zx(o,e,t){const n=this.cache,i=e.length,s=Ja(t,i);Tt(n,s)||(o.uniform1iv(this.addr,s),At(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Xf,s[r])}function Kx(o,e,t){const n=this.cache,i=e.length,s=Ja(t,i);Tt(n,s)||(o.uniform1iv(this.addr,s),At(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||$f,s[r])}function Jx(o,e,t){const n=this.cache,i=e.length,s=Ja(t,i);Tt(n,s)||(o.uniform1iv(this.addr,s),At(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Yf,s[r])}function Qx(o,e,t){const n=this.cache,i=e.length,s=Ja(t,i);Tt(n,s)||(o.uniform1iv(this.addr,s),At(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||qf,s[r])}function e_(o){switch(o){case 5126:return Ox;case 35664:return Fx;case 35665:return Bx;case 35666:return Ux;case 35674:return zx;case 35675:return kx;case 35676:return Vx;case 5124:case 35670:return Hx;case 35667:case 35671:return Gx;case 35668:case 35672:return Wx;case 35669:case 35673:return Xx;case 5125:return qx;case 36294:return $x;case 36295:return Yx;case 36296:return jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return Jx;case 36289:case 36303:case 36311:case 36292:return Qx}}class t_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Nx(t.type)}}class n_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=e_(t.type)}}class i_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ul=/(\w+)(\])?(\[|\.)?/g;function mu(o,e){o.seq.push(e),o.map[e.id]=e}function s_(o,e,t){const n=o.name,i=n.length;for(Ul.lastIndex=0;;){const s=Ul.exec(n),r=Ul.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){mu(t,c===void 0?new t_(a,o,e):new n_(a,o,e));break}else{let u=t.map[a];u===void 0&&(u=new i_(a),mu(t,u)),t=u}}}class Pa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);s_(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function gu(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let r_=0;function o_(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}function a_(o){switch(o){case zn:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function vu(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+o_(o.getShaderSource(e),r)}else return i}function l_(o,e){const t=a_(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function c_(o,e){let t;switch(e){case uf:t="Linear";break;case df:t="Reinhard";break;case ff:t="OptimizedCineon";break;case Xa:t="ACESFilmic";break;case pf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function h_(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fr).join(`
`)}function u_(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function d_(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),r=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function Fr(o){return o!==""}function xu(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _u(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f_=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(o){return o.replace(f_,p_)}function p_(o,e){const t=Ge[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return kc(t)}const m_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(o){return o.replace(m_,g_)}function g_(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function bu(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function v_(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===eh?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Hd?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ys&&(e="SHADOWMAP_TYPE_VSM"),e}function x_(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Di:case Ni:e="ENVMAP_TYPE_CUBE";break;case ur:e="ENVMAP_TYPE_CUBE_UV";break}return e}function __(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ni:e="ENVMAP_MODE_REFRACTION";break}return e}function y_(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ho:e="ENVMAP_BLENDING_MULTIPLY";break;case cf:e="ENVMAP_BLENDING_MIX";break;case hf:e="ENVMAP_BLENDING_ADD";break}return e}function b_(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function w_(o,e,t,n){const i=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=v_(t),c=x_(t),h=__(t),u=y_(t),d=b_(t),f=t.isWebGL2?"":h_(t),g=u_(s),p=i.createProgram();let m,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Fr).join(`
`),m.length>0&&(m+=`
`),v=[f,g].filter(Fr).join(`
`),v.length>0&&(v+=`
`)):(m=[bu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),v=[f,bu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==bn?c_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.encodings_pars_fragment,l_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fr).join(`
`)),r=kc(r),r=xu(r,t),r=_u(r,t),a=kc(a),a=xu(a,t),a=_u(a,t),r=yu(r),a=yu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["#define varying in",t.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=x+m+r,y=x+v+a,w=gu(i,35633,_),M=gu(i,35632,y);if(i.attachShader(p,w),i.attachShader(p,M),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),o.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(w).trim(),D=i.getShaderInfoLog(M).trim();let V=!0,U=!0;if(i.getProgramParameter(p,35714)===!1){V=!1;const O=vu(i,w,"vertex"),z=vu(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+O+`
`+z)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(R===""||D==="")&&(U=!1);U&&(this.diagnostics={runnable:V,programLog:T,vertexShader:{log:R,prefix:m},fragmentShader:{log:D,prefix:v}})}i.deleteShader(w),i.deleteShader(M);let E;this.getUniforms=function(){return E===void 0&&(E=new Pa(i,p)),E};let b;return this.getAttributes=function(){return b===void 0&&(b=d_(i,p)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=r_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=M,this}let M_=0;class S_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new T_(e),t.set(e,n)),n}}class T_{constructor(e){this.id=M_++,this.code=e,this.usedTimes=0}}function A_(o,e,t,n,i,s,r){const a=new po,l=new S_,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b,T,R,D,V){const U=D.fog,O=V.geometry,z=b.isMeshStandardMaterial?D.environment:null,Y=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),k=Y&&Y.mapping===ur?Y.image.height:null,F=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const I=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,N=I!==void 0?I.length:0;let ee=0;O.morphAttributes.position!==void 0&&(ee=1),O.morphAttributes.normal!==void 0&&(ee=2),O.morphAttributes.color!==void 0&&(ee=3);let j,te,ae,ue;if(F){const ke=xn[F];j=ke.vertexShader,te=ke.fragmentShader}else j=b.vertexShader,te=b.fragmentShader,l.update(b),ae=l.getVertexShaderID(b),ue=l.getFragmentShaderID(b);const X=o.getRenderTarget(),Te=b.alphaTest>0,be=b.clearcoat>0,Ce=b.iridescence>0;return{isWebGL2:h,shaderID:F,shaderName:b.type,vertexShader:j,fragmentShader:te,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:ue,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,instancing:V.isInstancedMesh===!0,instancingColor:V.isInstancedMesh===!0&&V.instanceColor!==null,supportsVertexTextures:d,outputEncoding:X===null?o.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:zn,map:!!b.map,matcap:!!b.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:k,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Ff,tangentSpaceNormalMap:b.normalMapType===ci,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===Xe,clearcoat:be,clearcoatMap:be&&!!b.clearcoatMap,clearcoatRoughnessMap:be&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:be&&!!b.clearcoatNormalMap,iridescence:Ce,iridescenceMap:Ce&&!!b.iridescenceMap,iridescenceThicknessMap:Ce&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===ds,alphaMap:!!b.alphaMap,alphaTest:Te,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!O.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!U,useFog:b.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:u,skinning:V.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ee,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&R.length>0,shadowMapType:o.shadowMap.type,toneMapping:b.toneMapped?o.toneMapping:bn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Lt,flipSided:b.side===tn,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)T.push(R),T.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(v(T,b),x(T,b),T.push(o.outputEncoding)),T.push(b.customProgramCacheKey),T.join()}function v(b,T){b.push(T.precision),b.push(T.outputEncoding),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.combine),b.push(T.vertexUvs),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function x(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),b.push(a.mask)}function _(b){const T=g[b.type];let R;if(T){const D=xn[T];R=sr.clone(D.uniforms)}else R=b.uniforms;return R}function y(b,T){let R;for(let D=0,V=c.length;D<V;D++){const U=c[D];if(U.cacheKey===T){R=U,++R.usedTimes;break}}return R===void 0&&(R=new w_(o,T,b,s),c.push(R)),R}function w(b){if(--b.usedTimes===0){const T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),b.destroy()}}function M(b){l.remove(b)}function E(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:_,acquireProgram:y,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:E}}function E_(){let o=new WeakMap;function e(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function t(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function C_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function wu(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Mu(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(u,d,f,g,p,m){let v=o[e];return v===void 0?(v={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:p,group:m},o[e]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=f,v.groupOrder=g,v.renderOrder=u.renderOrder,v.z=p,v.group=m),e++,v}function a(u,d,f,g,p,m){const v=r(u,d,f,g,p,m);f.transmission>0?n.push(v):f.transparent===!0?i.push(v):t.push(v)}function l(u,d,f,g,p,m){const v=r(u,d,f,g,p,m);f.transmission>0?n.unshift(v):f.transparent===!0?i.unshift(v):t.unshift(v)}function c(u,d){t.length>1&&t.sort(u||C_),n.length>1&&n.sort(d||wu),i.length>1&&i.sort(d||wu)}function h(){for(let u=e,d=o.length;u<d;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function L_(){let o=new WeakMap;function e(n,i){const s=o.get(n);let r;return s===void 0?(r=new Mu,o.set(n,[r])):i>=s.length?(r=new Mu,s.push(r)):r=s[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function R_(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new oe};break;case"SpotLight":t={position:new S,direction:new S,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":t={color:new oe,position:new S,halfWidth:new S,halfHeight:new S};break}return o[e.id]=t,t}}}function P_(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let I_=0;function D_(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function N_(o,e){const t=new R_,n=P_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new S);const s=new S,r=new Re,a=new Re;function l(h,u){let d=0,f=0,g=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let p=0,m=0,v=0,x=0,_=0,y=0,w=0,M=0,E=0,b=0;h.sort(D_);const T=u!==!0?Math.PI:1;for(let D=0,V=h.length;D<V;D++){const U=h[D],O=U.color,z=U.intensity,Y=U.distance,k=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=O.r*z*T,f+=O.g*z*T,g+=O.b*z*T;else if(U.isLightProbe)for(let F=0;F<9;F++)i.probe[F].addScaledVector(U.sh.coefficients[F],z);else if(U.isDirectionalLight){const F=t.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){const I=U.shadow,N=n.get(U);N.shadowBias=I.bias,N.shadowNormalBias=I.normalBias,N.shadowRadius=I.radius,N.shadowMapSize=I.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=U.shadow.matrix,y++}i.directional[p]=F,p++}else if(U.isSpotLight){const F=t.get(U);F.position.setFromMatrixPosition(U.matrixWorld),F.color.copy(O).multiplyScalar(z*T),F.distance=Y,F.coneCos=Math.cos(U.angle),F.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),F.decay=U.decay,i.spot[v]=F;const I=U.shadow;if(U.map&&(i.spotLightMap[E]=U.map,E++,I.updateMatrices(U),U.castShadow&&b++),i.spotLightMatrix[v]=I.matrix,U.castShadow){const N=n.get(U);N.shadowBias=I.bias,N.shadowNormalBias=I.normalBias,N.shadowRadius=I.radius,N.shadowMapSize=I.mapSize,i.spotShadow[v]=N,i.spotShadowMap[v]=k,M++}v++}else if(U.isRectAreaLight){const F=t.get(U);F.color.copy(O).multiplyScalar(z),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),i.rectArea[x]=F,x++}else if(U.isPointLight){const F=t.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity*T),F.distance=U.distance,F.decay=U.decay,U.castShadow){const I=U.shadow,N=n.get(U);N.shadowBias=I.bias,N.shadowNormalBias=I.normalBias,N.shadowRadius=I.radius,N.shadowMapSize=I.mapSize,N.shadowCameraNear=I.camera.near,N.shadowCameraFar=I.camera.far,i.pointShadow[m]=N,i.pointShadowMap[m]=k,i.pointShadowMatrix[m]=U.shadow.matrix,w++}i.point[m]=F,m++}else if(U.isHemisphereLight){const F=t.get(U);F.skyColor.copy(U.color).multiplyScalar(z*T),F.groundColor.copy(U.groundColor).multiplyScalar(z*T),i.hemi[_]=F,_++}}x>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==v||R.rectAreaLength!==x||R.hemiLength!==_||R.numDirectionalShadows!==y||R.numPointShadows!==w||R.numSpotShadows!==M||R.numSpotMaps!==E)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=x,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+E-b,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=b,R.directionalLength=p,R.pointLength=m,R.spotLength=v,R.rectAreaLength=x,R.hemiLength=_,R.numDirectionalShadows=y,R.numPointShadows=w,R.numSpotShadows=M,R.numSpotMaps=E,i.version=I_++)}function c(h,u){let d=0,f=0,g=0,p=0,m=0;const v=u.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){const y=h[x];if(y.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(v),d++}else if(y.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(v),g++}else if(y.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(v),a.identity(),r.copy(y.matrixWorld),r.premultiply(v),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(v),f++}else if(y.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(v),m++}}}return{setup:l,setupView:c,state:i}}function Su(o,e){const t=new N_(o,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function O_(o,e){let t=new WeakMap;function n(s,r=0){const a=t.get(s);let l;return a===void 0?(l=new Su(o,e),t.set(s,[l])):r>=a.length?(l=new Su(o,e),a.push(l)):l=a[r],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class uh extends lt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dh extends lt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new S,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const F_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function U_(o,e,t){let n=new Ka;const i=new $,s=new $,r=new Je,a=new uh({depthPacking:Of}),l=new dh,c={},h=t.maxTextureSize,u={0:tn,1:Un,2:Lt},d=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:F_,fragmentShader:B_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new De;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new st(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eh,this.render=function(y,w,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const E=o.getRenderTarget(),b=o.getActiveCubeFace(),T=o.getActiveMipmapLevel(),R=o.state;R.setBlending(oi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let D=0,V=y.length;D<V;D++){const U=y[D],O=U.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const z=O.getFrameExtents();if(i.multiply(z),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/z.x),i.x=s.x*z.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/z.y),i.y=s.y*z.y,O.mapSize.y=s.y)),O.map===null){const k=this.type!==Ys?{minFilter:xt,magFilter:xt}:{};O.map=new Rt(i.x,i.y,k),O.map.texture.name=U.name+".shadowMap",O.camera.updateProjectionMatrix()}o.setRenderTarget(O.map),o.clear();const Y=O.getViewportCount();for(let k=0;k<Y;k++){const F=O.getViewport(k);r.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),R.viewport(r),O.updateMatrices(U,k),n=O.getFrustum(),_(w,M,O.camera,U,this.type)}O.isPointLightShadow!==!0&&this.type===Ys&&v(O,M),O.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(E,b,T)};function v(y,w){const M=e.update(p);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Rt(i.x,i.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,o.setRenderTarget(y.mapPass),o.clear(),o.renderBufferDirect(w,null,M,d,p,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,o.setRenderTarget(y.map),o.clear(),o.renderBufferDirect(w,null,M,f,p,null)}function x(y,w,M,E,b,T){let R=null;const D=M.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0?R=D:R=M.isPointLight===!0?l:a,o.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const V=R.uuid,U=w.uuid;let O=c[V];O===void 0&&(O={},c[V]=O);let z=O[U];z===void 0&&(z=R.clone(),O[U]=z),R=z}return R.visible=w.visible,R.wireframe=w.wireframe,T===Ys?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:u[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaTest,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(M.matrixWorld),R.nearDistance=E,R.farDistance=b),R}function _(y,w,M,E,b){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===Ys)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,y.matrixWorld);const D=e.update(y),V=y.material;if(Array.isArray(V)){const U=D.groups;for(let O=0,z=U.length;O<z;O++){const Y=U[O],k=V[Y.materialIndex];if(k&&k.visible){const F=x(y,k,E,M.near,M.far,b);o.renderBufferDirect(M,null,D,F,y,Y)}}}else if(V.visible){const U=x(y,V,E,M.near,M.far,b);o.renderBufferDirect(M,null,D,U,y,null)}}const R=y.children;for(let D=0,V=R.length;D<V;D++)_(R[D],w,M,E,b)}}function z_(o,e,t){const n=t.isWebGL2;function i(){let B=!1;const xe=new Je;let fe=null;const ne=new Je(0,0,0,0);return{setMask:function(me){fe!==me&&!B&&(o.colorMask(me,me,me,me),fe=me)},setLocked:function(me){B=me},setClear:function(me,Fe,ot,gt,fi){fi===!0&&(me*=gt,Fe*=gt,ot*=gt),xe.set(me,Fe,ot,gt),ne.equals(xe)===!1&&(o.clearColor(me,Fe,ot,gt),ne.copy(xe))},reset:function(){B=!1,fe=null,ne.set(-1,0,0,0)}}}function s(){let B=!1,xe=null,fe=null,ne=null;return{setTest:function(me){me?Te(2929):be(2929)},setMask:function(me){xe!==me&&!B&&(o.depthMask(me),xe=me)},setFunc:function(me){if(fe!==me){switch(me){case tf:o.depthFunc(512);break;case nf:o.depthFunc(519);break;case sf:o.depthFunc(513);break;case Da:o.depthFunc(515);break;case rf:o.depthFunc(514);break;case of:o.depthFunc(518);break;case af:o.depthFunc(516);break;case lf:o.depthFunc(517);break;default:o.depthFunc(515)}fe=me}},setLocked:function(me){B=me},setClear:function(me){ne!==me&&(o.clearDepth(me),ne=me)},reset:function(){B=!1,xe=null,fe=null,ne=null}}}function r(){let B=!1,xe=null,fe=null,ne=null,me=null,Fe=null,ot=null,gt=null,fi=null;return{setTest:function(ut){B||(ut?Te(2960):be(2960))},setMask:function(ut){xe!==ut&&!B&&(o.stencilMask(ut),xe=ut)},setFunc:function(ut,Wn,rn){(fe!==ut||ne!==Wn||me!==rn)&&(o.stencilFunc(ut,Wn,rn),fe=ut,ne=Wn,me=rn)},setOp:function(ut,Wn,rn){(Fe!==ut||ot!==Wn||gt!==rn)&&(o.stencilOp(ut,Wn,rn),Fe=ut,ot=Wn,gt=rn)},setLocked:function(ut){B=ut},setClear:function(ut){fi!==ut&&(o.clearStencil(ut),fi=ut)},reset:function(){B=!1,xe=null,fe=null,ne=null,me=null,Fe=null,ot=null,gt=null,fi=null}}}const a=new i,l=new s,c=new r,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,p=[],m=null,v=!1,x=null,_=null,y=null,w=null,M=null,E=null,b=null,T=!1,R=null,D=null,V=null,U=null,O=null;const z=o.getParameter(35661);let Y=!1,k=0;const F=o.getParameter(7938);F.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(F)[1]),Y=k>=1):F.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),Y=k>=2);let I=null,N={};const ee=o.getParameter(3088),j=o.getParameter(2978),te=new Je().fromArray(ee),ae=new Je().fromArray(j);function ue(B,xe,fe){const ne=new Uint8Array(4),me=o.createTexture();o.bindTexture(B,me),o.texParameteri(B,10241,9728),o.texParameteri(B,10240,9728);for(let Fe=0;Fe<fe;Fe++)o.texImage2D(xe+Fe,0,6408,1,1,0,6408,5121,ne);return me}const X={};X[3553]=ue(3553,3553,1),X[34067]=ue(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(2929),l.setFunc(Da),ce(!1),Oe(uc),Te(2884),re(oi);function Te(B){d[B]!==!0&&(o.enable(B),d[B]=!0)}function be(B){d[B]!==!1&&(o.disable(B),d[B]=!1)}function Ce(B,xe){return f[B]!==xe?(o.bindFramebuffer(B,xe),f[B]=xe,n&&(B===36009&&(f[36160]=xe),B===36160&&(f[36009]=xe)),!0):!1}function de(B,xe){let fe=p,ne=!1;if(B)if(fe=g.get(xe),fe===void 0&&(fe=[],g.set(xe,fe)),B.isWebGLMultipleRenderTargets){const me=B.texture;if(fe.length!==me.length||fe[0]!==36064){for(let Fe=0,ot=me.length;Fe<ot;Fe++)fe[Fe]=36064+Fe;fe.length=me.length,ne=!0}}else fe[0]!==36064&&(fe[0]=36064,ne=!0);else fe[0]!==1029&&(fe[0]=1029,ne=!0);ne&&(t.isWebGL2?o.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function ke(B){return m!==B?(o.useProgram(B),m=B,!0):!1}const Q={[rs]:32774,[Wd]:32778,[Xd]:32779};if(n)Q[pc]=32775,Q[mc]=32776;else{const B=e.get("EXT_blend_minmax");B!==null&&(Q[pc]=B.MIN_EXT,Q[mc]=B.MAX_EXT)}const K={[qd]:0,[$d]:1,[Yd]:768,[th]:770,[ef]:776,[Jd]:774,[Zd]:772,[jd]:769,[nh]:771,[Qd]:775,[Kd]:773};function re(B,xe,fe,ne,me,Fe,ot,gt){if(B===oi){v===!0&&(be(3042),v=!1);return}if(v===!1&&(Te(3042),v=!0),B!==Gd){if(B!==x||gt!==T){if((_!==rs||M!==rs)&&(o.blendEquation(32774),_=rs,M=rs),gt)switch(B){case ds:o.blendFuncSeparate(1,771,1,771);break;case Qs:o.blendFunc(1,1);break;case dc:o.blendFuncSeparate(0,769,0,1);break;case fc:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ds:o.blendFuncSeparate(770,771,1,771);break;case Qs:o.blendFunc(770,1);break;case dc:o.blendFuncSeparate(0,769,0,1);break;case fc:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,w=null,E=null,b=null,x=B,T=gt}return}me=me||xe,Fe=Fe||fe,ot=ot||ne,(xe!==_||me!==M)&&(o.blendEquationSeparate(Q[xe],Q[me]),_=xe,M=me),(fe!==y||ne!==w||Fe!==E||ot!==b)&&(o.blendFuncSeparate(K[fe],K[ne],K[Fe],K[ot]),y=fe,w=ne,E=Fe,b=ot),x=B,T=null}function ye(B,xe){B.side===Lt?be(2884):Te(2884);let fe=B.side===tn;xe&&(fe=!fe),ce(fe),B.blending===ds&&B.transparent===!1?re(oi):re(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),a.setMask(B.colorWrite);const ne=B.stencilWrite;c.setTest(ne),ne&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ae(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Te(32926):be(32926)}function ce(B){R!==B&&(B?o.frontFace(2304):o.frontFace(2305),R=B)}function Oe(B){B!==kd?(Te(2884),B!==D&&(B===uc?o.cullFace(1029):B===Vd?o.cullFace(1028):o.cullFace(1032))):be(2884),D=B}function Ee(B){B!==V&&(Y&&o.lineWidth(B),V=B)}function Ae(B,xe,fe){B?(Te(32823),(U!==xe||O!==fe)&&(o.polygonOffset(xe,fe),U=xe,O=fe)):be(32823)}function $e(B){B?Te(3089):be(3089)}function je(B){B===void 0&&(B=33984+z-1),I!==B&&(o.activeTexture(B),I=B)}function L(B,xe,fe){fe===void 0&&(I===null?fe=33984+z-1:fe=I);let ne=N[fe];ne===void 0&&(ne={type:void 0,texture:void 0},N[fe]=ne),(ne.type!==B||ne.texture!==xe)&&(I!==fe&&(o.activeTexture(fe),I=fe),o.bindTexture(B,xe||X[B]),ne.type=B,ne.texture=xe)}function A(){const B=N[I];B!==void 0&&B.type!==void 0&&(o.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function q(){try{o.compressedTexImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{o.texSubImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{o.texSubImage3D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{o.texStorage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function P(){try{o.texStorage3D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function H(){try{o.texImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{o.texImage3D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(B){te.equals(B)===!1&&(o.scissor(B.x,B.y,B.z,B.w),te.copy(B))}function _e(B){ae.equals(B)===!1&&(o.viewport(B.x,B.y,B.z,B.w),ae.copy(B))}function Le(B,xe){let fe=u.get(xe);fe===void 0&&(fe=new WeakMap,u.set(xe,fe));let ne=fe.get(B);ne===void 0&&(ne=o.getUniformBlockIndex(xe,B.name),fe.set(B,ne))}function Be(B,xe){const ne=u.get(xe).get(B);h.get(B)!==ne&&(o.uniformBlockBinding(xe,ne,B.__bindingPointIndex),h.set(B,ne))}function et(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},I=null,N={},f={},g=new WeakMap,p=[],m=null,v=!1,x=null,_=null,y=null,w=null,M=null,E=null,b=null,T=!1,R=null,D=null,V=null,U=null,O=null,te.set(0,0,o.canvas.width,o.canvas.height),ae.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Te,disable:be,bindFramebuffer:Ce,drawBuffers:de,useProgram:ke,setBlending:re,setMaterial:ye,setFlipSided:ce,setCullFace:Oe,setLineWidth:Ee,setPolygonOffset:Ae,setScissorTest:$e,activeTexture:je,bindTexture:L,unbindTexture:A,compressedTexImage2D:q,texImage2D:H,texImage3D:ve,updateUBOMapping:Le,uniformBlockBinding:Be,texStorage2D:Ne,texStorage3D:P,texSubImage2D:se,texSubImage3D:le,compressedTexSubImage2D:ge,scissor:Me,viewport:_e,reset:et}}function k_(o,e,t,n,i,s,r){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,A){return v?new OffscreenCanvas(L,A):eo("canvas")}function _(L,A,q,se){let le=1;if((L.width>se||L.height>se)&&(le=se/Math.max(L.width,L.height)),le<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ge=A?Oa:Math.floor,Ne=ge(le*L.width),P=ge(le*L.height);p===void 0&&(p=x(Ne,P));const H=q?x(Ne,P):p;return H.width=Ne,H.height=P,H.getContext("2d").drawImage(L,0,0,Ne,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Ne+"x"+P+")."),H}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function y(L){return Uc(L.width)&&Uc(L.height)}function w(L){return a?!1:L.wrapS!==zt||L.wrapT!==zt||L.minFilter!==xt&&L.minFilter!==it}function M(L,A){return L.generateMipmaps&&A&&L.minFilter!==xt&&L.minFilter!==it}function E(L){o.generateMipmap(L)}function b(L,A,q,se,le=!1){if(a===!1)return A;if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ge=A;return A===6403&&(q===5126&&(ge=33326),q===5131&&(ge=33325),q===5121&&(ge=33321)),A===33319&&(q===5126&&(ge=33328),q===5131&&(ge=33327),q===5121&&(ge=33323)),A===6408&&(q===5126&&(ge=34836),q===5131&&(ge=34842),q===5121&&(ge=se===Xe&&le===!1?35907:32856),q===32819&&(ge=32854),q===32820&&(ge=32855)),(ge===33325||ge===33326||ge===33327||ge===33328||ge===34842||ge===34836)&&e.get("EXT_color_buffer_float"),ge}function T(L,A,q){return M(L,q)===!0||L.isFramebufferTexture&&L.minFilter!==xt&&L.minFilter!==it?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function R(L){return L===xt||L===Zr||L===Kr?9728:9729}function D(L){const A=L.target;A.removeEventListener("dispose",D),U(A),A.isVideoTexture&&g.delete(A)}function V(L){const A=L.target;A.removeEventListener("dispose",V),z(A)}function U(L){const A=n.get(L);if(A.__webglInit===void 0)return;const q=L.source,se=m.get(q);if(se){const le=se[A.__cacheKey];le.usedTimes--,le.usedTimes===0&&O(L),Object.keys(se).length===0&&m.delete(q)}n.remove(L)}function O(L){const A=n.get(L);o.deleteTexture(A.__webglTexture);const q=L.source,se=m.get(q);delete se[A.__cacheKey],r.memory.textures--}function z(L){const A=L.texture,q=n.get(L),se=n.get(A);if(se.__webglTexture!==void 0&&(o.deleteTexture(se.__webglTexture),r.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let le=0;le<6;le++)o.deleteFramebuffer(q.__webglFramebuffer[le]),q.__webglDepthbuffer&&o.deleteRenderbuffer(q.__webglDepthbuffer[le]);else{if(o.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&o.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&o.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let le=0;le<q.__webglColorRenderbuffer.length;le++)q.__webglColorRenderbuffer[le]&&o.deleteRenderbuffer(q.__webglColorRenderbuffer[le]);q.__webglDepthRenderbuffer&&o.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let le=0,ge=A.length;le<ge;le++){const Ne=n.get(A[le]);Ne.__webglTexture&&(o.deleteTexture(Ne.__webglTexture),r.memory.textures--),n.remove(A[le])}n.remove(A),n.remove(L)}let Y=0;function k(){Y=0}function F(){const L=Y;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),Y+=1,L}function I(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.encoding),A.join()}function N(L,A){const q=n.get(L);if(L.isVideoTexture&&$e(L),L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){const se=L.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(q,L,A);return}}t.bindTexture(3553,q.__webglTexture,33984+A)}function ee(L,A){const q=n.get(L);if(L.version>0&&q.__version!==L.version){be(q,L,A);return}t.bindTexture(35866,q.__webglTexture,33984+A)}function j(L,A){const q=n.get(L);if(L.version>0&&q.__version!==L.version){be(q,L,A);return}t.bindTexture(32879,q.__webglTexture,33984+A)}function te(L,A){const q=n.get(L);if(L.version>0&&q.__version!==L.version){Ce(q,L,A);return}t.bindTexture(34067,q.__webglTexture,33984+A)}const ae={[wn]:10497,[zt]:33071,[er]:33648},ue={[xt]:9728,[Zr]:9984,[Kr]:9986,[it]:9729,[$a]:9985,[li]:9987};function X(L,A,q){if(q?(o.texParameteri(L,10242,ae[A.wrapS]),o.texParameteri(L,10243,ae[A.wrapT]),(L===32879||L===35866)&&o.texParameteri(L,32882,ae[A.wrapR]),o.texParameteri(L,10240,ue[A.magFilter]),o.texParameteri(L,10241,ue[A.minFilter])):(o.texParameteri(L,10242,33071),o.texParameteri(L,10243,33071),(L===32879||L===35866)&&o.texParameteri(L,32882,33071),(A.wrapS!==zt||A.wrapT!==zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(L,10240,R(A.magFilter)),o.texParameteri(L,10241,R(A.minFilter)),A.minFilter!==xt&&A.minFilter!==it&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(A.type===dn&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===yn&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(o.texParameterf(L,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function Te(L,A){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",D));const se=A.source;let le=m.get(se);le===void 0&&(le={},m.set(se,le));const ge=I(A);if(ge!==L.__cacheKey){le[ge]===void 0&&(le[ge]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,q=!0),le[ge].usedTimes++;const Ne=le[L.__cacheKey];Ne!==void 0&&(le[L.__cacheKey].usedTimes--,Ne.usedTimes===0&&O(A)),L.__cacheKey=ge,L.__webglTexture=le[ge].texture}return q}function be(L,A,q){let se=3553;A.isDataArrayTexture&&(se=35866),A.isData3DTexture&&(se=32879);const le=Te(L,A),ge=A.source;t.bindTexture(se,L.__webglTexture,33984+q);const Ne=n.get(ge);if(ge.version!==Ne.__version||le===!0){t.activeTexture(33984+q),o.pixelStorei(37440,A.flipY),o.pixelStorei(37441,A.premultiplyAlpha),o.pixelStorei(3317,A.unpackAlignment),o.pixelStorei(37443,0);const P=w(A)&&y(A.image)===!1;let H=_(A.image,P,!1,h);H=je(A,H);const ve=y(H)||a,Me=s.convert(A.format,A.encoding);let _e=s.convert(A.type),Le=b(A.internalFormat,Me,_e,A.encoding,A.isVideoTexture);X(se,A,ve);let Be;const et=A.mipmaps,B=a&&A.isVideoTexture!==!0,xe=Ne.__version===void 0||le===!0,fe=T(A,H,ve);if(A.isDepthTexture)Le=6402,a?A.type===dn?Le=36012:A.type===Ci?Le=33190:A.type===fs?Le=35056:Le=33189:A.type===dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Ii&&Le===6402&&A.type!==ih&&A.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ci,_e=s.convert(A.type)),A.format===_s&&Le===6402&&(Le=34041,A.type!==fs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=fs,_e=s.convert(A.type))),xe&&(B?t.texStorage2D(3553,1,Le,H.width,H.height):t.texImage2D(3553,0,Le,H.width,H.height,0,Me,_e,null));else if(A.isDataTexture)if(et.length>0&&ve){B&&xe&&t.texStorage2D(3553,fe,Le,et[0].width,et[0].height);for(let ne=0,me=et.length;ne<me;ne++)Be=et[ne],B?t.texSubImage2D(3553,ne,0,0,Be.width,Be.height,Me,_e,Be.data):t.texImage2D(3553,ne,Le,Be.width,Be.height,0,Me,_e,Be.data);A.generateMipmaps=!1}else B?(xe&&t.texStorage2D(3553,fe,Le,H.width,H.height),t.texSubImage2D(3553,0,0,0,H.width,H.height,Me,_e,H.data)):t.texImage2D(3553,0,Le,H.width,H.height,0,Me,_e,H.data);else if(A.isCompressedTexture){B&&xe&&t.texStorage2D(3553,fe,Le,et[0].width,et[0].height);for(let ne=0,me=et.length;ne<me;ne++)Be=et[ne],A.format!==Xt?Me!==null?B?t.compressedTexSubImage2D(3553,ne,0,0,Be.width,Be.height,Me,Be.data):t.compressedTexImage2D(3553,ne,Le,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?t.texSubImage2D(3553,ne,0,0,Be.width,Be.height,Me,_e,Be.data):t.texImage2D(3553,ne,Le,Be.width,Be.height,0,Me,_e,Be.data)}else if(A.isDataArrayTexture)B?(xe&&t.texStorage3D(35866,fe,Le,H.width,H.height,H.depth),t.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,Me,_e,H.data)):t.texImage3D(35866,0,Le,H.width,H.height,H.depth,0,Me,_e,H.data);else if(A.isData3DTexture)B?(xe&&t.texStorage3D(32879,fe,Le,H.width,H.height,H.depth),t.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,Me,_e,H.data)):t.texImage3D(32879,0,Le,H.width,H.height,H.depth,0,Me,_e,H.data);else if(A.isFramebufferTexture){if(xe)if(B)t.texStorage2D(3553,fe,Le,H.width,H.height);else{let ne=H.width,me=H.height;for(let Fe=0;Fe<fe;Fe++)t.texImage2D(3553,Fe,Le,ne,me,0,Me,_e,null),ne>>=1,me>>=1}}else if(et.length>0&&ve){B&&xe&&t.texStorage2D(3553,fe,Le,et[0].width,et[0].height);for(let ne=0,me=et.length;ne<me;ne++)Be=et[ne],B?t.texSubImage2D(3553,ne,0,0,Me,_e,Be):t.texImage2D(3553,ne,Le,Me,_e,Be);A.generateMipmaps=!1}else B?(xe&&t.texStorage2D(3553,fe,Le,H.width,H.height),t.texSubImage2D(3553,0,0,0,Me,_e,H)):t.texImage2D(3553,0,Le,Me,_e,H);M(A,ve)&&E(se),Ne.__version=ge.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Ce(L,A,q){if(A.image.length!==6)return;const se=Te(L,A),le=A.source;t.bindTexture(34067,L.__webglTexture,33984+q);const ge=n.get(le);if(le.version!==ge.__version||se===!0){t.activeTexture(33984+q),o.pixelStorei(37440,A.flipY),o.pixelStorei(37441,A.premultiplyAlpha),o.pixelStorei(3317,A.unpackAlignment),o.pixelStorei(37443,0);const Ne=A.isCompressedTexture||A.image[0].isCompressedTexture,P=A.image[0]&&A.image[0].isDataTexture,H=[];for(let ne=0;ne<6;ne++)!Ne&&!P?H[ne]=_(A.image[ne],!1,!0,c):H[ne]=P?A.image[ne].image:A.image[ne],H[ne]=je(A,H[ne]);const ve=H[0],Me=y(ve)||a,_e=s.convert(A.format,A.encoding),Le=s.convert(A.type),Be=b(A.internalFormat,_e,Le,A.encoding),et=a&&A.isVideoTexture!==!0,B=ge.__version===void 0||se===!0;let xe=T(A,ve,Me);X(34067,A,Me);let fe;if(Ne){et&&B&&t.texStorage2D(34067,xe,Be,ve.width,ve.height);for(let ne=0;ne<6;ne++){fe=H[ne].mipmaps;for(let me=0;me<fe.length;me++){const Fe=fe[me];A.format!==Xt?_e!==null?et?t.compressedTexSubImage2D(34069+ne,me,0,0,Fe.width,Fe.height,_e,Fe.data):t.compressedTexImage2D(34069+ne,me,Be,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?t.texSubImage2D(34069+ne,me,0,0,Fe.width,Fe.height,_e,Le,Fe.data):t.texImage2D(34069+ne,me,Be,Fe.width,Fe.height,0,_e,Le,Fe.data)}}}else{fe=A.mipmaps,et&&B&&(fe.length>0&&xe++,t.texStorage2D(34067,xe,Be,H[0].width,H[0].height));for(let ne=0;ne<6;ne++)if(P){et?t.texSubImage2D(34069+ne,0,0,0,H[ne].width,H[ne].height,_e,Le,H[ne].data):t.texImage2D(34069+ne,0,Be,H[ne].width,H[ne].height,0,_e,Le,H[ne].data);for(let me=0;me<fe.length;me++){const ot=fe[me].image[ne].image;et?t.texSubImage2D(34069+ne,me+1,0,0,ot.width,ot.height,_e,Le,ot.data):t.texImage2D(34069+ne,me+1,Be,ot.width,ot.height,0,_e,Le,ot.data)}}else{et?t.texSubImage2D(34069+ne,0,0,0,_e,Le,H[ne]):t.texImage2D(34069+ne,0,Be,_e,Le,H[ne]);for(let me=0;me<fe.length;me++){const Fe=fe[me];et?t.texSubImage2D(34069+ne,me+1,0,0,_e,Le,Fe.image[ne]):t.texImage2D(34069+ne,me+1,Be,_e,Le,Fe.image[ne])}}}M(A,Me)&&E(34067),ge.__version=le.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function de(L,A,q,se,le){const ge=s.convert(q.format,q.encoding),Ne=s.convert(q.type),P=b(q.internalFormat,ge,Ne,q.encoding);n.get(A).__hasExternalTextures||(le===32879||le===35866?t.texImage3D(le,0,P,A.width,A.height,A.depth,0,ge,Ne,null):t.texImage2D(le,0,P,A.width,A.height,0,ge,Ne,null)),t.bindFramebuffer(36160,L),Ae(A)?d.framebufferTexture2DMultisampleEXT(36160,se,le,n.get(q).__webglTexture,0,Ee(A)):o.framebufferTexture2D(36160,se,le,n.get(q).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(L,A,q){if(o.bindRenderbuffer(36161,L),A.depthBuffer&&!A.stencilBuffer){let se=33189;if(q||Ae(A)){const le=A.depthTexture;le&&le.isDepthTexture&&(le.type===dn?se=36012:le.type===Ci&&(se=33190));const ge=Ee(A);Ae(A)?d.renderbufferStorageMultisampleEXT(36161,ge,se,A.width,A.height):o.renderbufferStorageMultisample(36161,ge,se,A.width,A.height)}else o.renderbufferStorage(36161,se,A.width,A.height);o.framebufferRenderbuffer(36160,36096,36161,L)}else if(A.depthBuffer&&A.stencilBuffer){const se=Ee(A);q&&Ae(A)===!1?o.renderbufferStorageMultisample(36161,se,35056,A.width,A.height):Ae(A)?d.renderbufferStorageMultisampleEXT(36161,se,35056,A.width,A.height):o.renderbufferStorage(36161,34041,A.width,A.height),o.framebufferRenderbuffer(36160,33306,36161,L)}else{const se=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let le=0;le<se.length;le++){const ge=se[le],Ne=s.convert(ge.format,ge.encoding),P=s.convert(ge.type),H=b(ge.internalFormat,Ne,P,ge.encoding),ve=Ee(A);q&&Ae(A)===!1?o.renderbufferStorageMultisample(36161,ve,H,A.width,A.height):Ae(A)?d.renderbufferStorageMultisampleEXT(36161,ve,H,A.width,A.height):o.renderbufferStorage(36161,H,A.width,A.height)}}o.bindRenderbuffer(36161,null)}function Q(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),N(A.depthTexture,0);const se=n.get(A.depthTexture).__webglTexture,le=Ee(A);if(A.depthTexture.format===Ii)Ae(A)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,se,0,le):o.framebufferTexture2D(36160,36096,3553,se,0);else if(A.depthTexture.format===_s)Ae(A)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,se,0,le):o.framebufferTexture2D(36160,33306,3553,se,0);else throw new Error("Unknown depthTexture format")}function K(L){const A=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Q(A.__webglFramebuffer,L)}else if(q){A.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(36160,A.__webglFramebuffer[se]),A.__webglDepthbuffer[se]=o.createRenderbuffer(),ke(A.__webglDepthbuffer[se],L,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=o.createRenderbuffer(),ke(A.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function re(L,A,q){const se=n.get(L);A!==void 0&&de(se.__webglFramebuffer,L,L.texture,36064,3553),q!==void 0&&K(L)}function ye(L){const A=L.texture,q=n.get(L),se=n.get(A);L.addEventListener("dispose",V),L.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=o.createTexture()),se.__version=A.version,r.memory.textures++);const le=L.isWebGLCubeRenderTarget===!0,ge=L.isWebGLMultipleRenderTargets===!0,Ne=y(L)||a;if(le){q.__webglFramebuffer=[];for(let P=0;P<6;P++)q.__webglFramebuffer[P]=o.createFramebuffer()}else{if(q.__webglFramebuffer=o.createFramebuffer(),ge)if(i.drawBuffers){const P=L.texture;for(let H=0,ve=P.length;H<ve;H++){const Me=n.get(P[H]);Me.__webglTexture===void 0&&(Me.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&Ae(L)===!1){const P=ge?A:[A];q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let H=0;H<P.length;H++){const ve=P[H];q.__webglColorRenderbuffer[H]=o.createRenderbuffer(),o.bindRenderbuffer(36161,q.__webglColorRenderbuffer[H]);const Me=s.convert(ve.format,ve.encoding),_e=s.convert(ve.type),Le=b(ve.internalFormat,Me,_e,ve.encoding,L.isXRRenderTarget===!0),Be=Ee(L);o.renderbufferStorageMultisample(36161,Be,Le,L.width,L.height),o.framebufferRenderbuffer(36160,36064+H,36161,q.__webglColorRenderbuffer[H])}o.bindRenderbuffer(36161,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),ke(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(le){t.bindTexture(34067,se.__webglTexture),X(34067,A,Ne);for(let P=0;P<6;P++)de(q.__webglFramebuffer[P],L,A,36064,34069+P);M(A,Ne)&&E(34067),t.unbindTexture()}else if(ge){const P=L.texture;for(let H=0,ve=P.length;H<ve;H++){const Me=P[H],_e=n.get(Me);t.bindTexture(3553,_e.__webglTexture),X(3553,Me,Ne),de(q.__webglFramebuffer,L,Me,36064+H,3553),M(Me,Ne)&&E(3553)}t.unbindTexture()}else{let P=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?P=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(P,se.__webglTexture),X(P,A,Ne),de(q.__webglFramebuffer,L,A,36064,P),M(A,Ne)&&E(P),t.unbindTexture()}L.depthBuffer&&K(L)}function ce(L){const A=y(L)||a,q=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let se=0,le=q.length;se<le;se++){const ge=q[se];if(M(ge,A)){const Ne=L.isWebGLCubeRenderTarget?34067:3553,P=n.get(ge).__webglTexture;t.bindTexture(Ne,P),E(Ne),t.unbindTexture()}}}function Oe(L){if(a&&L.samples>0&&Ae(L)===!1){const A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],q=L.width,se=L.height;let le=16384;const ge=[],Ne=L.stencilBuffer?33306:36096,P=n.get(L),H=L.isWebGLMultipleRenderTargets===!0;if(H)for(let ve=0;ve<A.length;ve++)t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ve,36161,null),t.bindFramebuffer(36160,P.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ve,3553,null,0);t.bindFramebuffer(36008,P.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,P.__webglFramebuffer);for(let ve=0;ve<A.length;ve++){ge.push(36064+ve),L.depthBuffer&&ge.push(Ne);const Me=P.__ignoreDepthValues!==void 0?P.__ignoreDepthValues:!1;if(Me===!1&&(L.depthBuffer&&(le|=256),L.stencilBuffer&&(le|=1024)),H&&o.framebufferRenderbuffer(36008,36064,36161,P.__webglColorRenderbuffer[ve]),Me===!0&&(o.invalidateFramebuffer(36008,[Ne]),o.invalidateFramebuffer(36009,[Ne])),H){const _e=n.get(A[ve]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,_e,0)}o.blitFramebuffer(0,0,q,se,0,0,q,se,le,9728),f&&o.invalidateFramebuffer(36008,ge)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),H)for(let ve=0;ve<A.length;ve++){t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ve,36161,P.__webglColorRenderbuffer[ve]);const Me=n.get(A[ve]).__webglTexture;t.bindFramebuffer(36160,P.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ve,3553,Me,0)}t.bindFramebuffer(36009,P.__webglMultisampledFramebuffer)}}function Ee(L){return Math.min(u,L.samples)}function Ae(L){const A=n.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function $e(L){const A=r.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function je(L,A){const q=L.encoding,se=L.format,le=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Na||q!==zn&&(q===Xe?a===!1?e.has("EXT_sRGB")===!0&&se===Xt?(L.format=Na,L.minFilter=it,L.generateMipmaps=!1):A=ah.sRGBToLinear(A):(se!==Xt||le!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),A}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=N,this.setTexture2DArray=ee,this.setTexture3D=j,this.setTextureCube=te,this.rebindTextures=re,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Ae}function jf(o,e,t){const n=t.isWebGL2;function i(s,r=null){let a;if(s===Oi)return 5121;if(s===xf)return 32819;if(s===_f)return 32820;if(s===mf)return 5120;if(s===gf)return 5122;if(s===ih)return 5123;if(s===vf)return 5124;if(s===Ci)return 5125;if(s===dn)return 5126;if(s===yn)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===yf)return 6406;if(s===Xt)return 6408;if(s===wf)return 6409;if(s===Mf)return 6410;if(s===Ii)return 6402;if(s===_s)return 34041;if(s===Sf)return 6403;if(s===bf)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Na)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Tf)return 36244;if(s===Af)return 33319;if(s===Ef)return 33320;if(s===Cf)return 36249;if(s===Sa||s===Ta||s===Aa||s===Ea)if(r===Xe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Sa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Sa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ta)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Aa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ea)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===gc||s===vc||s===xc||s===_c)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===gc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_c)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Lf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===yc||s===bc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===yc)return r===Xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===bc)return r===Xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===wc||s===Mc||s===Sc||s===Tc||s===Ac||s===Ec||s===Cc||s===Lc||s===Rc||s===Pc||s===Ic||s===Dc||s===Nc||s===Oc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===wc)return r===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Mc)return r===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sc)return r===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Tc)return r===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ac)return r===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ec)return r===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Cc)return r===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lc)return r===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rc)return r===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pc)return r===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ic)return r===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dc)return r===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Nc)return r===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Oc)return r===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Fc)return r===Xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===fs?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class Zf extends pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ri extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const V_={type:"move"};class zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const x=new ri;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[p.jointName]=x,c.add(x)}const v=c.joints[p.jointName];m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=m.radius),v.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}}class Kf extends mt{constructor(e,t,n,i,s,r,a,l,c,h){if(h=h!==void 0?h:Ii,h!==Ii&&h!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ii&&(n=Ci),n===void 0&&h===_s&&(n=fs),super(null,i,s,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:xt,this.minFilter=l!==void 0?l:xt,this.flipY=!1,this.generateMipmaps=!1}}class H_ extends Hn{constructor(e,t){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=null,c=null,h=null,u=null,d=null,f=null;const g=t.getContextAttributes();let p=null,m=null;const v=[],x=[],_=new pt;_.layers.enable(1),_.viewport=new Je;const y=new pt;y.layers.enable(2),y.viewport=new Je;const w=[_,y],M=new Zf;M.layers.enable(1),M.layers.enable(2);let E=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let N=v[I];return N===void 0&&(N=new zl,v[I]=N),N.getTargetRaySpace()},this.getControllerGrip=function(I){let N=v[I];return N===void 0&&(N=new zl,v[I]=N),N.getGripSpace()},this.getHand=function(I){let N=v[I];return N===void 0&&(N=new zl,v[I]=N),N.getHandSpace()};function T(I){const N=x.indexOf(I.inputSource);if(N===-1)return;const ee=v[N];ee!==void 0&&ee.dispatchEvent({type:I.type,data:I.inputSource})}function R(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",D);for(let I=0;I<v.length;I++){const N=x[I];N!==null&&(x[I]=null,v[I].disconnect(N))}E=null,b=null,e.setRenderTarget(p),d=null,u=null,h=null,i=null,m=null,F.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",R),i.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const N={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,N),i.updateRenderState({baseLayer:d}),m=new Rt(d.framebufferWidth,d.framebufferHeight,{format:Xt,type:Oi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let N=null,ee=null,j=null;g.depth&&(j=g.stencil?35056:33190,N=g.stencil?_s:Ii,ee=g.stencil?fs:Ci);const te={colorFormat:32856,depthFormat:j,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(te),i.updateRenderState({layers:[u]}),m=new Rt(u.textureWidth,u.textureHeight,{format:Xt,type:Oi,depthTexture:new Kf(u.textureWidth,u.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ae=e.properties.get(m);ae.__ignoreDepthValues=u.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,r=await i.requestReferenceSpace(a),F.setContext(i),F.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(I){for(let N=0;N<I.removed.length;N++){const ee=I.removed[N],j=x.indexOf(ee);j>=0&&(x[j]=null,v[j].dispatchEvent({type:"disconnected",data:ee}))}for(let N=0;N<I.added.length;N++){const ee=I.added[N];let j=x.indexOf(ee);if(j===-1){for(let ae=0;ae<v.length;ae++)if(ae>=x.length){x.push(ee),j=ae;break}else if(x[ae]===null){x[ae]=ee,j=ae;break}if(j===-1)break}const te=v[j];te&&te.dispatchEvent({type:"connected",data:ee})}}const V=new S,U=new S;function O(I,N,ee){V.setFromMatrixPosition(N.matrixWorld),U.setFromMatrixPosition(ee.matrixWorld);const j=V.distanceTo(U),te=N.projectionMatrix.elements,ae=ee.projectionMatrix.elements,ue=te[14]/(te[10]-1),X=te[14]/(te[10]+1),Te=(te[9]+1)/te[5],be=(te[9]-1)/te[5],Ce=(te[8]-1)/te[0],de=(ae[8]+1)/ae[0],ke=ue*Ce,Q=ue*de,K=j/(-Ce+de),re=K*-Ce;N.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(re),I.translateZ(K),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const ye=ue+K,ce=X+K,Oe=ke-re,Ee=Q+(j-re),Ae=Te*X/ce*ye,$e=be*X/ce*ye;I.projectionMatrix.makePerspective(Oe,Ee,Ae,$e,ye,ce)}function z(I,N){N===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(N.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(i===null)return;M.near=y.near=_.near=I.near,M.far=y.far=_.far=I.far,(E!==M.near||b!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,b=M.far);const N=I.parent,ee=M.cameras;z(M,N);for(let te=0;te<ee.length;te++)z(ee[te],N);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),I.matrix.copy(M.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);const j=I.children;for(let te=0,ae=j.length;te<ae;te++)j[te].updateMatrixWorld(!0);ee.length===2?O(M,_,y):M.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(I){u!==null&&(u.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)};let Y=null;function k(I,N){if(c=N.getViewerPose(l||r),f=N,c!==null){const ee=c.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let j=!1;ee.length!==M.cameras.length&&(M.cameras.length=0,j=!0);for(let te=0;te<ee.length;te++){const ae=ee[te];let ue=null;if(d!==null)ue=d.getViewport(ae);else{const Te=h.getViewSubImage(u,ae);ue=Te.viewport,te===0&&(e.setRenderTargetTextures(m,Te.colorTexture,u.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(m))}let X=w[te];X===void 0&&(X=new pt,X.layers.enable(te),X.viewport=new Je,w[te]=X),X.matrix.fromArray(ae.transform.matrix),X.projectionMatrix.fromArray(ae.projectionMatrix),X.viewport.set(ue.x,ue.y,ue.width,ue.height),te===0&&M.matrix.copy(X.matrix),j===!0&&M.cameras.push(X)}}for(let ee=0;ee<v.length;ee++){const j=x[ee],te=v[ee];j!==null&&te!==void 0&&te.update(j,N,l||r)}Y&&Y(I,N),f=null}const F=new Wf;F.setAnimationLoop(k),this.setAnimationLoop=function(I){Y=I},this.dispose=function(){}}}function G_(o,e){function t(p,m){p.fogColor.value.copy(m.color),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,v,x,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),h(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,_)):m.isMeshMatcapMaterial?(i(p,m),f(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),g(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&r(p,m)):m.isPointsMaterial?a(p,m,v,x):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===tn&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===tn&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const y=o.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*y}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let x;m.map?x=m.map:m.specularMap?x=m.specularMap:m.displacementMap?x=m.displacementMap:m.normalMap?x=m.normalMap:m.bumpMap?x=m.bumpMap:m.roughnessMap?x=m.roughnessMap:m.metalnessMap?x=m.metalnessMap:m.alphaMap?x=m.alphaMap:m.emissiveMap?x=m.emissiveMap:m.clearcoatMap?x=m.clearcoatMap:m.clearcoatNormalMap?x=m.clearcoatNormalMap:m.clearcoatRoughnessMap?x=m.clearcoatRoughnessMap:m.iridescenceMap?x=m.iridescenceMap:m.iridescenceThicknessMap?x=m.iridescenceThicknessMap:m.specularIntensityMap?x=m.specularIntensityMap:m.specularColorMap?x=m.specularColorMap:m.transmissionMap?x=m.transmissionMap:m.thicknessMap?x=m.thicknessMap:m.sheenColorMap?x=m.sheenColorMap:m.sheenRoughnessMap&&(x=m.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix));let _;m.aoMap?_=m.aoMap:m.lightMap&&(_=m.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function r(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,v,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=x*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===tn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function f(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function W_(o,e,t,n){let i={},s={},r=[];const a=t.isWebGL2?o.getParameter(35375):0;function l(x,_){const y=_.program;n.uniformBlockBinding(x,y)}function c(x,_){let y=i[x.id];y===void 0&&(g(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",m));const w=_.program;n.updateUBOMapping(x,w);const M=e.render.frame;s[x.id]!==M&&(d(x),s[x.id]=M)}function h(x){const _=u();x.__bindingPointIndex=_;const y=o.createBuffer(),w=x.__size,M=x.usage;return o.bindBuffer(35345,y),o.bufferData(35345,w,M),o.bindBuffer(35345,null),o.bindBufferBase(35345,_,y),y}function u(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=i[x.id],y=x.uniforms,w=x.__cache;o.bindBuffer(35345,_);for(let M=0,E=y.length;M<E;M++){const b=y[M];if(f(b,M,w)===!0){const T=b.value,R=b.__offset;typeof T=="number"?(b.__data[0]=T,o.bufferSubData(35345,R,b.__data)):(b.value.isMatrix3?(b.__data[0]=b.value.elements[0],b.__data[1]=b.value.elements[1],b.__data[2]=b.value.elements[2],b.__data[3]=b.value.elements[0],b.__data[4]=b.value.elements[3],b.__data[5]=b.value.elements[4],b.__data[6]=b.value.elements[5],b.__data[7]=b.value.elements[0],b.__data[8]=b.value.elements[6],b.__data[9]=b.value.elements[7],b.__data[10]=b.value.elements[8],b.__data[11]=b.value.elements[0]):T.toArray(b.__data),o.bufferSubData(35345,R,b.__data))}}o.bindBuffer(35345,null)}function f(x,_,y){const w=x.value;if(y[_]===void 0)return typeof w=="number"?y[_]=w:y[_]=w.clone(),!0;if(typeof w=="number"){if(y[_]!==w)return y[_]=w,!0}else{const M=y[_];if(M.equals(w)===!1)return M.copy(w),!0}return!1}function g(x){const _=x.uniforms;let y=0;const w=16;let M=0;for(let E=0,b=_.length;E<b;E++){const T=_[E],R=p(T);if(T.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,E>0){M=y%w;const D=w-M;M!==0&&D-R.boundary<0&&(y+=w-M,T.__offset=y)}y+=R.storage}return M=y%w,M>0&&(y+=w-M),x.__size=y,x.__cache={},this}function p(x){const _=x.value,y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(x){const _=x.target;_.removeEventListener("dispose",m);const y=r.indexOf(_.__bindingPointIndex);r.splice(y,1),o.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function v(){for(const x in i)o.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:l,update:c,dispose:v}}function X_(){const o=eo("canvas");return o.style.display="block",o}function go(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:X_(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,r=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,a=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=o.alpha!==void 0?o.alpha:!1;let u=null,d=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=zn,this.physicallyCorrectLights=!1,this.toneMapping=bn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let m=!1,v=0,x=0,_=null,y=-1,w=null;const M=new Je,E=new Je;let b=null,T=e.width,R=e.height,D=1,V=null,U=null;const O=new Je(0,0,T,R),z=new Je(0,0,T,R);let Y=!1;const k=new Ka;let F=!1,I=!1,N=null;const ee=new Re,j=new $,te=new S,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return _===null?D:1}let X=t;function Te(C,W){for(let Z=0;Z<C.length;Z++){const G=C[Z],J=e.getContext(G,W);if(J!==null)return J}return null}try{const C={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wa}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",Be,!1),e.addEventListener("webglcontextcreationerror",et,!1),X===null){const W=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&W.shift(),X=Te(W,C),X===null)throw Te(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let be,Ce,de,ke,Q,K,re,ye,ce,Oe,Ee,Ae,$e,je,L,A,q,se,le,ge,Ne,P,H,ve;function Me(){be=new ax(X),Ce=new tx(X,be,o),be.init(Ce),P=new jf(X,be,Ce),de=new z_(X,be,Ce),ke=new hx,Q=new E_,K=new k_(X,be,de,Q,Ce,P,ke),re=new ix(p),ye=new ox(p),ce=new bg(X,Ce),H=new Qv(X,be,ce,Ce),Oe=new lx(X,ce,ke,H),Ee=new px(X,Oe,ce,ke),le=new fx(X,Ce,K),A=new nx(Q),Ae=new A_(p,re,ye,be,Ce,H,A),$e=new G_(p,Q),je=new L_,L=new O_(be,Ce),se=new Jv(p,re,de,Ee,h,r),q=new U_(p,Ee,Ce),ve=new W_(X,ke,Ce,de),ge=new ex(X,be,ke,Ce),Ne=new cx(X,be,ke,Ce),ke.programs=Ae.programs,p.capabilities=Ce,p.extensions=be,p.properties=Q,p.renderLists=je,p.shadowMap=q,p.state=de,p.info=ke}Me();const _e=new H_(p,X);this.xr=_e,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=be.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=be.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(C){C!==void 0&&(D=C,this.setSize(T,R,!1))},this.getSize=function(C){return C.set(T,R)},this.setSize=function(C,W,Z){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=C,R=W,e.width=Math.floor(C*D),e.height=Math.floor(W*D),Z!==!1&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(T*D,R*D).floor()},this.setDrawingBufferSize=function(C,W,Z){T=C,R=W,D=Z,e.width=Math.floor(C*Z),e.height=Math.floor(W*Z),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(O)},this.setViewport=function(C,W,Z,G){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,W,Z,G),de.viewport(M.copy(O).multiplyScalar(D).floor())},this.getScissor=function(C){return C.copy(z)},this.setScissor=function(C,W,Z,G){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,W,Z,G),de.scissor(E.copy(z).multiplyScalar(D).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(C){de.setScissorTest(Y=C)},this.setOpaqueSort=function(C){V=C},this.setTransparentSort=function(C){U=C},this.getClearColor=function(C){return C.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(C=!0,W=!0,Z=!0){let G=0;C&&(G|=16384),W&&(G|=256),Z&&(G|=1024),X.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Be,!1),e.removeEventListener("webglcontextcreationerror",et,!1),je.dispose(),L.dispose(),Q.dispose(),re.dispose(),ye.dispose(),Ee.dispose(),H.dispose(),ve.dispose(),Ae.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Fe),_e.removeEventListener("sessionend",ot),N&&(N.dispose(),N=null),gt.stop()};function Le(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const C=ke.autoReset,W=q.enabled,Z=q.autoUpdate,G=q.needsUpdate,J=q.type;Me(),ke.autoReset=C,q.enabled=W,q.autoUpdate=Z,q.needsUpdate=G,q.type=J}function et(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function B(C){const W=C.target;W.removeEventListener("dispose",B),xe(W)}function xe(C){fe(C),Q.remove(C)}function fe(C){const W=Q.get(C).programs;W!==void 0&&(W.forEach(function(Z){Ae.releaseProgram(Z)}),C.isShaderMaterial&&Ae.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,Z,G,J,Ie){W===null&&(W=ae);const Ue=J.isMesh&&J.matrixWorld.determinant()<0,He=qp(C,W,Z,G,J);de.setMaterial(G,Ue);let Ve=Z.index;const nt=Z.attributes.position;if(Ve===null){if(nt===void 0||nt.count===0)return}else if(Ve.count===0)return;let Ze=1;G.wireframe===!0&&(Ve=Oe.getWireframeAttribute(Z),Ze=2),H.setup(J,G,He,Z,Ve);let Ke,dt=ge;Ve!==null&&(Ke=ce.get(Ve),dt=Ne,dt.setIndex(Ke));const Wi=Ve!==null?Ve.count:nt.count,As=Z.drawRange.start*Ze,Es=Z.drawRange.count*Ze,Cn=Ie!==null?Ie.start*Ze:0,tt=Ie!==null?Ie.count*Ze:1/0,Cs=Math.max(As,Cn),bt=Math.min(Wi,As+Es,Cn+tt)-1,on=Math.max(0,bt-Cs+1);if(on!==0){if(J.isMesh)G.wireframe===!0?(de.setLineWidth(G.wireframeLinewidth*ue()),dt.setMode(1)):dt.setMode(4);else if(J.isLine){let pi=G.linewidth;pi===void 0&&(pi=1),de.setLineWidth(pi*ue()),J.isLineSegments?dt.setMode(1):J.isLineLoop?dt.setMode(2):dt.setMode(3)}else J.isPoints?dt.setMode(0):J.isSprite&&dt.setMode(4);if(J.isInstancedMesh)dt.renderInstances(Cs,on,J.count);else if(Z.isInstancedBufferGeometry){const pi=Math.min(Z.instanceCount,Z._maxInstanceCount);dt.renderInstances(Cs,on,pi)}else dt.render(Cs,on)}},this.compile=function(C,W){function Z(G,J,Ie){G.transparent===!0&&G.side===Lt?(G.side=tn,G.needsUpdate=!0,Io(G,J,Ie),G.side=Un,G.needsUpdate=!0,Io(G,J,Ie),G.side=Lt):Io(G,J,Ie)}d=L.get(C),d.init(),g.push(d),C.traverseVisible(function(G){G.isLight&&G.layers.test(W.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights(p.physicallyCorrectLights),C.traverse(function(G){const J=G.material;if(J)if(Array.isArray(J))for(let Ie=0;Ie<J.length;Ie++){const Ue=J[Ie];Z(Ue,C,G)}else Z(J,C,G)}),g.pop(),d=null};let ne=null;function me(C){ne&&ne(C)}function Fe(){gt.stop()}function ot(){gt.start()}const gt=new Wf;gt.setAnimationLoop(me),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(C){ne=C,_e.setAnimationLoop(C),C===null?gt.stop():gt.start()},_e.addEventListener("sessionstart",Fe),_e.addEventListener("sessionend",ot),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(W),W=_e.getCamera()),C.isScene===!0&&C.onBeforeRender(p,C,W,_),d=L.get(C,g.length),d.init(),g.push(d),ee.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),k.setFromProjectionMatrix(ee),I=this.localClippingEnabled,F=A.init(this.clippingPlanes,I,W),u=je.get(C,f.length),u.init(),f.push(u),fi(C,W,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(V,U),F===!0&&A.beginShadows();const Z=d.state.shadowsArray;if(q.render(Z,C,W),F===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(u,C),d.setupLights(p.physicallyCorrectLights),W.isArrayCamera){const G=W.cameras;for(let J=0,Ie=G.length;J<Ie;J++){const Ue=G[J];ut(u,C,Ue,Ue.viewport)}}else ut(u,C,W);_!==null&&(K.updateMultisampleRenderTarget(_),K.updateRenderTargetMipmap(_)),C.isScene===!0&&C.onAfterRender(p,C,W),H.resetDefaultState(),y=-1,w=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function fi(C,W,Z,G){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||k.intersectsSprite(C)){G&&te.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ee);const Ue=Ee.update(C),He=C.material;He.visible&&u.push(C,Ue,He,Z,te.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==ke.render.frame&&(C.skeleton.update(),C.skeleton.frame=ke.render.frame),!C.frustumCulled||k.intersectsObject(C))){G&&te.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ee);const Ue=Ee.update(C),He=C.material;if(Array.isArray(He)){const Ve=Ue.groups;for(let nt=0,Ze=Ve.length;nt<Ze;nt++){const Ke=Ve[nt],dt=He[Ke.materialIndex];dt&&dt.visible&&u.push(C,Ue,dt,Z,te.z,Ke)}}else He.visible&&u.push(C,Ue,He,Z,te.z,null)}}const Ie=C.children;for(let Ue=0,He=Ie.length;Ue<He;Ue++)fi(Ie[Ue],W,Z,G)}function ut(C,W,Z,G){const J=C.opaque,Ie=C.transmissive,Ue=C.transparent;d.setupLightsView(Z),Ie.length>0&&Wn(J,W,Z),G&&de.viewport(M.copy(G)),J.length>0&&rn(J,W,Z),Ie.length>0&&rn(Ie,W,Z),Ue.length>0&&rn(Ue,W,Z),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Wn(C,W,Z){const G=Ce.isWebGL2;N===null&&(N=new Rt(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?yn:Oi,minFilter:li,samples:G&&s===!0?4:0})),p.getDrawingBufferSize(j),G?N.setSize(j.x,j.y):N.setSize(Oa(j.x),Oa(j.y));const J=p.getRenderTarget();p.setRenderTarget(N),p.clear();const Ie=p.toneMapping;p.toneMapping=bn,rn(C,W,Z),p.toneMapping=Ie,K.updateMultisampleRenderTarget(N),K.updateRenderTargetMipmap(N),p.setRenderTarget(J)}function rn(C,W,Z){const G=W.isScene===!0?W.overrideMaterial:null;for(let J=0,Ie=C.length;J<Ie;J++){const Ue=C[J],He=Ue.object,Ve=Ue.geometry,nt=G===null?Ue.material:G,Ze=Ue.group;He.layers.test(Z.layers)&&Xp(He,W,Z,Ve,nt,Ze)}}function Xp(C,W,Z,G,J,Ie){C.onBeforeRender(p,W,Z,G,J,Ie),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(p,W,Z,G,C,Ie),J.transparent===!0&&J.side===Lt?(J.side=tn,J.needsUpdate=!0,p.renderBufferDirect(Z,W,G,J,C,Ie),J.side=Un,J.needsUpdate=!0,p.renderBufferDirect(Z,W,G,J,C,Ie),J.side=Lt):p.renderBufferDirect(Z,W,G,J,C,Ie),C.onAfterRender(p,W,Z,G,J,Ie)}function Io(C,W,Z){W.isScene!==!0&&(W=ae);const G=Q.get(C),J=d.state.lights,Ie=d.state.shadowsArray,Ue=J.state.version,He=Ae.getParameters(C,J.state,Ie,W,Z),Ve=Ae.getProgramCacheKey(He);let nt=G.programs;G.environment=C.isMeshStandardMaterial?W.environment:null,G.fog=W.fog,G.envMap=(C.isMeshStandardMaterial?ye:re).get(C.envMap||G.environment),nt===void 0&&(C.addEventListener("dispose",B),nt=new Map,G.programs=nt);let Ze=nt.get(Ve);if(Ze!==void 0){if(G.currentProgram===Ze&&G.lightsStateVersion===Ue)return Gh(C,He),Ze}else He.uniforms=Ae.getUniforms(C),C.onBuild(Z,He,p),C.onBeforeCompile(He,p),Ze=Ae.acquireProgram(He,Ve),nt.set(Ve,Ze),G.uniforms=He.uniforms;const Ke=G.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ke.clippingPlanes=A.uniform),Gh(C,He),G.needsLights=Yp(C),G.lightsStateVersion=Ue,G.needsLights&&(Ke.ambientLightColor.value=J.state.ambient,Ke.lightProbe.value=J.state.probe,Ke.directionalLights.value=J.state.directional,Ke.directionalLightShadows.value=J.state.directionalShadow,Ke.spotLights.value=J.state.spot,Ke.spotLightShadows.value=J.state.spotShadow,Ke.rectAreaLights.value=J.state.rectArea,Ke.ltc_1.value=J.state.rectAreaLTC1,Ke.ltc_2.value=J.state.rectAreaLTC2,Ke.pointLights.value=J.state.point,Ke.pointLightShadows.value=J.state.pointShadow,Ke.hemisphereLights.value=J.state.hemi,Ke.directionalShadowMap.value=J.state.directionalShadowMap,Ke.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ke.spotShadowMap.value=J.state.spotShadowMap,Ke.spotLightMatrix.value=J.state.spotLightMatrix,Ke.spotLightMap.value=J.state.spotLightMap,Ke.pointShadowMap.value=J.state.pointShadowMap,Ke.pointShadowMatrix.value=J.state.pointShadowMatrix);const dt=Ze.getUniforms(),Wi=Pa.seqWithValue(dt.seq,Ke);return G.currentProgram=Ze,G.uniformsList=Wi,Ze}function Gh(C,W){const Z=Q.get(C);Z.outputEncoding=W.outputEncoding,Z.instancing=W.instancing,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function qp(C,W,Z,G,J){W.isScene!==!0&&(W=ae),K.resetTextureUnits();const Ie=W.fog,Ue=G.isMeshStandardMaterial?W.environment:null,He=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:zn,Ve=(G.isMeshStandardMaterial?ye:re).get(G.envMap||Ue),nt=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ze=!!G.normalMap&&!!Z.attributes.tangent,Ke=!!Z.morphAttributes.position,dt=!!Z.morphAttributes.normal,Wi=!!Z.morphAttributes.color,As=G.toneMapped?p.toneMapping:bn,Es=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Cn=Es!==void 0?Es.length:0,tt=Q.get(G),Cs=d.state.lights;if(F===!0&&(I===!0||C!==w)){const Zt=C===w&&G.id===y;A.setState(G,C,Zt)}let bt=!1;G.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Cs.state.version||tt.outputEncoding!==He||J.isInstancedMesh&&tt.instancing===!1||!J.isInstancedMesh&&tt.instancing===!0||J.isSkinnedMesh&&tt.skinning===!1||!J.isSkinnedMesh&&tt.skinning===!0||tt.envMap!==Ve||G.fog===!0&&tt.fog!==Ie||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==A.numPlanes||tt.numIntersection!==A.numIntersection)||tt.vertexAlphas!==nt||tt.vertexTangents!==Ze||tt.morphTargets!==Ke||tt.morphNormals!==dt||tt.morphColors!==Wi||tt.toneMapping!==As||Ce.isWebGL2===!0&&tt.morphTargetsCount!==Cn)&&(bt=!0):(bt=!0,tt.__version=G.version);let on=tt.currentProgram;bt===!0&&(on=Io(G,W,J));let pi=!1,br=!1,dl=!1;const Vt=on.getUniforms(),Xi=tt.uniforms;if(de.useProgram(on.program)&&(pi=!0,br=!0,dl=!0),G.id!==y&&(y=G.id,br=!0),pi||w!==C){if(Vt.setValue(X,"projectionMatrix",C.projectionMatrix),Ce.logarithmicDepthBuffer&&Vt.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),w!==C&&(w=C,br=!0,dl=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Zt=Vt.map.cameraPosition;Zt!==void 0&&Zt.setValue(X,te.setFromMatrixPosition(C.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Vt.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||J.isSkinnedMesh)&&Vt.setValue(X,"viewMatrix",C.matrixWorldInverse)}if(J.isSkinnedMesh){Vt.setOptional(X,J,"bindMatrix"),Vt.setOptional(X,J,"bindMatrixInverse");const Zt=J.skeleton;Zt&&(Ce.floatVertexTextures?(Zt.boneTexture===null&&Zt.computeBoneTexture(),Vt.setValue(X,"boneTexture",Zt.boneTexture,K),Vt.setValue(X,"boneTextureSize",Zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fl=Z.morphAttributes;if((fl.position!==void 0||fl.normal!==void 0||fl.color!==void 0&&Ce.isWebGL2===!0)&&le.update(J,Z,G,on),(br||tt.receiveShadow!==J.receiveShadow)&&(tt.receiveShadow=J.receiveShadow,Vt.setValue(X,"receiveShadow",J.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Xi.envMap.value=Ve,Xi.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),br&&(Vt.setValue(X,"toneMappingExposure",p.toneMappingExposure),tt.needsLights&&$p(Xi,dl),Ie&&G.fog===!0&&$e.refreshFogUniforms(Xi,Ie),$e.refreshMaterialUniforms(Xi,G,D,R,N),Pa.upload(X,tt.uniformsList,Xi,K)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Pa.upload(X,tt.uniformsList,Xi,K),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Vt.setValue(X,"center",J.center),Vt.setValue(X,"modelViewMatrix",J.modelViewMatrix),Vt.setValue(X,"normalMatrix",J.normalMatrix),Vt.setValue(X,"modelMatrix",J.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Zt=G.uniformsGroups;for(let pl=0,jp=Zt.length;pl<jp;pl++)if(Ce.isWebGL2){const Wh=Zt[pl];ve.update(Wh,on),ve.bind(Wh,on)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return on}function $p(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Yp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(C,W,Z){Q.get(C.texture).__webglTexture=W,Q.get(C.depthTexture).__webglTexture=Z;const G=Q.get(C);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=Z===void 0,G.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,W){const Z=Q.get(C);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,Z=0){_=C,v=W,x=Z;let G=!0;if(C){const Ve=Q.get(C);Ve.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),G=!1):Ve.__webglFramebuffer===void 0?K.setupRenderTarget(C):Ve.__hasExternalTextures&&K.rebindTextures(C,Q.get(C.texture).__webglTexture,Q.get(C.depthTexture).__webglTexture)}let J=null,Ie=!1,Ue=!1;if(C){const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture)&&(Ue=!0);const nt=Q.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(J=nt[W],Ie=!0):Ce.isWebGL2&&C.samples>0&&K.useMultisampledRTT(C)===!1?J=Q.get(C).__webglMultisampledFramebuffer:J=nt,M.copy(C.viewport),E.copy(C.scissor),b=C.scissorTest}else M.copy(O).multiplyScalar(D).floor(),E.copy(z).multiplyScalar(D).floor(),b=Y;if(de.bindFramebuffer(36160,J)&&Ce.drawBuffers&&G&&de.drawBuffers(C,J),de.viewport(M),de.scissor(E),de.setScissorTest(b),Ie){const Ve=Q.get(C.texture);X.framebufferTexture2D(36160,36064,34069+W,Ve.__webglTexture,Z)}else if(Ue){const Ve=Q.get(C.texture),nt=W||0;X.framebufferTextureLayer(36160,36064,Ve.__webglTexture,Z||0,nt)}y=-1},this.readRenderTargetPixels=function(C,W,Z,G,J,Ie,Ue){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(He=He[Ue]),He){de.bindFramebuffer(36160,He);try{const Ve=C.texture,nt=Ve.format,Ze=Ve.type;if(nt!==Xt&&P.convert(nt)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=Ze===yn&&(be.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&be.has("EXT_color_buffer_float"));if(Ze!==Oi&&P.convert(Ze)!==X.getParameter(35738)&&!(Ze===dn&&(Ce.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-G&&Z>=0&&Z<=C.height-J&&X.readPixels(W,Z,G,J,P.convert(nt),P.convert(Ze),Ie)}finally{const Ve=_!==null?Q.get(_).__webglFramebuffer:null;de.bindFramebuffer(36160,Ve)}}},this.copyFramebufferToTexture=function(C,W,Z=0){const G=Math.pow(2,-Z),J=Math.floor(W.image.width*G),Ie=Math.floor(W.image.height*G);K.setTexture2D(W,0),X.copyTexSubImage2D(3553,Z,0,0,C.x,C.y,J,Ie),de.unbindTexture()},this.copyTextureToTexture=function(C,W,Z,G=0){const J=W.image.width,Ie=W.image.height,Ue=P.convert(Z.format),He=P.convert(Z.type);K.setTexture2D(Z,0),X.pixelStorei(37440,Z.flipY),X.pixelStorei(37441,Z.premultiplyAlpha),X.pixelStorei(3317,Z.unpackAlignment),W.isDataTexture?X.texSubImage2D(3553,G,C.x,C.y,J,Ie,Ue,He,W.image.data):W.isCompressedTexture?X.compressedTexSubImage2D(3553,G,C.x,C.y,W.mipmaps[0].width,W.mipmaps[0].height,Ue,W.mipmaps[0].data):X.texSubImage2D(3553,G,C.x,C.y,Ue,He,W.image),G===0&&Z.generateMipmaps&&X.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(C,W,Z,G,J=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=C.max.x-C.min.x+1,Ue=C.max.y-C.min.y+1,He=C.max.z-C.min.z+1,Ve=P.convert(G.format),nt=P.convert(G.type);let Ze;if(G.isData3DTexture)K.setTexture3D(G,0),Ze=32879;else if(G.isDataArrayTexture)K.setTexture2DArray(G,0),Ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,G.flipY),X.pixelStorei(37441,G.premultiplyAlpha),X.pixelStorei(3317,G.unpackAlignment);const Ke=X.getParameter(3314),dt=X.getParameter(32878),Wi=X.getParameter(3316),As=X.getParameter(3315),Es=X.getParameter(32877),Cn=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;X.pixelStorei(3314,Cn.width),X.pixelStorei(32878,Cn.height),X.pixelStorei(3316,C.min.x),X.pixelStorei(3315,C.min.y),X.pixelStorei(32877,C.min.z),Z.isDataTexture||Z.isData3DTexture?X.texSubImage3D(Ze,J,W.x,W.y,W.z,Ie,Ue,He,Ve,nt,Cn.data):Z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Ze,J,W.x,W.y,W.z,Ie,Ue,He,Ve,Cn.data)):X.texSubImage3D(Ze,J,W.x,W.y,W.z,Ie,Ue,He,Ve,nt,Cn),X.pixelStorei(3314,Ke),X.pixelStorei(32878,dt),X.pixelStorei(3316,Wi),X.pixelStorei(3315,As),X.pixelStorei(32877,Es),J===0&&G.generateMipmaps&&X.generateMipmap(Ze),de.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?K.setTextureCube(C,0):C.isData3DTexture?K.setTexture3D(C,0):C.isDataArrayTexture?K.setTexture2DArray(C,0):K.setTexture2D(C,0),de.unbindTexture()},this.resetState=function(){v=0,x=0,_=null,de.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Jf extends go{}Jf.prototype.isWebGL1Renderer=!0;class Qa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new oe(e),this.density=t}clone(){return new Qa(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class el{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new oe(e),this.near=t,this.far=n}clone(){return new el(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class vo extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class pr{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new S;class kn{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Qe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new kn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class fh extends lt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Gs;const Tr=new S,Ws=new S,Xs=new S,qs=new $,Ar=new $,Qf=new Re,Qo=new S,Er=new S,ea=new S,Tu=new $,kl=new $,Au=new $;class ep extends ze{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new De;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pr(t,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new kn(n,3,0,!1)),Gs.setAttribute("uv",new kn(n,2,3,!1))}this.geometry=Gs,this.material=e!==void 0?e:new fh,this.center=new $(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),Qf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Xs.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;ta(Qo.set(-.5,-.5,0),Xs,r,Ws,i,s),ta(Er.set(.5,-.5,0),Xs,r,Ws,i,s),ta(ea.set(.5,.5,0),Xs,r,Ws,i,s),Tu.set(0,0),kl.set(1,0),Au.set(1,1);let a=e.ray.intersectTriangle(Qo,Er,ea,!1,Tr);if(a===null&&(ta(Er.set(-.5,.5,0),Xs,r,Ws,i,s),kl.set(0,1),a=e.ray.intersectTriangle(Qo,ea,Er,!1,Tr),a===null))return;const l=e.ray.origin.distanceTo(Tr);l<e.near||l>e.far||t.push({distance:l,point:Tr.clone(),uv:un.getUV(Tr,Qo,Er,ea,Tu,kl,Au,new $),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ta(o,e,t,n,i,s){qs.subVectors(o,t).addScalar(.5).multiply(n),i!==void 0?(Ar.x=s*qs.x-i*qs.y,Ar.y=i*qs.x+s*qs.y):Ar.copy(qs),o.copy(e),o.x+=Ar.x,o.y+=Ar.y,o.applyMatrix4(Qf)}const na=new S,Eu=new S;class tp extends ze{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0){t=Math.abs(t);const n=this.levels;let i;for(i=0;i<n.length&&!(t<n[i].distance);i++);return n.splice(i,0,{distance:t,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){na.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(na);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){na.setFromMatrixPosition(e.matrixWorld),Eu.setFromMatrixPosition(this.matrixWorld);const n=na.distanceTo(Eu)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s&&n>=t[i].distance;i++)t[i-1].object.visible=!1,t[i].object.visible=!0;for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const r=n[i];t.object.levels.push({object:r.object.uuid,distance:r.distance})}return t}}const Cu=new S,Lu=new Je,Ru=new Je,q_=new S,Pu=new Re;class ph extends st{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Re,this.bindMatrixInverse=new Re}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Lu.fromBufferAttribute(i.attributes.skinIndex,e),Ru.fromBufferAttribute(i.attributes.skinWeight,e),Cu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Ru.getComponent(s);if(r!==0){const a=Lu.getComponent(s);Pu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(q_.copy(Cu).applyMatrix4(Pu),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class tl extends ze{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Js extends mt{constructor(e=null,t=1,n=1,i,s,r,a,l,c=xt,h=xt,u,d){super(null,r,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Iu=new Re,$_=new Re;class xo{constructor(e=[],t=[]){this.uuid=nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:$_;Iu.multiplyMatrices(a,t[s]),Iu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new xo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Uf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Js(t,e,e,Xt,dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new tl),this.bones.push(r),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class fn extends Qe{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Du=new Re,Nu=new Re,ia=[],Cr=new st;class Ei extends st{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fn(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Cr.geometry=this.geometry,Cr.material=this.material,Cr.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Du),Nu.multiplyMatrices(n,Du),Cr.matrixWorld=Nu,Cr.raycast(e,ia);for(let r=0,a=ia.length;r<a;r++){const l=ia[r];l.instanceId=s,l.object=this,t.push(l)}ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fn(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class kt extends lt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ou=new S,Fu=new S,Bu=new Re,Vl=new fo,sa=new ki;class ai extends ze{constructor(e=new De,t=new kt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ou.fromBufferAttribute(t,i-1),Fu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ou.distanceTo(Fu);e.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(i),sa.radius+=s,e.ray.intersectsSphere(sa)===!1)return;Bu.copy(i).invert(),Vl.copy(e.ray).applyMatrix4(Bu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new S,h=new S,u=new S,d=new S,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const v=Math.max(0,r.start),x=Math.min(g.count,r.start+r.count);for(let _=v,y=x-1;_<y;_+=f){const w=g.getX(_),M=g.getX(_+1);if(c.fromBufferAttribute(m,w),h.fromBufferAttribute(m,M),Vl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,r.start),x=Math.min(m.count,r.start+r.count);for(let _=v,y=x-1;_<y;_+=f){if(c.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),Vl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Uu=new S,zu=new S;class Tn extends ai{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Uu.fromBufferAttribute(t,i),zu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uu.distanceTo(zu);e.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mh extends ai{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class nl extends lt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ku=new Re,Vc=new fo,ra=new ki,oa=new S;class gh extends ze{constructor(e=new De,t=new nl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(i),ra.radius+=s,e.ray.intersectsSphere(ra)===!1)return;ku.copy(i).invert(),Vc.copy(e.ray).applyMatrix4(ku);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,p=f;g<p;g++){const m=c.getX(g);oa.fromBufferAttribute(u,m),Vu(oa,m,l,i,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let g=d,p=f;g<p;g++)oa.fromBufferAttribute(u,g),Vu(oa,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Vu(o,e,t,n,i,s,r){const a=Vc.distanceSqToPoint(o);if(a<t){const l=new S;Vc.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:r})}}class np extends mt{constructor(e,t,n,i,s,r,a,l,c){super(e,t,n,i,s,r,a,l,c),this.isVideoTexture=!0,this.minFilter=r!==void 0?r:it,this.magFilter=s!==void 0?s:it,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Hc extends mt{constructor(e,t,n){super({width:e,height:t}),this.isFramebufferTexture=!0,this.format=n,this.magFilter=xt,this.minFilter=xt,this.generateMipmaps=!1,this.needsUpdate=!0}}class ip extends mt{constructor(e,t,n,i,s,r,a,l,c,h,u,d){super(null,r,a,l,c,h,i,s,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Y_ extends mt{constructor(e,t,n,i,s,r,a,l,c){super(e,t,n,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(r-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),l=t||(r.isVector2?new $:new S);return l.copy(a).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new S,i=[],s=[],r=[],a=new S,l=new Re;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new S)}s[0]=new S,r[0]=new S;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(_t(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}r[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(_t(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class il extends An{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new $,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class sp extends il{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function vh(){let o=0,e=0,t=0,n=0;function i(s,r,a,l){o=s,e=a,t=-3*s+3*r-2*a-l,n=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,c){i(r,a,c*(a-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,c,h,u){let d=(r-s)/c-(a-s)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+u)+(l-a)/u;d*=h,f*=h,i(r,a,d,f)},calc:function(s){const r=s*s,a=r*s;return o+e*s+t*r+n*a}}}const aa=new S,Hl=new vh,Gl=new vh,Wl=new vh;class rp extends An{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){const n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(aa.subVectors(i[0],i[1]).add(i[0]),c=aa);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(aa.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=aa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);p<1e-4&&(p=1),g<1e-4&&(g=p),m<1e-4&&(m=p),Hl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,p,m),Gl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,p,m),Wl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,p,m)}else this.curveType==="catmullrom"&&(Hl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Gl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Wl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Hl.calc(l),Gl.calc(l),Wl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Hu(o,e,t,n,i){const s=(n-e)*.5,r=(i-t)*.5,a=o*o,l=o*a;return(2*t-2*n+s+r)*l+(-3*t+3*n-2*s-r)*a+s*o+t}function j_(o,e){const t=1-o;return t*t*e}function Z_(o,e){return 2*(1-o)*o*e}function K_(o,e){return o*o*e}function Gr(o,e,t,n){return j_(o,e)+Z_(o,t)+K_(o,n)}function J_(o,e){const t=1-o;return t*t*t*e}function Q_(o,e){const t=1-o;return 3*t*t*o*e}function ey(o,e){return 3*(1-o)*o*o*e}function ty(o,e){return o*o*o*e}function Wr(o,e,t,n,i){return J_(o,e)+Q_(o,t)+ey(o,n)+ty(o,i)}class xh extends An{constructor(e=new $,t=new $,n=new $,i=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new $){const n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Wr(e,i.x,s.x,r.x,a.x),Wr(e,i.y,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class op extends An{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){const n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Wr(e,i.x,s.x,r.x,a.x),Wr(e,i.y,s.y,r.y,a.y),Wr(e,i.z,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sl extends An{constructor(e=new $,t=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new $;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ap extends An{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _h extends An{constructor(e=new $,t=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Gr(e,i.x,s.x,r.x),Gr(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yh extends An{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Gr(e,i.x,s.x,r.x),Gr(e,i.y,s.y,r.y),Gr(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bh extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $){const n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),a=s-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(Hu(a,l.x,c.x,h.x,u.x),Hu(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new $().fromArray(i))}return this}}var wh=Object.freeze({__proto__:null,ArcCurve:sp,CatmullRomCurve3:rp,CubicBezierCurve:xh,CubicBezierCurve3:op,EllipseCurve:il,LineCurve:sl,LineCurve3:ap,QuadraticBezierCurve:_h,QuadraticBezierCurve3:yh,SplineCurve:bh});class lp extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new sl(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],a=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new wh[i.type]().fromJSON(i))}return this}}class to extends lp{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new sl(this.currentPoint.clone(),new $(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new _h(this.currentPoint.clone(),new $(e,t),new $(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,r){const a=new xh(this.currentPoint.clone(),new $(e,t),new $(n,i),new $(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new bh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,r),this}absarc(e,t,n,i,s,r){return this.absellipse(e,t,n,n,i,s,r),this}ellipse(e,t,n,i,s,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,r,a,l),this}absellipse(e,t,n,i,s,r,a,l){const c=new il(e,t,n,i,s,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class mr extends De{constructor(e=[new $(0,-.5),new $(.5,0),new $(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=_t(i,0,Math.PI*2);const s=[],r=[],a=[],l=[],c=[],h=1/t,u=new S,d=new $,f=new S,g=new S,p=new S;let m=0,v=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,v=e[x+1].y-e[x].y,f.x=v*1,f.y=-m,f.z=v*0,p.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(p.x,p.y,p.z);break;default:m=e[x+1].x-e[x].x,v=e[x+1].y-e[x].y,f.x=v*1,f.y=-m,f.z=v*0,g.copy(f),f.x+=p.x,f.y+=p.y,f.z+=p.z,f.normalize(),l.push(f.x,f.y,f.z),p.copy(g)}for(let x=0;x<=t;x++){const _=n+x*h*i,y=Math.sin(_),w=Math.cos(_);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*y,u.y=e[M].y,u.z=e[M].x*w,r.push(u.x,u.y,u.z),d.x=x/t,d.y=M/(e.length-1),a.push(d.x,d.y);const E=l[3*M+0]*y,b=l[3*M+1],T=l[3*M+0]*w;c.push(E,b,T)}}for(let x=0;x<t;x++)for(let _=0;_<e.length-1;_++){const y=_+x*e.length,w=y,M=y+e.length,E=y+e.length+1,b=y+1;s.push(w,M,b),s.push(E,b,M)}this.setIndex(s),this.setAttribute("position",new we(r,3)),this.setAttribute("uv",new we(a,2)),this.setAttribute("normal",new we(c,3))}static fromJSON(e){return new mr(e.points,e.segments,e.phiStart,e.phiLength)}}class _o extends mr{constructor(e=1,t=1,n=4,i=8){const s=new to;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new _o(e.radius,e.length,e.capSegments,e.radialSegments)}}class gr extends De{constructor(e=1,t=8,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],r=[],a=[],l=[],c=new S,h=new $;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/e+1)/2,h.y=(r[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new we(r,3)),this.setAttribute("normal",new we(a,3)),this.setAttribute("uv",new we(l,2))}static fromJSON(e){return new gr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Hi extends De{constructor(e=1,t=1,n=1,i=8,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const p=[],m=n/2;let v=0;x(),r===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(f,2));function x(){const y=new S,w=new S;let M=0;const E=(t-e)/n;for(let b=0;b<=s;b++){const T=[],R=b/s,D=R*(t-e)+e;for(let V=0;V<=i;V++){const U=V/i,O=U*l+a,z=Math.sin(O),Y=Math.cos(O);w.x=D*z,w.y=-R*n+m,w.z=D*Y,u.push(w.x,w.y,w.z),y.set(z,E,Y).normalize(),d.push(y.x,y.y,y.z),f.push(U,1-R),T.push(g++)}p.push(T)}for(let b=0;b<i;b++)for(let T=0;T<s;T++){const R=p[T][b],D=p[T+1][b],V=p[T+1][b+1],U=p[T][b+1];h.push(R,D,U),h.push(D,V,U),M+=6}c.addGroup(v,M,0),v+=M}function _(y){const w=g,M=new $,E=new S;let b=0;const T=y===!0?e:t,R=y===!0?1:-1;for(let V=1;V<=i;V++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),g++;const D=g;for(let V=0;V<=i;V++){const O=V/i*l+a,z=Math.cos(O),Y=Math.sin(O);E.x=T*Y,E.y=m*R,E.z=T*z,u.push(E.x,E.y,E.z),d.push(0,R,0),M.x=z*.5+.5,M.y=Y*.5*R+.5,f.push(M.x,M.y),g++}for(let V=0;V<i;V++){const U=w+V,O=D+V;y===!0?h.push(O,O+1,U):h.push(O+1,O,U),b+=3}c.addGroup(v,b,y===!0?1:2),v+=b}}static fromJSON(e){return new Hi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yo extends Hi{constructor(e=1,t=1,n=8,i=1,s=!1,r=0,a=Math.PI*2){super(0,e,t,n,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(e){return new yo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ui extends De{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],r=[];a(i),c(n),h(),this.setAttribute("position",new we(s,3)),this.setAttribute("normal",new we(s.slice(),3)),this.setAttribute("uv",new we(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const _=new S,y=new S,w=new S;for(let M=0;M<t.length;M+=3)f(t[M+0],_),f(t[M+1],y),f(t[M+2],w),l(_,y,w,x)}function l(x,_,y,w){const M=w+1,E=[];for(let b=0;b<=M;b++){E[b]=[];const T=x.clone().lerp(y,b/M),R=_.clone().lerp(y,b/M),D=M-b;for(let V=0;V<=D;V++)V===0&&b===M?E[b][V]=T:E[b][V]=T.clone().lerp(R,V/D)}for(let b=0;b<M;b++)for(let T=0;T<2*(M-b)-1;T++){const R=Math.floor(T/2);T%2===0?(d(E[b][R+1]),d(E[b+1][R]),d(E[b][R])):(d(E[b][R+1]),d(E[b+1][R+1]),d(E[b+1][R]))}}function c(x){const _=new S;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(x),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function h(){const x=new S;for(let _=0;_<s.length;_+=3){x.x=s[_+0],x.y=s[_+1],x.z=s[_+2];const y=m(x)/2/Math.PI+.5,w=v(x)/Math.PI+.5;r.push(y,1-w)}g(),u()}function u(){for(let x=0;x<r.length;x+=6){const _=r[x+0],y=r[x+2],w=r[x+4],M=Math.max(_,y,w),E=Math.min(_,y,w);M>.9&&E<.1&&(_<.2&&(r[x+0]+=1),y<.2&&(r[x+2]+=1),w<.2&&(r[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,_){const y=x*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){const x=new S,_=new S,y=new S,w=new S,M=new $,E=new $,b=new $;for(let T=0,R=0;T<s.length;T+=9,R+=6){x.set(s[T+0],s[T+1],s[T+2]),_.set(s[T+3],s[T+4],s[T+5]),y.set(s[T+6],s[T+7],s[T+8]),M.set(r[R+0],r[R+1]),E.set(r[R+2],r[R+3]),b.set(r[R+4],r[R+5]),w.copy(x).add(_).add(y).divideScalar(3);const D=m(w);p(M,R+0,x,D),p(E,R+2,_,D),p(b,R+4,y,D)}}function p(x,_,y,w){w<0&&x.x===1&&(r[_]=x.x-1),y.x===0&&y.z===0&&(r[_]=w/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function v(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}static fromJSON(e){return new ui(e.vertices,e.indices,e.radius,e.details)}}class bo extends ui{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bo(e.radius,e.detail)}}const la=new S,ca=new S,Xl=new S,ha=new un;class cp extends De{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(ps*t),r=e.getIndex(),a=e.getAttribute("position"),l=r?r.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){r?(c[0]=r.getX(g),c[1]=r.getX(g+1),c[2]=r.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:p,b:m,c:v}=ha;if(p.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),v.fromBufferAttribute(a,c[2]),ha.getNormal(Xl),u[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const _=(x+1)%3,y=u[x],w=u[_],M=ha[h[x]],E=ha[h[_]],b=`${y}_${w}`,T=`${w}_${y}`;T in d&&d[T]?(Xl.dot(d[T].normal)<=s&&(f.push(M.x,M.y,M.z),f.push(E.x,E.y,E.z)),d[T]=null):b in d||(d[b]={index0:c[x],index1:c[_],normal:Xl.clone()})}}for(const g in d)if(d[g]){const{index0:p,index1:m}=d[g];la.fromBufferAttribute(a,p),ca.fromBufferAttribute(a,m),f.push(la.x,la.y,la.z),f.push(ca.x,ca.y,ca.z)}this.setAttribute("position",new we(f,3))}}}class gs extends to{constructor(e){super(e),this.uuid=nn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new to().fromJSON(i))}return this}}const ny={triangulate:function(o,e,t=2){const n=e&&e.length,i=n?e[0]*t:o.length;let s=hp(o,0,i,t,!0);const r=[];if(!s||s.next===s.prev)return r;let a,l,c,h,u,d,f;if(n&&(s=ay(o,e,s,t)),o.length>80*t){a=c=o[0],l=h=o[1];for(let g=t;g<i;g+=t)u=o[g],d=o[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?1/f:0}return no(s,r,t,a,l,f),r}};function hp(o,e,t,n,i){let s,r;if(i===xy(o,e,t,n)>0)for(s=e;s<t;s+=n)r=Gu(s,o[s],o[s+1],r);else for(s=t-n;s>=e;s-=n)r=Gu(s,o[s],o[s+1],r);return r&&rl(r,r.next)&&(so(r),r=r.next),r}function Fi(o,e){if(!o)return o;e||(e=o);let t=o,n;do if(n=!1,!t.steiner&&(rl(t,t.next)||ct(t.prev,t,t.next)===0)){if(so(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function no(o,e,t,n,i,s,r){if(!o)return;!r&&s&&dy(o,n,i,s);let a=o,l,c;for(;o.prev!==o.next;){if(l=o.prev,c=o.next,s?sy(o,n,i,s):iy(o)){e.push(l.i/t),e.push(o.i/t),e.push(c.i/t),so(o),o=c.next,a=c.next;continue}if(o=c,o===a){r?r===1?(o=ry(Fi(o),e,t),no(o,e,t,n,i,s,2)):r===2&&oy(o,e,t,n,i,s):no(Fi(o),e,t,n,i,s,1);break}}}function iy(o){const e=o.prev,t=o,n=o.next;if(ct(e,t,n)>=0)return!1;let i=o.next.next;for(;i!==o.prev;){if(Ks(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&ct(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function sy(o,e,t,n){const i=o.prev,s=o,r=o.next;if(ct(i,s,r)>=0)return!1;const a=i.x<s.x?i.x<r.x?i.x:r.x:s.x<r.x?s.x:r.x,l=i.y<s.y?i.y<r.y?i.y:r.y:s.y<r.y?s.y:r.y,c=i.x>s.x?i.x>r.x?i.x:r.x:s.x>r.x?s.x:r.x,h=i.y>s.y?i.y>r.y?i.y:r.y:s.y>r.y?s.y:r.y,u=Gc(a,l,e,t,n),d=Gc(c,h,e,t,n);let f=o.prevZ,g=o.nextZ;for(;f&&f.z>=u&&g&&g.z<=d;){if(f!==o.prev&&f!==o.next&&Ks(i.x,i.y,s.x,s.y,r.x,r.y,f.x,f.y)&&ct(f.prev,f,f.next)>=0||(f=f.prevZ,g!==o.prev&&g!==o.next&&Ks(i.x,i.y,s.x,s.y,r.x,r.y,g.x,g.y)&&ct(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;f&&f.z>=u;){if(f!==o.prev&&f!==o.next&&Ks(i.x,i.y,s.x,s.y,r.x,r.y,f.x,f.y)&&ct(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;g&&g.z<=d;){if(g!==o.prev&&g!==o.next&&Ks(i.x,i.y,s.x,s.y,r.x,r.y,g.x,g.y)&&ct(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function ry(o,e,t){let n=o;do{const i=n.prev,s=n.next.next;!rl(i,s)&&up(i,n,n.next,s)&&io(i,s)&&io(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),so(n),so(n.next),n=o=s),n=n.next}while(n!==o);return Fi(n)}function oy(o,e,t,n,i,s){let r=o;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&my(r,a)){let l=dp(r,a);r=Fi(r,r.next),l=Fi(l,l.next),no(r,e,t,n,i,s),no(l,e,t,n,i,s);return}a=a.next}r=r.next}while(r!==o)}function ay(o,e,t,n){const i=[];let s,r,a,l,c;for(s=0,r=e.length;s<r;s++)a=e[s]*n,l=s<r-1?e[s+1]*n:o.length,c=hp(o,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(py(c));for(i.sort(ly),s=0;s<i.length;s++)cy(i[s],t),t=Fi(t,t.next);return t}function ly(o,e){return o.x-e.x}function cy(o,e){if(e=hy(o,e),e){const t=dp(e,o);Fi(e,e.next),Fi(t,t.next)}}function hy(o,e){let t=e;const n=o.x,i=o.y;let s=-1/0,r;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s){if(s=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}r=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!r)return null;if(n===s)return r;const a=r,l=r.x,c=r.y;let h=1/0,u;t=r;do n>=t.x&&t.x>=l&&n!==t.x&&Ks(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),io(t,o)&&(u<h||u===h&&(t.x>r.x||t.x===r.x&&uy(r,t)))&&(r=t,h=u)),t=t.next;while(t!==a);return r}function uy(o,e){return ct(o.prev,o,e.prev)<0&&ct(e.next,o,o.next)<0}function dy(o,e,t,n){let i=o;do i.z===null&&(i.z=Gc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,fy(i)}function fy(o){let e,t,n,i,s,r,a,l,c=1;do{for(t=o,o=null,s=null,r=0;t;){for(r++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:o=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(r>1);return o}function Gc(o,e,t,n,i){return o=32767*(o-t)*i,e=32767*(e-n)*i,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function py(o){let e=o,t=o;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==o);return t}function Ks(o,e,t,n,i,s,r,a){return(i-r)*(e-a)-(o-r)*(s-a)>=0&&(o-r)*(n-a)-(t-r)*(e-a)>=0&&(t-r)*(s-a)-(i-r)*(n-a)>=0}function my(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!gy(o,e)&&(io(o,e)&&io(e,o)&&vy(o,e)&&(ct(o.prev,o,e.prev)||ct(o,e.prev,e))||rl(o,e)&&ct(o.prev,o,o.next)>0&&ct(e.prev,e,e.next)>0)}function ct(o,e,t){return(e.y-o.y)*(t.x-e.x)-(e.x-o.x)*(t.y-e.y)}function rl(o,e){return o.x===e.x&&o.y===e.y}function up(o,e,t,n){const i=da(ct(o,e,t)),s=da(ct(o,e,n)),r=da(ct(t,n,o)),a=da(ct(t,n,e));return!!(i!==s&&r!==a||i===0&&ua(o,t,e)||s===0&&ua(o,n,e)||r===0&&ua(t,o,n)||a===0&&ua(t,e,n))}function ua(o,e,t){return e.x<=Math.max(o.x,t.x)&&e.x>=Math.min(o.x,t.x)&&e.y<=Math.max(o.y,t.y)&&e.y>=Math.min(o.y,t.y)}function da(o){return o>0?1:o<0?-1:0}function gy(o,e){let t=o;do{if(t.i!==o.i&&t.next.i!==o.i&&t.i!==e.i&&t.next.i!==e.i&&up(t,t.next,o,e))return!0;t=t.next}while(t!==o);return!1}function io(o,e){return ct(o.prev,o,o.next)<0?ct(o,e,o.next)>=0&&ct(o,o.prev,e)>=0:ct(o,e,o.prev)<0||ct(o,o.next,e)<0}function vy(o,e){let t=o,n=!1;const i=(o.x+e.x)/2,s=(o.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==o);return n}function dp(o,e){const t=new Wc(o.i,o.x,o.y),n=new Wc(e.i,e.x,e.y),i=o.next,s=e.prev;return o.next=e,e.prev=o,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Gu(o,e,t,n){const i=new Wc(o,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function so(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function Wc(o,e,t){this.i=o,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xy(o,e,t,n){let i=0;for(let s=e,r=t-n;s<t;s+=n)i+=(o[r]-o[s])*(o[s+1]+o[r+1]),r=s;return i}class On{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return On.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Wu(e),Xu(n,e);let r=e.length;t.forEach(Wu);for(let l=0;l<t.length;l++)i.push(r),r+=t[l].length,Xu(n,t[l]);const a=ny.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Wu(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function Xu(o,e){for(let t=0;t<e.length;t++)o.push(e[t].x),o.push(e[t].y)}class wo extends De{constructor(e=new gs([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r(c)}this.setAttribute("position",new we(i,3)),this.setAttribute("uv",new we(s,2)),this.computeVertexNormals();function r(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const v=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:_y;let _,y=!1,w,M,E,b;v&&(_=v.getSpacedPoints(h),y=!0,d=!1,w=v.computeFrenetFrames(h,!1),M=new S,E=new S,b=new S),d||(m=0,f=0,g=0,p=0);const T=a.extractPoints(c);let R=T.shape;const D=T.holes;if(!On.isClockWise(R)){R=R.reverse();for(let Q=0,K=D.length;Q<K;Q++){const re=D[Q];On.isClockWise(re)&&(D[Q]=re.reverse())}}const U=On.triangulateShape(R,D),O=R;for(let Q=0,K=D.length;Q<K;Q++){const re=D[Q];R=R.concat(re)}function z(Q,K,re){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().multiplyScalar(re).add(Q)}const Y=R.length,k=U.length;function F(Q,K,re){let ye,ce,Oe;const Ee=Q.x-K.x,Ae=Q.y-K.y,$e=re.x-Q.x,je=re.y-Q.y,L=Ee*Ee+Ae*Ae,A=Ee*je-Ae*$e;if(Math.abs(A)>Number.EPSILON){const q=Math.sqrt(L),se=Math.sqrt($e*$e+je*je),le=K.x-Ae/q,ge=K.y+Ee/q,Ne=re.x-je/se,P=re.y+$e/se,H=((Ne-le)*je-(P-ge)*$e)/(Ee*je-Ae*$e);ye=le+Ee*H-Q.x,ce=ge+Ae*H-Q.y;const ve=ye*ye+ce*ce;if(ve<=2)return new $(ye,ce);Oe=Math.sqrt(ve/2)}else{let q=!1;Ee>Number.EPSILON?$e>Number.EPSILON&&(q=!0):Ee<-Number.EPSILON?$e<-Number.EPSILON&&(q=!0):Math.sign(Ae)===Math.sign(je)&&(q=!0),q?(ye=-Ae,ce=Ee,Oe=Math.sqrt(L)):(ye=Ee,ce=Ae,Oe=Math.sqrt(L/2))}return new $(ye/Oe,ce/Oe)}const I=[];for(let Q=0,K=O.length,re=K-1,ye=Q+1;Q<K;Q++,re++,ye++)re===K&&(re=0),ye===K&&(ye=0),I[Q]=F(O[Q],O[re],O[ye]);const N=[];let ee,j=I.concat();for(let Q=0,K=D.length;Q<K;Q++){const re=D[Q];ee=[];for(let ye=0,ce=re.length,Oe=ce-1,Ee=ye+1;ye<ce;ye++,Oe++,Ee++)Oe===ce&&(Oe=0),Ee===ce&&(Ee=0),ee[ye]=F(re[ye],re[Oe],re[Ee]);N.push(ee),j=j.concat(ee)}for(let Q=0;Q<m;Q++){const K=Q/m,re=f*Math.cos(K*Math.PI/2),ye=g*Math.sin(K*Math.PI/2)+p;for(let ce=0,Oe=O.length;ce<Oe;ce++){const Ee=z(O[ce],I[ce],ye);Te(Ee.x,Ee.y,-re)}for(let ce=0,Oe=D.length;ce<Oe;ce++){const Ee=D[ce];ee=N[ce];for(let Ae=0,$e=Ee.length;Ae<$e;Ae++){const je=z(Ee[Ae],ee[Ae],ye);Te(je.x,je.y,-re)}}}const te=g+p;for(let Q=0;Q<Y;Q++){const K=d?z(R[Q],j[Q],te):R[Q];y?(E.copy(w.normals[0]).multiplyScalar(K.x),M.copy(w.binormals[0]).multiplyScalar(K.y),b.copy(_[0]).add(E).add(M),Te(b.x,b.y,b.z)):Te(K.x,K.y,0)}for(let Q=1;Q<=h;Q++)for(let K=0;K<Y;K++){const re=d?z(R[K],j[K],te):R[K];y?(E.copy(w.normals[Q]).multiplyScalar(re.x),M.copy(w.binormals[Q]).multiplyScalar(re.y),b.copy(_[Q]).add(E).add(M),Te(b.x,b.y,b.z)):Te(re.x,re.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){const K=Q/m,re=f*Math.cos(K*Math.PI/2),ye=g*Math.sin(K*Math.PI/2)+p;for(let ce=0,Oe=O.length;ce<Oe;ce++){const Ee=z(O[ce],I[ce],ye);Te(Ee.x,Ee.y,u+re)}for(let ce=0,Oe=D.length;ce<Oe;ce++){const Ee=D[ce];ee=N[ce];for(let Ae=0,$e=Ee.length;Ae<$e;Ae++){const je=z(Ee[Ae],ee[Ae],ye);y?Te(je.x,je.y+_[h-1].y,_[h-1].x+re):Te(je.x,je.y,u+re)}}}ae(),ue();function ae(){const Q=i.length/3;if(d){let K=0,re=Y*K;for(let ye=0;ye<k;ye++){const ce=U[ye];be(ce[2]+re,ce[1]+re,ce[0]+re)}K=h+m*2,re=Y*K;for(let ye=0;ye<k;ye++){const ce=U[ye];be(ce[0]+re,ce[1]+re,ce[2]+re)}}else{for(let K=0;K<k;K++){const re=U[K];be(re[2],re[1],re[0])}for(let K=0;K<k;K++){const re=U[K];be(re[0]+Y*h,re[1]+Y*h,re[2]+Y*h)}}n.addGroup(Q,i.length/3-Q,0)}function ue(){const Q=i.length/3;let K=0;X(O,K),K+=O.length;for(let re=0,ye=D.length;re<ye;re++){const ce=D[re];X(ce,K),K+=ce.length}n.addGroup(Q,i.length/3-Q,1)}function X(Q,K){let re=Q.length;for(;--re>=0;){const ye=re;let ce=re-1;ce<0&&(ce=Q.length-1);for(let Oe=0,Ee=h+m*2;Oe<Ee;Oe++){const Ae=Y*Oe,$e=Y*(Oe+1),je=K+ye+Ae,L=K+ce+Ae,A=K+ce+$e,q=K+ye+$e;Ce(je,L,A,q)}}}function Te(Q,K,re){l.push(Q),l.push(K),l.push(re)}function be(Q,K,re){de(Q),de(K),de(re);const ye=i.length/3,ce=x.generateTopUV(n,i,ye-3,ye-2,ye-1);ke(ce[0]),ke(ce[1]),ke(ce[2])}function Ce(Q,K,re,ye){de(Q),de(K),de(ye),de(K),de(re),de(ye);const ce=i.length/3,Oe=x.generateSideWallUV(n,i,ce-6,ce-3,ce-2,ce-1);ke(Oe[0]),ke(Oe[1]),ke(Oe[3]),ke(Oe[1]),ke(Oe[2]),ke(Oe[3])}function de(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function ke(Q){s.push(Q.x),s.push(Q.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return yy(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new wh[i.type]().fromJSON(i)),new wo(n,e.options)}}const _y={generateTopUV:function(o,e,t,n,i){const s=e[t*3],r=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new $(s,r),new $(a,l),new $(c,h)]},generateSideWallUV:function(o,e,t,n,i,s){const r=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],p=e[s*3],m=e[s*3+1],v=e[s*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new $(r,1-l),new $(c,1-u),new $(d,1-g),new $(p,1-v)]:[new $(a,1-l),new $(h,1-u),new $(f,1-g),new $(m,1-v)]}};function yy(o,e,t){if(t.shapes=[],Array.isArray(o))for(let n=0,i=o.length;n<i;n++){const s=o[n];t.shapes.push(s.uuid)}else t.shapes.push(o.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Mo extends ui{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mo(e.radius,e.detail)}}class vr extends ui{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vr(e.radius,e.detail)}}class So extends De{constructor(e=.5,t=1,n=8,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new S,g=new $;for(let p=0;p<=i;p++){for(let m=0;m<=n;m++){const v=s+m/n*r;f.x=u*Math.cos(v),f.y=u*Math.sin(v),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let p=0;p<i;p++){const m=p*(n+1);for(let v=0;v<n;v++){const x=v+m,_=x,y=x+n+1,w=x+n+2,M=x+1;a.push(_,y,M),a.push(y,w,M)}}this.setIndex(a),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(h,2))}static fromJSON(e){return new So(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class To extends De{constructor(e=new gs([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],r=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new we(i,3)),this.setAttribute("normal",new we(s,3)),this.setAttribute("uv",new we(r,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;On.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,v=g.length;m<v;m++){const x=g[m];On.isClockWise(x)===!0&&(g[m]=x.reverse())}const p=On.triangulateShape(f,g);for(let m=0,v=g.length;m<v;m++){const x=g[m];f=f.concat(x)}for(let m=0,v=f.length;m<v;m++){const x=f[m];i.push(x.x,x.y,0),s.push(0,0,1),r.push(x.x,x.y)}for(let m=0,v=p.length;m<v;m++){const x=p[m],_=x[0]+u,y=x[1]+u,w=x[2]+u;n.push(_,y,w),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return by(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const r=t[e.shapes[i]];n.push(r)}return new To(n,e.curveSegments)}}function by(o,e){if(e.shapes=[],Array.isArray(o))for(let t=0,n=o.length;t<n;t++){const i=o[t];e.shapes.push(i.uuid)}else e.shapes.push(o.uuid);return e}class xr extends De{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new S,d=new S,f=[],g=[],p=[],m=[];for(let v=0;v<=n;v++){const x=[],_=v/n;let y=0;v==0&&r==0?y=.5/t:v==n&&l==Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const M=w/t;u.x=-e*Math.cos(i+M*s)*Math.sin(r+_*a),u.y=e*Math.cos(r+_*a),u.z=e*Math.sin(i+M*s)*Math.sin(r+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),p.push(d.x,d.y,d.z),m.push(M+y,1-_),x.push(c++)}h.push(x)}for(let v=0;v<n;v++)for(let x=0;x<t;x++){const _=h[v][x+1],y=h[v][x],w=h[v+1][x],M=h[v+1][x+1];(v!==0||r>0)&&f.push(_,y,M),(v!==n-1||l<Math.PI)&&f.push(y,w,M)}this.setIndex(f),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(p,3)),this.setAttribute("uv",new we(m,2))}static fromJSON(e){return new xr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ao extends ui{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ao(e.radius,e.detail)}}class Eo extends De{constructor(e=1,t=.4,n=8,i=6,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],c=[],h=new S,u=new S,d=new S;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const p=g/i*s,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(p),h.y=e*Math.sin(p),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const p=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,v=(i+1)*(f-1)+g,x=(i+1)*f+g;r.push(p,m,x),r.push(m,v,x)}this.setIndex(r),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(c,2))}static fromJSON(e){return new Eo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Co extends De{constructor(e=1,t=.4,n=64,i=8,s=2,r=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:r},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],h=[],u=new S,d=new S,f=new S,g=new S,p=new S,m=new S,v=new S;for(let _=0;_<=n;++_){const y=_/n*s*Math.PI*2;x(y,s,r,e,f),x(y+.01,s,r,e,g),m.subVectors(g,f),v.addVectors(g,f),p.crossVectors(m,v),v.crossVectors(p,m),p.normalize(),v.normalize();for(let w=0;w<=i;++w){const M=w/i*Math.PI*2,E=-t*Math.cos(M),b=t*Math.sin(M);u.x=f.x+(E*v.x+b*p.x),u.y=f.y+(E*v.y+b*p.y),u.z=f.z+(E*v.z+b*p.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(_/n),h.push(w/i)}}for(let _=1;_<=n;_++)for(let y=1;y<=i;y++){const w=(i+1)*(_-1)+(y-1),M=(i+1)*_+(y-1),E=(i+1)*_+y,b=(i+1)*(_-1)+y;a.push(w,M,b),a.push(M,E,b)}this.setIndex(a),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(h,2));function x(_,y,w,M,E){const b=Math.cos(_),T=Math.sin(_),R=w/y*_,D=Math.cos(R);E.x=M*(2+D)*.5*b,E.y=M*(2+D)*T*.5,E.z=M*Math.sin(R)*.5}}static fromJSON(e){return new Co(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Lo extends De{constructor(e=new yh(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const r=e.computeFrenetFrames(t,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new S,l=new S,c=new $;let h=new S;const u=[],d=[],f=[],g=[];p(),this.setIndex(g),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(f,2));function p(){for(let _=0;_<t;_++)m(_);m(s===!1?t:0),x(),v()}function m(_){h=e.getPointAt(_/t,h);const y=r.normals[_],w=r.binormals[_];for(let M=0;M<=i;M++){const E=M/i*Math.PI*2,b=Math.sin(E),T=-Math.cos(E);l.x=T*y.x+b*w.x,l.y=T*y.y+b*w.y,l.z=T*y.z+b*w.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function v(){for(let _=1;_<=t;_++)for(let y=1;y<=i;y++){const w=(i+1)*(_-1)+(y-1),M=(i+1)*_+(y-1),E=(i+1)*_+y,b=(i+1)*(_-1)+y;g.push(w,M,b),g.push(M,E,b)}}function x(){for(let _=0;_<=t;_++)for(let y=0;y<=i;y++)c.x=_/t,c.y=y/i,f.push(c.x,c.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Lo(new wh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class fp extends De{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new S,s=new S;if(e.index!==null){const r=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let g=d,p=d+f;g<p;g+=3)for(let m=0;m<3;m++){const v=a.getX(g+m),x=a.getX(g+(m+1)%3);i.fromBufferAttribute(r,v),s.fromBufferAttribute(r,x),qu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const r=e.attributes.position;for(let a=0,l=r.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(r,h),s.fromBufferAttribute(r,u),qu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new we(t,3))}}}function qu(o,e,t){const n=`${o.x},${o.y},${o.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${o.x},${o.y},${o.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var $u=Object.freeze({__proto__:null,BoxGeometry:hi,CapsuleGeometry:_o,CircleGeometry:gr,ConeGeometry:yo,CylinderGeometry:Hi,DodecahedronGeometry:bo,EdgesGeometry:cp,ExtrudeGeometry:wo,IcosahedronGeometry:Mo,LatheGeometry:mr,OctahedronGeometry:vr,PlaneGeometry:Vi,PolyhedronGeometry:ui,RingGeometry:So,ShapeGeometry:To,SphereGeometry:xr,TetrahedronGeometry:Ao,TorusGeometry:Eo,TorusKnotGeometry:Co,TubeGeometry:Lo,WireframeGeometry:fp});class pp extends lt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new oe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Xr extends yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gn extends lt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mn extends Gn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class mp extends lt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new oe(16777215),this.specular=new oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gp extends lt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new oe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class vp extends lt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class xp extends lt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _p extends lt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new oe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ci,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yp extends kt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function hn(o,e,t){return Mh(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)}function us(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Mh(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function bp(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Xc(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[r++]=o[a+l]}return i}function Sh(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=o[i++];while(s!==void 0)}function wy(o,e,t,n,i=30){const s=o.clone();s.name=e;const r=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const g=c.times[f]*i;if(!(g<t||g>=n)){u.push(c.times[f]);for(let p=0;p<h;++p)d.push(c.values[f*h+p])}}u.length!==0&&(c.times=us(u,c.times.constructor),c.values=us(d,c.values.constructor),r.push(c))}s.tracks=r;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s}function My(o,e=0,t=o,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let r=0;r<i;++r){const a=t.tracks[r],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=o.tracks.find(function(v){return v.name===a.name&&v.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const g=a.times.length-1;let p;if(s<=a.times[0]){const v=h,x=u-h;p=hn(a.values,v,x)}else if(s>=a.times[g]){const v=g*u+h,x=v+u-h;p=hn(a.values,v,x)}else{const v=a.createInterpolant(),x=h,_=u-h;v.evaluate(s),p=hn(v.resultBuffer,x,_)}l==="quaternion"&&new Pt().fromArray(p).normalize().conjugate().toArray(p);const m=c.times.length;for(let v=0;v<m;++v){const x=v*f+d;if(l==="quaternion")Pt.multiplyQuaternionsFlat(c.values,x,p,0,c.values,x);else{const _=f-d*2;for(let y=0;y<_;++y)c.values[x+y]-=p[y]}}}return o.blendMode=sh,o}var Sy=Object.freeze({__proto__:null,arraySlice:hn,convertArray:us,isTypedArray:Mh,getKeyframeOrder:bp,sortedArray:Xc,flattenJSON:Sh,subclip:wy,makeClipAdditive:My});class _r{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class wp extends _r{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ls,endingEnd:ls}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case cs:s=e,a=2*t-n;break;case Jr:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cs:r=e,l=2*n-t;break;case Jr:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),p=g*g,m=p*g,v=-d*m+2*d*p-d*g,x=(1+d)*m+(-1.5-2*d)*p+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*p+.5*g,y=f*m-f*p;for(let w=0;w!==a;++w)s[w]=v*r[h+w]+x*r[c+w]+_*r[l+w]+y*r[u+w];return s}}class Th extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=r[c+d]*u+r[l+d]*h;return s}}class Mp extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class En{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=us(t,this.TimeBufferType),this.values=us(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:us(e.times,Array),values:us(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Mp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case tr:t=this.InterpolantFactoryMethodDiscrete;break;case ys:t=this.InterpolantFactoryMethodLinear;break;case Ca:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return ys;case this.InterpolantFactoryMethodSmooth:return Ca}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=hn(n,s,r),this.values=hn(this.values,s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(i!==void 0&&Mh(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=hn(this.times),t=hn(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ca,s=e.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const p=t[u+g];if(p!==t[d+g]||p!==t[f+g]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const u=a*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=hn(e,0,r),this.values=hn(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=hn(this.times,0),t=hn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=ys;class Ms extends En{}Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=tr;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Ah extends En{}Ah.prototype.ValueTypeName="color";class rr extends En{}rr.prototype.ValueTypeName="number";class Sp extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Pt.slerpFlat(s,0,r,c-a,r,c,l);return s}}class Bi extends En{InterpolantFactoryMethodLinear(e){return new Sp(this.times,this.values,this.getValueSize(),e)}}Bi.prototype.ValueTypeName="quaternion";Bi.prototype.DefaultInterpolation=ys;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends En{}Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=tr;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class or extends En{}or.prototype.ValueTypeName="vector";class ar{constructor(e,t=-1,n,i=Ya){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=nn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(Ay(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(En.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=bp(l);l=Xc(l,1,h),c=Xc(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new rr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,p){if(f.length!==0){const m=[],v=[];Sh(f,m,v,g),m.length!==0&&p.push(new u(d,m,v))}},i=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let p=0;p<d[g].morphTargets.length;p++)f[d[g].morphTargets[p]]=-1;for(const p in f){const m=[],v=[];for(let x=0;x!==d[g].morphTargets.length;++x){const _=d[g];m.push(_.time),v.push(_.morphTarget===p?1:0)}i.push(new rr(".morphTargetInfluence["+p+"]",m,v))}l=f.length*r}else{const f=".bones["+t[u].name+"]";n(or,f+".position",d,"pos",i),n(Bi,f+".quaternion",d,"rot",i),n(or,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ty(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rr;case"vector":case"vector2":case"vector3":case"vector4":return or;case"color":return Ah;case"quaternion":return Bi;case"bool":case"boolean":return Ms;case"string":return Ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Ay(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ty(o.type);if(o.times===void 0){const t=[],n=[];Sh(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const bs={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Eh{constructor(e,t,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Ch=new Eh;class qt{constructor(e){this.manager=e!==void 0?e:Ch,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Zn={};class Ey extends Error{constructor(e,t){super(e),this.response=t}}class sn extends qt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=bs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:n,onError:i});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Zn[e],u=c.body.getReader(),d=c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let p=0;const m=new ReadableStream({start(v){x();function x(){u.read().then(({done:_,value:y})=>{if(_)v.close();else{p+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:f});for(let M=0,E=h.length;M<E;M++){const b=h[M];b.onProgress&&b.onProgress(w)}v.enqueue(y),x()}})}}});return new Response(m)}else throw new Ey(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{bs.add(e,c);const h=Zn[e];delete Zn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Zn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Zn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Cy extends qt{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new sn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=ar.parse(e[n]);t.push(i)}return t}}class Ly extends qt{constructor(e){super(e)}load(e,t,n,i){const s=this,r=[],a=new ip,l=new sn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function h(u){l.load(e[u],function(d){const f=s.parse(d,!0);r[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=it),a.image=r,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else l.load(e,function(u){const d=s.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let g=0;g<f;g++){r[g]={mipmaps:[]};for(let p=0;p<d.mipmapCount;p++)r[g].mipmaps.push(d.mipmaps[g*d.mipmapCount+p]),r[g].format=d.format,r[g].width=d.width,r[g].height=d.height}a.image=r}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=it),a.format=d.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}class ro extends qt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=bs.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=eo("img");function l(){h(),bs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Ry extends qt{constructor(e){super(e)}load(e,t,n,i){const s=new mo,r=new ro(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let a=0;function l(c){r.load(e[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class Tp extends qt{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new Js,a=new sn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){const c=s.parse(l);c&&(c.image!==void 0?r.image=c.image:c.data!==void 0&&(r.image.width=c.width,r.image.height=c.height,r.image.data=c.data),r.wrapS=c.wrapS!==void 0?c.wrapS:zt,r.wrapT=c.wrapT!==void 0?c.wrapT:zt,r.magFilter=c.magFilter!==void 0?c.magFilter:it,r.minFilter=c.minFilter!==void 0?c.minFilter:it,r.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(r.encoding=c.encoding),c.flipY!==void 0&&(r.flipY=c.flipY),c.format!==void 0&&(r.format=c.format),c.type!==void 0&&(r.type=c.type),c.mipmaps!==void 0&&(r.mipmaps=c.mipmaps,r.minFilter=li),c.mipmapCount===1&&(r.minFilter=it),c.generateMipmaps!==void 0&&(r.generateMipmaps=c.generateMipmaps),r.needsUpdate=!0,t&&t(r,c))},n,i),r}}class en extends qt{constructor(e){super(e)}load(e,t,n,i){const s=new mt,r=new ro(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Gi extends ze{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Ap extends Gi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DefaultUp),this.updateMatrix(),this.groundColor=new oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ql=new Re,Yu=new S,ju=new S;class Lh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ka,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yu),ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ju),t.updateMatrixWorld(),ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Py extends Lh{constructor(){super(new pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Qr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ol extends Gi{constructor(e,t,n=0,i=Math.PI/3,s=0,r=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ze.DefaultUp),this.updateMatrix(),this.target=new ze,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Py}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Zu=new Re,Lr=new S,$l=new S;class Iy extends Lh{constructor(){super(new pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Lr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Lr),$l.copy(n.position),$l.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($l),n.updateMatrixWorld(),i.makeTranslation(-Lr.x,-Lr.y,-Lr.z),Zu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu)}}class al extends Gi{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Iy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Dy extends Lh{constructor(){super(new ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rh extends Gi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DefaultUp),this.updateMatrix(),this.target=new ze,this.shadow=new Dy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ph extends Gi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ih extends Gi{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Ep{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new S)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.282095),t.addScaledVector(r[1],.488603*i),t.addScaledVector(r[2],.488603*s),t.addScaledVector(r[3],.488603*n),t.addScaledVector(r[4],1.092548*(n*i)),t.addScaledVector(r[5],1.092548*(i*s)),t.addScaledVector(r[6],.315392*(3*s*s-1)),t.addScaledVector(r[7],1.092548*(n*s)),t.addScaledVector(r[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.886227),t.addScaledVector(r[1],2*.511664*i),t.addScaledVector(r[2],2*.511664*s),t.addScaledVector(r[3],2*.511664*n),t.addScaledVector(r[4],2*.429043*n*i),t.addScaledVector(r[5],2*.429043*i*s),t.addScaledVector(r[6],.743125*s*s-.247708),t.addScaledVector(r[7],2*.429043*n*s),t.addScaledVector(r[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class ll extends Gi{constructor(e=new Ep,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class cl extends qt{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,r=new sn(s.manager);r.setPath(s.path),r.setRequestHeader(s.requestHeader),r.setWithCredentials(s.withCredentials),r.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=cl.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const r=e.uniforms[s];switch(i.uniforms[s]={},r.type){case"t":i.uniforms[s].value=n(r.value);break;case"c":i.uniforms[s].value=new oe().setHex(r.value);break;case"v2":i.uniforms[s].value=new $().fromArray(r.value);break;case"v3":i.uniforms[s].value=new S().fromArray(r.value);break;case"v4":i.uniforms[s].value=new Je().fromArray(r.value);break;case"m3":i.uniforms[s].value=new Yt().fromArray(r.value);break;case"m4":i.uniforms[s].value=new Re().fromArray(r.value);break;default:i.uniforms[s].value=r.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new $().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new $().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:pp,SpriteMaterial:fh,RawShaderMaterial:Xr,ShaderMaterial:yt,PointsMaterial:nl,MeshPhysicalMaterial:Mn,MeshStandardMaterial:Gn,MeshPhongMaterial:mp,MeshToonMaterial:gp,MeshNormalMaterial:vp,MeshLambertMaterial:xp,MeshDepthMaterial:uh,MeshDistanceMaterial:dh,MeshBasicMaterial:ht,MeshMatcapMaterial:_p,LineDashedMaterial:yp,LineBasicMaterial:kt,Material:lt};return new t[e]}}class Fn{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class di extends De{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Cp extends qt{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new sn(s.manager);r.setPath(s.path),r.setRequestHeader(s.requestHeader),r.setWithCredentials(s.withCredentials),r.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,g){if(t[g]!==void 0)return t[g];const m=f.interleavedBuffers[g],v=s(f,m.buffer),x=js(m.type,v),_=new pr(x,m.stride);return _.uuid=m.uuid,t[g]=_,_}function s(f,g){if(n[g]!==void 0)return n[g];const m=f.arrayBuffers[g],v=new Uint32Array(m).buffer;return n[g]=v,v}const r=e.isInstancedBufferGeometry?new di:new De,a=e.data.index;if(a!==void 0){const f=js(a.type,a.array);r.setIndex(new Qe(f,1))}const l=e.data.attributes;for(const f in l){const g=l[f];let p;if(g.isInterleavedBufferAttribute){const m=i(e.data,g.data);p=new kn(m,g.itemSize,g.offset,g.normalized)}else{const m=js(g.type,g.array),v=g.isInstancedBufferAttribute?fn:Qe;p=new v(m,g.itemSize,g.normalized)}g.name!==void 0&&(p.name=g.name),g.usage!==void 0&&p.setUsage(g.usage),g.updateRange!==void 0&&(p.updateRange.offset=g.updateRange.offset,p.updateRange.count=g.updateRange.count),r.setAttribute(f,p)}const c=e.data.morphAttributes;if(c)for(const f in c){const g=c[f],p=[];for(let m=0,v=g.length;m<v;m++){const x=g[m];let _;if(x.isInterleavedBufferAttribute){const y=i(e.data,x.data);_=new kn(y,x.itemSize,x.offset,x.normalized)}else{const y=js(x.type,x.array);_=new Qe(y,x.itemSize,x.normalized)}x.name!==void 0&&(_.name=x.name),p.push(_)}r.morphAttributes[f]=p}e.data.morphTargetsRelative&&(r.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,g=u.length;f!==g;++f){const p=u[f];r.addGroup(p.start,p.count,p.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const f=new S;d.center!==void 0&&f.fromArray(d.center),r.boundingSphere=new ki(f,d.radius)}return e.name&&(r.name=e.name),e.userData&&(r.userData=e.userData),r}}class Ny extends qt{constructor(e){super(e)}load(e,t,n,i){const s=this,r=this.path===""?Fn.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;const a=new sn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Fn.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new sn(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const r=await s.loadAsync(e,t),a=JSON.parse(r),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),r=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,r),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,s,l,a,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),t!==void 0){let u=!1;for(const d in r)if(r[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),r=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,r),l=this.parseObject(e.object,i,a,r,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new gs().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,r=e.length;s<r;s++){const a=new xo().fromJSON(e[s],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Cp;for(let s=0,r=e.length;s<r;s++){let a;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in $u?a=$u[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),a.isBufferGeometry===!0&&l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new cl;s.setTextures(t);for(let r=0,a=e.length;r<a;r++){const l=e[r];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=ar.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function r(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return r(h)}else return l.data?{data:js(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Eh(t);s=new ro(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const u=e[c],d=u.url;if(Array.isArray(d)){const f=[];for(let g=0,p=d.length;g<p;g++){const m=d[g],v=a(m);v!==null&&(v instanceof HTMLImageElement?f.push(v):f.push(new Js(v.data,v.width,v.height)))}i[u.uuid]=new hs(f)}else{const f=a(u.url);i[u.uuid]=new hs(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(r){if(typeof r=="string"){const a=r,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(l)}else return r.data?{data:js(r.type,r.data),width:r.width,height:r.height}:null}if(e!==void 0&&e.length>0){i=new ro(this.manager),i.setCrossOrigin(this.crossOrigin);for(let r=0,a=e.length;r<a;r++){const l=e[r],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u],g=await s(f);g!==null&&(g instanceof HTMLImageElement?h.push(g):h.push(new Js(g.data,g.width,g.height)))}n[l.uuid]=new hs(h)}else{const h=await s(l.url);n[l.uuid]=new hs(h)}}}return n}parseTextures(e,t){function n(s,r){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),r[s])}const i={};if(e!==void 0)for(let s=0,r=e.length;s<r;s++){const a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const l=t[a.image],c=l.data;let h;Array.isArray(c)?(h=new mo,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Js:h=new mt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,Oy)),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],Ku),h.wrapT=n(a.wrap[1],Ku)),a.format!==void 0&&(h.format=a.format),a.type!==void 0&&(h.type=a.type),a.encoding!==void 0&&(h.encoding=a.encoding),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,Ju)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,Ju)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(e,t,n,i,s){let r;function a(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let g=0,p=d.length;g<p;g++){const m=d[g];n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(e.type){case"Scene":r=new vo,e.background!==void 0&&(Number.isInteger(e.background)?r.background=new oe(e.background):r.background=c(e.background)),e.environment!==void 0&&(r.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?r.fog=new el(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(r.fog=new Qa(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":r=new pt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(r.focus=e.focus),e.zoom!==void 0&&(r.zoom=e.zoom),e.filmGauge!==void 0&&(r.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(r.filmOffset=e.filmOffset),e.view!==void 0&&(r.view=Object.assign({},e.view));break;case"OrthographicCamera":r=new ws(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(r.zoom=e.zoom),e.view!==void 0&&(r.view=Object.assign({},e.view));break;case"AmbientLight":r=new Ph(e.color,e.intensity);break;case"DirectionalLight":r=new Rh(e.color,e.intensity);break;case"PointLight":r=new al(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":r=new Ih(e.color,e.intensity,e.width,e.height);break;case"SpotLight":r=new ol(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":r=new Ap(e.color,e.groundColor,e.intensity);break;case"LightProbe":r=new ll().fromJSON(e);break;case"SkinnedMesh":h=a(e.geometry),u=l(e.material),r=new ph(h,u),e.bindMode!==void 0&&(r.bindMode=e.bindMode),e.bindMatrix!==void 0&&r.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(r.skeleton=e.skeleton);break;case"Mesh":h=a(e.geometry),u=l(e.material),r=new st(h,u);break;case"InstancedMesh":h=a(e.geometry),u=l(e.material);const d=e.count,f=e.instanceMatrix,g=e.instanceColor;r=new Ei(h,u,d),r.instanceMatrix=new fn(new Float32Array(f.array),16),g!==void 0&&(r.instanceColor=new fn(new Float32Array(g.array),g.itemSize));break;case"LOD":r=new tp;break;case"Line":r=new ai(a(e.geometry),l(e.material));break;case"LineLoop":r=new mh(a(e.geometry),l(e.material));break;case"LineSegments":r=new Tn(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":r=new gh(a(e.geometry),l(e.material));break;case"Sprite":r=new ep(l(e.material));break;case"Group":r=new ri;break;case"Bone":r=new tl;break;default:r=new ze}if(r.uuid=e.uuid,e.name!==void 0&&(r.name=e.name),e.matrix!==void 0?(r.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(r.matrixAutoUpdate=e.matrixAutoUpdate),r.matrixAutoUpdate&&r.matrix.decompose(r.position,r.quaternion,r.scale)):(e.position!==void 0&&r.position.fromArray(e.position),e.rotation!==void 0&&r.rotation.fromArray(e.rotation),e.quaternion!==void 0&&r.quaternion.fromArray(e.quaternion),e.scale!==void 0&&r.scale.fromArray(e.scale)),e.castShadow!==void 0&&(r.castShadow=e.castShadow),e.receiveShadow!==void 0&&(r.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(r.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(r.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(r.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&r.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(r.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(r.visible=e.visible),e.frustumCulled!==void 0&&(r.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(r.renderOrder=e.renderOrder),e.userData!==void 0&&(r.userData=e.userData),e.layers!==void 0&&(r.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)r.add(this.parseObject(d[f],t,n,i,s))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const g=d[f];r.animations.push(s[g])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(r.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const g=d[f],p=r.getObjectByProperty("uuid",g.object);p!==void 0&&r.addLevel(p,g.distance)}}return r}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const Oy={UVMapping:qa,CubeReflectionMapping:Di,CubeRefractionMapping:Ni,EquirectangularReflectionMapping:xs,EquirectangularRefractionMapping:jr,CubeUVReflectionMapping:ur},Ku={RepeatWrapping:wn,ClampToEdgeWrapping:zt,MirroredRepeatWrapping:er},Ju={NearestFilter:xt,NearestMipmapNearestFilter:Zr,NearestMipmapLinearFilter:Kr,LinearFilter:it,LinearMipmapNearestFilter:$a,LinearMipmapLinearFilter:li};class Lp extends qt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=bs.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){bs.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}let fa;const Dh={getContext:function(){return fa===void 0&&(fa=new(window.AudioContext||window.webkitAudioContext)),fa},setContext:function(o){fa=o}};class Fy extends qt{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new sn(this.manager);r.setResponseType("arraybuffer"),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(a){try{const l=a.slice(0);Dh.getContext().decodeAudioData(l,function(h){t(h)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class By extends ll{constructor(e,t,n=1){super(void 0,n),this.isHemisphereLightProbe=!0;const i=new oe().set(e),s=new oe().set(t),r=new S(i.r,i.g,i.b),a=new S(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(r).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(r).sub(a).multiplyScalar(c)}}class Uy extends ll{constructor(e,t=1){super(void 0,t),this.isAmbientLightProbe=!0;const n=new oe().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}const Qu=new Re,ed=new Re,ji=new Re;class zy{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new pt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new pt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ji.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,r=t.near*Math.tan(ps*t.fov*.5)/t.zoom;let a,l;ed.elements[12]=-i,Qu.elements[12]=i,a=-r*t.aspect+s,l=r*t.aspect+s,ji.elements[0]=2*t.near/(l-a),ji.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(ji),a=-r*t.aspect-s,l=r*t.aspect-s,ji.elements[0]=2*t.near/(l-a),ji.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(ji)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(ed),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Qu)}}class yr{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=td(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=td();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function td(){return(typeof performance>"u"?Date:performance).now()}const Zi=new S,nd=new Pt,ky=new S,Ki=new S;class Vy extends ze{constructor(){super(),this.type="AudioListener",this.context=Dh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new yr}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Zi,nd,ky),Ki.set(0,0,-1).applyQuaternion(nd),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Zi.x,i),t.positionY.linearRampToValueAtTime(Zi.y,i),t.positionZ.linearRampToValueAtTime(Zi.z,i),t.forwardX.linearRampToValueAtTime(Ki.x,i),t.forwardY.linearRampToValueAtTime(Ki.y,i),t.forwardZ.linearRampToValueAtTime(Ki.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Zi.x,Zi.y,Zi.z),t.setOrientation(Ki.x,Ki.y,Ki.z,n.x,n.y,n.z)}}class Rp extends ze{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Ji=new S,id=new Pt,Hy=new S,Qi=new S;class Gy extends Rp{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ji,id,Hy),Qi.set(0,0,1).applyQuaternion(id);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Ji.x,n),t.positionY.linearRampToValueAtTime(Ji.y,n),t.positionZ.linearRampToValueAtTime(Ji.z,n),t.orientationX.linearRampToValueAtTime(Qi.x,n),t.orientationY.linearRampToValueAtTime(Qi.y,n),t.orientationZ.linearRampToValueAtTime(Qi.z,n)}else t.setPosition(Ji.x,Ji.y,Ji.z),t.setOrientation(Qi.x,Qi.y,Qi.z)}}class Wy{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Pp{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let a=0;a!==i;++a)n[s+a]=n[a];r=t}else{r+=t;const a=t/r;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){Pt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const r=this._workIndex*s;Pt.multiplyQuaternionsFlat(e,r,e,t,e,n),Pt.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){const r=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*r+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){const a=t+r;e[a]=e[a]+e[n+r]*i}}}const Nh="\\[\\]\\.:\\/",Xy=new RegExp("["+Nh+"]","g"),Oh="[^"+Nh+"]",qy="[^"+Nh.replace("\\.","")+"]",$y=/((?:WC+[\/:])*)/.source.replace("WC",Oh),Yy=/(WCOD+)?/.source.replace("WCOD",qy),jy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),Zy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),Ky=new RegExp("^"+$y+Yy+jy+Zy+"$"),Jy=["material","materials","bones","map"];class Qy{constructor(e,t,n){const i=n||Ye.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ye{constructor(e,t,n){this.path=t,this.parsedPath=n||Ye.parseTrackName(t),this.node=Ye.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ye.Composite(e,t,n):new Ye(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xy,"")}static parseTrackName(e){const t=Ky.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Jy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ye.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ye.Composite=Qy;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class eb{constructor(){this.isAnimationObjectGroup=!0,this.uuid=nn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,r=s.length;let a,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let g=t[f];if(g===void 0){g=l++,t[f]=g,e.push(d);for(let p=0,m=r;p!==m;++p)s[p].push(new Ye(d,n[p],i[p]))}else if(g<c){a=e[g];const p=--c,m=e[p];t[m.uuid]=g,e[g]=m,t[f]=p,e[p]=d;for(let v=0,x=r;v!==x;++v){const _=s[v],y=_[p];let w=_[g];_[g]=y,w===void 0&&(w=new Ye(d,n[v],i[v])),_[p]=w}}else e[g]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let r=0,a=arguments.length;r!==a;++r){const l=arguments[r],c=l.uuid,h=t[c];if(h!==void 0&&h>=s){const u=s++,d=e[u];t[d.uuid]=h,e[h]=d,t[c]=u,e[u]=l;for(let f=0,g=i;f!==g;++f){const p=n[f],m=p[u],v=p[h];p[h]=m,p[u]=v}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,r=e.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<s){const d=--s,f=e[d],g=--r,p=e[g];t[f.uuid]=u,e[u]=f,t[p.uuid]=d,e[d]=p,e.pop();for(let m=0,v=i;m!==v;++m){const x=n[m],_=x[d],y=x[g];x[u]=_,x[d]=y,x.pop()}}else{const d=--r,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let g=0,p=i;g!==p;++g){const m=n[g];m[u]=m[d],m.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const r=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=s.length,n[e]=i,r.push(e),a.push(t),s.push(u);for(let d=h,f=l.length;d!==f;++d){const g=l[d];u[d]=new Ye(g,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,r=this._bindings,a=r.length-1,l=r[a],c=e[a];t[c]=n,r[n]=l,r.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}}class tb{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,r=s.length,a=new Array(r),l={endingStart:ls,endingEnd:ls};for(let c=0;c!==r;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Pf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,r=s/i,a=i/s;e.warp(1,r,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,r=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/r,c[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const r=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case sh:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulateAdditive(a);break;case Ya:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const r=n===If;if(e===0)return s===-1?i:r&&(s&1)===1?t-i:i;if(n===Rf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=cs,i.endingEnd=cs):(e?i.endingStart=this.zeroSlopeAtStart?cs:ls:i.endingStart=Jr,t?i.endingEnd=this.zeroSlopeAtEnd?cs:ls:i.endingEnd=Jr)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const a=r.parameterPositions,l=r.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const nb=new Float32Array(1);class ib extends Hn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,r[u]=g;else{if(g=r[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const p=t&&t._propertyBindings[u].binding.parsedPath;g=new Pp(Ye.create(n,f,p),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),r[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const a=r.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,a=r[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,a=r[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Th(new Float32Array(2),new Float32Array(2),1,nb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let r=typeof e=="string"?ar.findByName(i,e):e;const a=r!==null?r.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(r!==null?n=r.blendMode:n=Ya),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const h=new tb(this,r,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?ar.findByName(n,e):e,r=s?s.uuid:e,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,r);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const r=s.knownActions;for(let a=0,l=r.length;a!==l;++a){const c=r[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const a=n[r].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const r in s){const a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Fh{constructor(e){this.value=e}clone(){return new Fh(this.value.clone===void 0?this.value:this.value.clone())}}let sb=0;class rb extends Hn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:sb++}),this.name="",this.usage=nr,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++)this.uniforms.push(t[n].clone());return this}clone(){return new this.constructor().copy(this)}}class ob extends pr{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class ab{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class Ip{constructor(e,t,n=0,i=1/0){this.ray=new fo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return qc(e,this,n,t),n.sort(sd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)qc(e[i],this,n,t);return n.sort(sd),n}}function sd(o,e){return o.distance-e.distance}function qc(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let s=0,r=i.length;s<r;s++)qc(i[s],e,t,!0)}}class $c{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lb{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const rd=new $;class Dp{constructor(e=new $(1/0,1/0),t=new $(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return rd.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const od=new S,pa=new S;class cb{constructor(e=new S,t=new S){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){od.subVectors(e,this.start),pa.subVectors(this.end,this.start);const n=pa.dot(pa);let s=pa.dot(od)/n;return t&&(s=_t(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const ad=new S;class hb extends ze{constructor(e,t){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;const n=new De,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let r=0,a=1,l=32;r<l;r++,a++){const c=r/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new we(i,3));const s=new kt({fog:!1,toneMapped:!1});this.cone=new Tn(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),ad.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(ad),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const wi=new S,ma=new Re,Yl=new Re;class ub extends Tn{constructor(e){const t=Np(e),n=new De,i=[],s=[],r=new oe(0,0,1),a=new oe(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(r.r,r.g,r.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new we(i,3)),n.setAttribute("color",new we(s,3));const l=new kt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Yl.copy(this.root.matrixWorld).invert();for(let s=0,r=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(ma.multiplyMatrices(Yl,a.matrixWorld),wi.setFromMatrixPosition(ma),i.setXYZ(r,wi.x,wi.y,wi.z),ma.multiplyMatrices(Yl,a.parent.matrixWorld),wi.setFromMatrixPosition(ma),i.setXYZ(r+1,wi.x,wi.y,wi.z),r+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Np(o){const e=[];o.isBone===!0&&e.push(o);for(let t=0;t<o.children.length;t++)e.push.apply(e,Np(o.children[t]));return e}class db extends st{constructor(e,t,n){const i=new xr(t,4,2),s=new ht({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.light.updateMatrixWorld(),this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const fb=new S,ld=new oe,cd=new oe;class pb extends ze{constructor(e,t,n){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;const i=new vr(t);i.rotateY(Math.PI*.5),this.material=new ht({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),r=new Float32Array(s.count*3);i.setAttribute("color",new Qe(r,3)),this.add(new st(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");ld.copy(this.light.color),cd.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?ld:cd;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}e.lookAt(fb.setFromMatrixPosition(this.light.matrixWorld).negate())}}class mb extends Tn{constructor(e=10,t=10,n=4473924,i=8947848){n=new oe(n),i=new oe(i);const s=t/2,r=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=r){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const p=d===s?n:i;p.toArray(c,f),f+=3,p.toArray(c,f),f+=3,p.toArray(c,f),f+=3,p.toArray(c,f),f+=3}const h=new De;h.setAttribute("position",new we(l,3)),h.setAttribute("color",new we(c,3));const u=new kt({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class gb extends Tn{constructor(e=10,t=16,n=8,i=64,s=4473924,r=8947848){s=new oe(s),r=new oe(r);const a=[],l=[];if(t>1)for(let u=0;u<t;u++){const d=u/t*(Math.PI*2),f=Math.sin(d)*e,g=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,g);const p=u&1?s:r;l.push(p.r,p.g,p.b),l.push(p.r,p.g,p.b)}for(let u=0;u<n;u++){const d=u&1?s:r,f=e-e/n*u;for(let g=0;g<i;g++){let p=g/i*(Math.PI*2),m=Math.sin(p)*f,v=Math.cos(p)*f;a.push(m,0,v),l.push(d.r,d.g,d.b),p=(g+1)/i*(Math.PI*2),m=Math.sin(p)*f,v=Math.cos(p)*f,a.push(m,0,v),l.push(d.r,d.g,d.b)}}const c=new De;c.setAttribute("position",new we(a,3)),c.setAttribute("color",new we(l,3));const h=new kt({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const hd=new S,ga=new S,ud=new S;class vb extends ze{constructor(e,t,n){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,t===void 0&&(t=1);let i=new De;i.setAttribute("position",new we([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new kt({fog:!1,toneMapped:!1});this.lightPlane=new ai(i,s),this.add(this.lightPlane),i=new De,i.setAttribute("position",new we([0,0,0,0,0,1],3)),this.targetLine=new ai(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){hd.setFromMatrixPosition(this.light.matrixWorld),ga.setFromMatrixPosition(this.light.target.matrixWorld),ud.subVectors(ga,hd),this.lightPlane.lookAt(ga),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ga),this.targetLine.scale.z=ud.length()}}const va=new S,ft=new Za;class xb extends Tn{constructor(e){const t=new De,n=new kt({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],r={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(g,p){l(g),l(p)}function l(g){i.push(0,0,0),s.push(0,0,0),r[g]===void 0&&(r[g]=[]),r[g].push(i.length/3-1)}t.setAttribute("position",new we(i,3)),t.setAttribute("color",new we(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=r,this.update();const c=new oe(16755200),h=new oe(16711680),u=new oe(43775),d=new oe(16777215),f=new oe(3355443);this.setColors(c,h,u,d,f)}setColors(e,t,n,i,s){const a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;ft.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),vt("c",t,e,ft,0,0,-1),vt("t",t,e,ft,0,0,1),vt("n1",t,e,ft,-n,-i,-1),vt("n2",t,e,ft,n,-i,-1),vt("n3",t,e,ft,-n,i,-1),vt("n4",t,e,ft,n,i,-1),vt("f1",t,e,ft,-n,-i,1),vt("f2",t,e,ft,n,-i,1),vt("f3",t,e,ft,-n,i,1),vt("f4",t,e,ft,n,i,1),vt("u1",t,e,ft,n*.7,i*1.1,-1),vt("u2",t,e,ft,-n*.7,i*1.1,-1),vt("u3",t,e,ft,0,i*2,-1),vt("cf1",t,e,ft,-n,0,1),vt("cf2",t,e,ft,n,0,1),vt("cf3",t,e,ft,0,-i,1),vt("cf4",t,e,ft,0,i,1),vt("cn1",t,e,ft,-n,0,-1),vt("cn2",t,e,ft,n,0,-1),vt("cn3",t,e,ft,0,-i,-1),vt("cn4",t,e,ft,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function vt(o,e,t,n,i,s,r){va.set(i,s,r).unproject(n);const a=e[o];if(a!==void 0){const l=t.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],va.x,va.y,va.z)}}const xa=new Sn;class _b extends Tn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new De;s.setIndex(new Qe(n,1)),s.setAttribute("position",new Qe(i,3)),super(s,new kt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&xa.setFromObject(this.object),xa.isEmpty())return;const t=xa.min,n=xa.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Op extends Tn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new De;s.setIndex(new Qe(n,1)),s.setAttribute("position",new we(i,3)),super(s,new kt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class yb extends ai{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],r=new De;r.setAttribute("position",new we(s,3)),r.computeBoundingSphere(),super(r,new kt({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new De;l.setAttribute("position",new we(a,3)),l.computeBoundingSphere(),this.add(new st(l,new ht({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const dd=new S;let _a,jl;class bb extends ze{constructor(e=new S(0,0,1),t=new S(0,0,0),n=1,i=16776960,s=n*.2,r=s*.2){super(),this.type="ArrowHelper",_a===void 0&&(_a=new De,_a.setAttribute("position",new we([0,0,0,0,1,0],3)),jl=new Hi(0,.5,1,5,1),jl.translate(0,-.5,0)),this.position.copy(t),this.line=new ai(_a,new kt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new st(jl,new ht({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,r)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{dd.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(dd,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class wb extends Tn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new De;i.setAttribute("position",new we(t,3)),i.setAttribute("color",new we(n,3));const s=new kt({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new oe,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Mb{constructor(){this.type="ShapePath",this.color=new oe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new to,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,r){return this.currentPath.bezierCurveTo(e,t,n,i,s,r),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(v){const x=[];for(let _=0,y=v.length;_<y;_++){const w=v[_],M=new gs;M.curves=w.curves,x.push(M)}return x}function n(v,x){const _=x.length;let y=!1;for(let w=_-1,M=0;M<_;w=M++){let E=x[w],b=x[M],T=b.x-E.x,R=b.y-E.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(E=x[M],T=-T,b=x[w],R=-R),v.y<E.y||v.y>b.y)continue;if(v.y===E.y){if(v.x===E.x)return!0}else{const D=R*(v.x-E.x)-T*(v.y-E.y);if(D===0)return!0;if(D<0)continue;y=!y}}else{if(v.y!==E.y)continue;if(b.x<=v.x&&v.x<=E.x||E.x<=v.x&&v.x<=b.x)return!0}}return y}const i=On.isClockWise,s=this.subPaths;if(s.length===0)return[];let r,a,l;const c=[];if(s.length===1)return a=s[0],l=new gs,l.curves=a.curves,c.push(l),c;let h=!i(s[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],g=0,p;d[g]=void 0,f[g]=[];for(let v=0,x=s.length;v<x;v++)a=s[v],p=a.getPoints(),r=i(p),r=e?!r:r,r?(!h&&d[g]&&g++,d[g]={s:new gs,p},d[g].s.curves=a.curves,h&&g++,f[g]=[]):f[g].push({h:a,p:p[0]});if(!d[0])return t(s);if(d.length>1){let v=!1,x=0;for(let _=0,y=d.length;_<y;_++)u[_]=[];for(let _=0,y=d.length;_<y;_++){const w=f[_];for(let M=0;M<w.length;M++){const E=w[M];let b=!0;for(let T=0;T<d.length;T++)n(E.p,d[T].p)&&(_!==T&&x++,b?(b=!1,u[T].push(E)):v=!0);b&&u[_].push(E)}}x>0&&v===!1&&(f=u)}let m;for(let v=0,x=d.length;v<x;v++){l=d[v].s,c.push(l),m=f[v];for(let _=0,y=m.length;_<y;_++)l.holes.push(m[_].h)}return c}}const ni=Sb();function Sb(){const o=new ArrayBuffer(4),e=new Float32Array(o),t=new Uint32Array(o),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),r=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)r[l]=l<<23;r[31]=1199570944,r[32]=2147483648;for(let l=33;l<63;++l)r[l]=2147483648+(l-32<<23);r[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:r,offsetTable:a}}function Tb(o){Math.abs(o)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),o=_t(o,-65504,65504),ni.floatView[0]=o;const e=ni.uint32View[0],t=e>>23&511;return ni.baseTable[t]+((e&8388607)>>ni.shiftTable[t])}function Ab(o){const e=o>>10;return ni.uint32View[0]=ni.mantissaTable[ni.offsetTable[e]+(o&1023)]+ni.exponentTable[e],ni.floatView[0]}var Br=Object.freeze({__proto__:null,toHalfFloat:Tb,fromHalfFloat:Ab});function Eb(){console.error("THREE.ImmediateRenderObject has been removed.")}class Cb extends Rt{constructor(e,t,n){console.error('THREE.WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.'),super(e,t,n),this.samples=4}}class Lb extends uo{constructor(e,t,n,i){console.warn("THREE.DataTexture2DArray has been renamed to DataArrayTexture."),super(e,t,n,i)}}class Rb extends ja{constructor(e,t,n,i){console.warn("THREE.DataTexture3D has been renamed to Data3DTexture."),super(e,t,n,i)}}class Pb extends hi{constructor(e,t,n,i,s,r){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(e,t,n,i,s,r)}}class Ib extends _o{constructor(e,t,n,i){console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."),super(e,t,n,i)}}class Db extends gr{constructor(e,t,n,i){console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."),super(e,t,n,i)}}class Nb extends yo{constructor(e,t,n,i,s,r,a){console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."),super(e,t,n,i,s,r,a)}}class Ob extends Hi{constructor(e,t,n,i,s,r,a,l){console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."),super(e,t,n,i,s,r,a,l)}}class Fb extends bo{constructor(e,t){console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."),super(e,t)}}class Bb extends wo{constructor(e,t){console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."),super(e,t)}}class Ub extends Mo{constructor(e,t){console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."),super(e,t)}}class zb extends mr{constructor(e,t,n,i){console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."),super(e,t,n,i)}}class kb extends vr{constructor(e,t){console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."),super(e,t)}}class Vb extends Vi{constructor(e,t,n,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(e,t,n,i)}}class Hb extends ui{constructor(e,t,n,i){console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."),super(e,t,n,i)}}class Gb extends So{constructor(e,t,n,i,s,r){console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."),super(e,t,n,i,s,r)}}class Wb extends To{constructor(e,t){console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."),super(e,t)}}class Xb extends xr{constructor(e,t,n,i,s,r,a){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(e,t,n,i,s,r,a)}}class qb extends Ao{constructor(e,t){console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."),super(e,t)}}class $b extends Eo{constructor(e,t,n,i,s){console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."),super(e,t,n,i,s)}}class Yb extends Co{constructor(e,t,n,i,s,r){console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."),super(e,t,n,i,s,r)}}class jb extends Lo{constructor(e,t,n,i,s){console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."),super(e,t,n,i,s)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);const Fp=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Xa,AddEquation:rs,AddOperation:hf,AdditiveAnimationBlendMode:sh,AdditiveBlending:Qs,AlphaFormat:yf,AlwaysDepth:nf,AlwaysStencilFunc:Bf,AmbientLight:Ph,AmbientLightProbe:Uy,AnimationClip:ar,AnimationLoader:Cy,AnimationMixer:ib,AnimationObjectGroup:eb,AnimationUtils:Sy,ArcCurve:sp,ArrayCamera:Zf,ArrowHelper:bb,Audio:Rp,AudioAnalyser:Wy,AudioContext:Dh,AudioListener:Vy,AudioLoader:Fy,AxesHelper:wb,BackSide:tn,BasicDepthPacking:Nf,BasicShadowMap:om,Bone:tl,BooleanKeyframeTrack:Ms,Box2:Dp,Box3:Sn,Box3Helper:Op,BoxBufferGeometry:Pb,BoxGeometry:hi,BoxHelper:_b,BufferAttribute:Qe,BufferGeometry:De,BufferGeometryLoader:Cp,ByteType:mf,Cache:bs,Camera:Za,CameraHelper:xb,CanvasTexture:Y_,CapsuleBufferGeometry:Ib,CapsuleGeometry:_o,CatmullRomCurve3:rp,CineonToneMapping:ff,CircleBufferGeometry:Db,CircleGeometry:gr,ClampToEdgeWrapping:zt,Clock:yr,Color:oe,ColorKeyframeTrack:Ah,ColorManagement:ln,CompressedTexture:ip,CompressedTextureLoader:Ly,ConeBufferGeometry:Nb,ConeGeometry:yo,CubeCamera:Hf,CubeReflectionMapping:Di,CubeRefractionMapping:Ni,CubeTexture:mo,CubeTextureLoader:Ry,CubeUVReflectionMapping:ur,CubicBezierCurve:xh,CubicBezierCurve3:op,CubicInterpolant:wp,CullFaceBack:uc,CullFaceFront:Vd,CullFaceFrontBack:rm,CullFaceNone:kd,Curve:An,CurvePath:lp,CustomBlending:Gd,CustomToneMapping:pf,CylinderBufferGeometry:Ob,CylinderGeometry:Hi,Cylindrical:lb,Data3DTexture:ja,DataArrayTexture:uo,DataTexture:Js,DataTexture2DArray:Lb,DataTexture3D:Rb,DataTextureLoader:Tp,DataUtils:Br,DecrementStencilOp:gm,DecrementWrapStencilOp:xm,DefaultLoadingManager:Ch,DepthFormat:Ii,DepthStencilFormat:_s,DepthTexture:Kf,DirectionalLight:Rh,DirectionalLightHelper:vb,DiscreteInterpolant:Mp,DodecahedronBufferGeometry:Fb,DodecahedronGeometry:bo,DoubleSide:Lt,DstAlphaFactor:Zd,DstColorFactor:Jd,DynamicCopyUsage:Im,DynamicDrawUsage:Qt,DynamicReadUsage:Lm,EdgesGeometry:cp,EllipseCurve:il,EqualDepth:rf,EqualStencilFunc:wm,EquirectangularReflectionMapping:xs,EquirectangularRefractionMapping:jr,Euler:dr,EventDispatcher:Hn,ExtrudeBufferGeometry:Bb,ExtrudeGeometry:wo,FileLoader:sn,Float16BufferAttribute:dg,Float32BufferAttribute:we,Float64BufferAttribute:fg,FloatType:dn,Fog:el,FogExp2:Qa,FramebufferTexture:Hc,FrontSide:Un,Frustum:Ka,GLBufferAttribute:ab,GLSL1:Nm,GLSL3:Bc,GreaterDepth:af,GreaterEqualDepth:of,GreaterEqualStencilFunc:Am,GreaterStencilFunc:Sm,GridHelper:mb,Group:ri,HalfFloatType:yn,HemisphereLight:Ap,HemisphereLightHelper:pb,HemisphereLightProbe:By,IcosahedronBufferGeometry:Ub,IcosahedronGeometry:Mo,ImageBitmapLoader:Lp,ImageLoader:ro,ImageUtils:ah,ImmediateRenderObject:Eb,IncrementStencilOp:mm,IncrementWrapStencilOp:vm,InstancedBufferAttribute:fn,InstancedBufferGeometry:di,InstancedInterleavedBuffer:ob,InstancedMesh:Ei,Int16BufferAttribute:hg,Int32BufferAttribute:ug,Int8BufferAttribute:ag,IntType:vf,InterleavedBuffer:pr,InterleavedBufferAttribute:kn,Interpolant:_r,InterpolateDiscrete:tr,InterpolateLinear:ys,InterpolateSmooth:Ca,InvertStencilOp:_m,KeepStencilOp:La,KeyframeTrack:En,LOD:tp,LatheBufferGeometry:zb,LatheGeometry:mr,Layers:po,LessDepth:sf,LessEqualDepth:Da,LessEqualStencilFunc:Mm,LessStencilFunc:bm,Light:Gi,LightProbe:ll,Line:ai,Line3:cb,LineBasicMaterial:kt,LineCurve:sl,LineCurve3:ap,LineDashedMaterial:yp,LineLoop:mh,LineSegments:Tn,LinearEncoding:zn,LinearFilter:it,LinearInterpolant:Th,LinearMipMapLinearFilter:hm,LinearMipMapNearestFilter:cm,LinearMipmapLinearFilter:li,LinearMipmapNearestFilter:$a,LinearSRGBColorSpace:Li,LinearToneMapping:uf,Loader:qt,LoaderUtils:Fn,LoadingManager:Eh,LoopOnce:Rf,LoopPingPong:If,LoopRepeat:Pf,LuminanceAlphaFormat:Mf,LuminanceFormat:wf,MOUSE:ts,Material:lt,MaterialLoader:cl,MathUtils:zf,Matrix3:Yt,Matrix4:Re,MaxEquation:mc,Mesh:st,MeshBasicMaterial:ht,MeshDepthMaterial:uh,MeshDistanceMaterial:dh,MeshLambertMaterial:xp,MeshMatcapMaterial:_p,MeshNormalMaterial:vp,MeshPhongMaterial:mp,MeshPhysicalMaterial:Mn,MeshStandardMaterial:Gn,MeshToonMaterial:gp,MinEquation:pc,MirroredRepeatWrapping:er,MixOperation:cf,MultiplyBlending:fc,MultiplyOperation:ho,NearestFilter:xt,NearestMipMapLinearFilter:lm,NearestMipMapNearestFilter:am,NearestMipmapLinearFilter:Kr,NearestMipmapNearestFilter:Zr,NeverDepth:tf,NeverStencilFunc:ym,NoBlending:oi,NoColorSpace:dm,NoToneMapping:bn,NormalAnimationBlendMode:Ya,NormalBlending:ds,NotEqualDepth:lf,NotEqualStencilFunc:Tm,NumberKeyframeTrack:rr,Object3D:ze,ObjectLoader:Ny,ObjectSpaceNormalMap:Ff,OctahedronBufferGeometry:kb,OctahedronGeometry:vr,OneFactor:$d,OneMinusDstAlphaFactor:Kd,OneMinusDstColorFactor:Qd,OneMinusSrcAlphaFactor:nh,OneMinusSrcColorFactor:jd,OrthographicCamera:ws,PCFShadowMap:eh,PCFSoftShadowMap:Hd,PMREMGenerator:zc,Path:to,PerspectiveCamera:pt,Plane:ti,PlaneBufferGeometry:Vb,PlaneGeometry:Vi,PlaneHelper:yb,PointLight:al,PointLightHelper:db,Points:gh,PointsMaterial:nl,PolarGridHelper:gb,PolyhedronBufferGeometry:Hb,PolyhedronGeometry:ui,PositionalAudio:Gy,PropertyBinding:Ye,PropertyMixer:Pp,QuadraticBezierCurve:_h,QuadraticBezierCurve3:yh,Quaternion:Pt,QuaternionKeyframeTrack:Bi,QuaternionLinearInterpolant:Sp,REVISION:Wa,RGBADepthPacking:Of,RGBAFormat:Xt,RGBAIntegerFormat:Cf,RGBA_ASTC_10x10_Format:Dc,RGBA_ASTC_10x5_Format:Rc,RGBA_ASTC_10x6_Format:Pc,RGBA_ASTC_10x8_Format:Ic,RGBA_ASTC_12x10_Format:Nc,RGBA_ASTC_12x12_Format:Oc,RGBA_ASTC_4x4_Format:wc,RGBA_ASTC_5x4_Format:Mc,RGBA_ASTC_5x5_Format:Sc,RGBA_ASTC_6x5_Format:Tc,RGBA_ASTC_6x6_Format:Ac,RGBA_ASTC_8x5_Format:Ec,RGBA_ASTC_8x6_Format:Cc,RGBA_ASTC_8x8_Format:Lc,RGBA_BPTC_Format:Fc,RGBA_ETC2_EAC_Format:bc,RGBA_PVRTC_2BPPV1_Format:_c,RGBA_PVRTC_4BPPV1_Format:xc,RGBA_S3TC_DXT1_Format:Ta,RGBA_S3TC_DXT3_Format:Aa,RGBA_S3TC_DXT5_Format:Ea,RGBFormat:bf,RGB_ETC1_Format:Lf,RGB_ETC2_Format:yc,RGB_PVRTC_2BPPV1_Format:vc,RGB_PVRTC_4BPPV1_Format:gc,RGB_S3TC_DXT1_Format:Sa,RGFormat:Af,RGIntegerFormat:Ef,RawShaderMaterial:Xr,Ray:fo,Raycaster:Ip,RectAreaLight:Ih,RedFormat:Sf,RedIntegerFormat:Tf,ReinhardToneMapping:df,RepeatWrapping:wn,ReplaceStencilOp:pm,ReverseSubtractEquation:Xd,RingBufferGeometry:Gb,RingGeometry:So,SRGBColorSpace:Dn,Scene:vo,ShaderChunk:Ge,ShaderLib:xn,ShaderMaterial:yt,ShadowMaterial:pp,Shape:gs,ShapeBufferGeometry:Wb,ShapeGeometry:To,ShapePath:Mb,ShapeUtils:On,ShortType:gf,Skeleton:xo,SkeletonHelper:ub,SkinnedMesh:ph,Source:hs,Sphere:ki,SphereBufferGeometry:Xb,SphereGeometry:xr,Spherical:$c,SphericalHarmonics3:Ep,SplineCurve:bh,SpotLight:ol,SpotLightHelper:hb,Sprite:ep,SpriteMaterial:fh,SrcAlphaFactor:th,SrcAlphaSaturateFactor:ef,SrcColorFactor:Yd,StaticCopyUsage:Pm,StaticDrawUsage:nr,StaticReadUsage:Cm,StereoCamera:zy,StreamCopyUsage:Dm,StreamDrawUsage:Em,StreamReadUsage:Rm,StringKeyframeTrack:Ss,SubtractEquation:Wd,SubtractiveBlending:dc,TOUCH:ns,TangentSpaceNormalMap:ci,TetrahedronBufferGeometry:qb,TetrahedronGeometry:Ao,Texture:mt,TextureLoader:en,TorusBufferGeometry:$b,TorusGeometry:Eo,TorusKnotBufferGeometry:Yb,TorusKnotGeometry:Co,Triangle:un,TriangleFanDrawMode:rh,TriangleStripDrawMode:Df,TrianglesDrawMode:um,TubeBufferGeometry:jb,TubeGeometry:Lo,UVMapping:qa,Uint16BufferAttribute:lh,Uint32BufferAttribute:ch,Uint8BufferAttribute:lg,Uint8ClampedBufferAttribute:cg,Uniform:Fh,UniformsGroup:rb,UniformsLib:pe,UniformsUtils:sr,UnsignedByteType:Oi,UnsignedInt248Type:fs,UnsignedIntType:Ci,UnsignedShort4444Type:xf,UnsignedShort5551Type:_f,UnsignedShortType:ih,VSMShadowMap:Ys,Vector2:$,Vector3:S,Vector4:Je,VectorKeyframeTrack:or,VideoTexture:np,WebGL1Renderer:Jf,WebGL3DRenderTarget:Km,WebGLArrayRenderTarget:Zm,WebGLCubeRenderTarget:Gf,WebGLMultipleRenderTargets:Jm,WebGLMultisampleRenderTarget:Cb,WebGLRenderTarget:Rt,WebGLRenderer:go,WebGLUtils:jf,WireframeGeometry:fp,WrapAroundEnding:Jr,ZeroCurvatureEnding:ls,ZeroFactor:qd,ZeroSlopeEnding:cs,ZeroStencilOp:fm,_SRGBAFormat:Na,sRGBEncoding:Xe},Symbol.toStringTag,{value:"Module"}));var qr=function(){var o=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),n(++o%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function n(h){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===h?"block":"none";o=h}var i=(performance||Date).now(),s=i,r=0,a=t(new qr.Panel("FPS","#0ff","#002")),l=t(new qr.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new qr.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){r++;var h=(performance||Date).now();if(l.update(h-i,200),h>=s+1e3&&(a.update(r*1e3/(h-s),100),s=h,r=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){i=this.end()},domElement:e,setMode:n}};qr.Panel=function(o,e,t){var n=1/0,i=0,s=Math.round,r=s(window.devicePixelRatio||1),a=80*r,l=48*r,c=3*r,h=2*r,u=3*r,d=15*r,f=74*r,g=30*r,p=document.createElement("canvas");p.width=a,p.height=l,p.style.cssText="width:80px;height:48px";var m=p.getContext("2d");return m.font="bold "+9*r+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,a,l),m.fillStyle=e,m.fillText(o,c,h),m.fillRect(u,d,f,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(u,d,f,g),{dom:p,update:function(v,x){n=Math.min(n,v),i=Math.max(i,v),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,a,d),m.fillStyle=e,m.fillText(s(v)+" "+o+" ("+s(n)+"-"+s(i)+")",c,h),m.drawImage(p,u+r,d,f-r,g,u,d,f-r,g),m.fillRect(u+f-r,d,r,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(u+f-r,d,r,s((1-v/x)*g))}}};const Zb=qr;class hl extends st{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new pt;const n=this,i=t.color!==void 0?new oe(t.color):new oe(8355711),s=t.textureWidth||512,r=t.textureHeight||512,a=t.clipBias||0,l=t.shader||hl.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new ti,u=new S,d=new S,f=new S,g=new Re,p=new S(0,0,-1),m=new Je,v=new S,x=new S,_=new Je,y=new Re,w=this.camera,M=new Rt(s,r,{samples:c,type:yn}),E=new yt({uniforms:sr.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=M.texture,E.uniforms.color.value=i,E.uniforms.textureMatrix.value=y,this.material=E,this.onBeforeRender=function(b,T,R){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(R.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),v.subVectors(d,f),v.dot(u)>0)return;v.reflect(u).negate(),v.add(d),g.extractRotation(R.matrixWorld),p.set(0,0,-1),p.applyMatrix4(g),p.add(f),x.subVectors(d,p),x.reflect(u).negate(),x.add(d),w.position.copy(v),w.up.set(0,1,0),w.up.applyMatrix4(g),w.up.reflect(u),w.lookAt(x),w.far=R.far,w.updateMatrixWorld(),w.projectionMatrix.copy(R.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(w.projectionMatrix),y.multiply(w.matrixWorldInverse),y.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(w.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const D=w.projectionMatrix;_.x=(Math.sign(m.x)+D.elements[8])/D.elements[0],_.y=(Math.sign(m.y)+D.elements[9])/D.elements[5],_.z=-1,_.w=(1+D.elements[10])/D.elements[14],m.multiplyScalar(2/m.dot(_)),D.elements[2]=m.x,D.elements[6]=m.y,D.elements[10]=m.z+1-a,D.elements[14]=m.w,n.visible=!1;const V=b.getRenderTarget(),U=b.xr.enabled,O=b.shadowMap.autoUpdate,z=b.outputEncoding,Y=b.toneMapping;b.xr.enabled=!1,b.shadowMap.autoUpdate=!1,b.outputEncoding=zn,b.toneMapping=bn,b.setRenderTarget(M),b.state.buffers.depth.setMask(!0),b.autoClear===!1&&b.clear(),b.render(T,w),b.xr.enabled=U,b.shadowMap.autoUpdate=O,b.outputEncoding=z,b.toneMapping=Y,b.setRenderTarget(V);const k=R.viewport;k!==void 0&&b.state.viewport(k),n.visible=!0},this.getRenderTarget=function(){return M},this.dispose=function(){M.dispose(),n.material.dispose()}}}hl.ReflectorShader={uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <encodings_fragment>

		}`};/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.16.0
 * @author George Michael Brower
 * @license MIT
 */class Bn{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Bn.nextNameID=Bn.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Bn.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback),this.updateDisplay()}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Kb extends Bn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Yc(o){let e,t;return(e=o.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const Jb={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:Yc,toHexString:Yc},oo={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},Qb={isPrimitive:!1,match:Array.isArray,fromHexString(o,e,t=1){const n=oo.fromHexString(o);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(255&n)/255*t},toHexString:([o,e,t],n=1)=>oo.toHexString(o*(n=255/n)<<16^e*n<<8^t*n<<0)},ew={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,e,t=1){const n=oo.fromHexString(o);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(255&n)/255*t},toHexString:({r:o,g:e,b:t},n=1)=>oo.toHexString(o*(n=255/n)<<16^e*n<<8^t*n<<0)},tw=[Jb,oo,Qb,ew];class nw extends Bn{constructor(e,t,n,i){var s;super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,tw.find(r=>r.match(s))),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Yc(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Zl extends Bn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{}),this.$disable=this.$button}}class iw extends Bn{constructor(e,t,n,i,s,r){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const a=r!==void 0;this.step(a?r:this._getImplicitStep(),a),this.updateDisplay()}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=e),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=h=>{const u=parseFloat(this.$input.value);isNaN(u)||(this._snapClampSetValue(u+h),this.$input.value=this.getValue())};let t,n,i,s,r,a=!1;const l=h=>{if(a){const u=h.clientX-t,d=h.clientY-n;Math.abs(d)>5?(h.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(u)>5&&c()}if(!a){const u=h.clientY-i;r-=u*this._step*this._arrowKeyMultiplier(h),s+r>this._max?r=this._max-s:s+r<this._min&&(r=this._min-s),this._snapClampSetValue(s+r)}i=h.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{const h=parseFloat(this.$input.value);isNaN(h)||this.setValue(this._clamp(h))}),this.$input.addEventListener("keydown",h=>{h.code==="Enter"&&this.$input.blur(),h.code==="ArrowUp"&&(h.preventDefault(),e(this._step*this._arrowKeyMultiplier(h))),h.code==="ArrowDown"&&(h.preventDefault(),e(this._step*this._arrowKeyMultiplier(h)*-1))}),this.$input.addEventListener("wheel",h=>{this._inputFocused&&(h.preventDefault(),e(this._step*this._normalizeMouseWheel(h)))}),this.$input.addEventListener("mousedown",h=>{t=h.clientX,n=i=h.clientY,a=!0,s=this.getValue(),r=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=d=>{const f=this.$slider.getBoundingClientRect();let g=(p=d,m=f.left,v=f.right,x=this._min,_=this._max,(p-m)/(v-m)*(_-x)+x);var p,m,v,x,_;this._snapClampSetValue(g)},t=d=>{e(d.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",n)};let i,s,r=!1;const a=d=>{d.preventDefault(),this._setDraggingStyle(!0),e(d.touches[0].clientX),r=!1},l=d=>{if(r){const f=d.touches[0].clientX-i,g=d.touches[0].clientY-s;Math.abs(f)>Math.abs(g)?a(d):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c))}else d.preventDefault(),e(d.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)},h=this._callOnFinishChange.bind(this);let u;this.$slider.addEventListener("mousedown",d=>{this._setDraggingStyle(!0),e(d.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",d=>{d.touches.length>1||(this._hasScrollBar?(i=d.touches[0].clientX,s=d.touches[0].clientY,r=!0):a(d),window.addEventListener("touchmove",l),window.addEventListener("touchend",c))}),this.$slider.addEventListener("wheel",d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const f=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+f),this.$input.value=this.getValue(),clearTimeout(u),u=setTimeout(h,400)})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class sw extends Bn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(s=>{const r=document.createElement("option");r.innerHTML=s,this.$select.appendChild(r)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class rw extends Bn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let fd=!1;class ul{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",injectStyles:r=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!fd&&r&&(function(l){const c=document.createElement("style");c.innerHTML=l;const h=document.querySelector("head link[rel=stylesheet], head style");h?document.head.insertBefore(c,h):document.head.appendChild(c)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),fd=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,i,s){if(Object(n)===n)return new sw(this,e,t,n);const r=e[t];switch(typeof r){case"number":return new iw(this,e,t,n,i,s);case"boolean":return new Kb(this,e,t);case"string":return new rw(this,e,t);case"function":return new Zl(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,r)}addColor(e,t,n=1){return new nw(this,e,t,n)}addFolder(e){return new ul({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Zl||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Zl)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}let Ri;const ow=o=>{Ri=new ul({container:o.container||document.body}),Ri.open()},aw=o=>{const e={intensity:o.rectLight.intensity};Ri.add(e,"intensity",0,10).onChange(function(t){o.rectLight.intensity=t}),Ri.open()},lw=o=>{const e={threshold:o.bloomPass.threshold,strength:o.bloomPass.strength,radius:o.bloomPass.radius};Ri.add(e,"threshold",0,5).onChange(function(t){o.bloomPass.threshold=t}),Ri.add(e,"strength",0,5).onChange(function(t){o.bloomPass.strength=t}),Ri.add(e,"radius",0,5).onChange(function(t){o.bloomPass.radius=t}),Ri.open()};class Bh{constructor(){ie(this,"tween")}stop(){this.tween&&this.tween.stop()}restart(){this.tween&&this.tween.start()}animateCamera(e,t,n,i,s=2e3,r){this.tween=new Se.Tween({x1:e.position.x,y1:e.position.y,z1:e.position.z,x2:t.target.x,y2:t.target.y,z2:t.target.z}),this.tween.to({x1:n.x,y1:n.y,z1:n.z,x2:i.x,y2:i.y,z2:i.z},s),this.tween.onUpdate(a=>{e.position.x=a.x1,e.position.y=a.y1,e.position.z=a.z1,t.target.x=a.x2,t.target.y=a.y2,t.target.z=a.z2,t.update()}),this.tween.onComplete(()=>{t.enabled=!0,r()}),this.tween.easing(Se.Easing.Cubic.InOut),this.tween.start()}}class cw{constructor(e,t,n){ie(this,"camera");ie(this,"scene");ie(this,"renderer");ie(this,"flag");ie(this,"flagWidth",6);ie(this,"flagHeight",4);ie(this,"segmentX",6);ie(this,"segmentY",6);ie(this,"horizontal",.3);ie(this,"vertical",.2);ie(this,"swing",.2);ie(this,"speed",.1);this.scene=e,this.camera=t,this.renderer=n;const i=new Ph("#999999",.2);this.scene.add(i)}initFlag(){const e=new Vi(this.flagWidth,this.flagHeight,this.segmentX,this.segmentY),n=new en().load(Pi("../assets/images/poster/","Lamborghini-Centenario-poster.jpg"));n.magFilter=it,n.minFilter=it;const i=new ht({map:n});this.flag=new st(e,i),this.flag.scale.multiplyScalar(.4),this.flag.position.set(-8.5,2,-1.05),this.flag.rotateY(Math.PI*.5),this.scene.add(this.flag)}flagUpdate(){for(let e=0,t=this.segmentY+1;e<t;e++)for(let n=0,i=this.segmentX+1;n<i;n++){const s=n*t+e,r=Date.now()*this.speed/50,a=this.flag.geometry.getAttribute("position"),l=a.array;l[s*3+2]=Math.sin(this.horizontal*n+this.vertical*e-r)*this.swing*n/4,a.needsUpdate=!0,this.flag.geometry.computeVertexNormals()}}}class hw{constructor(e,t){ie(this,"modal");ie(this,"videoMesh");ie(this,"videoSource");ie(this,"videoStatus","empty");ie(this,"videoMaterial");ie(this,"coverMaterial");ie(this,"coverLoadingMaterial");ie(this,"textureLoader");this.textureLoader=new en,this.modal=e,this.videoMesh=this.modal.getObjectByName(t),this.creatCoverTexture(),this.creatCoverLoadingTexture()}creatCoverTexture(){const e=this.textureLoader.load(Pi("../assets/images/poster/","视频封面.png"),()=>{this.setTexture()});e.center.set(.5,.5),e.repeat.set(.8,-.9),this.coverMaterial=new ht({map:e})}creatCoverLoadingTexture(){const e=this.textureLoader.load(Pi("../assets/images/home/","bg_member.jpg"));e.center.set(.5,.5),e.repeat.set(.8,-.9),this.coverLoadingMaterial=new ht({map:e})}creatVideoTexture(){return new Promise((e,t)=>{this.setVideoStatus("loading"),this.setTexture(),this.videoSource=document.createElement("video"),this.videoSource.src=Pi("../assets/video/","Lamborghini-Centenario-Lp-770-4.mp4"),this.videoSource.loop=!1,this.videoSource.addEventListener("canplaythrough",()=>{this.setVideoStatus("loaded"),console.log("视频纹理加载完成"),e("视频加载完成")}),this.videoSource.addEventListener("error",i=>{console.error("视频纹理加载失败"),t(i)}),this.videoSource.addEventListener("ended",()=>{this.setVideoStatus("played"),this.setTexture()});const n=new np(this.videoSource);n.center.set(.5,.5),n.repeat.set(.8,-.9),this.videoMaterial=new ht({color:16777215,map:n})})}setVideoStatus(e){this.videoStatus=e}setTexture(){switch(this.videoStatus){case"empty":this.videoMesh.material=this.coverMaterial;break;case"loading":this.videoMesh.material=this.coverLoadingMaterial;break;case"loaded":this.videoMesh.material=this.videoMaterial;break;case"played":this.videoMesh.material=this.coverMaterial;break}}async onPlay(){if(this.videoStatus==="played")this.rePlay();else if(this.videoStatus==="playing")return"视频正在播放";await this.creatVideoTexture().then(e=>{e==="视频加载完成"&&(this.setTexture(),this.videoSource.play(),this.setVideoStatus("playing"))}).catch(e=>{console.log("视频加载失败信息",e)})}rePlay(){this.videoStatus==="loaded"&&this.videoSource.play()}onPause(){this.videoStatus==="playing"&&(this.videoSource.pause(),this.setVideoStatus("played"),this.setTexture())}}const uw={isNetworkImageLoose:{pattern:/^(http:\/\/|https:\/\/).*$/,msg:"不是网络图片，不以http://或https://开头"},webglTransitionParent:{pattern:/^(webgl-transition-).*$/}};class dw{constructor(e){ie(this,"imageUrlList");ie(this,"imageList",[]);e.length,this.imageUrlList=e}asyncLoadImage(){let e=[];for(let t=0;t<this.imageUrlList.length;t++){let n=new Promise((i,s)=>{let r=new Image;uw.isNetworkImageLoose.pattern.test(this.imageUrlList[t])&&r.setAttribute("crossOrigin","Anonymous"),r.onload=function(){i(r)},r.src=this.imageUrlList[t]});e.push(n)}return Promise.all(e).then(t=>(this.imageList=t,console.log("loaded all images",t),Promise.resolve(t)))}}let fw=class{constructor(e){ie(this,"container");ie(this,"scene");ie(this,"camera");ie(this,"renderer");this.renderer=new go({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputEncoding=Xe,this.renderer.toneMapping=Xa,e?(this.container=document.getElementById(e),this.container.appendChild(this.renderer.domElement)):(this.renderer.domElement.style.position="absolute",this.renderer.domElement.style.zIndex="-999"),this.camera=new pt(40,window.innerWidth/window.innerHeight,.1,100),this.scene=new vo}animate(){requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera)}};new en;class pw{constructor(e,t,n,i){ie(this,"animationId",0);ie(this,"loadImageSelf",!1);ie(this,"vsSource","");ie(this,"fsSource","");ie(this,"uniforms");ie(this,"textures",[]);ie(this,"playIndex",0);ie(this,"playPicIndex",0);ie(this,"transitionList");ie(this,"carouselTime");ie(this,"playPicList",[]);ie(this,"playPicPreloadList",[]);ie(this,"scene");ie(this,"camera");ie(this,"renderer",null);ie(this,"mesh");ie(this,"shaderMaterial");ie(this,"clock");ie(this,"progress",0);ie(this,"shaderMaterialParam");this.checkInitResource(e,t,n);const s=new fw;this.scene=s.scene,this.camera=s.camera,this.renderer=s.renderer,this.mesh=this.mesh??e,this.clock=new yr,this.transitionList=t,nm(n)?this.playPicList=n:this.pasteImage(n),this.carouselTime=i||3e3}pasteImage(e){this.loadImageSelf=!0,this.playPicPreloadList=e}startCarousel(){this.shaderMaterial.uniforms.u_Sampler.value=this.textures[0],this.shaderMaterial.uniforms.u_Sampler1.value=this.textures[1],this.mesh.material=this.shaderMaterial;const e=()=>{var t;this.animationId=requestAnimationFrame(e),this.progress+=.01,this.shaderMaterial.uniforms.progress.value=this.progress,this.progress>=1&&(cancelAnimationFrame(this.animationId),this.progress=0,this.playPicIndex===this.playPicPreloadList.length-1?this.playPicIndex=0:this.playPicIndex+=1,this.playIndex===this.transitionList.length-1?this.playIndex=0:this.playIndex+=1,this.initShaderProgram(),this.shaderMaterial.uniforms.u_Sampler.value=this.textures[this.playPicIndex],this.shaderMaterial.uniforms.u_Sampler1.value=this.textures[this.playPicIndex+1===this.playPicPreloadList.length?0:this.playPicIndex+1],this.mesh.material=this.shaderMaterial,setTimeout(()=>{e()},this.carouselTime)),(t=this.renderer)==null||t.render(this.scene,this.camera)};e()}async main(){this.initShaderProgram(),!this.loadImageSelf&&await this.asyncLoadImage(),await this.asyncCreateTextures(),this.startCarousel()}initShaderProgram(){const e=this.transitionList[this.playIndex];this.vsSource=e.vsSource,this.fsSource=e.fsSource,this.uniforms=e.uniforms,this.shaderMaterialParam={uniforms:{u_Sampler:{value:null},u_Sampler1:{value:null},progress:{value:0}},vertexShader:this.vsSource,fragmentShader:this.fsSource},this.shaderMaterialParam.uniforms=Object.assign(this.shaderMaterialParam.uniforms,this.uniforms),this.shaderMaterial=new yt(this.shaderMaterialParam)}asyncLoadImage(){return new Promise(e=>{for(let t=0,n=this.playPicList.length;t<n;t++){const i=new Image;i.src=this.playPicList[t],i.setAttribute("crossOrigin","Anonymous"),i.onload=()=>{this.playPicPreloadList.push(i),this.playPicPreloadList.length===this.playPicList.length&&e(1)}}})}asyncCreateTextures(){const e=new en;return new Promise(t=>{for(let n=0,i=this.playPicPreloadList.length;n<i;n++)e.load(this.playPicPreloadList[n].src,s=>{s.center.set(.5,.5),s.flipY=!1,s.needsUpdate=!0,this.textures.push(s),this.textures.length===i&&t(1)})})}checkInitResource(e,t,n){if(!e){const i=new Vi(16,9),s=new Gn({color:"#ffffff",side:Lt});this.mesh=new st(i,s)}if(!(e instanceof st))throw new Error("初始化失败, mesh不是网格THREE.Mesh类型");if((t==null?void 0:t.length)<1)throw new Error("初始化失败, 至少需要1种转场动画");if((n==null?void 0:n.length)===0)throw new Error("初始化失败, 缺少参数playPicList转场图片");if((n==null?void 0:n.length)<2)throw new Error("至少需要2张图片")}}const Uh=`
  varying vec2 vUV;
  void main() {
      // 把uv数据传递给片元着色器
      vUV = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,mw={vsSource:Uh,fsSource:`
        #ifdef GL_ES
        precision mediump float;
        #endif
        uniform sampler2D u_Sampler;
        uniform sampler2D u_Sampler1;
        varying vec2 vUV;

        uniform float progress;
        const float PI = 3.14159265358;
        vec4 getToColor(vec2  uv){
            return texture2D(u_Sampler1,uv);
        }
        vec4 getFromColor(vec2 uv){
            return texture2D(u_Sampler,uv);
        }

        vec4 transition (vec2 uv) {
            float x = progress;
            x=smoothstep(.0,1.0,(x*2.0+uv.x-1.0));
            return mix(getFromColor((uv-.5)*(1.-x)+.5), getToColor((uv-.5)*x+.5), x);
        }

        void main() {
            gl_FragColor =  transition(vUV);
        }
    `,uniforms:{}},gw={vsSource:`
        varying vec2 vUV;
        void main() {
            // 到时候通过它把uv数据传递给片元
            vUV = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fsSource:`
        #ifdef GL_ES
        precision mediump float;
        #endif

        uniform float size; // = 0.04
        uniform float zoom; // = 50.0
        uniform float colorSeparation; // = 0.3


        uniform sampler2D u_Sampler;
        uniform sampler2D u_Sampler1;
        varying vec2 vUV;
        uniform float progress;

        vec4 getToColor(vec2  uv){
            return texture2D(u_Sampler1,uv);
        }
        vec4 getFromColor(vec2 uv){
            return texture2D(u_Sampler,uv);
        }


        vec4 transition (vec2 uv) {
            float inv = 1. - progress;
            vec2 disp = size*vec2(cos(zoom*uv.x), sin(zoom*uv.y));
            vec4 texTo = getToColor(uv + inv*disp);
            vec4 texFrom = vec4(
                getFromColor(uv + progress*disp*(1.0 - colorSeparation)).r,
                getFromColor(uv + progress*disp).g,
                getFromColor(uv + progress*disp*(1.0 + colorSeparation)).b,
                1.0);
            return texTo*progress + texFrom*inv;
        }

        void main() {
            gl_FragColor =  transition(vUV);
        }
    `,uniforms:{size:{value:.04},zoom:{value:50},colorSeparation:{value:.3}}},vw={vsSource:Uh,fsSource:`
        #ifdef GL_ES
        precision mediump float;
        #endif

        uniform float strength; // = 0.1


        uniform sampler2D u_Sampler;
        uniform sampler2D u_Sampler1;
        uniform float progress;
        varying vec2 vUV;

        vec4 getToColor(vec2  uv){
            return texture2D(u_Sampler1,uv);
        }
        vec4 getFromColor(vec2 uv){
            return texture2D(u_Sampler,uv);
        }


        vec4 transition (vec2 p) {
            vec4 ca = getFromColor(p);
            vec4 cb = getToColor(p);
            
            vec2 oa = (((ca.rg+ca.b)*0.5)*2.0-1.0);
            vec2 ob = (((cb.rg+cb.b)*0.5)*2.0-1.0);
            vec2 oc = mix(oa,ob,0.5)*strength;
            
            float w0 = progress;
            float w1 = 1.0-w0;
            return mix(getFromColor(p+oc*w0), getToColor(p-oc*w1), progress);
        }

        void main() {
            gl_FragColor =  transition(vUV);
        }
    `,uniforms:{strength:{value:.1}}},xw={vsSource:Uh,fsSource:`
        #ifdef GL_ES
        precision mediump float;
        #endif

        uniform float amplitude; // = 100.0
        uniform float speed; // = 50.0


        uniform sampler2D u_Sampler;
        uniform sampler2D u_Sampler1;
        uniform float progress;
        varying vec2 vUV;

        vec4 getToColor(vec2  uv){
            return texture2D(u_Sampler1,uv);
        }
        vec4 getFromColor(vec2 uv){
            return texture2D(u_Sampler,uv);
        }


        vec4 transition (vec2 uv) {
            vec2 dir = uv - vec2(.5);
            float dist = length(dir);
            vec2 offset = dir * (sin(progress * dist * amplitude - progress * speed) + .5) / 30.;
            return mix(
                getFromColor(uv + offset),
                getToColor(uv),
                smoothstep(0.2, 1.0, progress)
            );
        }

        void main() {
            gl_FragColor =  transition(vUV);
        }
    `,uniforms:{amplitude:{value:100},speed:{value:50}}},_w=o=>{const e=[Pi("../assets/images/lamborghini/black/","Lamborghini-Centenario-02.jpg"),Pi("../assets/images/lamborghini/black/","Lamborghini-Centenario-01.jpg"),Pi("../assets/images/lamborghini/black/","Lamborghini-Centenario-03.jpg")];new dw(e).asyncLoadImage().then(t=>{new pw(o,[vw,gw,mw,xw],t).main()})},Fa={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Ro{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const yw=new ws(-1,1,1,-1,0,1),zh=new De;zh.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3));zh.setAttribute("uv",new we([0,2,0,0,2,0],2));class Bp{constructor(e){this._mesh=new st(zh,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ba extends Ro{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=sr.clone(e.uniforms),this.material=new yt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Bp(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class pd extends Ro{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class bw extends Ro{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class md{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new $);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Rt(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Fa===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Ba===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Ba(Fa),this.clock=new yr}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}pd!==void 0&&(r instanceof pd?n=!0:r instanceof bw&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new ws(-1,1,1,-1,0,1);const Up=new De;Up.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3));Up.setAttribute("uv",new we([0,2,0,0,2,0],2));class ww extends Ro{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new oe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==void 0&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=r),e.autoClear=i}}const gd={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new oe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class lr extends Ro{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new $(e.x,e.y):new $(256,256),this.clearColor=new oe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Rt(s,r),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Rt(s,r);d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Rt(s,r);f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),r=Math.round(r/2)}gd===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const a=gd;this.highPassUniforms=sr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.texSize.value=new $(s,r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,Fa===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const h=Fa;this.copyUniforms=sr.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new yt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Qs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new oe,this.oldClearAlpha=1,this.basic=new ht,this.fsQuad=new Bp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.texSize.value=new $(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=lr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=lr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){return new yt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}lr.BlurDirectionX=new $(1,0);lr.BlurDirectionY=new $(0,1);const Mw={uniforms:{tDiffuse:{value:null},resolution:{value:new $(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`},Sw=`varying vec2 vUv;

    void main() {

        vUv = uv;

        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }`,Tw=`uniform sampler2D baseTexture;
uniform sampler2D bloomTexture;

varying vec2 vUv;

vec4 LinearToGamma(in vec4 value, in float gammaFactor) {
  return vec4(pow(value.xyz, vec3(1.0 / gammaFactor)), value.w);
}

void main() {
 

    gl_FragColor = ( LinearToGamma(texture2D( baseTexture, vUv ),2.0) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );

}`;class Aw{constructor(e){ie(this,"container");ie(this,"scene");ie(this,"camera");ie(this,"renderer");this.renderer=new go({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputEncoding=Xe,this.renderer.toneMapping=Xa,e?(this.container=document.getElementById(e),this.container.appendChild(this.renderer.domElement)):(this.renderer.domElement.style.position="absolute",this.renderer.domElement.style.zIndex="-999"),this.camera=new pt(40,window.innerWidth/window.innerHeight,.1,100),this.scene=new vo}animate(){requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera)}}za();class Ew{constructor(e,t,n,i){ie(this,"BLOOM_SCENE",1);ie(this,"darkMaterial");ie(this,"darkMaterialTrans");ie(this,"materials");ie(this,"bloomLayer");ie(this,"bloomParams");ie(this,"three");ie(this,"scene");ie(this,"camera");ie(this,"renderer");ie(this,"ramenShop");ie(this,"renderTarget");ie(this,"renderPass");ie(this,"fxaaPass");ie(this,"bloomPass");ie(this,"bloomComposer");ie(this,"finalPass");ie(this,"finalComposer");ie(this,"smaaPass");this.scene=t,this.camera=n,this.renderer=i,this.three=new Aw,this.ramenShop=e,this.setBloomConfig(),this.setBloomObjects(),this.setRenderTarget(),this.setPasses(),this.renderBloom()}setBloomConfig(){this.bloomLayer=new po,this.bloomLayer.set(this.BLOOM_SCENE),this.bloomParams=Object.create({strength:1.2,threshold:.75,radius:1}),this.darkMaterial=new ht({color:"black"}),this.darkMaterialTrans=new ht({color:"black",opacity:0,transparent:!0}),this.materials={}}setBloomObjects(){this.ramenShop.getObjectByName("WellLeft001").layers.enable(this.BLOOM_SCENE)}setRenderTarget(){this.renderTarget=new Rt(window.innerWidth,window.innerHeight,{minFilter:it,magFilter:it,format:Xt,encoding:Xe})}setPasses(){this.renderPass=new ww(this.scene,this.camera),this.fxaaPass=new Ba(Mw),this.bloomPass=new lr(new $(window.innerWidth,window.innerHeight),1.5,.4,.85);for(const[t,n]of Object.entries(this.bloomParams))this.bloomPass[t]=n;this.bloomPass.needsSwap=!0,this.bloomComposer=new md(this.renderer),this.bloomComposer.renderToScreen=!1,this.bloomComposer.addPass(this.renderPass),this.bloomComposer.addPass(this.bloomPass);const e=this.renderer.getPixelRatio();this.fxaaPass.material.uniforms.resolution.value.x=1/(window.innerWidth*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(window.innerHeight*e),this.fxaaPass.renderToScreen=!1,this.finalPass=new Ba(new yt({uniforms:{baseTexture:{value:null},bloomTexture:{value:this.bloomComposer.renderTarget2.texture}},vertexShader:Sw,fragmentShader:Tw,defines:{},precision:"lowp"}),"baseTexture"),this.finalPass.needsSwap=!0,this.finalComposer=new md(this.renderer,this.renderTarget),this.finalComposer.setSize(window.innerWidth,window.innerHeight),this.finalComposer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.finalComposer.addPass(this.renderPass),this.finalComposer.addPass(this.fxaaPass),this.finalComposer.addPass(this.finalPass),this.update()}renderBloom(){this.scene.traverse(e=>this.darkenNonBloomed(e)),this.bloomComposer.render(),this.scene.traverse(e=>this.restoreMaterial(e))}darkenNonBloomed(e){e instanceof st&&this.bloomLayer.test(e.layers)===!1&&(["镜头光晕Mesh-左车灯光晕点","镜头光晕Mesh-右车灯光晕点"].includes(e.name)?(this.materials[e.uuid]=e.material,e.material=this.darkMaterialTrans):(this.materials[e.uuid]=e.material,e.material=this.darkMaterial))}restoreMaterial(e){e instanceof st&&this.materials[e.uuid]&&(e.material=this.materials[e.uuid],delete this.materials[e.uuid])}update(){this.renderBloom(),this.finalComposer.render()}resize(){debugger;this.bloomComposer&&this.bloomComposer.setSize(window.innerWidth,window.innerHeight),this.bloomComposer&&this.bloomComposer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.finalComposer&&this.finalComposer.setSize(window.innerWidth,window.innerHeight),this.finalComposer&&this.finalComposer.setPixelRatio(Math.min(window.devicePixelRatio,2))}}const vd={width:window.innerWidth,height:window.innerHeight},Kn={cameraPosition:new S(4.25,1.4,4.5),controlsPosition:new S(0,.5,0)},Ur=Dt([{show:!0,type:"add",name:"查看介绍",meshName:"视频面板",controlPName:"p-宣传",event:"CameraAnimation"},{show:!0,type:"play",name:"播放宣传视频",meshName:"屏幕",controlPName:"p-宣传视频",event:"Play"},{show:!0,type:"add",name:"控制台",meshName:"Bonsai",controlPName:"p-控制台",event:"Control"},{show:!0,type:"add",name:"作者介绍",meshName:"作者面板",controlPName:"p-作者面板",event:"Control"},{show:!0,type:"add",name:"幻灯片",meshName:"Glass002",controlPName:"p-幻灯片",event:"Control"},{show:!0,type:"add",name:"旗帜",meshName:"旗帜",controlPName:"p-旗帜",event:"Control"}]),Cw={show:!0,type:"close",name:"退出",meshName:"",controlPName:"",event:""},zr=hr(),ao=o=>{var i;const e=(i=zr.scene)==null?void 0:i.getObjectByName(o),t=e==null?void 0:e.clone();let n=new S;return t==null||t.getWorldPosition(n),n},Lw=o=>"color"in o&&o.color instanceof oe,zp=(o=new Bh,e)=>new Promise(t=>{o.stop(),o.animateCamera(zr.camera,zr.controls,{x:Kn.cameraPosition.x,y:Kn.cameraPosition.y,z:Kn.cameraPosition.z},{x:Kn.controlsPosition.x,y:Kn.controlsPosition.y,z:Kn.controlsPosition.z},e??2400,()=>{var n;zr.camera.position.set(Kn.cameraPosition.x,Kn.cameraPosition.y,Kn.cameraPosition.z),(n=zr.controls)==null||n.update(),t(!0)})});function Rw(o,e=!1){const t=o.geometry;if(t instanceof De){const i=t.attributes.position.array,s=new Float32Array(i.length),r=o.matrixWorld;for(let f=0;f<i.length;f+=3){const g=new S(i[f],i[f+1],i[f+2]);g.applyMatrix4(r),s[f]=g.x,s[f+1]=g.y,s[f+2]=g.z}const a=new Sn().setFromArray(s),l=a.min,c=a.max,h=c.x===l.x?c.z-l.z:c.x-l.x,u=c.y-l.y,d=new Op(a,new oe(16711680));return!e&&o.add(d),{width:h,height:u}}else throw new Error("Mesh 的 Geometry 必须是 BufferGeometry 类型。")}const xd=new S,Pw=new Pt,_d=new S;class jc extends ze{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const Ln=new Re,Iw=new Re;class kp{constructor(e={}){const t=this;let n,i,s,r;const a={camera:{fov:0,style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformStyle="preserve-3d",c.style.pointerEvents="none",l.appendChild(c),this.getSize=function(){return{width:n,height:i}},this.render=function(g,p){const m=p.projectionMatrix.elements[5]*r;a.camera.fov!==m&&(l.style.perspective=p.isPerspectiveCamera?m+"px":"",a.camera.fov=m),g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let v,x;p.isOrthographicCamera&&(v=-(p.right+p.left)/2,x=(p.top+p.bottom)/2);const y=(p.isOrthographicCamera?"scale("+m+")translate("+h(v)+"px,"+h(x)+"px)"+u(p.matrixWorldInverse):"translateZ("+m+"px)"+u(p.matrixWorldInverse))+"translate("+s+"px,"+r+"px)";a.camera.style!==y&&(c.style.transform=y,a.camera.style=y),f(g,g,p)},this.setSize=function(g,p){n=g,i=p,s=n/2,r=i/2,l.style.width=g+"px",l.style.height=p+"px",c.style.width=g+"px",c.style.height=p+"px"};function h(g){return Math.abs(g)<1e-10?0:g}function u(g){const p=g.elements;return"matrix3d("+h(p[0])+","+h(-p[1])+","+h(p[2])+","+h(p[3])+","+h(p[4])+","+h(-p[5])+","+h(p[6])+","+h(p[7])+","+h(p[8])+","+h(-p[9])+","+h(p[10])+","+h(p[11])+","+h(p[12])+","+h(-p[13])+","+h(p[14])+","+h(p[15])+")"}function d(g){const p=g.elements;return"translate(-50%,-50%)"+("matrix3d("+h(p[0])+","+h(p[1])+","+h(p[2])+","+h(p[3])+","+h(-p[4])+","+h(-p[5])+","+h(-p[6])+","+h(-p[7])+","+h(p[8])+","+h(p[9])+","+h(p[10])+","+h(p[11])+","+h(p[12])+","+h(p[13])+","+h(p[14])+","+h(p[15])+")")}function f(g,p,m,v){if(g.isCSS3DObject){const x=g.visible===!0&&g.layers.test(m.layers)===!0;if(g.element.style.display=x===!0?"":"none",x===!0){g.onBeforeRender(t,p,m);let _;g.isCSS3DSprite?(Ln.copy(m.matrixWorldInverse),Ln.transpose(),g.rotation2D!==0&&Ln.multiply(Iw.makeRotationZ(g.rotation2D)),g.matrixWorld.decompose(xd,Pw,_d),Ln.setPosition(xd),Ln.scale(_d),Ln.elements[3]=0,Ln.elements[7]=0,Ln.elements[11]=0,Ln.elements[15]=1,_=d(Ln)):_=d(g.matrixWorld);const y=g.element,w=a.objects.get(g);if(w===void 0||w.style!==_){y.style.transform=_;const M={style:_};a.objects.set(g,M)}y.parentNode!==c&&c.appendChild(y),g.onAfterRender(t,p,m)}}for(let x=0,_=g.children.length;x<_;x++)f(g.children[x],p,m)}}}const Rr=hr(),Ua=class{constructor(e,t){ie(this,"url");ie(this,"meshName");ie(this,"dom");ie(this,"css3dObject");ie(this,"css3dRenderer");this.url=e,this.meshName=t||"",Ua.initialized||(Ua.initialized=!0,this.initConfig()),this.init()}initConfig(){this.css3dRenderer=new kp,this.css3dRenderer.setSize(window.innerWidth,window.innerHeight),this.css3dRenderer.domElement.style.position="absolute",this.css3dRenderer.domElement.style.top="0",document.getElementById("container").appendChild(this.css3dRenderer.domElement);const t=this.css3dRenderer.domElement;Rr.controls.domElement=t,Rr.controls.update()}init(){if(this.dom=document.createElement("iframe"),this.css3dObject=new jc(this.dom),this.dom.src=this.url,this.dom.style.border="none",this.dom.style.left="0",this.meshName){const e=ao(this.meshName);this.css3dObject.position.set(e==null?void 0:e.x,e==null?void 0:e.y,e==null?void 0:e.z)}else this.css3dObject.position.set(0,2,0);Rr.scene.add(this.css3dObject)}update(){var e;(e=this.css3dRenderer)==null||e.render(Rr.scene,Rr.camera)}};let Ia=Ua;ie(Ia,"initialized",!1);const Mi=[{index:0,name:"中心控制",uuid:"",state:!1,unfoldClass:{width:"500px",height:"300px",top:"10%",right:"70%"}},{index:1,name:"动画",uuid:"",state:!1,unfoldClass:{width:"500px",height:"300px",top:"10%",right:"70%"}},{index:2,name:"颜色",uuid:"",state:!1,unfoldClass:{width:"500px",height:"300px",top:"0%",right:"70%"}},{index:3,name:"贴图",uuid:"",state:!1,unfoldClass:{width:"500px",height:"300px",top:"50%",right:"70%"}},{index:4,name:"性能",uuid:"",state:!1,unfoldClass:{width:"500px",height:"300px",top:"20%",right:"70%"}},{index:5,name:"光照",uuid:"",state:!1,unfoldClass:{width:"500px",height:"300px",top:"30%",right:"70%"}},{index:6,name:"贴图",uuid:"",state:!1,unfoldClass:{width:"500px",height:"300px",top:"40%",right:"70%"}}],Gt=class{constructor(e){ie(this,"vertexShader");ie(this,"fragmentShader");ie(this,"blackHoleMaterial");this.setAvatar(),this.setUniform();const{width:t,height:n}=Rw(e,!0);this.setVertexShader(t,n),this.setFragmentShader(),this.createMaterial()}setAvatar(){const e=Pi("../assets/images/iframe-page/about-me/","avatar.jpg"),t=new en().load("/textures/iChannel0.png",()=>{Gt.iChannelResolution.width=t.image.width,Gt.iChannelResolution.height=t.image.height});Gt.myImageTexture=new en().load(e)}setUniform(){Gt.uniform={iTime:{value:0},iResolution:{value:new S(window.innerWidth,window.innerHeight,1)},iChannel0:{type:"t",value:new en().load("/textures/iChannel0.png")},iChannel1:{type:"t",value:new en().load("/textures/iChannel1.jpg")},iChannel2:{type:"t",value:new en().load("/textures/iChannel2.png")},avatariIChannel:{type:"t",value:Gt.myImageTexture},transparency:{value:1}},Gt.uniform.iChannel0.value.wrapS=Gt.uniform.iChannel0.value.wrapT=wn,Gt.uniform.iChannel1.value.wrapS=Gt.uniform.iChannel1.value.wrapT=wn,Gt.uniform.iChannel2.value.wrapS=Gt.uniform.iChannel2.value.wrapT=wn}setVertexShader(e,t){this.vertexShader=`
      varying vec2 vUv;
      void main() {
        // 比例应该是mesh的，而不是屏幕分辨率
        vec2 aspectRatio = vec2(${e.toFixed(6)} / ${t.toFixed(6)}, 1.0);
        vec2 scaledUV = uv * aspectRatio; // 对纹理坐标进行缩放
        vec2 offset = (vec2(1.0) - aspectRatio) * 0.5; // 计算偏移量
        // vUv = vec2(scaledUV.x, uv.y); // 保持星系的形状不变
        vUv = scaledUV + offset; // 对纹理坐标进行偏移
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `}setFragmentShader(){this.fragmentShader=`
    uniform vec3 iResolution;
    uniform float iTime;
    uniform float transparency;
    uniform sampler2D iChannel0;
    uniform sampler2D iChannel1;
    uniform sampler2D iChannel2;
    uniform sampler2D avatariIChannel;
    varying vec2 vUv;
  
    const float RETICULATION = 1.;  // 粉尘质地强度
    const float NB_ARMS = 5.;       // 星臂数
    const float COMPR = .1;         // 星臂内压缩程度
    const float SPEED = .1;
    const float GALAXY_R = 1./2.; // 星系磁盘样的半径
    const float BULB_R = 1./2.8; // 星系黑洞的半径
    const vec3 GALAXY_COL = vec3(.9,.9,1.); //(1.,.8,.5);
    const vec3 BULB_COL   = vec3(1.,1.0,1.0);
    const float BULB_BLACK_R = 1./4.; // 星系黑洞的另一个形状的半径
    const vec3 BULB_BLACK_COL   = vec3(0,0,0);
    const vec3 SKY_COL    = .5*vec3(.1,.3,.5);
    
    // 宏定义
    #define Pi 3.1415927
    #define t iTime
  
    // 基础噪音
    float tex(vec2 uv) 
    {
      float n = texture(iChannel0,uv).r;
      
      #define MODE 3  // 噪音类型
      #if MODE==0         // unsigned
        #define A 2.
        return n;
      #elif MODE==1       // signed
        #define A 3.
        return 2.*n-1.;
      #elif MODE==2       // bulbs
        #define A 3.
        return abs(2.*n-1.);
      #elif MODE==3       // wires
        #define A 1.5
        return 1.-abs(2.*n-1.);
      #endif
    }
  
  
    // 柏林湍流噪声+旋转
    float noise(vec2 uv)
    {
      float v=0.;
      float a=-SPEED*t,	co=cos(a),si=sin(a); 
      mat2 M = mat2(co,-si,si,co);
      const int L = 7;
      float s=1.;
      for (int i=0; i<L; i++)
      {
        uv = M*uv;
        float b = tex(uv*s);
        v += 1./s* pow(b,RETICULATION); 
        s *= 2.;
      }
      
      return v/2.;
    }
  
    bool keyToggle(int ascii) 
    {
      return (texture(iChannel2,vec2((.5+float(ascii))/256.,0.75)).x > 0.);
    }
  
    void mainImage( out vec4 fragColor, in vec2 fragCoord )
    {
      // 采样中心
      vec2 uv = vUv - vec2(0.5);
      vec3 col;
      
      // 螺旋形随距离拉伸
      float rho = length(uv); // 极坐标
      float ang = atan(uv.y,uv.x);
      float shear = 2.*log(rho); // 螺旋层数/圈数
      float c = cos(shear), s=sin(shear);
      mat2 R = mat2(c,-s,s,c);
  
      // 星系概要
      float r; // 星系磁盘样
      r = rho/GALAXY_R; float dens = exp(-r*r);
      r = rho/BULB_R;	  float bulb = exp(-r*r);
      r = rho/BULB_BLACK_R; float bulb_black = exp(-r*r);
      float phase = NB_ARMS*(ang-shear);
      // arms = spirals compression
      ang = ang-COMPR*cos(phase)+SPEED*t;
      uv = rho*vec2(cos(ang),sin(ang));
      // 拉伸后的纹理必须变暗 d(new_ang)/d(ang)
      float spires = 1.+NB_ARMS*COMPR*sin(phase);
      dens *= .7*spires;
      
      // gaz texture
      float gaz = noise(.09*1.2*R*uv);
      float gaz_trsp = pow((1.-gaz*dens),2.);
  
      // stars
      // 屏幕高度与第一个纹理高度之间的比例值，用于调整纹理采样的位置
      // iChannelResolution是一个uniform数组，表示各个纹理（iChannel0、iChannel1等）的分辨率
      float ratio = .8*iResolution.y/${Gt.iChannelResolution.height.toFixed(1)};
      float stars1 = texture(iChannel1,ratio*uv+.5).r, // M*uv
            stars2 = texture(iChannel0,ratio*uv+.5).r,
          stars = pow(1.-(1.-stars1)*(1.-stars2),5.);
      
      // 键盘控制效果交互
      if (keyToggle(49)) gaz_trsp = 1./1.7;
      if (keyToggle(50)) stars = 0.;
      if (keyToggle(51)) bulb = 0.;
      if (keyToggle(52)) dens = .3*spires;
      
      // 混合所有效果	
      col = mix(SKY_COL,
            gaz_trsp*(1.7*GALAXY_COL) + 1.2*stars, 
            dens);
      col = mix(col, 2.*BULB_COL,1.2* bulb);
  
      col = mix(col, 1.2*BULB_BLACK_COL, 2.0*bulb_black);
  
      // 头像
      // 将头像裁剪成圆形
      vec2 center = vec2(0.5, 0.5); // 头像中心点的uv坐标
      float radius = 0.2; // 圆形半径
      float dist = distance(vUv, center);
      float avatarMask = step(dist, radius); // 判断是否在头像圆形区域内，是则为1.0，否则为0.0
  
      // if (dist > radius) {
      //     discard; // 不在圆形内的像素丢弃
      // }
  
      // 缩小头像
      float scale = 2.5; // 缩小比例
      vec2 scaledUV = (vUv - center) * scale + center;
      scaledUV.y = 1.0 - scaledUV.y; // 反转头像的Y轴方向

      // 计算随时间变化的旋转角度
      float rotationSpeed = 0.5; // 旋转速度
      float angle = t * rotationSpeed;

      // 计算旋转中心的偏移
      float centerX = 0.5; // 旋转中心X坐标
      float centerY = 0.5; // 旋转中心Y坐标

      // 逆时针旋转头像
      vec2 rotatedUV = vec2(
        // 计算绕旋转中心逆时针旋转后的 X 坐标。scaledUV.x - centerX 表示将头像的 X 坐标相对于旋转中心进行偏移，然后通过 cos(angle) 和 sin(angle) 计算了旋转后的 X 坐标。
        cos(angle) * (scaledUV.x - centerX) - sin(angle) * (scaledUV.y - centerY),
        // 计算绕旋转中心逆时针旋转后的 Y 坐标。scaledUV.y - centerY 表示将头像的 Y 坐标相对于旋转中心进行偏移，然后通过 sin(angle) 和 cos(angle) 计算了旋转后的 Y 坐标。
        sin(angle) * (scaledUV.x - centerX) + cos(angle) * (scaledUV.y - centerY)
      ) + vec2(centerX, centerY);
      // 用于将旋转后的坐标还原到以 (centerX, centerY) 为中心的坐标系中。因为在计算旋转后的坐标时，是相对于 (centerX, centerY) 进行旋转的，所以最后需要添加 vec2(centerX, centerY) 这个补偿
  
      // 获取缩小后的头像颜色
      vec3 avatarColor = texture(avatariIChannel, rotatedUV).rgb;
      
      // 添加头像边缘的渐变效果
      float avatarAlpha = texture(avatariIChannel, vUv).a;
      float gradient = smoothstep(radius, radius - 0.02, dist); // 控制圆形边缘的渐变程度
      avatarMask *= gradient;
  
      // 将头像设置于最上层
      col = mix(col, avatarColor, avatarAlpha * avatarMask);
  
      fragColor = vec4(col, transparency);
    }
    
    void main( void ) {
        mainImage(gl_FragColor, vUv * iResolution.xy);
        // 直接将加载成功的贴图以图片纹理展示
        // vec4 texColor = texture(iChannel2, vUv);
        // gl_FragColor = texColor;
    }
  `}createMaterial(){this.blackHoleMaterial=new yt({uniforms:Gt.uniform,vertexShader:this.vertexShader,fragmentShader:this.fragmentShader})}};let ii=Gt;ie(ii,"uniform"),ie(ii,"iChannelResolution",{width:0,height:0,x:0,y:0}),ie(ii,"myImageTexture");function Dw(o){return{all:o=o||new Map,on:function(e,t){var n=o.get(e);n?n.push(t):o.set(e,[t])},off:function(e,t){var n=o.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):o.set(e,[]))},emit:function(e,t){var n=o.get(e);n&&n.slice().map(function(i){i(t)}),(n=o.get("*"))&&n.slice().map(function(i){i(e,t)})}}}const kh=Dw(),Nw=o=>(Ui("data-v-676220a7"),o=o(),zi(),o),Ow=["id"],Fw={class:"title"},Bw=Nw(()=>he("div",null,[he("a",{class:"min",href:"javascript:;",title:"最小化"}),he("a",{class:"max",href:"javascript:;",title:"最大化"}),he("a",{class:"revert",href:"javascript:;",title:"还原"}),he("a",{class:"close",href:"javascript:;",title:"关闭"})],-1)),Uw=ka('<div class="resizeL" data-v-676220a7></div><div class="resizeT" data-v-676220a7></div><div class="resizeR" data-v-676220a7></div><div class="resizeB" data-v-676220a7></div><div class="resizeLT" data-v-676220a7></div><div class="resizeTR" data-v-676220a7></div><div class="resizeBR" data-v-676220a7></div><div class="resizeLB" data-v-676220a7></div>',8),zw={class:"content"},kw=jt({name:"floatWindow"}),Vw=jt({...kw,props:{floatWindow:{type:Object,default:()=>null}},setup(o){const e=o,t=Dt("自适应"),n=Dt({left:0,top:0,width:0,height:0});let i=0,s=0,r=250,a=124;const l=5;var c={byId:function(f){return typeof f=="string"?document.getElementById(f):f},byClass:function(f,g){for(var p=[],m=new RegExp("(^| )"+f+"( |$)"),v=this.byTagName("*",g),x=0;x<v.length;x++)m.test(v[x].className)&&p.push(v[x]);return p},byTagName:function(f,g){return(g||document).getElementsByTagName(f)}};function h(f,g){var p=c.byClass("min",f)[0],m=c.byClass("max",f)[0],v=c.byClass("revert",f)[0],x=c.byClass("close",f)[0];g=g||f,g.style.cursor="move",g.onmousedown=function(y){var y=y||window.event;return i=y.clientX-f.offsetLeft,s=y.clientY-f.offsetTop,document.onmousemove=function(M){var M=M||window.event,E=M.clientX-i,b=M.clientY-s,T=document.documentElement.clientWidth-f.offsetWidth-l,R=document.documentElement.clientHeight-f.offsetHeight;return E<=0&&(E=0),b<=0&&(b=0),E>=T&&(E=T),b>=R&&(b=R),f.style.left=E+"px",f.style.top=b+"px",!1},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null},this.setCapture&&this.setCapture(),!1},m.onclick=function(){n.value.left=f.style.left,n.value.top=f.style.top;let _=!1;(Number(f.style.width.split("px")[0])>document.documentElement.clientWidth||Number(f.style.height.split("px")[0])>document.documentElement.clientHeight)&&(_=!0),t.value!=="最小化"&&!_&&(n.value.height=f.style.height,n.value.width=f.style.width),f.style.top=f.style.left=0,f.style.width=document.documentElement.clientWidth-2+"px",f.style.height=document.documentElement.clientHeight-2+"px",this.style.display="none";let y=c.byClass("min",f)[0];y.style.display="none",v.style.display="block",t.value="最大化"},v.onclick=function(){t.value="上一次历史",f.style.top=n.value.top,f.style.left=n.value.left,f.style.width=n.value.width,f.style.height=n.value.height,this.style.display="none",m.style.display="block";const _=c.byClass("resizeBR",f)[0];_.style.display="block";let y=c.byClass("min",f)[0];y.style.display="block"},p.onclick=function(){if(d.value=!d.value,t.value==="最小化"){f.style.width=n.value.width,f.style.height=n.value.height;const _=c.byClass("resizeBR",f)[0];_.style.display="block",t.value="上一次历史"}else{t.value!=="最大化"&&(n.value.width=f.style.width,n.value.height=f.style.height),f.style.height="33px",f.style.overflow="hidden";const _=c.byClass("resizeBR",f)[0];_.style.display="none",t.value="最小化"}},x.onclick=function(){t.value="关闭",f.style.display="none",d.value=!d.value},p.onmousedown=m.onmousedown=x.onmousedown=function(_){this.onfocus=function(){this.blur()},(_||window.event).cancelBubble=!0}}function u(f,g,p,m,v,x){g.onmousedown=function(y){var y=y||window.event,w=y.clientX-g.offsetLeft,M=y.clientY-g.offsetTop,E=f.offsetTop,b=f.offsetLeft,T=f.offsetWidth,R=f.offsetHeight;return document.onmousemove=function(V){var V=V||window.event,U=V.clientX-w,O=V.clientY-M,z=document.documentElement.clientWidth-f.offsetLeft-2,Y=document.documentElement.clientHeight-5,k=p?T-U:g.offsetWidth+U,F=m?R-O:g.offsetHeight+O;return p&&(f.style.left=b+U+"px"),m&&(f.style.top=E+O+"px"),k<r&&(k=r),k>z&&(k=z),v||(f.style.width=k+"px"),F<a&&(F=a),F>Y&&(F=Y),x||(f.style.height=F+"px"),(p&&k==r||m&&F==a)&&(document.onmousemove=null),m&&F==Y&&(document.onmousemove=null),!1},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null;let D=document.getElementById(`window${e.floatWindow.uuid}`);const V=document.documentElement.clientWidth-Number(D==null?void 0:D.offsetWidth)-l;D&&V<(D==null?void 0:D.offsetLeft)&&D&&(D.style.left=V+"px")},!1}}const d=Dt(!1);return kh.on("onBusRevolver",f=>{const g=f;if(g.uuid===e.floatWindow.uuid){d.value=!d.value;var p=document.getElementById(`window${e.floatWindow.uuid}`),m=c.byClass("title",p)[0],v=c.byClass("resizeL",p)[0],x=c.byClass("resizeT",p)[0],_=c.byClass("resizeR",p)[0],y=c.byClass("resizeB",p)[0],w=c.byClass("resizeLT",p)[0],M=c.byClass("resizeTR",p)[0],E=c.byClass("resizeBR",p)[0],b=c.byClass("resizeLB",p)[0];if(h(p,m),u(p,w,!0,!0,!1,!1),u(p,M,!1,!0,!1,!1),u(p,E,!1,!1,!1,!1),u(p,b,!0,!1,!1,!1),u(p,v,!0,!1,!1,!0),u(p,x,!1,!0,!0,!1),u(p,_,!1,!1,!1,!0),u(p,y,!1,!1,!0,!1),d.value&&p){p.style.display="block",p.style.width=`${r}px`,p.style.height="auto",p.style.left=document.documentElement.clientWidth-p.offsetWidth+"px",p.style.top=document.documentElement.clientHeight-p.offsetHeight+"px";const T=c.byClass("resizeBR",p)[0];T.style.display="block";let R=c.byClass("min",p)[0];R.style.display="block"}d.value?It(`#window${g.uuid}`).animate({left:document.documentElement.clientWidth-Number(p==null?void 0:p.offsetWidth)-l,top:g.unfoldClass.top}):It(`#window${e.floatWindow.uuid}`).animate({left:document.documentElement.clientWidth-Number(p==null?void 0:p.offsetWidth)-l,top:document.documentElement.clientHeight+20})}}),(f,g)=>o.floatWindow.uuid?(qe(),at("div",{key:0,id:`window${o.floatWindow.uuid}`,class:"drag"},[he("div",Fw,[he("h2",null,Ut(o.floatWindow.name)+"-"+Ut(Pe(t))+" "+Ut(Pe(n).width)+Ut(Pe(n).height),1),Bw]),Uw,he("div",zw,[Jp(f.$slots,"content",{},void 0,!0)])],8,Ow)):$t("",!0)}});const cr=Vn(Vw,[["__scopeId","data-v-676220a7"]]),Vh=o=>(Ui("data-v-76cf17f9"),o=o(),zi(),o),Hw={class:"menu menu--circle"},Gw=Vh(()=>he("input",{id:"menu__active",type:"checkbox"},null,-1)),Ww={for:"menu__active",class:"menu__active"},Xw=Vh(()=>he("div",{class:"icon"},[he("div",{class:"hamburger"})],-1)),qw=[Xw],$w=Vh(()=>he("input",{id:"degree--up-0",type:"radio",name:"arrow--up"},null,-1)),Yw={class:"menu__listings"},jw={key:0,class:"circle"},Zw={class:"placeholder"},Kw={class:"upside"},Jw=["onClick"],Qw={class:"menu__arrow menu__arrow--button"},e1={for:"degree--up-0"},t1={for:"degree--up-1"},n1=jt({__name:"index",props:{revolverList:{type:Array,default:()=>[]}},setup(o){const e=l=>{kh.emit("onBusRevolver",l)};let t=!1;const n=()=>{t=!t,t?(It(".hamburger").addClass("hamburger-active"),It(".menu__toggle").addClass("menu__toggle-active"),It(".menu__listings").addClass("menu__listings-transform"),It(".menu__arrow").addClass("menu__arrow-active")):(It(".hamburger").removeClass("hamburger-active"),It(".menu__toggle").removeClass("menu__toggle-active"),It(".menu__listings").removeClass("menu__listings-transform"),It(".menu__listings").removeAttr("style"),It(".menu__arrow").removeClass("menu__arrow-active"))};let i=10,s="";const r=l=>{s=l,a()},a=im(()=>{s==="up"?(It(".menu__listings").animate({},1e3,()=>{It(".menu__listings").removeClass("menu__listings-transform"),It(".menu__listings").css({transform:`rotate(${i+90}deg)`})}),i+=90):(It(".menu__listings").animate({},1e3,()=>{It(".menu__listings").removeClass("menu__listings-transform"),It(".menu__listings").css({transform:`rotate(${i-90}deg)`})}),i-=90)},150);return Va(()=>{}),(l,c)=>(qe(),at("section",Hw,[Gw,he("label",Ww,[he("div",{class:"menu__toggle",onClick:n},qw),$w,he("div",Yw,[o.revolverList.length>0?(qe(),at("ul",jw,[(qe(!0),at(vs,null,Yr(o.revolverList,(h,u)=>(qe(),at("li",{key:u},[he("div",Zw,[he("div",Kw,[he("span",{class:"button",onClick:d=>e(h)},Ut(h.name?h.name.slice(0,1):u),9,Jw)])])]))),128))])):$t("",!0)]),he("div",Qw,[he("ul",null,[he("li",null,[he("label",e1,[he("div",{class:"arrow to--up",onClick:c[0]||(c[0]=h=>r("up"))})])]),he("li",null,[he("label",t1,[he("div",{class:"arrow to--down",onClick:c[1]||(c[1]=h=>r("down"))})])])])])])]))}});const i1=Vn(n1,[["__scopeId","data-v-76cf17f9"]]),s1=o=>(Ui("data-v-50e1f68b"),o=o(),zi(),o),r1={class:"three-js--font"},o1=s1(()=>he("div",{id:"svg-text",class:"svg"},[he("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"581",height:"190",viewBox:"0 0 581 190"},[he("path",{d:"M19.5781,64.3438L16.8438,60L47.2344,60L45.3594,73L62.5,73L59.6094,86.9375L43.625,86.9375L38.875,120.062L52.7031,120.062L49.9688,134L19.5781,134Q15.4062,134,12.8125,131.266Q10.2188,128.516,11.2344,124.344L16.8438,86.9375L5.76562,86.9375L7.20312,73L18.4375,73L19.5781,64.3438Z","fill-opacity":"0"}),he("path",{d:"M110.7969,45L106.7656,74L150.9688,74L142.6094,135L114.9688,135L121.875,87.9375L105.3125,87.9375L98.4062,135L70.76562,135L83.1406,49.1875L80.4062,45L110.7969,45Z","fill-opacity":"0"}),he("path",{d:"M195.875,74L193.1406,93.375L212.5781,74L240.2344,74L193.1406,115.641L190.4062,135L162.76562,135L170.8281,78.0469L167.9375,74L195.875,74Z","fill-opacity":"0"}),he("path",{d:"M317.2969,111.938L273.0781,111.938L271.6406,123.062L310.375,123.062L317.2969,117.578L313.1094,137L252.3438,137Q248.1719,137,246.07812,134.234Q244,131.469,244,127.266L250.9062,76L322.7656,76L317.2969,111.938ZM277.1094,89.9375L275.8125,98L292.375,98L293.8125,89.9375L277.1094,89.9375Z","fill-opacity":"0"}),he("path",{d:"M407.2969,109.938L363.0781,109.938L361.6406,121.062L400.375,121.062L407.2969,115.578L403.1094,135L342.3438,135Q338.1719,135,336.07812,132.234Q334,129.469,334,125.266L340.9062,74L412.7656,74L407.2969,109.938ZM367.1094,87.9375L365.8125,96L382.375,96L383.8125,87.9375L367.1094,87.9375Z","fill-opacity":"0"}),he("path",{d:"M452.7031,120.062L461.0625,57.5156L456.875,52L488.7031,52L479.0625,124.312Q477.9062,128.5,475.0156,131.25Q472.1406,134,467.9688,134L422.3125,134L425.0625,114.562L430.6719,120.062L452.7031,120.062Z","fill-opacity":"0"}),he("path",{d:"M543.6719,120.062L544.9688,110L503.5,110L509.1094,73L575.3594,73L572.6094,90.75L548.7188,90.75L549.1406,86.9375L532.5781,86.9375L531.1406,96.0625L571.3125,96.0625L568.4375,124.203Q567.4375,128.438,563.8281,131.219Q560.2344,134,556.0625,134L500.76562,134L503.5,114.359L507.6719,120.062L543.6719,120.062Z","fill-opacity":"0"})])],-1)),a1=[o1],l1=jt({__name:"three-js-font-svg",props:{sourcesNum:{type:Number,default:0},hasBeenLoaded:{type:Boolean,default:!1}},emits:["onSvgComplete"],setup(o,{emit:e}){const t=["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"];let n=0;return Va(()=>{const i=document.querySelector("#svg-text");i&&t.forEach(s=>{i.addEventListener(s,()=>{console.log(`${s}svg动画完成`),n+=1,n===8&&e("onSvgComplete")},!1)})}),(i,s)=>(qe(),at("div",r1,a1))}});const c1=Vn(l1,[["__scopeId","data-v-50e1f68b"]]);class lo extends st{constructor(){super(lo.Geometry,new ht({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const e=new S,t=new S,n=new Hc(16,16,Xt),i=new Hc(16,16,Xt),s=lo.Geometry,r=new Xr({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),a=new Xr({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),l=new st(s,r),c=[],h=as.Shader,u=new Xr({uniforms:{map:{value:null},occlusionMap:{value:i},color:{value:new oe(16777215)},scale:{value:new $},screenPosition:{value:new S}},vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Qs,transparent:!0,depthWrite:!1}),d=new st(s,u);this.addElement=function(v){c.push(v)};const f=new $,g=new $,p=new Dp,m=new Je;this.onBeforeRender=function(v,x,_){v.getCurrentViewport(m);const y=m.w/m.z,w=m.z/2,M=m.w/2;let E=16/m.w;if(f.set(E*y,E),p.min.set(m.x,m.y),p.max.set(m.x+(m.z-16),m.y+(m.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(_.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(_.projectionMatrix),g.x=m.x+e.x*w+w-8,g.y=m.y+e.y*M+M-8,p.containsPoint(g))){v.copyFramebufferToTexture(g,n);let b=r.uniforms;b.scale.value=f,b.screenPosition.value=e,v.renderBufferDirect(_,null,s,r,l,null),v.copyFramebufferToTexture(g,i),b=a.uniforms,b.scale.value=f,b.screenPosition.value=e,v.renderBufferDirect(_,null,s,a,l,null);const T=-e.x*2,R=-e.y*2;for(let D=0,V=c.length;D<V;D++){const U=c[D],O=u.uniforms;O.color.value.copy(U.color),O.map.value=U.texture,O.screenPosition.value.x=e.x+T*U.distance,O.screenPosition.value.y=e.y+R*U.distance,E=U.size/m.w;const z=m.w/m.z;O.scale.value.set(E*z,E),u.uniformsNeedUpdate=!0,v.renderBufferDirect(_,null,s,u,d,null)}}},this.dispose=function(){r.dispose(),a.dispose(),u.dispose(),n.dispose(),i.dispose();for(let v=0,x=c.length;v<x;v++)c[v].texture.dispose()}}}class as{constructor(e,t=1,n=0,i=new oe(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=i}}as.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};lo.Geometry=function(){const o=new De,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new pr(e,5);return o.setIndex([0,1,2,0,2,3]),o.setAttribute("position",new kn(t,3,0,!1)),o.setAttribute("uv",new kn(t,2,3,!1)),o}();const h1={class:"class"},u1=jt({__name:"animation-control",props:{floatWindow:{type:Object,default:()=>{}},boothModel:{type:[ze,null],default:()=>{}},carModel:{type:[ze,null],default:()=>{}},hdrTexture:{type:[mt],default:()=>{}}},setup(o){const e=o,t=e.floatWindow;let n;const i=Ha(),s=Ga(),r=hr(),a=Dt(""),l=new Bh;let c=Nn(()=>r.scene),h=Nn(()=>r.camera),u=Nn(()=>r.controls||null),d;const f=Dt(!1),g=Dt(!0),p=Dt("");let m,v={booth1:null,booth2:null,booth3:null,booth4:null};const x=Nn(()=>s.carModel),_=Nn(()=>s.source),y=Nn(()=>s.wheelStart),w=Dt({openDoor:!1,openTailWing:!1,openCoolingGlass:!1,openWheelSeeding:!1,openWheelSeedingBroke:!1,openLight:!1,openBooth:!1}),M=()=>{var ae,ue,X;w.value.openWheelSeeding&&(l.stop(),w.value.openWheelSeedingBroke=!0,w.value.openWheelSeeding=!1);const k=(ae=x.value)==null?void 0:ae.getObjectByName("挡风玻璃");let F=(ue=x.value)==null?void 0:ue.getObjectByName("左门");const I={degX:w.value.openDoor?Math.PI/3:0,degY:w.value.openDoor?-Math.PI/10:0,degZ:w.value.openDoor?Math.PI/10:0},N=new Se.Tween(I);N.to({degX:w.value.openDoor?0:Math.PI/3,degY:w.value.openDoor?0:-Math.PI/10,degZ:w.value.openDoor?0:Math.PI/10},500),N.easing(Se.Easing.Sinusoidal.InOut).repeat(0),N.onUpdate(function(){F==null||F.rotation.set(I.degX,I.degY,I.degZ)});let ee=(X=x.value)==null?void 0:X.getObjectByName("右门");const j={degX:w.value.openDoor?Math.PI/3:0,degY:w.value.openDoor?Math.PI/10:0,degZ:w.value.openDoor?-Math.PI/10:0},te=new Se.Tween(j);te.to({degX:w.value.openDoor?0:Math.PI/3,degY:w.value.openDoor?0:Math.PI/10,degZ:w.value.openDoor?0:-Math.PI/10},500),te.easing(Se.Easing.Sinusoidal.InOut).repeat(0),te.onUpdate(function(){ee==null||ee.rotation.set(j.degX,j.degY,j.degZ)}),te.onComplete(()=>{w.value.openDoor=!w.value.openDoor,!w.value.openDoor&&k.material instanceof lt&&(k.material.side=Un)}),!w.value.openDoor&&k.material instanceof lt&&(k.material.side=Lt),N.start(),te.start()},E=()=>{var te,ae,ue,X,Te,be,Ce,de;w.value.openWheelSeeding&&(l.stop(),w.value.openWheelSeedingBroke=!0,w.value.openWheelSeeding=!1);const k=(ae=(te=x.value)==null?void 0:te.getObjectByName("车后中观测点"))==null?void 0:ae.position,F=(X=(ue=x.value)==null?void 0:ue.getObjectByName("尾翼"))==null?void 0:X.position,I=(be=(Te=x.value)==null?void 0:Te.getObjectByName("尾翼位移点1"))==null?void 0:be.position,N=(de=(Ce=x.value)==null?void 0:Ce.getObjectByName("尾翼位移点2"))==null?void 0:de.position,ee={px:F==null?void 0:F.x,py:F==null?void 0:F.y,pz:F==null?void 0:F.z},j=new Se.Tween(ee);j.to({px:w.value.openTailWing?N==null?void 0:N.x:I==null?void 0:I.x,py:w.value.openTailWing?N==null?void 0:N.y:I==null?void 0:I.y,pz:w.value.openTailWing?N==null?void 0:N.z:I==null?void 0:I.z},500),j.easing(Se.Easing.Sinusoidal.InOut).repeat(0),j.onUpdate(function(){F==null||F.set(Number(ee.px),Number(ee.py),Number(ee.pz))}),j.onComplete(()=>{w.value.openTailWing=!w.value.openTailWing}),l.stop(),a.value==="TailWing"?j.start():l.animateCamera(h.value,u.value,{x:k==null?void 0:k.x,y:k==null?void 0:k.y,z:k==null?void 0:k.z},{x:I==null?void 0:I.x,y:I==null?void 0:I.y,z:I==null?void 0:I.z},1500,()=>{a.value="TailWing",j.start()})},b=()=>{var ee,j,te;w.value.openWheelSeeding&&(l.stop(),w.value.openWheelSeedingBroke=!0,w.value.openWheelSeeding=!1);const k=(j=(ee=x.value)==null?void 0:ee.getObjectByName("车后中观测点"))==null?void 0:j.position,F=(te=x.value)==null?void 0:te.getObjectByName("发动机玻璃"),I={degX:w.value.openCoolingGlass?-Math.PI/18:0},N=new Se.Tween(I);N.to({degX:w.value.openCoolingGlass?0:-Math.PI/18},500),N.easing(Se.Easing.Sinusoidal.InOut).repeat(0),F&&N.onUpdate(function(){F.rotation.x=I.degX}),N.onComplete(()=>{w.value.openCoolingGlass=!w.value.openCoolingGlass}),a.value==="coolingGlass"?N.start():l.animateCamera(h.value,u.value,{x:k==null?void 0:k.x,y:k==null?void 0:k.y,z:Number(k==null?void 0:k.z)+1},{x:F==null?void 0:F.position.x,y:F==null?void 0:F.position.y,z:F==null?void 0:F.position.z},1500,()=>{a.value="coolingGlass",N.start()})};let T=0;const R=()=>{w.value.openWheelSeeding=!w.value.openWheelSeeding,w.value.openWheelSeeding?(D(),w.value.openWheelSeedingBroke=!1):(T=0,a.value="",w.value.openWheelSeedingBroke=!1)},D=()=>{var I,N;if(!w.value.openWheelSeeding)return;const k=["车前中观测点","车前右观测点","车中右观测点","车后右观测点","车后中观测点","车后左观测点","车中左观测点","车前左观测点"];let F;F=(N=(I=x.value)==null?void 0:I.getObjectByName(k[T]))==null?void 0:N.position,l.animateCamera(h.value,u.value,{x:F==null?void 0:F.x,y:F==null?void 0:F.y,z:F==null?void 0:F.z},{x:0,y:0,z:0},2500,()=>{!w.value.openWheelSeeding||w.value.openWheelSeedingBroke||(a.value="WheelSeeding",T<k.length-1?T+=1:T=0,w.value.openWheelSeeding&&D())})},V=(k,F,I,N,ee,j,te,ae,ue)=>{const X=new al(16777215,1.5,10);X.name=`镜头光晕-${k.name}`,X.color.setHSL(F,I,N),X.position.set(ee,j,te),k.attach(X),ae.encoding=Xe,ue.encoding=Xe;const Te=new lo;Te.name=`镜头光晕Mesh-${k.name}`,Te.material=new Gn({color:"#ff0000",opacity:0,transparent:!0,depthTest:!1,depthWrite:!1,side:Lt}),Te.addElement(new as(ae,500,0,X.color)),Te.addElement(new as(ue,60,.6)),Te.addElement(new as(ue,70,.7)),Te.addElement(new as(ue,120,.9)),Te.addElement(new as(ue,70,1)),X.add(Te)},U=()=>{var I,N,ee,j;const k=(I=x.value)==null?void 0:I.getObjectByName("左车灯光晕点"),F=(N=x.value)==null?void 0:N.getObjectByName("右车灯光晕点");if(w.value.openLight)k==null||k.remove(c.value.getObjectByName(`镜头光晕-${k.name}`)),F==null||F.remove(c.value.getObjectByName(`镜头光晕-${F.name}`)),c.value.environment=n,s.carModel.traverse(te=>{["Object_87","Object_97","Object_98","Object_99"].includes(te.name)&&(te.layers.mask=1)});else{w.value.openWheelSeeding&&(l.stop(),w.value.openWheelSeedingBroke=!0,w.value.openWheelSeeding=!1);const te=new S;k==null||k.getWorldPosition(te);const ae=new S;if(F==null||F.getWorldPosition(ae),a.value==="openLight")c.value.environment=null,V(k,.55,.9,.5,te.x,te.y,te.z,_.value.texture.textureFlare0,_.value.texture.textureFlare3),V(F,.55,.9,.5,ae.x,ae.y,ae.z,_.value.texture.textureFlare0,_.value.texture.textureFlare3),s.carModel.traverse(ue=>{["Object_87","Object_97","Object_98","Object_99"].includes(ue.name)&&ue.layers.enable(1)});else{let ue;ue=(j=(ee=x.value)==null?void 0:ee.getObjectByName("车前中观测点"))==null?void 0:j.position,l.animateCamera(h.value,u.value,{x:ue==null?void 0:ue.x,y:ue==null?void 0:ue.y,z:ue==null?void 0:ue.z},{x:0,y:0,z:0},1500,()=>{V(k,.55,.9,.5,te.x,te.y,te.z,_.value.texture.textureFlare0,_.value.texture.textureFlare3),V(F,.55,.9,.5,ae.x,ae.y,ae.z,_.value.texture.textureFlare0,_.value.texture.textureFlare3),c.value.environment=null,a.value="openLight",s.carModel.traverse(X=>{["Object_87","Object_97","Object_98","Object_99"].includes(X.name)&&X.layers.enable(1)})})}}w.value.openLight=!w.value.openLight},O=()=>{var se;const[F,I,N,ee,j,te,ae]=[(se=d==null?void 0:d.getObjectByName("原点"))==null?void 0:se.position,d==null?void 0:d.getObjectByName("车承台父节点"),d==null?void 0:d.getObjectByName("车闸父节点"),d==null?void 0:d.getObjectByName("车闸001"),d==null?void 0:d.getObjectByName("车闸002"),d==null?void 0:d.getObjectByName("车闸003"),d==null?void 0:d.getObjectByName("车闸004")];let ue=new S,X=new S,Te=new S,be=new S;N&&ee&&j&&te&&ae&&([ue,X,Te,be]=[new S(N.position.x-ee.position.x,ee.position.y,N.position.z-ee.position.z),new S(N.position.x-j.position.x,j.position.y,N.position.z-j.position.z),new S(N.position.x-te.position.x,te.position.y,N.position.z-te.position.z),new S(N.position.x-ae.position.x,ae.position.y,N.position.z-ae.position.z)]),v.booth1||(v.booth1=ue.clone(),v.booth2=new S(Number(X.x.toFixed(4)),Number(X.y.toFixed(4)),Number(X.z.toFixed(4))),v.booth3=Te.clone(),v.booth4=new S(Number(be.x.toFixed(4)),Number(be.y.toFixed(4)),Number(be.z.toFixed(4))));const[Ce,de,ke,Q]=[ue,new S(Number(X.x.toFixed(4)),Number(X.y.toFixed(4)),Number(X.z.toFixed(4))),Te,new S(Number(be.x.toFixed(4)),Number(be.y.toFixed(4)),Number(be.z.toFixed(4)))].map(le=>new S(le.x*3,le.y,le.z*3)),K={x:Math.abs(ue.x),z:Math.abs(ue.z)},re=new Se.Tween(K);re.to({x:Math.abs(w.value.openBooth?v.booth1.x:Ce.x),z:Math.abs(w.value.openBooth?v.booth1.z:Ce.z)},3e3),re.easing(Se.Easing.Sinusoidal.InOut).repeat(0),re.onUpdate(function(){ee==null||ee.position.set(K.x,ue.y,K.z)});const ye={x:X.x,z:X.z},ce=new Se.Tween(ye);ce.to({x:w.value.openBooth?Math.abs(v.booth2.x):de.x,z:w.value.openBooth?-v.booth2.z:de.z},3e3),ce.easing(Se.Easing.Sinusoidal.InOut).repeat(0),ce.onUpdate(function(){j==null||j.position.set(ye.x,X.y,ye.z)});const Oe={x:-Te.x,z:-Te.z},Ee=new Se.Tween(Oe);Ee.to({x:w.value.openBooth?-v.booth3.x:-ke.x,z:w.value.openBooth?-v.booth3.z:-ke.z},3e3),Ee.easing(Se.Easing.Sinusoidal.InOut).repeat(0),Ee.onUpdate(function(){te==null||te.position.set(Oe.x,Te.y,Oe.z)});const Ae={x:be.x,z:be.z},$e=new Se.Tween(Ae);$e.to({x:w.value.openBooth?-v.booth4.x:Q.x,z:w.value.openBooth?Math.abs(v.booth4.z):Q.z},3e3),$e.easing(Se.Easing.Sinusoidal.InOut).repeat(0),$e.onUpdate(function(){ae==null||ae.position.set(Ae.x,be.y,Ae.z)});const je={y:(w.value.openBooth,N==null?void 0:N.position.y)},L=new Se.Tween(je);L.to({y:w.value.openBooth?Number(N==null?void 0:N.position.y)+.05:Number(N==null?void 0:N.position.y)-.05},1e3),L.easing(Se.Easing.Sinusoidal.InOut).repeat(0),N&&L.onUpdate(function(){N.position.y=je.y}).onComplete(()=>{w.value.openBooth=!w.value.openBooth,g.value=!0}),m||(m=I==null?void 0:I.position.clone());const A={y:I==null?void 0:I.position.y},q=new Se.Tween(A);q.to({y:w.value.openBooth?m.y:F==null?void 0:F.y},3e3),q.easing(Se.Easing.Sinusoidal.InOut).repeat(0),I&&q.onUpdate(function(){I.position.y=Number(A.y)}).onComplete(()=>{w.value.openBooth=!w.value.openBooth,f.value=!0,i.boothReady=!0,g.value=!0}),g.value=!1,w.value.openBooth?(p.value="dowm",f.value=!1,i.boothReady=!1,q.start(),q.onComplete(()=>{re.start(),ce.start(),Ee.start(),$e.start(),re.onComplete(()=>{L.start()})})):(p.value="up",L.start(),L.onComplete(()=>{re.start(),ce.start(),Ee.start(),$e.start()}),re.onComplete(()=>{q.start()}))},z=()=>{s.wheelStart=!s.wheelStart},Y=()=>{l.stop(),w.value.openWheelSeedingBroke=!1,w.value.openWheelSeeding=!1,zp()};return Xh(()=>e.boothModel,k=>{k&&(d=k)}),Xh(()=>e.hdrTexture,k=>{k&&(n=k)}),(k,F)=>{const I=Od;return qe(),vn(cr,{"float-window":Pe(t),class:"color-control"},{content:Bt(()=>[he("div",h1,[Wt(I,{disabled:!Pe(f),onClick:M},{default:Bt(()=>[cn(Ut(Pe(w).openDoor?"关门":"开门"),1)]),_:1},8,["disabled"]),Wt(I,{disabled:!Pe(f),onClick:E},{default:Bt(()=>[cn(Ut(Pe(w).openTailWing?"降下尾翼":"升起尾翼"),1)]),_:1},8,["disabled"]),Wt(I,{disabled:!Pe(f),onClick:b},{default:Bt(()=>[cn(Ut(Pe(w).openCoolingGlass?"降下散热玻璃":"升起散热玻璃"),1)]),_:1},8,["disabled"]),Wt(I,{disabled:!Pe(f),onClick:R},{default:Bt(()=>[cn(Ut(!Pe(w).openWheelSeedingBroke&&!Pe(w).openWheelSeeding?"开始轮播":Pe(w).openWheelSeedingBroke?"继续轮播":"停止轮播"),1)]),_:1},8,["disabled"]),Wt(I,{disabled:!Pe(f),onClick:Y},{default:Bt(()=>[cn("视角复位")]),_:1},8,["disabled"]),Wt(I,{onClick:U},{default:Bt(()=>[cn(Ut(Pe(w).openLight?"关灯":"开灯"),1)]),_:1}),Wt(I,{disabled:!Pe(g),onClick:O},{default:Bt(()=>[cn(Ut(Pe(w).openBooth?"降下展台":"升起展台"),1)]),_:1},8,["disabled"]),Wt(I,{disabled:!Pe(f),onClick:z},{default:Bt(()=>[cn(Ut(Pe(y)?"关闭引擎":"启动引擎"),1)]),_:1},8,["disabled"])])]),_:1},8,["float-window"])}}});const d1=Vn(u1,[["__scopeId","data-v-da93c260"]]),f1={class:"class"},p1=jt({__name:"center-control",props:{floatWindow:{type:Object,default:()=>{}}},setup(o){const e=o,t=za(),n=e.floatWindow,i=()=>{t.mode=t.mode==="day"?"night":"day"};return(s,r)=>{const a=Od;return qe(),vn(cr,{"float-window":Pe(n),class:"center-control"},{content:Bt(()=>[he("div",f1,[Wt(a,{onClick:i},{default:Bt(()=>[cn(Ut(Pe(t).mode==="day"?"夜晚模式":"白天模式"),1)]),_:1})])]),_:1},8,["float-window"])}}});const m1=Vn(p1,[["__scopeId","data-v-026f27d8"]]);const g1=o=>(Ui("data-v-e790e031"),o=o(),zi(),o),v1={class:"item-head align-center"},x1={class:"sub-title"},_1={key:0,class:"class"},y1=["disabled","onChange"],b1=g1(()=>he("br",null,null,-1)),w1=jt({name:"colorControl"}),M1=jt({...w1,props:{floatWindow:{type:Object,default:()=>{}}},setup(o){const e=o,t=Dt([{key:"tyre",pureColor:!1,name:"轮胎结构",meshNameList:[],material:"",level:1,children:[{key:"ring",name:"圆环",meshNameList:["Object_10002","Object_10","Object_10003","Object_10001"],material:"ringMaterial",originMaterial:null,level:2,children:[]},{key:"wheelHub",name:"轮毂",meshNameList:["Object_4002","Object_6002","Object_4","Object_6","Object_4003","Object_6003","Object_4001","Object_6001"],material:"wheelHubMaterial",originMaterial:null,level:2,children:[]},{key:"hubDecoration",name:"轮毂装饰",meshNameList:["Object_5003","Object_5001","Object_5004","Object_5002"],material:"hubDecorationMaterial",originMaterial:null,level:2,children:[]},{key:"caliper",name:"卡钳",meshNameList:["左前轮碟刹","左后轮碟刹","右前轮碟刹","右后轮碟刹"],material:"caliperMaterial",originMaterial:null,level:2,children:[]},{key:"discBrake",name:"碟刹",meshNameList:["Object_7002","Object_7","Object_7003","Object_7001"],material:"discBrakeMaterial",originMaterial:null,level:2,children:[]}]},{key:"carBody",pureColor:!1,name:"车身结构",meshNameList:[],material:"",level:1,children:[{key:"body",name:"车身",meshNameList:["车身","前轮连接板","左车门内部","左车门外部","右车门内部","右车门外部","Object_68002","挡叶"],material:"bodyMaterial",originMaterial:null,level:2,children:[]}]},{key:"carFrame",pureColor:!1,name:"车架结构",meshNameList:[],material:"",level:1,children:[{key:"frame",name:"车架",meshNameList:["车架"],material:"frameMaterial",originMaterial:null,level:2,children:[]}]}]);let n,i,s,r,a,l,c,h,u;n=new Mn({color:16711680,metalness:1,roughness:.5,clearcoat:1,clearcoatRoughness:.03,sheen:.5,side:Lt}),h=new Gn({color:16777215,metalness:1,roughness:.5}),u=new Mn({color:16777215,metalness:.25,roughness:0,transmission:1}),i=n.clone(),s=n.clone(),r=n.clone(),a=n.clone(),l=n.clone(),c=n.clone();const d={ringMaterial:n,wheelHubMaterial:i,hubDecorationMaterial:s,caliperMaterial:r,discBrakeMaterial:a,bodyMaterial:l,frameMaterial:c,detailsMaterial:h,glassMaterial:u},f=Ga(),g=Ha();Fd();const p=Nn(()=>g.boothReady),m=e.floatWindow;class v{apply(E,b){d[b.material].color.set(E.target.value),b.meshNameList.forEach(T=>{var D,V;const R=(D=f.carModel)==null?void 0:D.getObjectByName(T);R.material instanceof lt&&(!b.originMaterial&&(b.originMaterial=R.material.clone()),((V=f.carModel)==null?void 0:V.getObjectByName(T)).material=d[b.material])})}}class x{apply(E,b){b.meshNameList.forEach(T=>{var D;const R=(D=f.carModel)==null?void 0:D.getObjectByName(T);if(!b.originMaterial&&Lw(R.material))R.material.color.set(E.target.value);else{const V=b.originMaterial.clone();V.color.set(E.target.value),R.material=V}})}}const _={pure:new v,origin:new x},y=(M,E,b)=>{_[b].apply(M,E)},w=(M,E,b)=>{y(M,b,E.pureColor?"pure":"origin")};return(M,E)=>{const b=Qp;return qe(),vn(cr,{"float-window":Pe(m),class:"color-control"},{content:Bt(()=>[(qe(!0),at(vs,null,Yr(Pe(t),(T,R)=>(qe(),at("div",{key:R,class:"color-control__item mb20 pb20 bb1-cf"},[he("div",v1,[he("p",x1,Ut(T.name),1),Wt(b,{checked:T.pureColor,"onUpdate:checked":D=>T.pureColor=D},{default:Bt(()=>[cn("纯色模式")]),_:2},1032,["checked","onUpdate:checked"])]),T.children&&T.children.length>0?(qe(),at("div",_1,[(qe(!0),at(vs,null,Yr(T.children,(D,V)=>(qe(),at("span",{key:V,class:"colorPicker"},[he("input",{disabled:!Pe(p),type:"color",value:"#ffffff",class:Bd({"not-allow":!Pe(p)}),onChange:U=>w(U,T,D)},null,42,y1),b1,cn(" "+Ut(D.name),1)]))),128))])):$t("",!0)]))),128))]),_:1},8,["float-window"])}}});const S1=Vn(M1,[["__scopeId","data-v-e790e031"]]),T1=o=>(Ui("data-v-db3ed7da"),o=o(),zi(),o),A1=T1(()=>he("canvas",{id:"fabric-canvas",width:"1024",height:"1024"},null,-1)),E1=jt({name:"textureControl"}),C1=jt({...E1,props:{floatWindow:{type:Object,default:()=>{}}},setup(o){const e=o,t=e.floatWindow;Ha(),Ga();const n=hr();Ud();const i=Dt(!1);let s;function r(){i.value=!0,s=new kp,s.setSize(window.innerWidth,window.innerHeight),s.domElement.style.position="absolute",s.domElement.style.top="0",document.getElementById("container").appendChild(s.domElement);var l=s.domElement;n.controls.domElement=l,n.controls.update();var c="http://threejs.org/",h=document.createElement("iframe");h.src=c,h.style.width="1366px",h.style.height="619px",h.style.border="none",h.style.left="0";let u=new jc(h);u.position.set(5,5,-5),u.scale.multiplyScalar(.001),u.rotateY(-Math.PI*.5),n.scene.add(u);var d="http://127.0.0.1:5173/#/author-introduction",f=document.createElement("iframe");f.id="iframe2",f.src=d,f.style.width="1366px",f.style.height="700px",f.style.border="none",f.style.left="0";let g=new jc(f);const p=ao("作者面板");g.position.set(p.x,p.y,p.z),g.scale.multiplyScalar(.0026),g.rotateY(-Math.PI*.5),n.scene.add(g)}return requestAnimationFrame(function a(l){requestAnimationFrame(a),s==null||s.render(n.scene,n.camera)}),kh.on("onBusRevolver",a=>{const l=a;!i.value&&l.uuid===e.floatWindow.uuid&&r()}),(a,l)=>(qe(),vn(cr,{"float-window":Pe(t),class:"texture-control"},{content:Bt(()=>[A1]),_:1},8,["float-window"]))}});const L1=Vn(C1,[["__scopeId","data-v-db3ed7da"]]),Po=o=>(Ui("data-v-1e4aac49"),o=o(),zi(),o),R1=["id"],P1={class:"Hp__hexagon-wrapper"},I1={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 40",class:"outline"},D1=["id"],N1=Po(()=>he("rect",{"data-name":"mask",width:"36",height:"40"},null,-1)),O1=[N1],F1={transform:"translate(2, 2)"},B1=Po(()=>he("path",{d:"M0,8,16,0,32,8V28L16,36,0,28Z","vector-effect":"non-scaling-stroke",opacity:"0.25","stroke-width":"2",stroke:"#fff",fill:"none"},null,-1)),U1=["clip-path"],z1=Po(()=>he("path",{d:"M0,8,16,0,32,8V28L16,36,0,28Z","vector-effect":"non-scaling-stroke",opacity:"1","stroke-width":"2",stroke:"#fff",fill:"none"},null,-1)),k1=[z1],V1=ka('<div class="Hp__hexagonHaloWrapper" data-v-1e4aac49><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 40" class="hexagonHalo" data-v-1e4aac49><defs data-v-1e4aac49><clipPath data-v-1e4aac49><rect data-name="mask" width="36" height="40" data-v-1e4aac49></rect></clipPath></defs><g transform="translate(2, 2)" data-v-1e4aac49><path d="M0,8,16,0,32,8V28L16,36,0,28Z" vector-effect="non-scaling-stroke" opacity="0.25" stroke-width="1.5" stroke="#fff" fill="none" data-v-1e4aac49></path><g clip-path="url(#null)" data-v-1e4aac49><path d="M0,8,16,0,32,8V28L16,36,0,28Z" vector-effect="non-scaling-stroke" opacity="1" stroke-width="1.5" stroke="#fff" fill="none" data-v-1e4aac49></path></g></g></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 40" class="hexagonHalo" data-v-1e4aac49><defs data-v-1e4aac49><clipPath data-v-1e4aac49><rect data-name="mask" width="36" height="40" data-v-1e4aac49></rect></clipPath></defs><g transform="translate(2, 2)" data-v-1e4aac49><path d="M0,8,16,0,32,8V28L16,36,0,28Z" vector-effect="non-scaling-stroke" opacity="0.25" stroke-width="1.5" stroke="#fff" fill="none" data-v-1e4aac49></path><g clip-path="url(#null)" data-v-1e4aac49><path d="M0,8,16,0,32,8V28L16,36,0,28Z" vector-effect="non-scaling-stroke" opacity="1" stroke-width="1.5" stroke="#fff" fill="none" data-v-1e4aac49></path></g></g></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 40" class="hexagonHalo" data-v-1e4aac49><defs data-v-1e4aac49><clipPath data-v-1e4aac49><rect data-name="mask" width="36" height="40" data-v-1e4aac49></rect></clipPath></defs><g transform="translate(2, 2)" data-v-1e4aac49><path d="M0,8,16,0,32,8V28L16,36,0,28Z" vector-effect="non-scaling-stroke" opacity="0.25" stroke-width="1.5" stroke="#fff" fill="none" data-v-1e4aac49></path><g clip-path="url(#null)" data-v-1e4aac49><path d="M0,8,16,0,32,8V28L16,36,0,28Z" vector-effect="non-scaling-stroke" opacity="1" stroke-width="1.5" stroke="#fff" fill="none" data-v-1e4aac49></path></g></g></svg></div>',1),H1={key:0,width:"1em",height:"1em",viewBox:"0 0 100 100",class:"Hp__icon"},G1=Po(()=>he("path",{d:"M20 31l30-15 30 15v37.5l-30 15-30-15z",fill:"#fff"},null,-1)),W1=Po(()=>he("g",{"data-name":"plus",fill:"none",stroke:"#000","stroke-width":"4"},[he("path",{"data-name":"Line 2",d:"M50 39v22"}),he("path",{"data-name":"Line 5",d:"M61 50H39"})],-1)),X1=[G1,W1],q1={key:1,width:"1em",height:"1em",viewBox:"0 0 100 100",class:"Hp__icon"},$1=ka('<defs data-v-1e4aac49><clipPath id="close_svg__a" data-v-1e4aac49><path d="M0 0h100v100H0z" data-v-1e4aac49></path></clipPath></defs><g fill="none" stroke="#fff" stroke-width="4" clip-path="url(#close_svg__a)" data-v-1e4aac49><path data-name="Line 28" d="M39.653 60.347l20.693-20.693" data-v-1e4aac49></path><path data-name="Line 29" d="M39.653 39.653l20.693 20.693" data-v-1e4aac49></path></g>',2),Y1=[$1],j1={key:2,width:"1em",height:"1em",viewBox:"0 0 100 100",class:"Hp__icon"},Z1=ka('<defs data-v-1e4aac49><clipPath id="audio_svg__a" data-v-1e4aac49><path d="M0 0h100v100H0z" data-v-1e4aac49></path></clipPath></defs><g clip-path="url(#audio_svg__a)" data-v-1e4aac49><path d="M20 31l30-15 30 15v37.5l-30 15-30-15z" fill="#fff" data-v-1e4aac49></path><path data-name="Icon open-audio-spectrum" d="M51.571 37v25.143h3.143V37zm-6.285 3.143V59h3.143V40.143zm12.571 3.143v12.571H61V43.286zM39 46.429v6.286h3.143v-6.286z" data-v-1e4aac49></path></g>',2),K1=[Z1],J1={class:"Hp__label Hp__label-bottom"},Q1={class:"Hp__line"},eM=jt({__name:"svg-button",props:{modelValue:{type:Object,default:()=>({show:!0,type:"add",name:"按钮说明文字"})}},emits:["update:modelValue"],setup(o,{emit:e}){const t=o,n=Dt(hc()),i=Nn(()=>`hp-${n.value}`),s=Nn(()=>`url(#${n.value})`),r=Nn({get(){return new Proxy(t.modelValue,{set(a,l,c){return e("update:modelValue",{...a,[l]:c}),!0}})},set(a){e("update:modelValue",{...t.modelValue,show:a})}});return(a,l)=>kr((qe(),at("button",{id:Pe(i),type:"button",class:"html-hp-btn Hp__wrapper font-10-700 align-center justify-center isHotPoint hp-visible"},[he("div",P1,[(qe(),at("svg",I1,[he("defs",null,[he("clipPath",{id:Pe(n)},O1,8,D1)]),he("g",F1,[B1,he("g",{"clip-path":Pe(s)},k1,8,U1)])])),V1]),Pe(r).type==="add"?(qe(),at("svg",H1,X1)):$t("",!0),Pe(r).type==="close"?(qe(),at("svg",q1,Y1)):$t("",!0),Pe(r).type==="play"?(qe(),at("svg",j1,K1)):$t("",!0),he("span",J1,[he("span",Q1,Ut(Pe(r).name),1)])],8,R1)),[[Vr,Pe(r).show]])}});const yd=Vn(eM,[["__scopeId","data-v-1e4aac49"]]),Vp=o=>(Ui("data-v-c005db07"),o=o(),zi(),o),tM={class:"arrow-wrapper close-group align-center"},nM=Vp(()=>he("g",{id:"prev",transform:"translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)"},[he("polygon",{class:"arrow",points:"16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"}),he("polygon",{class:"arrow-fixed",points:"16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"}),he("path",{d:"M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"})],-1)),iM=[nM],sM={class:"close-point"},rM=Vp(()=>he("g",null,[he("polygon",{class:"arrow",points:"16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"}),he("polygon",{class:"arrow-fixed",points:"16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"}),he("path",{d:"M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"})],-1)),oM=[rM],aM=jt({__name:"index",setup(o){const e=za(),t=hr(),n=zd(),i=new Bh;let s;const r=Fd(),a=em({pointNameList:["幻灯片","查看介绍","旗帜"],pointList:[]}),l=Dt(!1),c=m=>{if(e.focusSceneName!=m.name){l.value=!1,t.controls.enabled=!1,n.htmlNode.hidePoint(),setTimeout(()=>{g()},2500);const v=ao(m.meshName),x=ao(m.controlPName);i.animateCamera(t.camera,t.controls,{x:x.x,y:x.y,z:x.z},{x:v.x,y:v.y,z:v.z},2400,()=>{h(m.name),t.controls.enabled=!1,s==null||s.classList.add("close-visible"),l.value=!0,e.focusSceneName=m.name})}},h=m=>{switch(m){case"播放宣传视频":n.promotionalFilm.onPlay();break;case"作者介绍":ii.uniform.transparency.value=0,r.transparency=1;break}},u=()=>{switch(e.focusSceneName){case"播放宣传视频":n.promotionalFilm.onPause();break;case"作者介绍":ii.uniform.transparency.value=1,r.transparency=0}e.focusSceneName=""},d=()=>{u(),s==null||s.classList.remove("close-visible"),zp(i,3200).then(()=>{t.controls.enabled=!0,n.htmlNode.enabled=!0,f()})},f=()=>{Ur.value.map(m=>{m.show=!0})},g=()=>{Ur.value.map(m=>{m.show=!1})},p=m=>{if(!l.value)return;const v=a.pointList.findIndex(_=>e.focusSceneName===_.name),x=a.pointList[m==="preview"?v===0?a.pointList.length-1:v-1:v===a.pointList.length-1?0:v+1];c(x)};return Va(()=>{s=document.querySelector(".close-group"),a.pointList=sm(a.pointNameList,Ur.value,"name")}),(m,v)=>(qe(),at(vs,null,[(qe(!0),at(vs,null,Yr(Pe(Ur),(x,_)=>(qe(),at("div",{key:_,class:Bd(["hot-point",`hot-point__${_}`])},[Wt(yd,{"model-value":x,onClick:y=>c(x)},null,8,["model-value","onClick"])],2))),128)),kr(he("div",tM,[kr(he("div",null,[(qe(),at("svg",{class:"arrow-svg arrow-pre",width:"18px",height:"17px",viewBox:"0 0 18 17",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",onClick:v[0]||(v[0]=x=>p("preview"))},iM))],512),[[Vr,Pe(a).pointNameList.includes(Pe(e).focusSceneName)]]),he("div",sM,[Wt(yd,{"model-value":Pe(Cw),onClick:d},null,8,["model-value"])]),kr(he("div",null,[(qe(),at("svg",{class:"arrow-svg arrow-next",width:"18px",height:"17px",viewBox:"-1 0 18 17",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",onClick:v[1]||(v[1]=x=>p("next"))},oM))],512),[[Vr,Pe(a).pointNameList.includes(Pe(e).focusSceneName)]])],512),[[Vr,Pe(e).focusSceneName]])],64))}});const lM=Vn(aM,[["__scopeId","data-v-c005db07"]]);class cM{constructor(e,t,n){ie(this,"enabled",!0);ie(this,"frustumBox");ie(this,"raycaster");ie(this,"modal");ie(this,"scene");ie(this,"camera");ie(this,"divClassList");ie(this,"objectNameList");ie(this,"pointsList");ie(this,"mousedown",!1);ie(this,"hotPoints",Ur.value);const i=(this.hotPoints||[]).map((r,a)=>`.hot-point__${a}`),s=(this.hotPoints||[]).map((r,a)=>r.meshName);this.raycaster=new Ip,this.scene=e,this.camera=t,this.modal=n,this.divClassList=i,this.objectNameList=s,this.getWorldPosition(),this.createFrustumBox(),window.addEventListener("mousedown",r=>{var a;if(r.button===0){const l=r.target;if(!Array.from(l.classList).includes("html-hp-btn")){this.mousedown=!0;for(let u=0,d=this.pointsList.length;u<d;u++)(a=this.pointsList[u].element)==null||a.classList.remove("visible")}}}),window.addEventListener("mouseup",r=>{r.button===0&&(this.mousedown=!1)})}getWorldPosition(e=2){this.pointsList=[];for(let t=0,n=this.objectNameList.length;t<n;t++){const i=this.modal.getObjectByName(this.objectNameList[t]);let s=new S;const r={position:(i==null?void 0:i.getWorldPosition(s))||new S(0,0,0),element:document.querySelector(this.divClassList[t])};this.pointsList.push(r)}}createFrustumBox(){this.frustumBox=new Sn(new S(-1,-1,-1),new S(1,1,1))}hidePoint(e){var t;if(e){const n=this.objectNameList.findIndex(s=>s===e),i=document.querySelector(`.hot-point__${n}`);i==null||i.classList.remove("visible")}else{for(let n=0,i=this.pointsList.length;n<i;n++)(t=this.pointsList[n].element)==null||t.classList.remove("visible");this.enabled=!1}}update(){var e,t,n,i;if(this.enabled!==!1)for(let s=0,r=this.pointsList.length;s<r;s++){const a=this.pointsList[s],l=a.position.clone().project(this.camera);this.raycaster.setFromCamera(l,this.camera);const c=this.raycaster.intersectObjects(this.scene.children,!0);if(this.frustumBox.containsPoint(l))if(!this.mousedown&&c.length===0)(e=a.element)==null||e.classList.add("visible");else{const d=c instanceof Array&&c.length>0?c[0].distance:0,f=a.position.distanceTo(this.camera.position);this.mousedown||d<f?(t=a.element)==null||t.classList.remove("visible"):(n=a.element)==null||n.classList.add("visible")}else(i=a.element)==null||i.classList.remove("visible");const h=l.x*vd.width*.5,u=-l.y*vd.height*.5;a.element&&(a.element.style.transform=`translateX(${h-20}px) translateY(${u-22}px)`)}}}class Hh extends qt{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new _M(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new mM(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new MM(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=Fn.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new sn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},a={};if(typeof e=="string")s=e;else if(Fn.decodeText(new Uint8Array(e,0,4))===Hp){try{r[We.KHR_BINARY_GLTF]=new SM(e)}catch(u){i&&i(u);return}s=r[We.KHR_BINARY_GLTF].content}else s=Fn.decodeText(new Uint8Array(e));const l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new BM(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);a[u.name]=u,r[u.name]=!0}if(l.extensionsUsed)for(let h=0;h<l.extensionsUsed.length;++h){const u=l.extensionsUsed[h],d=l.extensionsRequired||[];switch(u){case We.KHR_MATERIALS_UNLIT:r[u]=new dM;break;case We.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:r[u]=new EM;break;case We.KHR_DRACO_MESH_COMPRESSION:r[u]=new TM(l,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:r[u]=new AM;break;case We.KHR_MESH_QUANTIZATION:r[u]=new CM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function hM(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class uM{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new oe(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Rh(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new al(h),c.distance=u;break;case"spot":c=new ol(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class dM{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return ht}extendParams(e,t,n){const i=[];e.color=new oe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Xe))}return Promise.all(i)}}class fM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class pM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $(a,a)}return Promise.all(s)}}class mM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class gM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Xe)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class vM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class xM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new oe(a[0],a[1],a[2]),Promise.all(s)}}class _M{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class yM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new oe(a[0],a[1],a[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Xe)),Promise.all(s)}}class bM{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class wM{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class MM{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}const Hp="glTF",Pr=12,bd={JSON:1313821514,BIN:5130562};class SM{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Pr);if(this.header={magic:Fn.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Pr,i=new DataView(e,Pr);let s=0;for(;s<n;){const r=i.getUint32(s,!0);s+=4;const a=i.getUint32(s,!0);if(s+=4,a===bd.JSON){const l=new Uint8Array(e,Pr+s,r);this.content=Fn.decodeText(l)}else if(a===bd.BIN){const l=Pr+s;this.body=e.slice(l,l+r)}s+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class TM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},l={},c={};for(const h in r){const u=Kc[h]||h.toLowerCase();a[u]=r[h]}for(const h in e.attributes){const u=Kc[h]||h.toLowerCase();if(r[h]!==void 0){const d=n.accessors[e.attributes[h]],f=co[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(d){for(const f in d.attributes){const g=d.attributes[f],p=l[f];p!==void 0&&(g.normalized=p)}u(d)},a,c)})})}}class AM{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Zc extends Gn{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),r=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new oe().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",r)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class EM{constructor(){this.name=We.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return Zc}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new oe(1,1,1),e.opacity=1;const s=[];if(Array.isArray(i.diffuseFactor)){const r=i.diffuseFactor;e.color.fromArray(r),e.opacity=r[3]}if(i.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",i.diffuseTexture,Xe)),e.emissive=new oe(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new oe(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const r=i.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",r)),s.push(n.assignTexture(e,"specularMap",r,Xe))}return Promise.all(s)}createMaterial(e){const t=new Zc(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=ci,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class CM{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class Gp extends _r{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,p=g-c,m=-2*f+3*d,v=f-d,x=1-m,_=v-d+u;for(let y=0;y!==a;y++){const w=r[p+y+a],M=r[p+y+l]*h,E=r[g+y+a],b=r[g+y]*h;s[y]=x*w+_*M+m*E+v*b}return s}}const LM=new Pt;class RM extends Gp{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return LM.fromArray(s).normalize().toArray(s),s}}const Jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},co={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wd={9728:xt,9729:it,9984:Zr,9985:$a,9986:Kr,9987:li},Md={33071:zt,33648:er,10497:wn},Sd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},PM={CUBICSPLINE:void 0,LINEAR:ys,STEP:tr},Kl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function IM(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Gn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),o.DefaultMaterial}function Ir(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ss(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function DM(o,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):o.attributes.position;r.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):o.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(o.morphAttributes.position=h),i&&(o.morphAttributes.normal=u),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function NM(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function OM(o){const e=o.extensions&&o.extensions[We.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Td(e.attributes):t=o.indices+":"+Td(o.attributes)+":"+o.mode,t}function Td(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function Jc(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function FM(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class BM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hM,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new en(this.options.manager):this.textureLoader=new Lp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sn(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};Ir(s,a,i),ss(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let a=0,l=r.length;a<l;a++)e[r[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,h]of r.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Fn.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=Sd[i.type],c=co[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let p,m;if(f&&f!==u){const v=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let _=t.cache.get(x);_||(p=new c(a,v*f,i.count*f/h),_=new pr(p,f/h),t.cache.add(x,_)),m=new kn(_,l,d%f/h,g)}else a===null?p=new c(i.count*l):p=new c(a,d,i.count*l),m=new Qe(p,l,g);if(i.sparse!==void 0){const v=Sd.SCALAR,x=co[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,w=new x(r[1],_,i.sparse.count*v),M=new c(r[2],y,i.sparse.count*l);a!==null&&(m=new Qe(m.array.slice(),m.itemSize,m.normalized));for(let E=0,b=w.length;E<b;E++){const T=w[E];if(m.setX(T,M[E*l]),l>=2&&m.setY(T,M[E*l+1]),l>=3&&m.setZ(T,M[E*l+2]),l>=4&&m.setW(T,M[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,r.name&&(h.name=r.name);const d=(s.samplers||{})[r.sampler]||{};return h.magFilter=wd[d.magFilter]||it,h.minFilter=wd[d.minFilter]||li,h.wrapS=Md[d.wrapS]||wn,h.wrapT=Md[d.wrapT]||wn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=i.images[e],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:r.mimeType});return l=a.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(p){const m=new mt(p);m.needsUpdate=!0,d(m)}),t.load(Fn.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=r.mimeType||FM(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new nl,lt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new kt,lt.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Gn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const a={},l=s.extensions||{},c=[];if(l[We.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const u=i[We.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];r=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else if(l[We.KHR_MATERIALS_UNLIT]){const u=i[We.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new oe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Xe)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Lt);const h=s.alphaMode||Kl.OPAQUE;if(h===Kl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Kl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==ht&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new $(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&r!==ht&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==ht&&(a.emissive=new oe().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==ht&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Xe)),Promise.all(c).then(function(){let u;return r===Zc?u=i[We.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):u=new r(a),s.name&&(u.name=s.name),ss(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ir(i,u,s),u})}createUniqueName(e){const t=Ye.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ad(l,a,t)})}const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=OM(c),u=i[h];if(u)r.push(u.promise);else{let d;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Ad(new De,c,t),i[h]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const h=r[l].material===void 0?IM(this.cache):this.getDependency("material",r[l].material);a.push(h)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const p=h[f],m=r[f];let v;const x=c[f];if(m.mode===Jn.TRIANGLES||m.mode===Jn.TRIANGLE_STRIP||m.mode===Jn.TRIANGLE_FAN||m.mode===void 0)v=s.isSkinnedMesh===!0?new ph(p,x):new st(p,x),v.isSkinnedMesh===!0&&!v.geometry.attributes.skinWeight.normalized&&v.normalizeSkinWeights(),m.mode===Jn.TRIANGLE_STRIP?v.geometry=Ed(v.geometry,Df):m.mode===Jn.TRIANGLE_FAN&&(v.geometry=Ed(v.geometry,rh));else if(m.mode===Jn.LINES)v=new Tn(p,x);else if(m.mode===Jn.LINE_STRIP)v=new ai(p,x);else if(m.mode===Jn.LINE_LOOP)v=new mh(p,x);else if(m.mode===Jn.POINTS)v=new gh(p,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(v.geometry.morphAttributes).length>0&&NM(v,s),v.name=t.createUniqueName(s.name||"mesh_"+e),ss(v,s),m.extensions&&Ir(i,v,m),t.assignFinalMaterial(v),u.push(v)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return u[0];const d=new ri;t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new pt(zf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ws(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ss(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],r=[],a=[],l=[];for(let c=0,h=n.channels.length;c<h;c++){const u=n.channels[c],d=n.samplers[u.sampler],f=u.target,g=f.node,p=n.parameters!==void 0?n.parameters[d.input]:d.input,m=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",p)),r.push(this.getDependency("accessor",m)),a.push(d),l.push(f)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2],f=c[3],g=c[4],p=[];for(let v=0,x=h.length;v<x;v++){const _=h[v],y=u[v],w=d[v],M=f[v],E=g[v];if(_===void 0)continue;_.updateMatrix();let b;switch(Si[E.path]){case Si.weights:b=rr;break;case Si.rotation:b=Bi;break;case Si.position:case Si.scale:default:b=or;break}const T=_.name?_.name:_.uuid,R=M.interpolation!==void 0?PM[M.interpolation]:ys,D=[];Si[E.path]===Si.weights?_.traverse(function(U){U.morphTargetInfluences&&D.push(U.name?U.name:U.uuid)}):D.push(T);let V=w.array;if(w.normalized){const U=Jc(V.constructor),O=new Float32Array(V.length);for(let z=0,Y=V.length;z<Y;z++)O[z]=V[z]*U;V=O}for(let U=0,O=D.length;U<O;U++){const z=new b(D[U]+"."+Si[E.path],y.array,V,R);M.interpolation==="CUBICSPLINE"&&(z.createInterpolant=function(k){const F=this instanceof Bi?RM:Gp;return new F(this.times,this.values,this.getValueSize()/3,k)},z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(z)}}const m=n.name?n.name:"animation_"+e;return new ar(m,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"";return function(){const a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(s.isBone===!0?l=new tl:a.length>1?l=new ri:a.length===1?l=a[0]:l=new ze,l!==a[0])for(let c=0,h=a.length;c<h;c++)l.add(a[c]);if(s.name&&(l.userData.name=s.name,l.name=r),ss(l,s),s.extensions&&Ir(n,l,s),s.matrix!==void 0){const c=new Re;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],s=this,r=new ri;i.name&&(r.name=s.createUniqueName(i.name)),ss(r,i),i.extensions&&Ir(n,r,i);const a=i.nodes||[],l=[];for(let c=0,h=a.length;c<h;c++)l.push(Wp(a[c],r,t,s));return Promise.all(l).then(function(){const c=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof lt||d instanceof mt)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}}function Wp(o,e,t,n){const i=t.nodes[o];return n.getDependency("node",o).then(function(s){if(i.skin===void 0)return s;let r;return n.getDependency("skin",i.skin).then(function(a){r=a;const l=[];for(let c=0,h=r.joints.length;c<h;c++)l.push(n.getDependency("node",r.joints[c]));return Promise.all(l)}).then(function(a){return s.traverse(function(l){if(!l.isMesh)return;const c=[],h=[];for(let u=0,d=a.length;u<d;u++){const f=a[u];if(f){c.push(f);const g=new Re;r.inverseBindMatrices!==void 0&&g.fromArray(r.inverseBindMatrices.array,u*16),h.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',r.joints[u])}l.bind(new xo(c,h),l.matrixWorld)}),s})}).then(function(s){e.add(s);const r=[];if(i.children){const a=i.children;for(let l=0,c=a.length;l<c;l++){const h=a[l];r.push(Wp(h,s,t,n))}}return Promise.all(r)})}function UM(o,e,t){const n=e.attributes,i=new Sn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new S(l[0],l[1],l[2]),new S(c[0],c[1],c[2])),a.normalized){const h=Jc(co[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new S,l=new S;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const p=Jc(co[d.componentType]);l.multiplyScalar(p)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new ki;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function Ad(o,e,t){const n=e.attributes,i=[];function s(r,a){return t.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in n){const a=Kc[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(e.indices!==void 0&&!o.index){const r=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(r)}return ss(o,e),UM(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?DM(o,e.targets,t):o})}function Ed(o,e){let t=o.getIndex();if(t===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===rh)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s}window.THREE=Fp;const zM=new Hh;class kM{constructor(){Cd||(this._ready=!1,this._models={},this._path=""),Cd=this}get models(){return this._models}async init(e){this._ready||(this._path=e,this._models=await this.parseList("/visualizer/models/scenography/moving_head_lowpoly.glb"),this._ready=!0)}async loadModelList(){}async parseList(e=""){return(await zM.loadAsync(`${e}`)).scene.children[0]}}var Cd=new kM;window.THREE=Fp;const VM=`
#include <clipping_planes_pars_vertex>

attribute float index;      //fragment index
attribute vec3 direction;   //beam direction
attribute vec3 color;       //beam color
attribute float intensity;  //beam intensity
attribute vec3 angle;       //beam angle
attribute vec3 wpos;        //beam position

uniform float vertexCount;  //Total vertex count
uniform float topRadius;    //Top radius of the cylinder
uniform float length;       //Maximum length of the cylinder

varying vec3 vPosition;         //Vertex local position
varying vec3 beamPos;
varying vec4 vWorldPosition;    //Vertex world position
varying vec2 vUv;               //UV position
varying vec3 vNormal;           //Vertex normal (not used here. recomputed in the vertex shader since vertex displacement is involved)
varying vec3 vDirection;        //Beam direction in worldspace coordinates
varying vec3 vColor;            //Beam color
varying float vIntensity;       //Beam intensity
varying float vAngle;           //Beam angle
varying float vIndex;           //Vertex index


/**
 * @function computeRadiusVertexScaleFactor
 * @brief Computes cylinder's bottom cap vertex displacement
 * needed in order to set the beam's angle at the provided value 
 * @param vec3 vector input vertex position vector
 * @returns vec3 the transformed vertex position vector
 */
vec3 computeRadiusVertexScaleFactor(vec3 vector){
    if(index >= vertexCount/2.0){
        float height = topRadius/tan(radians(angle.x)) + length + 20.0; //20.0 offset seems to be do the job taking into accont that light is emitted from a conical frustum.. There should be a formula capable of handling that more accurately though
        float radius = tan(radians(angle.x))*height;
        float scaleFactor = radius/topRadius;
        return vector * vec3(scaleFactor,scaleFactor,1.5);
    }
    return vector;
}

void main(){
    #include <begin_vertex>
    #include <project_vertex>
    #include <clipping_planes_vertex>

    vDirection = direction;     //forwarding direction value to fragement shader
    beamPos = wpos;
    vColor = color;             //forwarding color value to fragement shader
    vIntensity = intensity;     //forwarding intensity value to fragement shader
    vAngle = angle.x;           //forwarding angle value to fragement shader
    vUv = uv;                   //forwarding UV values to fragement shader
    vIndex = index;             //forwarding vertex index to fragement shader
    vPosition = computeRadiusVertexScaleFactor(position);     //Displaing vertex position to match desired angle
    vWorldPosition = projectionMatrix * viewMatrix * modelMatrix * instanceMatrix * vec4(vPosition, 1.0 );      //Determining vertex worldspace coordinates
    vNormal	= vec3(viewMatrix * modelMatrix * instanceMatrix * vec4(normal, 0.0));  //Computing instance normal

    gl_Position	= vWorldPosition;   //Setting up fragment world position 
}`,HM=`
//
// Description : Array and textureless GLSL 2D/3D/4D simplex 
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20201014 (stegu)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
// 

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+10.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  { 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
  }

`,GM=HM+` 
#include <clipping_planes_pars_fragment>
#define M_PI 3.1415926535897932384626433832795
precision highp float;

uniform float glowFactor;       //Global glow factor
uniform bool fogState;
uniform float fogFactor;        //Global fogging factor
uniform float fogTurbulence;    //Global fogging turbulence factor
uniform float time;             //Current time
uniform float vertexCount;      //Per instance vertex count
uniform vec3 cameraDir;         //Camera direction
uniform vec3 cameraPos;

varying vec3 vPosition;         //Vertex local position
varying vec3 beamPos;         //Vertex local position
varying vec3 vNormal;           //Vertex normal
varying vec2 vUv;               //UV position
varying vec3 vDirection;        //Intance direction
varying vec3 vColor;            //Instance colro
varying vec4 vWorldPosition;    //Vertex world position
varying float vIntensity;       //Instance intensity
varying float vAngle;           //Instance angle
varying float vIndex;           //Vertex index


/**
 * @function fogging
 * @brief Uses 3D simplex noise functions in order to mimmic fogging
 * @param coord fog coordinates
 * @returns float the fog opacity at provided coordinates 
 */
float fogging( vec3 coord ){
	float fog = 0.0;
	fog += abs(snoise(coord      )) * 1.0;
	fog += abs(snoise(coord * 2.0)) * 0.5;
	fog += abs(snoise(coord * 4.0)) * 0.25;
	fog += abs(snoise(coord * 8.0)) * 0.125;
	return fog;
}

/**
 * @function rgb2hsv
 * @brief converts RGB value to HSV
 * @param vec3 c RGB color to be converted
 * @returns vec3 HSV color
 */
vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

/**
 * @function hsv2rgb
 * @brief converts HSV value to RGB
 * @param vec3 c HSV color to be converted
 * @returns vec3 RGB color
 */
vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

/**
 * @function computeFog
 * @brief computes fogging intensity at vertex's world position
 * @param float minValue the minimum fog intensity (i.e. vertex intensity)
 * @returns float fogging intensity at provided world coordinates
 */
float computeFog(float minValue){
  if(fogState){
    float fogPositionFactor = fogFactor * 30.0;
    float fogTime = time/(30.0/fogTurbulence);
    vec3 fogCoord = vec3(
        vWorldPosition.x/fogPositionFactor, 
        vWorldPosition.y/fogPositionFactor, 
        fogTime
    );
    return max(fogging(fogCoord), minValue);
  }else{
    return 1.0;
  }
}

/**
 * @function recomputeVertexNormal
 * @brief computes vertex's normal. (e.g Vertex displacement happened in the shader.)
 * @returns vec3 the vertex's normal
 */
vec3 recomputeVertexNormal(){
    vec3 X = dFdx(vWorldPosition.xyz);
    vec3 Y = dFdy(vWorldPosition.xyz);
    return normalize(cross(X,Y));
}

void main(){
    #include <clipping_planes_fragment>

    vec3 normal = recomputeVertexNormal();

    vec3 dirCamToLight = normalize(cameraPos - beamPos);
    float alignmentFactor = 1.0-abs(dot(vDirection, dirCamToLight));
    float glareFactor = min(max(1.0 - (dot(-cameraDir,vDirection)),abs(sin(radians(vAngle)))),0.5);
    float distance = sqrt(pow(vPosition.x,2.0)+pow(vPosition.y,2.0)+pow(vPosition.z,2.0));
    float attenuation = 2.0/(1.0+alignmentFactor*distance+radians(vAngle)*distance*distance);
    float anglePower = pow(dot(normalize(vWorldPosition.xyz),(normal)),4.0*alignmentFactor);

    float intensity = attenuation*anglePower;

    vec3 hsvColor = rgb2hsv(vColor);
    hsvColor.z = hsvColor.z > 0.001 ? hsvColor.z*intensity : 0.0;
    vec3 rgbColor = hsv2rgb(hsvColor);
    
    gl_FragColor = vec4(rgbColor*computeFog(intensity)*vIntensity,1.0);

}
`,$r=new Gn({color:16777215,transparent:!0,flatShading:!1,side:Lt,clippingPlanes:!0});$r.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace(`#define STANDARD
`,`#define STANDARD
         attribute float highlight;
         varying float vHighlight;`),o.vertexShader=o.vertexShader.replace(`#include <clipping_planes_vertex>
	`,`#include <clipping_planes_vertex>
vHighlight = highlight;
`),o.fragmentShader=o.fragmentShader.replace(`varying vec3 vViewPosition;
`,`varying vec3 vViewPosition;
varying float vHighlight;
`),o.fragmentShader=o.fragmentShader.replace(`totalEmissiveRadiance = emissive;
`,`totalEmissiveRadiance = vHighlight == 0.0 ? emissive : vec3(.92,.24,.33);
`),o.fragmentShader=o.fragmentShader.replace(`vec4 diffuseColor = vec4( diffuse, opacity );
`,`vec4 diffuseColor = vec4( diffuse, vHighlight == 0.0 ? 1.0 : 0.5 );
`),$r.userData.shader=o};const _n=100,Jl=new S,ya=new S,ba=new S,Ql=new S,WM=100,XM=1,ec=100,Dr=.09,Ld=45,qM=0,wa=100,$M=1,tc=1.2,Rd=8e3,Pd={OPEN:"Open",COLOR:"Color",GOBO:"Gobo"},YM={OPEN:"Open",CLOSED:"Closed",STROBE:"Strobe",PULSE:"Strobe",RAMP_UP:"RampUp",RAMP_DOWN:"RampDown",RAMP_UP_DOWN:"RampUpDown",LIGHTNING:"Lighting",SPIKES:"Spikes"},jM={OPEN:1,CLOSED:0},ZM={SLOW:1,FAST:10};var Ma=new fn(new Float32Array(_n*3),3).setUsage(Qt),nc=new fn(new Float32Array(_n*3),3).setUsage(Qt),es=new fn(new Float32Array(_n),1).setUsage(Qt),ic=new fn(new Float32Array(_n*3),3).setUsage(Qt),Nr=new fn(new Float32Array(_n),1).setUsage(Qt),Ti=new fn(new Float32Array(_n*2),2).setUsage(Qt),sc=new di,rc=new di,oc=new di,Rn=new di;new di;var Id=new di,Pn={},In={},Ai={},St={},Qn={},ei={},ac=null,$s=null,Or=[],Ct=0;class Ft{constructor(e={minAngle:0,maxAngle:10,minTilt:0,maxTilt:0,minPan:0,maxPan:0,color:"red",colorTemp:Rd,intensity:0,pan:0,tilt:0,goboWheel:[],colorWheel:[],mainScene:null}){this._id=Ct++,this._position=new S,this._rotation=new S,this._minAngle=e.minAngle+1,this._maxAngle=e.maxAngle+1,this._shutter=jM.OPEN,this._goboWheel=e.goboWheel,this._colorWheel=e.colorWheel,this._activeColorPreset=!1,this._highlighted=!1,this.prepareInstance(e.mainScene),this.angle=this._maxAngle,this.color=e.color,this.colorTemp=e.colorTemp,this.intensity=e.intensity,this.minTilt=e.minTilt,this.maxTilt=e.maxTilt,this.minPan=e.minPan,this.maxPan=e.maxPan,this.pan=e.pan,this.tilt=e.tilt,this.strobeFrequency=0,this._shutterStrobe={effect:YM.OPEN,frequency:ZM.SLOW}}get id(){return this._id}get angle(){return this._angle||10}get color(){return this._color||new oe("white")}get pan(){return this._pan||0}get panFine(){return this._panFine||0}get tilt(){return this._tilt||0}get tiltFine(){return this._tiltFine||0}get intensity(){return this._intensity*this._shutter||0}get radius(){var e=Ft.degToRad(this._angle),t=Dr/Math.tan(e)+ec,n=Math.tan(e)*t;return n}get vertexScaleFactor(){return this.radius/Dr}get position(){return this._position}get rotation(){return this._rotation}get strobeFrequency(){return this._strobeFrequency}get highlighted(){return this._highlighted}set id(e){this._id=e}set strobeFrequency(e){this._strobeFrequency=Math.round(e)}set zoom(e){let t=this._maxAngle*(e/100),n=Math.min(t/2,Ld);this._angle=n,this._spotLight.angle=Ft.degToRad(this._angle),Ti.setY(this._id,1),Ti.setX(this._id,this._angle),Ti.needsUpdate=!0}set focus(e){this._spotLight.penumbra=Math.max(tc-tc*(e/100),.3)}set angle(e){let t=Math.min(e/2,Ld);t!=this._angle?(this._angle=t,this._spotLight.angle=Ft.degToRad(this.angle),Ti.setY(this._id,1),Ti.setX(this._id,this.angle)):Ti.setY(this._id,0),Ti.needsUpdate=!0}set colorWheelSlot(e){if(this._colorWheel.length&&e<this._colorWheel.length){let t=this._colorWheel[e];t.type==Pd.COLOR?this.color=t.colors?t.colors[0]:"white":t.type==Pd.OPEN&&(this.colorTemp=this._colorTemp)}}set colorPreset(e){e?(this._activeColorPreset=!0,this.color=e):this._activeColorPreset=!1}set color(e){this._color=e instanceof oe?e:new oe(e),this._spotLight.color=this._color,ic.setXYZ(this._id,this._color.r,this._color.g,this._color.b),ic.needsUpdate=!0}set colorTemp(e=Rd){var t=e/100,n=[0,0,0];t<=66?n=[255,99.4708025861*Math.log(t)-161.1195681661,t<=19?0:138.5177312231*Math.log(t-10)-305.0447927307]:n=[329.698727446*Math.pow(t-60,-.1332047592),288.1221695283*Math.pow(t-60,-.0755148492),255],this._colorTemp=e,this.color=`rgb(
            ${Math.round(Math.min(Math.max(n[0],0),255))},
            ${Math.round(Math.min(Math.max(n[1],0),255))},
            ${Math.round(Math.min(Math.max(n[2],0),255))}
        )`}set colorIntensity(e){if(!this._activeColorPreset){let t=this.color,n=e.color.toLowerCase().charAt(0);switch(n){case"r":case"g":case"b":t[n]=Math.max(e.colorBrightness,1e-5),this.color=t;break;case"c":t.r=Math.max(1-e.colorBrightness,1e-5),this.color=t;break;case"m":t.g=Math.max(1-e.colorBrightness,1e-5),this.color=t;break;case"y":t.b=Math.max(1-e.colorBrightness,1e-5),this.color=t;break}}}set pan(e){this._pan=e,this._yokeDummy.rotation.z=Ft.degToRad(this.pan+this.panFine-this.maxPan/2),this._matrixNeedsUpdate=!0}set panFine(e){this._panFine=e,this._yokeDummy.rotation.z=Ft.degToRad(this.pan+this.panFine-this.maxPan/2),this._matrixNeedsUpdate=!0}set tilt(e){this._tilt=e,this._headDummy.rotation.x=Ft.degToRad(this.tilt+this.tiltFine-this.maxTilt/2),this._matrixNeedsUpdate=!0}set tiltFine(e){this._tiltFine=e,this._headDummy.rotation.x=Ft.degToRad(this.tilt+this.tiltFine-this.maxTilt/2),this._matrixNeedsUpdate=!0}set intensity(e){this._intensity=Math.min(Math.abs(e),1),this._spotLight.intensity=wa*this._intensity,es.setX(this._id,this._intensity),es.needsUpdate=!0}set position(e){this._position=e,this._dummy.position.set(e.x,e.y,e.z),this._matrixNeedsUpdate=!0}set rotation(e){this._rotation=e,this._dummy.rotation.set(e.x,e.y,e.z),this._matrixNeedsUpdate=!0}set highlighted(e){this._highlighted=e,Nr.setX(this._id,this._highlighted?1:0),Nr.needsUpdate=!0}setSinglyHighlighted(e){Or.forEach(t=>{t.highlighted=!1}),this.highlighted=e}prepareInstance(e){this._dummy=new ze,this._headDummy=new ze,this._yokeDummy=new ze,this._beamDummy=new ze,this._targetDummy=new ze,this._boxHelperDummy=new ze,this._spotLight=new ol(this.colorTemp,wa,qM,Ft.degToRad(this.angle),tc,$M),this._spotLight.applyMatrix4(new Re().makeRotationX(-Math.PI/2)),this._spotLight.applyMatrix4(new Re().makeTranslation(0,0,.9)),this._dummy.add(this._yokeDummy),this._yokeDummy.attach(this._headDummy),this._headDummy.attach(this._beamDummy),this._beamDummy.attach(this._targetDummy),this._beamDummy.attach(this._spotLight),this._spotLight.target=this._targetDummy,Pn.count=Ct,In.count=Ct,Ai.count=Ct,St.count=Ct,Qn.count=Ct,ei.count=0,e.add(this._dummy),Or.push(this),this._matrixNeedsUpdate=!0}updateMatrix(){this._matrixNeedsUpdate&&Pn instanceof ze&&(this._dummy.updateMatrixWorld(),this._yokeDummy.updateMatrixWorld(),this._headDummy.updateMatrixWorld(),this._beamDummy.updateMatrixWorld(),this._targetDummy.updateMatrixWorld(),Pn.setMatrixAt(this._id,this._dummy.matrixWorld),In.setMatrixAt(this._id,this._yokeDummy.matrixWorld),Ai.setMatrixAt(this._id,this._headDummy.matrixWorld),St.setMatrixAt(this._id,this._beamDummy.matrixWorld),Qn.setMatrixAt(this._id,this._targetDummy.matrixWorld),ei.setMatrixAt(this._id,this._dummy.matrixWorld),Pn.instanceMatrix.needsUpdate=!0,In.instanceMatrix.needsUpdate=!0,Ai.instanceMatrix.needsUpdate=!0,St.instanceMatrix.needsUpdate=!0,Qn.instanceMatrix.needsUpdate=!0,ei.instanceMatrix.needsUpdate=!0)}updateDirectionVector(){this._beamDummy.getWorldDirection(ya.normalize()),nc.setXYZ(this._id,ya.x,ya.y,ya.z),nc.needsUpdate=!0,this._beamDummy.getWorldPosition(ba.normalize()),Ma.setXYZ(this._id,ba.x,ba.y,ba.z),Ma.needsUpdate=!0}updateStrobe(e){}controlIntensity(){let e={test:1};const t=new Se.Tween(e);t.to({test:0},3e3),t.easing(Se.Easing.Sinusoidal.InOut).repeat(0);let n=this;t.onUpdate(function(){n._spotLight.intensity=wa*n.intensity*e.test,es.setX(n._id,n.intensity*e.test),es.needsUpdate=!0}),t.start()}controlIntensityYoyo(){new Se.Tween({y:0}).to({y:1},3e3).onUpdate(({y:n})=>{this._spotLight.intensity=wa*this.intensity*n,es.setX(this._id,this.intensity*n),es.needsUpdate=!0}).yoyo(!0).repeat(1/0).start()}update(e){this.updateStrobe(e),this.updateMatrix(),this.updateDirectionVector()}debug(){let e=new ul({container:document.body});const t={positionX:{key:"positionX",value:this._position.x,min:0,max:10,source:"position",vector:"x"},positionY:{key:"positionY",value:this._position.y,min:0,max:20,source:"position",vector:"y"},positionZ:{key:"positionZ",value:this._position.z,min:0,max:10,source:"position",vector:"z"},rotaitionX:{key:"rotaitionX",value:this._rotation.x,min:0,max:10,source:"rotation",vector:"x"},rotaitionY:{key:"rotaitionY",value:this._rotation.y,min:0,max:10,source:"rotation",vector:"y"},rotaitionZ:{key:"rotaitionZ",value:this._rotation.z,min:0,max:10,source:"rotation",vector:"z"}};for(const[n,i]of Object.entries(t)){const s={[i.key]:i.value};e.add(s,i.key,i.min,i.max).onChange(r=>{this._dummy[i.source][i.vector]=r})}}static degToRad(e){return e*(Math.PI/180)}static async prepareModelInstance(e){let i=(await new Hh().loadAsync("/visualizer/models/scenography/moving_head_lowpoly.glb")).scene.children[0],s=i.children[0],r=i.children[2],a=i.children[1];s.geometry.rotateX(Math.PI/2),r.geometry.rotateX(Math.PI/2),a.geometry.rotateX(Math.PI/2),s.geometry.translate(0,0,-.5),r.geometry.translate(0,0,-.4),De.prototype.copy.call(sc,s.geometry),De.prototype.copy.call(rc,r.geometry),De.prototype.copy.call(oc,a.geometry),sc.setAttribute("highlight",Nr),rc.setAttribute("highlight",Nr),oc.setAttribute("highlight",Nr),Pn=new Ei(sc,$r,_n),In=new Ei(rc,$r,_n),Ai=new Ei(oc,$r,_n),Pn.instanceCount=Ct,In.instanceCount=Ct,In.instanceCount=Ct,Pn.instanceMatrix.setUsage(Qt),In.instanceMatrix.setUsage(Qt),Ai.instanceMatrix.setUsage(Qt),Pn.instanceMatrix.needsUpdate=!0,In.instanceMatrix.needsUpdate=!0,Ai.instanceMatrix.needsUpdate=!0,e.add(Pn),e.add(In),e.add(Ai)}static prepareBeamInstance(){let e=new Hi(Dr,Dr,ec,WM,XM,!0);e.applyMatrix4(new Re().makeTranslation(0,-e.parameters.height/2,0)),e.applyMatrix4(new Re().makeRotationX(-Math.PI/2)),e.applyMatrix4(new Re().setPosition(0,0,.258)),De.prototype.copy.call(Rn,e);var t=[];for(let i=0;i<Rn.attributes.position.count;i++)t[i]=i;var n=new Qe(new Float32Array(t),1).setUsage(nr);Rn.setAttribute("index",n),Rn.setAttribute("wpos",Ma),Rn.setAttribute("direction",nc),Rn.setAttribute("color",ic),Rn.setAttribute("intensity",es),Rn.setAttribute("angle",Ti),St=new Ei(Rn,new yt({transparent:!0,depthWrite:!1,clipping:!0,side:Lt,blending:Qs,vertexShader:VM,fragmentShader:GM,fog:!1,toneMapped:!1,dithering:!1,uniforms:{cameraDir:{type:"v3",value:Jl},cameraPos:{type:"v3",value:Ql},vertexCount:{type:"f",value:Rn.attributes.position.count},topRadius:{type:"f",value:Dr},length:{type:"f",value:ec},time:{type:"f",value:0},fogState:{type:"b",value:!0},fogFactor:{type:"f",value:1},fogTurbulence:{type:"f",value:1},glowFactor:{type:"f",value:1}}}),_n),St.instanceCount=Ct,St.frustumCulled=!0,St.instanceMatrix.setUsage(Qt),St.instanceMatrix.needsUpdate=!0}static prepareCapInstance(){var e=new di;let t=new gr(.09,40),n=new ht({side:Lt,color:"blue"});t.applyMatrix4(new Re().makeTranslation(0,0,.255)),De.prototype.copy.call(e,t),Qn=new Ei(e,n,100),Qn.instanceCount=10,Qn.instanceMatrix.setUsage(Qt),Qn.instanceMatrix.needsUpdate=!0}static prepareBoxHelperInstance(){let e=new hi(1,1,1),t=new ht({side:Lt,wireframe:!0,color:"rgb(30, 69, 185)",transparent:!1,opacity:.5});De.prototype.copy.call(Id,e),ei=new Ei(Id,t,_n),ei.instanceCount=Ct,ei.instanceMatrix.setUsage(Qt),ei.instanceMatrix.needsUpdate=!0}static prepareInstanciation(e,t){ac=e,$s=t,Ft.prepareModelInstance(t),Ft.prepareBeamInstance(t),Ft.prepareCapInstance(),Ft.prepareBoxHelperInstance(),t.add(St,Qn,ei)}static update(e){Or.forEach(t=>{t.update(e)}),St.material.uniforms.time.value=e,ac.getWorldDirection(Jl.normalize()),St.material.uniforms.cameraDir.value=Jl,ac.getWorldPosition(Ql.normalize()),St.material.uniforms.cameraPos.value=Ql}static deleteInstance(e){$s.remove(e._headDummy),$s.remove(e._yokeDummy),$s.remove(e._beamDummy),$s.remove(e._spotLight),$s.remove(e._dummy),Or.splice(e.id,1);for(let t=e.id;t<Ct-1;t++)Or[t].id--;e=null,Ct--,Pn.count=Ct,In.count=Ct,Ai.count=Ct,St.count=Ct,Qn.count=Ct,ei.count=0}static getBA(){return Ma}static get fogState(){return St.material.uniforms.fogState.value}static get fogDensity(){return St.material.uniforms.fogFactor.value}static get fogTurbulence(){return St.material.uniforms.fogTurbulence.value}static set fogState(e){St.material.uniforms.fogState.value=e}static set fogDensity(e){St.material.uniforms.fogFactor.value=e}static set fogTurbulence(e){St.material.uniforms.fogTurbulence.value=e}}Dt(null);new S;new S;let KM,JM,QM,eS;const tS=async(o,e,t)=>{const n=new en;await Promise.all([n.load("/visualizer/textures/environment/checkerboard_default.jpg")]);const i=[{minAngle:0,maxAngle:180,minTilt:0,maxTilt:.9,minPan:0,maxPan:.7,color:"red",colorTemp:800,intensity:.7,pan:.7,tilt:.1,goboWheel:[],colorWheel:[],mainScene:o,angle:10,tiltFine:0,panFine:0,strobeFrequency:20,position:new S(8.35,3.56,2.06),rotation:new S(4.74,0,1.6),instance:KM},{minAngle:0,maxAngle:180,minTilt:0,maxTilt:.9,minPan:0,maxPan:.7,color:"red",colorTemp:800,intensity:.7,pan:.7,tilt:.1,goboWheel:[],colorWheel:[],mainScene:o,angle:10,tiltFine:0,panFine:0,strobeFrequency:20,position:new S(4.87,3.56,-8.71),rotation:new S(4.74,0,3.12),instance:JM},{minAngle:0,maxAngle:180,minTilt:0,maxTilt:.9,minPan:0,maxPan:.7,color:"red",colorTemp:800,intensity:.7,pan:.7,tilt:.1,goboWheel:[],colorWheel:[],mainScene:o,angle:10,tiltFine:0,panFine:0,strobeFrequency:20,position:new S(-8.6,3.56,-2.65),rotation:new S(4.74,0,4.72),instance:QM},{minAngle:0,maxAngle:180,minTilt:0,maxTilt:.9,minPan:0,maxPan:.7,color:"red",colorTemp:800,intensity:.7,pan:.7,tilt:.1,goboWheel:[],colorWheel:[],mainScene:o,angle:10,tiltFine:0,panFine:0,strobeFrequency:20,position:new S(.06,3.56,8.36),rotation:new S(4.74,0,3.15),instance:eS}],s=-4,r=`聚光灯位置${s}`;i.forEach((a,l)=>{a.instance=new Ft(a),Ft.prepareInstanciation(e,o),l===s-1&&(a.instance.position=ao(r)),l!=s-1&&(a.instance.position=a.position),a.instance.rotation=a.rotation,a.instance.angle=a.angle,a.instance.tiltFine=a.tiltFine,a.instance.panFine=a.panFine,a.instance.strobeFrequency=a.strobeFrequency,a.instance.controlIntensityYoyo(),l===s-1&&a.instance.debug()})},nS=new yr,iS=()=>{Ft.update(nS.getDelta())},Dd={type:"change"},lc={type:"start"},Nd={type:"end"};class sS extends Hn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ts.ROTATE,MIDDLE:ts.DOLLY,RIGHT:ts.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",je),this._domElementKeyEvents=P},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Dd),n.update(),s=i.NONE},this.update=function(){const P=new S,H=new Pt().setFromUnitVectors(e.up,new S(0,1,0)),ve=H.clone().invert(),Me=new S,_e=new Pt,Le=2*Math.PI;return function(){const et=n.object.position;P.copy(et).sub(n.target),P.applyQuaternion(H),a.setFromVector3(P),n.autoRotate&&s===i.NONE&&T(E()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let B=n.minAzimuthAngle,xe=n.maxAzimuthAngle;return isFinite(B)&&isFinite(xe)&&(B<-Math.PI?B+=Le:B>Math.PI&&(B-=Le),xe<-Math.PI?xe+=Le:xe>Math.PI&&(xe-=Le),B<=xe?a.theta=Math.max(B,Math.min(xe,a.theta)):a.theta=a.theta>(B+xe)/2?Math.max(B,a.theta):Math.min(xe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),P.setFromSpherical(a),P.applyQuaternion(ve),et.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||Me.distanceToSquared(n.object.position)>r||8*(1-_e.dot(n.object.quaternion))>r?(n.dispatchEvent(Dd),Me.copy(n.object.position),_e.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",q),n.domElement.removeEventListener("pointerdown",re),n.domElement.removeEventListener("pointercancel",Oe),n.domElement.removeEventListener("wheel",$e),n.domElement.removeEventListener("pointermove",ye),n.domElement.removeEventListener("pointerup",ce),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",je)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,a=new $c,l=new $c;let c=1;const h=new S;let u=!1;const d=new $,f=new $,g=new $,p=new $,m=new $,v=new $,x=new $,_=new $,y=new $,w=[],M={};function E(){return 2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function T(P){l.theta-=P}function R(P){l.phi-=P}const D=function(){const P=new S;return function(ve,Me){P.setFromMatrixColumn(Me,0),P.multiplyScalar(-ve),h.add(P)}}(),V=function(){const P=new S;return function(ve,Me){n.screenSpacePanning===!0?P.setFromMatrixColumn(Me,1):(P.setFromMatrixColumn(Me,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(ve),h.add(P)}}(),U=function(){const P=new S;return function(ve,Me){const _e=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;P.copy(Le).sub(n.target);let Be=P.length();Be*=Math.tan(n.object.fov/2*Math.PI/180),D(2*ve*Be/_e.clientHeight,n.object.matrix),V(2*Me*Be/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(ve*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),V(Me*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(P){d.set(P.clientX,P.clientY)}function k(P){x.set(P.clientX,P.clientY)}function F(P){p.set(P.clientX,P.clientY)}function I(P){f.set(P.clientX,P.clientY),g.subVectors(f,d).multiplyScalar(n.rotateSpeed);const H=n.domElement;T(2*Math.PI*g.x/H.clientHeight),R(2*Math.PI*g.y/H.clientHeight),d.copy(f),n.update()}function N(P){_.set(P.clientX,P.clientY),y.subVectors(_,x),y.y>0?O(b()):y.y<0&&z(b()),x.copy(_),n.update()}function ee(P){m.set(P.clientX,P.clientY),v.subVectors(m,p).multiplyScalar(n.panSpeed),U(v.x,v.y),p.copy(m),n.update()}function j(P){P.deltaY<0?z(b()):P.deltaY>0&&O(b()),n.update()}function te(P){let H=!1;switch(P.code){case n.keys.UP:U(0,n.keyPanSpeed),H=!0;break;case n.keys.BOTTOM:U(0,-n.keyPanSpeed),H=!0;break;case n.keys.LEFT:U(n.keyPanSpeed,0),H=!0;break;case n.keys.RIGHT:U(-n.keyPanSpeed,0),H=!0;break}H&&(P.preventDefault(),n.update())}function ae(){if(w.length===1)d.set(w[0].pageX,w[0].pageY);else{const P=.5*(w[0].pageX+w[1].pageX),H=.5*(w[0].pageY+w[1].pageY);d.set(P,H)}}function ue(){if(w.length===1)p.set(w[0].pageX,w[0].pageY);else{const P=.5*(w[0].pageX+w[1].pageX),H=.5*(w[0].pageY+w[1].pageY);p.set(P,H)}}function X(){const P=w[0].pageX-w[1].pageX,H=w[0].pageY-w[1].pageY,ve=Math.sqrt(P*P+H*H);x.set(0,ve)}function Te(){n.enableZoom&&X(),n.enablePan&&ue()}function be(){n.enableZoom&&X(),n.enableRotate&&ae()}function Ce(P){if(w.length==1)f.set(P.pageX,P.pageY);else{const ve=Ne(P),Me=.5*(P.pageX+ve.x),_e=.5*(P.pageY+ve.y);f.set(Me,_e)}g.subVectors(f,d).multiplyScalar(n.rotateSpeed);const H=n.domElement;T(2*Math.PI*g.x/H.clientHeight),R(2*Math.PI*g.y/H.clientHeight),d.copy(f)}function de(P){if(w.length===1)m.set(P.pageX,P.pageY);else{const H=Ne(P),ve=.5*(P.pageX+H.x),Me=.5*(P.pageY+H.y);m.set(ve,Me)}v.subVectors(m,p).multiplyScalar(n.panSpeed),U(v.x,v.y),p.copy(m)}function ke(P){const H=Ne(P),ve=P.pageX-H.x,Me=P.pageY-H.y,_e=Math.sqrt(ve*ve+Me*Me);_.set(0,_e),y.set(0,Math.pow(_.y/x.y,n.zoomSpeed)),O(y.y),x.copy(_)}function Q(P){n.enableZoom&&ke(P),n.enablePan&&de(P)}function K(P){n.enableZoom&&ke(P),n.enableRotate&&Ce(P)}function re(P){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",ye),n.domElement.addEventListener("pointerup",ce)),se(P),P.pointerType==="touch"?L(P):Ee(P))}function ye(P){n.enabled!==!1&&(P.pointerType==="touch"?A(P):Ae(P))}function ce(P){le(P),w.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",ye),n.domElement.removeEventListener("pointerup",ce)),n.dispatchEvent(Nd),s=i.NONE}function Oe(P){le(P)}function Ee(P){let H;switch(P.button){case 0:H=n.mouseButtons.LEFT;break;case 1:H=n.mouseButtons.MIDDLE;break;case 2:H=n.mouseButtons.RIGHT;break;default:H=-1}switch(H){case ts.DOLLY:if(n.enableZoom===!1)return;k(P),s=i.DOLLY;break;case ts.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;F(P),s=i.PAN}else{if(n.enableRotate===!1)return;Y(P),s=i.ROTATE}break;case ts.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;Y(P),s=i.ROTATE}else{if(n.enablePan===!1)return;F(P),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(lc)}function Ae(P){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;I(P);break;case i.DOLLY:if(n.enableZoom===!1)return;N(P);break;case i.PAN:if(n.enablePan===!1)return;ee(P);break}}function $e(P){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(P.preventDefault(),n.dispatchEvent(lc),j(P),n.dispatchEvent(Nd))}function je(P){n.enabled===!1||n.enablePan===!1||te(P)}function L(P){switch(ge(P),w.length){case 1:switch(n.touches.ONE){case ns.ROTATE:if(n.enableRotate===!1)return;ae(),s=i.TOUCH_ROTATE;break;case ns.PAN:if(n.enablePan===!1)return;ue(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ns.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(),s=i.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(lc)}function A(P){switch(ge(P),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ce(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;de(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Q(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;K(P),n.update();break;default:s=i.NONE}}function q(P){n.enabled!==!1&&P.preventDefault()}function se(P){w.push(P)}function le(P){delete M[P.pointerId];for(let H=0;H<w.length;H++)if(w[H].pointerId==P.pointerId){w.splice(H,1);return}}function ge(P){let H=M[P.pointerId];H===void 0&&(H=new $,M[P.pointerId]=H),H.set(P.pageX,P.pageY)}function Ne(P){const H=P.pointerId===w[0].pointerId?w[1]:w[0];return M[H.pointerId]}n.domElement.addEventListener("contextmenu",q),n.domElement.addEventListener("pointerdown",re),n.domElement.addEventListener("pointercancel",Oe),n.domElement.addEventListener("wheel",$e,{passive:!1}),this.update()}}const cc=new WeakMap;class rS extends qt{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new sn(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.decodeDracoFile(r,t).catch(i)},n,i)}decodeDracoFile(e,t,n,i){const s={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};return this.decodeGeometry(e,s).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(cc.has(e)){const l=cc.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,r=e.byteLength,a=this._getWorker(s,r).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),cc.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new De;e.index&&t.setIndex(new Qe(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,r=i.array,a=i.itemSize;t.setAttribute(s,new Qe(r,a))}return t}_loadLibrary(e,t){const n=new sn(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=oS.toString(),r=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const r=s.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function oS(){let o,e;onmessage=function(r){const a=r.data;switch(a.type){case"init":o=a.decoderConfig,e=new Promise(function(h){o.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(o)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder,f=new u.DecoderBuffer;f.Init(new Int8Array(l),l.byteLength);try{const g=t(u,d,f,c),p=g.attributes.map(m=>m.array.buffer);g.index&&p.push(g.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:g},p)}catch(g){console.error(g),self.postMessage({type:"error",id:a.id,error:g.message})}finally{u.destroy(f),u.destroy(d)}});break}};function t(r,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(l);if(g===r.TRIANGULAR_MESH)d=new r.Mesh,f=a.DecodeBufferToMesh(l,d);else if(g===r.POINT_CLOUD)d=new r.PointCloud,f=a.DecodeBufferToPointCloud(l,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const p={index:null,attributes:[]};for(const m in h){const v=self[u[m]];let x,_;if(c.useUniqueIDs)_=h[m],x=a.GetAttributeByUniqueId(d,_);else{if(_=a.GetAttributeId(d,r[h[m]]),_===-1)continue;x=a.GetAttribute(d,_)}p.attributes.push(i(r,a,d,m,v,x))}return g===r.TRIANGULAR_MESH&&(p.index=n(r,a,d)),r.destroy(d),p}function n(r,a,l){const h=l.num_faces()*3,u=h*4,d=r._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(r.HEAPF32.buffer,d,h).slice();return r._free(d),{array:f,itemSize:1}}function i(r,a,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,p=g*h.BYTES_PER_ELEMENT,m=s(r,h),v=r._malloc(p);a.GetAttributeDataArrayForAllPoints(l,u,m,p,v);const x=new h(r.HEAPF32.buffer,v,g).slice();return r._free(v),{name:c,array:x,itemSize:d}}function s(r,a){switch(a){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}class aS extends Tp{constructor(e){super(e),this.type=yn}parse(e){const a=function(_,y){switch(_){case 1:console.error("THREE.RGBELoader Read Error: "+(y||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(y||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(y||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(y||""))}return-1},u=`
`,d=function(_,y,w){y=y||1024;let E=_.pos,b=-1,T=0,R="",D=String.fromCharCode.apply(null,new Uint16Array(_.subarray(E,E+128)));for(;0>(b=D.indexOf(u))&&T<y&&E<_.byteLength;)R+=D,T+=D.length,E+=128,D+=String.fromCharCode.apply(null,new Uint16Array(_.subarray(E,E+128)));return-1<b?(w!==!1&&(_.pos+=T+b+1),R+D.slice(0,b)):!1},f=function(_){const y=/^#\?(\S+)/,w=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,M=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*FORMAT=(\S+)\s*$/,b=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,T={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let R,D;if(_.pos>=_.byteLength||!(R=d(_)))return a(1,"no header found");if(!(D=R.match(y)))return a(3,"bad initial token");for(T.valid|=1,T.programtype=D[1],T.string+=R+`
`;R=d(_),R!==!1;){if(T.string+=R+`
`,R.charAt(0)==="#"){T.comments+=R+`
`;continue}if((D=R.match(w))&&(T.gamma=parseFloat(D[1])),(D=R.match(M))&&(T.exposure=parseFloat(D[1])),(D=R.match(E))&&(T.valid|=2,T.format=D[1]),(D=R.match(b))&&(T.valid|=4,T.height=parseInt(D[1],10),T.width=parseInt(D[2],10)),T.valid&2&&T.valid&4)break}return T.valid&2?T.valid&4?T:a(3,"missing image size specifier"):a(3,"missing format specifier")},g=function(_,y,w){const M=y;if(M<8||M>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);if(M!==(_[2]<<8|_[3]))return a(3,"wrong scanline width");const E=new Uint8Array(4*y*w);if(!E.length)return a(4,"unable to allocate buffer space");let b=0,T=0;const R=4*M,D=new Uint8Array(4),V=new Uint8Array(R);let U=w;for(;U>0&&T<_.byteLength;){if(T+4>_.byteLength)return a(1);if(D[0]=_[T++],D[1]=_[T++],D[2]=_[T++],D[3]=_[T++],D[0]!=2||D[1]!=2||(D[2]<<8|D[3])!=M)return a(3,"bad rgbe scanline format");let O=0,z;for(;O<R&&T<_.byteLength;){z=_[T++];const k=z>128;if(k&&(z-=128),z===0||O+z>R)return a(3,"bad scanline data");if(k){const F=_[T++];for(let I=0;I<z;I++)V[O++]=F}else V.set(_.subarray(T,T+z),O),O+=z,T+=z}const Y=M;for(let k=0;k<Y;k++){let F=0;E[b]=V[k+F],F+=M,E[b+1]=V[k+F],F+=M,E[b+2]=V[k+F],F+=M,E[b+3]=V[k+F],b+=4}U--}return E},p=function(_,y,w,M){const E=_[y+3],b=Math.pow(2,E-128)/255;w[M+0]=_[y+0]*b,w[M+1]=_[y+1]*b,w[M+2]=_[y+2]*b,w[M+3]=1},m=function(_,y,w,M){const E=_[y+3],b=Math.pow(2,E-128)/255;w[M+0]=Br.toHalfFloat(Math.min(_[y+0]*b,65504)),w[M+1]=Br.toHalfFloat(Math.min(_[y+1]*b,65504)),w[M+2]=Br.toHalfFloat(Math.min(_[y+2]*b,65504)),w[M+3]=Br.toHalfFloat(1)},v=new Uint8Array(e);v.pos=0;const x=f(v);if(x!==-1){const _=x.width,y=x.height,w=g(v.subarray(v.pos),_,y);if(w!==-1){let M,E,b;switch(this.type){case dn:b=w.length/4;const T=new Float32Array(b*4);for(let D=0;D<b;D++)p(w,D*4,T,D*4);M=T,E=dn;break;case yn:b=w.length/4;const R=new Uint16Array(b*4);for(let D=0;D<b;D++)m(w,D*4,R,D*4);M=R,E=yn;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:_,height:y,data:M,header:x.string,gamma:x.gamma,exposure:x.exposure,type:E}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(r,a){switch(r.type){case dn:case yn:r.encoding=zn,r.minFilter=it,r.magFilter=it,r.generateMipmaps=!1,r.flipY=!0;break}t&&t(r,a)}return super.load(e,s,n,i)}}new oe(0),new oe(3355443);class lS{constructor(e){ie(this,"container");ie(this,"scene");ie(this,"camera");ie(this,"renderer");ie(this,"controls");ie(this,"controlChange");ie(this,"loadManager");ie(this,"hdrEnvironmentTexture");ie(this,"textureFlare0");ie(this,"textureFlare3");ie(this,"carModel");ie(this,"boothModel");ie(this,"loadEvent");this.loadEvent=new CustomEvent("loadEvent",{detail:{progress:this.loadManager}}),this.loadManager={firstLoaded:!1,name:"",schedule:0,success:!1,showMask:!0,total:37},this.renderer=new go({antialias:!0}),this.renderer.autoClear=!1,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputEncoding=Xe,e?(this.container=document.getElementById(e),this.container.appendChild(this.renderer.domElement)):(this.renderer.domElement.style.position="absolute",this.renderer.domElement.style.zIndex="2",this.container=document.body,document.body.appendChild(this.renderer.domElement)),this.camera=new pt(40,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,0,4),this.scene=new vo,this.initControl(),this.loadProgress(),window.addEventListener("resize",()=>this.onWindowResize())}initControl(){this.controlChange=!1,this.container&&(this.controls=new sS(this.camera,this.container)),this.controls.enableDamping=!0,this.controls.target.set(0,.5,0),this.controls.update()}onWindowResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.calcBoundingBox(),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}async loadResource(){const e=new en().setPath("/textures/lensflare/"),t=new aS().setPath("/textures/equirectangular/"),n=new Hh().setPath("/models/"),i=new rS().setDecoderPath("/draco/");i.setDecoderConfig({type:"js"}),i.preload(),n.setDRACOLoader(i);const[s,r,a,l,c]=await Promise.all([t.loadAsync("venice_sunset_1k.hdr"),n.loadAsync("车展台压缩.glb"),n.loadAsync("兰博基尼碳纤维大牛压缩.glb"),e.load("yJqeRxDXpr.png"),e.load("lensflare3.png")]),h=s;h.mapping=xs,this.textureFlare0=l,this.textureFlare3=c,this.hdrEnvironmentTexture=s,this.scene.environment=s,this.scene.environment.mapping=xs,this.carModel=a.scene;const u=this.carModel.getObjectByName("挡风玻璃");u.material instanceof lt&&(u.material.side=Un);const d=document.getElementById("gui-container");ow({container:d}),this.boothModel=r.scene,this.boothModel.scale.set(1.2,1.2,1.2);const f=this.boothModel.getObjectByName("车承台父节点");f==null||f.add(this.carModel),this.scene.add(this.boothModel),this.calcBoundingBox()}loadProgress(){const e=Ch;e.onLoad=()=>{if(!this.loadManager.firstLoaded){this.loadManager.firstLoaded=!0;return}this.loadManager.schedule=100,this.updateProgress()},e.onProgress=async(t,n,i)=>{Math.floor(n/i*100)!=100&&(this.loadManager.schedule=Math.floor(n/this.loadManager.total*100)),this.updateProgress()}}calcBoundingBox(){if(this.carModel){let e=new Sn;e.expandByObject(this.carModel);let t=new S;e.getCenter(t),this.carModel.position.x=this.carModel.position.x-t.x,this.carModel.position.z=this.carModel.position.z-t.z}}setAnimationLoop(e){this.renderer.setAnimationLoop(e)}animate(){this.controls.update(),Se==null||Se.update(),requestAnimationFrame(this.animate.bind(this))}renderFunction(){var e;(e=this.renderer)==null||e.render(this.scene,this.camera)}updateProgress(){this.loadEvent.detail.progress=this.loadManager,window.dispatchEvent(this.loadEvent)}test222(){}}const Ts=o=>(Ui("data-v-a21eb12d"),o=o(),zi(),o),cS={class:"car-booth"},hS={class:"loading"},uS=Ts(()=>he("span",null,null,-1)),dS=Ts(()=>he("span",null,null,-1)),fS=Ts(()=>he("span",null,null,-1)),pS=Ts(()=>he("span",null,null,-1)),mS=Ts(()=>he("div",{class:"mt6"},[he("div",{class:"class"},"性能指标："),he("div",{id:"stats-container"})],-1)),gS=Ts(()=>he("div",{class:"mt6"},[he("div",{class:"class"},"GUI面板："),he("div",{id:"gui-container"})],-1)),vS={class:"threejs-container"},xS=Ts(()=>he("div",{id:"container"},null,-1)),_S=jt({name:"CarBooth"}),yS=jt({..._S,setup(o){let e,t,n,i,s;const r=za(),a=Ha(),l=Ga(),c=hr(),h=zd(),u=Ud();let d,f,g=null,p=null;const m=[],v=Dt(!1),x=Dt({name:"",schedule:0,success:!1,showMask:!0,total:32});let _;for(let V=0,U=Mi.length;V<U;V++)Mi[V].uuid=hc(),Mi[V].unfoldClass.top=`${30*V}px`,Mi[V].unfoldClass.right=`${window.innerWidth-Number(Mi[V].unfoldClass.width.slice(0,Mi[V].unfoldClass.width.length-2))}px`;hc();const y=()=>{x.value.showMask=!1,x.value.success=!0},w=async()=>{d=Zb(),d.dom.setAttribute("id","stats");const V=document.getElementById("stats-container");V==null||V.appendChild(d.dom),document.getElementById("container"),i=new lS("container"),window.addEventListener("loadEvent",I=>{x.value=Object.assign(x.value,I.detail.progress)}),await i.loadResource(),i.setAnimationLoop(T),c.camera=i.camera,c.renderer=i.renderer,c.controls=i.controls,c.scene=i.scene,tS(i.scene,i.camera,i.renderer),e=new cw(i.scene,i.camera,i.renderer),e.initFlag(),n=new Ia("http://127.0.0.1:5173/#/author-introduction","作者面板"),n.dom.style.width="1366px",n.dom.style.height="700px",n.css3dObject.scale.multiplyScalar(.0026),n.css3dObject.rotateY(-Math.PI*.5),n.css3dObject.position.multiplyScalar(1.2);let U=c.scene.getObjectByName("作者面板");const O=new ii(U);U.material=O.blackHoleMaterial,l.source.texture.textureFlare0=i.textureFlare0,l.source.texture.textureFlare3=i.textureFlare3,l.carModel=i.carModel,a.boothModel=i.boothModel,f=i.hdrEnvironmentTexture,p=i.carModel,g=i.boothModel;const z=i.boothModel.getObjectByName("Glass002");z.material instanceof lt&&(z.material.transparent=!1),_w(z),t=new Ew(i.boothModel,i.scene,i.camera,i.renderer),s=new cM(i.scene,i.camera,i.boothModel),h.htmlNode=s,h.promotionalFilm=new hw(i.boothModel,"屏幕");const Y=i.boothModel.getObjectByName("超长镜面");Y.visible=!1;const k=new hl(Y.geometry.scale(1.2,2.8,1.2),{clipBias:3e-4,textureWidth:window.innerWidth*window.devicePixelRatio,textureHeight:window.innerHeight*window.devicePixelRatio,color:11908533}),F=new S;Y==null||Y.getWorldPosition(F),k.position.x=F.x,k.position.y=F.y+.4,k.position.z=F.z,M(),m.push(i.carModel.getObjectByName("左前轮"),i.carModel.getObjectByName("左后轮"),i.carModel.getObjectByName("右前轮"),i.carModel.getObjectByName("右后轮"))},M=()=>{i.scene.getObjectByName("Top001"),i.scene.getObjectByName("WellLeft001");const V=12,U=12,O=1.5;_=new Ih(16777215,O,V,U),_.position.set(0,4,0),_.lookAt(0,0,0),i.scene.add(_),E()},E=()=>{aw({rectLight:_}),lw({bloomPass:t.bloomPass})},b=new yr;Dt(!1);const T=()=>{var V;(V=i==null?void 0:i.controls)==null||V.update(),Se==null||Se.update(),r.debug&&(d==null||d.update()),e==null||e.flagUpdate(),s==null||s.update(),ii.uniform.iTime.value+=b.getDelta(),r.mode==="night"&&iS(),l.wheelStart&&R(-performance.now()/1e3),n==null||n.update(),u.textureWindow.texture&&(u.textureWindow.texture.needsUpdate=!0),r.mode==="night"&&(t==null||t.update()),r.mode==="day"&&i.renderer.render(i.scene,i.camera)},R=V=>{for(let U=0;U<m.length;U++)m[U].rotation.x=-V*Math.PI*2},D=()=>{v.value=!0,w()};return Va(()=>{}),(V,U)=>{const O=tm;return qe(),at("div",cS,[kr(he("div",hS,[Wt(c1,{onOnSvgComplete:D}),Pe(v)&&Pe(x).schedule!==100?(qe(),vn(O,{key:0,"stroke-color":{from:"#108ee9",to:"#87d068"},style:{position:"absolute"},trailColor:"#9e9e9e1c",strokeWidth:5,percent:Pe(x).schedule,showInfo:!1},null,8,["percent"])):$t("",!0),Pe(x).schedule===100?(qe(),at("div",{key:1,onClick:y,class:"neon-button"},[he("a",{onClick:y},[uS,dS,fS,pS,cn(" 开始探索 ")])])):$t("",!0)],512),[[Vr,Pe(x).showMask]]),Wt(i1,{"revolver-list":Pe(Mi)},null,8,["revolver-list"]),(qe(!0),at(vs,null,Yr(Pe(Mi),z=>(qe(),at(vs,{key:z.uuid},[z.name==="中心控制"?(qe(),vn(m1,{key:0,"float-window":z},null,8,["float-window"])):$t("",!0),z.name==="颜色"?(qe(),vn(S1,{key:1,"float-window":z},null,8,["float-window"])):$t("",!0),z.name==="贴图"?(qe(),vn(L1,{key:2,"float-window":z},null,8,["float-window"])):$t("",!0),z.name==="动画"?(qe(),vn(d1,{key:3,"float-window":z,boothModel:Pe(g),carModel:Pe(p),hdrTexture:Pe(f)},null,8,["float-window","boothModel","carModel","hdrTexture"])):$t("",!0),z.name==="性能"?(qe(),vn(cr,{key:4,"float-window":z},{content:Bt(()=>[mS]),_:2},1032,["float-window"])):$t("",!0),z.name==="光照"?(qe(),vn(cr,{key:5,"float-window":z},{content:Bt(()=>[gS]),_:2},1032,["float-window"])):$t("",!0)],64))),128)),he("div",vS,[xS,Wt(lM)])])}}});const AS=Vn(yS,[["__scopeId","data-v-a21eb12d"]]);export{AS as default};
