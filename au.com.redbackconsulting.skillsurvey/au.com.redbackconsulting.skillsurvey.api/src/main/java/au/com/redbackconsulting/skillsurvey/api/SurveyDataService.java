package au.com.redbackconsulting.skillsurvey.api;

import java.sql.Date;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import au.com.redbackconsulting.skillsurvey.api.bean.DapsscoBean;
import au.com.redbackconsulting.skillsurvey.api.bean.IndividualBean;
import au.com.redbackconsulting.skillsurvey.api.bean.NeedBean;
import au.com.redbackconsulting.skillsurvey.api.bean.PathwayBean;
import au.com.redbackconsulting.skillsurvey.api.bean.QuestionBean;
import au.com.redbackconsulting.skillsurvey.api.bean.UocQuestionBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.NeedSurveyBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.PathwaySurveyBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.QuestionSurveyBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.SelectablePathwaySurveyBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.SurveyDataBean;
import au.com.redbackconsulting.skillsurvey.persistence.DapsscoDAO;
import au.com.redbackconsulting.skillsurvey.persistence.FunctionDAO;
import au.com.redbackconsulting.skillsurvey.persistence.IndividualDAO;
import au.com.redbackconsulting.skillsurvey.persistence.LevelDAO;
import au.com.redbackconsulting.skillsurvey.persistence.NeedDAO;
import au.com.redbackconsulting.skillsurvey.persistence.PathwayDAO;
import au.com.redbackconsulting.skillsurvey.persistence.SurveyDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.Dapssco;
import au.com.redbackconsulting.skillsurvey.persistence.model.Function;
import au.com.redbackconsulting.skillsurvey.persistence.model.Individual;
import au.com.redbackconsulting.skillsurvey.persistence.model.Level;
import au.com.redbackconsulting.skillsurvey.persistence.model.Need;
import au.com.redbackconsulting.skillsurvey.persistence.model.Occupation;
import au.com.redbackconsulting.skillsurvey.persistence.model.Pathway;
import au.com.redbackconsulting.skillsurvey.persistence.model.Question;
import au.com.redbackconsulting.skillsurvey.persistence.model.Survey;
import au.com.redbackconsulting.skillsurvey.persistence.model.Uoc;
import au.com.redbackconsulting.skillsurvey.persistence.model.UocGroup;
import au.com.redbackconsulting.skillsurvey.persistence.model.UocQuestion;

@Path("/surveydata")
public class SurveyDataService extends BaseService {
	 private final Logger logger = LoggerFactory.getLogger(this.getClass());

	public void getSurvey(long individualid) {

	}

	public void addNewSurvey(@FormParam("completedat") String completedAt,
			@FormParam("dapssco") String dapssco,
			@FormParam("individual") String individual,
			@FormParam("pathway") String pathway,
			@FormParam("startedat") String startedAt) {

		DapsscoDAO dapsscoDao = new DapsscoDAO();
		Dapssco refDapsscoEntituy = dapsscoDao.getReferenceById(Long
				.parseLong(dapssco));

		IndividualDAO individualDAO = new IndividualDAO();
		Individual refIndividualEntity = individualDAO.getReferenceById(Long
				.parseLong(individual));

		PathwayDAO pathwayDAO = new PathwayDAO();
		Pathway refPathwayEntity = pathwayDAO.getReferenceById(Long
				.parseLong(pathway));

		SurveyDAO dao = new SurveyDAO();
		Survey entity = new Survey();
		entity.setDapssco(refDapsscoEntituy);
		entity.setPathway(refPathwayEntity);
		entity.setIndividual(refIndividualEntity);

		dao.save(entity);
	}

//	@Path("/dapssco")
//	@Consumes(MediaType.APPLICATION_JSON)
//	@Produces(MediaType.APPLICATION_JSON)
//	public List<DapsscoBean> getDapssco(@FormParam("levelid") String levelId,
//			@FormParam("occupationid") String occupationId) {
//		long occupationidLong = Long.parseLong(occupationId);
//		LevelDAO levelDAO = new LevelDAO();
//		List<DapsscoBean> result = new ArrayList<DapsscoBean>();
//		List<Dapssco> dapsscos = levelDAO.getDapsscosByLevelId(Long
//				.parseLong(levelId));
//		for (Dapssco dapssco : dapsscos) {
//			if (dapssco.getOccupation().getIdoccupation() == occupationidLong) {
//				DapsscoBean bean = DapsscoBean.get(dapssco);
//				result.add(bean);
//			}
//		}
//		return result;
//	}
	
