package au.com.redbackconsulting.skillsurvey.persistence;
 
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import au.com.redbackconsulting.skillsurvey.persistence.manager.EntityManagerProvider;
import au.com.redbackconsulting.skillsurvey.persistence.manager.PersistenceManager;
import au.com.redbackconsulting.skillsurvey.persistence.model.Dapssco;
import au.com.redbackconsulting.skillsurvey.persistence.model.Individual;
import au.com.redbackconsulting.skillsurvey.persistence.model.Need;
import au.com.redbackconsulting.skillsurvey.persistence.model.Survey;

public class SurveyDAO extends BasicDAO<Survey> {



    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    protected EntityManagerProvider emProvider;

    public SurveyDAO( ) {
        super(PersistenceManager.getInstance().getEntityManagerProvider());
    }

	@Override
	protected String getidFieldName() {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	public Survey	getSurveyByPathwayofIndividual(Individual individual, Need need, Dapssco dapssco){
 	
		EntityManager em = super.emProvider.get();
		
		Survey entity = null;
		logger.info("Adding values");
		
		
		try {
			TypedQuery<Survey> query = em.createNamedQuery("Survey.findBy.Individual.dapsco.pathway", Survey.class);
			       
	            query.setParameter("individual", individual ); //$NON-NLS-1$
	            query.setParameter("need", need );
	            query.setMaxResults(1);
	            query.setParameter("dapssco", dapssco );
	            
	            entity = (Survey) query.getSingleResult();
	            refresh(entity);
		return entity;
		} catch (Exception e) {
		return null;
			// TODO: handle exception
		}
	}
 }
