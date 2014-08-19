package au.com.redbackconsulting.skillsurvey.api;

import java.io.BufferedReader;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Properties;
import java.util.Set;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import org.omg.stub.java.rmi._Remote_Stub;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import au.com.redbackconsulting.skillsurvey.api.bean.FunctionBean;
import au.com.redbackconsulting.skillsurvey.api.bean.LevelBean;
import au.com.redbackconsulting.skillsurvey.api.bean.OccupationBean;
import au.com.redbackconsulting.skillsurvey.api.bean.SurveyAnswerBean;
import au.com.redbackconsulting.skillsurvey.api.bean.UocBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.ChoiceBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.GenderBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.LocationBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.MenuBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.MenusBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.OverviewListSurveyBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.PathwayBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.ProfileDetailsBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.ProfileListItemBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.ProfileSurveyBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.QuestionBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.QuestionSurveyBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.ReportProfileInfoBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.ReportSurveyBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.SkillRecogReportBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.SurveyDataBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.SurveyGapReport;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.SurveyReportSkillRecognitionBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.UnitOfCompetencyBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.UocCourseStatusBean;
import au.com.redbackconsulting.skillsurvey.api.bean.survey.UserTypeBean;
import au.com.redbackconsulting.skillsurvey.persistence.DapsscoDAO;
import au.com.redbackconsulting.skillsurvey.persistence.FunctionDAO;
import au.com.redbackconsulting.skillsurvey.persistence.IndividualDAO;
import au.com.redbackconsulting.skillsurvey.persistence.LevelDAO;
import au.com.redbackconsulting.skillsurvey.persistence.LocationDAO;
import au.com.redbackconsulting.skillsurvey.persistence.NeedDAO;
import au.com.redbackconsulting.skillsurvey.persistence.OccupationDAO;
import au.com.redbackconsulting.skillsurvey.persistence.SurveyAnswerDAO;
import au.com.redbackconsulting.skillsurvey.persistence.SurveyDAO;
import au.com.redbackconsulting.skillsurvey.persistence.UocDAO;
import au.com.redbackconsulting.skillsurvey.persistence.UocQuestionDAO;
import au.com.redbackconsulting.skillsurvey.persistence.UserTypeDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.Dapssco;
import au.com.redbackconsulting.skillsurvey.persistence.model.Function;
import au.com.redbackconsulting.skillsurvey.persistence.model.Individual;
import au.com.redbackconsulting.skillsurvey.persistence.model.Level;
import au.com.redbackconsulting.skillsurvey.persistence.model.Location;
import au.com.redbackconsulting.skillsurvey.persistence.model.Need;
import au.com.redbackconsulting.skillsurvey.persistence.model.Occupation;
import au.com.redbackconsulting.skillsurvey.persistence.model.SurveryAnswer;
import au.com.redbackconsulting.skillsurvey.persistence.model.Survey;
import au.com.redbackconsulting.skillsurvey.persistence.model.Uoc;
import au.com.redbackconsulting.skillsurvey.persistence.model.UocGroup;
import au.com.redbackconsulting.skillsurvey.persistence.model.UocQuestion;
import au.com.redbackconsulting.skillsurvey.persistence.model.UserType;




@Path("/surveydata")
public class SurveyDataService extends BaseService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
//	final static private String adminType = "admin";
//	final static private String individualType = "Individual";
//	final static private String reportingType = "report";
//	final static private String defaultType = "default";
//	final static private String supervisorType = "Supervisor";
//	final static private String noAnswer = "No";
//	final static private String yesAnswer = "Yes";
//	final static private String notAnswer ="No Answer";

	// final static private String supervisorRole ="Supervisor";

	
	@GET
	@Path("/get/{needname}")
	@Produces(MediaType.APPLICATION_JSON)
	public SurveyDataBean getSurvey(@PathParam("needname") String needName) {
		try {
			String loginId = getLoggedInUserId();
			SurveyDataServiceHelper helper = new SurveyDataServiceHelper(request);
			SurveyDataBean bean =helper.getSurvey(needName);
			return bean;	
		} catch (Exception e) {
			return new SurveyDataBean();
		}
		
	}
	
	@GET
	@Path("/overview")
	@Produces(MediaType.APPLICATION_JSON)
	public List<OverviewListSurveyBean> getOverview() {
		List<OverviewListSurveyBean> report = new ArrayList<OverviewListSurveyBean>();
		try {
		String loginId = getLoggedInUserId();
		SurveyDataServiceHelper helper = new SurveyDataServiceHelper(request);
		report = helper.getOverview();
		return report;
		
		} catch (Exception e) {
			return report;
		}
	}

	@GET
	@Path("/profile/username")
	@Produces(MediaType.TEXT_PLAIN)
	public String getUserName() {
	
		String name = getLoggedInUserId();
		return name;
	}

	@GET
	@Path("/profile/rolename")
	@Produces(MediaType.TEXT_PLAIN)
	public String getRoleName() {
		
		try {
			SurveyDataServiceHelper helper = new SurveyDataServiceHelper(request);
			return helper.getRoleName();
			
		} catch (Exception e) {
		return null;
		}
//		boolean status = false;
//		status = request.isUserInRole(adminType);
//		if (status)
//			return adminType;
//		status = request.isUserInRole(individualType);
//		if (status)
//			return individualType;
//		status = request.isUserInRole(reportingType);
//		if (status)
//			return reportingType;
//		return "NoRole";

	}
	

	@GET
	@Path("/admin/profile/blank")
	@Produces(MediaType.APPLICATION_JSON)
	public ProfileListItemBean getProfileModel() {
		 
	try {
		String loginId = getLoggedInUserId();
		SurveyDataServiceHelper helper = new SurveyDataServiceHelper(request);
return helper.getBlankUserProfile();
	} catch (Exception e) {
		return new ProfileListItemBean();
	}
	
	}
	
	
	@GET
	@Path("/admin/profile/list")
	@Produces(MediaType.APPLICATION_JSON)
	public ProfileDetailsBean getProfileList() {
	try {
		String loginId = getLoggedInUserId();
		SurveyDataServiceHelper helper = new SurveyDataServiceHelper(request);
return helper.getProfiles();
	} catch (Exception e) {
		return new ProfileDetailsBean();
	}
	
	}
		
	@GET
	@Path("/profile/status")
	@Produces(MediaType.APPLICATION_JSON)
	public boolean getProfilestatus() {
		
		try {
			SurveyDataServiceHelper helper = new SurveyDataServiceHelper(request);
			return helper.getProfileStatus();
		} catch (Exception e) {
			return false;
		}
//		String loginId = getLoggedInUserId();
//		if(loginId.toLowerCase().startsWith(adminType.toLowerCase())){
//			
//			return true;
//				
//			}
//			if( loginId.toLowerCase().startsWith(reportingType.toLowerCase()))
//			{
//				
//					return true;
//				}
//			
//		
//		
//		String name = getLoggedInUserId();
//		
//		
//
//		IndividualDAO individualDao = new IndividualDAO();
//		boolean result = individualDao.getProfileUpdateStatus(name);
//		return result;
	}
	
	
	
	
	@GET
	@Path("/report/gap")
	@Produces(MediaType.APPLICATION_JSON)
	public SurveyGapReport getGap() {
		
		try {
			String loginId = getLoggedInUserId();
			SurveyDataServiceHelper helper = new SurveyDataServiceHelper(request);
			SurveyGapReport report = helper.getGapReport();
			return report;
		} catch (Exception e) {
			return new SurveyGapReport();
		}
		
	}


	
	
	
	@GET
	@Path("/report/recognition")
	@Produces(MediaType.APPLICATION_JSON)
	public SurveyReportSkillRecognitionBean getRecognition() {
		try {
			String loginId = getLoggedInUserId();
			SurveyDataServiceHelper helper = new SurveyDataServiceHelper(request);
			SurveyReportSkillRecognitionBean report =helper.getRecognitionReport();
			return report;
		} catch (Exception e) {
			return new SurveyReportSkillRecognitionBean();
		}
	}
		
	private static List<GenderBean> genders;
	public static  	List<GenderBean>  readGenderProperties( HttpServletRequest request){
	
		if(SurveyDataService.genders==null){
		List<GenderBean> genders = new ArrayList<GenderBean>();
		
		GenderBean pleaseSelect = new GenderBean();
		pleaseSelect.setGenderId(-1);
		pleaseSelect.setGenderName("Please Select");
		genders.add(pleaseSelect);
		try {
	Properties properties = new Properties();
			final InputStream is =request.getServletContext().getResourceAsStream("/WEB-INF/gender.properties");
	        try {
	            properties.load(is);
	        } finally {
	            is.close();
	        }
	        
	        Set<Object> keySet =   properties.keySet();
		       for (Iterator iterator = keySet.iterator(); iterator
					.hasNext();) {
				String key = (String) iterator.next();
				long keyId = Long.valueOf(key);
				String value =(String) properties.get(key);
				GenderBean bean = new GenderBean();
				bean.setGenderId(keyId);
				bean.setGenderName(value);
				genders.add(bean);
			} 
	      SurveyDataService.genders = genders;
	    } catch (Exception asd) {
	    	 return genders;
	    }}
		return SurveyDataService.genders;
	}
	
