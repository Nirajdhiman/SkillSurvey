package au.com.redbackconsulting.skillsurvey.persistence;

import java.util.List;

import javax.persistence.EntityManager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import au.com.redbackconsulting.skillsurvey.persistence.manager.PersistenceManager;
import au.com.redbackconsulting.skillsurvey.persistence.model.Dapssco;
import au.com.redbackconsulting.skillsurvey.persistence.model.Level; 

public class LevelDAO extends BasicDAO<Level>  {


    private final Logger logger = LoggerFactory.getLogger(this.getClass());



    public LevelDAO() {
    	super(PersistenceManager.getInstance().getEntityManagerProvider());

    
    }



	@Override
	protected String getidFieldName() {		
		return "idlevel";
	}



    public List<Dapssco> getDapsscosByLevelId(long id){
    	Level level =super.getById(id);
    	List<Dapssco> dapsscos =level.getDapsscos();
    	return dapsscos;
    	
    }
    
public Level getReferenceById(long id){
		
		EntityManager em = super.emProvider.get();
		Level entity =em.find(Level.class, id);
		return entity;
	}

}
