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
import au.com.redbackconsulting.skillsurvey.persistence.model.Dapssco;
import au.com.redbackconsulting.skillsurvey.persistence.model.Function;
import au.com.redbackconsulting.skillsurvey.persistence.model.IDBEntity;
import au.com.redbackconsulting.skillsurvey.persistence.model.Individual;
import au.com.redbackconsulting.skillsurvey.persistence.model.Level;
import au.com.redbackconsulting.skillsurvey.persistence.model.Occupation;

public class DapsscoDAO extends BasicDAO<Dapssco>  {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    protected EntityManagerProvider emProvider;

    public DapsscoDAO() {

    	super(PersistenceManager.getInstance().getEntityManagerProvider());
  }

	@Override
	protected String getidFieldName() {
		// TODO Auto-generated method stub
		return "iddepssco";
	}

	
	public Dapssco getReferenceById(long id){
		
		EntityManager em = super.emProvider.get();
		Dapssco refEntity =em.find(Dapssco.class,	id);
		return refEntity;
		
	}
	
	public Dapssco getByLevelOccuFunc(Level level, Occupation occupation, Function function){
		EntityManager em = super.emProvider.get();
		Dapssco entity = null;
		
		try {
			   TypedQuery<Dapssco> query = em.createNamedQuery(DBQueries.GET_DAPSSCO_BY_LEVEL_OCCUP_FUNC, Dapssco.class); //$NON-NLS-1$ //$NON-NLS-2$
	            
	            query.setParameter("level", level ); //$NON-NLS-1$
	            query.setParameter("occupation", occupation ); //$NON-NLS-1$
	            query.setParameter("function", function);
	            
	            entity = (Dapssco) query.getSingleResult();
		return entity;
		} catch (Exception e) {
		return null;
			// TODO: handle exception
		}
		
	}

	@Override
	public Dapssco saveNew(Dapssco entity) {
		// TODO Auto-generated method stub
		try {
			Level level =entity.getLevelId();
			long levelId = level.getIdlevel();
			
			Occupation occupation = entity.getOccupation();
			long occupationId = occupation.getIdoccupation();
			
			Function function = entity.getFunction();
			long functionId = function.getIdfunction();
			String id = String.valueOf(levelId)+"L"+String.valueOf(occupationId)+"O"+String.valueOf(functionId)+"F";
			entity.setIddepssco(id);
			return super.saveNew(entity);

		} catch (Exception e) {
			return entity;
		}
	}
	
	 
		 
}
