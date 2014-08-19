<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />


<link href="css/style.css" type="text/css" rel="stylesheet"> </link>
	
<script src="resources/sap-ui-core.js" id="sap-ui-bootstrap"
	data-sap-ui-libs="sap.m, sap.ui.commons ,sap.ui.ux3, sap.ui.core,sap.ui.table, sap.suite.ui.commons"
	data-sap-ui-theme="sap_bluecrystal">
	
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
 

</head>
<body class="sapUiBody" role="application">
	<div id="content"></div>
</body>
</html>