	@GET
	@Path("/selectablepathways")
	@Produces(MediaType.APPLICATION_JSON)
	public List<SelectablePathwaySurveyBean> getSelectablePathway(){
		List<SelectablePathwaySurveyBean> beans = new ArrayList<SelectablePathwaySurveyBean>();
		PathwayDAO pathwayDao = new PathwayDAO();
		List<Pathway> selectablePathways =pathwayDao.getSelectablePathway();
		for (Pathway pathway : selectablePathways) {
			SelectablePathwaySurveyBean bean = new SelectablePathwaySurveyBean();
			bean.setDescription(pathway.getDescription());
			bean.setId(pathway.getIdpathway());
			bean.setName(pathway.getName());
			beans.add(bean);
		}
		
		return beans;
	}
	
	
	private SurveyDataBean getSurveyDataByPathway(String loginId, String pathwayName ){
		SurveyDataBean bean = new SurveyDataBean();

		IndividualDAO individualDao = new IndividualDAO();
		Individual individualEntitity = individualDao.getByLogin(loginId);
		long levelId= individualEntitity.getLevel().getIdlevel();
		long occupationId = individualEntitity.getOccupation().getIdoccupation();
		IndividualBean individualBean = IndividualBean.get(individualEntitity);
		bean.setIndividual(individualBean);
		
		PathwayDAO pathwayDao = new PathwayDAO();
		Pathway pathwayEntity = pathwayDao.getPathwayByName(pathwayName);
		
		PathwaySurveyBean pathwaySurveyBean =new PathwaySurveyBean(); 
		
		pathwaySurveyBean.setDescription(pathwayEntity.getDescription());
		pathwaySurveyBean.setId(pathwayEntity.getIdpathway());
		pathwaySurveyBean.setName(pathwayEntity.getName());
		bean.setPathway(pathwaySurveyBean);
	
		
		// First get UocGroup data through pathway
		List<UocGroup> pathwayUocGroups = getUOCGroupViaPathway(pathwayEntity);
		bean.setSizePathwayUocGroups(pathwayUocGroups.size());
	
		
//		bean.setSizePathwayUocGroups(individualEntitity.getLevel().getDapsscos().size());
//		
		// Second get UocGroup data through level, occupation and function
		List<UocGroup> levelOccupationUocGroups =	getUocGroupViaLevelandOccupation(individualEntitity);
		 levelOccupationUocGroups = getUOCGroup(pathwayName, levelOccupationUocGroups);
		bean.setSizeoccupationLevelUocGroups(levelOccupationUocGroups.size());
		
		
		List<UocGroup> intersectUocGroups = getIntersectUOCGroups(pathwayUocGroups, levelOccupationUocGroups);
		bean.setSizeIntersectUocGroups(intersectUocGroups.size());
	

		//List<UocGroup> resultUocGroups = getUOCGroup("Mandatory", uocGroups);
					
		HashMap<Need, List<UocGroup>> needKeyHashMapofUOCGroupMap = getNeedKeyHashMapofUOCGroup(pathwayUocGroups);
			HashMap<Need, List<UocGroup>> needUOCGroupMap = populateUocGroupsinHashMap(intersectUocGroups, needKeyHashMapofUOCGroupMap);

			HashMap<Need, List<Question>> needQuestionMap = getQuestionMap(needUOCGroupMap);
			
			List<NeedSurveyBean> needSurveyBeans = getNeedSurveyBean(needQuestionMap);
			pathwaySurveyBean.setNeeds(needSurveyBeans);
			
			
	//	bean.setSizePathwayUocGroups(individualEntitity.getLevel().getDapsscos().size());
	 		return bean;

	}

 