//	private Survey getSurveyByNeed(String needName){
//		try {
//			if (needName==null)
//				return null;
//			String loggedInuser = getLoggedInUserId();
//			NeedDAO needDao = new NeedDAO();
//			Need need = needDao.getNeedByName(needName);
//			if (need==null)
//				return null;
//			
//			IndividualDAO individualDAO = new IndividualDAO();
//			Individual individual = individualDAO.getByLogin(loggedInuser);
//			Level level = individual.getLevel();
//			Function function = individual.getFunction();
//			Occupation occupation = individual.getOccupation();
//			DapsscoDAO dapsscoDAO= new DapsscoDAO();
//			Dapssco dapssco = dapsscoDAO.getByLevelOccuFunc(level, occupation, function);
//			
//			SurveyDAO surveyDao = new SurveyDAO();
//			Survey entity = surveyDao.getSurveyByPathwayofIndividual(individual, need, dapssco);
//			surveyDao.refresh(entity);
//			return entity;
//
//		} catch (Exception e) {
//			return null;
//		}
//		 
//	}

//	private ReportSurveyBean getEmptyReportSurveyBean(String needName){
//		ReportSurveyBean bean = new ReportSurveyBean();
//		try {
//			
//				
//			
//			String login = getLoggedInUserId();
//			IndividualDAO individualDao = new IndividualDAO();
//			Individual individual = individualDao.getByLogin(login);
//			String occupationName = individual.getOccupation().getName();
//			String levelName = individual.getLevel().getDescription();
//			NeedDAO needDao = new NeedDAO();
//			Need need = needDao.getNeedByName(needName);
//			bean.setNeedName(need.getDescription()+ " Training");
//			
//			bean.setTitle("Survey :" + occupationName+ ", "+ levelName );
////			bean.setCompleteStatus(null, occupationName, levelName, login);
//			
//		 
//			List<ReportProfileInfoBean> cProfileInfo = new ArrayList<ReportProfileInfoBean>();
//			ReportProfileInfoBean rpi1 = new ReportProfileInfoBean();
//			rpi1.setName("PM Keys Number");
//			rpi1.setValue(login);
//			cProfileInfo.add(rpi1);
//
//			ReportProfileInfoBean rpi2 = new ReportProfileInfoBean();
//			rpi2.setName("Occupation");
//			rpi2.setValue(levelName+ " " +occupationName);
//			cProfileInfo.add(rpi2);
//			bean.setProfileInfo(cProfileInfo);
//			
//			ReportProfileInfoBean rpiLoca = new ReportProfileInfoBean();
//			rpiLoca.setName("Location");
//			rpiLoca.setValue(individual.getLocation().getName());
//			cProfileInfo.add(rpiLoca);
//			bean.setProfileInfo(cProfileInfo);
//		
//			
////			ReportProfileInfoBean rpi3 = new ReportProfileInfoBean();
////			rpi3.setName("Level");
////			rpi3.setValue(levelName);
////			cProfileInfo.add(rpi3);
//			
//			ReportProfileInfoBean rpi4 = new ReportProfileInfoBean();
//			rpi4.setName("Are you a Supervisor/Manager");
//			
//			UserType  userType =individual.getUsertypefk();
//			 String userTypeName = userType.getUserType();
////			 if(userTypeName.equalsIgnoreCase(SurveyDataService.individualType)){
////				 rpi4.setValue("No");
////			 } else if (userTypeName.equalsIgnoreCase(SurveyDataService.supervisorType)){
////				 rpi4.setValue("Yes");
////			 } 
//			cProfileInfo.add(rpi4);
//			
//			
//			
//			bean.setProfileInfo(cProfileInfo);
//			
//			
//			 List<UocCourseStatusBean> resultuocCourseStatuBean = new ArrayList<UocCourseStatusBean>();
//			bean.setUocCourses(resultuocCourseStatuBean);	
//			
//			
//		} catch (Exception e) {
//			// TODO: handle exception
//		}
//		return bean;
//	}
	 	@GET
	@Path("/report/{need}")
	@Produces(MediaType.APPLICATION_JSON)
	public ReportSurveyBean getReport(@PathParam("need") String needName) {
	 		String loginId = getLoggedInUserId();
	 		try {
				
	 			SurveyDataServiceHelper helper = new SurveyDataServiceHelper(request);
		 		ReportSurveyBean report =helper.getNeedReport(needName);
		 		return report;
			} catch (Exception e) {
			 return new ReportSurveyBean();
			}
	 	}		


 
//
//	private List<Uoc> getUOCCourse(List<UocQuestion> mainQuestions) {
//			// TODO Auto-generated method stub
//		UocDAO uocDao = new UocDAO();
//		List<Uoc> collection  = new ArrayList<Uoc>();
//		
//		for (Iterator iterator = mainQuestions.iterator(); iterator.hasNext();) {
//			UocQuestion uocQuestion = (UocQuestion) iterator.next();
//			 Uoc uoc = uocQuestion.getUoc();
//			 uocDao.refresh(uoc);
//				collection.add(uoc);
//		}
//		return collection;
//		}
//
//	
	@GET
	@Path("/menu")
	@Produces(MediaType.APPLICATION_JSON)
	public String getMenu1() {
		try {
		//	String loginId = getLoggedInUserId();
			
			
SurveyDataServiceHelper helper = new SurveyDataServiceHelper(request);
			String result = helper.getMenu1();
			return result;
			
		} catch (Exception e) {
return null;
}
	}

