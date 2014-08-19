package au.com.redbackconsulting.skillsurvey.persistence;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import au.com.redbackconsulting.skillsurvey.persistence.manager.EntityManagerProvider;
import au.com.redbackconsulting.skillsurvey.persistence.manager.PersistenceManager;
import au.com.redbackconsulting.skillsurvey.persistence.model.DBQueries;
import au.com.redbackconsulting.skillsurvey.persistence.model.Dapssco;
import au.com.redbackconsulting.skillsurvey.persistence.model.Function; 

public class FunctionDAO  extends BasicDAO<Function>  {

    @Override
	public Function getById(long id) {
    	EntityManager em = super.emProvider.get();
		Function entity = null;
		
		try {
			   TypedQuery<Function> query = em.createNamedQuery(DBQueries.GET_FUNCTION_BY_ID, Function.class); //$NON-NLS-1$ //$NON-NLS-2$
	            
	            query.setParameter("id", id ); //$NON-NLS-1$
	            
	            entity = (Function) query.getSingleResult();
		return entity;
		} catch (Exception e) {
		return null;
			// TODO: handle exception
		}
	}
    
    
    
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

    protected EntityManagerProvider emProvider;

    public FunctionDAO() {
    	super(PersistenceManager.getInstance().getEntityManagerProvider());

    }


    
public Function getReferenceById(long id){
		
		EntityManager em = super.emProvider.get();
		Function entity =em.find(Function.class, id);
		return entity;
	}

	@Override
	protected String getidFieldName() {
		
		return "idfunction";
	}

   

	
  

  
}
