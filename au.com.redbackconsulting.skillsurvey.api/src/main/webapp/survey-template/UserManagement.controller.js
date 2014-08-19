sap.ui.controller("survey-template.UserManagement", {
	
	userDataSet:{row:false,column:false},

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf survey-template.UserManagement
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf survey-template.UserManagement
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf survey-template.UserManagement
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf survey-template.UserManagement
*/
//	onExit: function() {
//
//	}
    createThingGroup:function(type){
   	var oTI = config.getObjectById(constant._USER_MANAGEMENT_THINGINSPECTOR_ID);
   	oTI.destroyFacetContent() ;
    	var editable = false;
    	var group = config.getObjectById(constant._USER_MANAGEMENT_THING_GROUP_ID);
    	if(group==null){
    		group =  new sap.ui.ux3.ThingGroup({id:constant._USER_MANAGEMENT_THING_GROUP_ID});		
    	}
    	group.destroyContent() ;
    	if(type!="overview"){
    		editable = true;
    		group.addContent(this.createOverviewContent(editable));
    	}
    	if(type=="overview"){
    		group.addContent(this.createReadOnlyForm());
    	}
   
    	
    	oTI.addFacetContent(group);
    	oTI.open();
   
    },
    createOverviewContent:function(editable){
    	var uType= config.getObjectById("profile-user-type-dropdown");
    	if(uType==null){
    		uType = new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
        		id:"profile-user-type-dropdown",
        		editable:editable,
        		layoutData: new sap.ui.core.VariantLayoutData({
        			multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
        			                  	     new sap.ui.layout.form.GridElementData({hCells: "2"}),
        			                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
        	  }),
//        	  change:function(evt){
//        			var oButton = config.getObjectById(templateHandler.getProfileTemplateExitButtonId());
//        			if(!config.profieInitial)
//        			oButton.setVisible(config.profileStatus());
//        			//alert('hi');title
//        		},
        	selectedKey:"{selectedModel>userType/userId}"}).bindAggregation("items", "userTypes>/", new sap.ui.core.ListItem({
        	      text: "{userTypes>userTypeName}",
        	      key: "{userTypes>userId}",
        	     
        	      selectedItemId :"{selectedModel>userType/userId}"
        	      
        	    })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("userTypes")));
    	}
    	
    	var uGender = config.getObjectById("profile-gender-dropdown");
    	if(uGender==null){
    		uGender = new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
        		id:"profile-gender-dropdown",
        		editable:editable,
        		layoutData: new sap.ui.core.VariantLayoutData({
        			multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
        			                  	     new sap.ui.layout.form.GridElementData({hCells: "2"}),
        			                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
        	  }),
//        	  change:function(evt){
//        			var oButton = config.getObjectById(templateHandler.getProfileTemplateExitButtonId());
//        			if(!config.profieInitial)
//        			oButton.setVisible(config.profileStatus());
//        			//alert('hi');title
//        		},
        		selectedKey:"{selectedModel>/gender/genderId}"}).bindAggregation("items", "genders>/", new sap.ui.core.ListItem({
        	      text: "{genders>genderName}",
        	      key: "{genders>genderId}",
        	      selectedItemId :"{selectedModel>/gender/genderId}"
        	      
        	    })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("genders")));
    	}
    	
    	var uLocation = config.getObjectById("profile-location-dropdown");
    	if(uLocation==null){
    		uLocation = new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
        		id:"profile-location-dropdown",
        		editable:editable,
        		layoutData: new sap.ui.core.VariantLayoutData({
        			multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
        			                  	     new sap.ui.layout.form.GridElementData({hCells: "2"}),
        			                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
        	  }),
//        	  change:function(evt){
//        			var oButton = config.getObjectById(templateHandler.getProfileTemplateExitButtonId());
//        			if(!config.profieInitial)
//        			oButton.setVisible(config.profileStatus());
//        			//alert('hi');title
//        		},
        		selectedKey:"{selectedModel>/location/locationId}"}).bindAggregation("items", "locations>/", new sap.ui.core.ListItem({
        	      text: "{locations>locationName}",
        	      key: "{locations>locationId}",
        	      selectedItemId :"{selectedModel>/location/locationId}"
        	      
        	    })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("locations")));
    	}
    	
    	var uFunction = config.getObjectById("profile-function-dropdown");
    	if(uFunction==null){
    		uFunction =new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
        		id:"profile-function-dropdown",
        		editable:editable,
        		layoutData: new sap.ui.core.VariantLayoutData({
        			multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
        			                  	     new sap.ui.layout.form.GridElementData({hCells: "3"}),
        			                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
        	  }),
//        		change:function(evt){
//        			//toDropDownService
//        			debugger;
//        			var _id = evt.getSource().mBindingInfos.selectedKey.binding.oValue;
//        			 var bus = sap.ui.getCore().getEventBus();
//        				bus.publish("nav", "toDropDownService", {
//        					id : "jobtitles",
//        					context:{id:_id}
    //
//        				});
//        				var oButton = config.getObjectById(templateHandler.getProfileTemplateExitButtonId());
//        				if(!config.profieInitial)
//        				oButton.setVisible(config.profileStatus());
//        			//alert('hi');title
//        		},
        		selectedKey:"{selectedModel>/function/id}"}).bindAggregation("items", "functions>/", new sap.ui.core.ListItem({
        	      text: "{functions>description}",
        	      key: "{functions>id}",
        	      selectedItemId :"{selectedModel>/function/id}"
        	      
        	    })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("functions")));
    	}
          var uAPSLevel = config.getObjectById("profile-aps-level-dropdown");
          if(uAPSLevel==null){
        	  uAPSLevel =new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
          		id:"profile-aps-level-dropdown",
          		editable:editable,
          		layoutData: new sap.ui.core.VariantLayoutData({
          			multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
          			                  	     new sap.ui.layout.form.GridElementData({hCells: "2"}),
          			                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
          	  }),
//          		change:function(evt){
//          			var oButton = config.getObjectById(templateHandler.getProfileTemplateExitButtonId());
//          			if(!config.profieInitial)
//          			oButton.setVisible(config.profileStatus());
//          			//alert('hi');title
//          		},
          		selectedKey:"{selectedModel>/level/id}"}).bindAggregation("items", "levels>/", new sap.ui.core.ListItem({
          	      text: "{levels>description}",
          	      key: "{levels>id}",
          	      selectedItemId :"{selectedModel>/level/id}"
          	      
          	    })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("levels")));
          }
    	
          var uPathway = config.getObjectById("profile-path-way-dropdown");
          if(uPathway==null){
        	  uPathway =new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
          		id:"profile-path-way-dropdown",
          		editable:editable,
          		layoutData: new sap.ui.core.VariantLayoutData({
          			multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
          			                  	     new sap.ui.layout.form.GridElementData({hCells: "2"}),
          			                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
          	  }),
//          		change:function(evt){
//          			var oButton = config.getObjectById(templateHandler.getProfileTemplateExitButtonId());
//          			if(!config.profieInitial)
//          			oButton.setVisible(config.profileStatus());
//          			//alert('hi');title
//          		},
          		selectedKey:"{selectedModel>/learningPathway/id}"}).bindAggregation("items", "pathways>/", new sap.ui.core.ListItem({
          	      text: "{pathways>description}",
          	      key: "{pathways>id}",
          	      selectedItemId :"{selectedModel>/learningPathway/id}"
          	      
          	    })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("pathways")));
          }
    	
    	var uJobTitle = config.getObjectById("profile-job-title-dropdown");
    	if(uJobTitle==null){
    		uJobTitle =new sap.ui.commons.DropdownBox({
    	    	id:"profile-job-title-dropdown",
    	    	width:"200px",height:"30px" ,
    	    	//editable:false,
    	    	editable:editable,
    	    	layoutData: new sap.ui.core.VariantLayoutData({
    	    		multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
    	    		                  	     new sap.ui.layout.form.GridElementData({hCells: "4"}),
    	    		                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
    	    	}),
//    	    	change:function(evt){
//    	    		var oButton = config.getObjectById(templateHandler.getProfileTemplateExitButtonId());
//    	    		if(!config.profieInitial)
//    	    		oButton.setVisible(config.profileStatus());
//    	    		//alert('hi');title
//    	    	},
    	    	selectedKey:"{selectedModel>/jobTitle/id}"}).bindAggregation("items", "jobTitles>/", new sap.ui.core.ListItem({
    	    	  text: "{jobTitles>description}",
    	    	  key: "{jobTitles>id}",
    	    	  selectedItemId :"{selectedModel>/jobTitile/id}"
    	    	  
    	    	})).setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("jobTitles")));
    	}
    
    	var oMatrix = new sap.ui.commons.layout.MatrixLayout({
    	layoutFixed : false,
    	width:'98%',
    	height:config.getMatrixHeight().toString()+'px'

    	}).addStyleClass("userProfileMatrix");
    	/////////////////////////////// >>///////////////////////////////////////////

    	var oLayout1 = new sap.ui.layout.form.GridLayout();

    	var oForm1 = new sap.ui.layout.form.Form({
    		//title: new sap.ui.core.Title({text: "User Detail Profile", tooltip: "User Detail Profile"}),
    		layout: oLayout1,
    		formContainers: [
    			new sap.ui.layout.form.FormContainer("F1C1",{
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
    				            	   	fields: [ new sap.ui.commons.TextField({value: "{selectedModel>/loginId}",
    				            	   		editable:editable,
    				            	   				layoutData: new sap.ui.core.VariantLayoutData({
    				            	   					multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 4}),
    				            	   					                     new sap.ui.layout.form.GridElementData({hCells: "3"})]
    				            	   				})
    				            	   	})
    				            	],
    				            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
    	                        }),
    	                        new sap.ui.layout.form.FormElement({
 				            	   label: new sap.ui.commons.Label({text:"User Type :",
 				            		   enabled:false,
 				            		   layoutData: new sap.ui.core.VariantLayoutData({
 				            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
 				            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
 				            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
 				            		   			})
 				            	   }),
 				            	   	fields: [ new sap.ui.commons.TextField({value: "{selectedModel>/userType/userTypeName}",
 				            	   		editable:editable,
 				            	   				layoutData: new sap.ui.core.VariantLayoutData({
 				            	   					multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 4}),
 				            	   					                     new sap.ui.layout.form.GridElementData({hCells: "3"})]
 				            	   				})
 				            	   	})
 				            	],
 				            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
 	                        }),

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
    	                 new sap.ui.layout.form.FormElement({
			            	   label: new sap.ui.commons.Label({text:"Locked :",
			            		   enabled:false,
			            		   layoutData: new sap.ui.core.VariantLayoutData({
			            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
			            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
			            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
			            		   			})
			            	   }),
			            	   	fields: [ new sap.ui.commons.TextField({value: "{selectedModel>/myLock}",
			            	   		editable:editable,
			            	   				layoutData: new sap.ui.core.VariantLayoutData({
			            	   					multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 4}),
			            	   					                     new sap.ui.layout.form.GridElementData({hCells: "3"})]
			            	   				})
			            	   	})
			            	],
			            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
                      }),
 	                 new sap.ui.layout.form.FormElement({
		            	   label: new sap.ui.commons.Label({text:"Locked On :",
		            		   enabled:false,
		            		   layoutData: new sap.ui.core.VariantLayoutData({
		            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
		            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
		            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
		            		   			})
		            	   }),
		            	   	fields: [ new sap.ui.commons.TextField({value: "{selectedModel>/myLockedOn}",
		            	   		editable:editable,
		            	   				layoutData: new sap.ui.core.VariantLayoutData({
		            	   					multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 4}),
		            	   					                     new sap.ui.layout.form.GridElementData({hCells: "3"})]
		            	   				})
		            	   	})
		            	],
		            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
                }),
                new sap.ui.layout.form.FormElement({
	            	   label: new sap.ui.commons.Label({text:"",
	            		   enabled:false,
	            		   layoutData: new sap.ui.core.VariantLayoutData({
	            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
	            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
	            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
	            		   			})
	            	   }),
	            
	            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
         })
    	                        
    	  ]

    	}),
    	        
    	]		
    			
    	}).addStyleClass("userForm");
    	
    	return oForm1;
    },
    doAction:function(id){
    	if(id=="edit"){
    		config.getObjectById(constant._USER_MANAGEMENT_CANCEL_BUTTON_ID).setEnabled(true);
    		config.getObjectById(constant._USER_MANAGEMENT_SAVE_BUTTON_ID).setEnabled(true);
    		var oTI = config.getObjectById(constant._USER_MANAGEMENT_THINGINSPECTOR_ID);
    		oTI.destroyFacets();
    		oTI.destroyFacetContent() ;
    		var facts =  new sap.ui.ux3.NavigationItem({key:"overview", text:"Overview [Edit]"});;
    		oTI.addFacet(facts);
    		var facts =  new sap.ui.ux3.NavigationItem({key:"change-password", text:"Change Password"});
    		oTI.addFacet(facts);
    		var facts =  new sap.ui.ux3.NavigationItem({key:"role-assignment", text:"Role Assignment"});
    		oTI.addFacet(facts);
    		oTI.addFacetContent(this.createThingGroup("userEdit"));
    		
    	}else if(id=="cancel"){
    		config.getObjectById(constant._USER_MANAGEMENT_CANCEL_BUTTON_ID).setEnabled(false);
    		config.getObjectById(constant._USER_MANAGEMENT_SAVE_BUTTON_ID).setEnabled(false);
    		var oTI = config.getObjectById(constant._USER_MANAGEMENT_THINGINSPECTOR_ID);
    		oTI.destroyFacets();
    		oTI.destroyFacetContent() ;
    		var facts =  new sap.ui.ux3.NavigationItem({key:"overview", text:"Overview "});;
    		oTI.addFacet(facts);
    		var facts =  new sap.ui.ux3.NavigationItem({key:"change-password", text:"Change Password"});
    		oTI.addFacet(facts);
    		var facts =  new sap.ui.ux3.NavigationItem({key:"role-assignment", text:"Role Assignment"});
    		oTI.addFacet(facts);
    		oTI.addFacetContent(this.createThingGroup("overview"));
    	}
    },
    createThingInspector:function(oController){
    	var oActionEdit = config.getObjectById(constant._USER_MANAGEMENT_EDIT_BUTTON_ID);
    	if(oActionEdit==null){
    		oActionEdit = new sap.ui.ux3.ThingAction({
    			id : constant._USER_MANAGEMENT_EDIT_BUTTON_ID,
    			text : "Edit",
    			tooltip: "Edit",
    		});
    	}
    	var oActionCancel = config.getObjectById(constant._USER_MANAGEMENT_CANCEL_BUTTON_ID);
    	if(oActionCancel==null){
    		oActionCancel = new sap.ui.ux3.ThingAction({
    			id : constant._USER_MANAGEMENT_CANCEL_BUTTON_ID,
    			text : "Cancel",
    			tooltip: "Cancel",
    			enabled:false,
    		});
    	}
    	oActionCancel.setEnabled(false);
    
		var oActionSave = config.getObjectById(constant._USER_MANAGEMENT_SAVE_BUTTON_ID);
		if(oActionSave==null){
			oActionSave = new sap.ui.ux3.ThingAction({
				id : constant._USER_MANAGEMENT_SAVE_BUTTON_ID,
				text : "Save",
				tooltip: "Save",
				enabled:false,
			});
		}
		oActionSave.setEnabled(false);
	    var oTI = config.getObjectById(config.getUserManagementThingInspactorId());
	    if(oTI==null){
	    	oTI = new sap.ui.ux3.ThingInspector(
					{
						id:config.getUserManagementThingInspactorId(),
						secondTitle : "{selectedModel>loginId}",
						type : "{selectedModel>/userType/userTypeName}",
						icon : "sap-icon://person-placeholder",
						openButtonVisible:false,
						updateActionEnabled : false,
						facets : [ new sap.ui.ux3.NavigationItem({
							key : "overview",
							text : "Overview"
						}),new sap.ui.ux3.NavigationItem({key:"change-password", text:"Change Password"}),
						 new sap.ui.ux3.NavigationItem({key:"role-assignment", text:"Role Assignment"})],
						facetSelected : function(oEvent) {
							//oTI.removeAllFacetContent();
							//oTI.removeAllActions();
							switch (oEvent.getParameter("key")) {
							case "overview":
							//	oTI.addAction(oA4);
							//	oTI.addFacetContent(oFC1);
								break;
							case "detail":
								//oTI.addFacetContent(oFC1);
							//	oTI.addFacetContent(oFC2);
								break;
							}
						},
						actions : [oActionEdit,oActionSave,oActionCancel],
						headerContent : [ new sap.ui.ux3.ThingGroup(
								{
									title : "About",
									content : [ this.createDataForm() ]
								}) ],
						openNew : function(oEvent) {
						},

						actionSelected : function(oEvent) {
							var oAction = oEvent
									.getParameter("action");
							var sActionId = oAction.getId();
							//alert(sActionId);
							var idx = sActionId.lastIndexOf("-");
							if (idx >= 0) {
								sActionId = sActionId.substring(idx + 1);
								// sap.ui.getCore().setModel(oModel);
									//alert(sActionId);
									var bus = sap.ui.getCore().getEventBus();
									bus.publish("nav", "fromUserManagement", {
										id : "edit",
									});
						//	oController.doAction(sActionId);
						  }
						}
					});
			
				function handler(oEvent) {
				// alert("Event '" + oEvent.getId() + "'
				// triggered");
				}
	    }
			
    },
    createDataForm:function(){

		var c = sap.ui.commons;
		return  new c.form.Form(
		{
			width : "100%",
			layout : new c.form.GridLayout(),
			formContainers : [ new c.form.FormContainer(
					{
						formElements : [
								new c.form.FormElement({
										label : new c.Label({
												text : "ID ",
												layoutData : new c.form.GridElementData({
													hCells : "5"
													})
										}),
										fields : [ new c.TextField({
														value : "{selectedModel>/loginId}",
														editable : false
										}) ]
								}),
								new c.form.FormElement({
									label : new c.Label({
										text : "User Type",
										layoutData : new c.form.GridElementData({
											hCells : "5"
											})
									}),
								fields : [ new c.TextField({
									value : "{selectedModel>/userType/userTypeName}",
									editable : false
									}) ]
						}),
						new c.form.FormElement({
							label : new c.Label({
								text : "Gender",
								layoutData : new c.form.GridElementData({
									hCells : "5"
								})
							}),
							fields : [ new c.TextField({
								value : "{selectedModel>/gender/genderName}",
								editable : false
							}) ]
						}),
						new c.form.FormElement({
							label : new c.Label({
								text : "Function ID",
								layoutData : new c.form.GridElementData({
									hCells : "5"
								})
							}),
							fields : [ new c.TextField({
								value : "{selectedModel>/function/id}",
								editable : false
							}) ]
						}),
						new c.form.FormElement({
							label : new c.Label({
								text : "Occupation ID",
								layoutData : new c.form.GridElementData({
										hCells : "5"
								})
							}),
							fields : [ new c.TextField({
									value : "{selectedModel>/jobTitle/id}",
									editable : false
									}) ]
							}),
						new c.form.FormElement({
								label : new c.Label({
										text : "Level ID",
										layoutData : new c.form.GridElementData({
											hCells : "5"
										})
								}),
								fields : [ new c.TextField({
									value : "{selectedModel>/level/id}",
									editable : false
							    }) ]
								}) ]
					}) ]
		});
    },
    createReadOnlyForm:function(){
    	var oLayout1 = new sap.ui.layout.form.GridLayout();

    	var oForm1 = new sap.ui.layout.form.Form({
    		//title: new sap.ui.core.Title({text: "User Detail Profile", tooltip: "User Detail Profile"}),
    		layout: oLayout1,
    		formContainers: [
    			new sap.ui.layout.form.FormContainer("F1C1",{
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
    				            	   	fields: [ new sap.ui.commons.TextField({value: "{selectedModel>/loginId}",
    				            	   		editable:false,
    				            	   				layoutData: new sap.ui.core.VariantLayoutData({
    				            	   					multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 4}),
    				            	   					                     new sap.ui.layout.form.GridElementData({hCells: "3"})]
    				            	   				})
    				            	   	})
    				            	],
    				            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
    	                        }),
    	                        new sap.ui.layout.form.FormElement({
 				            	   label: new sap.ui.commons.Label({text:"User Type :",
 				            		   enabled:false,
 				            		   layoutData: new sap.ui.core.VariantLayoutData({
 				            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
 				            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
 				            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
 				            		   			})
 				            	   }),
 				            	   	fields: [ new sap.ui.commons.TextField({value: "{selectedModel>/userType/userTypeName}",
 				            	   		editable:false,
 				            	   				layoutData: new sap.ui.core.VariantLayoutData({
 				            	   					multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 4}),
 				            	   					                     new sap.ui.layout.form.GridElementData({hCells: "3"})]
 				            	   				})
 				            	   	})
 				            	],
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
    				            	   	fields: [ new sap.ui.commons.TextField({value: "{selectedModel>/gender/genderName}",
    				            	   		editable:false,
			            	   				layoutData: new sap.ui.core.VariantLayoutData({
			            	   					multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 4}),
			            	   					                     new sap.ui.layout.form.GridElementData({hCells: "3"})]
			            	   				})
			            	   	})],
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
    				            	   	fields: [ new sap.ui.commons.TextField({value: "{selectedModel>/location/locationName}",
    				            	   		editable:false,
			            	   				layoutData: new sap.ui.core.VariantLayoutData({
			            	   					multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 4}),
			            	   					                     new sap.ui.layout.form.GridElementData({hCells: "4"})]
			            	   				})
			            	   	})	],
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
    				            	   	fields: [ new sap.ui.commons.TextField({value: "{selectedModel>/function/description}",
    				            	   		editable:false,
			            	   				layoutData: new sap.ui.core.VariantLayoutData({
			            	   					multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 4}),
			            	   					                     new sap.ui.layout.form.GridElementData({hCells: "4"})]
			            	   				})
			            	   	})	],
    				            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
    	                        }),

    	                        new sap.ui.layout.form.FormElement({
    				            	   label: new sap.ui.commons.Label({text:"Job Title :",
    				            		   layoutData: new sap.ui.core.VariantLayoutData({
    				            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
    				            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
    				            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
    				            		   			})
    				            	   }),
    				            	   	fields: [ new sap.ui.commons.TextField({value: "{selectedModel>/jobTitle/name}",
    				            	   		editable:false,
			            	   				layoutData: new sap.ui.core.VariantLayoutData({
			            	   					multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 4}),
			            	   					                     new sap.ui.layout.form.GridElementData({hCells: "4"})]
			            	   				})
			            	   	})],
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
    				            	   	fields: [ new sap.ui.commons.TextField({value: "{selectedModel>/level/description}",
    				            	   		editable:false,
			            	   				layoutData: new sap.ui.core.VariantLayoutData({
			            	   					multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 4}),
			            	   					                     new sap.ui.layout.form.GridElementData({hCells: "3"})]
			            	   				})
			            	   	})],
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
    			            	   	fields: [ new sap.ui.commons.TextField({value: "{selectedModel>/learningPathway/name}",
				            	   		editable:false,
		            	   				layoutData: new sap.ui.core.VariantLayoutData({
		            	   					multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 4}),
		            	   					                     new sap.ui.layout.form.GridElementData({hCells: "3"})]
		            	   				})
		            	   	})],
    			            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
    	                 }),
    	                 new sap.ui.layout.form.FormElement({
			            	   label: new sap.ui.commons.Label({text:"Locked :",
			            		   enabled:false,
			            		   layoutData: new sap.ui.core.VariantLayoutData({
			            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
			            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
			            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
			            		   			})
			            	   }),
			            	   	fields: [ new sap.ui.commons.TextField({value: "{selectedModel>/myLock}",
			            	   		editable:false,
			            	   				layoutData: new sap.ui.core.VariantLayoutData({
			            	   					multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 4}),
			            	   					                     new sap.ui.layout.form.GridElementData({hCells: "3"})]
			            	   				})
			            	   	})
			            	],
			            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
                      }),
 	                 new sap.ui.layout.form.FormElement({
		            	   label: new sap.ui.commons.Label({text:"Locked On :",
		            		   enabled:false,
		            		   layoutData: new sap.ui.core.VariantLayoutData({
		            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
		            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
		            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
		            		   			})
		            	   }),
		            	   	fields: [ new sap.ui.commons.TextField({value: "{selectedModel>/myLockedOn}",
		            	   		editable:false,
		            	   				layoutData: new sap.ui.core.VariantLayoutData({
		            	   					multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 4}),
		            	   					                     new sap.ui.layout.form.GridElementData({hCells: "3"})]
		            	   				})
		            	   	})
		            	],
		            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
                }),
                new sap.ui.layout.form.FormElement({
	            	   label: new sap.ui.commons.Label({text:"",
	            		   enabled:false,
	            		   layoutData: new sap.ui.core.VariantLayoutData({
	            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
	            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
	            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
	            		   			})
	            	   }),
	            
	            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
         })
    	                        
    	  ]

    	}),
    	        
    	]		
    			
    	}).addStyleClass("userForm");
    	
    	return oForm1;
		
    }
});