(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(30),r=n.n(s),i=n(5),o=n.n(i),l=n(12),u=n(11),d=n(2),j=n(4),h=(n(37),n(10)),p=n.n(h),b=n(13),m=n.n(b),x=n(0);function O(){var e=Object(d.f)(),t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),h=i[0],b=i[1],O=function(){var t=Object(l.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,m.a.post("https://authentication-mern-stack.herokuapp.com/signin",{email:c,password:h});case 4:p.a.toast({html:"SignedIn successfully",classes:"#66bb6a green lighten-1 "}),localStorage.setItem("firstLogin",!0),e.push("/"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0.response.data.msg);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"row input-field",id:"login_card",children:Object(x.jsxs)("div",{className:"card col-md-4 blue-grey darken-1 ",children:[Object(x.jsx)("h2",{children:"Sign In"}),Object(x.jsx)("input",{id:"icon_prefix",type:"text",placeholder:"enter email",value:c,onChange:function(e){return s(e.target.value)}}),Object(x.jsx)("input",{type:"password",placeholder:"enter password",value:h,onChange:function(e){return b(e.target.value)}}),Object(x.jsxs)("button",{className:"btn waves-effect waves-light",onClick:O,children:["Login",Object(x.jsx)("i",{className:"material-icons right",children:"send"})]}),Object(x.jsxs)("h5",{children:[Object(x.jsx)(j.b,{to:"/signup",className:"No_account my-3",children:" Don't have an account ?"}),Object(x.jsx)(j.b,{to:"/resetpassword",className:"No_account my-3",children:" reset password ?"})]})]})})}function f(){return Object(x.jsx)("div",{children:Object(x.jsx)("nav",{children:Object(x.jsxs)("div",{className:"nav-wrapper",children:[Object(x.jsx)("a",{href:"/",className:"brand-logo",children:"Authentication"}),Object(x.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(x.jsx)("li",{children:Object(x.jsx)(j.b,{to:"/",children:"Home "})}),Object(x.jsx)("li",{children:Object(x.jsx)(j.b,{to:"/login",children:"Login"})}),Object(x.jsx)("li",{children:Object(x.jsx)(j.b,{to:"/signup",children:"SignUp"})})]})]})})})}n(61);function g(){var e=Object(d.f)(),t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),h=i[0],b=i[1],O=Object(a.useState)(""),f=Object(u.a)(O,2),g=f[0],v=f[1],w=function(){var t=Object(l.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,m.a.post("https://authentication-mern-stack.herokuapp.com/signup",{username:c,email:h,password:g});case 4:p.a.toast({html:"Registered User successfully",classes:"#66bb6a green lighten-1 "}),e.push("/login"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),p.a.toast({html:t.t0.response.data.msg,classes:"#d32f2f red darken-2"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"row input-field",id:"login_card",children:Object(x.jsxs)("div",{className:"card col--md-4 blue-grey darken-1",children:[Object(x.jsx)("h2",{children:"Sign Up"}),Object(x.jsx)("input",{id:"icon_prefix",type:"text",placeholder:"enter name",value:c,onChange:function(e){return s(e.target.value)}}),Object(x.jsx)("input",{id:"icon_prefix",type:"email",placeholder:"enter email",value:h,onChange:function(e){return b(e.target.value)}}),Object(x.jsx)("input",{type:"password",placeholder:"enter password",value:g,onChange:function(e){return v(e.target.value)}}),Object(x.jsxs)("button",{className:"btn waves-effect waves-light",onClick:w,children:["Sign Up",Object(x.jsx)("i",{className:"material-icons right",children:"send"})]}),Object(x.jsx)("h5",{children:Object(x.jsx)(j.b,{to:"/login",className:"No_account",children:" Already have an account ?"})})]})})}function v(){var e=Object(d.f)(),t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],s=n[1],r=function(){var t=Object(l.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,m.a.post("https://authentication-mern-stack.herokuapp.com/resetpassword",{email:c});case 4:p.a.toast({html:"Reset link sent successfully!! Please check your email!!",classes:"#66bb6a green lighten-1 "}),e.push("/login"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0.response.data.msg),p.a.toast({html:"Please enter valid email",classes:"#d32f2f red darken-2"});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"row input-field",id:"login_card",children:Object(x.jsxs)("div",{className:"card col-md-4 blue-grey darken-1 ",children:[Object(x.jsx)("h2",{children:"Reset Password"}),Object(x.jsx)("input",{id:"icon_prefix",type:"email",placeholder:"enter email",value:c,onChange:function(e){return s(e.target.value)}}),Object(x.jsxs)("button",{className:"btn waves-effect waves-light",onClick:r,children:[" Send Email",Object(x.jsx)("i",{className:"material-icons right",children:"send"})]}),Object(x.jsxs)("h5",{children:[Object(x.jsx)(j.b,{to:"/signup",className:"No_account my-3",children:" Don't have an account ?"}),Object(x.jsx)(j.b,{to:"/resetpassword",className:"No_account my-3",children:" reset password ?"})]})]})})}function w(){var e=Object(d.f)(),t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],s=n[1],r=Object(d.g)().token,i=function(){var t=Object(l.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,m.a.post("https://authentication-mern-stack.herokuapp.com/newpassword",{password:c,token:r});case 4:p.a.toast({html:"Password updated successfully..please try to login now...",classes:"#66bb6a green lighten-1 "}),e.push("/login"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0.response.data.msg),p.a.toast({html:"Something went wrong",classes:"#d32f2f red darken-2"});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"row input-field",id:"login_card",children:Object(x.jsxs)("div",{className:"card col-md-4 blue-grey darken-1 ",children:[Object(x.jsx)("h2",{children:"Create New Password"}),Object(x.jsx)("input",{id:"icon_prefix",type:"password",placeholder:"enter new password",value:c,onChange:function(e){return s(e.target.value)}}),Object(x.jsxs)("button",{className:"btn waves-effect waves-light",onClick:i,children:[" Save new Password",Object(x.jsx)("i",{className:"material-icons right",children:"send"})]}),Object(x.jsxs)("h5",{children:[Object(x.jsx)(j.b,{to:"/signup",className:"No_account my-3",children:" Don't have an account ?"}),Object(x.jsx)(j.b,{to:"/resetpassword",className:"No_account my-3",children:"  Login "})]})]})})}function N(){var e=Object(d.f)(),t=function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.removeItem("firstLogin"),e.push("/login");case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:["Homepage",Object(x.jsxs)("button",{className:"btn waves-effect waves-light",onClick:t,children:["logout",Object(x.jsx)("i",{className:"material-icons right",children:"send"})]})]})}var k=function(){return Object(x.jsxs)(j.a,{children:[Object(x.jsx)(f,{}),Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{path:"/",component:N,exact:!0}),Object(x.jsx)(d.a,{path:"/login",component:O,exact:!0}),Object(x.jsx)(d.a,{path:"/signup",component:g,exact:!0}),Object(x.jsx)(d.a,{path:"/resetpassword",component:v,exact:!0}),Object(x.jsx)(d.a,{path:"/newpassword/:token",component:w,exact:!0})]})})]})};r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.42da6318.chunk.js.map