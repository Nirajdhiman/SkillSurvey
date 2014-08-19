
var role = location.search.split('role=')[1] ? location.search.split('role=')[1] : 'User';

var SurveyViewFactory=function(data,bdata){
	this.data = data;
	this.bData = bdata;
	this.buttonStatus=[];
	this.current="";
	this.next="";
	this.last="";
	this.seqNo=1;
	this.viewSeqNo=0;
	this.lastSeqNo=0;
	this.welcomeView="";
	this.surveyViewName="Survey";
	this.role="User";
	this.dataSqNo=1;
	this.lastStatus =false;
	//this.selectPathway = {};
	//this.dataLength = Object.keys(data).length;
	this.createId=function(name){
		var arr = name.split(" ");
		var id ="";
		for(var i=0;i<arr.length;i++){
			if(i< arr.length-1){
				if(arr[i].charAt(0)!=' ')
				id+= arr[i].charAt(0);
				
			}else{
				id+= arr[i];
			}
			
		}
		return id;

	};
	this.createInitialDataModel=function(list){
		debugger;
		for(var l in list){
			this.data.push({seqNo:this.dataSqNo,id:this.createId(list[l].name)});
			this.bData.push({seqNo:this.dataSqNo,text:list[l].name});
			this.dataSqNo+=1;
		}
		this.data.push({seqNo:this.dataSqNo,id:"SelectPathway"});
		this.bData.push({seqNo:this.dataSqNo,text:"Select Pathway"});
		this.dataSqNo+=1;
	};
	this.updatedDataModel=function(list){
		debugger;
		for(var l in list){
			this.data.push({seqNo:this.dataSqNo,id:this.createId(list[l].name)});
			this.bData.push({seqNo:this.dataSqNo,text:list[l].name});
			this.dataSqNo+=1;
		}
		var counter=1;
		for(var id in this.buttonStatus){
			sap.ui.getCore().byId('Bar_'+id).destroyContentLeft();
			this.updateButtonList(id, sap.ui.getCore().byId('Bar_'+id),counter);
			counter+=1;
		
		}
	};
	this.getRole=function(){
		return this.role;
	};
	this.setRole=function(role){
		this.role = role;
	};
	this.getSurveyViewName=function(){
		return this.surveyViewName;
	};
	this.setSurveyViewName=function(viewName){
		this.surveyViewName = viewName;
	};
	this.initView=function(scenario){
		if(scenario=="user"){
			this.setRole("Individual");
		}else{
			this.setRole("Administrators");
		}
		//if(scenario =="user"){
		//	this.setWelcomeViewName("UserWelcome");
		//	this.setSurveyViewName("UserWelcome");
	//	}else{
			this.setWelcomeViewName("AMSWelcome");
			this.setSurveyViewName("Survey");
	//	}

	};
	this.getLastStatus=function(){
		return this.lastStatus;
	};
	this.setWelcomeViewName=function(viewName){
		this.welcomeView = viewName;
	};
	this.getWelcomeViewName=function(){
		return this.welcomeView;
	};

	this.getViewSeqNo=function(){
		return this.viewSeqNo;
	};
	this.setViewSeqNo=function(seqno,id){
		if(this.buttonStatus[id]==true){return;}
		this.buttonStatus[id]=true;
		if(this.viewSeqNo>=this.dataLength){
			this.viewSeqNo = this.dataLength;
		}else{
			this.viewSeqNo=seqno;
		}
	};
	this.setSeqNo=function(seqno){
		this.seqNo = seqno;
	};
	this.setLastSeqNo=function(lastSeqNo){
		this.lastSeqNo = lastSeqNo;
	};
	this.getButtonList=function(bId){
		debugger;
		//if(this.buttonStatus[bId]==true){return;}
		var btnArr = new Array();
		var _enabled=false;
		this.buttonStatus[bId]==true;
		var cssClassName="button_2";
		for(var button in this.bData ){
			if(this.bData[button].seqNo<=this.viewSeqNo){
				_enabled = true;
			}else{
				_enabled=false;
			}
			
			if(this.bData[button].seqNo==this.viewSeqNo ){
				if(this.bData[button].seqNo!= Object.keys(this.bData).length){
					cssClassName="select_button_1";
				}
				
			}else if(this.bData[button].seqNo==this.viewSeqNo-1){
				cssClassName="select_button_2";
			}else{
				 cssClassName="button_2";
			}
			if(this.bData[button].seqNo== Object.keys(this.bData).length){
				cssClassName="button_1";
			}
			if(this.bData[button].seqNo== this.viewSeqNo && cssClassName=="button_1"){
				cssClassName="select_button_3";
			}
			var btn = new sap.m.Button({
				id:bId+"_"+this.bData[button].seqNo,
				text: this.bData[button].text,
				enabled:_enabled,
				press:function(evt){
					var data = evt.getSource().getId().split('_');
					surveyViewFactory.setSeqNo(parseInt(data[1]));
					surveyViewFactory.setLastSeqNo(parseInt(data[1]-1));
					var viewId = surveyViewFactory.getViewName();
					surveyViewFactory.updateButtonStatus(viewId);
					var bus = sap.ui.getCore().getEventBus();
					 bus.publish("nav", "to", { 
					     id : viewId,
					});
					
				}
			}).addStyleClass(cssClassName);
			
			btnArr.push(btn);
		}
		return btnArr;
	};
	this.updateButtonList=function(bId,oControl,select){
		debugger;
		//if(this.buttonStatus[bId]==true){return;}
		var btnArr = new Array();
		var _enabled=false;
		this.buttonStatus[bId]==true;
		var cssClassName="button_2";
		for(var button in this.bData ){
			if(this.bData[button].seqNo<=select){
				_enabled = true;
			}else{
				_enabled=false;
			}
			
			if(this.bData[button].seqNo==select ){
				if(this.bData[button].seqNo!= Object.keys(this.bData).length){
					cssClassName="select_button_1";
				}
				
			}else if(this.bData[button].seqNo==select-1){
				cssClassName="select_button_2";
			}else{
				 cssClassName="button_2";
			}
			if(this.bData[button].seqNo== Object.keys(this.bData).length){
				cssClassName="button_1";
			}
			if(this.bData[button].seqNo== select && cssClassName=="button_1"){
				cssClassName="select_button_3";
			}
			var btn = new sap.m.Button({
				id:bId+"_"+this.bData[button].seqNo,
				text: this.bData[button].text,
				enabled:_enabled,
				press:function(evt){
					var data = evt.getSource().getId().split('_');
					surveyViewFactory.setSeqNo(parseInt(data[1]));
					surveyViewFactory.setLastSeqNo(parseInt(data[1]-1));
					var viewId = surveyViewFactory.getViewName();
					surveyViewFactory.updateButtonStatus(viewId);
					var bus = sap.ui.getCore().getEventBus();
					 bus.publish("nav", "to", { 
					     id : viewId,
					});
					
				}
			}).removeStyleClass("sapMBtn ").addStyleClass(cssClassName);
			oControl.addContentLeft(btn);
		}
	};
	this.getViewName=function(){
		debugger;		
		if(this.seqNo>this.dataLength){
			this.seqNo = 1;
			this.lastStatus =true;
		}
		if(this.seqNo==this.dataLength){
			this.lastStatus =true;
		}
		for(var i=0; i< this.data.length;i++){
			if(this.data[i].seqNo==this.seqNo){
				this.current = this.data[i].id;
				this.setViewSeqNo(this.getViewSeqNo()+1,this.current);
				this.lastSeqNo =this.lastSeqNo+1;
				this.seqNo= this.seqNo+1;
				break;
			}
		}
		return this.current;
	};
	this.updateButtonStatus=function(id){
		for(var i=this.getViewSeqNo();i>=1;i--){
			 sap.ui.getCore().byId(id+"_"+i).setEnabled(true);
		}
	};
	this.getLastViewName=function(){
		this.lastSeqNo-=1;
		debugger;
		if(this.lastSeqNo==this.dataLength){
			this.lastSeqNo = this.lastSeqNo-1;
		}
		if(this.lastSeqNo==0){
			this.lastSeqNo=1;
		}
		for(var obj in this.data){
			if(this.data[obj].seqNo==this.lastSeqNo){
				this.last = this.data[obj].id;
				for(var i=this.getViewSeqNo();i>=1;i--){
					 sap.ui.getCore().byId(this.last+"_"+i).setEnabled(true);
				}
				 this.seqNo = this.lastSeqNo+1;
				break;
			}
		}
		return this.last;
	};
};
var viewDataModel=[{"seqNo":1,"id":"Mandatory"},{"seqNo":2,"id":"HighlyDesirable"},{"seqNo":3,"id":"Desirable"}];
var buttonModel = [{"seqNo":1,"text":"Mandatory"},{"seqNo":2,"text":"Highly Desirable"},{"seqNo":3,"text":"Desirable"}];

