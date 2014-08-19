
package au.com.redbackconsulting.skillsurvey.api;

import javax.annotation.Resource;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;


public class BaseService {

	protected static final String ADMIN_ROLE = "Administrator";

	@Resource
	protected HttpServletRequest request;

	@Resource
	protected HttpServletResponse response;

	@Resource
	protected ServletContext context;

	//////protected UserDAO userDAO = new UserDAO();

/*s*/
//	protected User getLoggedInUser() {
//		return userDAO.getByUserId(getLoggedInUserId());
//	}

	protected Response createBadRequestResponse(String reponseText) {
		return Response.status(Status.BAD_REQUEST).entity(reponseText).build();
	}

	protected Response createOkResponse() {
		return Response.ok().build();
	}

}
