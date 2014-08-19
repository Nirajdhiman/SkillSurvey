package au.com.redbackconsulting.skillsurvey.persistence;

import javax.persistence.EntityManager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import au.com.redbackconsulting.skillsurvey.persistence.manager.EntityManagerProvider;
import au.com.redbackconsulting.skillsurvey.persistence.manager.PersistenceManager;
import au.com.redbackconsulting.skillsurvey.persistence.model.FunctionOccupations;
import au.com.redbackconsulting.skillsurvey.persistence.model.FunctionOccupationspk;

public class FunctionOccupationsDAO extends BasicDAO<FunctionOccupations>  {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    protected EntityManagerProvider emProvider;

    public FunctionOccupationsDAO( ) {
    super(PersistenceManager.getInstance().getEntityManagerProvider());     
    
    }

	@Override
	protected String getidFieldName() {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	public FunctionOccupations getByCompositeId(FunctionOccupationspk pk){
		
		 final EntityManager em = super.emProvider.get();
         FunctionOccupations functionOccupation =  em.find(FunctionOccupations.class,pk);
    return functionOccupation;
		
	}

}
