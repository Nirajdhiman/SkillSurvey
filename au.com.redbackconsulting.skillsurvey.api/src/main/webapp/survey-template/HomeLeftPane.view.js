 var mapModel={root:[]};
sap.ui.jsview("survey-template.HomeLeftPane", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf survey-template.HomeLeftPane
	*/ 
	getControllerName : function() {
		return "survey-template.HomeLeftPane";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf survey-template.HomeLeftPane
	*/ 
	
	createContent : function(oController) {
		
		
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			width:'100%',
			height:'100%'
			
		}).addStyleClass("home-left-container");
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			vAlign:"Top",
			hAlign:"Left",
			width:'50%',
				height:'100%'
			});
		oCell.addContent(this.firstContentForLeftPane());
		oRow.addCell(oCell);
		
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			vAlign:"Top",
			hAlign:"Center",
			width:'50%',
			height:'100%'
			});
		oCell.addContent(this.createImageContent());
		oCell.addContent(this.createHomeBottomContent());
		
		 oRow.addCell(oCell);	
		oMatrix.addRow(oRow);
		
		
		
		//oMatrix.addRow(oRow);
		return oMatrix;
		
	},
	
	createImageContent:function(){
		return new sap.ui.core.HTML({ 
			content:
				
				'<div  class="homeImageContent" ><img src="config/images/home_img.gif" height="240"/></div>'
		});
	},
	createCarousel:function(){
		var oCarousel = new sap.ui.commons.Carousel({

		});
		oCarousel.setAnimationDuration(4000);
		oCarousel.setWidth("400px");
		oCarousel.setOrientation("horizontal");
		
		oCarousel.addContent(new sap.ui.commons.Image({
			src : "config/images/icons/person.png",
			alt : "sample image",
			width:'380px',
			height:'300px',
		//	width:(config.getDocWidth()-630).toString()+'px',
		//	height:((config.getMatrixHeight()/2)-1).toString()+'px'
		}));

		oCarousel.addContent(new sap.ui.commons.Image("IMG1", {
			src : "config/images/icons/1.jpg",
			alt : "sample image",
			width:'380px',
			height:'300px',
//			width:(config.getDocWidth()-630).toString()+'px',
//			height:((config.getMatrixHeight()/2)-1).toString()+'px'
		}));

		oCarousel.addContent(new sap.ui.commons.Image("IMG2", {
			src : "config/images/icons/2.jpg",
			alt : "sample image",
			width:'380px',
			height:'300px',
//			width:(config.getDocWidth()-630).toString()+'px',
//			height:((config.getMatrixHeight()/2)-1).toString()+'px'
		}));

		oCarousel.addContent(new sap.ui.commons.Image("IMG3", {
			src : "config/images/icons/3.jpg",
			alt : "sample image",
			width:'380px',
			height:'300px',
//			width:(config.getDocWidth()-630).toString()+'px',
//			height:((config.getMatrixHeight()/2)-1).toString()+'px'
		}));


		return oCarousel;
	},
	
	firstContentForLeftPane:function(){
		return new sap.ui.core.HTML({ 
			content:
				
				'<div  class="homeFirstContent" style="width:99%;">'+
				'<div style="float:left;font-family: Arial,Helvetica,sans-serif;font-size:13px;color:black; margin-top:3%;">Welcome to the Skills Gap Analysis Tool.</div>'+
			'<div style="float:left;font-family: Arial,Helvetica,sans-serif;font-size:13px;color:black; margin-top:3%;">I strongly encourage you to complete this package.  In addition to building our organisation capacity this tool will assist you:</div>'+
			'<div style="float:left;font-family: Arial,Helvetica,sans-serif;font-size:13px;color:black; ">'+
			'<ul>'+
			'<li>identify areas for development; </li>'+
			'<li>identify gaps between your knowledge and experience and the expectations of your current or future role; </li>'+
			'<li>it will support performance discussions; and  </li>'+
			'<li>to build a learning and development plan as part of your development priorities.</li>'+
			'</ul>'+
		'</div>'+
			'<div style="float:left;font-family: Arial,Helvetica,sans-serif;font-size:13px;color:black; ">As the sponsor of the People Job Family, I am committed to ensuring that each individual within this Job Family has the appropriate skills and core competencies to deliver our work today and into the future.<div>'+
			'<div style="width:90%;float:left;font-family: Arial,Helvetica,sans-serif;font-size:13px;color:black;margin-top:4%; ">Thank you for joining me.</div>'+
			'<div style="width:90%;float:left;font-family: Arial,Helvetica,sans-serif;font-size:13px;color:black;margin-top:5%; ">Rebecca Skinner</div>'+
			'<div style="width:90%;float:left;font-family: Arial,Helvetica,sans-serif;font-size:13px;color:black;margin-top:2%; ">Deputy Secretary Defence People </div>'+
			
			'</div>'
				});
	},
	createHomeBottomContent:function(){
		return new sap.ui.core.HTML({ 
			content:
				
			'<div  class="homeBottomContent">'+
			
			'<div style="font-style:italic;font-family: Arial,Helvetica,sans-serif;font-size:15px;text-align:justify;color:#808080;">‘By increasing the training and development opportunities '+
			'(the key components of Professionalisation) for employees within an organisation, the organisation'+
			' benefits from the resultant increased work outputs, knowledge, employee flexibility and workforce '+
			'capability’. </div>'+
			'<div style="float:right;font-family: Arial,Helvetica,sans-serif;font-size:15px;color:#808080;">People Job Family Professionalisation team</div>'+	
			'</div>'
				});	
	},
	

});
