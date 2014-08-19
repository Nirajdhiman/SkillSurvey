
var GenerateQuickView = function(){
	this.linkUrl ='';
	this.setLinkURL=function(url){
		this.linkUrl=url;
	};
	this.getLinkURL=function(){
		return this.linkUrl;
	};
	this.loadModel=function(uocId,modelId,type){
		debugger;
		var jdata = sap.ui.getCore().getModel(modelId).oData.courseItems;
		var oData = { };
		for(var jd in jdata){
			if(jdata[jd].id==uocId){
				//this.setLinkURL(jdata[jd].provider.courseURL+'='+uocId);
				oData.type = type;
				oData.name=jdata[jd].name;
				oData.courseId = uocId;
				oData.description =jdata[jd].description;
				break;
				}
		}
	
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData(oData,false);
			sap.ui.getCore().setModel(oModel,"quick");

	};
	
	this.onNavigate=function(event){
		alert("Navigate event with the reference to: " + event.getParameter("href"));
		// Supress link navigation from a QuickView
		event.preventDefault();
		// Close the QuickView after a click on a link
		event.getSource().close();
	};
    this.createQuickView=function(type,uocId,modelId){
    	this.loadModel(uocId,modelId,type);
    	var oQuickView = new sap.ui.ux3.QuickView({
    		type:			"{quick>type}",
    		firstTitle:		"{quick>name}",
    		//firstTitleHref:	"{href}",
    		//secondTitle:	"{description}",
    		icon:			"config/images/course.png",
    		content:		createQuickViewContent(),
    		navigate:		this.onNavigate,
    		updateActionEnabled : false,
    			followActionEnabled : false,
    			flagActionEnabled :false,
    			favoriteActionEnabled :false,
    			openActionEnabled :true,
    			actionSelected :function(event){
    			//	window.open("http://google.com");
    			   alert(generateQV.getLinkURL());
    			}
    	})
    		.bindContext("quick>/"); // select the first item in the "items" array
    	return oQuickView;
    };
};
function createQuickViewContent(){
	debugger;
	var c = sap.ui.commons.layout;
	var oContent = new c.MatrixLayout({layoutFixed:false,width:"250px"});
	var oRow = new c.MatrixLayoutRow();
	
	oRow.addCell( new c.MatrixLayoutCell({
		hAlign : "Center",
		vAlign : c.VAlign.Top,
		width:"20px",
		content:[ new sap.ui.commons.TextView({text:"Course Id:"})
		]
	}));
	oRow.addCell( new c.MatrixLayoutCell({
		hAlign : "Left",
		width:"230px",
		vAlign : c.VAlign.Top,
		content:[ new sap.ui.commons.TextView({text:"{quick>/courseId}"}).addStyleClass("qvDescriptionType")
		]}));
	oContent.addRow(oRow);
	
	var oRow = new c.MatrixLayoutRow();
	oRow.addCell( new c.MatrixLayoutCell({
		hAlign : "Left",
		vAlign : c.VAlign.Top,
		width:"250px",
		content:[ new sap.ui.commons.TextView({text:"Description :"})
		]}).setColSpan(2));
	
	oContent.addRow(oRow);
	var oRow = new c.MatrixLayoutRow();
	oRow.addCell( new c.MatrixLayoutCell({
		hAlign : "Left",
		width:"250px",
		vAlign : c.VAlign.Top,
		content:[ new sap.ui.commons.TextView({text:"{quick>/description}",width:"250px"}).addStyleClass("qvDescription")
		]}).setColSpan(2));
	oContent.addRow(oRow);
	
	return oContent;
};

var SurveyAppConstants = function (){
	this._USER_MANAGEMENT_EDIT_BUTTON_ID="user-manament-button-edit";
	this._USER_MANAGEMENT_CANCEL_BUTTON_ID="user-management-button-cancel";
	this._USER_MANAGEMENT_SAVE_BUTTON_ID="user-management-button-save";
	this._USER_MANAGEMENT_THINGINSPECTOR_ID ="user-management-thing-inspector";
	this._USER_MANAGEMENT_THING_GROUP_ID="user-management-thing-group";
	this._USER_MANAGEMENT_CREATE_PROFILE_OVERLAY_ID="userManagementCreateProfileOverlay";
	this._SURVEY_MANDATORY_MODEL_TRANS = "MandatoryTrans";
	this._SURVEY_SUPERVISOR_MODEL_TRANS ="SupervisorTrans";
	this._PROPS_RPL_QUESTION_TYPE_TEXT="rplQuestionMessage";
	this._PROPS_RPL_SAVE_EXCEPTION_MESSAGE_TEXT ="rplSaveExceptionMessage";
};