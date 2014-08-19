sap.ui.jsview("survey-template.RoleMaster", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.RoleMaster
	*/ 
	getControllerName : function() {
		return "survey-template.RoleMaster";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.RoleMaster
	*/ 
	createContent : function(oController) {
var content =	this.myContent(oController);
		
		return content;
			},
			
			myContent : function (oController ){
				
				var oHeader = new sap.ui.commons.Label({
//					id : "id", // sap.ui.core.ID
					design : sap.ui.commons.LabelDesign.Standard, // sap.ui.commons.LabelDesign
					textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
					wrapping : false, // boolean
					width : '', // sap.ui.core.CSSSize
					text : 'Manage Roles', // string
					visible : true, // boolean, since 1.14.0
				 
				// sap.ui.core.Control
				});
				
				var oSno = new sap.ui.commons.Label({
//					id : "id", // sap.ui.core.ID
					design : sap.ui.commons.LabelDesign.Standard, // sap.ui.commons.LabelDesign
					textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
					wrapping : false, // boolean
					width : '', // sap.ui.core.CSSSize
					text : '{rolemenumodel>sno}', // string
					visible : true, // boolean, since 1.14.0
					icon : undefined, // sap.ui.core.URI
					textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
					required : false, // boolean, since 1.11.0
					requiredAtBegin : undefined, // boolean, since 1.14.0
					tooltip : undefined, // sap.ui.core.TooltipBase
					customData : [ new sap.ui.core.CustomData({
					//	id : "id1", // sap.ui.core.ID
						key : undefined, // string
						value : undefined, // any
						writeToDom : false, // boolean, since 1.9.0
						tooltip : undefined, // sap.ui.core.TooltipBase
						customData : []
					// sap.ui.core.CustomData
					}) ], // sap.ui.core.CustomData
					labelFor : undefined
				// sap.ui.core.Control
				});
				
				var oBtn = new sap.ui.commons.Button({
//					id : "id", // sap.ui.core.ID
					text : '{rolemenumodel>label}', // string
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
				//		id : "id1", // sap.ui.core.ID
						key : 'key', // string
						value : '{rolemenumodel>key}', // any
						writeToDom : false, // boolean, since 1.9.0
						tooltip : undefined, // sap.ui.core.TooltipBase
						customData : []
					// sap.ui.core.CustomData
					}) ], // sap.ui.core.CustomData
					ariaDescribedBy : [], // sap.ui.core.Control
					ariaLabelledBy : [], // sap.ui.core.Control
					press : oController.onSelectHandler
				});
				
				
				var oHorizontal =   new sap.ui.commons.layout.HorizontalLayout({
//					id : "id", // sap.ui.core.ID
					allowWrapping : false, // boolean
					visible : true, // boolean
					tooltip : undefined, // sap.ui.core.TooltipBase
					customData : [ new sap.ui.core.CustomData({
			//			id : "id1", // sap.ui.core.ID
						key : undefined, // string
						value : undefined, // any
						writeToDom : false, // boolean, since 1.9.0
						tooltip : undefined, // sap.ui.core.TooltipBase
						customData : []
					// sap.ui.core.CustomData
					}) ], // sap.ui.core.CustomData
					content : [oSno, oBtn]
				// sap.ui.core.Control
				});
				
				var oVertical = new sap.ui.commons.layout.VerticalLayout({
				//	id : "id", // sap.ui.core.ID
					width : undefined, // sap.ui.core.CSSSize
					enabled : true, // boolean
					visible : true, // boolean
					tooltip : undefined, // sap.ui.core.TooltipBase
					customData : [ new sap.ui.core.CustomData({
//						id : "id1", // sap.ui.core.ID
						key : undefined, // string
						value : undefined, // any
						writeToDom : false, // boolean, since 1.9.0
						tooltip : undefined, // sap.ui.core.TooltipBase
						customData : []
					// sap.ui.core.CustomData
					}) ], // sap.ui.core.CustomData
					content : {path : "rolemenumodel>/Items", template : oHorizontal}
				// sap.ui.core.Control
				});
				
				var oContainer = new sap.ui.commons.layout.VerticalLayout({
		 
					width : undefined, // sap.ui.core.CSSSize
					enabled : true, // boolean
					visible : true, // boolean
				 		 
					content : [oHeader, oVertical]
				// sap.ui.core.Control
				})
				return oContainer;
			}

});