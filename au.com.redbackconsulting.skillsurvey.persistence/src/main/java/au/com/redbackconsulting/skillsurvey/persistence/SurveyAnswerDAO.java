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
import au.com.redbackconsulting.skillsurvey.persistence.model.SurveryAnswer;
import au.com.redbackconsulting.skillsurvey.persistence.model.SurveryAnswerPK;
import au.com.redbackconsulting.skillsurvey.persistence.model.Survey;

public class SurveyAnswerDAO extends BasicDAO<SurveryAnswer>  {




    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    protected EntityManagerProvider emProvider;

    public SurveyAnswerDAO() {
super(PersistenceManager.getInstance().getEntityManagerProvider());
 }

	@Override
	protected String getidFieldName() {
		// TODO Auto-generated method stub
		return null;
	}
	
	public List<SurveryAnswer> getByPrimaryAns(long id){
		List<SurveryAnswer> entitySet;;
		
		EntityManager em =super.emProvider.get();
		try {
			TypedQuery<SurveryAnswer> query = em.createNamedQuery(DBQueries.GET_PRIMARY_ANSWERS, SurveryAnswer.class);
		       
            query.setParameter("surveyid", id ); //$NON-NLS-1$
       
            entitySet = query.getResultList();
			return entitySet;
		} catch (Exception e) {
			return new ArrayList<SurveryAnswer>();
		}
		
	}
	

	public List<SurveryAnswer> getByPrimaryQuestionByAnswerType(long id, String ansValue){
		List<SurveryAnswer> entitySet;;
		
		EntityManager em =super.emProvider.get();
		try {
			TypedQuery<SurveryAnswer> query = em.createNamedQuery(DBQueries.GET_PRIMARY_ANSWERS_BY_ANSWERTYPE, SurveryAnswer.class);
		       
            query.setParameter("surveyid", id ); //$NON-NLS-1$
            query.setParameter("value", ansValue ); 
            entitySet = query.getResultList();
			return entitySet;
		} catch (Exception e) {
			return new ArrayList<SurveryAnswer>();
		}
		
	}
	
	
	
	public List<SurveryAnswer> getBySurveyId(long id){
		List<SurveryAnswer> entitySet;;
		
		EntityManager em =super.emProvider.get();
		try {
			TypedQuery<SurveryAnswer> query = em.createNamedQuery("SurveryAnswer.findBySurveyIdOnly", SurveryAnswer.class);
		       
            query.setParameter("surveyid", id ); //$NON-NLS-1$
             
            entitySet = query.getResultList();
			return entitySet;
		} catch (Exception e) {
			return new ArrayList<SurveryAnswer>();
		}
		
	}
	
	public List<SurveryAnswer> getAllSecondaryById(long id){
		List<SurveryAnswer> entitySet;;
		
		EntityManager em =super.emProvider.get();
		try {
			TypedQuery<SurveryAnswer> query = em.createNamedQuery("SurveryAnswer.findBySurveyIdOnly", SurveryAnswer.class);
		       
            query.setParameter("surveyid", id ); //$NON-NLS-1$
             
            entitySet = query.getResultList();
			return entitySet;
		} catch (Exception e) {
			return new ArrayList<SurveryAnswer>();
		}
		
	}
	
	
	public SurveryAnswer getByPk(String uocQuestionId, long surveyId){
			SurveryAnswerPK pk = new SurveryAnswerPK();
			pk.setUocQuestionId(uocQuestionId);
			pk.setSurveyId(surveyId);
			
			EntityManager em =super.emProvider.get();
			
			try {
				SurveryAnswer entity =em.find(SurveryAnswer.class, pk);
				return entity;				
			} catch (Exception e) {
			return null;			}

	}
	
	public int getByAnswer(long surveyId, String answer){
List<Integer> entitySet;;
		int count=0;
		EntityManager em =super.emProvider.get();
		try {
			TypedQuery<Integer> query = em.createNamedQuery(DBQueries.GET_ANSWER_COUNT, Integer.class);
		       
            query.setParameter("surveyid", surveyId ); //$NON-NLS-1$
            query.setParameter("answerValue", answer.toLowerCase() ); //$NON-NLS-1$
            entitySet = query.getResultList();
			return entitySet.size();
		} catch (Exception e) {
			return count;
		}
		
	}
	
	
}
