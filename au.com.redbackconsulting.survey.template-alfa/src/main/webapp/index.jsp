<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
  <script  src="config/js/Report.js"></script>
         <script  src="config/js/Style.js"></script>
<script src="resources/sap-ui-core.js" id="sap-ui-bootstrap"
	data-sap-ui-libs="sap.m, sap.ui.commons ,sap.ui.unified,sap.ui.ux3, sap.ui.core,sap.ui.table"
	data-sap-ui-theme="sap_goldreflection">
	
</script>
<!-- only load the mobile lib "sap.m" and the "sap_mvi" theme -->
<script>
	sap.ui.localResources("survey-template");
	var app = new sap.m.App({
		initialPage : "idapp1"
	});
	var page = sap.ui.view({
		id : "idapp1",
		viewName : "survey-template.App",
		type : sap.ui.core.mvc.ViewType.JS
	});
	app.addPage(page);
	app.placeAt("content");
</script>
<style type="text/css">
.surveyPathwayButtonMandatoryBar{
padding-top:4px;
background-image: url('config/images/Mandatory.png');
	background-size: 100% 86%;
	background-repeat: no-repeat;
	border:0px;
   
	
}
.no{
margin-left:5px;
text-align: center;
}
.surveyPathwayButtonHDesirableBar{
padding-top:4px;
background-image: url('config/images/HDesirable.png');
	background-size: 100% 86%;
	background-repeat: no-repeat;
	border:0px;
	background-color:transparent;
}
.surveyPathwayButtonDesirableBar{
padding-top:4px;
background-image: url('config/images/Desirable.png');
	background-size: 100% 86%;
	background-repeat: no-repeat;
	border:0px;
	background-color:transparent;
}
.sapUiTreeFixedHeight .sapUiTreeCont {
width: 150px;
position: absolute;
left: 0;
right: 0;
bottom: 0;
}
.matrix{
margin-top:0px;
 border:1px grey solid;
 height:100%;
}
.reportContainerDiv{
width:95%;
overflow-x:scroll;
height:96%;
}
.sapUiUx3ShellCanvas {
position: absolute;
left: 40px;
right: 40px;
top: 98px;
padding: 24px 0px 2px 0px;
min-width: 96px;
background-color: #f2f2f2;
z-index: 1;
overflow-x: auto;
overflow-y: hidden;
}
.left{
width:15%;
	border:1px grey solid;
}
.footerBtn{
 color:white;
}
.footer{
background-image: url('config/images/footer.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	border:0px;
	background-color:transparent;
}
body{
 overflow:scroll;
}
/*** neeraj css code ************/
.surveyTemplateQuestionTableRowRepeator{
  margin-top:0px;
  height:254px;
  width:100%;
}
.tblbg{
 	border:1px green solid;
 
}
.oLayout{
			width:90%;
		margin-left:4px;
		}
		
		
		
		.lbl1{
		color: white;
		font-family: Calibri;
		font-size: 0.900rem;
		}
		.lbl2{
		color: black;
		margin-left: 2px;
		font-family: Calibri;
		font-size: 0.900rem;
		}
		
		.surveyTemplateUserProfileLabelCell{
		width:370px;
		background-color: #4F81BD;
 		border:2px #A7C0DE solid;
 		color:white;
		}
		.surveyTemplateCommonPathwayMatrixHeader{
		width:370px;
		background-color: #4F81BD;
 		/*border:2px #A7C0DE solid;*/
		}
		
		.surveyTemplateCommonPathwayMatrixQuestions{
		width:660px;
		background-color:#D0D8E8 ;
		border:2px white solid;
		
		}
		.surveyTemplateUserProfileTextCell{
		background-color:#D0D8E8 ;
		border:1px white solid;
		}
		.surveyTemplateCommonPathwayMatrixResponseCell{
		width:75px;
		background-color:#D0D8E8 ;
		border:2px white solid;
		}
		.surveyTemplateCommonPathwayMatrixResponseCell_B{
		width:50px;
		background-color:#D0D8E8 ;
		border:2px white solid;
		}
		.surveyTemplateCommonPathwayMatrixQuestionCell{
		width:660px;
		background-color:#4F81BD ;
		border:2px white solid;
		}
		
		.surveyTemplateCommonPathwayMatrixResponseHeaderCell{
		width:150px;
		background-color:#4F81BD ;
		border:2px white solid;
		}
		.surveyTemplateCommonPathwayMatrixLabel{
		color: white;
		font-family: Calibri;
		font-size: 1.00rem;
		}

.surveyTemplateUserProfileMatrix{
 margin-top:6px;
 
}
/* .matrix{ */
/*   border:1px grey solid; */
/* } */
/* .logo{ */
/* height:100px; */
/*  background-image: url('config/images/logo.png'); */
/*  background-size: 100% 100%; */
/*  background-repeat: no-repeate; */
/* } */
/* .sapUiUfdShell .sapUiUfdShellHead { */
/* background-color:black; */
/* height: 30px; */

/* } */
/* .sapUiUfdShellCanvas { */
/* top: 36px; */
/* } */
/* .sapUiUfdShellHead>div>.sapUiUfdShellCntnt>* { */
/* display: inline-block; */
/* position: absolute; */
/* top: 0; */
/* bottom: 0; */
/* overflow: hidden; */
/* height: 30px; */

/* width: 70%; */
/* } */
/* .sapUiUfdShellHeadEnd { */
/* right: 0; */
/* max-width: 250px; */
/* white-space: nowrap; */

/* } */


/* .sapUiUfdShellHead>div>.sapUiUfdShellCntnt>* { */
/* display: inline-block; */
/* position: absolute; */
/* top: 0; */
/* bottom: 0; */
/* overflow: hidden; */
/* height: 30px; */
/* } */
/* .sapUiUfdShellHeadEnd .sapUiUfdShellHeadItm { */
/* /* border-left: 1px solid #808080; */ */
/* height: 26px; */
/* margin: 2px auto; */
/* border: 1px grey solid; */
/* margin-left: 2px; */
/* padding: 2px auto; */
/* } */
/* .sapUiUfdShellBrand { */
/* background-color: black; */
/* } */
/* .sapUiUfdShellBrand { */
/* position: absolute; */
/* top: 0; */
/* height: 0px; */
/* left: 0; */
/* right: 0; */
/* border: medium none; */
/* margin: 0; */
/* z-index: 7; */
/* } */

/* .sapUiUfdShellHeadItm { */
/* width: 30px; */
/* height: 30px; */
/* display: inline-block; */
/* text-decoration: none; */
/* vertical-align: bottom; */
/* overflow: hidden; */
/* position: relative; */
/* margin-right: 2px; */
/* } */

/* .sapUiUfdShellHeadItm>span { */
/* width: 20px; */
/* height: 20px; */
/* margin: 4px auto; */
/* margin-left: 5px; */
/* display: inline-block; */
/* font-weight: normal; */
/* line-height: 20px; */
/* text-align: center; */
/* font-size: 15px; */
/* } */
/* .surveySurveyMatrix{ */
/*  margin-left:3px; */
/*  margin-top:2px; */
/*  border:1px solid; */

/* } */

/* .surveyTemplateQuestionTableRowRepeator{ */
/*  margin-top:-6px; */
/*  height:254px; */
/*  width:100%; */
/* } */

/* .surveyTemplateCommonPathwayMatrixLabel{ */
/*  color: white; */
/*  font-family: Calibri; */
/*  font-size: 1rem; */
/*  } */


/* .surveyTemplateCommonPathwayMatrixHeader{ */
/*  width:370px; */
/*  background-color: #4F81BD; */

/*  } */

/* .surveyTemplateCommonPathwayMatrixQuestionCell{ */
/*  width:660px; */
/*  background-color:#4F81BD ; */
/*  border:2px white solid; */
/*  } */


/* .surveyTemplateCommonPathwayMatrixResponseHeaderCell{ */
/*  width:150px; */
/*  background-color:#4F81BD ; */
/*  border:2px white solid; */
/*  } */

/* .surveyTemplateCommonPathwayMatrixLabel{ */
/*  color: white; */
/*  font-family: Calibri; */
/*  font-size: 1rem; */
/*  } */

/* .surveyTemplateCommonPathwayMatrixQuestions{ */
/*  width:660px; */
/*  background-color:#D0D8E8 ; */
/*  border:2px white solid; */

/*  } */


/* .surveyTemplateCommonPathwayMatrixResponseCell{ */
/*  width:75px; */
/*  background-color:#D0D8E8 ; */
/*  border:2px white solid; */
/*  } */

/* .surveyPathwayButtonMandatoryBar{ */
/* padding-top:4px; */
/* background-image: url('../images/mandatory.png'); */
/*  background-size: 100% 86%; */
/*  background-repeat: no-repeat; */
/*  border:0px; */
/* } */

 

/* .surveyContinueButtonContainer{ */
/*  padding-right:30px; */
/* } */
</style>
</head>
<body class="sapUiBody" role="application">
	<div id="content"></div>
	</body>
</html>
