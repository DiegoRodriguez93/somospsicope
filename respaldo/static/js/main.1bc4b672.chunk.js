(this["webpackJsonpadmin-react"]=this["webpackJsonpadmin-react"]||[]).push([[0],{293:function(e,t,r){},294:function(e,t,r){"use strict";r.r(t);var n=r(2),o=r(1),a=r.n(o),c=r(36),s=r.n(c),i=(r(145),r(146),r(147),r(79),r(129)),l=r(130),d=r(139),u=r(138),m=r(4),j=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={collapse:!1},e.onClick=function(){e.setState({collapse:!e.state.collapse})},e.toggle=function(){e.setState({dropdownOpen:!e.state.dropdownOpen})},e}return Object(l.a)(r,[{key:"render",value:function(){return Object(n.jsxs)(m.m,{className:"flexible-navbar",light:!0,expand:"md",scrolling:!0,children:[Object(n.jsx)(m.n,{href:"/",children:Object(n.jsx)("strong",{children:"SomosPsicope"})}),Object(n.jsx)(m.p,{onClick:this.onClick}),Object(n.jsxs)(m.f,{isOpen:this.state.collapse,navbar:!0,children:[Object(n.jsx)(m.o,{left:!0}),Object(n.jsx)(m.o,{right:!0})]})]})}}]),r}(o.Component),h=r(12),b=r(19);function p(){var e=!0;return 1!==localStorage.getItem("idUserAdmin")&&"041292200a64c28adcd1c66feac2cd2b"!==localStorage.getItem("token")&&(e=!1),e}var f=function(){var e=Object(h.f)();if(!p())return e.push("/admin"),null;return Object(n.jsxs)("div",{className:"sidebar-fixed position-fixed",children:[Object(n.jsx)("a",{href:"#!",className:"logo-wrapper waves-effect",children:Object(n.jsx)("img",{alt:"MDB React Logo",className:"img-fluid",src:"https://demo.somospsicope.com/images/logo.png"})}),Object(n.jsxs)(m.k,{className:"list-group-flush",children:[Object(n.jsx)(b.c,{exact:!0,to:"/admin/capacitaciones",activeClassName:"activeClass",children:Object(n.jsxs)(m.l,{children:[Object(n.jsx)(m.h,{icon:"chart-pie",className:"mr-3"}),"Capacitaciones"]})}),Object(n.jsx)(b.c,{to:"/admin/textos",activeClassName:"activeClass",children:Object(n.jsxs)(m.l,{children:[Object(n.jsx)(m.h,{icon:"user",className:"mr-3"}),"Textos"]})}),Object(n.jsx)(b.c,{to:"/admin/productos",activeClassName:"activeClass",children:Object(n.jsxs)(m.l,{children:[Object(n.jsx)(m.h,{icon:"table",className:"mr-3"}),"Productos"]})}),Object(n.jsx)(b.c,{to:"/admin/galeria-de-fotos",activeClassName:"activeClass",children:Object(n.jsxs)(m.l,{children:[Object(n.jsx)(m.h,{icon:"table",className:"mr-3"}),"Galer\xeda de Fotos"]})}),Object(n.jsx)(b.c,{exact:!0,to:"/admin",onClick:function(){localStorage.clear(),window.location.reload()},activeClassName:"activeClass",children:Object(n.jsxs)(m.l,{children:[Object(n.jsx)(m.h,{icon:"sign-out-alt",className:"mr-3"}),"Cerrar sesi\xf3n"]})})]})]})},O=function(){return Object(n.jsx)(m.g,{color:"blue",className:"text-center font-small darken-2",children:Object(n.jsxs)("p",{className:"footer-copyright mb-0 py-3 text-center",children:["\xa9 ",(new Date).getFullYear()," Copyright: ",Object(n.jsx)("a",{href:"https://www.renoca.ml",children:" Renoca.ml "})]})})},x=r(8),g=r(59),w=r.n(g);r(187);function v(e){var t=e.url,r=e.thead,a=e.tableId,c=e.refreshID;return Object(o.useEffect)((function(){w.a.fn.DataTable.isDataTable("#".concat(a))?window.$table.ajax.reload():window.$table=w()("#"+a).DataTable({ajax:{url:t},language:{url:"//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"}})}),[c]),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("table",{id:a,className:"table dataTable no-footer",style:{width:"100%"},children:[Object(n.jsx)("thead",{children:Object(n.jsx)("tr",{children:r.map((function(e){return Object(n.jsx)("th",{children:e},e)}))})}),Object(n.jsx)("tbody",{})]})})}var y=r(5),C=r.n(y),N=function(){var e=a.a.useState(0),t=Object(x.a)(e,2),r=t[0],o=t[1],c=function(e){C.a.fire({title:"Esta seguro que quiere realizar esta acci\xf3n?",showDenyButton:!0,confirmButtonText:"SI",denyButtonText:"NO"}).then((function(t){t.isConfirmed&&(C.a.fire({title:"Espere por favor ...",onBeforeOpen:function(){C.a.showLoading()},onAfterClose:function(){C.a.hideLoading()},allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,showConfirmButton:!1}),function(e){return new Promise((function(t,r){var n=new FormData;n.append("action",e),fetch("https://somospsicope.com/api/capacitaciones/handler.php",{method:"POST",body:n}).then((function(e){return e.json()})).catch((function(e){C.a.fire("Error!",e,"error"),r(!1)})).then((function(e){var r=e.result,n=e.message;r?(C.a.fire("Correcto!",n,"success"),t(!0)):C.a.fire("Error!",n,"error")}))}))}(e).then((function(e){e&&o(r+1)})))}))};return window.MarcarPago=function(e){(function(e){return C.a.fire({title:"Espere por favor ...",onBeforeOpen:function(){C.a.showLoading()},onAfterClose:function(){C.a.hideLoading()},allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,showConfirmButton:!1}),new Promise((function(t,r){var n=new FormData;n.append("id",e),fetch("https://somospsicope.com/api/capacitaciones/marcarPago.php",{method:"POST",body:n}).then((function(e){return e.json()})).catch((function(e){C.a.fire("Error!",e,"error"),r(!1)})).then((function(e){var r=e.result,n=e.message;r?(C.a.fire("Correcto!",n,"success"),t(!0)):C.a.fire("Error!",n,"error")}))}))})(e).then((function(e){e&&o(r+1)}))},window.eliminarInscripto=function(e){(function(e){return C.a.fire({title:"Espere por favor ...",onBeforeOpen:function(){C.a.showLoading()},onAfterClose:function(){C.a.hideLoading()},allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,showConfirmButton:!1}),new Promise((function(t,r){var n=new FormData;n.append("id",e),fetch("https://somospsicope.com/api/capacitaciones/eliminarInscripto.php",{method:"POST",body:n}).then((function(e){return e.json()})).catch((function(e){C.a.fire("Error!",e,"error"),r(!1)})).then((function(e){var r=e.result,n=e.message;r?(C.a.fire("Correcto!",n,"success"),t(!0)):C.a.fire("Error!",n,"error")}))}))})(e).then((function(e){e&&o(r+1)}))},Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(m.s,{children:[Object(n.jsxs)(m.e,{md:"8",children:[Object(n.jsx)("button",{onClick:function(){c("DELETE_ALL")},className:"btn btn-danger",children:"Eliminar Todos"}),Object(n.jsx)("button",{onClick:function(){c("MARCAR_ABIERTO_CAPACITACION")},className:"btn btn-primary",children:"Marcar como abierto"}),Object(n.jsx)("button",{onClick:function(){c("MARCAR_CERRADO_CAPACITACION")},className:"btn btn-secondary",children:"Marcar como finalizado"}),Object(n.jsx)("button",{onClick:function(){c("MARCAR_ABIERTO_INSCRIPCION")},className:"btn btn-success",children:"Abrir inscripciones"}),Object(n.jsx)("button",{onClick:function(){c("MARCAR_CERRADO_INSCRIPCION")},className:"btn btn-warning",children:"Cerrar inscripciones"})]}),Object(n.jsx)(m.e,{md:"12",children:Object(n.jsxs)(m.c,{className:"mt-5",children:[Object(n.jsx)(m.u,{className:"gradient-card-header blue darken-2",children:Object(n.jsx)("h4",{className:"h4-responsive text-white",children:"Inscriptos en capacitaciones."})}),Object(n.jsx)(m.d,{children:Object(n.jsx)(v,{url:"https://somospsicope.com/api/capacitaciones/listarCapacitaciones.php",thead:["Nombre","Email","Pago","Fecha inscripci\xf3n","Eliminar"],tableId:"CapacitacionesTable",refreshID:r})})]})})]})})},E=r(26),S=function(){var e=Object(E.a)(),t=e.handleSubmit,r=e.register,o=e.errors,a=Object(h.f)();return console.log("\ud83d\ude80 ~ file: LogInPage.js ~ line 25 ~ LogInPage ~ comprobarLogIn",p),p()&&a.push("/admin/capacitaciones"),Object(n.jsxs)(m.s,{children:[Object(n.jsx)(m.e,{md:"4"}),Object(n.jsx)(m.e,{md:"4",children:Object(n.jsxs)(m.c,{className:"mt-5",children:[Object(n.jsx)(m.u,{className:"gradient-card-header blue darken-2",children:Object(n.jsx)("h4",{className:"h4-responsive text-white",children:"Iniciar sesi\xf3n"})}),Object(n.jsx)(m.d,{children:Object(n.jsxs)("form",{className:"qr-form",onSubmit:t((function(e,t){"somospsicopeadmin"===e.user&&"Argentina161803"===e.pass?(localStorage.setItem("idUserAdmin",1),localStorage.setItem("token","041292200a64c28adcd1c66feac2cd2b"),window.location.reload()):C.a.fire("Error!","Usuario o contrase\xf1a incorrectos","error")})),children:[Object(n.jsx)("label",{htmlFor:"user",children:"Usuario"}),Object(n.jsx)("input",{name:"user",className:"form-control",ref:r({required:"Requerido"})}),Object(n.jsx)("span",{children:o.user&&o.user.message}),Object(n.jsx)("label",{htmlFor:"pass",children:"Contrase\xf1a"}),Object(n.jsx)("input",{name:"pass",className:"form-control",type:"password",ref:r({required:"Requerido"})}),Object(n.jsx)("span",{children:o.pass&&o.pass.message}),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Ingresar"})})]})})]})}),Object(n.jsx)(m.e,{md:"4"})]})};function k(e){var t=e.refresh,r=Object(E.a)(),o=r.handleSubmit,c=r.register,s=r.errors;return Object(n.jsx)(a.a.Fragment,{children:Object(n.jsxs)(m.c,{className:"mt-5",children:[Object(n.jsx)(m.u,{className:"gradient-card-header blue darken-2",children:Object(n.jsx)("h4",{className:"h4-responsive text-white",children:"Ingresar Keyt"})}),Object(n.jsx)(m.d,{children:Object(n.jsxs)("form",{className:"qr-form",onSubmit:o((function(e,r){(function(e,t){var r=e.keyt,n=e.value;return new Promise((function(e,o){var a=new FormData;a.append("keyt",r),a.append("value",n),fetch("https://somospsicope.com/api/keyt/ingresarKeyt.php",{method:"POST",body:a}).then((function(e){return e.json()})).catch((function(e){C.a.fire("Error!",e,"error"),o(!1)})).then((function(r){var n=r.result,o=r.message;n?(C.a.fire("Correcto!",o,"success"),t.target.reset(),e(!0)):C.a.fire("Error!",o,"error")}))}))})(e,r).then((function(e){e&&t(Math.floor(3e3*Math.random())+1)}))})),children:[Object(n.jsx)("label",{htmlFor:"keyt",children:"Keyt"}),Object(n.jsx)("input",{name:"keyt",className:"form-control",ref:c({required:"Required"})}),Object(n.jsx)("label",{htmlFor:"value",children:"Value"}),Object(n.jsx)("input",{name:"value",className:"form-control",ref:c({required:"Required"})}),Object(n.jsx)("span",{children:s.name&&s.name.message}),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Ingresar"})})]})})]})})}var F=r(77),I=r.n(F),q=r(31),T=r(137),A=r(78),P=r.n(A),D=(r(292),{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}});function B(e){var t=e.setIsOpenModal,r=e.editKeyt,o=a.a.useState(!1),c=Object(x.a)(o,2),s=c[0],i=c[1],l=a.a.useState(q.EditorState.createEmpty()),d=Object(x.a)(l,2),u=d[0],j=d[1];function h(){i(!1),document.body.style.overflowY="scroll",document.getElementsByClassName("sidebar-fixed")[0].style.zIndex=1050}return a.a.useEffect((function(){t&&i(!0),j(q.EditorState.createWithContent(q.ContentState.createFromBlockArray(Object(q.convertFromHTML)("<p>".concat(r.value,"</p>")))))}),[t,r]),console.log(P()(Object(q.convertToRaw)(u.getCurrentContent()))),Object(n.jsx)(a.a.Fragment,{children:Object(n.jsx)(I.a,{isOpen:s,onAfterOpen:function(){document.body.style.overflowY="hidden",document.querySelector('div[title="Superscript"]').style.display="none",document.querySelector('div[title="Subscript"]').style.display="none",document.querySelector('div[title="Embedded"]').style.display="none",document.querySelector('div[title="Emoji"]').style.display="none",document.querySelector('div[title="Image"]').style.display="none",document.querySelector('div[title="Remove"]').style.display="none",document.querySelector('div[title="Right"]').style.display="none",document.querySelector('div[title="Left"]').style.display="none",document.querySelector('div[title="Center"]').style.display="none",document.querySelector('div[title="Justify"]').style.display="none",document.getElementsByClassName("rdw-dropdown-wrapper")[0].style.display="none",document.getElementsByClassName("rdw-dropdown-wrapper")[1].style.display="none",document.getElementsByClassName("rdw-dropdown-wrapper")[2].style.display="none",document.getElementsByClassName("sidebar-fixed")[0].style.zIndex=0},onRequestClose:h,style:D,contentLabel:"Example Modal",children:Object(n.jsxs)("div",{children:[Object(n.jsx)(T.Editor,{editorState:u,wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",onEditorStateChange:function(e){return j(e)}}),Object(n.jsxs)(m.s,{children:[Object(n.jsx)(m.e,{lg:"6",sm:"6",children:Object(n.jsx)("button",{onClick:h,className:"btn btn-block btn-danger",children:"Cancelar"})}),Object(n.jsx)(m.e,{lg:"6",sm:"6",children:Object(n.jsx)("button",{onClick:function(){C.a.fire({title:"Editando ...",onBeforeOpen:function(){C.a.showLoading()},onAfterClose:function(){C.a.hideLoading()},allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,showConfirmButton:!1});var e=P()(Object(q.convertToRaw)(u.getCurrentContent()));e=(e=(e=e.replaceAll("<p>","")).replaceAll("</p>","<br>")).slice(0,-5);var t=new FormData;t.append("value",e),t.append("id",r.id),fetch(r.url,{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){setTimeout((function(){C.a.fire("Correcto!","Valor editado correctamente!","success")}),300),h(),setTimeout((function(){window.location.reload()}),2500)})).catch((function(e){return C.a.fire("Error!","Ha ocurrido un error, intente m\xe1s tarde!","error")}))},className:"btn btn-block btn-success",children:"Editar"})})]})]})})})}I.a.setAppElement("#root");var R=function(){var e=new Array("keyt","Value","Editar"),t=a.a.useState(0),r=Object(x.a)(t,2),o=r[0],c=r[1],s=a.a.useState(!1),i=Object(x.a)(s,2),l=i[0],d=i[1],u=a.a.useState({id:null,value:"",url:""}),j=Object(x.a)(u,2),h=j[0],b=j[1];return window.eliminarCategoria=function(e){(function(e){return C.a.fire({title:"Espere por favor ...",onBeforeOpen:function(){C.a.showLoading()},onAfterClose:function(){C.a.hideLoading()},allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,showConfirmButton:!1}),new Promise((function(t,r){var n=new FormData;n.append("id",e),fetch("https://somospsicope.com/api/categorias/eliminarCategoria.php",{method:"POST",body:n}).then((function(e){return e.json()})).catch((function(e){C.a.fire("Error!",e,"error"),r(!1)})).then((function(e){var r=e.result,n=e.message;r?(C.a.fire("Correcto!",n,"success"),t(!0)):C.a.fire("Error!",n,"error")}))}))})(e).then((function(e){e&&c(o+1)}))},window.editKeyt=function(e,t){d(!0);b({id:e,value:t,url:"https://somospsicope.com/api/keyt/editarKeyt.php"}),setTimeout((function(){d(!1)}),1500)},Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B,{setIsOpenModal:l,editKeyt:h}),Object(n.jsxs)(m.s,{children:[Object(n.jsx)(m.e,{md:"4",children:Object(n.jsx)(k,{refresh:c})}),Object(n.jsx)(m.e,{md:"12",children:Object(n.jsxs)(m.c,{className:"mt-5",children:[Object(n.jsx)(m.u,{className:"gradient-card-header blue darken-2",children:Object(n.jsx)("h4",{className:"h4-responsive text-white",children:"Textos"})}),Object(n.jsx)(m.d,{children:Object(n.jsx)(v,{url:"https://somospsicope.com/api/keyt/listarKeyt.php",thead:e,tableId:"CategoriasTable",refreshID:o})})]})})]})]})};function L(){var e=Object(E.a)(),t=e.handleSubmit,r=e.register,o=e.errors;return Object(n.jsx)(a.a.Fragment,{children:Object(n.jsxs)(m.c,{className:"mt-5",children:[Object(n.jsx)(m.u,{className:"gradient-card-header blue darken-2",children:Object(n.jsx)("h4",{className:"h4-responsive text-white",children:"Ingresar productos"})}),Object(n.jsx)(m.d,{children:Object(n.jsxs)("form",{className:"qr-form",onSubmit:t((function(e){var t=new FormData;t.append("nombre",e.nombre),t.append("descripcion",e.descripcion),t.append("precio",e.precio),t.append("imagen",e.imagen[0]),C.a.fire({title:"Subiendo Producto ...",onBeforeOpen:function(){C.a.showLoading()},onAfterClose:function(){C.a.hideLoading()},allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,showConfirmButton:!1}),fetch("https://somospsicope.com/api/productos/ingresarProducto.php",{method:"POST",body:t}).then((function(e){return e.json()})).catch((function(e){C.a.fire("Error!",e,"error")})).then((function(e){var t=e.result,r=e.message;t?(C.a.fire("Correcto!",r,"success"),window.location.reload()):C.a.fire("Error!",r,"error")}))})),children:[Object(n.jsx)("label",{htmlFor:"nombre",children:"Nombre"}),Object(n.jsx)("input",{name:"nombre",className:"form-control",ref:r({required:"Requerido"})}),Object(n.jsx)("span",{children:o.nombre&&o.nombre.message}),Object(n.jsx)("label",{htmlFor:"descripcion",children:"Descripci\xf3n"}),Object(n.jsx)("textarea",{name:"descripcion",className:"form-control",ref:r({required:"Requerido"})}),Object(n.jsx)("span",{children:o.descripcion&&o.descripcion.message}),Object(n.jsx)("label",{htmlFor:"precio",children:"Precio"}),Object(n.jsx)("input",{name:"precio",className:"form-control",ref:r({required:"Requerido"})}),Object(n.jsx)("span",{children:o.price&&o.price.message}),Object(n.jsx)("label",{htmlFor:"image",children:"Imagen"}),Object(n.jsx)("input",{name:"imagen",type:"file",className:"form-control",ref:r({required:"Requerido"})}),Object(n.jsx)("span",{children:o.imagen&&o.imagen.message}),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Ingresar"})})]})})]})})}var K=function(){var e=new Array("Nombre","Descripci\xf3n","Objetivos","Que incluye","Precio","Url Imagen","Activo","Eliminar"),t=a.a.useState(0),r=Object(x.a)(t,2),o=r[0],c=r[1],s=a.a.useState(!1),i=Object(x.a)(s,2),l=i[0],d=i[1],u=a.a.useState({id:null,value:"",url:""}),j=Object(x.a)(u,2),h=j[0],b=j[1];return window.editarProducto=function(e,t,r){d(!0);var n="https://somospsicope.com/api/productos/editarProducto.php?key=".concat(r);b({id:e,value:t,url:n}),setTimeout((function(){d(!1)}),1500)},window.activarDesactivarProducto=function(e,t){var r="Seguro que desea desactivar el producto",n="Desactivar";1===t&&(r="Seguro que desea activar el producto",n="Activar"),C.a.fire({title:r,showDenyButton:!0,confirmButtonText:n,denyButtonText:"Cancelar"}).then((function(r){r.isConfirmed&&function(e,t){return C.a.fire({title:"Espere por favor ...",onBeforeOpen:function(){C.a.showLoading()},onAfterClose:function(){C.a.hideLoading()},allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,showConfirmButton:!1}),new Promise((function(r,n){var o=new FormData;o.append("id",e),o.append("value",t),fetch("https://somospsicope.com/api/productos/activarDesactivarProducto.php",{method:"POST",body:o}).then((function(e){return e.json()})).catch((function(e){C.a.fire("Error!",e,"error"),n(!1)})).then((function(e){var t=e.result,n=e.message;t?(C.a.fire("Correcto!",n,"success"),r(!0)):C.a.fire("Error!",n,"error")}))}))}(e,t).then((function(e){e&&c(o+1)}))}))},window.eliminarProducto=function(e){C.a.fire({title:"Seguro que desea eliminar el producto?",text:"La acci\xf3n no se puede revertir!!",showDenyButton:!0,confirmButtonText:"Eliminar",denyButtonText:"Cancelar"}).then((function(t){t.isConfirmed&&function(e,t){return C.a.fire({title:"Espere por favor ...",onBeforeOpen:function(){C.a.showLoading()},onAfterClose:function(){C.a.hideLoading()},allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,showConfirmButton:!1}),new Promise((function(t,r){var n=new FormData;n.append("id",e),fetch("https://somospsicope.com/api/productos/eliminarProducto.php",{method:"POST",body:n}).then((function(e){return e.json()})).catch((function(e){C.a.fire("Error!",e,"error"),r(!1)})).then((function(e){var r=e.result,n=e.message;r?(C.a.fire("Correcto!",n,"success"),t(!0)):C.a.fire("Error!",n,"error")}))}))}(e).then((function(e){e&&c(o+1)}))}))},Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B,{setIsOpenModal:l,editKeyt:h}),Object(n.jsxs)(m.s,{children:[Object(n.jsx)(m.e,{md:"4",children:Object(n.jsx)(L,{})}),Object(n.jsx)(m.e,{md:"4",children:Object(n.jsxs)(m.c,{className:"mt-5",children:[Object(n.jsx)(m.u,{className:"gradient-card-header blue darken-2",children:Object(n.jsx)("h4",{className:"h4-responsive text-white",children:"Notas"})}),Object(n.jsx)(m.d,{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Los productos se suben por defecto desactivados."}),Object(n.jsx)("li",{children:"Las imagenes deben ser cuadras mismo alto que largo y en lo posible mayores a 800x800px."}),Object(n.jsx)("li",{children:"Que incluye y los objetivos se agregan despu\xe9s de subir el producto, si no se agregan no se muestran en la p\xe1gina."})]})})]})}),Object(n.jsx)(m.e,{md:"12",children:Object(n.jsxs)(m.c,{className:"mt-5",children:[Object(n.jsx)(m.u,{className:"gradient-card-header blue darken-2",children:Object(n.jsx)("h4",{className:"h4-responsive text-white",children:"Productos"})}),Object(n.jsx)(m.d,{children:Object(n.jsx)(v,{url:"https://somospsicope.com/api/productos/listarProductos.php",thead:e,tableId:"ProductosTable",refreshID:o})})]})})]})]})},M=r(13),_=r.n(M),U=r(24);function W(e){var t=Object(o.useState)({}),r=Object(x.a)(t,2),n=r[0],a=r[1],c=Object(o.useState)(!0),s=Object(x.a)(c,2),i=s[0],l=s[1],d=Object(o.useState)(e),u=Object(x.a)(d,2),m=u[0],j=u[1],h=Object(o.useState)(0),b=Object(x.a)(h,2),p=b[0],f=b[1];function O(){return(O=Object(U.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch(m).then((function(e){return e.json()})).then((function(e){a(e),l(!1)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.useEffect)((function(){!function(){O.apply(this,arguments)}()}),[p,m]),[n,i,j,p,f]}function z(){var e=Object(E.a)(),t=e.handleSubmit,r=e.register,o=e.errors,c=W("https://somospsicope.com/api/galeriaDeFotos/optionsCategorias.php"),s=Object(x.a)(c,5),i=s[0],l=s[1];s[2],s[3],s[4];return Object(n.jsx)(a.a.Fragment,{children:Object(n.jsxs)(m.c,{className:"mt-5",children:[Object(n.jsx)(m.u,{className:"gradient-card-header blue darken-2",children:Object(n.jsx)("h4",{className:"h4-responsive text-white",children:"Ingresar foto"})}),Object(n.jsx)(m.d,{children:Object(n.jsxs)("form",{className:"qr-form",onSubmit:t((function(e,t){var r=new FormData;r.append("nombre",e.nombre),r.append("categoria",e.categoria),r.append("foto",e.image[0]),C.a.fire({title:"Subiendo Foto ...",onBeforeOpen:function(){C.a.showLoading()},onAfterClose:function(){C.a.hideLoading()},allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,showConfirmButton:!1}),fetch("https://somospsicope.com/api/galeriaDeFotos/subirFoto.php",{method:"POST",body:r}).then((function(e){return e.json()})).catch((function(e){C.a.fire("Error!",e,"error")})).then((function(e){var t=e.result,r=e.message;t?(C.a.fire("Correcto!",r,"success"),window.location.reload()):C.a.fire("Error!",r,"error")}))})),children:[Object(n.jsx)("label",{htmlFor:"nombre",children:"Nombre"}),Object(n.jsx)("input",{name:"nombre",className:"form-control",ref:r({required:"Requerido"})}),Object(n.jsx)("span",{children:o.nombre&&o.nombre.message}),Object(n.jsx)("label",{htmlFor:"description",children:"Categor\xeda"}),Object(n.jsx)("select",{name:"categoria",className:"form-control",ref:r({required:"Requerido"}),children:l?Object(n.jsx)("option",{value:"",children:"Cargando categorias.."}):i.map((function(e){var t=e.id,r=e.name;return Object(n.jsxs)("option",{value:t,children:[r," "]},t)}))}),Object(n.jsx)("span",{children:o.categoria&&o.categoria.message}),Object(n.jsx)("label",{htmlFor:"image",children:"Imagen"}),Object(n.jsx)("input",{name:"image",type:"file",className:"form-control",ref:r({required:"Requerido"})}),Object(n.jsx)("span",{children:o.image&&o.image.message}),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Ingresar"})})]})})]})})}function G(){var e=Object(E.a)(),t=e.handleSubmit,r=e.register,o=e.errors;return Object(n.jsx)(a.a.Fragment,{children:Object(n.jsxs)(m.c,{className:"mt-5",children:[Object(n.jsx)(m.u,{className:"gradient-card-header blue darken-2",children:Object(n.jsx)("h4",{className:"h4-responsive text-white",children:"Ingresar categor\xeda de foto"})}),Object(n.jsx)(m.d,{children:Object(n.jsxs)("form",{className:"qr-form",onSubmit:t((function(e){var t=new FormData;t.append("nombreDeCategoria",e.categoria),fetch("https://somospsicope.com/api/galeriaDeFotos/ingresarCategoriaDeFoto.php",{method:"POST",body:t}).then((function(e){return e.json()})).catch((function(e){C.a.fire("Error!",e,"error")})).then((function(e){var t=e.result,r=e.message;t?(C.a.fire("Correcto!",r,"success"),window.location.reload()):C.a.fire("Error!",r,"error")}))})),children:[Object(n.jsx)("label",{htmlFor:"name",children:"Nombre Categor\xeda"}),Object(n.jsx)("input",{name:"categoria",className:"form-control",ref:r({required:"Requerido"})}),Object(n.jsx)("span",{children:o.categoria&&o.categoria.message}),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Ingresar"})})]})})]})})}var J=function(){var e=a.a.useState(0),t=Object(x.a)(e,2),r=t[0],o=t[1],c=new Array("Url","Nombre","Categor\xeda","Eliminar");return window.eliminarFoto=function(e){(function(e){return new Promise((function(t,r){var n=new FormData;n.append("id",e),fetch("https://somospsicope.com/api/galeriaDeFotos/eliminarFoto.php",{method:"POST",body:n}).then((function(e){return e.json()})).catch((function(e){C.a.fire("Error!",e,"error"),r(!1)})).then((function(e){var r=e.result,n=e.message;r?(C.a.fire("Correcto!",n,"success"),t(!0)):C.a.fire("Error!",n,"error")}))}))})(e).then((function(e){e&&o(r+1)}))},Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(m.s,{children:[Object(n.jsx)(m.e,{md:"4",children:Object(n.jsx)(z,{})}),Object(n.jsx)(m.e,{md:"4",children:Object(n.jsx)(G,{})}),Object(n.jsx)(m.e,{md:"12",children:Object(n.jsxs)(m.c,{className:"mt-5",children:[Object(n.jsx)(m.u,{className:"gradient-card-header blue darken-2",children:Object(n.jsx)("h4",{className:"h4-responsive text-white",children:"Galer\xeda de Fotos"})}),Object(n.jsx)(m.d,{children:Object(n.jsx)(v,{url:"https://somospsicope.com/api/galeriaDeFotos/listarFotos.php",thead:c,tableId:"GaleriaDeFotosTable",refreshID:r})})]})})]})})},Q=function(){return Object(n.jsx)(a.a.Fragment,{children:Object(n.jsx)("div",{className:"full",children:Object(n.jsxs)(m.s,{className:"bad-gateway-row",children:[Object(n.jsxs)(m.e,{md:"8",children:[Object(n.jsx)("img",{alt:"Error 404",className:"img-fluid",hieght:"20px",src:"https://demo.somospsicope.com/images/logo.png"}),Object(n.jsx)("h2",{className:"h2-responsive mt-3 mb-2",children:"404. That's an error."}),Object(n.jsx)("h4",{children:"The requested URL was not found on this server."})]}),Object(n.jsx)(m.e,{md:"4",children:Object(n.jsx)("img",{alt:"Error 404",className:"img-fluid",src:"https://mdbootstrap.com/img/Others/grafika404-bf.png"})})]})})})};r(293);function V(){return Object(n.jsx)(b.a,{children:Object(n.jsxs)("div",{className:"flexible-content",children:[Object(n.jsx)(j,{}),Object(n.jsx)(f,{}),Object(n.jsx)("main",{id:"content",className:"p-5",children:Object(n.jsxs)(h.c,{children:[Object(n.jsx)(h.a,{path:"/admin",exact:!0,component:S}),Object(n.jsx)(h.a,{path:"/admin/capacitaciones",component:N}),Object(n.jsx)(h.a,{path:"/admin/textos",component:R}),Object(n.jsx)(h.a,{path:"/admin/productos",component:K}),Object(n.jsx)(h.a,{path:"/admin/galeria-de-fotos",component:J}),Object(n.jsx)(h.a,{component:Q})]})}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(O,{})]})})}var Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(V,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");Y?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):$(e)}))}}()},79:function(e,t,r){}},[[294,1,2]]]);
//# sourceMappingURL=main.1bc4b672.chunk.js.map