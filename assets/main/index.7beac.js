System.register("chunks:///_virtual/SliderBar.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(r){"use strict";var e,i,s,l,t,o,c,n,h,S,a,d;return{setters:[function(r){e=r.applyDecoratedDescriptor,i=r.inheritsLoose,s=r.initializerDefineProperty,l=r.assertThisInitialized,t=r.defineProperty},function(r){o=r.cclegacy,c=r._decorator,n=r.Slider,h=r.ScrollView,S=r.SystemEventType,a=r.Vec3,d=r.Component}],execute:function(){var f,p,g,u,v,_,w,E,O;o._RF.push({},"25bd7hhpdBBV6YgHviRjwps","SliderBar",void 0);var V=c.ccclass,y=c.property;r("SliderBar",(f=V("SliderBar"),p=y(n),g=y(n),u=y(h),f((w=e((_=function(r){function e(){for(var e,i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return e=r.call.apply(r,[this].concat(o))||this,s(l(e),"vSlider",w,l(e)),s(l(e),"hSlider",E,l(e)),s(l(e),"scrollView",O,l(e)),t(l(e),"M_WHEEL_Number",3e-4),e}i(e,r);var o=e.prototype;return o.start=function(){this.vSlider.node.on("slider",this.vSlidercallback,this),this.scrollView.node.on(S.TOUCH_MOVE,this._TOUCH_MOVE,this),this.scrollView.node.on(S.MOUSE_WHEEL,this._TOUCH_MOVE,this),this.vSlider.node.on(S.MOUSE_WHEEL,this._vSlider_MOUSE_WHEEL,this),this.hSlider.node.on(S.MOUSE_WHEEL,this._hSlider_MOUSE_WHEEL,this)},o._vSlider_MOUSE_WHEEL=function(r){var e=-r.getScrollY()*this.M_WHEEL_Number;console.log("y:"+e),this.vSlider.progress+e<=1&&this.vSlider.progress+e>=0?this.vSlider.progress+=e:this.vSlider.progress+e>1?this.vSlider.progress=1:this.vSlider.progress+e<0&&(this.vSlider.progress=0),this.vSlidercallback(this.vSlider)},o._hSlider_MOUSE_WHEEL=function(r){var e=-r.getScrollY()*this.M_WHEEL_Number;console.log("y:"+e),this.hSlider.progress+e<=1&&this.hSlider.progress+e>=0?this.hSlider.progress+=e:this.hSlider.progress+e>1?this.hSlider.progress=1:this.hSlider.progress+e<0&&(this.hSlider.progress=0),this.hSlidercallback(this.hSlider)},o._TOUCH_MOVE=function(r,e){var i=this.scrollView.getMaxScrollOffset().y,s=this.scrollView.getScrollOffset().y;this.vSlider.progress=s/i>0&&s/i<1?s/i:s/i<=0?0:1;var l=this.scrollView.getMaxScrollOffset().x,t=-this.scrollView.getScrollOffset().x;this.hSlider.progress=t/l>0&&t/l<1?t/l:t/l<=0?0:1},o.vSlidercallback=function(r){var e=this.scrollView.getMaxScrollOffset(),i=this.scrollView.getMaxScrollOffset().x,s=-this.scrollView.getScrollOffset().x;s/i>0&&s/i<1?this.scrollView.scrollToOffset(new a(s,e.y*r.progress,0),.1):s/i<=0?this.scrollView.scrollToOffset(new a(0,e.y*r.progress,0),.1):this.scrollView.scrollToOffset(new a(i,e.y*r.progress,0),.1)},o.hSlidercallback=function(r){var e=this.scrollView.getMaxScrollOffset(),i=this.scrollView.getMaxScrollOffset().y,s=this.scrollView.getScrollOffset().y;s/i>0&&s/i<1?this.scrollView.scrollToOffset(new a(e.x*r.progress,s,0),.1):s/i<=0?this.scrollView.scrollToOffset(new a(e.x*r.progress,0,0),.1):this.scrollView.scrollToOffset(new a(e.x*r.progress,i,0),.1)},e}(d)).prototype,"vSlider",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(_.prototype,"hSlider",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=e(_.prototype,"scrollView",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=_))||v));o._RF.pop()}}}));

System.register("chunks:///_virtual/DropdownScript.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./loadSceneProgressBar.ts"],(function(t){"use strict";var n,e,i,o,r,a,l,c,u,s;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,l=t.Node,c=t.LabelComponent,u=t.Component},function(t){s=t.loadSceneProgressBar}],execute:function(){var p,S,b,f,g,h,C,m,w,y,_,L,B,d,k,P,v,z,D,F,V,A,N;r._RF.push({},"393337AtAhAW7fSNNqdnURG","DropdownScript",void 0);var R=a.ccclass,J=a.property;t("DropdownScript",(p=R("DropdownScript"),S=J(l),b=J(l),f=J(l),g=J(l),h=J(l),C=J(l),m=J(l),w=J(l),y=J(l),_=J(l),p((d=n((B=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return n=t.call.apply(t,[this].concat(r))||this,i(o(n),"CurrentLine",d,o(n)),i(o(n),"CurrentStation",k,o(n)),i(o(n),"CurrentStationLable",P,o(n)),i(o(n),"StationDownButton",v,o(n)),i(o(n),"ScrollViewStation",z,o(n)),i(o(n),"Station1",D,o(n)),i(o(n),"Station2",F,o(n)),i(o(n),"Station1Lable",V,o(n)),i(o(n),"Station2Lable",A,o(n)),i(o(n),"ProgressBar",N,o(n)),n}e(n,t);var r=n.prototype;return r.start=function(){this.CurrentLine.on("click",this.CurrentLine_callback,this),this.CurrentStation.on("click",this.CurrentStation_callback,this),this.StationDownButton.on("click",this.StationDownButton_callback,this),this.Station1.on("click",this.Station1_callback,this),this.Station2.on("click",this.Station2_callback,this)},r.CurrentLine_callback=function(t){console.log("切换到-line_1"),this.ProgressBar.getComponent(s).funct("line_1")},r.CurrentStation_callback=function(t){var n=this.CurrentStationLable.getComponent(c).string;this.ProgressBar.getComponent(s).funct(n),console.log("切换到-"+n)},r.StationDownButton_callback=function(t){this.ScrollViewStation.active=!this.ScrollViewStation.active},r.Station1_callback=function(t){this.CurrentStationLable.getComponent(c).string=this.Station1Lable.getComponent(c).string,this.ScrollViewStation.active=!1},r.Station2_callback=function(t){this.CurrentStationLable.getComponent(c).string=this.Station2Lable.getComponent(c).string,this.ScrollViewStation.active=!1},r.manyou1F=function(){this.ProgressBar.getComponent(s).funct("漫游_1F站厅")},r.manyouJf=function(){this.ProgressBar.getComponent(s).funct("漫游_1F机房")},r.manyou2F=function(){this.ProgressBar.getComponent(s).funct("漫游_2F站厅")},r.loadScene1F=function(){this.ProgressBar.getComponent(s).funct("1F站厅")},r.loadSceneJf=function(){this.ProgressBar.getComponent(s).funct("1F机房")},r.loadScene2F=function(){this.ProgressBar.getComponent(s).funct("2F站厅")},n}(u)).prototype,"CurrentLine",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=n(B.prototype,"CurrentStation",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=n(B.prototype,"CurrentStationLable",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=n(B.prototype,"StationDownButton",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=n(B.prototype,"ScrollViewStation",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=n(B.prototype,"Station1",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=n(B.prototype,"Station2",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=n(B.prototype,"Station1Lable",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=n(B.prototype,"Station2Lable",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=n(B.prototype,"ProgressBar",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=B))||L));r._RF.pop()}}}));

System.register("chunks:///_virtual/MainCarmCtrl.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i,n,o,s,E,a,r,c,M,h,_,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized,s=t.defineProperty},function(t){E=t.cclegacy,a=t._decorator,r=t.Node,c=t.Vec3,M=t.systemEvent,h=t.SystemEvent,_=t.math,u=t.Component}],execute:function(){var l,O,v,L,U,S,m;E._RF.push({},"46cae1207xCaqPFVdbVlc46","MainCarmCtrl",void 0);var f=a.ccclass,y=a.property;t("MainCarmCtrl",(l=f("MainCarmCtrl"),O=y(r),v=y(r),l((S=e((U=function(t){function e(){for(var e,i=arguments.length,E=new Array(i),a=0;a<i;a++)E[a]=arguments[a];return e=t.call.apply(t,[this].concat(E))||this,n(o(e),"MainCamera",S,o(e)),n(o(e),"CanvasNode",m,o(e)),s(o(e),"sensitivityMouse",.1),s(o(e),"sensitivetyKeyBoard",.1),s(o(e),"sensitivetyMouseWheel",10),s(o(e),"offset1",new c(.5,0,0)),s(o(e),"offset2",new c(0,.5,0)),s(o(e),"offset3",new c(0,0,.5)),s(o(e),"sensitivityX",.1),s(o(e),"sensitivityY",.1),s(o(e),"minimumY",-60),s(o(e),"maximumY",60),s(o(e),"rotationY",0),s(o(e),"PreMouseMPos",void 0),s(o(e),"isMOUSE_WHEEL",void 0),s(o(e),"isMOUSE_Left",void 0),s(o(e),"isMOUSE_Right",void 0),s(o(e),"_euler",new c(0,0,0)),s(o(e),"isctrl",!1),s(o(e),"M_WHEEL_Number",100),s(o(e),"MOUSE_WHEELLocationX",void 0),s(o(e),"MOUSE_WHEELLocationY",void 0),s(o(e),"MOUSE_movementX",void 0),s(o(e),"MOUSE_movementY",void 0),e}i(e,t);var E=e.prototype;return E.onLoad=function(){this.PreMouseMPos=new c(0,0,0)},E.start=function(){M.on(h.EventType.MOUSE_WHEEL,this.onMOUSE_WHEEL,this),M.on(h.EventType.MOUSE_DOWN,this.onMOUSE_DOWN,this),M.on(h.EventType.MOUSE_UP,this.onMOUSE_UP,this),M.on(h.EventType.MOUSE_MOVE,this.onMouseMove,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.keyDownEvent,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.keyUpEvent,this);for(var t=this.CanvasNode.getComponentsInChildren(cc.SpriteComponent),e=0;e<t.length;e++);this.CanvasNode.on(cc.Node.EventType.TOUCH_MOVE,this.onMOUSE_RightTOUCH_MOVE,this)},E.onDisable=function(){},E.lateUpdate=function(t){this.CameraMove(),this.isctrl?this.M_WHEEL_Number=10:this.M_WHEEL_Number=100},E.keyDownEvent=function(t){switch(t.keyCode){case cc.macro.KEY.ctrl:this.isctrl=!0}},E.keyUpEvent=function(t){switch(t.keyCode){case cc.macro.KEY.ctrl:this.isctrl=!1}},E.onMOUSE_WHEEL=function(t){0!=t.getScrollY()?this.node.translate(new c(0,0,-t.getScrollY()/this.M_WHEEL_Number)):0!=t.getScrollX()&&this.node.translate(new c(0,0,-t.getScrollX()/this.M_WHEEL_Number))},E.onMOUSE_DOWN=function(t){1===t.getButton()&&(this.MOUSE_WHEELLocationX=t.getLocationX(),this.MOUSE_WHEELLocationY=t.getLocationY(),this.isMOUSE_WHEEL=!0),2===t.getButton()&&(this.MOUSE_WHEELLocationX=t.getLocationX(),this.MOUSE_WHEELLocationY=t.getLocationY(),this.isMOUSE_Right=!0),0===t.getButton()&&(this.MOUSE_WHEELLocationX=t.getLocationX(),this.MOUSE_WHEELLocationY=t.getLocationY(),this.isMOUSE_Left=!0)},E.onMOUSE_UP=function(t){1===t.getButton()&&(this.isMOUSE_WHEEL=!1),2===t.getButton()&&(this.isMOUSE_Right=!1),0===t.getButton()&&(this.isMOUSE_Left=!1)},E.onMouseMove=function(t){(this.isMOUSE_WHEEL||this.isMOUSE_Right||this.isMOUSE_Left)&&(0==t.movementX&&0==t.movementY||(this.MOUSE_WHEELLocationX=t.getLocationX(),this.MOUSE_WHEELLocationY=t.getLocationY(),this.MOUSE_movementX=t.movementX,this.MOUSE_movementY=t.movementY))},E.CanvasNode_MOUSE_MOVE=function(){this.isMOUSE_Left=!1},E.CanvasNode_MOUSE_ENTER=function(){this.isMOUSE_Left=!1},E.CanvasNode_MOUSE_LEAVE=function(){this.isMOUSE_Left=!1},E.CameraMove=function(){if(this.isMOUSE_Left)if(this.PreMouseMPos.x<=0)this.PreMouseMPos=new c(this.MOUSE_WHEELLocationX,this.MOUSE_WHEELLocationY,0);else{var t=new c(this.MOUSE_WHEELLocationX,this.MOUSE_WHEELLocationY,0),e=new c(t.x-this.PreMouseMPos.x,t.y-this.PreMouseMPos.y,t.z-this.PreMouseMPos.z);e=new c(.1*-e.x,.1*-e.y,0),this.node.translate(e),this.PreMouseMPos=t}else this.PreMouseMPos=new c(0,0,0)},E.onMOUSE_RightTOUCH_MOVE=function(t){if(this.isMOUSE_Right){var e=new c(0,0,0);this.MainCamera.getWorldRotation().getEulerAngles(e),this._euler.x=e.x,this._euler.y=e.y;var i=-t.getDeltaX()*(Math.PI/180)*3,n=t.getDeltaY()*(Math.PI/180)*3;this._euler.x+=n,this._euler.y+=i,this._euler.z=e.z,this.MainCamera.setRotationFromEuler(this._euler.x,this._euler.y,this._euler.z)}},E._getDirection=function(t,e,i){var n=new c(t,e,i);return _.Vec3.transformQuat(n,n,this.node.getRotation()),n},E.btnOnClickEvent=function(){console.log("dddd")},e}(u)).prototype,"MainCamera",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=e(U.prototype,"CanvasNode",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=U))||L));E._RF.pop()}}}));

System.register("chunks:///_virtual/dialogctrl.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var o,r,c,n,i;return{setters:[function(t){o=t.inheritsLoose},function(t){r=t.cclegacy,c=t._decorator,n=t.find,i=t.Component}],execute:function(){var e;r._RF.push({},"488d2NsXYhA3a9HouKpteRU","dialogctrl",void 0);var a=c.ccclass;c.property,t("Dialogctrl",a("Dialogctrl")(e=function(t){function r(){return t.apply(this,arguments)||this}o(r,t);var c=r.prototype;return c.start=function(){},c.cls_dialog=function(){n("Canvas/dialog").active=!1},r}(i))||e);r._RF.pop()}}}));

System.register("chunks:///_virtual/ResMgr.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,l,u,r;return{setters:[function(e){n=e.defineProperty},function(e){l=e.cclegacy,u=e._decorator,r=e.assetManager}],execute:function(){l._RF.push({},"66934Hmz0RI+5Yei3P4VR5L","ResMgr",void 0);u.ccclass,u.property;var t=e("ResMgr",function(){function e(){}return e.loadBundle=function(n,l){null!=e.m_bundle?null==l||l.call(n,e.m_bundle):r.loadBundle("bundle",(function(u,r){e.m_bundle=r,null==l||l.call(n,r)}))},e}());n(t,"m_bundle",void 0),l._RF.pop()}}}));

System.register("chunks:///_virtual/scene_start.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./loadSceneProgressBar.ts"],(function(e){"use strict";var t,n,r,o,c,s;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,r=e._decorator,o=e.director,c=e.Component},function(e){s=e.loadSceneProgressBar}],execute:function(){var a;n._RF.push({},"6d4b5VGGxNKLJN9Rc2fAwE2","scene_start",void 0);var i=r.ccclass;r.property,e("SceneStart",i("SceneStart")(a=function(e){function n(){return e.apply(this,arguments)||this}return t(n,e),n.prototype.onLoad=function(){o.getScene().getChildByName("Canvas").getChildByName("ProgressBar").getComponent(s).funct("Game_scene")},n}(c))||a);n._RF.pop()}}}));

System.register("chunks:///_virtual/timedataSet.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,r,n,i,a,o,s,l,u;return{setters:[function(t){e=t.defineProperty,r=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){o=t.cclegacy,s=t._decorator,l=t.LabelComponent,u=t.Component}],execute:function(){var c,p,g,d,h,f,y,m,b;o._RF.push({},"82ca1fsqHZLL6ySaYjwOM7B","timedataSet",void 0);var v=s.ccclass,D=s.property;t("TimedataSet",(c=v("TimedataSet"),p=D(l),g=D(l),c((b=m=function(t){function r(){for(var r,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return r=t.call.apply(t,[this].concat(o))||this,i(a(r),"Date_Node",f,a(r)),i(a(r),"time_Node",y,a(r)),e(a(r),"Day",["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]),r}n(r,t);var o=r.prototype;return o.start=function(){},o.update=function(t){var e=new Date;this.Date_Node.string=this.Day[Number(e.getDay())].toString()+"\n"+this.dateFtt("yyyy-MM-dd",e),this.time_Node.string=this.dateFtt("hh:mm",e)},o.dateFtt=function(t,e){var r={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[n]:("00"+r[n]).substr((""+r[n]).length)));return t},r}(u),e(m,"cfg",void 0),f=r((h=b).prototype,"Date_Node",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=r(h.prototype,"time_Node",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=h))||d));o._RF.pop()}}}));

