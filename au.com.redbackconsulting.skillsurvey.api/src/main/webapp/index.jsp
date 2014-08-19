<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
  <script  src="config/js/Report.js"></script>
         <script  src="config/js/Style.js"></script>
          <script  src="config/js/Config.js"></script>
          <script  src="config/js/Utility.js"></script>
            <script  src="config/js/SkillsRecognition.js"></script>
             <script  src="config/js/SkillsCompetencyGap.js"></script>
               <script  src="config/js/HelpAssistance.js"></script>
<script src="resources/sap-ui-core.js" id="sap-ui-bootstrap"
	data-sap-ui-libs="sap.m, sap.ui.commons ,sap.ui.unified,sap.ui.ux3,sap.ui.layout, sap.ui.core,sap.ui.table"
	data-sap-ui-theme="sap_goldreflection">
	//
</script>
<link rel="stylesheet" type="text/css" href="config/css/index.css">
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

</head>
<body class="sapUiBody" role="application">
	<div id="content"></div>
	<div class="footerBar" id="footerBar"></div>
	</body>
</html>