//	
//	@GET
//	@Path("/menu")
//	@Produces(MediaType.APPLICATION_JSON)
//	public MenusBean getMenu() {
//		try {
//		//	String loginId = getLoggedInUserId();
//			
//			
//SurveyDataServiceHelper helper = new SurveyDataServiceHelper(request);
//			MenusBean result = helper.getMenu();
//			return result;
//			
//		} catch (Exception e) {
//return null;
//}
//	}
//







//	private Response _saveProfile(ProfileSurveyBean profile){
//		try {
//			
//		String loginId = getLoggedInUserId();
//		Individual individual = _getIndividual(loginId);
//		UserTypeBean userTypeBean  =profile.getUserType();
//		GenderBean genderBean = profile.getGender();
//		genderBean = _updateGenderBean(genderBean);
//		LocationBean locationBean = profile.getLocation();
//		FunctionBean functionBean = profile.getFunction();
//		OccupationBean jobTitleBean = profile.getJobTitle();
//		LevelBean levelBean= profile.getLevel();
//		ChoiceBean answerBean1 = profile.getAnswerQuestion1();
//		ChoiceBean answerBean2 = profile.getAnswerQuestion2();
//		 
//		long userTypeId= userTypeBean.getUserId();
// 	 	UserTypeDAO userTypeDao = new UserTypeDAO();
//		UserType userType= userTypeDao.getById(userTypeId);
//			individual.setUsertypefk(userType);
// 
//		
//		individual.setGender(genderBean.getGenderName());
//		
//		long locationId = locationBean.getLocationId();
//		 	LocationDAO dao = new LocationDAO();
//			Location location = dao.getById(locationId);
//			individual.setLocation(location);
//	 
//		long functionId = functionBean.getId();
//	 	FunctionDAO fdao = new FunctionDAO();
//		Function functionN = fdao.getById(functionId);
//			individual.setFunction(functionN);
//	 	
//		long occupationId = jobTitleBean.getId();
//	 	OccupationDAO cdao = new OccupationDAO();
//		Occupation entity = cdao.getById(occupationId);
//			individual.setOccupation(entity);
//	 	
//		long levelId = levelBean.getId();
// 		LevelDAO ldao = new LevelDAO();
//		Level entityl = ldao.getById(levelId);
//
//		individual.setLevel(entityl);
//		long pathwayid = profile.getLearningPathway().getId();
//		individual.setPathway(pathwayid);
//		
//		
//		
//		individual.setAnsofqtn1(String.valueOf(answerBean1.getId()));
//		individual.setAnsofqtn2(String.valueOf(answerBean2.getId()));
//	
//		
//		
//		IndividualDAO IndividualDao = new IndividualDAO();
//	
//		individual  = IndividualDao.save(individual);
//		IndividualDao.refresh(individual); 
//		
//		
//		DapsscoDAO dapsscoDao = new DapsscoDAO();
//		 
//		 Level level =_getLevel(individual);
//		 Occupation occupation = _getOccupation(individual);
//		 Function function =_getFunction(individual);
//		 
//		 
//		 
//		 if(level!=null && occupation!=null && function!=null){
//			Dapssco existDapssco = dapsscoDao.getByLevelOccuFunc(level, occupation, function);
//			if(existDapssco==null){
//			Dapssco dapsscoEntity = new Dapssco();
//			 dapsscoEntity.setLevelId(level );
//			 dapsscoEntity.setOccupation(occupation );
//			 dapsscoEntity.setFunction(function );
//			 dapsscoDao.saveNew(dapsscoEntity);
//			 
//			}
//		 }
//		return createOkResponse();
//		} catch (Exception e) {
//		return	createBadRequestResponse("Exception");
//		}
//	 
//		
//	}
// 
//	 private GenderBean _updateGenderBean(GenderBean genderBean) {
//		try {
//			List<GenderBean> beans = SurveyDataService.readGenderProperties(request);//_getGenders();
//			for (Iterator iterator = beans.iterator(); iterator.hasNext();) {
//				GenderBean gb = (GenderBean) iterator.next();
//				if(gb.getGenderId()== genderBean.getGenderId()){
//					return gb;
//				}
//			}
//			return genderBean;
//		} catch (Exception e) {
//			return genderBean;
//		}
//	}





	@POST
	 @Path("/profile/edit")
	 @Consumes (MediaType.APPLICATION_JSON)
	
	 // @Produces (MediaType.APPLICATION_JSON)
	 public Response editProfile ( ProfileSurveyBean profileSurveyBean){
		try {
			SurveyDataServiceHelper helper = new SurveyDataServiceHelper(request);
			boolean result = helper.saveProfile(profileSurveyBean);
			if (result)
				return createOkResponse();
			return createBadRequestResponse("Wrong");
		} catch (Exception e) {
			return createBadRequestResponse("Wrong");
		}
	//	return _saveProfile(profileSurveyBean);
	}

	 
	 