System.register("chunks:///_virtual/ReadConfig.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var o,n,t,r,i;return{setters:[function(e){o=e.defineProperty,n=e.inheritsLoose},function(e){t=e.cclegacy,r=e._decorator,i=e.Component}],execute:function(){var c,s,u;t._RF.push({},"89b52zWWQhBq7X/Mn18QQe2","ReadConfig",void 0);var a=r.ccclass;r.property,e("ReadConfig",a("ReadConfig")((u=s=function(e){function o(){return e.apply(this,arguments)||this}n(o,e);var t=o.prototype;return t.onLoad=function(){this.loaderFile()},t.loaderFile=function(){},o}(i),o(s,"cont",void 0),c=u))||c);t._RF.pop()}}}));

System.register("chunks:///_virtual/SubAreaList.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./loadSceneProgressBar.ts"],(function(t){"use strict";var e,n,r,i,o,l,c,a,s,u,b,p,f,h;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,r=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){o=t.cclegacy,l=t._decorator,c=t.ScrollViewComponent,a=t.Node,s=t.director,u=t.ButtonComponent,b=t.SpriteFrame,p=t.SpriteComponent,f=t.Component},function(t){h=t.loadSceneProgressBar}],execute:function(){var g,_,m,d,y,w,S,k,v,L,C,B,P,z,R,A,V;o._RF.push({},"932e92rXYBA16X51JKqRvPY","SubAreaList",void 0);var F=l.ccclass,x=l.property;t("SubAreaList",(g=F("SubAreaList"),_=x(c),m=x(a),d=x(a),y=x(a),w=x(a),S=x(a),k=x(a),g((C=e((L=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return e=t.call.apply(t,[this].concat(o))||this,r(i(e),"scrollView",C,i(e)),r(i(e),"btn_road",B,i(e)),r(i(e),"btn_bg",P,i(e)),r(i(e),"btn_pipe",z,i(e)),r(i(e),"ProgressBar",R,i(e)),r(i(e),"btn_scrollRight",A,i(e)),r(i(e),"btn_scrollLeft",V,i(e)),e}n(e,t);var o=e.prototype;return o.start=function(){this.btn_road.on("click",this.btn_road_callback,this),this.btn_bg.on("click",this.btn_bg_callback,this),this.btn_pipe.on("click",this.btn_pipe_callback,this),this.btn_scrollLeft.on("click",this.scrollLeft,this),this.btn_scrollRight.on("click",this.scrollRight,this)},o.btn_road_callback=function(){this.ProgressBar.getComponent(h).funct(this.btn_road.name)},o.btn_bg_callback=function(){this.ProgressBar.getComponent(h).funct(this.btn_bg.name)},o.btn_pipe_callback=function(){this.ProgressBar.getComponent(h).funct(this.btn_pipe.name)},o.scrollRight=function(){this.scrollView.scrollToRight(.05)},o.scrollLeft=function(){this.scrollView.scrollToLeft(.05)},o.sethoverSprite=function(){for(var t=s.getScene.name,e=this.node.getComponentsInChildren(u),n=0;n<e.length;n++)if(e[n].node.name===t){var r=new b;r.texture=e[n].node.getComponent(u).hoverSprite.texture,e[n].node.getComponent(p).spriteFrame=r}},e}(f)).prototype,"scrollView",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=e(L.prototype,"btn_road",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=e(L.prototype,"btn_bg",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=e(L.prototype,"btn_pipe",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=e(L.prototype,"ProgressBar",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=e(L.prototype,"btn_scrollRight",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=e(L.prototype,"btn_scrollLeft",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=L))||v));o._RF.pop()}}}));

System.register("chunks:///_virtual/EqCtrlScript.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./ResMgr.ts"],(function(t){"use strict";var e,n,o,r,i,a,c,l,s,u,d,p,f,h,g;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,r=t.assertThisInitialized,i=t.defineProperty},function(t){a=t.cclegacy,c=t._decorator,l=t.Node,s=t.Prefab,u=t.UITransform,d=t.instantiate,p=t.Layout,f=t.Label,h=t.Component},function(t){g=t.ResMgr}],execute:function(){var v,y,m,C,b;a._RF.push({},"a972ezv9IZIuIzX3aAQfTBL","EqCtrlScript",void 0);var N=c.ccclass,_=c.property;t("EqCtrlScript",(v=N("EqCtrlScript"),y=_(l),v((b=e((C=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return e=t.call.apply(t,[this].concat(a))||this,o(r(e),"contentNode",b,r(e)),i(r(e),"DataInfor",[]),e}n(e,t);var a=e.prototype;return a.start=function(){window.cc_eqlist=this.list_init.bind(this)},a.list_init=function(t,e){console.log(t,e),this.DataInfor=e;var n=this;return g.loadBundle(this,(function(o){o.load("prefab/"+t,s,(function(t,o){var r=n.contentNode.parent.getComponent(u).width,i=d(o);i.active=!1;var a=i.getComponent(u).width,c=(r/a).toFixed();n.contentNode.getComponent(u).width=Number(c)*a-a/2,i.destroy();var l=n.contentNode.getComponent(p);for(var s in n.contentNode.destroyAllChildren(),l.constraintNum=Number(c)-1,e){var h=e[s],g=d(o);console.log(s+"---"+g),g.getChildByName("Label").getComponent(f).string=h.eq_number.valueOf().toString(),n.contentNode.addChild(g)}l.updateLayout()}))})),!0},e}(h)).prototype,"contentNode",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=C))||m));a._RF.pop()}}}));

