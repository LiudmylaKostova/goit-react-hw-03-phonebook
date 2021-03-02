(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={title:"App_title__3XGni"}},18:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__2Dp-i",label:"ContactForm_label__1OciE",input:"ContactForm_input__AOl8G",button:"ContactForm_button__2CrO7"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(11),s=n.n(o),r=(n(18),n(13)),i=n(4),l=n(5),u=n(7),b=n(6),m=n(12),h=n(2),j=n.n(h),d=n(0),p=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:" ",number:" "},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmitForm=function(e){e.preventDefault(),t.props.onAddContact(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(d.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmitForm,children:[Object(d.jsxs)("label",{className:j.a.label,children:["Name",Object(d.jsx)("input",{className:j.a.input,type:"text",name:"name",value:e,onChange:this.handleChange})]}),Object(d.jsxs)("label",{className:j.a.label,children:["Phone number",Object(d.jsx)("input",{className:j.a.input,type:"text",name:"number",value:n,onChange:this.handleChange})]}),Object(d.jsx)("button",{className:j.a.button,type:"submit",disabled:""===e,children:"Add Contact"})]})}}]),n}(a.Component),f=n(3),_=n.n(f),O=function(t){var e=t.contacts,n=t.deleteContactBtn;return Object(d.jsx)("ul",{className:_.a.ul,children:e.map((function(t){return Object(d.jsxs)("li",{className:_.a.li,children:[Object(d.jsx)("span",{className:_.a.name,children:t.name}),Object(d.jsx)("span",{className:_.a.number,children:t.number}),Object(d.jsx)("button",{className:_.a.button,onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},C=n(8),v=n.n(C),x=function(t){var e=t.value,n=t.onChangeFilter;return Object(d.jsx)("div",{className:v.a.div,children:Object(d.jsxs)("label",{className:v.a.label,children:["Search contact's name",Object(d.jsx)("input",{className:v.a.input,name:"filter",type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})})},g=n(22),N=n(10),S=n.n(N),F=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){var n=e.name,a=e.number;t.setState((function(e){if(!t.state.contacts.some((function(t){return t.name===n})))return{contacts:[{id:Object(g.a)(),name:n,number:a}].concat(Object(r.a)(e.contacts))};alert("".concat(n," already exists in contacts"))}))},t.onChangeFilter=function(e){t.setState({filter:e})},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){console.log("prevState",e);var n=this.state.contacts;n!==e.contacts&&(console.log("\u041e\u0431\u043d\u043e\u0432\u0438\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0435 contacts, \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044e contacts \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435"),localStorage.setItem("contacts",JSON.stringify(n)))}},{key:"render",value:function(){var t=this.state.contacts,e=this.state.filter,n=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:S.a.title,children:"Phonebook"}),Object(d.jsx)(p,{onAddContact:this.addContact}),Object(d.jsx)("h2",{className:S.a.title,children:"Contacts"}),t.length>1?Object(d.jsx)(x,{value:e,onChangeFilter:this.onChangeFilter}):null,Object(d.jsx)(O,{contacts:n,deleteContactBtn:this.removeContact})]})}}]),n}(a.Component);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={ul:"ContactsList_ul__4ZaeZ",li:"ContactsList_li__2TL4u",name:"ContactsList_name__3ek1U",number:"ContactsList_number__bJYWW",button:"ContactsList_button__1V5AF"}},8:function(t,e,n){t.exports={div:"Filter_div__3MXUD",label:"Filter_label__1jRFt",input:"Filter_input__3GSkE"}}},[[20,1,2]]]);
//# sourceMappingURL=main.7458a21f.chunk.js.map