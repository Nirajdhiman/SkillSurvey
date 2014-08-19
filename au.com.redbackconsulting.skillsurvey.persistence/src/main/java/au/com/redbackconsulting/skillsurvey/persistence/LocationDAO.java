package au.com.redbackconsulting.skillsurvey.persistence;

import au.com.redbackconsulting.skillsurvey.persistence.manager.EntityManagerProvider;
import au.com.redbackconsulting.skillsurvey.persistence.manager.PersistenceManager;
import au.com.redbackconsulting.skillsurvey.persistence.model.Location;

public class LocationDAO extends BasicDAO<Location> {

	
	public LocationDAO(){
		super(PersistenceManager.getInstance().getEntityManagerProvider());

	}

	@Override
	protected String getidFieldName() {
		// TODO Auto-generated method stub
		return "id";
	}

}
