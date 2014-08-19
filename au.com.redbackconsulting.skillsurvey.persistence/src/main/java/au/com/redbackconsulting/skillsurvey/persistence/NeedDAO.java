package au.com.redbackconsulting.skillsurvey.persistence;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import au.com.redbackconsulting.skillsurvey.persistence.manager.EntityManagerProvider;
import au.com.redbackconsulting.skillsurvey.persistence.manager.PersistenceManager;
import au.com.redbackconsulting.skillsurvey.persistence.model.Need;

public class NeedDAO extends BasicDAO<Need> {



    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    protected EntityManagerProvider emProvider;

    public NeedDAO() {
    	super(PersistenceManager.getInstance().getEntityManagerProvider());
    }

	@Override
	protected String getidFieldName() {
		// TODO Auto-generated method stub
		return "idneed";
	}
	
	public Need getNeedByName(String name){
		
		EntityManager em = super.emProvider.get();
		Need entity = null;
		
		try {
			   Query query = em.createQuery("select u from " + "Need" + " u where u.name"+" = :name"); //$NON-NLS-1$ //$NON-NLS-2$
	            
	            query.setParameter("name", name); //$NON-NLS-1$
	            entity = (Need) query.getSingleResult();
		return entity;
		} catch (Exception e) {
		return null;
			// TODO: handle exception
		}
	}


}
