sap.ui
		.jsview(
				"survey-template.App",
				{

					/**
					 * Specifies the Controller belonging to this View. In the
					 * case that it is not implemented, or that "null" is
					 * returned, this View does not have a Controller.
					 * 
					 * @memberOf in.co.itasca.survey.App
					 */
					getControllerName : function() {
						return "survey-template.App";
					},

					/**
					 * Is initially called once after the Controller has been
					 * instantiated. It is the place where the UI is
					 * constructed. Since the Controller is given to this
					 * method, its event handlers can be attached right away.
					 * 
					 * @memberOf in.co.itasca.survey.App
					 */
					createContent : function(oController) {
						
						var oMatrixContainer = new sap.ui.commons.layout.MatrixLayout(
								this.createId("container"));
						// oMatrixContainer.addStyleClass('container');
						oMatrixContainer.setColumns(4);
						var oMatrixRow1 = new sap.ui.commons.layout.MatrixLayoutRow(
								this.createId("container_row1"));
						// oMatrixRow1.addStyleClass("container_row1");
						var oMatrixRow2 = new sap.ui.commons.layout.MatrixLayoutRow(
								this.createId("container_row2"),{height:"90px"});
						// oMatrixRow2.addStyleClass("container_row2");
						var oMatrixRow3 = new sap.ui.commons.layout.MatrixLayoutRow(
								this.createId("container_row3"));
						// oMatrixRow3.addStyleClass("container_row3");
						var oMatrixRow4 = new sap.ui.commons.layout.MatrixLayoutRow(
								this.createId("container_row4"));
						// oMatrixRow4.addStyleClass("container_row4");
						var oMatrixRow5 = new sap.ui.commons.layout.MatrixLayoutRow(
								this.createId("container_row5"));
						// oMatrixRow5.addStyleClass("container_row5");
						var oMatrixRow6 = new sap.ui.commons.layout.MatrixLayoutRow(
								this.createId("container_row6"));

						oMatrixContainer.addRow(oMatrixRow1);
						oMatrixContainer.addRow(oMatrixRow2);
						oMatrixContainer.addRow(oMatrixRow3);
						oMatrixContainer.addRow(oMatrixRow4);
						oMatrixContainer.addRow(oMatrixRow5);
						oMatrixContainer.addRow(oMatrixRow6);

						// Only One Cell in Row 1
						var oMatrixCell11 = new sap.ui.commons.layout.MatrixLayoutCell();
						oMatrixCell11.setColSpan(4);
						// oMatrixCell11.addStyleClass("row1");
						oMatrixRow1.addCell(oMatrixCell11);

						// Only Two Cells in Row 2
						var oMatrixCell21 = new sap.ui.commons.layout.MatrixLayoutCell(
								this.createId('container_row2_col1'));
						 oMatrixCell21.setColSpan(4);
						oMatrixRow2.addCell(oMatrixCell21);
						/*
						 * var oMatrixCell22= new
						 * sap.ui.commons.layout.MatrixLayoutCell();
						 * oMatrixCell22.setColSpan(2)
						 * 
						 * oMatrixRow2.addCell(oMatrixCell22);
						 */
						// Only one cells in Row 3
						var oMatrixCell31 = new sap.ui.commons.layout.MatrixLayoutCell();
						oMatrixCell31.setColSpan(4);
						oMatrixRow3.addCell(oMatrixCell31);

						// Only one cells in Row 4
						var oMatrixCell41 = new sap.ui.commons.layout.MatrixLayoutCell();
						oMatrixCell41.setColSpan(4);
						oMatrixRow4.addCell(oMatrixCell41);

						// Only one cell in Row 5
						var oMatrixCell51 = new sap.ui.commons.layout.MatrixLayoutCell(
								{
									colSpan : 4
								});
						oMatrixRow5.addCell(oMatrixCell51);

						// Only one cell in Row 6
						var oMatrixCell61 = new sap.ui.commons.layout.MatrixLayoutCell(
								this.createId('container_row6_col1'), {
									colSpan : 3
								});
						oMatrixRow6.addCell(oMatrixCell61);
						var oMatrixCell62 = new sap.ui.commons.layout.MatrixLayoutCell(
								this.createId('container_row6_col2'), {
									colSpan : 1
								});
						oMatrixRow6.addCell(oMatrixCell62);

						/*
						 * Content Adding Started
						 * 
						 * 
						 */

						/* Adding content in cells of Row1 */
						this.addRow1Content(oMatrixCell11, oController);
						/* Adding content in Row2 */
						this.addRow2Content(oMatrixCell21, oController);
						/* Adding content in Row 3 */
						this.addRow3Content1(oMatrixCell31, oController);
						/* Adding content in Row 4 */
						this.addRow4Content(oMatrixCell41, oController);
						/* Adding content in Row 5 */
						this.addRow5Content(oMatrixCell51);
						/* Adding content in Row 6 */
						this.addRow6Content(oMatrixCell61, oController);
						return oMatrixContainer;

					},
					
					 

				addRow1Content :function (oCell, oController){
					
 
					var oTt =   new sap.ui.commons.Callout({
//						id : "id", // sap.ui.core.ID
//						text :'VX' , // '{topmenumodel>label}', 
						openDuration : 200, // int
						closeDuration : 200, // int
						myPosition : "begin top", // sap.ui.core.Dock
						atPosition : "begin bottom", // sap.ui.core.Dock
						offset : "10 4", // string
						collision : "flip", // sap.ui.core.Collision
						openDelay : 300, // int
						closeDelay : 100, // int
						tooltip : undefined, // sap.ui.core.TooltipBase
						customData : [ new sap.ui.core.CustomData({
//							id : "id1", // sap.ui.core.ID
							key : undefined, // string
							value : undefined, // any
							writeToDom : false, // boolean, since 1.9.0
							tooltip : undefined, // sap.ui.core.TooltipBase
							customData : []
						// sap.ui.core.CustomData
						}) ], // sap.ui.core.CustomData
						content : [new sap.ui.commons.Label({text :'{topmenumodel>label}'})], // sap.ui.core.Control
						open : [ function(oEvent) {
							var control = oEvent.getSource();
						}, this ],
						close : [ function(oEvent) {
							var control = oEvent.getSource();
						}, this ],
						beforeOpen : [ function(oEvent) {
							var control = oEvent.getSource();
						}, this ],
						opened : [ function(oEvent) {
							var control = oEvent.getSource();
						}, this ], // since 1.11.0
						closed : [ function(oEvent) {
							var control = oEvent.getSource();
						}, this ]
					// since 1.11.0
					});
					
					
					var oBtn =  new sap.ui.commons.Button({
//						id : "id", // sap.ui.core.ID
					 	text : '{topmenumodel>label}', // string
						enabled : true, // boolean
						visible : true, // boolean
						width : undefined, // sap.ui.core.CSSSize
						helpId : '', // string
						icon :  '{topmenumodel>icon}',// sap.ui.core.URI
						iconHovered : '', // sap.ui.core.URI
						iconSelected : '', // sap.ui.core.URI
						iconFirst : true, // boolean
						height : undefined, // sap.ui.core.CSSSize
//						styled : true, // boolean
						lite : false, // boolean
						style : sap.ui.commons.ButtonStyle.Default, // sap.ui.commons.ButtonStyle
						tooltip : oTt, // sap.ui.core.TooltipBase
						customData : [ new sap.ui.core.CustomData({
//							id : "id1", // sap.ui.core.ID
							key : 'key', // string
							value : '{topmenumodel>key}', // any
							writeToDom : false, // boolean, since 1.9.0
							tooltip : undefined, // sap.ui.core.TooltipBase
							customData : []
						// sap.ui.core.CustomData
						}) ], // sap.ui.core.CustomData
						ariaDescribedBy : [], // sap.ui.core.Control
						ariaLabelledBy : [], // sap.ui.core.Control
						press : oController.topmenuPressHandler
//						
					});
					
					var oLayout = new sap.ui.commons.layout.HorizontalLayout({content : {path : "topmenumodel>/Items/", template : oBtn}});
					var oSegmentedButton = new sap.ui.commons.SegmentedButton({
//						id : "id", // sap.ui.core.ID
						enabled : true, // boolean
						visible : true, // boolean
						tooltip : undefined, // sap.ui.core.TooltipBase
						lite :false,
						customData : [ new sap.ui.core.CustomData({
//							id : "id1", // sap.ui.core.ID
							key : undefined, // string
							value : undefined, // any
							writeToDom : false, // boolean, since 1.9.0
							tooltip : undefined, // sap.ui.core.TooltipBase
							customData : []
						// sap.ui.core.CustomData
						}) ], // sap.ui.core.CustomData
						buttons : {path : "topmenumodel>/Items/", template : oBtn},
						selectedButton : undefined, // sap.ui.commons.Button
						select : [ function(oEvent) {
							var control = oEvent.getSource();
						}, this ]
					})
					
					oCell.addContent(oSegmentedButton);
					
				},
					addRow2Content : function(oCell1) {
 						oCell1.addContent();
					 
					},
					
 
					
					
					
					addRow3Content1 : function (oCell1, oController){
						
				var oSubMenuBarItemTemplate =		new sap.ui.commons.MenuItem({
							id : "id", // sap.ui.core.ID
							enabled : true, // boolean
							visible : true, // boolean
							startsSection : false, // boolean
							text:"{mainmenumodel>label}",
							icon : '', // sap.ui.core.URI
							tooltip : undefined, // sap.ui.core.TooltipBase
							customData : [ new sap.ui.core.CustomData({
//								id : "id1", // sap.ui.core.ID
								key : 'key', // string
								value : "{mainmenumodel>key}", // any
								writeToDom : false, // boolean, since 1.9.0
								tooltip : undefined, // sap.ui.core.TooltipBase
								customData : []
							// sap.ui.core.CustomData
							}) ], // sap.ui.core.CustomData
							select : oController.mainmenuSelectHandler
 							 
						});
 
						
					//	var oSubMenuBarItemTemplate =new sap.ui.commons.MenuItem ({text:"{mainmenumodel>label}"});
						var oSubMenu = new sap.ui.commons.Menu({items : {path : "mainmenumodel>submenu", template : oSubMenuBarItemTemplate}});
						var oMenuBarItemtemplate = new sap.ui.commons.MenuItem ({text:"{mainmenumodel>label}"});
						oMenuBarItemtemplate.setSubmenu(oSubMenu);
						//oMenuBarItemtemplate.attachBrowserEvent("mouseover", function (evt){alert ( "abc");}, this);
						
						
 					 	var oMenuBar = new sap.ui.commons.MenuBar({items : {path : "mainmenumodel>/MenuItems", template : oMenuBarItemtemplate}});
 					   	
 					 	oCell1.addContent(oMenuBar);


					},
					
					
					
////////////////
					addRow3Content : function(oCell1, oController) {
						var oTemplate = new sap.ui.commons.MenuItem({
							text : "{mainmenumodel>label}"
						});

						var oTopMenuBar = new sap.ui.commons.MenuBar({
							items : {
								path : "mainmenumodel>submenu",
								template : oTemplate
							}
						});
						var oNavBarItemTemplate = new sap.suite.ui.commons.CountingNavigationItem(
								{
									 key : "{mainmenumodel>key}",
									text : "{mainmenumodel>label}"
									
							
								});
						
						
						
						
						
						

						// Create a VerticalNavigationBar instance
						var oNavBar = new sap.suite.ui.commons.VerticalNavigationBar(
								{
									// id: "navBar",
									select : oController.mainmenuSelectHandler,
									items : {
										path : "mainmenumodel>submenu",
										template : oNavBarItemTemplate
									}
								});

						var oQuickViewTemplate = new sap.ui.ux3.QuickView({
													content : oNavBar,
						
						});

						oQuickViewTemplate.setFavoriteActionEnabled(false);
						oQuickViewTemplate.setFlagActionEnabled(false);
						oQuickViewTemplate.setFollowActionEnabled(false);
						oQuickViewTemplate.setUpdateActionEnabled(false);
						oQuickViewTemplate.setOpenActionEnabled(false);
						
					

						var oImg = new sap.ui.commons.Image({

							src : '{mainmenumodel>icon}', // sap.ui.core.URI
							visible : true, // boolean
							width : undefined, // sap.ui.core.CSSSize
							height : undefined, // sap.ui.core.CSSSize
							decorative : true, // boolean
							alt : undefined, // string
							useMap : undefined, // string
							tooltip : oQuickViewTemplate, // sap.ui.core.TooltipBase
							customData : [ new sap.ui.core.CustomData({

								key : undefined, // string
								value : undefined, // any
								writeToDom : false, // boolean, since 1.9.0
								tooltip : undefined, // sap.ui.core.TooltipBase
								customData : []
							// sap.ui.core.CustomData
							}) ], // sap.ui.core.CustomData
							press : [ function(oEvent) {
								var control = oEvent.getSource();
							}, this ]
						})

						var oMCell = new sap.ui.commons.layout.MatrixLayoutCell(
								{

									backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent, // sap.ui.commons.layout.BackgroundDesign
									colSpan : 1, // int
									hAlign : sap.ui.commons.layout.HAlign.Begin, // sap.ui.commons.layout.HAlign
									padding : sap.ui.commons.layout.Padding.End, // sap.ui.commons.layout.Padding
									rowSpan : 1, // int
									separation : sap.ui.commons.layout.Separation.None, // sap.ui.commons.layout.Separation
									vAlign : sap.ui.commons.layout.VAlign.Middle, // sap.ui.commons.layout.VAlign
									tooltip : undefined, // sap.ui.core.TooltipBase
									style : "mainmenucell",
									customData : [ new sap.ui.core.CustomData({

										key : undefined, // string
										value : undefined, // any
										writeToDom : false, // boolean, since
															// 1.9.0
										tooltip : undefined, // sap.ui.core.TooltipBase
										customData : []
									// sap.ui.core.CustomData
									}) ], // sap.ui.core.CustomData
									content : [ oImg ]
								// sap.ui.core.Control
								});
						
			 

						var oMRow = new sap.ui.commons.layout.MatrixLayoutRow({

							height : undefined, // sap.ui.core.CSSSize
							tooltip : undefined, // sap.ui.core.TooltipBase
							customData : [ new sap.ui.core.CustomData({

								key : undefined, // string
								value : undefined, // any
								writeToDom : false, // boolean, since 1.9.0
								tooltip : undefined, // sap.ui.core.TooltipBase
								customData : []
							// sap.ui.core.CustomData
							}) ], // sap.ui.core.CustomData
							cells : {
								path : "mainmenumodel>/MenuItems",
								template : oMCell
							}
						// cells : oMCell
						// sap.ui.commons.layout.MatrixLayoutCell
						});

						var oMlay = new sap.ui.commons.layout.MatrixLayout();
						oMlay.addRow(oMRow);

						oCell1.addContent(oMlay);

					},
					
					addRow4Content : function(oCell, oController) {
						var oBtn =  new sap.ui.commons.Button({
//							id : "id", // sap.ui.core.ID
							text : '{breadcummodel>label}', // string
							enabled : '{breadcummodel>enabled}', // boolean
							visible : true, // boolean
							width : undefined, // sap.ui.core.CSSSize
							helpId : '', // string
							icon : '', // sap.ui.core.URI
							iconHovered : '', // sap.ui.core.URI
							iconSelected : '', // sap.ui.core.URI
							iconFirst : true, // boolean
							height : undefined, // sap.ui.core.CSSSize
							styled : true, // boolean
							lite : true, // boolean
							style : sap.ui.commons.ButtonStyle.Default, // sap.ui.commons.ButtonStyle
							tooltip : undefined, // sap.ui.core.TooltipBase
							customData : [ new sap.ui.core.CustomData({
//								id : "id1", // sap.ui.core.ID
								key : 'key', // string
								value : '{breadcummodel>key}', // any
								writeToDom : false, // boolean, since 1.9.0
								tooltip : undefined, // sap.ui.core.TooltipBase
								customData : []
							// sap.ui.core.CustomData
							}) ], // sap.ui.core.CustomData
							ariaDescribedBy : [], // sap.ui.core.Control
							ariaLabelledBy : [], // sap.ui.core.Control
							press : oController.topmenuPressHandler
//							press : [ function(oEvent) {
//								var control = oEvent.getSource();
//							}, this ]
						});
						
						var oLayout = new sap.ui.commons.layout.HorizontalLayout({content : {path : "breadcummodel>/Items/", template : oBtn}});

						oCell.addContent(oLayout);
						
					} ,

//		to be deleted			addRow4Content : function(ocell, oController) {
//
//						var oTemplate = new sap.ui.ux3.NavigationItem({
//							key : "{breadcummodel>key}",
//							text : "{breadcummodel>label}"
//						});
//
//						var oNavigationBar1 = new sap.ui.ux3.NavigationBar({
//							select : oController.breadcumSelectHandler,
////							select : function(oEvent) {
////								// var name =
////								// oEvent.getParameter("item").getKey();
////								// oEvent.getSource().rerender();
////								//			 
////
////							},
//							items : {
//								path : "breadcummodel>/Items/",
//								template : oTemplate
//							}
//						});
//
//						ocell.addContent(oNavigationBar1);
//					},

					addRow5Content : function(oCell) {
						var label = new sap.ui.commons.Label({
							text : "Content"
						});
						
						this.app = new sap.m.App();
					
						oCell.addContent(this.app);
			
					},

					addRow5Content1 : function(oCell) {
					  var oParentPanel = new sap.ui.commons.Panel({
						id : "ParentPanel", // sap.ui.core.ID
						width : "100%", // sap.ui.core.CSSSize
						height : undefined, // sap.ui.core.CSSSize
						enabled : true, // boolean
						visible : true, // boolean
						scrollLeft : 0, // int
						scrollTop : 0, // int
						applyContentPadding : true, // boolean
						collapsed : false, // boolean
						areaDesign : sap.ui.commons.enums.AreaDesign.Fill, // sap.ui.commons.enums.AreaDesign
						borderDesign : sap.ui.commons.enums.BorderDesign.Box, // sap.ui.commons.enums.BorderDesign
						showCollapseIcon : true, // boolean
						text : undefined, // string
						tooltip : undefined, // sap.ui.core.TooltipBase
						customData : [ new sap.ui.core.CustomData({
							id : "id1", // sap.ui.core.ID
							key : undefined, // string
							value : undefined, // any
							writeToDom : false, // boolean, since 1.9.0
							tooltip : undefined, // sap.ui.core.TooltipBase
							customData : []
						// sap.ui.core.CustomData
						}) ], // sap.ui.core.CustomData
						content : [], // sap.ui.core.Control
						title : new sap.ui.core.Title({
							id : "id2", // sap.ui.core.ID
							text : undefined, // string
							icon : undefined, // sap.ui.core.URI
							level : sap.ui.core.TitleLevel.Auto, // sap.ui.core.TitleLevel
							emphasized : false, // boolean
							tooltip : undefined, // sap.ui.core.TooltipBase
							customData : []
						// sap.ui.core.CustomData
						}), // sap.ui.core.Title
						buttons : [ new sap.ui.commons.Button({
							id : "id3", // sap.ui.core.ID
							text : '', // string
							enabled : true, // boolean
							visible : true, // boolean
							width : undefined, // sap.ui.core.CSSSize
							helpId : '', // string
							icon : '', // sap.ui.core.URI
							iconHovered : '', // sap.ui.core.URI
							iconSelected : '', // sap.ui.core.URI
							iconFirst : true, // boolean
							height : undefined, // sap.ui.core.CSSSize
							styled : true, // boolean
							lite : false, // boolean
							style : sap.ui.commons.ButtonStyle.Default, // sap.ui.commons.ButtonStyle
							tooltip : undefined, // sap.ui.core.TooltipBase
							customData : [], // sap.ui.core.CustomData
							ariaDescribedBy : [], // sap.ui.core.Control
							ariaLabelledBy : [], // sap.ui.core.Control
							press : [ function(oEvent) {
								var control = oEvent.getSource();
							}, this ]
						}) ]
					// sap.ui.commons.Button
					});
//					  this.parentPanel = oParentpanel;
						oCell.addContent(oParentPanel);
			
					},

					addRow6Content : function(oCell, oController) {
						var oBtn =  new sap.ui.commons.Button({
//							id : "id", // sap.ui.core.ID
							text : '{footermodel>label}', // string
							enabled : true, // boolean
							visible : true, // boolean
							width : undefined, // sap.ui.core.CSSSize
							helpId : '', // string
							icon : '', // sap.ui.core.URI
							iconHovered : '', // sap.ui.core.URI
							iconSelected : '', // sap.ui.core.URI
							iconFirst : true, // boolean
							height : undefined, // sap.ui.core.CSSSize
							styled : true, // boolean
							lite : true, // boolean
							style : sap.ui.commons.ButtonStyle.Default, // sap.ui.commons.ButtonStyle
							tooltip : undefined, // sap.ui.core.TooltipBase
							customData : [ new sap.ui.core.CustomData({
//								id : "id1", // sap.ui.core.ID
								key : 'key', // string
								value : '{footermodel>key}', // any
								writeToDom : false, // boolean, since 1.9.0
								tooltip : undefined, // sap.ui.core.TooltipBase
								customData : []
							// sap.ui.core.CustomData
							}) ], // sap.ui.core.CustomData
							ariaDescribedBy : [], // sap.ui.core.Control
							ariaLabelledBy : [], // sap.ui.core.Control
							press : oController.topmenuPressHandler
//							press : [ function(oEvent) {
//								var control = oEvent.getSource();
//							}, this ]
						});
						
						var oLayout = new sap.ui.commons.layout.HorizontalLayout({content : {path : "footermodel>/Items/", template : oBtn}});

						oCell.addContent(oLayout);
						
					}   
					
					
					
					
				});
