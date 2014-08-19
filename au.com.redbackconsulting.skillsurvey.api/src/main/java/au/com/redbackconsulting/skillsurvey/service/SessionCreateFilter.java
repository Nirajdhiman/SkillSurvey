package au.com.redbackconsulting.skillsurvey.service;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
 



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

//import com.sap.security.um.user.UserProvider;

@SuppressWarnings("nls")
public class SessionCreateFilter implements Filter {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	private static UserLock INSTANCE = UserLock.getInstance();

    private Map<String, Object> userList = new HashMap<>();
    
//@Resource
//private UserProvider userprovider;
	@Override
	public void destroy() {
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		String loggedInUser = httpRequest.getRemoteUser();
logger.info("LOGGEDIN USER NAME IS::" +loggedInUser);

Object userLock = UserLock.getInstance().getUserLock(loggedInUser);
synchronized (userList) {
    Object lock = userList.get(loggedInUser);
    if (lock == null) {
        lock = new Object();
        userList.put(loggedInUser, lock);
    }
		
}  //end syncronized


synchronized (userLock) { // Lock based on user prevents from concurrent
	// // user session initialization
String initialFlag = (String) httpRequest.getSession().getAttribute(SessionListener.INITIAL_FLAG);
if (initialFlag != null) {
logger.info("User '{}' session is initialized.", loggedInUser);
 httpRequest.getSession().removeAttribute(SessionListener.INITIAL_FLAG);
}
}

		//if (loggedInUser != null) {
		//	initUserSession(loggedInUser, httpRequest);
	//	}

		filterChain.doFilter(request, response);
	}

	private void initUserSession(String loggedInUser, HttpServletRequest request) {
		Object userLock = UserLock.getInstance().getUserLock(loggedInUser);
		synchronized (userLock) { // Lock based on user prevents from concurrent
									// // user session initialization
			String initialFlag = (String) request.getSession().getAttribute(SessionListener.INITIAL_FLAG);
			if (initialFlag != null) {
				logger.info("User '{}' session is initialized.", loggedInUser);
			//	UserDAO userDAO = getUserDAO();
			//	User user = initSingleUserProfile(loggedInUser, userDAO, request);
			//	if (request.isUserInRole("Administrator") && user != null) {
		//			initManagedUsers(user, userDAO);
		//		}
				request.getSession().removeAttribute(SessionListener.INITIAL_FLAG);
			}
		}
	}
/*
	private void initManagedUsers(User hrUser, UserDAO userDAO) {
		try {
			List<SFUser> managedSFUsers = CoreODataConnector.getInstance().getManagedEmployees(hrUser.getUserId());
			// Check if users exists in database and create their profiles if it
			// does not
			for (SFUser managedSFUser : managedSFUsers) {
				User appUser = userDAO.getByUserId(managedSFUser.userId);
				if (appUser == null) { // Create new user profile
					appUser = new User();
					managedSFUser.write(appUser);
					appUser.setHrManager(hrUser);
					userDAO.saveNew(appUser);
				} else {
					managedSFUser.write(appUser);
					appUser.setHrManager(hrUser);
					userDAO.save(appUser);
				}
			}
		} catch (IOException e) {
			logger.error("User '{}' managed users could not be obtained from Success Factors.", hrUser.getUserId(), e);
		}

	}

	private UserDAO getUserDAO() {
		return new UserDAO();
	}
*/
/*	private User initSingleUserProfile(String userName, UserDAO userDAO, HttpServletRequest request) {
		
		User user = new  User();
		try {
			com.sap.security.um.user.User umUser = userprovider.getUser(userName);
			String umFName = umUser.getAttribute("firstname");
			String umLName = umUser.getAttribute("lastname");
			String umEmail = umUser.getAttribute("email");
			user.setFirstName(umFName);
			user.setLastName(umLName);
			user.setUserId(userName);
			user.setEmail(umEmail);
			user = userDAO.getOrCreateUser(user);
			SFUser sfUser = CoreODataConnector.getInstance().getUserProfile(userName);
			sfUser.write(user);
			if (sfUser.hr != null) {
				User hrManager = userDAO.getByUserId(sfUser.hr.userId);
				if (hrManager == null) {
					hrManager = new User();
					SFUser sfManager = CoreODataConnector.getInstance().getUserProfile(sfUser.hr.userId);
					sfManager.write(hrManager);
					hrManager = userDAO.saveNew(hrManager);
				}
				user.setHrManager(hrManager);
			}
			userDAO.save(user);
			logger.info("User '{}' updated in database.", userName);
		} catch (IOException e) {
			logger.info("User '{}' could not be extracted from backend.", userName, e);
		} catch (PersistenceException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (UnsupportedUserAttributeException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return user;
	}
*/
	@Override
	public void init(FilterConfig arg0) throws ServletException {
	}

}