System.register("chunks:///_virtual/ListCtrl.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,i,o,r,l,a,c,s,u,p,f,m,g,h,b,C;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized,r=t.defineProperty},function(t){l=t.cclegacy,a=t._decorator,c=t.Node,s=t.UITransformComponent,u=t.loader,p=t.JsonAsset,f=t.Component,m=t.instantiate,g=t.RichTextComponent,h=t.SpriteComponent,b=t.EventHandler,C=t.ButtonComponent}],execute:function(){var d,v,y,_,w,F,L;l._RF.push({},"b18f042y5xF/rGdFCtfdo5C","ListCtrl",void 0);var k=a.ccclass,P=a.property;t("ListCtrl",(d=k("ListCtrl"),v=P(c),y=P(c),d((F=e((w=function(t){function e(){for(var e,n=arguments.length,l=new Array(n),a=0;a<n;a++)l[a]=arguments[a];return e=t.call.apply(t,[this].concat(l))||this,i(o(e),"scrollViewContent",F,o(e)),i(o(e),"itemPrefab",L,o(e)),r(o(e),"item_heigh",null),e}n(e,t);var l=e.prototype;return l.start=function(){this.item_heigh=this.itemPrefab.getComponent(s).height,this.ScrollView_init()},l.ScrollView_init=function(){var t=this;u.loadRes("config.json",p,(function(e,n){if(e);else for(var i=n.json,o=function(e){var n=m(t.itemPrefab);n.parent=t.scrollViewContent,n.active=!0,n.getChildByName("Label").getComponent(g).string="<color=#FF000>"+e+"</c> -- "+i.config[e].title;var o=n.getComponent(h),r=i.config[e].imgpath.toString();u.loadResArray([r],cc.SpriteFrame,(function(t,e){t?cc.error(t):o.spriteFrame=e[0]}));var l=i.config[e].url;n.on("click",t.button_callback,t);var a=new b;a.target=t.node,a.component="ListCtrl",a.handler="button_callback",a.customEventData=l,n.getComponent(C).clickEvents.push(a)},r=0;r<i.config.length;++r)o(r)}))},l.button_callback=function(t,e){e&&window.open(e,"_blank")},e}(f)).prototype,"scrollViewContent",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=e(w.prototype,"itemPrefab",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=w))||_));l._RF.pop()}}}));

System.register("chunks:///_virtual/loadSceneProgressBar.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,o,r,t,s,c,i;return{setters:[function(e){n=e.inheritsLoose},function(e){o=e.cclegacy,r=e._decorator,t=e.ProgressBarComponent,s=e.LabelComponent,c=e.director,i=e.Component}],execute:function(){var a;o._RF.push({},"bf388ahY95FSrn4ao457zL0","loadSceneProgressBar",void 0);var u=r.ccclass;r.property,e("loadSceneProgressBar",u("loadSceneProgressBar")(a=function(e){function o(){return e.apply(this,arguments)||this}return n(o,e),o.prototype.funct=function(e){var n=this;this.node.active=!0;var o=this.node.getComponent(t),r=o.node.getChildByName("bar_numb").getComponent(s);c.preloadScene(e,(function(e,n,t){o.progress=e/n;var s=(e/n*100).toFixed(2)+"%";r.string=s.toString()}),(function(o,t){n.scheduleOnce((function(){c.loadScene(e),r.string="0%",this.node.active=!1}),.3)}))},o}(i))||a);o._RF.pop()}}}));

System.register("chunks:///_virtual/NetMgr.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,s,n,o,c,i;return{setters:[function(t){e=t.defineProperty,s=t.inheritsLoose,n=t.assertThisInitialized},function(t){o=t.cclegacy,c=t._decorator,i=t.Component}],execute:function(){var r,a,h;o._RF.push({},"d730arXVV5HjrfHqpkmIwue","NetMgr",void 0);var _=c.ccclass,l=(c.property,0),u=1,d=2;t("NetMgr",_("NetMgr")((h=a=function(t){function o(){for(var s,o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return s=t.call.apply(t,[this].concat(c))||this,e(n(s),"url","ws://127.0.0.1:6081/ws"),e(n(s),"state",l),e(n(s),"sock",null),s}s(o,t);var c=o.prototype;return c.onLoad=function(){null===o.Instance?(o.Instance=this,this.state=l):this.destroy()},c._on_opened=function(t){this.state=d,cc.log("connect to server: "+this.url+" sucess!"),EventMgr.Instance.dispatch_event("net_connect",null)},c._on_recv_data=function(t){EventMgr.Instance.dispatch_event("net_message",t.data)},c.close_socket=function(){this.state==d&&null!==this.sock&&(this.sock.close(),this.sock=null),EventMgr.Instance.dispatch_event("net_disconnect",null),this.state=l},c._on_socket_close=function(t){this.close_socket()},c._on_socket_err=function(t){this.close_socket()},c.connect_to_server=function(){this.state==l&&(EventMgr.Instance.dispatch_event("net_connecting",null),this.state=u,this.sock=new WebSocket(this.url),this.sock.binaryType="arraybuffer",this.sock.onopen=this._on_opened.bind(this),this.sock.onmessage=this._on_recv_data.bind(this),this.sock.onclose=this._on_socket_close.bind(this),this.sock.onerror=this._on_socket_err.bind(this))},c.send_data=function(t){this.state==d&&this.sock&&this.sock.send(t)},c.update=function(t){this.state==l&&this.connect_to_server()},o}(i),e(a,"Instance",null),r=h))||r);o._RF.pop()}}}));

System.register("chunks:///_virtual/migrate-canvas.ts",["cc"],(function(){"use strict";var e,n,t,i,r,o,a;return{setters:[function(c){e=c.cclegacy,n=c.director,t=c.Director,i=c.Canvas,r=c.Camera,o=c.game,a=c.Node}],execute:function(){e._RF.push({},"ea270CUyjpIQKFJmWKJXMQa","migrate-canvas",void 0);var c=1048575;function l(e,n){for(var t=0,i=e.children.length;t<i;t++)e.children[t].layer=n,l(e.children[t],n)}n.on(t.EVENT_AFTER_SCENE_LAUNCH,(function(){var e,t,a,s=null===(e=n.getScene())||void 0===e?void 0:e.children,v=null===(t=n.getScene())||void 0===t?void 0:t.getComponentsInChildren(i);if(!(v.length<=1)){v=v.filter((function(e){return!!e.cameraComponent}));var m=null===(a=n.getScene())||void 0===a?void 0:a.getComponentsInChildren(r),p=0;m.forEach((function(e){return p|=e.visibility&c}));for(var u=[],f=0,C=s.length;f<C;f++){var d=s[f];if(o.isPersistRootNode(d)){var h=d.getComponentsInChildren(i);0!==h.length&&u.push.apply(u,h.filter((function(e){return!!e.cameraComponent})))}}u.forEach((function(e){if(v.find((function(n){return n!==e&&n.cameraComponent.visibility&e.cameraComponent.visibility&c}))){var n=~p,t=n&~(n-1);e.cameraComponent.visibility=t|4293918720&e.cameraComponent.visibility,l(e.node,t),p|=n}}))}}));var s=a.prototype.setParent;function v(e){var n=0,t=e.getComponent(i);return t&&t.cameraComponent?n=t.cameraComponent.visibility&t.node.layer?t.node.layer:t.cameraComponent.visibility&~(t.cameraComponent.visibility-1):(e.parent&&(n=v(e.parent)),n)}a.prototype.setParent=function(e,n){if(s.call(this,e,n),e){var t=v(this);t&&(this.layer=t,l(this,t))}},e._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./SliderBar.ts","./loadSceneProgressBar.ts","./DropdownScript.ts","./MainCarmCtrl.ts","./dialogctrl.ts","./ResMgr.ts","./scene_start.ts","./timedataSet.ts","./ReadConfig.ts","./SubAreaList.ts","./EqCtrlScript.ts","./ListCtrl.ts","./NetMgr.ts","./migrate-canvas.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=index.js.map