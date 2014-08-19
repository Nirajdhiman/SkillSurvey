<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>


<%

response.setHeader("Cache-Control","no-cache, no-store, must-revalidate, private");
response.setHeader("Pragma","no-cache");
response.setDateHeader ("Expires", 295122600000L);
if (request.getSession(false) == null || !request.isRequestedSessionIdValid()) {
    request.getSession(true);
    response.sendError(HttpServletResponse.SC_FORBIDDEN);
} else {
    request.getSession().getId();
	response.setStatus(HttpServletResponse.SC_OK);
	
	
}



%>

<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

</body>
</html>