(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),o=a.n(r),s=(a(15),a(9)),d=a(6),i=a(1),c=a(2),m=a(4),h=a(3),u=a(5);function p(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"item1"},l.a.createElement("p",{className:"item__person"},"\u0424\u0418\u041e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430: ",e.data?e.data.person:null),l.a.createElement("p",{className:"item__work"},"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c: ",e.data?e.data.work:null),l.a.createElement("p",{className:"item__birthday"},"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f: ",e.data?e.data.birthday:null),l.a.createElement("p",{className:"item__gender"},"\u041f\u043e\u043b: ",e.data?"m"===e.data.gender?"\u043c\u0443\u0436\u0441\u043a\u043e\u0439":"\u0436\u0435\u043d\u0441\u043a\u0438\u0439":null),l.a.createElement("p",{className:"item__employ"},"\u0423\u0432\u043e\u043b\u0435\u043d: ",e.data?!0===e.data.employ?"\u0434\u0430":"\u043d\u0435\u0442":null)))}function g(e){var t=e.data.map(function(t,a){return l.a.createElement("div",{className:"item",id:a,key:a,onClick:function(){e.selectItem(a)}},l.a.createElement(p,{data:t,index:a}))});return l.a.createElement("div",{className:"workers"},t)}var b=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).onBtnClickAddHandler=function(t){t.preventDefault();var a=e.state,n=a.person,l=a.work,r=a.birthday,o=a.gender,s=a.employ;e.props.onAddItem({person:n,work:l,birthday:r,gender:o,employ:s})},e.onChangeItem=function(t){t.preventDefault();var a=e.state,n=a.person,l=a.work,r=a.birthday,o=a.gender,s=a.employ;e.props.onChangeItem({person:n,work:l,birthday:r,gender:o,employ:s})},e.handlePersonChange=function(t){e.setState({person:t.currentTarget.value})},e.handleWorkChange=function(t){e.setState({work:t.currentTarget.value})},e.handleBirthdayChange=function(t){e.setState({birthday:t.currentTarget.value})},e.handleGenderChange=function(t){e.setState({gender:t.currentTarget.checked}),console.log(t.currentTarget.checked)},e.handleEmployChange=function(t){e.setState({employ:t.currentTarget.checked})},e.state={person:null,work:null,birthday:null,gender:null,employ:null},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"form__box"},l.a.createElement("form",{className:"form",method:"",action:""},l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{type:"submit",className:"btn btn-add",value:"submit",onClick:this.onBtnClickAddHandler},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"),l.a.createElement("button",{type:"submit",className:"btn btn-del",value:"submit",onClick:function(){return e.props.onDeleteItem(e.props.activeItem)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430")),l.a.createElement("label",null,"\u0424\u0418\u041e "),l.a.createElement("input",{id:"fio",type:"text",required:!0,defaultValue:this.props.data?this.props.data.person:this.state.person,onChange:this.handlePersonChange}),l.a.createElement("label",null,"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"),l.a.createElement("select",{onChange:this.handleWorkChange,name:"option",id:"work"},l.a.createElement("option",{selected:!0,disabled:!0,hidden:!0},this.props.data?this.props.data.work:null),l.a.createElement("option",{value:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a"},"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a"),l.a.createElement("option",{value:"\u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440"},"\u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440"),l.a.createElement("option",{value:"\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a"},"\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a"),l.a.createElement("option",{value:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0449\u0438\u043a"},"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0449\u0438\u043a")),l.a.createElement("label",null,"\u0414\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"),l.a.createElement("input",{type:"date",id:"bday",onChange:this.handleBirthdayChange,defaultValue:this.props.data?this.props.data.birthday:null}),l.a.createElement("label",{className:"gender"},"\u041f\u043e\u043b "),l.a.createElement("div",{className:"radio"},l.a.createElement("label",null,l.a.createElement("input",{type:"radio",className:"radio",name:"gender",value:"m",defaultChecked:this.props.data?"m"===this.props.data.gender:null,onChange:this.handleGenderChange}),"\u043c")),l.a.createElement("div",{className:"radio"},l.a.createElement("label",null,l.a.createElement("input",{type:"radio",className:"radio",name:"gender",value:"w",defaultChecked:this.props.data?"w"===this.props.data.gender:null,onChange:this.handleGenderChange}),"\u0436")),l.a.createElement("label",null,"\u0423\u0432\u043e\u043b\u0435\u043d",l.a.createElement("input",{type:"checkbox",id:"employ",defaultChecked:this.props.data?this.props.data.employ:this.state.employ,onChange:this.handleEmployChange})),l.a.createElement("button",{className:"btn",type:"submit",value:"submit",onClick:this.onChangeItem},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c")))}}]),t}(l.a.Component),v=[{person:"\u041f\u0435\u0447\u043e\u0440\u0438\u043d \u0420\u043e\u043c\u0430\u043d \u0414\u0435\u043d\u0438\u0441\u043e\u0432\u0438\u0447",work:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a",birthday:"2014-02-01",gender:"m",employ:!0},{person:"\u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432\u0430 \u0418\u0440\u0438\u043d\u0430 \u041f\u0435\u0442\u0440\u043e\u0432\u043d\u0430",work:"\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a",birthday:"1992-12-25",gender:"w",employ:!0},{person:"\u0414\u0430\u043d\u0438\u043b\u043e\u0432 \u041a\u0438\u0440\u0438\u043b\u043b \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438\u0447",work:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0449\u0438\u043a",birthday:"1994-01-01",gender:"m",employ:!1}],y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).selectItem=function(t){var a=document.getElementById(t).firstChild,n=e.state.activeItem>-1?document.getElementById(e.state.activeItem).firstChild:null;n!==a?(null!==n?(n.classList.remove("colorAdd"),a.classList.add("colorAdd")):a.classList.add("colorAdd"),e.setState(Object(d.a)({},e.state,{activeItem:t})),console.log("\u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u0446\u0432\u0435\u0442")):(a.classList.remove("colorAdd"),e.setState(Object(d.a)({},e.state,{activeItem:-1})),console.log("\u0443\u0431\u0440\u0430\u043b\u0438 \u0446\u0432\u0435\u0442"))},e.handleAddItem=function(t){var a=Object(s.a)(e.state.data).concat([t]);e.setState({data:a})},e.handleRemoveItem=function(t){v.splice(t,1),e.setState({data:v})},e.handleChangeItem=function(t){var a=e.state.data,n=e.state.activeItem;a[n].person=t?t.person:e.state.data[n].person,a[n].work=t?t.work:e.state.data[n].work,a[n].birthday=t?t.birthday:e.state.data[n].birthday,a[n].gender=t?t.gender:e.state.data[n].gender,a[n].employ=t?t.employ:e.state.data[n].employ,e.setState(Object(d.a)({},e.state,{data:a}))},e.state={data:v,activeItem:-1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432"),l.a.createElement("div",{className:"grid-container-main"},l.a.createElement(g,{className:"grid-container-left",data:this.state.data,selectItem:this.selectItem}),l.a.createElement(b,{className:"grid-container-right",data:this.state.activeItem>-1?this.state.data[this.state.activeItem]:null,onAddItem:this.handleAddItem,onDeleteItem:this.handleRemoveItem,onChangeItem:this.handleChangeItem})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.4ff47b8d.chunk.js.map