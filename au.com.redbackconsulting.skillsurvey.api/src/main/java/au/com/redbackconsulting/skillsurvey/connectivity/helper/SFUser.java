
package au.com.redbackconsulting.skillsurvey.connectivity.helper;

import com.google.gson.annotations.Expose;

public class SFUser {

	@Expose
	public String firstName;

	@Expose
	public String lastName;

	@Expose
	public String userId;

	@Expose
	public String email;

	@Expose
	public SFUser hr;

	

//	public void write(User user) {
//		user.setUserId(userId);
//		user.setFirstName(firstName);
//		user.setLastName(lastName);
//		user.setEmail(email);
//	}

}
