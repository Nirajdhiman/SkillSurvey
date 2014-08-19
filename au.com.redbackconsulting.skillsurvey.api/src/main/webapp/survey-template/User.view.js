sap.ui.jsview("survey-template.User", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.User
	*/ 
	getControllerName : function() {
		return "survey-template.User";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.User
	*/ 
	createContent : function(oController) {
		
		var uType= config.getObjectById("create-create-profile-user-type-dropdown");
    	if(uType==null){
    		uType = new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
        		id:"create-create-profile-user-type-dropdown",
        		 
        		layoutData: new sap.ui.core.VariantLayoutData({
        			multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
        			                  	     new sap.ui.layout.form.GridElementData({hCells: "2"}),
        			                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
        	  }),
        	selectedKey:"{blankProfileModel>userType/userId}"
        		
    		}).bindAggregation("items", "blankProfileModel>/userTypes/", new sap.ui.core.ListItem({
        	      text: "{blankProfileModel>userTypeName}",
        	      key: "{blankProfileModel>userId}",
        	     
        	      selectedItemId :"{blankProfileModel>userType/userId}"
        	      
        	    })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("blankProfileModel")));
    	}
    	
    	var uGender = config.getObjectById("create-create-profile-gender-dropdown");
    	if(uGender==null){
    		uGender = new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
        		id:"create-create-profile-gender-dropdown",
        		 
        		layoutData: new sap.ui.core.VariantLayoutData({
        			multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
        			                  	     new sap.ui.layout.form.GridElementData({hCells: "2"}),
        			                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
        	  }),
        		selectedKey:"{blankProfileModel>/gender/genderId}"}).bindAggregation("items", "blankProfileModel>/genders/", new sap.ui.core.ListItem({
        	      text: "{blankProfileModel>genderName}",
        	      key: "{blankProfileModel>genderId}",
        	      selectedItemId :"{blankProfileModel>/gender/genderId}"
        	      
        	    })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("blankProfileModel")));
    	}
    	
    	var uLocation = config.getObjectById("create-create-profile-location-dropdown");
    	if(uLocation==null){
    		uLocation = new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
        		id:"create-create-profile-location-dropdown",
        		 
        		layoutData: new sap.ui.core.VariantLayoutData({
        			multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
        			                  	     new sap.ui.layout.form.GridElementData({hCells: "2"}),
        			                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
        	  }),
        		selectedKey:"{blankProfileModel>/location/locationId}"}).bindAggregation("items", "blankProfileModel>/locations/", new sap.ui.core.ListItem({
        	      text: "{blankProfileModel>locationName}",
        	      key: "{blankProfileModel>locationId}",
        	      selectedItemId :"{blankProfileModel>/location/locationId}"
        	      
        	    })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("blankProfileModel")));
    	}
    	//function dropdown
    	var uFunction = config.getObjectById("create-create-profile-function-dropdown");
    	if(uFunction==null){
    		uFunction =new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
        		id:"user-management-create-function-dropdown",
        		 
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
         				context:{id:_id,target:"user-management-create-jobtitles-dropdown"}

         			});
    			}, 
        		selectedKey:"{blankProfileModel>/function/id}"}).bindAggregation("items", "blankProfileModel>/functions/", new sap.ui.core.ListItem({
        	      text: "{blankProfileModel>description}",
        	      key: "{blankProfileModel>id}",
        	      selectedItemId :"{blankProfileModel>/function/id}"
        	     
        	      
        	    })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("blankProfileModel")));
    	}
    	
    	//end of function dropdown
          var uAPSLevel = config.getObjectById("create-create-profile-aps-level-dropdown");
          if(uAPSLevel==null){
        	  uAPSLevel =new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
          		id:"user-management-create-aps-level-dropdown",
          		enabled:false,
          		layoutData: new sap.ui.core.VariantLayoutData({
          			multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
          			                  	     new sap.ui.layout.form.GridElementData({hCells: "2"}),
          			                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
          	  }),
          		selectedKey:"{blankProfileModel>/level/id}"}).bindAggregation("items", "levels>/", new sap.ui.core.ListItem({
          	      text: "{levels>description}",
          	      key: "{levels>id}",
          	      selectedItemId :"{blankProfileModel>/level/id}"
          	      
          	    })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("levels")));
          }
    	
          var uPathway = config.getObjectById("create-create-profile-path-way-dropdown");
          if(uPathway==null){
        	  uPathway =new sap.ui.commons.DropdownBox({width:"200px",height:"30px" ,
          		id:"create-create-profile-path-way-dropdown",
          		 
          		layoutData: new sap.ui.core.VariantLayoutData({
          			multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
          			                  	     new sap.ui.layout.form.GridElementData({hCells: "2"}),
          			                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
          	  }),
          		selectedKey:"{blankProfileModel>/learningPathway/id}"}).bindAggregation("items", "blankProfileModel>/pathways/", new sap.ui.core.ListItem({
          	      text: "{blankProfileModel>name}",
          	      key: "{blankProfileModel>id}",
          	      selectedItemId :"{blankProfileModel>/learningPathway/id}"
          	      
          	    })) .setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("blankProfileModel")));
          }
    	
    	var uJobTitle = config.getObjectById("create-create-profile-job-title-dropdown");
    	if(uJobTitle==null){
    		uJobTitle =new sap.ui.commons.DropdownBox({
    	    	id:"user-management-create-jobtitles-dropdown",
    	    	width:"200px",height:"30px" ,
    	    	enabled:false,
    	    	layoutData: new sap.ui.core.VariantLayoutData({
    	    		multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
    	    		                  	     new sap.ui.layout.form.GridElementData({hCells: "4"}),
    	    		                  	   new sap.ui.layout.GridData({span: "L1 M1 S12"})]
    	    	}),
    	    	 change:function(evt){
    	       	  debugger;
    	       	   var _id = config.getObjectById(evt.getSource().getId()).getSelectedKey();
    	   			 var bus = sap.ui.getCore().getEventBus();
    	   			bus.publish("nav", "toDropDownService", {
    	   				id : "levels",
    	   				context:{id:_id,target:"user-management-create-aps-level-dropdown"}

    	   			});
    	   		},
    	    	selectedKey:"{blankProfileModel>/jobTitle/id}"}).bindAggregation("items", "jobtitles>/", new sap.ui.core.ListItem({
    	    	  text: "{jobtitles>description}",
    	    	  key: "{jobtitles>id}",
    	    	  selectedItemId :"{blankProfileModel>/jobTitile/id}"
    	    	  
    	    	})).setModel(new sap.ui.model.json.JSONModel(sap.ui.getCore().getModel("jobtitles")));
    	}
    
    	var oLayout1 = new sap.ui.layout.form.GridLayout();

    	var oForm1 = new sap.ui.layout.form.Form({
    		width:'90%',
    		height:'70%',
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
    				            	   	fields: [ new sap.ui.commons.TextField({value: "{blankProfileModel>/loginId}",
    				            	   		 
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
			            	   	fields: [ new sap.ui.commons.TextField({value: "{blankProfileModel>/myLock}",
			            	   		 
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
		            	   	fields: [ new sap.ui.commons.TextField({value: "{blankProfileModel>/myLockedOn}",
		            	   		 
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

    	})
    	
    	]		
    			
    	}).addStyleClass("userManagementForm");
    	
    	//return oForm1;
    	
    	var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : false,
			width:'80%',
			
		}).addStyleClass("userManagementForm");
		
	
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:"Top",hAlign:"Left"});
		oCell.addContent(new sap.ui.commons.Button({text:"Save",width:'120px',height:'30px'}));
		oCell.addContent(new sap.ui.commons.Button({text:"Exit",width:'120px',height:'30px',
			press:function(evt){
				var oOverlayContainer = config.getObjectById(constant._USER_MANAGEMENT_CREATE_PROFILE_OVERLAY_ID);
				if(oOverlayContainer.isOpen()){
					oOverlayContainer.close();
				}
			}
		
		}));
		oRow.addCell(oCell);
		
		oMatrix.addRow(oRow);
		var arr=[];
		arr.push(oForm1);
		arr.push(oMatrix);
		return arr;
		

	}

});
