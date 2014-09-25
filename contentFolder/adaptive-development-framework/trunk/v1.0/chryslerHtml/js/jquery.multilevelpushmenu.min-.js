(function(a){a.fn.multilevelpushmenu=function(c){var b=arguments,d=null;this.each(function(){var P=this,r=a(this),n=(r.context!=undefined)?r:a("body"),W=(c&&c.menu!=undefined)?c.menu:r.find("nav"),L,g;var U=a.extend({container:n,containersToPush:null,menuID:((n.prop("id")!=undefined&&n.prop("id")!="")?n.prop("id"):this.nodeName.toLowerCase())+"_multilevelpushmenu",wrapperClass:"multilevelpushmenu_wrapper",menuInactiveClass:"multilevelpushmenu_inactive",menu:W,menuWidth:0,menuHeight:0,collapsed:false,fullCollapse:false,direction:"ltr",backText:"Back",backItemClass:"backItemClass",backItemIcon:"fa fa-angle-right",groupIcon:"fa fa-angle-left",mode:"overlap",overlapWidth:40,preventItemClick:true,preventGroupItemClick:true,swipe:"both",onCollapseMenuStart:function(){},onCollapseMenuEnd:function(){},onExpandMenuStart:function(){},onExpandMenuEnd:function(){},onGroupItemClick:function(){},onItemClick:function(){},onTitleItemClick:function(){},onBackItemClick:function(){},onMenuReady:function(){},onMenuSwipe:function(){}},c);if(!a.data(P,"plugin_multilevelpushmenu")){a.data(P,"plugin_multilevelpushmenu",U);P.settings=a.data(P,"plugin_multilevelpushmenu")}var H={init:function(){return l.apply(this,Array.prototype.slice.call(arguments))},collapse:function(){return F.apply(this,Array.prototype.slice.call(arguments))},expand:function(){return u.apply(this,Array.prototype.slice.call(arguments))},menuexpanded:function(){return h.apply(this,Array.prototype.slice.call(arguments))},activemenu:function(){return K.apply(this,Array.prototype.slice.call(arguments))},findmenusbytitle:function(){return Q.apply(this,Array.prototype.slice.call(arguments))},finditemsbyname:function(){return R.apply(this,Array.prototype.slice.call(arguments))},pathtoroot:function(){return s.apply(this,Array.prototype.slice.call(arguments))},comparepaths:function(){return B.apply(this,Array.prototype.slice.call(arguments))},option:function(){return f.apply(this,Array.prototype.slice.call(arguments))},additems:function(){return G.apply(this,Array.prototype.slice.call(arguments))},removeitems:function(){return z.apply(this,Array.prototype.slice.call(arguments))},redraw:function(){return S.apply(this,Array.prototype.slice.call(arguments))},visiblemenus:function(){return i.apply(this,Array.prototype.slice.call(arguments))},hiddenmenus:function(){return p.apply(this,Array.prototype.slice.call(arguments))},propagateevent:function(){return k.apply(this,Array.prototype.slice.call(arguments))}};function w(Y){if(Y.stopPropagation&&Y.preventDefault){Y.stopPropagation();Y.preventDefault()}else{Y.cancelBubble=true;Y.returnValue=false}}function k(Y,Z){if(Y==undefined||Z==undefined){return false}Y.on(Z,function(ad,aa){Y.hide();try{aa=aa||{pageX:ad.pageX,pageY:ad.pageY};var ab=document.elementFromPoint(aa.pageX,aa.pageY);ab=(ab.nodeType==3)?ab.parentNode:ab;a(ab).trigger(Z,aa)}catch(ac){a.error("Error while propagating event: "+ac.message)}finally{Y.show()}})}function X(){var Y=a("<nav />").prop({id:P.settings.menuID,className:P.settings.wrapperClass}).appendTo(P.settings.container);e(P.settings.menu,Y)}function e(Z,Y){if(Z.level==undefined){Z.level=0}a.each(Z,function(){var ae=a("<div />").attr({"class":"levelHolderClass"+((P.settings.direction=="rtl")?" rtl":" ltr"),"data-level":Z.level,style:((P.settings.direction=="rtl")?"margin-right: ":"margin-left: ")+((Z.level==0&&!P.settings.collapsed)?0:"-200%")}).appendTo(Y),aa=(C(P.settings.menuWidth)||(T(P.settings.menuWidth)&&P.settings.menuWidth>0));ae.bind(g,function(af){O(af,ae)});if(this.id!=undefined){ae.attr({id:this.id})}var ac=a("<h2 />").attr({style:"text-align: "+((P.settings.direction=="rtl")?"right":"left")}).text(this.title).appendTo(ae),ab=a("<i />").prop({"class":((P.settings.direction=="rtl")?"floatLeft":"floatRight")+" cursorPointer "+this.icon}).prependTo(ac);ab.bind(L,function(af){m(af,ae,Z)});if(Z.level>0){I(ae)}var ad=a("<ul />").appendTo(ae);a.each(this.items,function(){V(this,ae,-1)})})}function v(){var Y=(P.settings.container.find("nav").length>0)?P.settings.container.find("nav"):P.settings.menu;if(Y.length==0){return false}Y.prop({id:P.settings.menuID,className:P.settings.wrapperClass});t(Y)}function t(Y){if(Y.level==undefined){Y.level=0}a.each(Y,function(){var ad=a("<div />").attr({"class":"levelHolderClass"+((P.settings.direction=="rtl")?" rtl":" ltr"),"data-level":Y.level,style:((P.settings.direction=="rtl")?"margin-right: ":"margin-left: ")+((Y.level==0&&!P.settings.collapsed)?0:"-200%")}).appendTo(Y),Z=(C(P.settings.menuWidth)||(T(P.settings.menuWidth)&&P.settings.menuWidth>0));ad.bind(g,function(ae){O(ae,ad)});var ab=Y.children("h2");ab.attr({style:"text-align: "+((P.settings.direction=="rtl")?"right":"left")});ab.appendTo(ad);var aa=ab.children("i");aa.addClass(((P.settings.direction=="rtl")?"floatLeft":"floatRight")+" cursorPointer");aa.bind(L,function(ae){m(ae,ad,Y)});if(Y.level>0){I(ad)}var ac=Y.children("ul");ac.appendTo(ad);a.each(ac.children("li"),function(){var af=a(this);af.attr({style:"text-align: "+((P.settings.direction=="rtl")?"right":"left")});var ae=af.children("a");var ag=ae.children("i");ag.addClass(((P.settings.direction=="rtl")?"floatLeft":"floatRight"));if(af.children("ul").length>0){ae.bind(L,function(ah){N(ah,ad,af)});o(ae);af.level=Y.level+1;t(af)}else{ae.bind(L,function(ah){y(ah,ad,af)})}})})}function m(ad,ac,ab){if(a(P).find("div.levelHolderClass").is(":animated")){return false}P.settings.onTitleItemClick.apply(this,Array.prototype.slice.call([ad,ac,P.settings]));w(ad);var Z=(P.settings.direction=="rtl")?parseInt(ac.css("margin-right"))<0:parseInt(ac.css("margin-left"))<0;if(ab.level==0&&Z){u()}else{var ae=P.settings.container.find("#"+P.settings.menuID+" div.levelHolderClass").filter(function(){var af=(P.settings.direction=="rtl")?((a(this).attr("data-level")>ac.attr("data-level"))&&(parseInt(a(this).css("margin-right"))>=0)):((a(this).attr("data-level")>ac.attr("data-level"))&&(parseInt(a(this).css("margin-left"))>=0));return af}),aa=P.settings.container.find("#"+P.settings.menuID+" div.levelHolderClass").filter(function(){var af=(P.settings.direction=="rtl")?((a(this).attr("data-level")<=ac.attr("data-level"))&&(parseInt(a(this).css("margin-right"))>=0)):((a(this).attr("data-level")<=ac.attr("data-level"))&&(parseInt(a(this).css("margin-left"))>=0));return af}),Y=(ae.length==0&&aa.length==1)?F():F(parseInt(ac.attr("data-level")))}ac.css("visibility","visible");ac.find("."+P.settings.backItemClass).css("visibility","visible");ac.find("ul").css("visibility","visible");ac.removeClass(P.settings.menuInactiveClass)}function I(ab){var Y=a("<div />").attr({"class":P.settings.backItemClass}).appendTo(ab),Z=a("<a />").prop({href:"#"}).text(P.settings.backText).appendTo(Y),aa=a("<i />").prop({"class":((P.settings.direction=="rtl")?"floatLeft ":"floatRight ")+P.settings.backItemIcon}).prependTo(Z);Z.bind(L,function(ac){M(ac,ab)})}function M(Z,Y){if(a(P).find("div.levelHolderClass").is(":animated")){return false}P.settings.onBackItemClick.apply(this,Array.prototype.slice.call([Z,Y,P.settings]));w(Z);F(parseInt(Y.attr("data-level")-1))}function N(aa,Z,Y){if(a(P).find("div.levelHolderClass").is(":animated")){return false}P.settings.onGroupItemClick.apply(this,Array.prototype.slice.call([aa,Z,Y,P.settings]));u(Y.find("div:first"));if(P.settings.preventGroupItemClick){w(aa)}}function o(Y){var Z=a("<i />").attr({"class":((P.settings.direction=="rtl")?" floatRight iconSpacing_rtl ":" floatLeft iconSpacing_ltr ")+P.settings.groupIcon}).prependTo(Y)}function V(){var ab=arguments[0],ae=arguments[1],Y=arguments[2],ad=ae.find("ul:first"),aa=a("<li />");(Y<(ad.find("li").length)&&Y>=0)?aa.insertBefore(ad.find("li").eq(Y)):aa.appendTo(ad);aa.attr({style:"text-align: "+((P.settings.direction=="rtl")?"right":"left")});if(ab.id!=undefined){aa.attr({id:ab.id})}var Z=a("<a />").prop({href:ab.link}).text(ab.name).appendTo(aa),ac=a("<i />").prop({"class":((P.settings.direction=="rtl")?"floatLeft ":"floatRight ")+ab.icon}).prependTo(Z);if(ab.items){Z.bind(L,function(af){N(af,ae,aa)});o(Z);ab.items.level=parseInt(ae.attr("data-level"),10)+1;e(ab.items,aa)}else{Z.bind(L,function(af){y(af,ae,aa)})}}function y(aa,Z,Y){P.settings.onItemClick.apply(this,Array.prototype.slice.call([aa,Z,Y,P.settings]));if(P.settings.preventItemClick){w(aa)}}function O(ad,Z){var aa=P.settings.onMenuSwipe.apply(this,Array.prototype.slice.call([ad,Z,P.settings]));if(aa==false){return false}if(a(P).find("div.levelHolderClass").is(":animated")){return false}var ac=(Z.attr("data-level")>0)?Z.attr("data-level")-1:undefined;if(ad.type=="touchmove"&&P.settings.swipe!="desktop"){w(ad);ad=(ad.touches)?ad:ad.originalEvent;if(!ad.touches||ad.touches.length<=0){return false}var ab=ad.touches[0];P.settings.container.unbind("touchend");P.settings.container.bind("touchend",function(ae){w(ae);Z.significance=0;Z.swipeStart=0;P.settings.container.unbind("touchend")});if(Z.swipeStart!=undefined&&Z.swipeStart!=0){Z.significance=ab.pageX-Z.swipeStart}else{Z.significance=0;Z.swipeStart=ab.pageX;return true}if(Math.abs(Z.significance)>P.settings.overlapWidth*0.3){if(P.settings.direction=="rtl"){Z.significance*=(-1)}(Z.significance>0)?u((ac==undefined)?ac:Z):F(ac);Z.significance=0;Z.swipeStart=0}}else{if(P.settings.swipe!="touchscreen"){w(ad);var Y=0;Z.unbind("mousemove");Z.bind("mousemove",function(ae){Y=ae.clientX-ad.clientX;if(Math.abs(Y)>P.settings.overlapWidth*0.3){Z.unbind("mousemove");if(P.settings.direction=="rtl"){Y*=(-1)}(Y>0)?u((ac==undefined)?ac:Z):F(ac);return true}});P.settings.container.unbind("mouseup");P.settings.container.bind("mouseup",function(ae){w(ae);Z.unbind("mousemove");P.settings.container.unbind("mouseup")})}}}function i(){var Y=P.settings.container.find("#"+P.settings.menuID+" div.levelHolderClass").filter(function(){var Z=(P.settings.direction=="rtl")?(parseInt(a(this).css("margin-right"))>=0&&a(this).position().left<P.settings.container.width()-P.settings.overlapWidth):(parseInt(a(this).css("margin-left"))>=0&&a(this).position().left>=0);return Z});if(Y.length<1){Y=false}return Y}function p(){var Y=P.settings.container.find("#"+P.settings.menuID+" div.levelHolderClass").filter(function(){var Z=(P.settings.direction=="rtl")?((a(this).position().left>P.settings.container.width()||parseInt(a(this).css("margin-right"))<0)):((a(this).position().left<0||parseInt(a(this).css("margin-left"))<0));return Z});if(Y.length<1){Y=false}return Y}function S(){if(!P.redraw){P.redraw=true;var aa=arguments[0],ad=arguments[1],Z=arguments[2],ac=(a("#"+P.settings.menuID+" div.levelHolderClass").first().css("filter").match(/DXImageTransform\.Microsoft\.Shadow/))?a("#"+P.settings.menuID+" div.levelHolderClass").first().get(0).filters.item("DXImageTransform.Microsoft.Shadow").strength:0,ao=(aa==undefined)?Math.max.apply(null,a("#"+P.settings.menuID+" div.levelHolderClass").map(function(){return a(this).width()}).get())-ac:aa-ac,al=Math.max.apply(null,a("#"+P.settings.menuID+" div.levelHolderClass").map(function(){return a(this).attr("data-level")}).get()),ai=(C(P.settings.menuWidth)||(T(P.settings.menuWidth)&&P.settings.menuWidth>0)),ab=(C(P.settings.menuHeight)||(T(P.settings.menuHeight)&&P.settings.menuHeight>0)),af=(Z==undefined)?a("#"+P.settings.menuID+" div.levelHolderClass"):Z,aj;if(!ai&&P.menuWidth!=undefined){ao=P.menuWidth}(ai&&aa==undefined)?af.width(P.settings.menuWidth):af.width(ao);if(ai){if((af.width()==0||(C(P.settings.menuWidth)&&P.settings.menuWidth.indexOf("%")!=-1))&&aa==undefined){af.css("min-width","");af.width(parseInt(P.settings.container.parent().width()*parseInt(P.settings.menuWidth)/100))}ao=af.width()-ac;af.css("min-width",af.width()-ac+"px")}var ah=(ai&&aa==undefined)?(af.width()-ac+al*(P.settings.overlapWidth+ac)):(ao+al*(P.settings.overlapWidth+ac)),an=(ad==undefined)?Math.max.apply(null,a("#"+P.settings.menuID+" div.levelHolderClass").map(function(){return a(this).height()}).get()):ad;P.settings.container.css("min-height","");P.settings.container.children("nav:first").css("min-height","");if(ab){P.settings.container.height(P.settings.menuHeight);P.settings.container.css("min-height",P.settings.menuHeight);P.settings.container.children("nav:first").css("min-height",P.settings.menuHeight);a("#"+P.settings.menuID).height(P.settings.menuHeight);an=P.settings.container.height()}else{a("#"+P.settings.menuID).height(an)}P.settings.container.css("min-height",an+"px");P.settings.container.children("nav:first").css("min-height",an+"px");P.settings.container.width(ah);P.settings.container.height(an);var ak=a("#"+P.settings.menuID+" div.levelHolderClass:first"),am=i(),ae=p(),Y=K(),ag=(Y.length==1)?Y.attr("data-level"):0;if(am){am.each(function(){if(P.settings.mode=="overlap"){a(this).width(a(this).width()+(parseInt(ag,10)-parseInt(a(this).attr("data-level"),10))*(P.settings.overlapWidth+ac))}})}if(ae){ae.each(function(){(P.settings.direction=="rtl")?a(this).css("margin-right",(a(this).attr("data-level")==ak.attr("data-level")&&!P.settings.fullCollapse)?a(this).width()*(-1)+P.settings.overlapWidth:a(this).width()*(-2)):a(this).css("margin-left",(a(this).attr("data-level")==ak.attr("data-level")&&!P.settings.fullCollapse)?a(this).width()*(-1)+P.settings.overlapWidth:a(this).width()*(-2))})}aj=ak.width()+parseInt(ak.css((P.settings.direction=="rtl")?"margin-right":"margin-left"),10);j(P.settings.container,aj);P.menuWidth=ao;P.menuHeight=an;P.redraw=false}}function j(Y,Z){if(Y==undefined||Z==undefined){return false}Y.css("min-width","");Y.css("min-width",Z+"px");Y.children("nav:first").css("min-width","");Y.children("nav:first").css("min-width",Z+"px");Y.width(Z)}function E(){var Z=a("#"+P.settings.menuID+" div.levelHolderClass:first"),Y=P.settings.container.find("#"+P.settings.menuID+" div.levelHolderClass").filter(function(){var aa=(P.settings.direction=="rtl")?((a(this).position().left>P.settings.container.width()||parseInt(a(this).css("margin-right"))<0)&&a(this).attr("data-level")>Z.attr("data-level")):((a(this).position().left<0||parseInt(a(this).css("margin-left"))<0)&&a(this).attr("data-level")>Z.attr("data-level"));return aa});Y.each(function(){if(P.settings.direction=="rtl"){a(this).css("margin-right",((a(this).attr("data-level")==Z.attr("data-level")&&!P.settings.collapsed)?0:(-2)*a(this).width()))}else{a(this).css("margin-left",((a(this).attr("data-level")==Z.attr("data-level")&&!P.settings.collapsed)?0:(-2)*a(this).width()))}});if(P.settings.direction=="rtl"){Z.css("margin-right",(!P.settings.collapsed)?0:(-2)*Z.width())}else{Z.css("margin-left",(!P.settings.collapsed)?0:(-2)*Z.width())}}function T(Y){return typeof Y==="number"&&parseFloat(Y)==parseInt(Y,10)&&!isNaN(Y)}function C(Y){return typeof Y==="string"&&(Y.indexOf("%")!=-1||Y.indexOf("px")!=-1||Y.indexOf("em")!=-1)}function l(){var Y=(c&&c.menu!=undefined)?X():v();k(P.settings.container,L);S();E();A(P.settings.collapsed);P.settings.onMenuReady.apply(this,Array.prototype.slice.call([P.settings]));return r}function A(Z){if(Z){var Y=a("#"+P.settings.menuID+" div.levelHolderClass:first");Y.find("ul").hide();Y.addClass(P.settings.menuInactiveClass);if(P.settings.direction=="rtl"){Y.stop().animate({marginRight:((-1)*Y.width()+((P.settings.fullCollapse)?0:P.settings.overlapWidth))})}else{Y.stop().animate({marginLeft:((-1)*Y.width()+((P.settings.fullCollapse)?0:P.settings.overlapWidth))})}}}function D(Y){if(P.settings.containersToPush==null){return false}a.each(P.settings.containersToPush,function(){var aa=parseInt(a(this).css("margin-left")),ab=T(aa)?aa:0,Z=parseInt(a(this).css("margin-right")),ac=T(Z)?Z:0;a(this).stop().animate({marginLeft:ab+((P.settings.direction=="rtl")?(-1):1)*Y,marginRight:ac+((P.settings.direction=="rtl")?1:(-1))*Y})})}function F(){if(a(P).find("div.levelHolderClass").is(":animated")){return false}P.settings.onCollapseMenuStart.apply(this,Array.prototype.slice.call([P.settings]));var Z=arguments[0],ai=arguments[1],ad={},aa,ab,ac,al,aj,ak=a("#"+P.settings.menuID+" div.levelHolderClass:first"),ag=(Z==undefined)?true:false,ah;ad.collapsingEnded=false;if(typeof Z=="object"){Z=Z.attr("data-level")}else{if(typeof Z=="string"){var Y=Q(Z);if(Y&&Y.length==1){Z=Y.attr("data-level")}else{Z=ak.attr("data-level")}}else{if(Z==undefined||!T(Z)||Z<0){Z=ak.attr("data-level")}}}if(ai==undefined&&typeof ai!="object"){ai=[{method:P.settings.onCollapseMenuEnd,args:[P.settings]}]}else{a.merge(ai,[{method:P.settings.onCollapseMenuEnd,args:[P.settings]}])}var af=P.settings.container.find("#"+P.settings.menuID+" div.levelHolderClass").filter(function(){var am=(P.settings.direction=="rtl")?(a(this).attr("data-level")>Z)&&(parseInt(a(this).css("margin-right"))>=0&&a(this).position().left<P.settings.container.width()-P.settings.overlapWidth):(a(this).attr("data-level")>Z)&&(parseInt(a(this).css("margin-left"))>=0&&a(this).position().left>=0);return am}),ae=P.settings.container.find("#"+P.settings.menuID+" div.levelHolderClass").filter(function(){var am=(P.settings.direction=="rtl")?(a(this).attr("data-level")<=Z)&&(parseInt(a(this).css("margin-right"))>=0&&a(this).position().left<P.settings.container.width()-P.settings.overlapWidth):(a(this).attr("data-level")<=Z)&&(parseInt(a(this).css("margin-left"))>=0&&a(this).position().left>=0);return am});if(ae.length>0){ad.prevAnimEnded=false;af.each(function(am,an){aa=(a(an).css("filter").match(/DXImageTransform\.Microsoft\.Shadow/))?a(an).get(0).filters.item("DXImageTransform.Microsoft.Shadow").strength:0;ab=(P.settings.mode=="overlap")?a(an).width()-(af.length+ae.length-a(an).attr("data-level")-1)*(P.settings.overlapWidth+aa)-aa:a(an).width()-aa;if(P.settings.direction=="rtl"){a(an).stop().animate({marginRight:((-1)*ab),width:ab})}else{a(an).stop().animate({marginLeft:((-1)*ab),width:ab})}});ad.nextAnimEnded=(af.length>0)?false:true;af.last().queue(function(){ad.nextAnimEnded=true;J(ad,ai)});ae.each(function(an,ap){aa=(a(ap).css("filter").match(/DXImageTransform\.Microsoft\.Shadow/))?a(ap).get(0).filters.item("DXImageTransform.Microsoft.Shadow").strength:0;var am=ae.filter(function(){return a(this).attr("data-level")==Z});am.css("visibility","visible");am.find("."+P.settings.backItemClass).css("visibility","visible");am.find("ul").css("visibility","visible");am.removeClass(P.settings.menuInactiveClass);ab=(P.settings.mode=="overlap")?a(ap).width()-af.length*(P.settings.overlapWidth+aa)-aa:a(ap).width()-aa;if(P.settings.direction=="rtl"){a(ap).stop().animate({width:ab,marginRight:(a(ap).attr("data-level")==ak.attr("data-level")&&ag)?(P.settings.fullCollapse)?(-1)*a(ap).width():((-1)*a(ap).width()+((P.settings.mode=="overlap")?af.length+1:1)*P.settings.overlapWidth):0},function(){if(a(ap).attr("data-level")==ak.attr("data-level")&&ag){ak.children("ul").first().hide(500,function(){ak.addClass(P.settings.menuInactiveClass)})}ah=ak.width()+parseInt(ak.css("margin-right"),10);j(P.settings.container,ah)})}else{a(ap).stop().animate({width:ab,marginLeft:(a(ap).attr("data-level")==ak.attr("data-level")&&ag)?(P.settings.fullCollapse)?(-1)*a(ap).width():((-1)*a(ap).width()+((P.settings.mode=="overlap")?af.length+1:1)*P.settings.overlapWidth):0},function(){if(a(ap).attr("data-level")==ak.attr("data-level")&&ag){ak.children("ul").first().hide(500,function(){ak.addClass(P.settings.menuInactiveClass)})}ah=ak.width()+parseInt(ak.css("margin-left"),10);j(P.settings.container,ah)})}ac=(P.settings.mode=="overlap")?((-1)*(af.length*(P.settings.overlapWidth+aa))):0;if(a(ap).attr("data-level")==ak.attr("data-level")&&ag){var ao=(P.settings.fullCollapse)?(-1)*(ak.width()-aa):(-1)*(ak.width()-aa)+P.settings.overlapWidth;D(ao)}else{D(ac)}});ae.last().queue(function(){ad.prevAnimEnded=true;J(ad,ai)})}ad.collapsingEnded=true;J(ad,ai);return r}function x(){if(a(P).find("div.levelHolderClass").is(":animated")){return false}P.settings.onExpandMenuStart.apply(this,Array.prototype.slice.call([P.settings]));var ab=arguments[0],ao=arguments[1],af,am,ap,an,Y,al={},Z=a("#"+P.settings.menuID+" div.levelHolderClass:first"),ai=(ab==undefined)?true:false,aa=(P.settings.direction=="rtl")?parseInt(Z.css("margin-right"),10)<0||Z.position().left>=P.settings.container.width()-P.settings.overlapWidth:parseInt(Z.css("margin-left"),10)<0||Z.position().left<0;al.expandingEnded=false;if(ao==undefined&&typeof ao!="object"){ao=[{method:P.settings.onExpandMenuEnd,args:[P.settings]}]}else{a.merge(ao,[{method:P.settings.onExpandMenuEnd,args:[P.settings]}])}if(ai){al.baseAnimEnded=false;Z.removeClass(P.settings.menuInactiveClass);Y=Z.width();j(P.settings.container,Y);if(P.settings.direction=="rtl"){Z.stop().animate({marginRight:0},function(){Z.children("ul").first().show(500,function(){al.baseAnimEnded=true;J(al,ao)})})}else{Z.stop().animate({marginLeft:0},function(){Z.children("ul").first().show(500,function(){al.baseAnimEnded=true;J(al,ao)})})}an=(P.settings.fullCollapse)?Z.width():Z.width()-P.settings.overlapWidth;var ah=(!h(Z))?D(an):null}else{var ag;if(typeof ab=="object"){ag=ab}else{if(typeof ab=="string"){ag=Q(ab)}else{ag=null;a.error("Provided menu selector is not valid")}}if(ag&&ag.length==1){var ac=K(),ad=(ac.length==1)?ac.attr("data-level"):0,ak=ag.width(),aj=s(ag);al.setToOpenAnimEnded=false;if(aj){var ae=a(aj).length-1;Z.find("ul").each(function(){a(this).show(0)});a(aj).find("ul").css("visibility","hidden");a(aj).find("div").css("visibility","visible");a(aj).find("."+P.settings.backItemClass).css("visibility","hidden");a(aj).each(function(aq,ar){af=(a(ar).css("filter").match(/DXImageTransform\.Microsoft\.Shadow/))?a(ar).get(0).filters.item("DXImageTransform.Microsoft.Shadow").strength:0;am=ak-af+(ae-a(ar).attr("data-level"))*(P.settings.overlapWidth+af);if(P.settings.container.width()<am&&P.settings.mode=="overlap"){j(P.settings.container,am)}if(P.settings.direction=="rtl"){a(ar).stop().animate({marginRight:0,width:(P.settings.mode=="overlap")?am:ak-af},function(){a(ar).addClass(P.settings.menuInactiveClass)})}else{a(ar).stop().animate({marginLeft:0,width:(P.settings.mode=="overlap")?am:ak-af},function(){a(ar).addClass(P.settings.menuInactiveClass)})}});a(aj).last().queue(function(){a(this).removeClass(P.settings.menuInactiveClass);al.setToOpenAnimEnded=true;J(al,ao)});if(aa){an=(P.settings.fullCollapse)?Z.width():(Z.width()-P.settings.overlapWidth);D(an)}if(P.settings.mode=="overlap"){ap=((aa)?(ak+(ae-((P.settings.fullCollapse)?0:1))*(P.settings.overlapWidth+af)):((ae-ad)*(P.settings.overlapWidth+af)));D(ap)}ag.css("visibility","visible");ag.find("."+P.settings.backItemClass).css("visibility","visible");ag.find("ul").css("visibility","visible");ag.removeClass(P.settings.menuInactiveClass)}else{a.error("Invalid menu object provided")}}else{a.error("No or too many menus named "+ab)}}al.expandingEnded=true;J(al,ao)}function u(){var ad=arguments[0],aa,Z=K(),ac,Y,ab;if(typeof ad=="object"){aa=ad}else{if(typeof ad=="string"){ab=Q(ad);if(ab){aa=ab.eq(0)}else{a.error(ad+" menu level does not exist!")}}else{aa=a("#"+P.settings.menuID+" div.levelHolderClass:first")}}ac=B(aa,Z,true);Y=(ac.length>0)?Math.max.apply(null,ac.map(function(){return a(this).attr("data-level")}).get()):0;if(Y<Z.attr("data-level")){F(Y,[{method:x,args:arguments}])}else{x.apply(this,Array.prototype.slice.call(arguments))}return r}function Q(){var Y=arguments[0],Z,aa=P.settings.container.find("#"+P.settings.menuID+" div.levelHolderClass").filter(function(){return((a(this).children("h2").text()==Y))});if(aa.length>0){d=aa;Z=d}else{d=false;Z=d}return Z}function R(){var aa=arguments[0],Y,Z=P.settings.container.find("#"+P.settings.menuID+" div.levelHolderClass li").filter(function(){return((a(this).children("a").text()==aa))});if(Z.length>0){d=Z;Y=d}else{d=false;Y=d}return Y}function s(){var aa=arguments[0],ab,Z,Y;if(aa==undefined||aa.length!=1){d=false;return d}ab=aa.parents("div.levelHolderClass");Z=a.merge(ab.get().reverse(),aa.get());d=Z;return d}function B(){var ah=arguments[0],af=arguments[1],ae=(arguments[2]!=undefined)?arguments[2]:false,ad,aa,ac,ab,ai,Z,ag,Y;if(ah==undefined||af==undefined){d=false;return d}ad=(ah.length==1)?ah.parents("div.levelHolderClass"):null;aa=(af.length==1)?af.parents("div.levelHolderClass"):null;ac=(ad!=null)?a.merge(ad.get().reverse(),ah.get()):[];ab=(aa!=null)?a.merge(aa.get().reverse(),af.get()):[];ai=(ac.length>=ab.length)?ac:ab;Z=(ai===ac)?ab:ac;ag=a(ai).filter(function(){return(ae)?(a.inArray(this,Z)!=-1):(a.inArray(this,Z)==-1)});d=ag;return d}function K(){var aa=P.settings.container.find("#"+P.settings.menuID+" div.levelHolderClass").filter(function(){var ab=(P.settings.direction=="rtl")?((parseInt(a(this).css("margin-right"))>=0&&a(this).position().left<P.settings.container.width()-P.settings.overlapWidth)):((parseInt(a(this).css("margin-left"))>=0&&a(this).position().left>=0));return ab}),Z=Math.max.apply(null,aa.map(function(){return a(this).attr("data-level")}).get()),Y=aa.filter(function(){return a(this).attr("data-level")==Z});d=Y;return d}function h(){var aa=arguments[0],Z=false;if(aa==undefined){return Z}var Y=(P.settings.direction=="rtl")?(parseInt(aa.css("margin-right"))>=0&&aa.position().left<P.settings.container.width()-P.settings.overlapWidth):(parseInt(aa.css("margin-left"))>=0&&aa.position().left>=0);return Y}function G(){var Z=arguments[0],ab=arguments[1],Y=arguments[2];if(ab==undefined||typeof Z!="object"||!ab){return false}if(Z.level==undefined){Z.level=parseInt(ab.attr("data-level"),10)}if(Y==undefined){Y=0}var aa=ab.find("ul:first");a.each(Z,function(){if(this.name!=undefined){V(this,ab,Y)}});S(P.menuWidth);return r}function z(){var ab=arguments[0];if(ab==undefined||typeof ab!="object"||ab.length==0){return false}ab.remove();var Y=K();if(Y.length==1){Y.css("visibility","visible");Y.find("."+P.settings.backItemClass).css("visibility","visible");Y.find("ul").css("visibility","visible");Y.removeClass(P.settings.menuInactiveClass);var Z=Y.width()-P.menuWidth;if(Z!=0){var aa=i();if(aa){aa.each(function(){a(this).width(a(this).width()-Z)})}}}S(P.menuWidth);return r}function J(Y,aa){var Z=true;a.each(Y,function(ab,ac){Z=Z&&ac});if(Z){window.setTimeout(function(){a.each(aa,function(ab,ac){ac.method.apply(this,Array.prototype.slice.call(ac.args))})},1)}}function f(){var Y=false;if(P.settings[arguments[0]]!=undefined){if(arguments[1]!=undefined){P.settings[arguments[0]]=arguments[1]}Y=P.settings[arguments[0]]}else{a.error("No option "+arguments[0]+" found in jQuery.multilevelpushmenu")}return Y}function q(){var Y=false;(function(Z){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(Z)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(Z.substr(0,4))){Y=true}})(navigator.userAgent||navigator.vendor||window.opera);return Y}if(q()){L="touchend";g="touchmove"}else{L="click";g="mousedown"}if(H[c]){d=H[c].apply(this,Array.prototype.slice.call(b,1));return d}else{if(typeof c==="object"||!c){d=H.init.apply(this,arguments);return d}else{a.error("No "+c+" method found in jQuery.multilevelpushmenu")}}if(!d){d=this}});return d}}(jQuery));