//	 private ProfileSurveyBean _getProfile(){
//			Individual individual = null;
//			 Level level = null;
//			 Occupation occupation= null;
//			 Function function = null;
//			 Location location = null;
//			 UserType userType = null;
//			 PathwayBean pathway  =null;
//			 
//			 List<Level> levels = null;
//			 List<Occupation> occupatios = null;
//			 List<Function> functions = null;
//			 List<Location> locations = null;
//			 List<UserType> userTypes = null;
//			 
//			 List<GenderBean> gendersBean = null;
//			 
//			
//			  
//		 try {
//			 String loginId = getLoggedInUserId();
//			  individual = _getIndividualorNullException(loginId);
//			   level = _getLevel(individual);
//			   function = _getFunction(individual);
//			   occupation = _getOccupation(individual);
//				 
//			   location = _getLocation(individual);
//			   
//			   userType = _getUserType(individual);
//			   pathway = _getPathway(individual);
//			   
//			   
//		
//			   functions = _getFunctions();
//			   occupatios= _getOccupations(  function);
//			   levels = _getLevels(occupation);
//			   locations = _getlocations();
//			   userTypes =_getUserTypes();
//
//			   LevelBean  levelBean =LevelBean.get(level);
//			    FunctionBean functionBean = FunctionBean.get(function);
//			   OccupationBean occupationBean = OccupationBean.get(occupation);
//			   LocationBean locationBean = LocationBean.get(location);
//			   UserTypeBean userTypeBean = UserTypeBean.get(userType);
//			   GenderBean genderBean = _getGender(individual);
//			   ChoiceBean ans1Choice = _getChoice1(individual);
//			   ChoiceBean ans2Choice = _getChoice2(individual);
//			   
//			   
//			   
//			   List<LevelBean> levelBeans = _convertLevels(levels);
//			   List<FunctionBean> functionBeans = _convertFunctions(functions);
//			   List<OccupationBean> occupationBeans = _convertOccutions(occupatios);
//			   List<LocationBean> locationBeans = _convertLocations(locations);
//			   List<UserTypeBean> userTypeBeans= _convertUserTypes(userTypes);
//			   List<GenderBean> genders = SurveyDataService.readGenderProperties(request);//_getGenders();
//			   List<ChoiceBean> choices =_getChoices();
//			   List<PathwayBean> pathways = _getPathways();
//			   
//			   ProfileSurveyBean profile = new ProfileSurveyBean();
//			   
//			   profile.setLoginId(loginId);
//			   
//			   profile.setUserType(userTypeBean);
//			   profile.setUserTypes(userTypeBeans);
//			   
//			   profile.setGender(genderBean);
//			   profile.setGenders(genders);
//			   
//			   profile.setLocation(locationBean);
//			   profile.setLocations(locationBeans);
//			   
//			   profile.setFunction(functionBean);
//			   profile.setFunctions(functionBeans);
//			   
//			   profile.setJobTitle(occupationBean);
//			   profile.setJobTitles(occupationBeans);
//			   
//			   profile.setLevel(levelBean);
//			   profile.setLevels(levelBeans);
//			  
//			   profile.setLearningPathway(pathway);
//			   profile.setPathways(pathways);
//			   
//			   List<QuestionBean> questions = SurveyDataService.readQuestionProperties(request);
//			   
////			   profile.setQuestion1("Do you currently hold or are you currently undertaking Higher Education/Tertiary Qualifications ?");
//
////			   profile.setQuestion2("If supported by Studybank, would you like to pursue Higher Education/Tertiary Qualification?");
//
//			   profile.setQuestion1(questions.get(1).getQuestion());
//			   profile.setQuestion2(questions.get(0).getQuestion());	
//			   
//			   
//			   profile.setAnswerQuestion1(ans1Choice);
//			   profile.setAnswerQuestion2(ans2Choice);
//			   
//			   profile.setResponseTypes(choices);
//			   
//			   
//			 
//			 return profile;
//			 
//		} catch (Exception e) {
//			return new ProfileSurveyBean();
//		}
// 
//	 }
	 
//	 private PathwayBean _getPathway(Individual individual) {
//
//			List<PathwayBean> pathways = _getPathways();
//		 try {
//			long pathwayid  = individual.getPathway();
//			
//			for (Iterator iterator = pathways.iterator(); iterator.hasNext();) {
//				PathwayBean pathwayBean = (PathwayBean) iterator.next();
//				if(pathwayBean.getId()== pathwayid ){
//					return pathwayBean;
//				}
//			}
//			return pathways.get(0);
//		} catch (Exception e) {
//			return pathways.get(0);
//		}
//	 
//	 }
//
//
//
//

//	private List<PathwayBean> _getPathways() {
//		return SurveyDataService.readPathwayProperts(request);
////		 List<PathwayBean> pathways = new ArrayList<PathwayBean>();
////		 try {
////			 
////			 
////			 PathwayBean p1 = new PathwayBean();
////			 p1.setId(-1);
////			 p1.setName("Please Select");
////			 pathways.add(p1);
////
////			 PathwayBean p2 = new PathwayBean();
////			 p2.setId(1);
////			 p2.setName("Accredited");
////			 pathways.add(p2);
////		
////			 PathwayBean p3 = new PathwayBean();
////			 p3.setId(2);
////			 p3.setName("People");
////			 pathways.add(p3);
////			 
////			 PathwayBean p4 = new PathwayBean();
////			 p4.setId(3);
////			 p4.setName("Corporate");
////			 pathways.add(p4);
////
////			 return pathways;
////		 } catch (Exception e) {
////			return pathways;
////		}
////		
//	}
//	
	
	public static HashMap<String, String> menus = new HashMap<String, String>();
			
	
	public static String  readMenuJSON(String fileName, HttpServletRequest request){
		HashMap<String,	String> menus = SurveyDataService.menus;
		String menu = menus.get(fileName);
		if (menu==null){
		
	 				try {
					 	
	 					final InputStream is =request.getServletContext().getResourceAsStream("/WEB-INF/"+fileName);
					        try {
					        	 StringBuilder out = new StringBuilder();
					             byte[] bytes= null;// lineNo;
					             
					             int data =0;
					              while ((data= is.read( )) != -1) {
					             char c = (char) data;
					               out.append(c);
					              }
					             menu = out.toString();
					           menus.put(fileName, menu);
					        } finally {
					            is.close();
					            
					        }
					     
					     
					    } catch (Exception asd) {
					    	 
					    }
				
				
		}		
				
		
		return menu ;
	}

private  static List<PathwayBean> pathways; 

	public static List<PathwayBean> readPathwayProperts(HttpServletRequest request){
		List<PathwayBean> beans = new ArrayList<PathwayBean>();
		PathwayBean pleaseSelect = new PathwayBean();
		pleaseSelect.setId(-1);
		pleaseSelect.setName("Please Select");
beans.add(pleaseSelect);
		
			if(SurveyDataService.pathways==null){
				try {
					Properties properties = new Properties();
							final InputStream is =request.getServletContext().getResourceAsStream("/WEB-INF/pathways.properties");
					        try {
					            properties.load(is);
					        } finally {
					            is.close();
					        }
					     
					     Set<Object> keySet =   properties.keySet();
					       for (Iterator iterator = keySet.iterator(); iterator
								.hasNext();) {
							String key = (String) iterator.next();
							long keyId = Long.valueOf(key);
							String value =(String) properties.get(key);
							PathwayBean bean = new PathwayBean();
							bean.setId(keyId);
							bean.setName(value);
							beans.add(bean);
						} 
					     
					    SurveyDataService.pathways= beans;
					    } catch (Exception asd) {
					    	 
					    }
				
				
				
				
			}  
		
		return SurveyDataService.pathways;
	}


//	private ChoiceBean _getChoice1(Individual individual) {
//		List<ChoiceBean> beans = _getChoices();
//		ChoiceBean bean = new ChoiceBean();
//		bean= beans.get(0);
//		try {
//			
//		String ans1= individual.getAnsofqtn1();
//		if(ans1!=null){
//		for (Iterator iterator = beans.iterator(); iterator.hasNext();) {
//			ChoiceBean choiceBean = (ChoiceBean) iterator.next();
//			if (choiceBean.getId()==Long.parseLong(ans1)){
//			return choiceBean;	
//			}
//			
//		}
//		return bean;
//		} ///
//		
//return bean;
//		} catch (Exception e) {
//			return bean;
//			 
//		}
//		 
//	}
//
//
//	 private ChoiceBean _getChoice2(Individual individual) {
//			List<ChoiceBean> beans = _getChoices();
//			ChoiceBean bean = new ChoiceBean();
//			bean= beans.get(0);
//			try {
//				
//			String ans1= individual.getAnsofqtn2();
//			if(ans1!=null){
//			for (Iterator iterator = beans.iterator(); iterator.hasNext();) {
//				ChoiceBean choiceBean = (ChoiceBean) iterator.next();
//				if (choiceBean.getId()== Long.parseLong((ans1))){
//				return choiceBean;	
//				}
//				
//			}
//			
//			} ///
//			return bean;
//			} catch (Exception e) {
//				return bean;
//	// TODO: handle exception
//			}
//		}
//
//
//	private List<ChoiceBean> _getChoices() {
//		List<ChoiceBean> beans = new ArrayList<ChoiceBean >();
//		 try {
//			
//			ChoiceBean bean2 = new ChoiceBean();
//			bean2.setId(0);
//			bean2.setName("No");
//			beans.add(bean2);
//			
//			
//			ChoiceBean bean = new ChoiceBean();
//			bean.setId(1);
//			bean.setName("Yes");
//			beans.add(bean);
//			
//			return beans;
//		} catch (Exception e) {
//		return beans;
//		}
//	}
//
//
//






