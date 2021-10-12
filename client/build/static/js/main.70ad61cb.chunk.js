(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(15),s=n.n(a),o=(n(25),n(5)),i=n(3),u=n.n(i),l=n(7),j=n(10),d=n(13),b=n(11),h=n(1),f=function(e){var t=e.setAuthentication,n=Object(r.useState)({email:"",password:""}),c=Object(j.a)(n,2),a=c[0],s=c[1],i=function(e){var t=Object(o.a)({},a);t[e.target.id]=e.target.value,s(t)},f=function(){var e=Object(l.a)(u.a.mark((function e(n){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.email,password:a.password})});case 3:return r=e.sent,e.next=6,r.json();case 6:(c=e.sent).token?(localStorage.setItem("token",c.token),t(!0),b.a.success("Logged in")):(t(!1),console.log("Not Authorized"),b.a.error(c));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"login__contatiner",children:[Object(h.jsxs)("form",{onSubmit:function(e){return f(e)},children:[Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)("input",{className:"form-control my-3",type:"text",placeholder:"email",onChange:function(e){return i(e)},id:"email",value:a.email}),Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{className:"form-control my-3",type:"password",placeholder:"password",onChange:function(e){return i(e)},id:"password",value:a.password}),Object(h.jsx)("button",{className:"btn btn-dark ",children:"Login"})]}),Object(h.jsx)("div",{children:Object(h.jsx)(d.b,{to:"/register",children:Object(h.jsx)("h3",{children:"Register"})})})]})},O=(n(36),function(e){var t=e.setAuthentication,n=Object(r.useState)({username:"",email:"",password:""}),c=Object(j.a)(n,2),a=c[0],s=c[1],i=function(e){var t=Object(o.a)({},a);t[e.target.id]=e.target.value,s(t)},f=function(){var e=Object(l.a)(u.a.mark((function e(n){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a.username,email:a.email,password:a.password})});case 3:return r=e.sent,e.next=6,r.json();case 6:(c=e.sent)?(localStorage.setItem("token",c.token),t(!0),b.a.success("Registered successfully")):b.a.error(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"my-3",children:"REGISTER"}),Object(h.jsxs)("form",{onSubmit:function(e){return f(e)},children:[Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)("input",{type:"text",className:"form-control my-3",id:"username",placeholder:"Enter username",onChange:function(e){return i(e)}}),Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)("input",{type:"email",className:"form-control my-3",id:"email",placeholder:"Enter email",onChange:function(e){return i(e)}}),Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",className:"form-control my-3",id:"password",placeholder:"Password",onChange:function(e){return i(e)}}),Object(h.jsx)(d.b,{to:"/login",children:"Login"}),Object(h.jsx)("button",{className:"btn btn-dark mt-3 btn-block",children:"Submit"})]})]})}),p=(n(37),function(){var e=Object(r.useState)({title:"",note:""}),t=Object(j.a)(e,2),n=t[0],c=t[1],a=function(e){var t=Object(o.a)({},n);t[e.target.id]=e.target.value,c(t)},s=new Headers;s.append("Content-Type","application/json"),s.append("token",localStorage.token);var i=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/create/note",{method:"POST",headers:s,body:JSON.stringify({title:n.title,note:n.note})});case 3:window.location="/dashboard";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"form__container",children:Object(h.jsxs)("form",{className:"form",onSubmit:function(e){return i(e)},children:[Object(h.jsx)("label",{children:"Title"}),Object(h.jsx)("input",{id:"title",onChange:function(e){return a(e)}}),Object(h.jsx)("label",{children:"Note"}),Object(h.jsx)("textarea",{id:"note",className:"form__text-area",onChange:function(e){return a(e)}}),Object(h.jsx)("button",{className:"btn btn-dark",children:"ADD NOTE"})]})})}),m=(n(38),function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],a=new Headers;a.append("Content-Type","application/json"),a.append("token",localStorage.token);var s=function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/create/note/".concat(t),{method:"DELETE",headers:a,body:JSON.stringify({userId:n})});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/create/note");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){o()}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"note__container",children:n.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"note__card",children:[Object(h.jsx)("h1",{className:"note__card-title",children:e.title}),Object(h.jsx)("h3",{className:"note__card-note",children:e.note}),Object(h.jsxs)("div",{className:"notes__delete-btn",children:[Object(h.jsx)("h3",{children:e.user.username}),Object(h.jsxs)("div",{className:"btn-container",children:[Object(h.jsx)("button",{className:"edit-btn",onClick:function(){return s(e.note_uuid,e.user.id)},children:"EDIT"}),Object(h.jsx)("button",{className:"delete-btn",onClick:function(){return s(e.note_uuid,e.user.id)},children:"DELETE"})]})]})]})},e.note_uuid)}))})})}),x=(n(39),function(e){var t=e.setAuthentication,n=Object(r.useState)(""),c=Object(j.a)(n,2),a=c[0],s=c[1],o=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/dashboard",{method:"GET",headers:{token:localStorage.token}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),s(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){o()}),[]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"logOut-container",children:Object(h.jsx)("button",{className:"btn btn-dark",onClick:function(e){return function(e){e.preventDefault(),t(!1),b.a.success("Logged out"),localStorage.removeItem("token")}(e)},children:"LOG OUT"})}),Object(h.jsxs)("h3",{className:"title",children:["Hello, ",a]}),Object(h.jsx)(m,{className:"my-3"}),Object(h.jsx)(p,{})]})}),v=(n(40),n(41),n(2));b.a.configure();var g=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],a=function(e){c(e)},s=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/verify",{method:"GET",headers:{token:localStorage.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(!0===n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){s()}),[n]),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(d.a,{children:Object(h.jsxs)(v.d,{children:[Object(h.jsx)(v.b,{path:"/login",render:function(e){return n?Object(h.jsx)(v.a,{to:"/dashboard"}):Object(h.jsx)(f,Object(o.a)(Object(o.a)({},e),{},{setAuthentication:a}))}}),Object(h.jsx)(v.b,{path:"/register",render:function(e){return n?Object(h.jsx)(v.a,{to:"/login"}):Object(h.jsx)(O,Object(o.a)(Object(o.a)({},e),{},{setAuthentication:a}))}}),Object(h.jsx)(v.b,{path:"/dashboard",render:function(e){return n?Object(h.jsx)(x,Object(o.a)(Object(o.a)({},e),{},{setAuthentication:a})):Object(h.jsx)(v.a,{to:"/login"})}}),Object(h.jsx)(v.b,{path:"/",render:function(e){return n?Object(h.jsx)(v.a,{to:"/login"}):Object(h.jsx)(f,Object(o.a)(Object(o.a)({},e),{},{setAuthentication:a}))}})]})})})};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.70ad61cb.chunk.js.map