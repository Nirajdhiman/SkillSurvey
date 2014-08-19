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

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import au.com.redbackconsulting.skillsurvey.persistence.manager.EntityManagerProvider;
import au.com.redbackconsulting.skillsurvey.persistence.manager.PersistenceManager;
import au.com.redbackconsulting.skillsurvey.persistence.model.Dapssco;
import au.com.redbackconsulting.skillsurvey.persistence.model.IDBEntity;

public class DapsscoDAO extends BasicDAO<Dapssco>  {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    protected EntityManagerProvider emProvider;

    public DapsscoDAO() {

    	super(PersistenceManager.getInstance().getEntityManagerProvider());
  }

	@Override
	protected String getidFieldName() {
		// TODO Auto-generated method stub
		return null;
	}

	
	public Dapssco getReferenceById(long id){
		
		EntityManager em = super.emProvider.get();
		Dapssco refEntity =em.find(Dapssco.class,	id);
		return refEntity;
		
	}
}
