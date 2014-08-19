package au.com.redbackconsulting.skillsurvey.persistence;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.NonUniqueResultException;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import au.com.redbackconsulting.skillsurvey.persistence.manager.EntityManagerProvider;
import au.com.redbackconsulting.skillsurvey.persistence.manager.PersistenceManager;
import au.com.redbackconsulting.skillsurvey.persistence.model.DBQueries;
import au.com.redbackconsulting.skillsurvey.persistence.model.IDBEntity;
import au.com.redbackconsulting.skillsurvey.persistence.model.Individual;
import au.com.redbackconsulting.skillsurvey.persistence.model.Need;



public class IndividualDAO extends BasicDAO<Individual> {


    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    protected EntityManagerProvider emProvider;

    public IndividualDAO() {
super(PersistenceManager.getInstance().getEntityManagerProvider());
    }

	@Override
	protected String getidFieldName() {
	 
		return "idindividual";
	}

	public Individual getReferenceById(	long id) {
		 
		EntityManager em = super.emProvider.get();
		Individual entity =em.find(Individual.class, id);
		return entity;
	}

public Individual getByLogin(String loginId){
	
	EntityManager em = super.emProvider.get();
	Individual entity = null;
	
	try {
		   Query query = em.createNamedQuery(DBQueries.GET_LOGGED_IN_USER, Individual.class); //$NON-NLS-1$ //$NON-NLS-2$
            
            query.setParameter("name", loginId); //$NON-NLS-1$
            entity = (Individual) query.getSingleResult();
	return entity;
	} catch (Exception e) {
	return null;
		// TODO: handle exception
	}
}

public boolean getProfileUpdateStatus(String loginId){
	EntityManager em = super.emProvider.get();
	Individual entity = null;
	boolean result = true;
	try {
		   TypedQuery<Individual> query = em.createNamedQuery(DBQueries.GET_PROFILE_STATUS, Individual.class); //$NON-NLS-1$ //$NON-NLS-2$
            
            query.setParameter("name", loginId); //$NON-NLS-1$
            entity = (Individual) query.getSingleResult();
	 if(entity!=null) result = false;
	 return result;
	} catch (Exception e) {

	}
	return result;
}

}
