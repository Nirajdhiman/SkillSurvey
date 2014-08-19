package au.com.redbackconsulting.skillsurvey.persistence;
 
import au.com.redbackconsulting.skillsurvey.persistence.manager.PersistenceManager;
import au.com.redbackconsulting.skillsurvey.persistence.model.UserType;

public class UserTypeDAO extends BasicDAO<UserType> {

	public UserTypeDAO() {
		super(PersistenceManager.getInstance().getEntityManagerProvider());
		 
	}

	@Override
	protected String getidFieldName() {
		// TODO Auto-generated method stub
		return "id";
	}

}