//	private List<GenderBean> _getGenders() {
//		List<GenderBean> beans = new ArrayList<GenderBean>();
//		
//
//		GenderBean pleaseSelect = new GenderBean();
//		pleaseSelect.setGenderId(-1);
//		pleaseSelect.setGenderName("Please Select");
//		beans.add(pleaseSelect);
//		
//		GenderBean male = new GenderBean();
//		male.setGenderId(1);
//		male.setGenderName("Male");
//		beans.add(male);
//		
//		GenderBean female = new GenderBean();
//		female.setGenderId(2);
//		female.setGenderName("Female");
//		beans.add(female);
//		return beans;
//		 
//	}



//
//
//	private List<UserTypeBean> _convertUserTypes(List<UserType> userTypes) {
//		List<UserTypeBean> beans = new ArrayList<UserTypeBean>();
//		UserTypeBean pleaseSelect = new UserTypeBean();
//		pleaseSelect.setUserId(-1);
//		pleaseSelect.setUserTypeName("Please Select");
//		beans.add(pleaseSelect);
//		 try { 
//			for (Iterator iterator = userTypes.iterator(); iterator.hasNext();) {
//				UserType entity = (UserType) iterator.next();
//				UserTypeBean bean = UserTypeBean.get(entity);
//				beans.add(bean);
//				 
//			}
//			return beans;
//		} catch (Exception e) {
//			return beans;
//		}
//	}
//



//
//	private List<LocationBean> _convertLocations(List<Location> locations) {
//		 List<LocationBean> beans = new ArrayList<LocationBean>();
//		 LocationBean pleaseSelect = new LocationBean();
//		 pleaseSelect.setLocationId(-1);
//		 pleaseSelect.setLocationName("Please Select ");
//		 beans.add(pleaseSelect);
//			try {
//				for (Iterator iterator = locations.iterator(); iterator.hasNext();) {
//					Location locatin = (Location) iterator.next();
//					LocationBean bean = LocationBean.get(locatin);
//					beans.add(bean);
//					
//				}
//				return beans;
//			} catch (Exception e) {
//				return beans;
//			}
//
//	}
//
//


//
//	private List<OccupationBean> _convertOccutions(List<Occupation> occupatios) {
//		 List<OccupationBean> beans = new ArrayList<OccupationBean>();
//		 OccupationBean pleaseSelect = new OccupationBean();
//		 pleaseSelect.setId(-1);
//		 pleaseSelect.setName("Please Select");
//		 pleaseSelect.setDescription("Please Select");
//		 beans.add(pleaseSelect);
//			try {
//				for (Iterator iterator = occupatios.iterator(); iterator.hasNext();) {
//					Occupation level = (Occupation) iterator.next();
//					OccupationBean bean = OccupationBean.get(level);
//					beans.add(bean);
//					
//				}
//				return beans;
//			} catch (Exception e) {
//				return beans;
//			}
//
//	}
//
//


//
//	private List<FunctionBean> _convertFunctions(List<Function> functions) {
//		 List<FunctionBean> beans = new ArrayList<FunctionBean>();
//		 FunctionBean pleaseSelect= new FunctionBean();
//		 pleaseSelect.setId(-1);
//		 pleaseSelect.setName("Please Select");
//		 pleaseSelect.setDescription("Please Select");
//		 beans.add(pleaseSelect);
//		 try {
//				for (Iterator iterator = functions.iterator(); iterator.hasNext();) {
//					Function level = (Function) iterator.next();
//					FunctionBean bean = FunctionBean.get(level);
//					beans.add(bean);
//					
//				}
//				return beans;
//			} catch (Exception e) {
//				return beans;
//			}
//	}
//



//
//	private List<LevelBean> _convertLevels(List<Level> levels) {
//		List<LevelBean> beans = new ArrayList<LevelBean>();
//		LevelBean pleaseSelect = new LevelBean();
//		pleaseSelect.setId(-1);
//		pleaseSelect.setCode("Please Select");
//		pleaseSelect.setDescription("Please Select");
//		beans.add(pleaseSelect);
//		
//		try {
//			for (Iterator iterator = levels.iterator(); iterator.hasNext();) {
//				Level level = (Level) iterator.next();
//				LevelBean bean = LevelBean.get(level);
//				beans.add(bean);
//				
//			}
//			return beans;
//		} catch (Exception e) {
//			return beans;
//		}
//	}
//
//	




//	private List<Function> _getFunctions( ) {
//	List<Function> functions = new ArrayList<Function>();
//	FunctionDAO dao = new FunctionDAO(); 
//		 try {
//			 functions = dao.getAll();
//			 return functions;
//		} catch (Exception e) {
//			return functions;
//		}
//	}
//

//
//
//
//	private List<UserType> _getUserTypes() {
//		List<UserType> entities = new ArrayList<UserType>();
//		UserTypeDAO dao = new UserTypeDAO();
//		try {
//			
//			entities = dao.getAll();
//			return entities;
//		} catch (Exception e) {
//			return entities;
//		}
//	}
//
//

//
//
//	private List<Location> _getlocations() {
//		List<Location> entities = new ArrayList<Location>();
//		LocationDAO dao = new LocationDAO();
//		try {
//			
//			entities = dao.getAll();
//			return entities;
//		} catch (Exception e) {
//			return entities;
//		}
//
//	}
//
//
//

//
//	private List<Occupation> _getOccupations(Function function ) {
//		List<Occupation> entities = new ArrayList<Occupation>();
//			try {
//			if(function!=null){
////			long id =	function.getIdfunction();
////			if (id!=0){
//			entities =		function.getOccupations();
//			
//			} else {
//				/// getall
//
//			//	entities = dao.getAll();
//			}
////			}
//				
//			return entities;
//		} catch (Exception e) {
//			return entities;
//		}
//	}
//

	

//
//
//	private List<Level> _getLevels(Occupation occupation ) {
//		List<Level> entites = new ArrayList<Level>();
//			try {
//			 
//				entites =occupation.getLevels();
//				return entites;
//			
//		} catch (Exception e) {
//			return entites;
//		}
//	}
//
//
//
//
//
//	private UserType _getUserType(Individual individual) {
//		UserType userType = null;
//		 try {
//			userType =individual.getUsertypefk();
//			if(userType==null){
//				userType = new UserType();
//				userType.setId(-1);
//				userType.setUserType("NoUser");
//				
//			}
//			return userType;
//		} catch (Exception e) {
//			return new UserType();
//		}
//	}

