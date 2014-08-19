sap.ui.jsview("survey-template.UserProfile", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.UserProfile
	*/ 
	getControllerName : function() {
		return "survey-template.UserProfile";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.UserProfile
	*/ 
	createContent : function(oController) {
		var uType = new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
			editable:true,
			layoutData: new sap.ui.core.VariantLayoutData({
				multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
				                  	     new sap.ui.layout.form.GridElementData({hCells: "2"}),
				                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
          }),
          change:function(evt){
				var oButton = config.getObjectById(templateHandler.getProfileTemplateExitButtonId());
				if(!config.profieInitial)
   			oButton.setVisible(config.profileStatus());
				//alert('hi');title
			},
		selectedKey:"{userProfile>/userType/userId}"}).bindAggregation("items", "userProfile>/userTypes", new sap.ui.core.ListItem({
	          text: "{userProfile>userTypeName}",
	          key: "{userProfile>userId}",
	         
	          selectedItemId :"{userProfile>/userType/userId}"
	          
	        })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("userProfile")));
		
		var uGender = new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
			layoutData: new sap.ui.core.VariantLayoutData({
				multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
				                  	     new sap.ui.layout.form.GridElementData({hCells: "2"}),
				                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
          }),
          change:function(evt){
				var oButton = config.getObjectById(templateHandler.getProfileTemplateExitButtonId());
				if(!config.profieInitial)
   			oButton.setVisible(config.profileStatus());
				//alert('hi');title
			},
			selectedKey:"{userProfile>/gender/genderId}"}).bindAggregation("items", "userProfile>/genders", new sap.ui.core.ListItem({
	          text: "{userProfile>genderName}",
	          key: "{userProfile>genderId}",
	          selectedItemId :"{userProfile>/gender/genderId}"
	          
	        })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("userProfile")));
		var uLocation = new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
			layoutData: new sap.ui.core.VariantLayoutData({
				multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
				                  	     new sap.ui.layout.form.GridElementData({hCells: "2"}),
				                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
          }),
          change:function(evt){
				var oButton = config.getObjectById(templateHandler.getProfileTemplateExitButtonId());
				if(!config.profieInitial)
   			oButton.setVisible(config.profileStatus());
				//alert('hi');title
			},
			selectedKey:"{userProfile>/location/locationId}"}).bindAggregation("items", "userProfile>/locations", new sap.ui.core.ListItem({
	          text: "{userProfile>locationName}",
	          key: "{userProfile>locationId}",
	          selectedItemId :"{userProfile>/location/locationId}"
	          
	        })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("userProfile")));
		
		var uFunction =new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
			layoutData: new sap.ui.core.VariantLayoutData({
				multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
				                  	     new sap.ui.layout.form.GridElementData({hCells: "3"}),
				                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
          }),
			change:function(evt){
				//toDropDownService
				debugger;
				var _id = evt.getSource().mBindingInfos.selectedKey.binding.oValue;
				 var bus = sap.ui.getCore().getEventBus();
     			bus.publish("nav", "toDropDownService", {
     				id : "jobtitles",
     				context:{id:_id,target:"profile-jobtitles-dropdown"}

     			});
     			var oButton = config.getObjectById(templateHandler.getProfileTemplateExitButtonId());
     			if(!config.profieInitial)
     			oButton.setVisible(config.profileStatus());
				//alert('hi');title
			},
			selectedKey:"{userProfile>/function/id}"}).bindAggregation("items", "userProfile>/functions", new sap.ui.core.ListItem({
	          text: "{userProfile>description}",
	          key: "{userProfile>id}",
	          selectedItemId :"{userProfile>/function/id}"
	          
	        })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("userProfile")));
		
		var uAPSLevel =new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
			id:"profile-levels-dropdown",
			layoutData: new sap.ui.core.VariantLayoutData({
				multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
				                  	     new sap.ui.layout.form.GridElementData({hCells: "2"}),
				                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
          }),
			change:function(evt){
				debugger;
			
				var oButton = config.getObjectById(templateHandler.getProfileTemplateExitButtonId());
				if(!config.profieInitial)
				oButton.setVisible(config.profileStatus());
				//alert('hi');title
			},
			selectedKey:"{userProfile>/level/id}"}).bindAggregation("items", "levels>/", new sap.ui.core.ListItem({
	          text: "{levels>description}",
	          key: "{levels>id}",
	          selectedItemId :"{userProfile>/level/id}"
	          
	        })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("levels")));
		
		
		
		var uPathway =new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
			layoutData: new sap.ui.core.VariantLayoutData({
				multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
				                  	     new sap.ui.layout.form.GridElementData({hCells: "2"}),
				                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
          }),
			change:function(evt){
				
				var oButton = config.getObjectById(templateHandler.getProfileTemplateExitButtonId());
				if(!config.profieInitial)
				oButton.setVisible(config.profileStatus());
				//alert('hi');title
			},
			selectedKey:"{userProfile>/learningPathway/id}"}).bindAggregation("items", "pathway>/", new sap.ui.core.ListItem({
	          text: "{pathway>name}",
	          key: "{pathway>id}",
	          selectedItemId :"{userProfile>/learningPathway/id}"
	          
	        })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("pathway")))	;
		
		
	var uJobTitle =new sap.ui.commons.DropdownBox({
		id:"profile-jobtitles-dropdown",
		width:"200px",height:"30px" ,
		//editable:false,
		layoutData: new sap.ui.core.VariantLayoutData({
			multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
			                  	     new sap.ui.layout.form.GridElementData({hCells: "4"}),
			                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
      }),
      change:function(evt){
    	  debugger;
    	  var oModel =  sap.ui.getCore().getModel("userProfile");
    	   var data = oModel.oData;
    	   data.level.id=-1;
    	   data.level.code=-1;
    	   data.level.description="Please Select";
    	   oModel.setData(data,false);
    	   sap.ui.getCore().setModel(oModel,"userProfile");
    		var _id = evt.getSource().mBindingInfos.selectedKey.binding.oValue;
			 var bus = sap.ui.getCore().getEventBus();
			bus.publish("nav", "toDropDownService", {
				id : "levels",
				context:{id:_id,target:"profile-levels-dropdown"}

			});
			var oButton = config.getObjectById(templateHandler.getProfileTemplateExitButtonId());
			if(!config.profieInitial)
			oButton.setVisible(config.profileStatus());
			//alert('hi');title
		},
		selectedKey:"{userProfile>/jobTitle/id}"}).bindAggregation("items", "jobtitles>/", new sap.ui.core.ListItem({
          text: "{jobtitles>description}",
          key: "{jobtitles>id}",
          selectedItemId :"{userProfile>/jobTitile/id}"
          
        })).setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("jobtitles")));;
	

	var uQuestion1 =new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
		layoutData: new sap.ui.core.VariantLayoutData({
			multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
			                  	     new sap.ui.layout.form.GridElementData({hCells: "1"}),
			                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
      }),
		
		selectedKey:"{userProfile>/answerQuestion1/id}"}).bindAggregation("items", "responseTypes>/", new sap.ui.core.ListItem({
          text: "{responseTypes>name}",
          key: "{responseTypes>id}",
          selectedItemId :"{userProfile>/answerQuestion1/id}"
          
        })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("responseTypes")));
	var uQuestion2 =new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
		layoutData: new sap.ui.core.VariantLayoutData({
			multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
			                  	     new sap.ui.layout.form.GridElementData({hCells: "1"}),
			                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
      }),
		
		selectedKey:"{userProfile>/answerQuestion2/id}"}).bindAggregation("items", "responseTypes>/", new sap.ui.core.ListItem({
          text: "{responseTypes>name}",
          key: "{responseTypes>id}",
          selectedItemId :"{userProfile>/answerQuestion2/id}"
          
        })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("responseTypes")));
		// form layout
	var oMatrix = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : false,
		width:'98%',
		height:'100%'
		
	}).addStyleClass("userProfileMatrix");
	/////////////////////////////// >>///////////////////////////////////////////
	
		var oLayout1 = new sap.ui.layout.form.GridLayout();
		
		var oForm1 = new sap.ui.layout.form.Form({
			//title: new sap.ui.core.Title({text: "User Detail Profile", tooltip: "User Detail Profile"}),
			layout: oLayout1,
			formContainers: [
				new sap.ui.layout.form.FormContainer({
					title: "Basic Information",
					formElements: [
					               new sap.ui.layout.form.FormElement({
					            	   label: new sap.ui.commons.Label({text:"User Id :",
					            		   enabled:false,
					            		   layoutData: new sap.ui.core.VariantLayoutData({
					            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
					            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
					            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
					            		   			})
					            	   }),
					            	   	fields: [ new sap.ui.commons.TextField({value: "{userProfile>/loginId}",
					            	   		       editable:false,
					            	   				layoutData: new sap.ui.core.VariantLayoutData({
					            	   					multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 4}),
					            	   					                     new sap.ui.layout.form.GridElementData({hCells: "3"})]
					            	   				})
					            	   	})
					            	],
					            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
		                        }),
//		                        new sap.ui.layout.form.FormElement({
//					            	   label: new sap.ui.commons.Label({text:"User name :",
//					            		   layoutData: new sap.ui.core.VariantLayoutData({
//					            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
//					            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
//					            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
//					            		   			})
//					            	   }),
//					            	   	fields: [ new sap.ui.commons.TextField({value: "{userProfile>/name}",
//					            	   		      
//					            	   				layoutData: new sap.ui.core.VariantLayoutData({
//					            	   					multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 4}),
//					            	   					                     new sap.ui.layout.form.GridElementData({hCells: "3"})]
//					            	   				})
//					            	   	})
//					            	],
//					            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
//		                        }),
		                        new sap.ui.layout.form.FormElement({
					            	   label: new sap.ui.commons.Label({text:"User Type :",
					            		   layoutData: new sap.ui.core.VariantLayoutData({
					            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
					            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
					            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
					            		   			})
					            	   }),
					            	   	fields: [ uType],
					            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
		                        }),
		                        new sap.ui.layout.form.FormElement({
					            	   label: new sap.ui.commons.Label({text:"Gender :",
					            		   layoutData: new sap.ui.core.VariantLayoutData({
					            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
					            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
					            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
					            		   			})
					            	   }),
					            	   	fields: [ uGender],
					            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
		                        }),
		                        new sap.ui.layout.form.FormElement({
					            	   label: new sap.ui.commons.Label({text:"Location :",
					            		   layoutData: new sap.ui.core.VariantLayoutData({
					            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
					            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
					            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
					            		   			})
					            	   }),
					            	   	fields: [ uLocation	],
					            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
		                        }),
		                        new sap.ui.layout.form.FormElement({
					            	   label: new sap.ui.commons.Label({text:"Function :",
					            		   layoutData: new sap.ui.core.VariantLayoutData({
					            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
					            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
					            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
					            		   			})
					            	   }),
					            	   	fields: [ uFunction	],
					            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
		                        }),
//		                      
		                        new sap.ui.layout.form.FormElement({
					            	   label: new sap.ui.commons.Label({text:"Job Title :",
					            		   layoutData: new sap.ui.core.VariantLayoutData({
					            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
					            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
					            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
					            		   			})
					            	   }),
					            	   	fields: [ uJobTitle],
					            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
		                        }),
		                        
		                        new sap.ui.layout.form.FormElement({
					            	   label: new sap.ui.commons.Label({text:"APS Level :",
					            		   layoutData: new sap.ui.core.VariantLayoutData({
					            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
					            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
					            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
					            		   			})
					            	   }),
					            	   	fields: [ uAPSLevel],
					            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
		                        }),
		                        new sap.ui.layout.form.FormElement({
					            	   label: new sap.ui.commons.Label({text:"Learning Pathway :",
					            		   layoutData: new sap.ui.core.VariantLayoutData({
					            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
					            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
					            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
					            		   			})
					            	   }),
					            	   	fields: [ uPathway],
					            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
		                        }),

		                        
		                ]

		}),
		new sap.ui.layout.form.FormContainer("F1C2",{
			title: "Other Information",
			formElements: [
			               new sap.ui.layout.form.FormElement({
			            	   label: new sap.ui.commons.Label({text:"{userProfile>/question1}",
			            		   layoutData: new sap.ui.core.VariantLayoutData({
			            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
			            			                        new sap.ui.layout.form.GridElementData({hCells: "8"}),
			            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
			            		   			})
			            	   }),
			            	   	fields: [ uQuestion1],
			            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
                        }),
                        new sap.ui.layout.form.FormElement({
			            	   label: new sap.ui.commons.Label({text:"{userProfile>/question2}",
			            		   layoutData: new sap.ui.core.VariantLayoutData({
			            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
			            			                        new sap.ui.layout.form.GridElementData({hCells: "8"}),
			            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
			            		   			})
			            	   }),
			            	   	fields: [ uQuestion2],
			            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
                        })


                        
                ]

})
					               
 ]		
				
		}).addStyleClass("userProfileForm");
	
		
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:'65%'});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:"Middle",content:[oForm1]}).addStyleClass("userFormCell");
		oRow.addCell(oCell);
		oMatrix.addRow(oRow);
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({height:'30%'});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			content:[
			       
			         new sap.ui.commons.Button({
			        	 text:"Save & Continue",
			        	 press:function(evt){
			        		 debugger;
			        		 if(!config.profileStatus()){
			        			 sap.ui.commons.MessageBox.alert("One or more field not selected!");
			        			// config.displayNotificationBar("One or more field not selected", "Error!");
			        			 return;
			        			 }
			        		 
			        		 function fnCallBackConfirm(bResult){
									if(bResult){
										 oOverlayContainer=config.getObjectById("userProfileOverlay");
										 oOverlayContainer.close();
						        		 var bus = sap.ui.getCore().getEventBus();
						        			bus.publish("nav", "toProfile", {
						        				id : "Master",
						        				data:{action:"update"}

						        			});
									}
									
								}
								sap.ui.commons.MessageBox.confirm("Do you want to save data!",fnCallBackConfirm,"Professional Workforce - Quality Service");
									
					
			        		
			
			        	 }
			        		 
			         }).addStyleClass("save-continue-btn"),
			         new sap.ui.commons.Button({
					    id:templateHandler.getProfileTemplateExitButtonId(),
						text:"Exit",
						visible:config.profileStatus(),
						press:function(evt){
							
							 function fnCallBackConfirm(bResult){
									if(bResult){
										 oOverlayContainer=config.getObjectById("userProfileOverlay");
										 oOverlayContainer.close();
									}
									
								}
								sap.ui.commons.MessageBox.confirm("Do you want to exit!",fnCallBackConfirm,"Professional Workforce - Quality Service");
									
					
						}

							
					}).addStyleClass("exit-continue-btn"),
			         
			         ]
		}).addStyleClass("userFormCellForAction");
		oRow.addCell(oCell);
		oMatrix.addRow(oRow);
								//end of form layout
		return oMatrix;
	}

});
