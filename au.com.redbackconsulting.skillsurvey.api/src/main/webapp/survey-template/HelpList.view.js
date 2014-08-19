sap.ui.jsview("survey-template.HelpList", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf survey-template.HelpList.HelpList
	 */
	getControllerName : function() {
		return "survey-template.HelpList";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf survey-template.HelpList
	 */
	createContent : function(oController) {
		var subHeader = new sap.m.Bar({
			id : this.createId("Master-SubHeader"),
			contentLeft : new sap.m.SearchField({
				id : this.createId("Master-SubHeader-Search"),
				//search :// oController.handleSearch
			})
		});
		// Setup list with columns
		var mList = new sap.m.List({
			id : this.createId("mList"),
			threshold : 2,
			inset : false,
			// mode: sap.m.ListMode.None,
		//	mode : "{device>/listMode}",
			showUnread : true,
			scrollToLoad : true,
			headerText : "Items (23)",
			includeItemInSelection : true,
			//select : oController.onSelect,
			swipeContent : new sap.m.Button({
				text : "Swipe Button",
				type : "Accept",
				press : function(e) {
					list.swipeOut();
				}
			}),
			columns : [ new sap.m.Column({
				styleClass : "name",
				hAlign : "Left",
				header : new sap.m.Label({
					text : "SkillName"
				})
			}) ]
		});

		// ColumnItemTemplate
		var template = new sap.m.ColumnListItem({
			type : sap.m.ListType.Navigation,
			unread : false,
			// tap : oContoller.onSelect,
		//	press : oController.onPress,
			key : "{helpModel>helpKey}",
			//title : "viewName",
			cells : [ new sap.ui.commons.Label({
				text : "{helpModel>helpName}",
				//editable : false,

			}),

			]
		});
		// Binding
		debugger;
		var helpModel={ Items:[
		                       {helpKey:'xxx',helpName:"Read about new features"},
		                       {helpKey:'xxsx',helpName:"Contact us"}
		                       ]};
		 var oModel = sap.ui.getCore().getModel("helpModel");
			if (oModel == null) {
				oModel = new sap.ui.model.json.JSONModel();
				oModel.setDefaultBindingMode("OneWay");
			}
			oModel.setData(helpModel, false);
			sap.ui.getCore().setModel(oModel,"helpModel");
			
		mList.bindAggregation("items", "helpModel>/Items", template);
	return mList;
	}

});