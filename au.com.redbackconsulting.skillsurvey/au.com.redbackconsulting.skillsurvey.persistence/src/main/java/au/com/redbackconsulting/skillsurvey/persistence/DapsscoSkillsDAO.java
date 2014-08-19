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
import au.com.redbackconsulting.skillsurvey.persistence.model.DapsscoSkills;
import au.com.redbackconsulting.skillsurvey.persistence.model.DapsscoSkillsPk;
import au.com.redbackconsulting.skillsurvey.persistence.model.IDBEntity;
import au.com.redbackconsulting.skillsurvey.persistence.model.SupervisionPK;
import au.com.redbackconsulting.skillsurvey.persistence.model.Supervisons;

public class DapsscoSkillsDAO extends BasicDAO<DapsscoSkills> {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    protected EntityManagerProvider emProvider;

    public DapsscoSkillsDAO( ) {
        super(PersistenceManager.getInstance().getEntityManagerProvider());
    }

	@Override
	protected String getidFieldName() {
		// TODO Auto-generated method stub
		return null;
	}

public DapsscoSkills getByCompositeId(DapsscoSkillsPk pk){
		
		final EntityManager em = super.emProvider.get();
		DapsscoSkills entity =em.find(DapsscoSkills.class,pk);
		
		return entity;
		
		
		
	}
	
	
}