private static List<QuestionBean> questions;

public static List<QuestionBean> readQuestionProperties(HttpServletRequest request){
	
	if(SurveyDataService.questions==null){
	List<QuestionBean> questions = new ArrayList<QuestionBean>();
	
	
	try {
		Properties properties = new Properties();
				final InputStream is =request.getServletContext().getResourceAsStream("/WEB-INF/questions.properties");
		        try {
		            properties.load(is);
		        } finally {
		            is.close();
		        }
		        
		     Collection<Object> collection = properties.values();
		     int count =1;
		     for (Iterator iterator = collection.iterator(); iterator.hasNext();) {
				String object = (String) iterator.next();
				count++;
				QuestionBean bean = new QuestionBean();
				bean.setId(count);
				bean.setQuestion(object);
				questions.add(bean);
				
			}
		      SurveyDataService.questions = questions;
		    } catch (Exception asd) {
		    	 return questions;
		    }
	}
	return SurveyDataService.questions;
	
}



//	private GenderBean _getGender(Individual individual) {
//		GenderBean bean ;
//		List<GenderBean> genders = SurveyDataService.readGenderProperties(request);//_getGenders();
//		bean = genders.get(0);
//		
//		try {
//			String gender = individual.getGender();
//			if(gender!=null){
//			for (Iterator iterator = genders.iterator(); iterator.hasNext();) {
//				GenderBean genderBean = (GenderBean) iterator.next();
//				if (genderBean.getGenderName().equalsIgnoreCase(gender)){
//				return genderBean;	
//				}
//				}
//			
//			}
//			return bean;
//			
//		} catch (Exception e) {
//			 return bean;
//			
//		}
//	}
//
//
//
//
//
//	private Location _getLocation(Individual individual) {
//		try {
//		Location location =	individual.getLocation();
//		if(location==null)
//			location = new Location();
//		return location;
//		} catch (Exception e) {
//			return new Location();
//		}
//	}
//
//
//
//

//	private Function _getFunction(Individual individual) {
//		 try {
//				Function  entity = individual.getFunction();
//				if(entity==null){
//					
//				entity =	new	Function();		}
//				return entity;
//			} catch (Exception e) {
//				return new Function();
//			}
//	}
//
//	 private Function _getFunctionorNullException(Individual individual) throws NullPointerException {
//		 try {
//				Function  entity = individual.getFunction();
//				if(entity==null){
//					
//				throw new NullPointerException("Function is Null");	}
//				return entity;
//			} catch (Exception e) {
//				throw new NullPointerException("Function is Null");
//				}
//	}
//



//	private Occupation _getOccupationorNull(Individual individual)  {
//		 try {
//				Occupation  entity = individual.getOccupation();
//				if(entity==null){
//					
//					throw new NullPointerException("Occupation Has not been Set");
//				}
//				return entity;
//			} catch (Exception e) {
//				throw new NullPointerException("Occupation not set in Individual");
//				}
//	}
//
//
//	 
//	 private Occupation _getOccupation(Individual individual) {
//		 try {
//				Occupation  entity = individual.getOccupation();
//				if(entity==null){
//					
//				//entity =	new	Occupation();	
//					}
//				return entity;
//			} catch (Exception e) {
//				throw new NullPointerException("Occupation not set in Individual");
//				}
//	}
//
//
//

//		private Level _getLevelorNull(Individual individual) throws NullPointerException {
//			 try {
//				Level level = individual.getLevel();
//				if(level==null){
//					
//					throw new NullPointerException("Level Has not been Set");
//				}
//				return level;
//			} catch (Exception e) {
//				throw new NullPointerException("Level not set in Individual");
//				}
//	 	 }
//
//	private Level _getLevel(Individual individual)  {
//		 try {
//			Level level = individual.getLevel();
//			if(level==null){
//				
//				level = new Level();
//				}
//			return level;
//		} catch (Exception e) {
//			throw new NullPointerException("Level not set in Individual");
//			}
// 	 }
//	
//	
//	
	
	@GET
	@Path("/admin/profile/{userid}")
	@Produces(MediaType.APPLICATION_JSON)
	public ProfileListItemBean getUserProfile(@PathParam("userid") String selectedUserlogindId) {
		try {
		
			String loginId = getLoggedInUserId();
			SurveyDataServiceHelper helper = new SurveyDataServiceHelper(request);
			
			return helper.getSelectedUserProfile(selectedUserlogindId);

		} catch (Exception e) {
			return new ProfileListItemBean();
		}
	}
		
	// to get Profile data
	@GET
	@Path("/profile")
	@Produces(MediaType.APPLICATION_JSON)
	public ProfileSurveyBean getProfile() {
try {
	SurveyDataServiceHelper helper = new SurveyDataServiceHelper(request);
	ProfileSurveyBean profileBean = helper.getProfile();//_getProfile();
		return profileBean;
} catch (Exception e) {
	// TODO: handle exception
}
		//ProfileSurveyBean profileBean = _getProfile();
		
		return new ProfileSurveyBean();

	}
	
	
	
	
	@GET
	@Path("/profile/get/levels/{occupationid}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<LevelBean> getLevels(@PathParam("occupationid") String occupationId) {
		List<LevelBean> levelBeans = new ArrayList<LevelBean>();
		LevelBean bean = new LevelBean();
		bean.setId(-1);
		bean.setDescription("Please Select");
		bean.setCode("-1");
		levelBeans.add(bean);
		try {
			OccupationDAO occupationDao = new OccupationDAO();
			Occupation occupation = occupationDao.getById(Long.parseLong(occupationId));
			List<Level> levels = occupation.getLevels();
			for (Iterator iterator = levels.iterator(); iterator.hasNext();) {
				Level level = (Level) iterator.next();
				LevelBean lbean = new LevelBean();
				lbean.setCode(level.getCode());
				lbean.setDescription(level.getDescription());
				lbean.setId(level.getIdlevel());
				levelBeans.add(lbean);
			}
			
			return levelBeans;
			
		} catch (Exception e) {
		return levelBeans;
		}
	}
	
	@GET
	@Path("/profile/get/jobtitles/{functionid}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<OccupationBean> getJobTiles(@PathParam("functionid") String functionId) {
		List<OccupationBean> occupationBeans = new ArrayList<OccupationBean>();
		OccupationBean bean = new OccupationBean();
		bean.setId(-1);
		bean.setName("Please Select");
		bean.setDescription("Please Select");
		occupationBeans.add(bean);

		
		FunctionDAO functionDao = new FunctionDAO();
		Function function =functionDao.getById(Long.parseLong(functionId));
		if (function!=null){
		List<Occupation> occupations =function.getOccupations();
		
		if(occupations!=null){
			for (Iterator iterator = occupations.iterator(); iterator.hasNext();) {
				Occupation occupation = (Occupation) iterator.next();
				OccupationBean occBean = new OccupationBean();
				occBean.setId(occupation.getIdoccupation());
				occBean.setName(occupation.getName());
				occBean.setDescription(occupation.getDescription());
				occupationBeans.add(occBean);
			}
		}
		} 
		return occupationBeans;
	}
	




