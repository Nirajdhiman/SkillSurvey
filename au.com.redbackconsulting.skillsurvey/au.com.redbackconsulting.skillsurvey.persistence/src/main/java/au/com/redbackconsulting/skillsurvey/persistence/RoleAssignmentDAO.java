package au.com.redbackconsulting.skillsurvey.persistence;

import javax.persistence.EntityManager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import au.com.redbackconsulting.skillsurvey.persistence.manager.EntityManagerProvider;
import au.com.redbackconsulting.skillsurvey.persistence.manager.PersistenceManager;
import au.com.redbackconsulting.skillsurvey.persistence.model.ClaimAssignments;
import au.com.redbackconsulting.skillsurvey.persistence.model.ClaimAssignmentsPK;
import au.com.redbackconsulting.skillsurvey.persistence.model.RoleAssignment;
import au.com.redbackconsulting.skillsurvey.persistence.model.RoleAssignmentPK;

public class RoleAssignmentDAO  extends BasicDAO<RoleAssignment>{



    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    protected EntityManagerProvider emProvider;

    public RoleAssignmentDAO( ) {super(PersistenceManager.getInstance().getEntityManagerProvider());
    }

	@Override
	protected String getidFieldName() {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	public RoleAssignment getByCompositeId(RoleAssignmentPK pk){
		
		final EntityManager em = super.emProvider.get();
		RoleAssignment entity =em.find(RoleAssignment.class,pk);
		
		return entity;
		
		
		
	}

}
