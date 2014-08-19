jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");
jQuery.sap.require("jquery.sap.history");
jQuery.sap.require("sap.m.InstanceManager");
sap.ui.controller("skillsurvey-ui.app", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf skillsurvey-ui.app
*/
	onInit: function() {
		var view = this.getView();
		
		var data=	'{"Items":[{"viewName":"Individual"},{"viewName":"Supervisons"},{"viewName":"Department"},{"viewName":"RoleAssignments"},{"viewName":"Survey"},{"viewName":"Pathway"},{"viewName":"Role"},{"viewName":"Claim"},{"viewName":"ClaimAssignments"},{"viewName":"SurveyAnswer"},{"viewName":"Function"},{"viewName":"FunctionOccupations"},{"viewName":"Level"},{"viewName":"Occupation"},{"viewName":"Uoc"},{"viewName":"UocQuestion"},{"viewName":"Question"},{"viewName":"UocGroupMembers"},{"viewName":"UocGroup"},{"viewName":"Need"},{"viewName":"Dapssco"},{"viewName":"DapsscoLevels"},{"viewName":"DapsscoSkills"}]}';
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setJSON(data, false);
		sap.ui.getCore().setModel(oModel,"menuModel");

		this.app = view.app;

     	var bus = sap.ui.getCore().getEventBus();
		bus.subscribe("nav","to", this.navToHandler, this);
		bus.subscribe("nav","toEdit", this.navToEditHandler, this);
		bus.subscribe("nav","toDelete", this.navToDeleteHandler, this);
		bus.subscribe("nav","toCreate", this.navToCreateHandler, this);
		bus.subscribe("nav","toCreateSave", this.navToCreaeSaveHandler, this);
		bus.subscribe("nav","toOverview", this.navToOverviewHandler, this);
		bus.subscribe("nav","toEditSave", this.navToEditSaveHandler, this);
		bus.subscribe("nav","from", this.navToBackHandler, this);
		
		
		
	},
	navToDeleteHandler:function (channelId, EventId, data){
		this.serviceCallforDeleteRecord(data.id,this.app, data);
	},
	navToCreaeSaveHandler:function (channelId, EventId, data){
		this.serviceCallforSaveNewRecord(data.id,this.app,data);
	},
	navToEditSaveHandler:function (channelId, EventId, data){
		this.serviceCallforSaveEditRecrod(data,this.app);
	},
	navToOverviewHandler:function (channelId, EventId, data){
		//var myapp = this.app;
		if(data && data.id ){
		
		if(this.app.getDetailPage(data.id) === null){
			//jQuery.sap.log.info("Now Loading page'"+data.id+ "'", sDetails, sComponent)
			var newPage = sap.app.viewCache.get(data.id);
			this.app.addDetailPage(newPage);
		} 
		
	
		this.app.to(data.id, "slide");
		}

	},
	
	navToEditHandler : function (channelId, EventId, data){
		//var myapp = this.app;
		
		var transientModel = sap.ui.getCore().getModel("transientModel");
		if(transientModel==null){
			transientModel=new sap.ui.model.json.JSONModel();
		}
		transientModel.setDefaultBindingMode("TwoWay");
		transientModel.setData(data.data, false);
		sap.ui.getCore().setModel(transientModel, "transientModel");

		if(data && data.id ){
		
		if(this.app.getDetailPage(data.id) === null){
			//jQuery.sap.log.info("Now Loading page'"+data.id+ "'", sDetails, sComponent)
			var newPage = sap.app.viewCache.get(data.id);
			this.app.addDetailPage(newPage);
		} 
		//navigate
		this.app.to(data.id, "slide");
		}

	},
	
	
	getTransientJson : function(tableid) {
		return {};
//		var transientjson = null;
//		
//		switch (tableid) {
//		case "Role":
//			transientjson ={"id":"","name":"","description":""};
//			break;
//		
//		
//		case 'UocGroup':
//			transientjson ={"id":"","name":"","description":""};
//			break;
//		case 'Dapssco':
//		
//			transientjson={"id":"","occupatioId":"","levelId":""} ;
//		 	break;
//case 'DapsscoLevels':
//
//	transientjson={"dapssco_id":"","levelId":""} ;
// 	break;
//	
//	
//case 'DapsscoSkills':
//
//	transientjson ={"dapssco_Id":"","uoc_GroupId":""};
// 	break;
//	
//case 'UocGroupMembers':
//
//	transientjson={"uoc_GroupId":"","uoc_Id":""} ;
// 	break;
//	
//	
//case 'RoleAssignments':
//
//	transientjson={"individualId":"","roleId":""} ;
// 		break;
//		
//case 'ClaimAssignments':
//
//	transientjson={"claimId":"","roleId":""} ;
// 		break;
//
//case 'FunctionOccupations':
//
//	transientjson={"functionId":"","occupationId":""} ;
// 		break;
//
//case 'Survey':
//
//	transientjson={"id":"","individualId":"","dapssco_Id":"","startedAt":"","completedAt":"","pathwayId":""} ;
// 		break;
//	
//		
//case 'UocQuestion':
//	
//
//	transientjson={"id":"","uoc_Id":"","questionId":""} ;
//	break;
//	
//case 'SurveyAnswer':
//
//	transientjson ={"uoc_QuestionId":"","surveyId":"","value":"","answeredAt":""};
// 		break;
//		
//case 'Individual':
//
//	transientjson={"id":"","name":"","gender":"","loginPassword":"","departmentId":"","functionId":"","occupationId":"","levelId":""} ;
// 			break;
//		
//case 'Supervisons':
//
//	transientjson={"supervisorId":"","supervisedId":""} ;
//		break;
//		
//case 'Department':
//
//	transientjson={"id":"","name":"","description":"","code":""} ;
//		break;
//case 'Pathway':
//
//	transientjson={"id":"","name":"","description":""} ;
//		break;		
//case 'Claim':
//
//	transientjson={"id":"","code":""} ;
//		break;		
//		
//case 'Function':
//
//	transientjson={"id":"","name":"","description":""} ;
//		break;		
//case 'Level':
//
//	transientjson={"id":"","code":"","description":""} ;
//		break;		
//case 'Occupation':
//
//	transientjson={"id":"","name":"","description":""} ;
//		break;		
//
//case 'Uoc':
//
//	transientjson={"id":"","name":"","description":""} ;
//		break;
//
//case 'Question':
//
//	transientjson={"id":"","name":"","description":""} ;
//		break;	
//
//case 'Need':
//
//	transientjson={"id":"","name":"","description":""} ;
//		break;		
//			
//		default :
//			break;
//		
//		}

		
		
		
		
		
		
		
		
	//	return transientjson;
	},
	
	navToCreateHandler : function (channelId, EventId, data){
		
		//alert(data.tableid);
		//var transientjson = this.getTransientJson(data.tableid);
		//var transientModel = new sap.ui.model.json.JSONModel();

		var transientModel = sap.ui.getCore().getModel("transientModel");
		if(transientModel==null){
			transientModel = new sap.ui.model.json.JSONModel();
			transientModel.setDefaultBindingMode("TwoWay");
			sap.ui.getCore().setModel(transientModel, "transientModel");
		}
		transientModel.setData({}, false);
		
		
		
		
	
		/// transient Model
		var dorpDownTableName=null;
		switch (data.tableid) {
		
		case 'UocGroup':
			dorpDownTableName ="Need";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			 this.ajaxGetCall(serviceUrl,dorpDownTableName,false,this.app,data);
			 dorpDownTableName ="Pathway";
				var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
				 this.ajaxGetCall(serviceUrl,dorpDownTableName,true,this.app,data); 
			break;
			
			
		case 'Dapssco':

			dorpDownTableName ="Occupation";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,false,this.app,data);
			dorpDownTableName ="Level";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,true,this.app,data);
			break;
			
			
		case 'DapsscoLevels':

			dorpDownTableName ="Dapssco";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,false,this.app,data);
			dorpDownTableName ="Level";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,true,this.app,data);
			
			break;
			
			
		case 'DapsscoSkills':

			dorpDownTableName ="Dapssco";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,false,this.app,data);
			dorpDownTableName ="UocGroup";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,true,this.app,data);
			
			break;
			
		case 'UocGroupMembers':
			
			dorpDownTableName ="UocGroup";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,false,this.app,data);
			dorpDownTableName ="Uoc";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,true,this.app,data);
			
			break;
			
			
		case 'RoleAssignments':

			dorpDownTableName ="Individual";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,false,this.app,data);
			dorpDownTableName ="Role";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,true,this.app,data);
			break;
				
		case 'ClaimAssignments':
			
			dorpDownTableName ="Claim";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,false,this.app,data);
			dorpDownTableName ="Role";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,true,this.app,data);
			
			break;
		
		case 'FunctionOccupations':
			
			dorpDownTableName ="Function";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,false,this.app,data);
			dorpDownTableName ="Occupation";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,true,this.app,data);
			
			break;
		
		case 'Survey':

			dorpDownTableName ="Individual";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,false,this.app,data);
			dorpDownTableName ="Dapssco";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,false,this.app,data);
			dorpDownTableName ="Pathway";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,true,this.app,data);
			
			break;
			
				
		case 'UocQuestion':

			dorpDownTableName ="Uoc";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,false,this.app,data);
			dorpDownTableName ="Question";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,true,this.app,data);
			
			break;
			
		case 'SurveyAnswer':

			dorpDownTableName ="Survey";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,false,this.app,data);
			dorpDownTableName ="UocQuestion";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,true,this.app,data);
			break;
				
		case 'Individual':
	
	
			dorpDownTableName ="Department";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,false,this.app,data);
			dorpDownTableName ="Function";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,false,this.app,data);
			dorpDownTableName ="Occupation";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,false,this.app,data);
			dorpDownTableName ="Level";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,true,this.app,data);
			break;
				
		case 'Supervisons':
		//	this.populateModel("Supervisor");
			dorpDownTableName ="Supervisor";
			var serviceUrl = this.getServiceURL(dorpDownTableName, "managed");
			this.ajaxGetCall(serviceUrl,dorpDownTableName,true,this.app,data);
			break;
			

		default:
			if(this.app.getDetailPage(data.id) === null){
				//jQuery.sap.log.info("Now Loading page'"+data.id+ "'", sDetails, sComponent)
				var newPage = sap.app.viewCache.get(data.id);
				this.app.addDetailPage(newPage);
			} 
			//navigate
			this.app.to(data.id, "slide");
			
			break;
		}
		

	},
	navToHandler : function (channelId, EventId, data){
	
		var myapp = this.app;
		if(data && data.id ){
		 
			this.serviceCallforOverview(data.id, myapp);
		}
	},
	
	navToBackHandler : function (){
		alert("nav To Back");
	},
	
	 
	
	serviceCallforOverview : function(viewName, myapp ){
		 var serviceurl = this.getServiceURL(viewName, 'managed');
	  debugger;
		 $.ajax(
			    	{ 
						 type: 'GET', 
						 url: serviceurl,
						 crossDomain: false,
						 cache: false,
						 contentType: "json",
						// data:oModel,
						 beforeSend: function( xhr ){
							var bytes = Crypto.charenc.Binary.stringToBytes("bmays1"+ ":"+"sap");
							var base64 = Crypto.util.bytesToBase64(bytes);
								xhr.setRequestHeader("Authorization", "Basic "+base64);
								return;
							},			 
						 success: function(data) {
							 var oJModel= sap.ui.getCore().getModel("overviewModel");
							 if(oJModel==null){
								 oJModel =	 new sap.ui.model.json.JSONModel();
								 oJModel.setDefaultBindingMode("OneWay");
								sap.ui.getCore().setModel(oJModel,"overviewModel");
							 }
							    oJModel.setData(data,false);
							
								if(myapp.getDetailPage(viewName) === null){
									var newPage = sap.app.viewCache.get(viewName);
									myapp.addDetailPage(newPage);
								} 
								myapp.to(viewName, "slide");
						 }, 
						 error : function (e, textStatus,errorThrown ){ alert ("error in ajax call"+":::" + e.message+ errorThrown+":::" +textStatus);}
					});
		 
		
		
	},
	
	ajaxGetCall: function(serviceurl,id,isTo,app,data) {
	//	debugger;
		var sapModel=null;
	  	$.ajax(
	    	{ 
				 type: 'GET', 
				 url: serviceurl,
				 crossDomain: false,
				 cache: false,
				 contentType: "json",
				// data:oModel,
				 beforeSend: function( xhr ){
					var bytes = Crypto.charenc.Binary.stringToBytes("bmays1"+ ":"+"sap");
					var base64 = Crypto.util.bytesToBase64(bytes);
						xhr.setRequestHeader("Authorization", "Basic "+base64);
						return;
					},			 
				 success: function(resp) {
					 debugger;
					 resp.splice(0,0,{});
					 var jModel =sap.ui.getCore().getModel(id+'Model');
						if(jModel==null){
							jModel=new sap.ui.model.json.JSONModel();
							sap.ui.getCore().setModel(jModel, id+'Model');	
						}
						
					jModel.setData(resp, false);
					
					if(isTo==true){
						if( data.id ){
						
						if(app.getDetailPage(data.id) === null){
							//jQuery.sap.log.info("Now Loading page'"+data.id+ "'", sDetails, sComponent)
							var newPage = sap.app.viewCache.get(data.id);
							app.addDetailPage(newPage);
						} 
						//navigate
				app.to(data.id, "slide");
						}
					}
					
				 }, 
				 error : function (e, textStatus,errorThrown ){ alert ("error in ajax call"+":::" + e.message+ errorThrown+":::" +textStatus);}
			});
      
     //alert(sapModel);
		//return sapModel ;
	},
	serviceCallforSaveEditRecrod : function(data,myapp){
		var serviceurl =this.getServiceURL(data.tableid, "edit");
		
		var oModel =sap.ui.getCore().getModel("transientModel").oData;
		serviceurl= serviceurl+"/"+oModel.id;
		
		if(sap.app.config.useLocalData == false)
        { 
	    	$.ajax(
	    	{ 
				 type: 'POST', 
				 url: serviceurl,
				 crossDomain: false,
				 cache: false,
				 contentType: "json",
				 data:oModel,
				 beforeSend: function( xhr ){
					var bytes = Crypto.charenc.Binary.stringToBytes("bmays1"+ ":"+"sap");
					var base64 = Crypto.util.bytesToBase64(bytes);
						xhr.setRequestHeader("Authorization", "Basic "+base64);
						return;
					},			 
				 success: function(rep) {
					 debugger;
					 sap.m.MessageToast.show("Record have been successfully updated");
						var bus = sap.ui.getCore().getEventBus();
						bus.publish("nav","to",{id : data.id,	});
				 }, 
				 error : function (e, textStatus,errorThrown ){ alert ("error in ajax call"+":::" + e.message+ errorThrown+":::" +textStatus);}
			});
        
        }
        
		
		
		
	},
	serviceCallforSaveNewRecord : function(viewName,myapp, data){
		var serviceurl = this.getServiceURL(data.tableid, "create")
			var jModel =sap.ui.getCore().getModel("transientModel").oData;
		
		if(sap.app.config.useLocalData == false)
        {
	    	$.ajax(
	    	{ 
				 type: 'POST', 
				 url: serviceurl,
				 crossDomain: false,
				 cache: false,
				 contentType: "json",
				 data:jModel,
				 beforeSend: function( xhr ){
					var bytes = Crypto.charenc.Binary.stringToBytes("bmays1"+ ":"+"sap");
					var base64 = Crypto.util.bytesToBase64(bytes);
						xhr.setRequestHeader("Authorization", "Basic "+base64);
						return;
					},			 
				 success: function(data) {
					 debugger;
					 sap.m.MessageToast.show("New record have been saved updated");
					
						var bus = sap.ui.getCore().getEventBus();
						bus.publish("nav","to",{id : viewName	});
					 
				 }, 
				 error : function (e, textStatus,errorThrown ){ alert ("error in ajax call"+":::" + e.message+ errorThrown+":::" +textStatus);}
			});
        
        }
        
		
		
		
	},
	
	serviceCallforDeleteRecord : function(viewName,myapp){
		var serviceurl =this.getServiceURL(viewName, "delete");
		
		var oModel =sap.ui.getCore().getModel("transientModel").oData;
		serviceurl= serviceurl+"/"+oModel.id;
		
		if(sap.app.config.useLocalData == false)
        {
	    	$.ajax(
	    	{ 
				 type: 'GET', 
				 url: serviceurl,
				 crossDomain: false,
				 cache: false,
				 contentType: "json",
				// data:oModel,
				 beforeSend: function( xhr ){
					var bytes = Crypto.charenc.Binary.stringToBytes("bmays1"+ ":"+"sap");
					var base64 = Crypto.util.bytesToBase64(bytes);
						xhr.setRequestHeader("Authorization", "Basic "+base64);
						return;
					},			 
				 success: function(data) {
					 debugger;
					 sap.m.MessageToast.show("record have been successfully deleted");
						var bus = sap.ui.getCore().getEventBus();
						bus.publish("nav","to",{id : viewName,	});
					 
				 }, 
				 error : function (e, textStatus,errorThrown ){ alert ("error in ajax call"+":::" + e.message+ errorThrown+":::" +textStatus);}
			});
        
        }
        
		
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf skillsurvey-ui.app
*/
//	onBeforeRendering: function() {
//
//	
//	var bus = sap.ui.getCore().getEventBus();
//	bus.publish("nav", "to", {
//		id : "Login"
//	});
//
//	},
/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf skillsurvey-ui.app
*/
	onAfterRendering: function() { 
	 },
/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf skillsurvey-ui.app
*/
//	onExit: function() {
//
//	}
	 
	 
getServiceURL : function(id, usecase) {
	 
	var serviceurl =sap.app.config.hostName+":"+sap.app.config.hostPort+"/"+sap.app.config.applicationContextPath;
//alert(id);
		switch (id) { 
		
		case 'Role' :
		serviceurl=serviceurl+'/role/';
		break;
case 'UocGroup':
	serviceurl=serviceurl+'/uocgroup/';
	break;
case 'Dapssco':
	serviceurl=serviceurl+'/dapssco/';
 	break;
case 'DapsscoLevels':
	serviceurl=serviceurl+'/depsscolevels/';
 	break;
	
 		
case 'DapsscoSkills':
	serviceurl=serviceurl+'/dapsscoskills/';
 	break;
	
case 'UocGroupMembers':
	serviceurl=serviceurl+'/uocgroupmember/';
 	break;
	
	
case 'RoleAssignments':
	serviceurl=serviceurl+'/roleassignment/';
 		break;
		
case 'ClaimAssignments':
	serviceurl=serviceurl+'/claimassignments/';
 		break;

case 'FunctionOccupations':
	serviceurl=serviceurl+'/functionoccupation/';
 		break;

case 'Survey':
	serviceurl=serviceurl+'/survey/';
 		break;
	
		
case 'UocQuestion':
	
 	serviceurl=serviceurl+'/uocquestion/';
 		break;
	
case 'SurveyAnswer':
	serviceurl=serviceurl+'/surveyanswer/';
 		break;
		
case 'Individual':
	serviceurl=serviceurl+'/individual/';
 			break;
		
case 'Supervisons':
	serviceurl=serviceurl+'/supervisons/';
		break;
		
case 'Department':
	serviceurl=serviceurl+'/department/';
		break;
case 'Pathway':
	serviceurl=serviceurl+'/pathway/';
		break;		
case 'Claim':
	serviceurl=serviceurl+'/claim/';
		break;		
		
case 'Function':
	serviceurl=serviceurl+'/function/';
		break;		
case 'Level':
	serviceurl=serviceurl+'/level/';
		break;		
case 'Occupation':
	serviceurl=serviceurl+'/occupation/';
		break;		

case 'Uoc':
	serviceurl=serviceurl+'/uoc/';
		break;

case 'Question':
	serviceurl=serviceurl+'/question/';
		break;	

case 'Need':
	serviceurl=serviceurl+'/need/';
		break;		
			
				
		
		
default:
	break;
}
		
		serviceurl= serviceurl+usecase;
		//alert(serviceurl);
		return serviceurl;	
}

});