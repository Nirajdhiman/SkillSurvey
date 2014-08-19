<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>


<script type="text/javascript">
function timeout()
{
var agree=confirm("Your online session is about to be timed out. Click OK to continue your current session.");
if (!agree)
 window.location = 'logout.jsp';
setTimeout('timeout()', 5* 60 * 1000);
}
</script>

</head>
<body>
<input type="button" value="Repeat Alert" onclick="timeout()">
</body>
</html>