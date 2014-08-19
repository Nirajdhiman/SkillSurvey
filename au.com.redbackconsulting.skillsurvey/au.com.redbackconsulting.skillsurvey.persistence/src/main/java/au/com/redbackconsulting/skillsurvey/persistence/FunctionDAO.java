package au.com.redbackconsulting.skillsurvey.persistence;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.EntityManager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import au.com.redbackconsulting.skillsurvey.persistence.manager.EntityManagerProvider;
import au.com.redbackconsulting.skillsurvey.persistence.manager.PersistenceManager;
import au.com.redbackconsulting.skillsurvey.persistence.model.Function;

public class FunctionDAO  extends BasicDAO<Function>  {

    @Override
	public Function getById(long id) {
    	 final EntityManager em = emProvider.get();
       Function function =  em.find(Function.class,id);
         return function;
    	
	}
    
    
    
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

    protected EntityManagerProvider emProvider;

    public FunctionDAO() {
    	super(PersistenceManager.getInstance().getEntityManagerProvider());

    }



	@Override
	protected String getidFieldName() {
		
		return "idfunction";
	}

   

	
	
    
//    public Function getReferencId (long id){
//    	 final EntityManager em = super.emProvider.get();
//         Function function =  em.getReference(Function.class,id);
//           return function;
//      	
//    	
//    }

    
    

  
}