//	private List<SurveryAnswer> _convertBeanToEntity(
//		List<QuestionSurveyBean> ansfromUi) {
//		List<SurveryAnswer> answers = new ArrayList<SurveryAnswer>();
//		
//	try {
//		
//		for (Iterator iterator = ansfromUi.iterator(); iterator.hasNext();) {
//			QuestionSurveyBean uiAnswer = (QuestionSurveyBean) iterator.next();
//			SurveryAnswer ans = new SurveryAnswer();
////			ans.setPrimary(isPrimary);
//			ans.setUocQuestionId(uiAnswer.getUocQuestionId());
////			ans.setSurveyId(uiAnswer.get);
//			ans.setValue(uiAnswer.getAnswer());
//			answers.add(ans);
//		}
//		return answers;
//	} catch (Exception e) {
//	return answers;
//	}
//}




//
//	private void __updateExistingAnswers(Survey survey,
//		List<SurveryAnswer> answers) {
//		SurveyAnswerDAO dao = new SurveyAnswerDAO();
//	try {
//		for (Iterator iterator = answers.iterator(); iterator.hasNext();) {
//			SurveryAnswer answer = (SurveryAnswer) iterator
//					.next();
//			String uocQuestionId =answer.getUocQuestionId();
//			long surveyId = survey.getIdsurvey();
//			SurveryAnswer findAnswer = dao.getByPk(uocQuestionId, surveyId);
//			findAnswer.setAnsweredAt(new Date());
//			findAnswer.setValue(answer.getValue());
//			answer = dao.save(findAnswer);
//			dao.refresh(answer);
//		}
//	} catch (Exception e) {
//		// TODO: handle exception
//	}
//	
//}
//








