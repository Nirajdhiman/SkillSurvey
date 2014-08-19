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
import au.com.redbackconsulting.skillsurvey.persistence.model.IDBEntity;
import au.com.redbackconsulting.skillsurvey.persistence.model.Pathway;

public class PathwayDAO extends BasicDAO<Pathway> {



    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    protected EntityManagerProvider emProvider;

    public PathwayDAO() {
super(PersistenceManager.getInstance().getEntityManagerProvider());
    }

	@Override
	protected String getidFieldName() {
		return "idpathway";
	}

	
	public Pathway getPathwayByName(String name ){
		EntityManager em = super.emProvider.get();
		Pathway entity = null;
		
		try {
			   Query query = em.createQuery("select u from " + "Pathway" + " u where u.name"+" = :name"); //$NON-NLS-1$ //$NON-NLS-2$
	            
	            query.setParameter("name", name); //$NON-NLS-1$
	            entity = (Pathway) query.getSingleResult();
		return entity;
		} catch (Exception e) {
		return null;
			// TODO: handle exception
		}
		
	}
	
	
	public Pathway getReferenceById(long id){
		
		EntityManager em = super.emProvider.get();
		Pathway entity =em.find(Pathway.class, id);
		return entity;
	}

	public List<Pathway> getSelectablePathway() {
		EntityManager em = super.emProvider.get();
		Pathway entity = null;
		boolean name = true;
		try {
			   Query query = em.createQuery("select u from " + "Pathway" + " u where u.selectable"+" = :name"); //$NON-NLS-1$ //$NON-NLS-2$
	            
	            query.setParameter("name", name); //$NON-NLS-1$
	       List<Pathway> result =  query.getResultList();
	       
		return result;
		} catch (Exception e) {
		return null;
			// TODO: handle exception
		}
		
	}
}
