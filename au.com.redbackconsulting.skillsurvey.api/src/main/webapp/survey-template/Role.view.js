sap.ui.jsview("survey-template.Role", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.Role
	*/ 
	getControllerName : function() {
		return "survey-template.Role";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.Role
	*/ 
	createContent : function(oController) {
		 var oMatrix = new sap.ui.commons.layout.MatrixLayout({
				layoutFixed : false,
				width:(config.getUserManagementRightContentWidth()-20).toString()+'px',
				//height:(config.getMatrixHeight()-40).toString()+'px'
				
			}).addStyleClass("userMatrix");
		 
		 var oLayout1 = new sap.ui.layout.form.GridLayout();
			
			var oForm1 = new sap.ui.layout.form.Form({
				//title: new sap.ui.core.Title({text: "User Detail Profile", tooltip: "User Detail Profile"}),
				layout: oLayout1,
				formContainers: [
					new sap.ui.layout.form.FormContainer({
						title: "Basic Information",
						formElements: [
						               new sap.ui.layout.form.FormElement({
						            	   label: new sap.ui.commons.Label({text:"Role Name :",
						            		   layoutData: new sap.ui.core.VariantLayoutData({
						            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
						            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
						            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
						            		   			})
						            	   }),
						            	   	fields: [ new sap.ui.commons.TextField({value: "{role>/roleName}",
						            	   		
						            	   				height:'30px',
						            	   				enabled:config.getActionStatus(),
						            	   				layoutData: new sap.ui.core.VariantLayoutData({
						            	   					multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 4}),
						            	   					                     new sap.ui.layout.form.GridElementData({hCells: "3"})]
						            	   				})
						            	   	})
						            	],
						            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
			                        }),
			                        new sap.ui.layout.form.FormElement({
						            	   label: new sap.ui.commons.Label({text:"Role Description :",
						            		   layoutData: new sap.ui.core.VariantLayoutData({
						            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
						            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
						            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
						            		   			})
						            	   }),
						            	   	fields: [ new sap.ui.commons.TextField({value: "{role>/roleDescription}",
						            	   		height:'30px',
						            	   		       enabled:config.getActionStatus(),
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
						            		   layoutData: new sap.ui.core.VariantLayoutData({
						            			   multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
						            			                        new sap.ui.layout.form.GridElementData({hCells: "2"}),
						            			                        new sap.ui.layout.GridData({span: "L1 M1 S12"})]
						            		   			})
						            	   }),
						            	   	fields: [ new sap.ui.commons.Button({
						        				text:"Save",
						        				height:"30px",
						        				width:"100px",
						        				enabled:config.getActionStatus(),
						        				icon:"sap-icon://save",
						            	   				layoutData: new sap.ui.core.VariantLayoutData({
						            	   					multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 4}),
						            	   					                     new sap.ui.layout.form.GridElementData({hCells: "2"})]
						            	   				})
						            	   	})
						            	],
						            	layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({linebreak: true, margin: false})
			                        })
						               

			                        
			                ]

			})	
						               
	 ]}).addStyleClass("userProfileForm");

			var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
			
			var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:"Top"});
			oCell.addContent(oForm1);
			oRow.addCell(oCell);
			
								
			oMatrix.addRow(oRow);
			
			return oMatrix;
		
		//arr.push(oMatrix);
		return oMatrix;//oMatrix

	}

});