//	private boolean __isAllQuestionAnswered(
//		List<SurveryAnswer> primaryAnswers) {
//	try {
//		for (Iterator iterator = primaryAnswers.iterator(); iterator
//				.hasNext();) {
//			SurveryAnswer answer = (SurveryAnswer) iterator
//					.next();
//			if(!answer.getValue().equalsIgnoreCase(SurveyDataService.yesAnswer) && !answer.getValue().equalsIgnoreCase(SurveyDataService.noAnswer))
//				return false;
//			
//		}
//		return true;
//		
//	} catch (Exception e) {return true;
//	
//	}
//}
//
//
//	private boolean __isPrimaryQuestion(QuestionSurveyBean dbQuestion, List<QuestionSurveyBean> answers ){
//		try {
//			
//		for (Iterator iterator = answers.iterator(); iterator.hasNext();) {
//			QuestionSurveyBean questionSurveyBean = (QuestionSurveyBean) iterator
//					.next();
//			if(questionSurveyBean.isPrimary()==dbQuestion.isPrimary())
//				return true;
//	
//		}
//return false;
//		} catch (Exception e) {
//			return false;
//			}
//		
//	}
//	
	


	@POST
	 @Path ("/admin/profile/edit")
	 @Consumes(MediaType.APPLICATION_JSON)
	 @Produces(MediaType.APPLICATION_JSON)
	 public Response editUserByAdmin( ProfileListItemBean bean ){
		try {
			String loginId = getLoggedInUserId();
			SurveyDataServiceHelper helper = new SurveyDataServiceHelper(request);
			helper.editUserByAdmin(bean);
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		return  null;
	}	


	@POST
	 @Path ("/admin/profile/create")
	 @Consumes(MediaType.APPLICATION_JSON)
	 @Produces(MediaType.APPLICATION_JSON)
	 public Response createNewUserByAdmin( ProfileListItemBean bean ){
		try {
			String loginId = getLoggedInUserId();
			SurveyDataServiceHelper helper = new SurveyDataServiceHelper(request);
			helper.createNewUserByAdmin(bean);
		} catch (Exception e) {
			// TODO: handle exception
		}
return null;
	}	
	@POST
		 @Path ("/survey/save")
		 @Consumes(MediaType.APPLICATION_JSON)
		 @Produces(MediaType.APPLICATION_JSON)
		 public Response createNewSurvey( SurveyDataBean surveyDataBean ){
		try {
			String loginId = getLoggedInUserId();
			SurveyDataServiceHelper helper = new SurveyDataServiceHelper(request);
			helper.saveSurvey(surveyDataBean);
			return createOkResponse();
		} catch (Exception e) {
			return createBadRequestResponse(e.getMessage());
		} 

	 }
	

//	private Survey _getExistingSurvey(Individual individual ,Need need, Dapssco dapssco){
//		Survey survey = null;
//		try {
//			SurveyDAO surveyDao = new SurveyDAO();
//			survey = surveyDao.getSurveyByPathwayofIndividual(individual, need, dapssco);
//			
//			return survey;
//			
//		} catch (Exception e) {
//		return survey;
//		}
//	}
//	
//	
//	 
//
//
//
//
//private List<UocBean> _convertUocBeans(List<Uoc> uniqueUOCS) {
//	List<UocBean> uocBeans = new ArrayList<UocBean>();
//		try {
//			
//			for (Iterator iterator = uniqueUOCS.iterator(); iterator.hasNext();) {
//				Uoc uoc  = (Uoc) iterator.next();
//				UocBean uocbean = new UocBean();
//				uocbean.setDescription(uoc.getDescription());
//				uocbean.setId(uoc.getIdsuoc());
//				uocbean.setName(uoc.getName());
//				uocbean.setType(uoc.getType());
//				uocBeans.add(uocbean);
//				
//			}
//			
//			return uocBeans;
//		} catch (Exception e) {
//			return uocBeans;
//		}
//	}
//
//
//private List<UocQuestion> _getUOCQuestions(List<Uoc> uniqueUOCS) {
//	List<UocQuestion> questions = new ArrayList<UocQuestion>();
//	try {
//		for (Iterator iterator = uniqueUOCS.iterator(); iterator.hasNext();) {
//			Uoc uoc = (Uoc) iterator.next();
//			questions.addAll(uoc.getUocQuestions());
//			
//		}
//		return questions;
//		
//	} catch (Exception e) {
//		return questions;
//	}
//	}
//
//
//
//
//
//private List<Uoc> _getUniqueUocs(List<Uoc> uocs) {
//	
//	List<Uoc> uniqueUocs = new ArrayList<Uoc>();
//		try {
//			for (Iterator iterator = uocs.iterator(); iterator.hasNext();) {
//				Uoc uoc = (Uoc) iterator.next();
//				if(!uniqueUocs.contains(uoc))
//					uniqueUocs.add(uoc);
//				
//			}
//			return uniqueUocs;
//			
//		} catch (Exception e) {
//			return uniqueUocs;
//		}
//	}
//
//



//private List<Uoc> _getUOCSFromUOCGroups(
//			List<UocGroup> filterdUocGroups) {
//	List<Uoc> uocs = new ArrayList<Uoc>();
//		try {
//			
//			for (Iterator iterator = filterdUocGroups.iterator(); iterator.hasNext();) {
//				UocGroup uocgroup = (UocGroup) iterator.next();
//				uocs.addAll(uocgroup.getUocs());
//				
//			}
//			return uocs;
//		} catch (Exception e) {
//			return uocs;
//		}
//	}
//
//
//


 



//private List<UocGroup> _filterUocGroups(List<UocGroup> uocGroupsByDapssco,
//			List<UocGroup> uocGroupsByNeed) {
//	List<UocGroup> filteredUocGroups = new ArrayList<UocGroup>();
//		try {
//			for (Iterator iterator = uocGroupsByDapssco.iterator(); iterator
//					.hasNext();) {
//				UocGroup uocGroupofDapssco = (UocGroup) iterator.next();
//				boolean isContains = uocGroupsByNeed.contains(uocGroupofDapssco);
//				if(isContains){
//					filteredUocGroups.add(uocGroupofDapssco);
//				}
//			}
//			return filteredUocGroups;
//		} catch (Exception e) {
//		return filteredUocGroups;
//		}
//		
//	}


//	private List<Uoc> getUOCByNeedDapssco(Dapssco dapsscoEntity, Need needEntity) {
//		final class Temp {
//			private List<Uoc> collection = new ArrayList<Uoc>();
//
//			public void add(List<Uoc> uocs) {
//				if (uocs != null) {
//					for (Iterator iterator = uocs.iterator(); iterator
//							.hasNext();) {
//						Uoc uoc = (Uoc) iterator.next();
//						if (!collection.contains(uoc))
//							collection.add(uoc);
//					}
//				}
//
//			}
//
//			public List<Uoc> get() {
//				return collection;
//			}
//		}
//
//		List<UocGroup> cUocGroupbyNeed = new ArrayList<UocGroup>();
//		List<UocGroup> cUocGroupbyDapssco = new ArrayList<UocGroup>();
//
//		List<UocGroup> cUocGroupbyNeedDapssco = new ArrayList<UocGroup>();
//if(needEntity!=null){
//		cUocGroupbyNeed = needEntity.getUocGroups();
//}
//if(dapsscoEntity!=null){
//cUocGroupbyDapssco = null;// dapsscoEntity.getUocGroups();
//}
//cUocGroupbyNeedDapssco = mergedUocGroup(cUocGroupbyNeed,
//				cUocGroupbyDapssco);
//		Temp temp = new Temp();
//
//		for (Iterator iterator = cUocGroupbyNeedDapssco.iterator(); iterator
//				.hasNext();) {
//			UocGroup uocGroup = (UocGroup) iterator.next();
//			List<Uoc> uocs = uocGroup.getUocs();
//			temp.add(uocs);
//
//		}
//
//		List<Uoc> cUoc = temp.get();
//		return cUoc;
//
//	}

//	private List<UocGroup> mergedUocGroup(List<UocGroup> cUocGroupbyNeed,
//			List<UocGroup> cUocGroupbyDapssco) {
//		final class TempUocGroup {
//			private List<UocGroup> collection = new ArrayList<UocGroup>();
//
//			public void add(UocGroup obj) {
//				if (!collection.contains(obj))
//					collection.add(obj);
//			}
//
//			public List<UocGroup> get() {
//				return collection;
//			}
//
//		}
//		// TODO Auto-generated method stub
//
//		TempUocGroup tuc = new TempUocGroup();
//		if (cUocGroupbyDapssco != null) {
//			for (Iterator iterator = cUocGroupbyDapssco.iterator(); iterator
//					.hasNext();) {
//				UocGroup uocGroup = (UocGroup) iterator.next();
//				tuc.add(uocGroup);
//			}
//		}
//
//		if (cUocGroupbyNeed != null) {
//			for (Iterator iterator = cUocGroupbyNeed.iterator(); iterator
//					.hasNext();) {
//				UocGroup uocGroup = (UocGroup) iterator.next();
//				tuc.add(uocGroup);
//			}
//		}
//		return tuc.get();
//
//	}
//
//
//
//
//	private List<Uoc> _newGap_getUocs(List<UocQuestion> questions) throws NullPointerException {
//		List<Uoc> temp = new ArrayList<Uoc>();;
//		try {
//				for (Iterator iterator = questions.iterator(); iterator.hasNext();) {
//					UocQuestion uocQuestion = (UocQuestion) iterator.next();
//					Uoc uoc = uocQuestion.getUoc();
//					boolean isContains = temp.contains(uoc);
//					if(!isContains)
//					temp.add(uoc);
//				}
//				
//				int size = temp.size();
//				if(size==0)
//					throw new NullPointerException("No UOC found");
//				return temp;
//				
//			} catch (Exception e) {
//				throw new NullPointerException();
//			}
//		}
//
//



//	private List<UocQuestion> _newGap_getQuestions(Survey survey) throws NullPointerException{
//			List<UocQuestion> questions = null;
//			try {
//			questions =	survey.getUocQuestions();
//			if(questions==null){
//				throw new NullPointerException("No Question Found");
//			}
//			int size =questions.size();
//				if(size== 0){
//					throw new NullPointerException("No Question Found");
//				}
//				return questions;
//			} catch (Exception e) {
//				throw new NullPointerException("Survey is Null");
//			}
// 
//		}
//
//


//
//	private Need _getNeed(String needName) throws NullPointerException{
//			Need need = null;
//			try {
//				NeedDAO needDao = new NeedDAO();
//				need =needDao.getNeedByName(needName);
//				need.getIdneed();
//				return need;
//			} catch (Exception e) {
//				throw new NullPointerException(e.getMessage()+"Need is null");
//			}
//		}
//

 
//	private Individual _getIndividual (String loginId) {
//		Individual individual = null;
//		try {
//			IndividualDAO dao = new IndividualDAO();
//			 individual = dao.getByLogin(loginId);
//			 individual.getIdindividual();
//			 individual.getIdindividual();
//			 dao.refresh(individual);
//			return individual;
//		} catch (Exception e) {
//			 throw new NullPointerException(e.getMessage());
//		}
//		 
//	}
//	private Individual _getIndividualorNullException (String loginId) throws NullPointerException{
//		Individual individual = null;
//		try {
//			IndividualDAO dao = new IndividualDAO();
//			 individual = dao.getByLogin(loginId);
//			 individual.getIdindividual();
//			 individual.getIdindividual();
//			 dao.refresh(individual);
//			return individual;
//		} catch (Exception e) {
//			 throw new NullPointerException(e.getMessage());
//		}
//		 
//	}
//	
//	private Dapssco _getDapssco(Individual individual) throws NullPointerException{
//		Dapssco dapssco = null;
//		try {
//			Level level = individual.getLevel();
//			Occupation occupation = individual.getOccupation();
//			Function function = individual.getFunction();
//			DapsscoDAO dapsscoDao = new DapsscoDAO();
//			dapssco = dapsscoDao.getByLevelOccuFunc(level, occupation, function);
//			dapssco.getIddepssco();
//			return dapssco;
//		} catch (Exception e) {
//			throw new NullPointerException(e.getMessage());
//		}
//	}

}

