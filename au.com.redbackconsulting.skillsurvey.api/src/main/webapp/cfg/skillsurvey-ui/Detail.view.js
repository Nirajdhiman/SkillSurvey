var oMyModel = sap.ui.getCore().getModel("myModel");
sap.ui.jsview("skillsurvey-ui.Detail", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf skillsurvey-ui.Detail
	 */
	getControllerName : function() {
		return "skillsurvey-ui.Detail";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf skillsurvey-ui.Detail
	 */
	createContent : function(oController) {

		var oControls = [];
		
		var oObjecthead = new sap.m.ObjectHeader({
			id : this.createId("detail-head"),
			title : "Address Type",
			intro : "Intro",
			attributes : [ new sap.m.ObjectAttribute({
				id : this.createId("detail-head-from"),
				text : {
					path : "FROM",
					formatter : "sap.app.formatter.date"
				}
			}), new sap.m.ObjectAttribute({
				id : this.createId("detail-head-to"),
				text : {
					path : "TO",
					formatter : "sap.app.formatter.date"
				}
			}),

			],
			firstStatus : new sap.m.ObjectStatus({
				id : this.createId("detail-head-status"),
				text : "Active",
			// text: {
			// text:"Neu",
			// formatter: "sap.app.formatter.statusState"
			// }
			})
		});
		sap.ui.getCore().getModel("myModel");
        var oAbsoluteLayout = new sap.ui.commons.layout.AbsoluteLayout({width:"600px",height:"400px"});
     
        oAbsoluteLayout.addContent(new sap.ui.commons.Label({
					text : "User Id",
				}).setDesign(sap.ui.commons.LabelDesign.Bold),{top:"20px",left:"15px"});
        oAbsoluteLayout.addContent(new sap.ui.commons.TextField({
			value : "{myModel>/userId}",
			editable : false,
			width:"200px"
			}), {top:"20px",left:"110px"});
        
        oAbsoluteLayout.addContent(new sap.ui.commons.Label({
			id : this.createId("detail-tab-info-lbl-user-first-name"),
			text : "First Name"
			}).setDesign(sap.ui.commons.LabelDesign.Bold)
			, {top:"50px",left:"15px"});
        oAbsoluteLayout.addContent(new sap.ui.commons.TextField({
				id : this.createId("detail-tab-info-txt-user-first-name"),
				value : "{myModel>/firstName}",
				width:"200px"
        	}), {top:"50px",left:"110px"});
        
        oAbsoluteLayout.addContent(new sap.ui.commons.Label({
			id : this.createId("detail-tab-into-lbl-user-last-name"),
			text : "Last Name"
			}).setDesign(sap.ui.commons.LabelDesign.Bold)
			, {top:"80px",left:"15px"});
        oAbsoluteLayout.addContent(new sap.ui.commons.TextField({
				id : this.createId("detail-tab-info-txt-user-last-name"),
				value :"{myModel>/lastName}",
				width:"200px"
        	}), {top:"80px",left:"110px"});
        
        oAbsoluteLayout.addContent(new sap.ui.commons.Label({
			id : this.createId("detail-tab-into-lbl-user-email-id"),
			text : "Email-id"
			}).setDesign(sap.ui.commons.LabelDesign.Bold)
			, {top:"110px",left:"15px"});
        oAbsoluteLayout.addContent(new sap.ui.commons.TextField({
				id : this.createId("detail-tab-info-txt-user-email-id"),
				value : "{myModel>/email}",
				width:"200px"
        	}), {top:"110px",left:"110px"});
        
        
        
        
		var iconBar = new sap.m.IconTabBar({
			id : this.createId("detail-tabs"),
			expanded : "{device>isNoPhone}",
			items : [ new sap.m.IconTabFilter({
				id : this.createId("detail-tab-info"),
				text : "Additional Info",
				icon : "sap-icon://supplier",
			}) ],
			content : oAbsoluteLayout
				
				
//				new sap.ui.commons.form.SimpleForm({
//				id : this.createId("detail.tab-info-form"),
//				minWidth : 1024,
//				content : [
//				// GRoup Title
//				new sap.ui.commons.Title({
//					id : this.createId("detail-tab-info-form-info"),
//					text : "Information"
//				}),
//				// From Label
//				new sap.ui.commons.Label({
//					text : "User Id"
//				}).setDesign(sap.ui.commons.LabelDesign.Bold), 
//				new sap.ui.commons.TextField({
//					value : "{userId}"
//				}), new sap.ui.commons.Label({
//					id : this.createId("detail-tab-info-form-info-lblfrom"),
//					text : "First Name"
//				}).setDesign(sap.ui.commons.LabelDesign.Bold), 
//				new sap.ui.commons.TextField({
//					id : this.createId("detail-tab-info-form-info-from"),
//					value : "{firstName}",
//					editable:true
//				}),
//
//				// TO LAbel
//				new sap.ui.commons.Label({
//					id : this.createId("detail-tab-info-form-info-lblto"),
//					text : "Last Name"
//				}).setDesign(sap.ui.commons.LabelDesign.Bold), 
//				new sap.ui.commons.TextField({
//					id : this.createId("detail-tab-info-form-info-to"),
//					value : "{lastName}",
//					editable:true
//				}), new sap.ui.commons.Label({
//					text : "Email Address"
//				}).setDesign(sap.ui.commons.LabelDesign.Bold), 
//				new sap.ui.commons.TextField({
//					value : "{email}",
//					editable:true
//				})
//
//				]
//			})
		});
		// var label1 = new sap.m.Label({id:this.createId("lbl1"),text:"Address
		// Type"});

		// var txt1 = new sap.m.Text({id:this.createId("txt1"),
		// text:"{ADDRTYPE}"
		// });

		// oControls.push(label1,txt1);

		// Register to before show
		this.addEventDelegate({
			onBeforeShow : function(evt) {
				this.setBindingContext(evt.data.context); // give this (= the
				// View) as
				// additional
				// parameter to make
				// it available
				// inside the
				// delegate's
				// functions as
				// "this" object
			}
		}, this);

		oControls.push(oObjecthead, iconBar);
		return new sap.m.Page({
			title : "{i18n>DetailTitle}",
			showNavButton : "{device>/isPhone}",
			content : oControls,
			footer : new sap.m.Bar({
				id : this.createId("detail-footer"),
				contentRight : [ new sap.m.Button({
					id : this.createId("detail-footer-appr"),
					text : "{i18n>ApproveButtonText}",
					icon : "sap-icon://accept",
					press : oController.handleApprove
				}), //
				new sap.m.Button({
					id : this.createId("detail-footer-delete"),
					text : "Delete",
					type : "Reject",
					press : oController.handleDelete
				}), new sap.m.Button({
					id : this.createId("detail-footer-edit"),
					text : "Update",
					icon : "sap-icon://edit",
					press : oController.handleEdit
				}),
				new sap.m.Button({
					id:this.createId("detail-footer-new"),
					text:"New",
					icon:"sap-icon://new",
					press:oController.handleNew
					
					
				})]
			})
		});
	},

// onBeforeShow: function(evt){
// debugger;
// this.setBindingContext(evt.data.context);
// }

});