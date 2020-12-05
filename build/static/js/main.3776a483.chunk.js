(this["webpackJsonpmaps-demo"]=this["webpackJsonpmaps-demo"]||[]).push([[0],{100:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=a(37),i=(a(100),a(7)),s=a.n(i),u=a(14),m=a(11),d=a(12),p=a(13),f=function(e){return e*Math.PI/180},g=function(e,t){console.log(e,t);var a=0,n=f(t.lat-e.lat),r=f(t.lng-e.lng),l=f(e.lat),c=f(t.lat),o=Math.sin(n/2)*Math.sin(n/2)+Math.sin(r/2)*Math.sin(r/2)*Math.cos(l)*Math.cos(c);return(a=6371*(2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o))))<1e3&&(a*=1e3),Object(p.a)(Object(p.a)({},e),{},{distance:a})},b=function(e){var t=e.showSidebar,a=e.handleShowSidebar,n={container:{position:"absolute",top:0,left:0,display:"flex",width:"100%",height:"100vh",zIndex:5},body:{position:"relative",width:"80%",height:"100vh",backgroundColor:"#fff"},scrim:{position:"relative",width:"20%",height:"100vh",backgroundColor:"black",opacity:".5"}};return t?r.a.createElement("div",{className:"sidebar-container",style:n.container},r.a.createElement("div",{className:"sidebar-body",style:n.body},"test"),r.a.createElement("div",{role:"button",tabIndex:0,"aria-label":"close sidebar",onClick:a,className:"scrim",style:n.scrim})):null},h=a(46),v=a(76),y=a.n(v),E=a(77),j=a.n(E),O={styles:[{featureType:"administrative.land_parcel",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"simplified"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry",stylers:[{hue:"#f49935"}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{hue:"#fad959"}]},{featureType:"road.arterial",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"simplified"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{hue:"#a1cdfc"},{saturation:30},{lightness:49}]}],disableDefaultUI:!0,disableDoubleClickZoom:!0},w=function(e){var t=e.zoom,a=e.setNewLocation,n=e.userLocation,l=e.locations,c=e.selectLocation,o=e.center,i=Object(h.c)({googleMapsApiKey:"AIzaSyAgK8yGmsMz-mB6xO2CETQ1rMpvq6muPhY"}),s=i.isLoaded,u=i.loadError;console.log("locations from MAP",l,"length: ",l.length);return u?"Error":s?r.a.createElement(h.a,{mapContainerStyle:{width:"100vw",height:"100vh"},zoom:t,center:o||n,options:O,onDblClick:function(e){return a(e)}},r.a.createElement(h.b,{className:"location-marker",position:{lat:n.lat,lng:n.lng},icon:{scaledSize:new window.google.maps.Size(40,40),url:y.a}}),l.map((function(e){return console.log(e),r.a.createElement(h.b,{key:e.id||e.lat,className:"marker",position:{lat:e.lat,lng:e.lng},icon:{scaledSize:new window.google.maps.Size(40,40),url:j.a},onClick:function(){return c(e)}})}))):r.a.createElement("div",null,"Loading...")};w.defaultProps={center:null};var k=w,A=a(30),x=a.n(A),S="/api/locations",C=null,N={setToken:function(e){console.log(e),C="bearer ".concat(e)},getValidatedLocations:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(S),e.next=3,x.a.get(S);case 3:return t=e.sent,console.log(t.data),e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getPendingLocations:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(S,"/pending"));case 2:return t=e.sent,console.log(t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createNewLocation:function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:C}},e.next=3,x.a.post("".concat(S,"/pending"),t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateLocation:function(){var e=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.put("".concat(S,"/").concat(t.id),t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z=a(78),L=a.n(z),T=a(79),U=a.n(T),R=function(e){var t=e.handleShowSidebar,a={container:{position:"fixed",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",height:"8vh",padding:"0 .5rem 0 .5rem",backgroundColor:"#85cad4",zIndex:1,opacity:".85"},menuIconContainer:{padding:"0.08rem",display:"flex",alignItems:"center",backgroundColor:"#0A95A8",borderRadius:"2px"},menuIcon:{color:"#fff"}};return r.a.createElement("div",{className:"navigation-container",style:a.container},r.a.createElement(L.a,{onClick:t,style:a.menuIcon,fontSize:"large"}),r.a.createElement(o.b,{to:"/login"},r.a.createElement(U.a,{style:a.menuIcon,fontSize:"large"})))},P=a(47),q=a(164),Z=a(167),J=a(166),Q=a(170),H=a(165),M=a(126),K=a(168),B=a(169),F=a(53),I=a.n(F),G=a(82),V=a.n(G),W=a(83),Y=a.n(W),D=a(54),X=a.n(D),_=a(45),$=a.n(_),ee=a(55),te=a.n(ee),ae=(a(75),function(e){var t=e.newLocationCoords,a=e.toggleInfoBar,l=e.buttonLabelAdd,c=e.buttonLabelCancel,o=e.removePlaceholderLocation,i=Object(n.useState)({inva:!1,child:!1}),d=Object(m.a)(i,2),f=d[0],g=d[1],b=Object(n.useState)({name:"",type:"",payable:"",services:[],validated:!1,lat:t.lat,lng:t.lng,rating:3,ratings:0}),h=Object(m.a)(b,2),v=h[0],y=h[1],E=function(e){var t=e.target,a=t.name,n=t.value;"inva"===n&&g(Object(p.a)(Object(p.a)({},f),{},{inva:!f.inva})),"child"===n&&g(Object(p.a)(Object(p.a)({},f),{},{child:!f.child})),"inva"!==n||v.services.includes("inva")||y(Object(p.a)(Object(p.a)({},v),{},{services:v.services.concat(n)})),"inva"===n&&v.services.includes("inva")&&y(Object(p.a)(Object(p.a)({},v),{},{services:v.services.filter((function(e){return e!==n}))})),"child"!==n||v.services.includes("child")||y(Object(p.a)(Object(p.a)({},v),{},{services:v.services.concat(n)})),"child"===n&&v.services.includes("child")&&y(Object(p.a)(Object(p.a)({},v),{},{services:v.services.filter((function(e){return e!==n}))})),"service"!==a&&y(Object(p.a)(Object(p.a)({},v),{},Object(P.a)({},a,n)))},j=function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,N.createNewLocation(v);case 3:n=e.sent,console.log(n),a();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"infobar-container",style:{backgroundColor:"#85cad4",padding:".5rem",height:"50vh",position:"absolute",bottom:0,left:0}},r.a.createElement("form",{onSubmit:j},r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(H.a,{style:{color:"#fff",fontSize:"1.2rem",fontWeight:"300"}},"Lis\xe4\xe4 kohde")),r.a.createElement(q.a,{item:!0,xs:12,style:{marginBottom:".5rem"}},r.a.createElement(Z.a,{className:"new-location-name-input",label:"Nimi",name:"name",value:v.name,size:"small",onChange:function(e){return E(e)},required:!0,fullWidth:!0})),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(H.a,{component:"legend",style:{marginTop:".5rem",color:"#fff"}},"Tyyppi")),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(J.a,null,r.a.createElement(q.a,{container:!0,spacing:2,alignContent:"center",justify:"space-between"},r.a.createElement(q.a,{item:!0,xs:3},r.a.createElement(Q.a,{control:r.a.createElement(K.a,{size:"small",style:{color:"#fff"}}),name:"type",value:"public",checked:"public"===v.type,onChange:function(e){return E(e)},label:r.a.createElement(I.a,{style:{color:"#fff"}}),size:"small",row:!0})),r.a.createElement(q.a,{item:!0,xs:3},r.a.createElement(Q.a,{control:r.a.createElement(K.a,{size:"small",style:{color:"#fff"}}),name:"type",value:"restaurant",checked:"restaurant"===v.type,onChange:function(e){return E(e)},label:r.a.createElement(V.a,{style:{color:"#fff"}}),size:"small"})),r.a.createElement(q.a,{item:!0,xs:3},r.a.createElement(Q.a,{control:r.a.createElement(K.a,{size:"small",style:{color:"#fff"}}),name:"type",value:"cafe",checked:"cafe"===v.type,onChange:function(e){return E(e)},label:r.a.createElement(Y.a,{style:{color:"#fff"}}),size:"small"})),r.a.createElement(q.a,{item:!0,xs:3},r.a.createElement(Q.a,{control:r.a.createElement(K.a,{size:"small",style:{color:"#fff"}}),name:"type",value:"other",checked:"other"===v.type,onChange:function(e){return E(e)},label:r.a.createElement(X.a,{style:{color:"#fff"}}),size:"small"}))))),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(H.a,{component:"legend",style:{marginTop:".2rem",color:"#fff"}},"Lis\xe4palvelut")),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(M.a,null,r.a.createElement(q.a,{container:!0},r.a.createElement(Q.a,{control:r.a.createElement(B.a,{style:{color:"#fff"},name:"service",value:"inva",checked:f.inva,onChange:function(e){return E(e)},size:"small"}),label:r.a.createElement($.a,{style:{color:"#fff"}})}),r.a.createElement(Q.a,{control:r.a.createElement(B.a,{name:"service",value:"child",checked:f.child,onChange:function(e){return E(e)},style:{color:"#fff"},size:"small"}),label:r.a.createElement(te.a,{style:{color:"#fff"}})})))),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(J.a,null,r.a.createElement(q.a,{container:!0},r.a.createElement(Q.a,{control:r.a.createElement(K.a,{name:"payable",value:"payable",checked:"payable"===v.payable,onChange:function(e){return E(e)},style:{color:"#fff"},size:"small"}),label:"Maksullinen",style:{color:"#fff",fontWeight:300}}),r.a.createElement(Q.a,{control:r.a.createElement(K.a,{name:"payable",value:"free",checked:"free"===v.payable,onChange:function(e){return E(e)},style:{color:"#fff"},size:"small"}),label:"Maksuton",style:{color:"#fff",fontWeight:300}})))),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(q.a,{container:!0,justify:"space-around",alignItems:"flex-end"},r.a.createElement(q.a,{item:!0,xs:4},r.a.createElement("button",{className:"btn-add",type:"submit"},l)),r.a.createElement(q.a,{item:!0,xs:4},r.a.createElement("button",{className:"btn-cancel",type:"button",onClick:function(){o({lat:v.lat,lng:v.lng}),y({name:"",type:"",payable:"",services:[],validated:!1,lat:t.lat,lng:t.lng,rating:3,ratings:0}),a()}},c)))))))}),ne=a(56),re=a.n(ne),le=function(e){var t=e.locationDetails,a=e.locations,l=Object(n.useState)(!1),c=Object(m.a)(l,2),o=c[0],i=c[1],s={container:{position:"fixed",bottom:0,height:o?"45%":"8%",width:"100%",backgroundColor:"#fff",zIndex:1,opacity:".85"},header:{display:"flex",justifyContent:"space-between",padding:"1rem",height:o?"20%":"100%",color:"#fff",backgroundColor:"#85cad4",itemsRight:{display:"flex",item:{marginLeft:"1rem"}}}},u=function(){i(!o)};return r.a.createElement("div",{style:s.container,role:"button",tabIndex:0,className:"nearest-locations-container",onClick:u},r.a.createElement("div",{style:s.header,className:"nearest-locations-header",draggable:"true"},r.a.createElement("div",{className:"nearest-locations-header-name"},a.length?a[0].name:null),r.a.createElement("div",{style:s.header.itemsRight},a.length?r.a.createElement("div",{className:"nearest-locations-header-distance",style:s.header.itemsRight.item},a[0].distance<=1e3?"".concat(a[0].distance.toFixed(0),"m"):"".concat((a[0].distance/1e3).toFixed(1),"km")):null,t&&r.a.createElement(re.a,{onClick:function(){return u()},style:s.header.itemsRight.item}))),r.a.createElement("div",{className:"nearest-locations-body",draggable:"true"},o&&a.slice(1,5).map((function(e){return r.a.createElement("div",{key:e.id,style:{display:"flex",justifyContent:"space-between",width:"100%",height:"80%",padding:"1rem"},className:"nearest-locations-body-items"},r.a.createElement("div",{style:{color:"black"}},e.name),r.a.createElement("div",{style:{color:"black"}},e.distance<=1e3?"".concat(e.distance.toFixed(0),"m"):"".concat((e.distance/1e3).toFixed(1)," km")))}))))};le.defaultProps={locationDetails:null};var ce=le,oe=a(4),ie=a(171),se=a(84),ue=Object(oe.a)({iconFilled:{color:"#8c4a38"}})(ie.a),me=function(e){var t=e.locationDetails,a=e.selectLocation,l=e.rate,c=Object(n.useState)(t.rating||3),o=Object(m.a)(c,2),i=o[0],d=o[1],f={container:{backgroundColor:"#fff",height:"45vh",width:"100%",position:"absolute",bottom:0,left:0,zIndex:100},header:{display:"flex",justifyContent:"space-between",padding:".8rem 1rem .8rem 1rem",marginBottom:"1rem",backgroundColor:"#85cad4",itemsRight:{display:"flex",item:{marginLeft:"1rem"}}},body:{display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"3fr",paddingRight:"1rem",paddingLeft:"1rem"}},g=function(){var e=Object(u.a)(s.a.mark((function e(a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(p.a)(Object(p.a)({},t),{},{rating:+a.target.value}),console.log("rated",n),e.next=4,N.updateLocation(n);case 4:r=e.sent,d(r.rating),l(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"selected-location-container",style:f.container},r.a.createElement("div",{className:"selected-location-header",style:f.header},r.a.createElement("div",{className:"selected-location-header-name"},t.name),r.a.createElement("div",{style:f.header.itemsRight},r.a.createElement("div",{className:"selected-location-header-distance",style:f.header.itemsRight.item},t.distance),r.a.createElement(re.a,{onClick:function(){return a(null)},style:f.header.itemsRight.item}))),r.a.createElement("div",{className:"selected-location-body",style:f.body},r.a.createElement("div",{className:"selected-location-type"},function(){switch(t.type){case"public":return r.a.createElement(I.a,null);case"inva":return r.a.createElement($.a,null);default:return r.a.createElement(X.a,null)}}()),r.a.createElement("div",{className:"selected-location-payable"},"payable"===t.payable?"Maksullinen":"Maksuton"),t.services&&r.a.createElement("div",{className:"selected-location-services-container"},r.a.createElement("div",{className:"selected-location-services-title"},"Lis\xe4palvelut"),r.a.createElement("div",{className:"selected-locations-services-icons"},t.services.map((function(e){return"inva"===e?r.a.createElement($.a,null):r.a.createElement(te.a,null)})))),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(ue,{name:"rating",value:i,onChange:function(e){return g(e)},icon:r.a.createElement(se.a,{size:"1.8rem",style:{marginRight:".1rem"}})}))))};me.defaultProps={locationDetails:null};var de=me,pe={login:function(){var e=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fe=function(e){var t=e.handleUser,a=Object(n.useState)(""),l=Object(m.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)(""),p=Object(m.a)(i,2),f=p[0],g=p[1],b=Object(d.e)(),h=function(){var e=Object(u.a)(s.a.mark((function e(a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={email:c,password:f},e.next=4,pe.login(n);case 4:(r=e.sent).token&&(b.push("/"),t(n),N.setToken(r.token));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:h,className:"login"},r.a.createElement("div",null,r.a.createElement("h1",{className:"otsikko"},"Kirjaudu sis\xe4\xe4n"),r.a.createElement("label",{htmlFor:"email"},"K\xe4ytt\xe4j\xe4tunnus:",r.a.createElement("input",{className:"labelit",name:"email",type:"text",required:!0,value:c,onChange:function(e){return function(e){o(e.target.value)}(e)}}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Salasana:",r.a.createElement("input",{className:"labelit",name:"password",type:"password",required:!0,value:f,onChange:function(e){return function(e){g(e.target.value)}(e)}}))),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"btn-add"},"Kirjaudu sis\xe4\xe4n"))))},ge={register:function(){var e=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/api/register",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},be=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(m.a)(c,2),i=o[0],d=o[1],p=Object(n.useState)(""),f=Object(m.a)(p,2),g=f[0],b=f[1],h=Object(n.useState)(""),v=Object(m.a)(h,2),y=v[0],E=v[1],j=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:a,email:i,password:g},e.next=4,ge.register(n);case 4:r=e.sent,console.log(r),d(""),b(""),l("");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:j,className:"register"},r.a.createElement("div",null,r.a.createElement("h1",{className:"otsikko"},"Rekister\xf6idy"),r.a.createElement("label",{htmlFor:"username"},"K\xe4ytt\xe4j\xe4tunnus:",r.a.createElement("input",{className:"labelit",name:"username",type:"text",required:!0,value:a,onChange:function(e){return function(e){l(e.target.value)}(e)}}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"S\xe4hk\xf6posti:",r.a.createElement("input",{className:"labelit",name:"email",type:"text",required:!0,value:i,onChange:function(e){return function(e){d(e.target.value)}(e)}}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Salasana:",r.a.createElement("input",{className:"labelit",name:"password",type:"password",required:!0,value:g,onChange:function(e){return function(e){b(e.target.value)}(e)}}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password-confirmation"},"Salasana Uudelleen:",r.a.createElement("input",{className:"labelit",name:"password-confirmation",type:"password",required:!0,value:y,onChange:function(e){return function(e){E(e.target.value)}(e)}}))),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"btn-add"},"Rekister\xf6idy"))))},he=function(){var e=Object(n.useState)({lat:65.012615,lng:25.471453}),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)({}),o=Object(m.a)(c,2),i=o[0],p=o[1],f=Object(n.useState)([]),h=Object(m.a)(f,2),v=h[0],y=h[1],E=Object(n.useState)(null),j=Object(m.a)(E,2),O=j[0],w=j[1],A=Object(n.useState)(!1),x=Object(m.a)(A,2),S=x[0],C=x[1],z=Object(n.useState)(5),L=Object(m.a)(z,2),T=L[0],U=L[1],P=Object(n.useState)(null),q=Object(m.a)(P,2),Z=q[0],J=q[1],Q=Object(n.useState)(!1),H=Object(m.a)(Q,2),M=H[0],K=H[1],B=Object(n.useState)(null),F=Object(m.a)(B,2),I=F[0],G=F[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.permissions.query({name:"geolocation"});case 2:"granted"===(t=e.sent).state&&(navigator.geolocation.getCurrentPosition((function(e){console.log(e),l({lat:+e.coords.latitude,lng:+e.coords.longitude})})),U(16)),"prompt"===t.state&&navigator.geolocation.getCurrentPosition((function(e){l({lat:+e.coords.latitude,lng:+e.coords.longitude}),U(16)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getValidatedLocations();case 2:t=e.sent,n=t.map((function(e){return g(e,a)})),console.log("locations from useeffect",n),y(v.concat(n).sort((function(e,t){return e.distance-t.distance})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]);var V=function(){C(!S)},W=function(e){w(e),e&&J({lat:e.lat,lng:e.lng})},Y=function(){K(!M)};return r.a.createElement("div",{className:"app"},r.a.createElement(b,{handleShowSidebar:Y,showSidebar:M}),r.a.createElement(R,{handleShowSidebar:Y}),r.a.createElement(d.a,{path:"/login"},r.a.createElement(fe,{handleUser:function(e){G(e)}})),r.a.createElement(d.a,{path:"/register"},r.a.createElement(be,null)),r.a.createElement(d.a,{path:"/",exact:!0},r.a.createElement(k,{zoom:T,userLocation:a,locations:v,selectLocation:W,setNewLocation:function(e){if(I){var t={lat:e.latLng.lat(),lng:e.latLng.lng()};y(v.concat(t)),p(t)}C(!S)},center:Z}),S&&r.a.createElement(ae,{buttonLabelAdd:"Lis\xe4\xe4 vessa",buttonLabelCancel:"Peruuta",newLocationCoords:i,toggleInfoBar:V,removePlaceholderLocation:function(e){y(v.filter((function(t){return t.lat!==e.lat&&t.lng!==e.lng})))}}),r.a.createElement(ce,{locationDetails:O,selectLocation:W,locations:v,toggleInfoBar:V}),O&&r.a.createElement(de,{locationDetails:O,selectLocation:W,rate:function(e){y(v.map((function(t){return t.id===e.id?e:t})))}})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(he,null))),document.getElementById("root"))},75:function(e,t,a){},76:function(e,t){e.exports="data:image/png;base64,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"},77:function(e,t,a){e.exports=a.p+"static/media/poop1.5d3e3b20.png"},95:function(e,t,a){e.exports=a(125)}},[[95,1,2]]]);
//# sourceMappingURL=main.3776a483.chunk.js.map