	@POST
	@Path("/pathway/{loginid}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public SurveyDataBean getSelectedPathway(@PathParam("loginid" ) String loginid,
											@FormParam("pathwayname") String pathwayName){
		
		return getSurveyDataByPathway(loginid, pathwayName);
	}
	
	
	@GET
	@Path("/mandatory/{loginid}")
	@Produces(MediaType.APPLICATION_JSON)
	public SurveyDataBean getManaged1(@PathParam("loginid") String loginId) {
		SurveyDataBean bean = new SurveyDataBean();

		IndividualDAO individualDao = new IndividualDAO();
		Individual individualEntitity = individualDao.getByLogin(loginId);
		long levelId= individualEntitity.getLevel().getIdlevel();
		long occupationId = individualEntitity.getOccupation().getIdoccupation();
		IndividualBean individualBean = IndividualBean.get(individualEntitity);
		bean.setIndividual(individualBean);
		
		PathwayDAO pathwayDao = new PathwayDAO();
		Pathway pathwayEntity = pathwayDao.getPathwayByName("Mandatory");
		
		PathwaySurveyBean pathwaySurveyBean =new PathwaySurveyBean(); 
		
		pathwaySurveyBean.setDescription(pathwayEntity.getDescription());
		pathwaySurveyBean.setId(pathwayEntity.getIdpathway());
		pathwaySurveyBean.setName(pathwayEntity.getName());
		bean.setPathway(pathwaySurveyBean);
	
		
		// First get UocGroup data through pathway
		List<UocGroup> pathwayUocGroups = getUOCGroupViaPathway(pathwayEntity);
		bean.setSizePathwayUocGroups(pathwayUocGroups.size());
	
		
		bean.setSizePathwayUocGroups(individualEntitity.getLevel().getDapsscos().size());
		
		// Second get UocGroup data through level, occupation and function
		List<UocGroup> levelOccupationUocGroups =	getUocGroupViaLevelandOccupation(individualEntitity);
		 levelOccupationUocGroups = getUOCGroup("Mandatory", levelOccupationUocGroups);
		bean.setSizeoccupationLevelUocGroups(levelOccupationUocGroups.size());
		
		
		List<UocGroup> intersectUocGroups = getIntersectUOCGroups(pathwayUocGroups, levelOccupationUocGroups);
		bean.setSizeIntersectUocGroups(intersectUocGroups.size());
	

		//List<UocGroup> resultUocGroups = getUOCGroup("Mandatory", uocGroups);
					
		HashMap<Need, List<UocGroup>> needKeyHashMapofUOCGroupMap = getNeedKeyHashMapofUOCGroup(pathwayUocGroups);
			HashMap<Need, List<UocGroup>> needUOCGroupMap = populateUocGroupsinHashMap(intersectUocGroups, needKeyHashMapofUOCGroupMap);

			HashMap<Need, List<Question>> needQuestionMap = getQuestionMap(needUOCGroupMap);
			
			List<NeedSurveyBean> needSurveyBeans = getNeedSurveyBean(needQuestionMap);
			pathwaySurveyBean.setNeeds(needSurveyBeans);
			
			
		bean.setSizePathwayUocGroups(individualEntitity.getLevel().getDapsscos().size());
	 		return bean;

	}

private HashMap<Need, List<UocGroup>> getNeedKeyHashMapofUOCGroup(
			List<UocGroup> pathwayUocGroups) {
		
	HashMap<Need, List<UocGroup>> hashMap = new HashMap<Need, List<UocGroup>>();
	
	for (UocGroup uocGroup : pathwayUocGroups) {
		Need need = uocGroup.getNeed();
		List<UocGroup> collection = new ArrayList<UocGroup>();
		hashMap.put(need, collection);
	}
		return hashMap;
	}



	private List<UocGroup> getUOCGroup(String pathaway,
			List<UocGroup> levelOccupationUocGroups) {
		List<UocGroup> uocGroups = new ArrayList<>();
		for (UocGroup uocGroup : levelOccupationUocGroups) {
			if(uocGroup.getPathway().getName().equals(pathaway)){
				uocGroups.add(uocGroup);
			}
		}
		return uocGroups;
	}

	private List<NeedSurveyBean> getNeedSurveyBean(
			HashMap<Need, List<Question>> needQuestionMap) {
		List<NeedSurveyBean> beans = new ArrayList<NeedSurveyBean>();
	
		Set<Need> needSet =needQuestionMap.keySet();
		for (Iterator iterator = needSet.iterator(); iterator.hasNext();) {
			Need need = (Need) iterator.next();
			NeedSurveyBean needSurveyBean = new NeedSurveyBean();
			beans.add(needSurveyBean);
			needSurveyBean.setDescription(need.getDescription());
			needSurveyBean.setId(need.getIdneed());
			needSurveyBean.setName(need.getName());
			
			List<Question> questions = needQuestionMap.get(need);
			List<QuestionSurveyBean> questionSurveyBeans = new ArrayList<QuestionSurveyBean>();
			needSurveyBean.setQuestions(questionSurveyBeans);
			for (Question question : questions) {
				QuestionSurveyBean questionSurveyBean = new QuestionSurveyBean();
				questionSurveyBean.setId(question.getIdquestion());
				questionSurveyBean.setStyle(question.getStyle());
				questionSurveyBean.setQuestion(question.getText());
			questionSurveyBeans.add(questionSurveyBean);
				
			}
			
			
		}
		return beans;
	}

