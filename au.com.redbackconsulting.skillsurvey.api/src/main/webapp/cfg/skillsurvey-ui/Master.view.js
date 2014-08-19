sap.ui.jsview("skillsurvey-ui.Master", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf skillsurvey-ui.Master
	*/ 
	getControllerName : function() {
		return "skillsurvey-ui.Master";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf skillsurvey-ui.Master
	*/ 
	createContent : function(oController) {
		var oControls = [];

//	var data=	'{"Items":[{"viewName":"Individual"},{"viewName":"Supervisons"},{"viewName":"Department"},{"viewName":"RoleAssingment"},{"viewName":"Survey"},{"viewName":"Pathway"},{"viewName":"Role"},{"viewName":"Claim"},{"viewName":"ClaimAssingment"},{"viewName":"SurveyAnswer"},{"viewName":"Function"},{"viewName":"FunctionOccupations"},{"viewName":"Level"},{"viewName":"Occupation"},{"viewName":"Uoc"},{"viewName":"UocQuestion"},{"viewName":"Question"},{"viewName":"UocGroupMembers"},{"viewName":"UocGroup"},{"viewName":"Need"},{"viewName":"Dapssco"},{"viewName":"DapsscoLevel"},{"viewName":"DapsscoSkills"},{"viewName":"BreakSchedule"}]}';
		

	//var mPage = new sap.m.Page({title:"i18n>MasterTitle",});
		var subHeader = new sap.m.Bar({
										id:this.createId("Master-SubHeader"),
										contentLeft: new sap.m.SearchField({
																				id:this.createId("Master-SubHeader-Search"),
																				search: oController.handleSearch
																			})
										});
		// Setup list with columns
		var mList = new sap.m.List(
						{
							id: this.createId("mList"),
							threshold: 2,
							inset : false,
							//mode: sap.m.ListMode.None,
							mode: "{device>/listMode}",
							showUnread : true,
							scrollToLoad : true,
							headerText : "Items (23)",
							includeItemInSelection	: true,
							select : oController.onSelect,
							swipeContent : new sap.m.Button({
								text : "Swipe Button",
								type : "Accept",
								press : function(e) {
									list.swipeOut();
								}
							}),
							columns : [new sap.m.Column({
								styleClass : "name",
								hAlign : "Left",
								header : new sap.m.Label({
									text : "SkillName"
								})
							}) 
							]			
						}
					);

		//ColumnItemTemplate
		var template = new sap.m.ColumnListItem({
			type : sap.m.ListType.Navigation,
			unread : false,
			//tap : oContoller.onSelect,
			press : oController.onPress,
			key : "{menuModel>viewid}" ,
			title:"viewName",
			cells : [
				new sap.m.Input({
					value : "{menuModel>viewName}",
					editable : false,
					
				}),
				
			]
		});
			//Binding 
		debugger;
		var testModel = sap.ui.getCore().getModel();
		mList.bindAggregation("items", "menuModel>/Items", template);
		oControls.push(subHeader,mList);
 		return new sap.m.Page({
			//title: "{i18n>MasterTitle}",
			content: oControls,
			footer: new sap.m.Bar({
				id: this.createId("master-footer")
				})
			
		});
	}

});