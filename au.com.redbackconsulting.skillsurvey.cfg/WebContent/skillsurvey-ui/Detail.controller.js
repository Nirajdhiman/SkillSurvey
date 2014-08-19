jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("skillsurvey-ui.Detail",{

					/**
					 * Called when a controller is instantiated and its View
					 * controls (if available) are already created. Can be used
					 * to modify the View before it is displayed, to bind event
					 * handlers and do other one-time initialization.
					 * 
					 * @memberOf skillsurvey-ui.Detail
					 */
					// onInit: function() {
					//
					// },
					/**
					 * Similar to onAfterRendering, but this hook is invoked
					 * before the controller's View is re-rendered (NOT before
					 * the first rendering! onInit() is used for that one!).
					 * 
					 * @memberOf skillsurvey-ui.Detail
					 */
					// onBeforeRendering: function() {
					//
					// },
					/**
					 * Called when the View has been rendered (so its HTML is
					 * part of the document). Post-rendering manipulations of
					 * the HTML could be done here. This hook is the same one
					 * that SAPUI5 controls get after being rendered.
					 * 
					 * @memberOf skillsurvey-ui.Detail
					 */
					// onAfterRendering: function() {
					//
					// },
					/**
					 * Called when the Controller is destroyed. Use this one to
					 * free resources and finalize activities.
					 * 
					 * @memberOf skillsurvey-ui.Detail
					 */
					// onExit: function() {
					//
					// }
					// Navigation back.
					handleNavButtonPress : function(evt) {this.nav.back("Master");
					},

					// Approve Handler
					handleApprove : function(evt) {
						// show confirmation dialog
						var bundle = sap.ui.getCore().getModel("i18n").getResourceBundle();
						sap.m.MessageBox.confirm(bundle.getText("ApproveDialogMsg"),
										function(oAction) {
											if (sap.m.MessageBox.Action.OK === oAction) {
												// notify user
												var successMsg = bundle.getText("ApproveDialogSuccessMsg");
												sap.m.MessageToast.show(successMsg);
												// TODO call proper service
												// method and update model (not
												// part of this session)
											}
										}, bundle.getText("ApproveDialogTitle"));
					},

					handleDelete : function(evt) {
						var bundle = sap.ui.getCore().getModel("i18n").getResourceBundle();
						// alert("Deleting record");
						sap.m.MessageBox.confirm(bundle.getText("DeleteDialogMsg"),
										function(oAction) {
											if (sap.m.MessageBox.Action.OK === oAction) {
												var successMsg = bundle.getText("DeleteDialogSuccessMsg");
												sap.m.MessageToast.show(successMsg);
												var oModel = sap.ui.getCore().getModel("myModel");
												//alert("Model" + oModel);
												var data = oModel.getProperty("/userId");
												//alert("Data" + data);
												var URL = window.location.protocol+ "//"+ window.location.host+ "/au.com.redbackconsulting.scheduler.api/api/user/"+ data;
												alert(URL);
												// TODO call proper service
												// method and update model (not
												// part of this session)
												$.ajax({
															type : 'DELETE',
															url : URL,
															crossDomain : false,
															cache : false,
															contentType : "application/json; charset=utf-8",
															success : function(data) {
																alert("Delete Successfully"+ data);

															},
															error : function(e,textStatus,errorThrown) {
																alert("error in ajax call"+ "="+ e.message+ "="+ errorThrown+ "="+ textStatus);
															}
														});

											}
										}, bundle.getText("DeleteDialogTitle"));

					},
					handleEdit : function(evt) {
						var bundle = sap.ui.getCore().getModel("i18n").getResourceBundle();
						sap.m.MessageBox.confirm(bundle.getText("SaveDialogMsg"),
								function(oAction) {
									if (sap.m.MessageBox.Action.OK === oAction) {
										var successMsg = bundle.getText("SaveDialogSuccesMsg");
										sap.m.MessageToast.show(successMsg);
										var oModel = sap.ui.getCore().getModel("myModel");
										alert("Model" + oModel);
										var userId = oModel.getProperty("/userId");
												var URL = window.location.protocol+ "//"+ window.location.host+ "/au.com.redbackconsulting.scheduler.api/api/user/edit/"+ userId;
												alert(jsonData = oModel.getJSON());
												$.ajax({
															type : 'POST',
															url : URL,
															contentType :  "application/x-www-form-urlencoded",
															data : oModel.getJSON(),
															datatype : 'json',
															crossDomain : false,
															cache : false,
															success : function(data) {
																alert(" Successfully"+ data);
																sap.m.MessageToast.show(successMsg);
															},
															error : function(e,textStatus,errorThrown) {
																alert("error in ajax call"+ "="+ e.message+ "="+ errorThrown+ "="+ textStatus);
															}
														});

											}
										}, bundle.getText("SaveDialogTitle"));
					},
					
					handleNew:function(evt){
						
						var oDialog1 = new sap.ui.commons.Dialog();
						oDialog1.setTitle("Create New User");
						//var oText = new sap.ui.commons.TextView({text: "Hello World!"});
						//oDialog1.addContent(oText);
						var ML=new sap.ui.commons.layout.MatrixLayout({});
						ML.createRow(new sap.ui.commons.Label({text:"UserId"}),new sap.ui.commons.TextField({
							id:"userId"
						}));
						ML.createRow(new sap.ui.commons.Label({text:"First Name"}),new sap.ui.commons.TextField({
							id:"firstName"
						}));
						ML.createRow(new sap.ui.commons.Label({text:"Last Name"}),new sap.ui.commons.TextField({
							id:"lastName"
						}));
						ML.createRow(new sap.ui.commons.Label({text:"EmailAddress"}),new sap.ui.commons.TextField({
							id:"email"
						}));
//						ML.createRow(new sap.ui.commons.Button({text:"Save",
//							press:oController.add}));
						oDialog1.addContent(ML);
						oDialog1.addButton(new sap.ui.commons.Button({text: "OK", press:function(oEvent){
							
							alert("Go");
							
							var bundle = sap.ui.getCore().getModel("i18n").getResourceBundle();
							sap.m.MessageBox.confirm(bundle.getText("SaveDialogMsg"),
									function(oAction) {
										if (sap.m.MessageBox.Action.OK === oAction) {
											var successMsg = bundle.getText("SaveDialogSuccesMsg");
											sap.m.MessageToast.show(successMsg);
										
											var oModel  = new sap.ui.model.json.JSONModel();
											var data={
													
													userId : sap.ui.getCore().byId("userId").getValue(),
													firstName : sap.ui.getCore().byId("firstName").getValue(),
													lastName :sap.ui.getCore().byId("lastName").getValue(),
													email : sap.ui.getCore().byId("email").getValue()
													
										};
											
											oModel.setData(data);
											alert(data.firstName);
											alert(oModel.getJSON());
											
											
											
											
											
											
											
											
											

													var URL = window.location.protocol+ "//"+ window.location.host+ "/au.com.redbackconsulting.scheduler.api/api/user/newuser/";
													
													$.ajax({
																type : 'POST',
																url : URL,
																contentType :  "application/json",
																data : oModel.getJSON(),
																datatype : 'json',
																crossDomain : false,
																cache : false,
																success : function(data) {
																	alert(" Successfully"+ data);
																	sap.m.MessageToast.show(successMsg);
																},
																error : function(e,textStatus,errorThrown) {
																	alert("error in ajax call"+ "="+ e.message+ "="+ errorThrown+ "="+ textStatus);
																}
															});

												}
											}, bundle.getText("SaveDialogTitle"));
							
							oDialog1.close();
							
										
							}}));
						oDialog1.open();
						
					}

				});