var surveyViewFactory = new SurveyViewFactory(viewDataModel,buttonModel); // its
sap.ui.controller("survey-template.app", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf survey-template.app
*/
	onInit: function() {
		 var bus = sap.ui.getCore().getEventBus();
		bus.subscribe("nav", "to", this.navHandler, this);
		
		
		var bus = sap.ui.getCore().getEventBus();
		  bus.publish("nav", "to", { 
	            id : "UserProfile",
	           
	       });
			
			
		debugger;
		
     
	},
	setBreadCumModel : function (viewname){
		var json= {Items: [{bkey :"1", breadcumtext:"Home"} ]};;

		switch (viewname) {
		case 'CreateSurvey':
			json= {Items: [{bkey :"Master", breadcumtext:"Home", status:true},{bkey :"CreateSurvey", breadcumtext:" >>  My Survey", status:false} , {bkey :"CreateSurvey", breadcumtext:" >>  Create Survey", status:false},    ]};
		break;
		case 'ResumeSurvey':
			json= {Items: [{bkey :"Master", breadcumtext:"Home" , status:true}, {bkey :"CreateSurvey", breadcumtext:" >>  My Survey", status:true},{bkey :"ResumeSurvey", breadcumtext:">>  Resume Survey", status:false}   ]};
		break;
		case 'Survey':
			json= {Items: [{bkey :"Master", breadcumtext:"Home" , status:true}, {bkey :"CreateSurvey", breadcumtext:" >>  My Survey", status:true},{bkey :"Survey", breadcumtext:">>  Survey", status:false}   ]};
		break;
		case 'CreateReport':
			json= {Items: [{bkey :"Master", breadcumtext:"Home", status:true}, {bkey :"CreateReport", breadcumtext:" >>  My Reports", status:true},{bkey :"CreateReport", breadcumtext:">>  Create Report", status:false}   ]};
		break;
		case 'PrintReport':
			json= {Items: [{bkey :"Master", breadcumtext:"Home", status:true}, {bkey :"CreateReport", breadcumtext:" >>  My Reports", status:true},{bkey :"PrintReport", breadcumtext:">>  Print Report", status:false}   ]};
		break;
		case 'CreateUser':
			json= {Items: [{bkey :"Master", breadcumtext:"Home", status:true}, {bkey :"CreateUser", breadcumtext:">> Manage Users", status:true},{bkey :"CreateUser", breadcumtext:">>  Create User", status:false}   ]};
		break;
		case 'MaintainUser':
			json= {Items: [{bkey :"Master", breadcumtext:"Home", status:true}, {bkey :"CreateUser", breadcumtext:">>Manage Users", status:true},{bkey :"MaintainUser", breadcumtext:">>  Maintain User", status:false}   ]};
		break;
		case 'OrgReport':
			json= {Items: [{bkey :"Master", breadcumtext:"Home", status:true}, {bkey :"OrgReport", breadcumtext:">>My Org Reports", status:true},{bkey :"OrgReport", breadcumtext:">>  Org Report", status:false}   ]};
		break;
		case 'PrintOrg':
			json= {Items: [{bkey :"Master", breadcumtext:"Home", status:true}, {bkey :"OrgReport", breadcumtext:">>My Org Reports", status:true},{bkey :"PrintOrg", breadcumtext:">>  Print Org Report", status:false}   ]};
		break;
		
		
		
		
		default:
			break;
		}
			var model1 = new sap.ui.model.json.JSONModel();
		model1.setData(json, false);
		sap.ui.getCore().setModel(model1, "breadcum");
		
		

		
		
	},
	navHandler: function (channelId, eventId, data) {
		debugger;
		this.setBreadCumModel(data.id);
		if (eventId === "to") {
			this.navTo(data.id, data.data, true);
		} else if (eventId === "fromTiles") {
			this.novFromTiles(data.id, data, true);
		} else if (eventId === "toOverview") {
			this.novToOverview(data.id, data, true);
		} else if (eventId === "toDelete") {
			this.novToDelete(data.id, data, true);
		} else if (eventId === "toCreate") {
			this.novToCreate(data.id, data, true);
		} else if (eventId === "toEdit") {
			this.novToEdit(data.id, data, true);
		} else if (eventId === "back") {
			jQuery.sap.history.back();
		} else if (eventId === "virtual") {
			jQuery.sap.history.addVirtualHistory();
		} else {
			jQuery.sap.log.error("'nav' event cannot be processed. There's no handler registered for event with id: " + eventId);
		}
	},
navTo : function (id, data, writeHistory) {
		
		if (id === undefined) {
			
			jQuery.sap.log.error("navTo failed due to missing id");
		
		} 
		
		
		var app = this.getView().app;
		
	            if (app.getPage(id) === null) {
	            	var page = this.getNewView(id);
	               jQuery.sap.log.info("now loading page '" + id + "'");
	               app.addPage(page);
	            }
	           app.to(id, "show");
	      
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf survey-template.app
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf survey-template.app
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf survey-template.app
*/
//	onExit: function() {
//
//	}
	getNewView:function(viewName){
		debugger;
			var fullViewName = "survey-template." + viewName;
			return  sap.ui.view({
				id : viewName,
				viewName : fullViewName,
				type : sap.ui.core.mvc.ViewType.JS
			});
	},
	createQuickViewDSContent:function(id){
		
		sap.ui.getCore().setModel(sap.ui.getCore().getModel(id),"MenuModel");
		// oTextView = new sap.ui.commons.TextView({text : "{name}"})
		var oLink = new sap.ui.commons.Button({text : "{MenuModel>name}", width:"100%",
			press:this.toSelection
		}).removeStyleClass("sapUiBtnStd").addStyleClass("surveyMenuButton");
	//	oLink.addStyleClass("surveyQuickText");
		var c = sap.ui.commons;
		var oCell = new c.layout.MatrixLayoutCell({content:[oLink]});
		//	oLeftCell.addStyleClass("surveyQuickText");
		oCell.addStyleClass("surveyQuickText");
		var oRow = new c.layout.MatrixLayoutRow({cells:[oCell]});
		var len =120;
      	var oContent = new c.layout.MatrixLayout({
			//height:(len).toString()+'px',
			layoutFixed : true,
		}).addStyleClass("surveyQuickView");
		oContent.bindAggregation("rows", "MenuModel>/", oRow);

		oContent.addDelegate({onAfterRendering:jQuery.proxy(setKeyboardNavigation,oContent)});

		return oContent;
	},
	toSelection:function(evt){
		var arr =evt.getSource().getText().split(" ");
		var viewName = arr[0]+arr[1];
		var bus = sap.ui.getCore().getEventBus();
		  bus.publish("nav", "to", { 
	            id : viewName,
	           
	       });
		
	},
});