	private HashMap<Need, List<Question>> getQuestionMap(
			HashMap<Need, List<UocGroup>> needUOCGroupMap) {
		HashMap<Need, List<Question>> needQuestionMap = new HashMap<Need, List<Question>>();
		Set<Need> needSet =needUOCGroupMap.keySet();
		for (Need need : needSet) {
			List<UocGroup> uocGroups = needUOCGroupMap.get(need);
			
			List<Question> questions = new ArrayList<Question>();
			needQuestionMap.put(need, questions);
			for (UocGroup uocgroup : uocGroups) {
			List<Uoc> uocs =	uocgroup.getUocs();
				for (Uoc uoc : uocs) {
					List<UocQuestion> uocQuestions =uoc.getUocQuestions();
					for (UocQuestion uocQuestion : uocQuestions) {
						Question question =uocQuestion.getQuestion();
						questions.add(question);
						
					}
				}
			}
			
		}
		return needQuestionMap;
	}

	private HashMap<Need, List<UocGroup>> populateUocGroupsinHashMap(
			List<UocGroup> inputuocGroups, HashMap<Need, List<UocGroup>> result ) {
		
		for (UocGroup uocGroup : inputuocGroups) {
			Need needKey = uocGroup.getNeed();
			
			List<UocGroup> uocGroups =result.get(needKey);
			uocGroups.add(uocGroup);
			
			
		}
		return result;
	}

	private List<UocGroup> getIntersectUOCGroups(
			List<UocGroup> pathwayUocGroups,
			List<UocGroup> levelOccupationUocGroups) {
		List<UocGroup> resultUocGroup= new ArrayList<UocGroup>();
		
		for (UocGroup pUocGroup : pathwayUocGroups) {
			for (UocGroup loUocGroup : levelOccupationUocGroups) {
				if(pUocGroup.getIduocgroup()== loUocGroup.getIduocgroup()){
					resultUocGroup.add(loUocGroup);
				}
			}
		}
		return resultUocGroup;
	}

	private List<UocGroup> getUocGroupViaLevelandOccupation(
			Individual individualEntitity ) {
		Level levelEntity = individualEntitity.getLevel();
		
		List<Dapssco> levelDapsscos = levelEntity.getDapsscos();

		List<Dapssco> resultDapsccos = new ArrayList<Dapssco>();
		for (Dapssco dapssco : levelDapsscos) {
	if(dapssco.getOccupation().getIdoccupation()==individualEntitity.getOccupation().getIdoccupation()){
		resultDapsccos.add(dapssco);
		
	}
}
		
		List<UocGroup> uocGroups = new ArrayList<UocGroup>();
		for (Dapssco dapssco : resultDapsccos) {
			uocGroups.addAll(dapssco.getUocGroups());
			
		}
		
		
		
		return uocGroups;
 
	}

 
	private List<UocGroup> getUOCGroupViaPathway(Pathway pathway) {
	
		return pathway.getUocGroups();
	}

	private HashMap<Need, List<UocGroup>> getNeedMapofUOCGroup(
			List<UocGroup> uocGroups) {
		// TODO Auto-generated method stub
		return null;
	}

//	private List<UocGroup> getUocGroups(List<Dapssco> dapsscos) {
//		List<UocGroup> uocgroups = new ArrayList<UocGroup>();
//		
//		for (Dapssco dapssco : dapsscos) {
//			uocgroups.addAll(dapssco.getUocGroups());
//		}
//		return uocgroups;
//	}

//	private List<Dapssco> getFilteredDapsscos(List<Dapssco> levelDapsscos,
//			List<Dapssco> occupationDapsscos) {
//		// TODO Auto-generated method stub
//		return null;
//	}

}
