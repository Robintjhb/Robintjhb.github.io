System.register("chunks:///AnimatCtrl.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(t,n){var o,i,e,r,s,a,c,l,u,p,m,d;return t({_dec:void 0,_class:void 0,_temp:void 0}),{setters:[function(t){o=t.inherits,i=t.classCallCheck,e=t.possibleConstructorReturn,r=t.getPrototypeOf,s=t.createClass},function(t){a=t.cclegacy,c=t._decorator,l=t.AnimationComponent,u=t.Component}],execute:function(){a._RF.push({},"db193mr2BZHAquud+bjpZ13","AnimatCtrl",void 0),d=c.ccclass,c.property,t("AnimatCtrl",(p=d("AnimatCtrl"),p(m=function(t){function n(){var t,o;i(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(o=e(this,(t=r(n)).call.apply(t,[this].concat(a))))._duration=.3,o.i=1,o}return o(n,t),s(n,[{key:"start",value:function(){this.animationComponent=this.node.getComponent(l)}},{key:"switch_animat",value:function(){console.log("dddd"),this.i%2==0?this.animationComponent.crossFade("marp",this._duration):this.animationComponent.crossFade("show",this._duration),this.i++}}]),n}(u))||m)),a._RF.pop()}}}));

System.register("chunks:///Receive.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e,c){var t,n,o,r,i,s,u,a,l,p,v;return e({_dec:void 0,_class:void 0}),{setters:[function(e){t=e.inherits,n=e.createClass,o=e.classCallCheck,r=e.possibleConstructorReturn,i=e.getPrototypeOf},function(e){s=e.cclegacy,u=e._decorator,a=e.Component}],execute:function(){s._RF.push({},"14d46Brs+BKzphIcNfc3hHf","Receive",void 0),v=u.ccclass,u.property,e("Receive",(l=v("Receive"),l(p=function(e){function c(){return o(this,c),r(this,i(c).apply(this,arguments))}return t(c,e),n(c,[{key:"start",value:function(){}},{key:"receiveString",value:function(e){console.log("receive event: ".concat(this.node.name," paranm:").concat(e))}}]),c}(a))||p)),s._RF.pop()}}}));

System.register("chunks:///scripts/scenes/scene2d/SpritePicMove.js",["../../../_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e,t){var s,i,r,n,l,o,c,u,h,a,_,p;return e({_dec:void 0,_class:void 0,_temp:void 0}),{setters:[function(e){s=e.inherits,i=e.classCallCheck,r=e.possibleConstructorReturn,n=e.getPrototypeOf,l=e.createClass},function(e){o=e.cclegacy,c=e._decorator,u=e.Vec2,h=e.Component}],execute:function(){o._RF.push({},"eb158DqQqpK1I4wvTNaBgs4","SpritePicMove",void 0),p=c.ccclass,c.property,e("SpritePicMove",(a=p("SpritePicMove"),a(_=function(e){function t(){var e,s;i(this,t);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(s=r(this,(e=n(t)).call.apply(e,[this].concat(o))))._euler=new u(0,0),s}return s(t,e),l(t,[{key:"start",value:function(){this.node.on(cc.Node.EventType.TOUCH_MOVE,this.TOUCH_MOVEEnevt,this)}},{key:"TOUCH_MOVEEnevt",value:function(e){var t=e.getDeltaX(),s=e.getDeltaY();this._euler.x+=t,this._euler.y+=s,Math.abs(this._euler.x)>1010?this._euler.x>0?this._euler.x=1010:this._euler.x<0&&(this._euler.x=-1010):this.node.setPosition(this._euler.x,this._euler.y,0),Math.abs(this._euler.y)>699?this._euler.y>0?this._euler.y=699:this._euler.y<0&&(this._euler.y=-699):this.node.setPosition(this._euler.x,this._euler.y,0)}}]),t}(h))||_)),o._RF.pop()}}}));

System.register("chunks:///_virtual/prerequisite-imports:main",["../AnimatCtrl.js","../Receive.js","../scripts/scenes/scene2d/SpritePicMove.js"],(function(e,t){return{setters:[function(e){},function(e){},function(e){}],execute:function(){}}}));

(function(r) {
  r('project:///assets/AnimatCtrl.js', 'chunks:///AnimatCtrl.js');
  r('project:///assets/Receive.js', 'chunks:///Receive.js');
  r('project:///assets/scripts/scenes/scene2d/SpritePicMove.js', 'chunks:///scripts/scenes/scene2d/SpritePicMove.js');
  r('virtual:///prerequisite-imports:main', 'chunks:///_virtual/prerequisite-imports:main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    var _m;
    return {
        setters: [function(m) { _m = m; }],
        execute: function () { _export(_m); }
    };
    });
});