(this.webpackJsonpmyfirstreactapp=this.webpackJsonpmyfirstreactapp||[]).push([[0],{54:function(t,e,a){},55:function(t,e,a){},63:function(t,e,a){"use strict";a.r(e);var s=a(2),n=a(1),i=a.n(n),c=a(26),r=a.n(c),o=(a(54),a(8)),l=a(9),h=a(11),d=a(10),j=(a(55),a(33)),p=a(32),u=a(22),b=a(13),m=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(o.a)(this,a),(s=e.call(this,t)).state={data:[],selected:""},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://sofiacoelho.co.uk/api/test.php?flag=location").then((function(t){return t.json()})).then((function(e){t.setState({data:e[0]})}))}},{key:"handleChange",value:function(t){this.setState({selected:t.target.value})}},{key:"capitalizeString",value:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},{key:"render",value:function(){var t=this;return Object(s.jsxs)(b.a.Group,{controlId:"locationSelect",children:[Object(s.jsx)(b.a.Label,{children:"Location"}),Object(s.jsx)(b.a.Control,{as:"select",name:"location",onChange:this.handleChange.bind(this),custom:!0,children:this.state.data.map((function(e){return Object(s.jsx)("option",{value:e[2],children:t.capitalizeString(e[1])},e[2])}))})]})}}]),a}(i.a.Component),f=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).state={data:[],selected:"",selectedName:""},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://sofiacoelho.co.uk/api/test.php?flag=employee").then((function(t){return t.json()})).then((function(e){t.setState({data:e[0]})}))}},{key:"handleChange",value:function(t){for(var e=t.target.options,a=[],s=[],n=0;n<e.length;n++)e[n].selected&&(a.push(e[n].value),s.push(e[n].text));this.setState({selected:a,selectedName:s})}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(b.a.Group,{controlId:"employeesID",children:[Object(s.jsx)(b.a.Label,{children:"Employees"}),Object(s.jsx)(b.a.Control,{multiple:!0,as:"select",name:"employees[]",onChange:this.handleChange.bind(this),htmlSize:3,custom:!0,children:this.state.data.map((function(t){return Object(s.jsx)("option",{name:t[1]+" "+t[2],value:t[0],children:t[1]+" "+t[2]},t[0])}))})]}),Object(s.jsxs)("p",{children:["Selected: ",this.state.selectedName.toString()]})]})}}]),a}(i.a.Component),O=a(12),x=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){return Object(o.a)(this,a),e.call(this,t)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)(b.a,{onSubmit:this.props.handleSubmit,children:[Object(s.jsx)(b.a.Label,{children:"Name"}),Object(s.jsx)(b.a.Control,{type:"text",name:"name",id:"name",placeholder:"name"}),Object(s.jsx)(m,{}),Object(s.jsx)(f,{}),Object(s.jsx)(O.a,{variant:"primary",type:"submit",children:"addDepartment"})]})}}]),a}(i.a.Component),v=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(o.a)(this,a),(s=e.call(this,t)).state={data:[],selectedId:s.props.dId},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://sofiacoelho.co.uk/api/test.php?flag=department").then((function(t){return t.json()})).then((function(e){t.setState({data:e[0]})}))}},{key:"handleChange",value:function(t){this.setState({selectedId:t.target.value}),"filter"===this.props.flag&&this.props.change(t.target.value)}},{key:"capitalizeString",value:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},{key:"render",value:function(){var t=this;return Object(s.jsx)(b.a.Group,{controlId:"departmentSelect",children:Object(s.jsxs)(b.a.Control,{as:"select",name:"department",value:this.state.selectedId,onChange:this.handleChange.bind(this),custom:!0,children:["filter"===this.props.flag?Object(s.jsx)("option",{children:"All Departments"}):Object(s.jsx)("option",{children:"Department"}),this.state.data.map((function(e){return Object(s.jsx)("option",{value:e[2],children:t.capitalizeString(e[1])},e[2])}))]})})}}]),a}(i.a.Component),g=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){return Object(o.a)(this,a),e.call(this,t)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(b.a,{onSubmit:this.props.handleSubmit,children:[Object(s.jsxs)(b.a.Group,{children:[Object(s.jsx)(b.a.Label,{children:"First Name"}),Object(s.jsx)(b.a.Control,{id:"fName",name:"fName",type:"text",defaultValue:this.props.fName,required:!0})]}),Object(s.jsxs)(b.a.Group,{children:[Object(s.jsx)(b.a.Label,{children:"Last Name"}),Object(s.jsx)(b.a.Control,{id:"lName",name:"lName",type:"text",defaultValue:this.props.lName,required:!0})]}),Object(s.jsxs)(b.a.Group,{children:[Object(s.jsx)(b.a.Label,{children:"Role"}),Object(s.jsx)(b.a.Control,{id:"job",name:"job",type:"text",defaultValue:this.props.job,required:!0})]}),Object(s.jsxs)(b.a.Group,{children:[Object(s.jsx)(b.a.Label,{children:"Email"}),Object(s.jsx)(b.a.Control,{id:"email",name:"email",type:"email",defaultValue:this.props.email,required:!0})]}),Object(s.jsxs)(b.a.Group,{children:[Object(s.jsx)(b.a.Label,{children:"Department"}),Object(s.jsx)(v,{dId:this.props.currentDepartId})]}),Object(s.jsx)(O.a,{variant:"primary",type:"submit",children:"Submit"})]})})}}]),a}(i.a.Component),y=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){return Object(o.a)(this,a),e.call(this,t)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(b.a,{onSubmit:this.props.handleSubmit,children:[Object(s.jsx)(b.a.Label,{children:"Name"}),Object(s.jsx)(b.a.Control,{type:"text",name:"name",id:"name",placeholder:"name"}),Object(s.jsx)(O.a,{variant:"primary",type:"submit",children:"Add"})]})})}}]),a}(i.a.Component),S=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(o.a)(this,a),(s=e.call(this,t)).updateFormState=s.updateFormState.bind(Object(p.a)(s)),s}return Object(l.a)(a,[{key:"handleSubmit",value:function(t){var e=this;t.preventDefault();var a=new FormData(t.target);if(console.log(t.target),"edit"==this.props.flag){a.append("employeeId",this.props.id);var s="https://sofiacoelho.co.uk/api/test.php?flag=update";fetch(s,{method:"POST",body:a}).then((function(t){return t.text()})).then((function(t){e.updateFormState()}))}if("add"==this.props.flag){s="https://sofiacoelho.co.uk/api/test.php?flag=addEmployee";fetch(s,{method:"POST",body:a}).then((function(t){return t.text()})).then((function(t){e.updateFormState()}))}if("addLocation"==this.props.flag){s="https://sofiacoelho.co.uk/api/test.php?flag=addLocation";fetch(s,{method:"POST",body:a}).then((function(t){return t.text()})).then((function(t){e.updateFormState()}))}if("addDepartment"==this.props.flag){s="https://sofiacoelho.co.uk/api/test.php?flag=addDepartment";fetch(s,{method:"POST",body:a}).then((function(t){return t.text()})).then((function(t){e.updateFormState()}))}}},{key:"updateFormState",value:function(){this.props.formOnSubmit()}},{key:"render",value:function(){var t,e,a=Object(s.jsx)(g,{id:this.props.id,fName:this.props.fname,lName:this.props.lname,job:this.props.job,department:this.props.department,email:this.props.email,handleSubmit:this.handleSubmit.bind(this),currentDepartId:this.props.dId});switch(this.props.flag){case"add":t="Add Employee",e=a;break;case"edit":t="Edit Employee",e=a;break;case"addLocation":t="Add Location",e=Object(s.jsx)(y,{handleSubmit:this.handleSubmit.bind(this)});break;case"addDepartment":t="Add Department",e=Object(s.jsx)(x,{handleSubmit:this.handleSubmit.bind(this)})}return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(u.a,{show:this.props.show,onHide:this.props.hide,"aria-labelledby":"example-modal-sizes-title-lg",children:[Object(s.jsx)(u.a.Header,{closeButton:!0,children:Object(s.jsx)(u.a.Title,{id:"example-modal-sizes-title-lg",children:t})}),Object(s.jsx)(u.a.Body,{children:e})]})})}}]),a}(i.a.Component),k=a(20),C=a(17),N=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)(u.a,{show:this.props.show,onHide:this.props.hide,children:[Object(s.jsx)(u.a.Header,{closeButton:!0,children:Object(s.jsx)(u.a.Title,{children:"DELETE?"})}),Object(s.jsxs)(u.a.Body,{children:["Do you wish to delete ",Object(s.jsxs)("span",{className:"text-danger bold",children:[" ",this.props.name||this.props.fname+" "+this.props.lname,"? "]})]}),Object(s.jsxs)(u.a.Footer,{children:[Object(s.jsx)(O.a,{variant:"danger",onClick:this.props.hide,children:"No"}),Object(s.jsx)(O.a,{variant:"success",onClick:this.props.delete,children:"Yes"})]})]})}}]),a}(i.a.Component),D=a(65),A=a(35),w=a(36),T=a(34),B=a(27),z=a(24),F=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(o.a)(this,a),(s=e.call(this,t)).state={data:[],data2:[],show:!1,refresh:"",fname:"",lname:"",jobTitle:"",email:"",department:"",id:"",dId:"",alert:!1,idToDelete:"",delete:!1,flag:"",checked:!1,departments:[],filterDepartment:"",search:"",loading:"false",sortAsc:!0},s}return Object(l.a)(a,[{key:"showAlert",value:function(t,e,a){this.setState({alert:!0,idToDelete:t,fname:e,lname:a})}},{key:"hideAlert",value:function(){this.setState({alert:!1,idToDelete:""})}},{key:"deleteEmployee",value:function(){this.setState({delete:!0,alert:!1})}},{key:"showModal",value:function(t,e,a,s,n,i,c){"add"==t?this.setState({show:!0,refresh:!1,flag:"add"}):this.setState({show:!0,refresh:!1,id:i,fname:t,lname:e,jobTitle:a,email:s,department:n,dId:c,flag:"edit"})}},{key:"updateFormState",value:function(){this.setState({show:!1,refresh:!0})}},{key:"hideModal",value:function(){this.setState({show:!1,fname:"",lname:"",jobTitle:"",email:"",department:"",id:"",dId:""})}},{key:"componentDidUpdate",value:function(t){var e=this;this.state.checked&&this.filterbyDepartment(),this.state.delete&&fetch("https://sofiacoelho.co.uk/api/test.php?flag=deleteEmp&id=".concat(this.state.idToDelete)).then((function(t){return t.json()})).then((function(){e.setState({delete:!1,idToDelete:"",refresh:!0,loading:!1})})),this.state.refresh&&fetch("https://sofiacoelho.co.uk/api/test.php?flag=employee").then((function(t){return t.json()})).then((function(t){e.setState({data:t[0],data2:t[0],refresh:!1,loading:!1}),e.sortByAsc()}))}},{key:"componentDidMount",value:function(){var t=this;this.setState({loading:!0}),fetch("https://sofiacoelho.co.uk/api/test.php?flag=employee").then((function(t){return t.json()})).then((function(e){t.setState({data:e[0],data2:e[0],loading:!1}),t.sortByAsc()}))}},{key:"sortByAsc",value:function(){var t=this.state.data.sort((function(t,e){var a=t[1].toUpperCase(),s=e[1].toUpperCase();return a<s?-1:a>s?1:0}));this.setState({data:t})}},{key:"sortByDesc",value:function(){var t=this.state.data.sort((function(t,e){var a=t[1].toUpperCase(),s=e[1].toUpperCase();return a<s?1:a>s?-1:0}));this.setState({data:t})}},{key:"sortByDepartment",value:function(){var t=this.state.data.sort((function(t,e){var a=t[6].toUpperCase(),s=e[6].toUpperCase();return a<s?-1:a>s?1:0}));this.setState({data:t})}},{key:"checkedBox",value:function(t){this.setState({checked:!0,filterDepartment:t,data:this.state.data2})}},{key:"filterbyDepartment",value:function(){var t=this;if(console.log(this.state.filterDepartment),"All Departments"===this.state.filterDepartment);else{var e=this.state.data.filter((function(e){return e[7]==t.state.filterDepartment}));console.log(e),this.setState({data:e}),this.setState({checked:!1})}}},{key:"searchByName",value:function(t){this.setState({search:t.target.value,data:this.state.data2.filter((function(e){return e[1].toUpperCase().includes(t.target.value.toUpperCase())}))})}},{key:"showAlert",value:function(t,e,a){this.setState({alert:!0,idToDelete:t,fname:e,lname:a})}},{key:"hideAlert",value:function(){this.setState({alert:!1,idToDelete:""})}},{key:"deleteEmployee",value:function(){this.setState({delete:!0,alert:!1})}},{key:"sortToggle",value:function(){this.state.sortAsc?(this.sortByDesc(),this.setState({sortAsc:!1})):(this.sortByAsc(),this.setState({sortAsc:!0}))}},{key:"capitalizeString",value:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},{key:"render",value:function(){var t=this,e=!0;return this.state.loading&&(e=!1),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"row mt-4 justify-content-between ",children:[Object(s.jsx)("div",{className:"col-7 col-sm-8 col-md-7 mb-3",children:Object(s.jsx)(b.a.Control,{type:"text",placeholder:"Search by name",value:this.state.search,onChange:this.searchByName.bind(this)})}),Object(s.jsx)("div",{className:"col-sm-2 col-lg-4",children:Object(s.jsx)(v,{change:this.checkedBox.bind(this),flag:"filter"})}),Object(s.jsxs)("div",{className:"col-sm-2 col-lg-3",children:[Object(s.jsxs)(O.a,{variant:"link",onClick:this.sortToggle.bind(this),children:["Name ",this.state.sortAsc?Object(s.jsx)(k.b,{}):Object(s.jsx)(k.a,{})]}),Object(s.jsx)("span",{className:"ml-2"}),Object(s.jsxs)(O.a,{variant:"link",onClick:this.showModal.bind(this,"add"),children:[" ",Object(s.jsx)(C.d,{})]})]})]}),Object(s.jsx)(N,{delete:this.deleteEmployee.bind(this),show:this.state.alert,hide:this.hideAlert.bind(this),fname:this.state.fname,lname:this.state.lname}),Object(s.jsx)(S,{formOnSubmit:this.updateFormState.bind(this),flag:this.state.flag,dId:this.state.dId,id:this.state.id,department:this.state.department,email:this.state.email,fname:this.state.fname,lname:this.state.lname,job:this.state.jobTitle,show:this.state.show,hide:this.hideModal.bind(this)}),e?""==this.state.data?Object(s.jsx)("p",{children:"No Employees"}):Object(s.jsx)(z.a,{children:Object(s.jsx)(z.a.Body,{children:Object(s.jsxs)(j.a,{responsive:!0,borderless:!0,hover:!0,size:"sm",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{className:"border-bottom"}),Object(s.jsxs)("th",{className:"border-bottom align-middle",children:[Object(s.jsx)(T.a,{})," Employee"]}),Object(s.jsxs)("th",{className:"border-bottom align-middle",children:[Object(s.jsx)(A.a,{})," Role"]}),Object(s.jsxs)("th",{className:"border-bottom align-middle",children:[Object(s.jsx)(w.a,{})," Email"]}),Object(s.jsx)("th",{className:"border-bottom align-middle",children:Object(s.jsxs)(O.a,{variant:"link",onClick:this.sortByDepartment.bind(this),children:[Object(s.jsx)(B.a,{})," Department"]})})]})}),Object(s.jsx)("tbody",{children:this.state.data.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"text-center border-bottom",children:Object(s.jsx)(O.a,{variant:"link",onClick:t.showAlert.bind(t,e[0],t.capitalizeString(e[1]),t.capitalizeString(e[2])),children:Object(s.jsx)(k.c,{})})}),Object(s.jsx)("td",{className:"border-bottom align-middle",children:Object(s.jsx)(O.a,{variant:"link",onClick:t.showModal.bind(t,t.capitalizeString(e[1]),t.capitalizeString(e[2]),t.capitalizeString(e[3]),e[4],t.capitalizeString(e[6]),e[0],e[5]),children:t.capitalizeString(e[1])+" "+t.capitalizeString(e[2])})}),Object(s.jsx)("td",{className:"border-bottom align-middle",children:t.capitalizeString(e[3])}),Object(s.jsx)("td",{className:"border-bottom align-middle",children:e[4]}),Object(s.jsx)("td",{className:"border-bottom align-middle",children:t.capitalizeString(e[6])})]},e[0])}))})]})})}):Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)(D.a,{animation:"border"})})]})}}]),a}(n.Component),U=a(30),M=a(23),I=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"col-sm-4 col-md col-lg-3 mt-3",children:Object(s.jsxs)(z.a,{bg:"light",children:[Object(s.jsxs)(z.a.Header,{children:[Object(s.jsx)(M.b,{to:"".concat(this.props.useMatch.url,"/").concat(this.props.id),children:this.props.name}),"delete"==this.props.delFlag?Object(s.jsx)(O.a,{className:"float-right ",variant:"link",onClick:this.props.delete,children:Object(s.jsx)(k.c,{})}):Object(s.jsx)(s.Fragment,{})]}),Object(s.jsx)(U.a,{variant:"flush",children:"location"==this.props.flag?Object(s.jsxs)(U.a.Item,{children:[Object(s.jsx)(B.a,{}),this.props.emps]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(U.a.Item,{children:[Object(s.jsx)(B.a,{}),this.props.emps]}),Object(s.jsxs)(U.a.Item,{children:[Object(s.jsx)(C.c,{}),this.props.location]})]})})]})})}}]),a}(i.a.Component),L=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(o.a)(this,a),(s=e.call(this,t)).state={data:[],data2:[],modal:!1,refresh:!1,search:"",showAlert:!1,delete:"",idToDelete:"",nameToDelete:"",loading:!1,sortAsc:!0},s}return Object(l.a)(a,[{key:"openModal",value:function(){this.setState({modal:!0})}},{key:"hideModal",value:function(){this.setState({modal:!1})}},{key:"updateFormState",value:function(){this.setState({modal:!1,refresh:!0})}},{key:"componentDidUpdate",value:function(){var t=this;this.state.delete&&fetch("https://sofiacoelho.co.uk/api/test.php?flag=deleteDep&id=".concat(this.state.idToDelete)).then((function(t){return t.json()})).then((function(){t.setState({delete:!1,idToDelete:"",nameToDelete:"",refresh:!0})})),this.state.refresh&&fetch("https://sofiacoelho.co.uk/api/test.php?flag=department").then((function(t){return t.json()})).then((function(e){t.setState({data:e[0],data2:e[0],refresh:!1}),t.sortByAsc()}))}},{key:"componentDidMount",value:function(){var t=this;this.setState({loading:!0}),fetch("https://sofiacoelho.co.uk/api/test.php?flag=department").then((function(t){return t.json()})).then((function(e){t.setState({data:e[0],data2:e[0],loading:!1}),t.sortByAsc()}))}},{key:"sortByAsc",value:function(){var t=this.state.data.sort((function(t,e){var a=t[1].toUpperCase(),s=e[1].toUpperCase();return a<s?-1:a>s?1:0}));this.setState({data:t})}},{key:"sortByDesc",value:function(){var t=this.state.data.sort((function(t,e){var a=t[1].toUpperCase(),s=e[1].toUpperCase();return a<s?1:a>s?-1:0}));this.setState({data:t})}},{key:"searchByName",value:function(t){this.setState({search:t.target.value,data:this.state.data2.filter((function(e){return e[1].toUpperCase().includes(t.target.value.toUpperCase())}))})}},{key:"delete",value:function(t,e){this.setState({showAlert:!0,idToDelete:t,nameToDelete:e})}},{key:"runDelete",value:function(){this.setState({delete:!0,showAlert:!1})}},{key:"hideAlert",value:function(){this.setState({showAlert:!1})}},{key:"sortToggle",value:function(){this.state.sortAsc?(this.sortByDesc(),this.setState({sortAsc:!1})):(this.sortByAsc(),this.setState({sortAsc:!0}))}},{key:"capitalizeString",value:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},{key:"render",value:function(){var t=this,e=!0;return this.state.loading&&(e=!1),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"row mt-4 ",children:[Object(s.jsx)("div",{className:"col-7 col-sm-8 col-md-7 mb-3",children:Object(s.jsx)(b.a.Control,{type:"text",placeholder:"Search by name",value:this.state.search,onChange:this.searchByName.bind(this)})}),Object(s.jsxs)("div",{className:"col-5 col-sm-4 col-md-5 mb-3",children:[Object(s.jsxs)(O.a,{variant:"link",onClick:this.sortToggle.bind(this),children:["Name ",this.state.sortAsc?Object(s.jsx)(k.b,{}):Object(s.jsx)(k.a,{})]}),Object(s.jsx)(O.a,{variant:"link",className:"pl-0",onClick:this.openModal.bind(this),children:Object(s.jsx)(C.a,{})})]})]}),Object(s.jsx)(N,{hide:this.hideAlert.bind(this),show:this.state.showAlert,delete:this.runDelete.bind(this),name:this.state.nameToDelete}),Object(s.jsx)(S,{formOnSubmit:this.updateFormState.bind(this),flag:"addDepartment",show:this.state.modal,hide:this.hideModal.bind(this)}),e?Object(s.jsx)("div",{className:"row justify-content-between",children:""==this.state.data?Object(s.jsx)("p",{children:"No Departments"}):this.state.data.map((function(e){return 0==e[0]?Object(s.jsx)(I,{delete:t.delete.bind(t,e[2],t.capitalizeString(e[1])),delFlag:"delete",flag:"department",useMatch:t.props.match,id:e[2],name:t.capitalizeString(e[1]),emps:e[0],location:t.capitalizeString(e[3])},e[2]):Object(s.jsx)(I,{flag:"department",useMatch:t.props.match,id:e[2],name:t.capitalizeString(e[1]),emps:e[0],location:t.capitalizeString(e[3])},e[2])}))}):Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)(D.a,{animation:"border"})})]})}}]),a}(n.Component),E=(a(62),function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(o.a)(this,a),(s=e.call(this,t)).state={data:[],data2:[],modal:!1,refresh:!1,search:"",delete:!1,idToDelete:"",nameToDelete:"",loading:!1,sortAsc:!0},s}return Object(l.a)(a,[{key:"openModal",value:function(){this.setState({modal:!0})}},{key:"hideModal",value:function(){this.setState({modal:!1})}},{key:"updateFormState",value:function(){this.setState({modal:!1,refresh:!0})}},{key:"componentDidUpdate",value:function(){var t=this;this.state.delete&&fetch("https://sofiacoelho.co.uk/api/test.php?flag=deleteLoc&id=".concat(this.state.idToDelete)).then((function(t){return t.json()})).then((function(){t.setState({delete:!1,idToDelete:"",nameToDelete:"",refresh:!0})})),this.state.refresh&&fetch("https://sofiacoelho.co.uk/api/test.php?flag=location").then((function(t){return t.json()})).then((function(e){t.setState({data:e[0],data2:e[0],refresh:!1,loading:!1}),t.sortByAsc()}))}},{key:"componentDidMount",value:function(){var t=this;this.setState({loading:!0}),fetch("https://sofiacoelho.co.uk/api/test.php?flag=location").then((function(t){return t.json()})).then((function(e){t.setState({data:e[0],data2:e[0],loading:!1}),t.sortByAsc()}))}},{key:"sortByAsc",value:function(){var t=this.state.data.sort((function(t,e){var a=t[1].toUpperCase(),s=e[1].toUpperCase();return a<s?-1:a>s?1:0}));this.setState({data:t})}},{key:"sortByDesc",value:function(){var t=this.state.data.sort((function(t,e){var a=t[1].toUpperCase(),s=e[1].toUpperCase();return a<s?1:a>s?-1:0}));this.setState({data:t})}},{key:"searchByName",value:function(t){this.setState({search:t.target.value,data:this.state.data2.filter((function(e){return e[1].toUpperCase().includes(t.target.value.toUpperCase())}))})}},{key:"delete",value:function(t,e){this.setState({showAlert:!0,idToDelete:t,nameToDelete:e})}},{key:"runDelete",value:function(){this.setState({delete:!0,showAlert:!1})}},{key:"hideAlert",value:function(){this.setState({showAlert:!1})}},{key:"sortToggle",value:function(){this.state.sortAsc?(this.sortByDesc(),this.setState({sortAsc:!1})):(this.sortByAsc(),this.setState({sortAsc:!0}))}},{key:"capitalizeString",value:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},{key:"render",value:function(){var t=this,e=!0;return this.state.loading&&(e=!1),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"row mt-4 ",children:[Object(s.jsx)("div",{className:"col-7 col-sm-8 col-md-7 mb-3",children:Object(s.jsx)(b.a.Control,{type:"text",placeholder:"Search by name",value:this.state.search,onChange:this.searchByName.bind(this)})}),Object(s.jsxs)("div",{className:"col-5 col-sm-4 col-md-5 mb-3",children:[Object(s.jsxs)(O.a,{variant:"link",onClick:this.sortToggle.bind(this),children:["Name ",this.state.sortAsc?Object(s.jsx)(k.b,{}):Object(s.jsx)(k.a,{})]}),Object(s.jsx)(O.a,{className:"pl-0",variant:"link",onClick:this.openModal.bind(this),children:Object(s.jsx)(C.a,{})})]})]}),Object(s.jsx)(N,{hide:this.hideAlert.bind(this),show:this.state.showAlert,delete:this.runDelete.bind(this),name:this.state.nameToDelete}),Object(s.jsx)(S,{formOnSubmit:this.updateFormState.bind(this),show:this.state.modal,hide:this.hideModal.bind(this),flag:"addLocation"}),e?Object(s.jsx)("div",{className:"row justify-content-between",children:""==this.state.data?Object(s.jsx)("p",{children:"No Locations"}):this.state.data.map((function(e){return 0==e[0]?Object(s.jsx)(I,{delete:t.delete.bind(t,e[2],e[1]),flag:"location",delFlag:"delete",useMatch:t.props.match,id:e[2],name:t.capitalizeString(e[1]),emps:e[0]},e[2]):Object(s.jsx)(I,{flag:"location",useMatch:t.props.match,id:e[2],name:t.capitalizeString(e[1]),emps:e[0]},e[2])}))}):Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)(D.a,{animation:"border"})})]})}}]),a}(n.Component)),G=a(44),P=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(o.a)(this,a),(s=e.call(this,t)).state={data:[],name:"",loading:"false"},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.setState({loading:!0}),fetch("https://sofiacoelho.co.uk/api/test.php?flag=".concat(this.props.match.path,"&id=").concat(this.props.match.params.id)).then((function(t){return t.json()})).then((function(e){e[0]?t.setState({data:e[0],name:e[1]}):t.setState({data:!1,name:e[1]}),t.setState({loading:!1})}))}},{key:"capitalizeString",value:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},{key:"render",value:function(){var t=this,e=!0;return this.state.loading&&(e=!1),Object(s.jsxs)(s.Fragment,{children:[this.props.match.path.includes("location")?Object(s.jsx)("div",{className:"col-sm-4 col-md col-lg-3 mt-3",children:Object(s.jsxs)("h3",{className:"mb-0 d-inline",children:[Object(s.jsx)(O.a,{variant:"link",as:M.b,to:"/locations",children:Object(s.jsx)(C.b,{})}),Object(s.jsx)(C.c,{}),this.state.name]})}):Object(s.jsx)("div",{className:"col-sm-4 col-md col-lg-3 mt-3",children:Object(s.jsxs)("h3",{className:"mb-0 d-inline",children:[" ",Object(s.jsx)(O.a,{variant:"link",as:M.b,to:"/departments",children:Object(s.jsx)(C.b,{})}),Object(s.jsx)(B.a,{}),this.state.name]})}),Object(s.jsx)(z.a,{children:Object(s.jsx)(z.a.Body,{children:e?Object(s.jsxs)(j.a,{responsive:!0,borderless:!0,hover:!0,size:"sm",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"border-bottom",children:[Object(s.jsx)(T.a,{})," Employee"]}),Object(s.jsxs)("td",{className:"border-bottom",children:[Object(s.jsx)(A.a,{})," Role"]}),Object(s.jsxs)("td",{className:"border-bottom",children:[Object(s.jsx)(w.a,{})," Email"]})]})}),Object(s.jsx)("tbody",{children:this.state.data?this.state.data.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"border-bottom",children:t.capitalizeString(e[0])+" "+t.capitalizeString(e[1])}),Object(s.jsx)("td",{className:"border-bottom",children:t.capitalizeString(e[2])}),Object(s.jsx)("td",{className:"border-bottom",children:e[3]})]})})):Object(s.jsx)("p",{children:"No employees"})})]}):Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)(D.a,{animation:"border"})})})})]})}}]),a}(i.a.Component),H=a(48),q=a(14),V=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)(M.a,{children:[Object(s.jsx)(G.a,{children:Object(s.jsx)("div",{className:"row justify-content-center mt-4",children:Object(s.jsxs)(H.a,{"aria-label":"Nav",className:"nav",toggle:"true",children:[Object(s.jsx)(O.a,{id:"nav1",variant:"outline-primary",as:M.b,to:"/build"}),Object(s.jsx)(O.a,{id:"nav2",variant:"outline-primary",as:M.b,to:"/departments"}),Object(s.jsx)(O.a,{id:"nav3",variant:"outline-primary",as:M.b,to:"/locations"})]})})}),Object(s.jsx)(G.a,{children:Object(s.jsxs)(q.c,{children:[Object(s.jsx)(q.a,{exact:!0,path:"/build",component:F}),Object(s.jsx)(q.a,{path:"/departments/:id",component:P}),Object(s.jsx)(q.a,{path:"/departments",component:L}),Object(s.jsx)(q.a,{path:"/locations/:id",component:P}),Object(s.jsx)(q.a,{path:"/locations",component:E})]})})]})}}]),a}(i.a.Component),R=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),s(t),n(t),i(t),c(t)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(V,{})}),document.getElementById("root")),R()}},[[63,1,2]]]);
//# sourceMappingURL=main.819fc3a4.chunk.js.map