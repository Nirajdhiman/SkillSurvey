sap.ui.jsview("survey-template.UserManagement", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.UserManagement
	*/ 
	getControllerName : function() {
		return "survey-template.UserManagement";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.UserManagement
	*/ 
	tileContent:{},
	createContent : function(oController) {
		debugger;
	
		var oModel = new sap.ui.model.json.JSONModel();

		oModel.setData({}, false);
		sap.ui.getCore().setModel(oModel, "selectedModel");
		function row(sLabel, sText, sUrl) {
			var oControl;
			if (!sUrl) {
				oControl = new sap.ui.commons.TextView({
					text : sText,
					tooltip : sText
				});
			} else {
				oControl = new sap.ui.commons.Link({
					text : sText,
					href : sUrl,
					tooltip : sText,
					target : "_blank"
				});
			}

			var oLabel = new sap.ui.commons.Label({
				text : sLabel + ":",
				labelFor : oControl
			});

			var oMLCell1 = new sap.ui.commons.layout.MatrixLayoutCell(
					{
						hAlign : sap.ui.commons.layout.HAlign.End,
						vAlign : sap.ui.commons.layout.VAlign.Top,
						content : [ oLabel ]
					});
			var oMLCell2 = new sap.ui.commons.layout.MatrixLayoutCell(
					{
						hAlign : sap.ui.commons.layout.HAlign.Begin,
						vAlign : sap.ui.commons.layout.VAlign.Top,
						content : [ oControl ]
					});

			return new sap.ui.commons.layout.MatrixLayoutRow({
				cells : [ oMLCell1, oMLCell2 ]
			});
		}

		var c = sap.ui.commons;

		//oController.createThingInspector(oController);

		try {
			sap.ui.getCore().loadLibrary("sap.ui.table");
		} catch (e) {
			alert("This test page requires the library 'sap.ui.table' which is not available.");
			throw (e);
		}

		sap.ui.core.Control.extend("ItemLayout", {
			metadata : {
				aggregations : {
					"link" : {
						type : "sap.ui.commons.Link",
						multiple : false
					},
					"image" : {
						type : "sap.ui.commons.Image",
						multiple : false
					},
					"form" : {
						type : "sap.ui.commons.form.Form",
						multiple : false
					},
				}
			},

			renderer : function(rm, ctrl) {
				rm.write("<div");
				rm.writeControlData(ctrl);
				rm.writeAttribute("class", "CustomItemLayout");
				rm.write("><div");
				rm.writeAttribute("class",
						"CustomItemLayoutInner");
				rm.write("><div");
				rm.writeAttribute("class",
						"CustomItemLayoutTitle");
				rm.write(">");
				rm.renderControl(ctrl.getImage());
				rm.write("<div>");
				rm.renderControl(ctrl.getLink());
				rm.write("</div></div><div");
				rm.writeAttribute("class",
						"CustomItemLayoutCntnt");
				rm.write(">");
				rm.renderControl(ctrl.getForm());
				rm.write("</div></div></div>");
			},

			onBeforeRendering : function() {
				if (this.resizeTimer) {
					clearTimeout(this.resizeTimer);
					this.resizeTimer = null;
				}
			},

			onAfterRendering : function() {
				var $This = this.$();
				if ($This.parent().parent().hasClass(
						"sapUiUx3DSSVSingleRow")) {
					this._resize();
				} else {
					$This.addClass("CustomItemLayoutSmall");
				}
			},

			_resize : function() {
				if (!this.getDomRef()) {
					return;
				}
				var $This = this.$();
				if ($This.outerWidth() >= 440) {
					$This.removeClass("CustomItemLayoutSmall")
							.addClass("CustomItemLayoutLarge");
				} else {
					$This.removeClass("CustomItemLayoutLarge")
							.addClass("CustomItemLayoutSmall");
				}
				setTimeout(jQuery.proxy(this._resize, this),
						300);
			}
		});

		var c = sap.ui.commons;
		
	
   var _template =  new ItemLayout(
			{
				link : new c.Link(
						{
							text : "{profileListData>loginId}",
							key :"{profileListData>loginId}",
							press : function(evt) {

								debugger;
								var  id = (evt.oSource.mBindingInfos.text.binding.oContext.sPath).split("/")[1];//: "/0"
								var oModel = sap.ui.getCore().getModel("selectedModel");
								if (oModel == null) {
									var oModel = new sap.ui.model.json.JSONModel();
								}
								var context = sap.ui.getCore().getModel("profileListData").oData;
								for(var i=0;i<context.length;i++){
									if(i== id){
										oModel.setData(context[i],false);
										sap.ui.getCore().setModel(oModel,"selectedModel");
										break;
									}
								}
								
								var oTI = config.getObjectById(constant._USER_MANAGEMENT_THINGINSPECTOR_ID);
						    	if(oTI!=null){
						    		oTI.removeAllFacetContent();
									oTI.removeAllActions();
									oTI.destroyFacets();
							    	oTI.destroyFacetContent() ;
									oTI.destroy();
						    	}
						    		oController.createThingInspector(oController);
						    	
					    		 oController.createThingGroup("overview");
					    
							
									
							}
						}),
				image : new c.Image({
					src : "config/images/employee_icon.png"
				}),
				form : new c.form.Form(
						{
							width : "100%",
							layout : new c.form.GridLayout(),
							formContainers : [ new c.form.FormContainer(
									{
										formElements : [
												new c.form.FormElement(
														{
															label : new c.Label(
																	{
																		text : "User Type",
																		layoutData : new c.form.GridElementData(
																				{
																					hCells : "5"
																				})
																	}),
															fields : [ new c.TextField(
																	{
																		value : "{profileListData>userType/userTypeName}",
																		editable : false
																	}) ]
														}),
												new c.form.FormElement(
														{
															label : new c.Label(
																	{
																		text : "Login",
																		layoutData : new c.form.GridElementData(
																				{
																					hCells : "5"
																				})
																	}),
															fields : [ new c.TextField(
																	{
																		value : "{profileListData>loginId}",
																		editable : false
																	}) ]
														}),
												new c.form.FormElement(
														{
															label : new c.Label(
																	{
																		text : "Gender",
																		layoutData : new c.form.GridElementData(
																				{
																					hCells : "5"
																				})
																	}),
															fields : [ new c.TextField(
																	{
																		value : "{profileListData>gender/genderName}",
																		editable : false
																	}) ]
														}) ]
									}) ]
						})
			});		
		debugger;

		var oTable = new sap.ui.table.Table({
			id:"dataUserManagementTable",

			visibleRowCount : 12,//config.getRowCount()-2,
		
			selectionMode : sap.ui.table.SelectionMode.Single,
			navigationMode : sap.ui.table.NavigationMode.Paginator,
			rowSelectionChange : function(oEvent) {
				
			}

		});

		var oDataSet = new sap.ui.ux3.DataSet({
			items : {
				path : "profileListData>/",
				template : new sap.ui.ux3.DataSetItem({
				})
			},
			showToolbar : false,
			selectionChanged : function(oEvent) {
				oTable.setSelectedIndex(oEvent
						.getParameter("newLeadSelectedIndex"));
			}
		});
		oDataSet.setModel(oModel);
		
		//
		var oMatrixDataSet = new sap.ui.commons.layout.MatrixLayout({
			id:"dataSetTableContainer",
			layoutFixed : false,
			visible:false
			
		}).addStyleClass("userManagementMatrix");
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
		
		 var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			 
			 content:[ oDataSet]
		 });
    oRow.addCell(oCell);
    oMatrixDataSet.addRow(oRow);
		
		
		//

		var bTableVisible = true;

		var oToolbar = new sap.ui.commons.Toolbar(
				{
					design : "Standard",
					width:"100%",
					rightItems : [ new sap.ui.commons.SearchField(
							{
								enableListSuggest : false,
								enableClear : true,
								enableFilterMode : true,
								search : function(oEvent) {
									debugger;
									var sQuery = oEvent.getParameter("query");
									var oFilter = !sQuery ? []: [ new sap.ui.model.Filter("name",sap.ui.model.FilterOperator.Contains,sQuery) ];
									oDataSet.getBinding("items").filter(oFilter);
									oTable.getBinding("rows").filter(oFilter);
									oDataSet.setLeadSelection(-1);
									oTable.clearSelection();
								}
							}) ],
					items : [ new sap.ui.commons.SegmentedButton(
							{
								buttons : [
										new sap.ui.commons.Button(
												"typeTable",
												{
													icon : "sap-icon://table-view",
													lite : true
												}).addStyleClass("userManagementButtons"),
										new sap.ui.commons.Button(
												"typeSingleLine",
												{
													icon : "sap-icon://list",
													lite : true
												}).addStyleClass("userManagementButtons"),
										new sap.ui.commons.Button(
												"typeTiles2",
												{
													icon : "sap-icon://grid",
													lite : true
												}).addStyleClass("userManagementButtons") ,
												new sap.ui.commons.Button(
														"userCreate",
														{
															//icon : "sap-icon://add",
															lite : true,
															text:"Create new user "
														}).addStyleClass("userManagementButtons")
									],
								select : function(oEvent) {
						

									switch (oEvent
											.getParameter("selectedButtonId")) {
									case "typeTable":
										config.getObjectById("dataUserManagementTable").setVisible(true);
										config.getObjectById("dataSetTableContainer").setVisible(false);
										break;
									case "typeTiles2":
										debugger;
										oDataSet.removeAllViews();
										oDataSet.destroyViews();
										config.getObjectById("dataUserManagementTable").setVisible(false);
										config.getObjectById("dataSetTableContainer").setVisible(true);
										var oTile =new sap.ui.ux3.DataSetSimpleView({
											floating : true,
											responsive : true,
											itemMinWidth : 200,
											template : _template,
											height:(config.getMatrixHeight()-50).toString()+'px',
										});
										oDataSet.addView(oTile);
										oDataSet.setSelectedView(oTile);
										
										
										break;
									case "typeSingleLine":
										oDataSet.removeAllViews();
										oDataSet.destroyViews();
										config.getObjectById("dataUserManagementTable").setVisible(false);
										config.getObjectById("dataSetTableContainer").setVisible(true);
										var oRow = new sap.ui.ux3.DataSetSimpleView({
											
											visible:false,
											floating : false,
											responsive : false,
											itemMinWidth : 0,
											height:(config.getMatrixHeight()-50).toString()+'px',
											template : _template
										});
											oDataSet.addView(oRow);
										
										oDataSet.setSelectedView(oRow);
										break;
									case "userCreate":
										var bus = sap.ui.getCore().getEventBus();
										bus.publish("nav", "fromUserManagement", {
											id : "create",
										});
										break;
									}

																	},
								selectedButton : "typeTable"
							}) ]
				});
		
		var oQuickView = new sap.ui.ux3.QuickView("QuickView1",
				{
					type : "{id}",
					firstTitle : "{profileListData>userType/userTypeName}",
					firstTitleHref : "{login}",
					secondTitle : "{profileListData>/gender/genderName}",
					icon : "config/images/employee_icon.png",
				});
		

		oTable
				.addColumn(new sap.ui.table.Column(
						{
							label : new sap.ui.commons.Label({
								text : "User Type",

							}),
							template : new sap.ui.commons.Label(
									{
										key : "{userType/userId}",
										//text : "{profileListData>/userType/userTypeName}",
										icon : "config/images/employee_icon.png"

									}).bindProperty("text","userType/userTypeName").attachBrowserEvent("click", function(evt) {
												debugger;

												var oModel = sap.ui.getCore().getModel("selectedModel");
												if (oModel == null) {
													oModel = new sap.ui.model.json.JSONModel();
												}
												var oContextObject = sap.ui.getCore().byId(evt.target.id).getBindingContext().getObject();
												config.setSelectedUserProfileId(oContextObject.loginId);
												oModel.setData(oContextObject,false);
												sap.ui.getCore().setModel(oModel,"selectedModel");
												
												var oTI = config.getObjectById(config.getUserManagementThingInspactorId());
										    	if(oTI!=null){
										    		oTI.removeAllFacetContent();
													oTI.removeAllActions();
													oTI.destroyFacets();
											    	oTI.destroyFacetContent() ;
													oTI.destroy();
										    	}
										    		oController.createThingInspector(oController);
										    	
										    	
									    		oController.createThingGroup("overview");
									    
												
												
												
											}, this).setTooltip(oQuickView),
						}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Gender"
			}),
			template : new sap.ui.commons.Label({
				text : "{gender/genderName}",

			})
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Login"
			}),
			template : new sap.ui.commons.Label({
				text : "{loginId}"
			})
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text:"Job Title"
			}),
			template : new sap.ui.commons.Label({
				text : "{jobTitle/name}"
			})
		}));
		oTable.setModel(sap.ui.getCore().getModel("profileListData"));
		
		oTable.bindRows("/");

		
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : false,
			//width:config.getUserManagementLeftContentWidth().toString()+'px',
		//	height:config.getMatrixHeight().toString()+'px'
			
		}).addStyleClass("userManagementMatrix");
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:"30px"});
		
		 var oCellTableContent = new sap.ui.commons.layout.MatrixLayoutCell({id:"userManagementTableContentToolbar",
			 width:"100%",
			 content:[ oToolbar]
		 }).addStyleClass("userManagementTableContentToolbar");
    oRow.addCell(oCellTableContent);
    oMatrix.addRow(oRow);
		 var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
			
			 var oCellTableContent = new sap.ui.commons.layout.MatrixLayoutCell({id:"userManagementTableContent",
				 
				 content:[oTable,oMatrixDataSet]
			 }).addStyleClass("userManagementTableContent");
	     oRow.addCell(oCellTableContent);
	     oMatrix.addRow(oRow);
	     
	     
	     //
	    
	     //
	     return oMatrix;


		
	},

	
});
