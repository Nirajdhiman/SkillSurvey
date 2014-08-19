sap.ui.controller("skillsurvey-ui.Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf scheduler-ui.Master
*/  
	
	
	onInit: function() {
		debugger;
//		var data=	'{"Items":[{"viewName":"Individual"},{"viewName":"Supervisons"},{"viewName":"Department"},{"viewName":"RoleAssingment"},{"viewName":"Survey"},{"viewName":"Pathway"},{"viewName":"Role"},{"viewName":"Claim"},{"viewName":"ClaimAssingment"},{"viewName":"SurveyAnswer"},{"viewName":"Function"},{"viewName":"FunctionOccupations"},{"viewName":"Level"},{"viewName":"Occupation"},{"viewName":"Uoc"},{"viewName":"UocQuestion"},{"viewName":"Question"},{"viewName":"UocGroupMembers"},{"viewName":"UocGroup"},{"viewName":"Need"},{"viewName":"Dapssco"},{"viewName":"DapsscoLevel"},{"viewName":"DapsscoSkills"},{"viewName":"BreakSchedule"}]}';
//		var oModel = new sap.ui.model.json.JSONModel();
//		oModel.setJSON(data, false);
//
//		sap.ui.getCore().setModel(oModel);
		
//		//var URL = window.location.protocol+"//"+window.location.host+"/au.com.redbackconsulting.scheduler.api/api/user/managed";
//		//alert(URL);
//		$.ajax({
//			dataType:'json',
//			headers:{
//				Accept:"application/json",
//				"Access-Control-Allow-Origin":"*"
//			},
//			type:'GET',
//			url:URL,
//			asnyc:false,
//			success:function(data){
//				//alert("response");
//				
//				var jsonString='';
//				for(var i=0;i<data.length;i++){
//					jsonString+='{';
//					var jObject  = data[i];
//					for(var obj in jObject){
//						jsonString+='"'+obj+'":"'+jObject[obj]+'",';
//					}
//					jsonString = jsonString.substr(0,jsonString.length-1);
//					if(i<data.length-1){
//						jsonString+='},';
//					}else{
//						jsonString+='}';
//					}
//				}
//			//	alert(jsonString);
//			var responseJson = '{"ROOT":{"ISSUCCESSFUL":"X","ADDRESSES":['+jsonString+'],"MESSAGES":[]}}';
//				
//				var oModel = new sap.ui.model.json.JSONModel();
//			    oModel.setJSON(responseJson,false);
//			    sap.ui.getCore().setModel(oModel);
//			   // return oController.createInitContent(oView);
//				
//			},
//			error:function(err){
//				alert("error!"+err);
//			}
//		});
//        	
        },

    	loadModel : function(oObject) {
    		
    		
    	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf scheduler-ui.Master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf scheduler-ui.Master
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf scheduler-ui.Master
*/
//	onExit: function() {
//
//	}

	onSelect: function(oEvent)
	{
	debugger;
		
		var page = oEvent.oSource.data("id");
		//alert("Page"+page);
		var bus = sap.ui.getCore().getEventBus();
		bus.subcribe("nav","to",{id : page,	});
		//var pageKeyCTX = oEvent.getParameter("listItem").getBindingContext().getObject();
		//var appReff = sap.app.viewCache.get("app");
		//var navPage = sap.app.viewCache.get(pageKeyCTX.viewName);
	   // var temp = sap.app.viewCache.isViewExist();
		
	    //appReff.app.addPage(navPage, false);
	//	navPage.getController().onInit();
	//	appReff.app.to(pageKeyCTX.viewName,{context:oEvent.getParameter("listItem").getBindingContext()});

		
	
	
	},

	onPress: function(oEvent)
	{
		
		var appView = sap.app.viewCache.get("app");
		appView.app.to("Detail",{context:this.getBindingContext()});
	},

	
	// Search Handler:
	handleSearch : function (evt) 
	{
		//debugger;
		// create model filter
		var filters = [];
		var query = evt.getParameter("query");
		if (query && query.length > 0) {
			var filter = new sap.ui.model.Filter("ADDRTYPE", sap.ui.model.FilterOperator.Contains,query);
			filters.push(filter);
		}
		// update list binding
		sap.app.viewCache.get("Master").byId("mList").getBinding("items").filter(filters);
		//var list =	sap.ui.getCore().byId("mList");
		//var lst = vi.byId("mList");
		//var binding = lst.getBinding("items");
		//binding.filter(filters);
	}
		

});