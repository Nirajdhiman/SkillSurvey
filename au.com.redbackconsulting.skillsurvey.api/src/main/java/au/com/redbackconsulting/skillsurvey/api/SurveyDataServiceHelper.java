package au.com.redbackconsulting.skillsurvey.api;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

 

























import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.core.Response;

import au.com.redbackconsulting.skillsurvey.api.bean.FunctionBean;
import au.com.redbackconsulting.skillsurvey.api.bean.LevelBean;
import au.com.redbackconsulting.skillsurvey.api.bean.OccupationBean;
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
import au.com.redbackconsulting.skillsurvey.api.bean.survey.ProviderBean;
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
import au.com.redbackconsulting.skillsurvey.api.exception.NoAnsweredFoundForExistingSurvey;
import au.com.redbackconsulting.skillsurvey.api.exception.NoNeedMappedToUserType;
import au.com.redbackconsulting.skillsurvey.api.exception.NoSuchDapsscoExistException;
import au.com.redbackconsulting.skillsurvey.api.exception.NoSuchNeedExistException;
import au.com.redbackconsulting.skillsurvey.api.exception.NoSuchSurveyExistException;
import au.com.redbackconsulting.skillsurvey.api.exception.NoSuchUserExistException;
import au.com.redbackconsulting.skillsurvey.api.exception.NoUOCExistException;
import au.com.redbackconsulting.skillsurvey.api.exception.PrimaryQuestionNotExistsException;
import au.com.redbackconsulting.skillsurvey.api.exception.ProfileNotUpdatedException;
import au.com.redbackconsulting.skillsurvey.api.exception.SurveyCreateException;
import au.com.redbackconsulting.skillsurvey.persistence.DapsscoDAO;
import au.com.redbackconsulting.skillsurvey.persistence.FunctionDAO;
import au.com.redbackconsulting.skillsurvey.persistence.IndividualDAO;
import au.com.redbackconsulting.skillsurvey.persistence.LevelDAO;
import au.com.redbackconsulting.skillsurvey.persistence.LocationDAO;
import au.com.redbackconsulting.skillsurvey.persistence.NeedDAO;
import au.com.redbackconsulting.skillsurvey.persistence.OccupationDAO;
import au.com.redbackconsulting.skillsurvey.persistence.SurveyAnswerDAO;
import au.com.redbackconsulting.skillsurvey.persistence.SurveyDAO;
import au.com.redbackconsulting.skillsurvey.persistence.UserTypeDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.Dapssco;
import au.com.redbackconsulting.skillsurvey.persistence.model.Function;
import au.com.redbackconsulting.skillsurvey.persistence.model.Individual;
import au.com.redbackconsulting.skillsurvey.persistence.model.Level;
import au.com.redbackconsulting.skillsurvey.persistence.model.Location;
import au.com.redbackconsulting.skillsurvey.persistence.model.Need;
import au.com.redbackconsulting.skillsurvey.persistence.model.Occupation;
import au.com.redbackconsulting.skillsurvey.persistence.model.Provider;
import au.com.redbackconsulting.skillsurvey.persistence.model.SurveryAnswer;
import au.com.redbackconsulting.skillsurvey.persistence.model.Survey;
import au.com.redbackconsulting.skillsurvey.persistence.model.Uoc;
import au.com.redbackconsulting.skillsurvey.persistence.model.UocGroup;
import au.com.redbackconsulting.skillsurvey.persistence.model.UocQuestion;
import au.com.redbackconsulting.skillsurvey.persistence.model.UserType;
import au.com.redbackconsulting.skillsurvey.persistence.model.UserTypeNeeds;

public final class SurveyDataServiceHelper {
	
	private final static short questionTypePrimary =1;
	private final static short questionTypesecondary =2;
	private final static short questionTypeQuestion =3;
	
	private final static String answerYes = "Yes";
	private final static String answerNo = "No";
	private final static String answerNotAnswered = "No Answer";
	
	private final static String statusYes = "Yes";
	private final static String  statusNo = "No"; 
	private final static String statusNotApplicable="Not Applicable";
	
	private final static String  pleaseSelect = "Please Select";
	private static String desirable ="Desirable";
	private static String highlyDesirable="highlydesirable";
	
	final static private String adminType = "admin";
	final static private String individualType = "Individual";
	final static private String reportingType = "report";
	final static private String defaultType = "default";
	final static private String supervisorType = "Supervisor";
	private HttpServletRequest request ;
	
	 
	
	
	Individual user =null; 
	Function function =null;
	Occupation occupation =null;
	Level level = null;
	Dapssco dapssco =null;
	SurveyDAO surveyDao = null;
	SurveyAnswerDAO surveyAnswerDao = null;
	
	
	
	public boolean getProfileStatus(){
		try {
			
			String loginId = user.getLogin();
			
			if(loginId.startsWith(SurveyDataServiceHelper.adminType)|| loginId.startsWith(SurveyDataServiceHelper.reportingType)){
				
				return true;
				
			}
			UserType userType = user.getUsertypefk();
			String gender = user.getGender();
			Location location =user.getLocation();
			
			
		if(function==null || occupation==null || level == null || dapssco==null
				|| userType==null || gender==null || location==null )
			return false;
		return true;
//			boolean result = individualDao.getProfileUpdateStatus(name);
		//	return result;
			
		} catch (Exception e) {
			return true;
		}
	}
	
	
	
public SurveyDataServiceHelper (  HttpServletRequest request) throws NoSuchUserExistException, ProfileNotUpdatedException , NoSuchDapsscoExistException{
	this.request= request;
	String loginId =	request.getUserPrincipal().getName();
	IndividualDAO dao = new IndividualDAO();
	Individual indivi =dao.getByLogin(loginId);
	if(indivi==null){
		throw new NoSuchUserExistException("There is no" +loginId + "user Exist");
	}
	user = indivi;
	  function = user.getFunction();
	  occupation = user.getOccupation();
	  level = user.getLevel();
	  
	  if(function==null || occupation==null || level== null){
		//  throw new ProfileNotUpdatedException("Profile is not updated");
	  }
	  
	  DapsscoDAO dapsscoDao = new DapsscoDAO();
	  dapssco =dapsscoDao.getByLevelOccuFunc(level, occupation, function);
	
	  if(dapssco==null){
	//	throw new NoSuchDapsscoExistException("There is no dapssco to this individual");
	  }
	  
	  surveyDao = new SurveyDAO();
	  surveyAnswerDao = new SurveyAnswerDAO();
	
}


public SurveyDataBean getSurvey( String needName){
	SurveyDataBean surveybean = new SurveyDataBean();
	List<QuestionSurveyBean> questionSurveyBeans = new ArrayList<QuestionSurveyBean>();
			
	try {
		
		Need need = _getNeed(needName);
		surveybean.setNeedName(need.getName());
		surveybean.setNeedDescription(need.getDescription());
		List<Uoc> uocs = _getUocCollectionByNeedDapsso(  need);
//		List<Uoc> uocs =_filterUniqueUocs(tempUocs);
		List<UocQuestion> uocQuestions = _getUocQuestions(uocs);	
		questionSurveyBeans = _convertIntQuestionSurveyBeanCollection(uocQuestions);
		surveybean.setQuestions(questionSurveyBeans);
		List<UocBean> uocBeans = _convertIntoUOCBeans(uocs);
		surveybean.setCourseItems(uocBeans);
		Survey survey =_getSurvey(need);
		long surveyId = survey.getIdsurvey();
		List<SurveryAnswer> answers = _getSurveyAnswersByNeed(need,survey);
		questionSurveyBeans =_getupdatedByAnswerBean(questionSurveyBeans, answers, surveyId);
		surveybean.setQuestions(questionSurveyBeans);
		

		return surveybean;
		
	} catch (NoSuchNeedExistException e) {
		// TODO: handle exception
	} catch (NoUOCExistException e) {
		
	} catch (NoSuchSurveyExistException e) {
		
	} catch (NoAnsweredFoundForExistingSurvey e) {
		
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	
	return surveybean;
	
}



public void saveSurvey(SurveyDataBean surveyDataBean)throws SurveyCreateException {
	Need need = null;
	List<UocQuestion> allPrimaryQuestion = null;

	Survey survey= null;
	try {
		String needName =surveyDataBean.getNeedName();
		need = _getNeed(needName);
		
		  
		 
			List<Uoc> tempUocs = _getUocCollectionByNeedDapsso(  need);
			List<Uoc> uocs = _filterUniqueUocs(tempUocs);
			List<UocQuestion> uocQuestions = _getUocQuestions(uocs);
				
			allPrimaryQuestion =_getQuestionByQtnType(uocQuestions, questionTypePrimary);

			List<QuestionSurveyBean> questionBeans = surveyDataBean.getQuestions();
		List<SurveryAnswer> answers = _convertBeanToEntity(questionBeans);
		
			
			
			 
			

			List<SurveryAnswer> allPrimaryAnswers = _filterAnswersByQtnType(answers, allPrimaryQuestion);
			
			List<SurveryAnswer> primaryYesAnswered =_filterAnswersByAnsType( allPrimaryAnswers, SurveyDataServiceHelper.answerYes );
			List<SurveryAnswer> primaryNoAnswered =_filterAnswersByAnsType( allPrimaryAnswers, SurveyDataServiceHelper.answerNo );
			List<SurveryAnswer> primaryNotAnswered =_filterAnswersByAnsType( allPrimaryAnswers, SurveyDataServiceHelper.answerNotAnswered );
			
			int yesSize = primaryYesAnswered.size();
			int noSize = primaryNoAnswered.size();
			int notAnsweredSize = primaryNotAnswered.size();
			
			int total = yesSize+noSize+notAnsweredSize;
			int answered = yesSize+noSize;
			
			
			 survey=_getSurvey(need);
				

				
			if(total==answered){		
			survey.setCompletedAt(new Date());
			} else {
				survey.setCompletedAt(null);
			}
			
			survey= surveyDao.save(survey);
			  surveyDao.refresh(survey);
		
			  long surveyId = survey.getIdsurvey();
				
				
				for (Iterator iterator = questionBeans.iterator(); iterator.hasNext();) {
					QuestionSurveyBean questionSurveyBean = (QuestionSurveyBean) iterator
							.next();
					
					SurveryAnswer answer = new SurveryAnswer();
					answer.setAnsweredAt(new Date());
					answer.setSurveyId(surveyId);
					answer.setUocQuestionId(questionSurveyBean.getUocQuestionId());
					answer.setValue(questionSurveyBean.getAnswer());
					answer =surveyAnswerDao.save (answer);
					surveyAnswerDao.refresh(answer);
					
					
				}
		
		
		
		
		  
		  
		
		
	} catch (NoSuchNeedExistException e) {
		throw new SurveyCreateException("No Need Exist");
	} catch (NoSuchSurveyExistException e) {
		
		survey = new Survey();
		
		List<QuestionSurveyBean> questionBeans = surveyDataBean.getQuestions();
		
		List<SurveryAnswer> answers = _convertBeanToEntity(questionBeans);
		
		List<SurveryAnswer> allPrimaryAnswers = _filterAnswersByQtnType(answers, allPrimaryQuestion);
		
		List<SurveryAnswer> primaryYesAnswered =_filterAnswersByAnsType( allPrimaryAnswers, SurveyDataServiceHelper.answerYes );
		List<SurveryAnswer> primaryNoAnswered =_filterAnswersByAnsType( allPrimaryAnswers, SurveyDataServiceHelper.answerNo );
		List<SurveryAnswer> primaryNotAnswered =_filterAnswersByAnsType( allPrimaryAnswers, SurveyDataServiceHelper.answerNotAnswered );
		
		int yesSize = primaryYesAnswered.size();
		int noSize = primaryNoAnswered.size();
		int notAnsweredSize = primaryNotAnswered.size();
		
		int total = yesSize+noSize+notAnsweredSize;
		int answered = yesSize+noSize;
		
		if(total==answered){		
		survey.setCompletedAt(new Date());
		}
		
		survey.setDapssco(dapssco);
		survey.setIndividual(user);
		survey.setNee(need);
		survey.setStartedAt(new Date());
		survey = surveyDao.saveNew(survey);
		surveyDao.refresh(survey);
		long surveyId = survey.getIdsurvey();
		
		
		for (Iterator iterator = questionBeans.iterator(); iterator.hasNext();) {
			QuestionSurveyBean questionSurveyBean = (QuestionSurveyBean) iterator
					.next();
			
			SurveryAnswer answer = new SurveryAnswer();
			answer.setAnsweredAt(new Date());
			answer.setSurveyId(surveyId);
			answer.setUocQuestionId(questionSurveyBean.getUocQuestionId());
			answer.setValue(questionSurveyBean.getAnswer());
			answer =surveyAnswerDao.saveNew(answer);
			surveyAnswerDao.refresh(answer);
			
			
		}
		
		
	} catch (NoUOCExistException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (PrimaryQuestionNotExistsException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} 
}



private List<SurveryAnswer> _convertBeanToEntity(
		List<QuestionSurveyBean> questionBeans) {
	
	List<SurveryAnswer> collection = new ArrayList<SurveryAnswer>();
	try {
		for (Iterator iterator = questionBeans.iterator(); iterator.hasNext();) {
			QuestionSurveyBean questionSurveyBean = (QuestionSurveyBean) iterator
					.next();
			
			SurveryAnswer answer = new SurveryAnswer();
			answer.setUocQuestionId(questionSurveyBean.getUocQuestionId());
			answer.setValue(questionSurveyBean.getAnswer());
			answer.setSurveyId(questionSurveyBean.getsurveyId());
//			answer.setAnsweredAt(questionSurveyBean.get);
			
			collection.add(answer);
			
		}
		return collection;
	} catch (Exception e) {

		return collection;
	}
}


private boolean _isAllPrimaryAnswered(List<QuestionSurveyBean> questionBeans) {
	try {
		for (Iterator iterator = questionBeans.iterator(); iterator
				.hasNext();) {
			QuestionSurveyBean answer = (QuestionSurveyBean) iterator
					.next();
			if(!answer.getAnswer().equalsIgnoreCase(SurveyDataServiceHelper.answerYes) && !answer.getAnswer().equalsIgnoreCase(SurveyDataServiceHelper.answerNo))
				return false;
			
		}
		return true;
		
	} catch (Exception e) {return true;
	
	}
}


//private Survey _createNewSurvey(Need need) throws SurveyCreateException{
//	try {
//		Survey survey = new Survey();
//		
//		
//	} catch (Exception e) {
//		throw new SurveyCreateException(e.getMessage());
//	}
//}


private List<UocBean> _convertIntoUOCBeans(List<Uoc> uocs) {
	List<UocBean> uocBeans = new ArrayList<UocBean>();
	try {
		for (Iterator iterator = uocs.iterator(); iterator.hasNext();) {
			Uoc uoc = (Uoc) iterator.next();
			UocBean uocbean = UocBean.get(uoc);
			Provider provider = uoc.getProvider();
			ProviderBean providerBean = ProviderBean.get(provider);
			providerBean.setCourseURL(provider.getCourseURL()+"?code");
			uocbean.setProvider(providerBean);
			uocBeans.add(uocbean);
			
			
		}
		
		return uocBeans;
	} catch (Exception e) {
		return uocBeans;
	}
}


private List<QuestionSurveyBean> _getupdatedByAnswerBean(
		List<QuestionSurveyBean> questionSurveyBeans,
		List<SurveryAnswer> answers, long surveyId) {
	List<QuestionSurveyBean> collection = new ArrayList<QuestionSurveyBean>();
	try {
		for (Iterator iterator = answers.iterator(); iterator.hasNext();) {
			SurveryAnswer surveryAnswer = (SurveryAnswer) iterator.next();
			for (Iterator iterator2 = questionSurveyBeans.iterator(); iterator2
					.hasNext();) {
				QuestionSurveyBean quBean = (QuestionSurveyBean) iterator2.next();
				if(surveryAnswer.getUocQuestionId().equalsIgnoreCase(quBean.getUocQuestionId())){
					quBean.setAnswer(surveryAnswer.getValue());
					quBean.setSurveyId(surveyId);
					
					collection.add(quBean);
				}
				
			}
			
		}
		return collection;
	} catch (Exception e) {
		return  collection;
	}
}


private List<QuestionSurveyBean> _convertIntQuestionSurveyBeanCollection(
		List<UocQuestion> uocQuestions) {
	
	List<QuestionSurveyBean> collection = new ArrayList<QuestionSurveyBean>();
  	try {
		for (Iterator iterator = uocQuestions.iterator(); iterator.hasNext();) {
			UocQuestion uocQuestion = (UocQuestion) iterator.next();
			QuestionSurveyBean bean = new QuestionSurveyBean();
			bean.setCourseId(uocQuestion.getUoc().getIdsuoc());
		 	bean.setPrimary(uocQuestion.isIsprimay());
			bean.setQuestion(uocQuestion.getText());
			bean.setStyle(uocQuestion.getStyle());
			bean.setUocQuestionId(uocQuestion.getIduocquestion());
			bean.setUocName(uocQuestion.getUoc().getName());
			collection.add(bean);
			
		}
		return collection;
	} catch (Exception e) {
return collection;
	}
}

private OverviewListSurveyBean _getOverviewByNeed(String needName){
	OverviewListSurveyBean overview = new OverviewListSurveyBean();
	List<Uoc> uocs = new ArrayList<Uoc>();
	Survey survey = null;
	try {
		
		
		Need need = _getNeed(needName);
		overview.setNeedName(need.getName());
		overview.setNeedDesciption(need.getDescription());
		List<Uoc> tempUocs = _getUocCollectionByNeedDapsso(  need);
		uocs = _filterUniqueUocs(tempUocs);
		List<UocQuestion> uocQuestions = _getUocQuestions(uocs);
		
		
		 survey = _getSurvey(need);
		List<SurveryAnswer> answers = _getSurveyAnswersByNeed(need, survey);
			
		List<UocQuestion> allPrimaryQuestion =_getQuestionByQtnType(uocQuestions, questionTypePrimary);
		List<SurveryAnswer> allPrimaryAnswers = _filterAnswersByQtnType(answers, allPrimaryQuestion);
		
		
		List<SurveryAnswer> primaryYesAnswered =_filterAnswersByAnsType( allPrimaryAnswers, SurveyDataServiceHelper.answerYes );
		List<SurveryAnswer> primaryNoAnswered =_filterAnswersByAnsType( allPrimaryAnswers, SurveyDataServiceHelper.answerNo );
		List<SurveryAnswer> primaryNotAnswered =_filterAnswersByAnsType( allPrimaryAnswers, SurveyDataServiceHelper.answerNotAnswered );
		
		int yesSize = primaryYesAnswered.size();
		int noSize = primaryNoAnswered.size();
		int notAnsweredSize = primaryNotAnswered.size();
		
		int total = yesSize+noSize+notAnsweredSize;
		int answered = yesSize+noSize;
		int percentage = (answered*100)/total;
		
		SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
		Date startDt = survey.getStartedAt();
		String startDtStr = "";
		
		Date completedDt = survey.getCompletedAt();
		String completedDtStr = "";
		if (startDt!=null){
			startDtStr= df.format(startDt);
			
		}
		if (completedDt!=null){
			completedDtStr= df.format(completedDt);
			
		}
	
		overview.setStartDate(startDtStr);
		overview.setFinishDate(completedDtStr);
		if(total==answered){
			overview.setStatus("Completed");
		} else  {overview.setStatus("In Process");}

		overview.setPercentage(percentage);
		
	} catch (NoSuchNeedExistException e) {
		overview.setNeedName(needName);

		overview.setStatus("No course for the need :"+ needName.toUpperCase());
		overview.setPercentage(0);
	} catch (NoUOCExistException e) {
		overview.setStatus("No Course Assigned");
		overview.setPercentage(0);
 
	} catch (NoSuchSurveyExistException e) {
		overview.setStatus("Not Started");
		overview.setPercentage(0);
		 
	} catch (NoAnsweredFoundForExistingSurvey e) {
		
		overview.setStatus("No Answered Found");
		overview.setPercentage(0);
		
	} catch (PrimaryQuestionNotExistsException e) {
		overview.setStatus("No Primary Question Assigned to Survey");
		overview.setPercentage(0);
	}
	return overview;
}

public List<OverviewListSurveyBean> getOverview ( ){
	List<OverviewListSurveyBean> reports = new ArrayList<OverviewListSurveyBean>();
	try {
		List<Need> userTypeNeed =_getUserTypeNeed();
		
		for (Iterator iterator = userTypeNeed.iterator(); iterator.hasNext();) {
			Need need = (Need) iterator.next();
			OverviewListSurveyBean bean = _getOverviewByNeed(need.getName());
			reports.add(bean);

			
		}
		
		 
				return reports;
		
	} catch (NoNeedMappedToUserType e) {
		return reports;
	}
	
	
}

private List< Need> _getUserTypeNeed() throws NoNeedMappedToUserType{
	try {
		UserType  usertype = user.getUsertypefk();
		List<Need> needs = usertype.getNeeds();
		if(needs==null || needs.size()==0)
			throw new NoNeedMappedToUserType("No NeedMapped to UserType");
		return needs;
	} catch (Exception e) {
		throw new NoNeedMappedToUserType("No NeedMapped to UserType");

	}
}


private MenusBean _getMenu(){
	MenusBean result =new MenusBean();
	try {
		
		String loginId = user.getLogin();
	
		
		if(loginId.toLowerCase().startsWith(adminType.toLowerCase())){
		return _getAdminMenu(SurveyDataServiceHelper.adminType);
		}

		if( loginId.toLowerCase().startsWith(reportingType.toLowerCase()))
		{
			return _getReporting(SurveyDataServiceHelper.reportingType);
		}
		
		
	 	UserType userType = user.getUsertypefk();
		String userName = userType.getUserType();
		if(SurveyDataServiceHelper.individualType.equalsIgnoreCase(userName)){
			
			result=_getIndividualMenus(SurveyDataServiceHelper.individualType);
			return result;
		} else if(SurveyDataServiceHelper.supervisorType.equalsIgnoreCase(userName)){

			result=_getSupervisorMenus(SurveyDataServiceHelper.supervisorType);
			return result;
		} else {
			
		//	result =_getDefault(SupervisonsServ);
		}
		
	} catch (Exception e) {
		// TODO: handle exception
	}
	return result ;
	
}

private MenusBean _getReporting(String reportingtype2) {
	MenusBean menusBean = new MenusBean();
	menusBean.setUserType(reportingtype2);
	try {
		MenuBean home = new MenuBean();
		menusBean.add(home);
		home.setDefault(false);
		home.setKey("profileHome");
		home.setLabel("Home");
		
		MenuBean homeSubmenu = new MenuBean();
		home.addSubMenu(homeSubmenu);
		homeSubmenu.setDefault(true);
		homeSubmenu.setKey("Home-Master"); 
		homeSubmenu.setLabel("Home");
		
		MenuBean userManagementMainMenu = new MenuBean();
		userManagementMainMenu.setKey("usermanagement");
		userManagementMainMenu.setLabel("User Management");
		userManagementMainMenu.setDefault(false);
		
		menusBean.add(userManagementMainMenu);
	 	
		MenuBean userManagementSubMenu = new MenuBean();
		userManagementMainMenu.addSubMenu(userManagementSubMenu);
		userManagementSubMenu.setDefault(true);
		userManagementSubMenu.setKey("usermanagement-UserManagement");	
		userManagementSubMenu.setLabel("User Management");
		
 
		 
//		/////////
		
		
		MenuBean manageSurvey = new MenuBean();
		menusBean.add(manageSurvey);
		manageSurvey.setKey("usermanagement-UserManagement");
		manageSurvey.setLabel("Manage Survey");
		manageSurvey.setDefault(false);
		
	 
		MenuBean survey = new MenuBean();
		manageSurvey.addSubMenu(survey);
		survey.setDefault(false);
		survey.setKey("managesurvey-ManageSurvey");	
		survey.setLabel("Survey");
		
		MenuBean report = new MenuBean();
		manageSurvey.addSubMenu(report);
		report.setDefault(false);
		report.setKey("managesurvey-ManageReport");	
		report.setLabel("Report");
		
 ///////////
	
		
		MenuBean manageSite = new MenuBean();
		menusBean.add(manageSite);
		manageSite.setKey("managesite");
		manageSite.setLabel("Manage Site");
		manageSite.setDefault(false);
		
	 
		MenuBean manageSiteContent = new MenuBean();
		manageSite.addSubMenu(manageSiteContent);
		manageSiteContent.setDefault(false);
		manageSiteContent.setKey("managesite-ManageSite");	
		manageSiteContent.setLabel("Manage Site Content");
		
		 
		
		return menusBean;
		
		
		}catch (NullPointerException e)
		{
			
			return null;
		}
		
		
}


private MenusBean _getAdminMenu(String admintype2) {
 try{
	 MenusBean menusBean = new MenusBean();
		menusBean.setUserType(admintype2);
		try {
			MenuBean home = new MenuBean();
			menusBean.add(home);
			home.setDefault(false);
			home.setKey("profileHome");
			home.setLabel("Home");
			
			MenuBean homeSubmenu = new MenuBean();
			home.addSubMenu(homeSubmenu);
			homeSubmenu.setDefault(true);
			homeSubmenu.setKey("Home-Master"); 
			homeSubmenu.setLabel("Home");
			
			MenuBean userManagementMainMenu = new MenuBean();
			userManagementMainMenu.setKey("usermanagement");
			userManagementMainMenu.setLabel("User Management");
			userManagementMainMenu.setDefault(false);
			
			menusBean.add(userManagementMainMenu);
		 	
			MenuBean userManagementSubMenu = new MenuBean();
			userManagementMainMenu.addSubMenu(userManagementSubMenu);
			userManagementSubMenu.setDefault(true);
			userManagementSubMenu.setKey("usermanagement-UserManagement");	
			userManagementSubMenu.setLabel("User Management");
			
	 
			 
//			/////////
			
			
			MenuBean manageSurvey = new MenuBean();
			menusBean.add(manageSurvey);
			manageSurvey.setKey("usermanagement-UserManagement");
			manageSurvey.setLabel("Manage Survey");
			manageSurvey.setDefault(false);
			
		 
			MenuBean survey = new MenuBean();
			manageSurvey.addSubMenu(survey);
			survey.setDefault(false);
			survey.setKey("managesurvey-ManageSurvey");	
			survey.setLabel("Survey");
			
			MenuBean report = new MenuBean();
			manageSurvey.addSubMenu(report);
			report.setDefault(false);
			report.setKey("managesurvey-ManageReport");	
			report.setLabel("Report");
			
	 ///////////
		
			
			MenuBean manageSite = new MenuBean();
			menusBean.add(manageSite);
			manageSite.setKey("managesite");
			manageSite.setLabel("Manage Site");
			manageSite.setDefault(false);
			
		 
			MenuBean manageSiteContent = new MenuBean();
			manageSite.addSubMenu(manageSiteContent);
			manageSiteContent.setDefault(false);
			manageSiteContent.setKey("managesite-ManageSite");	
			manageSiteContent.setLabel("Manage Site Content");
			
			 
			
			return menusBean;
			
			
			}catch (NullPointerException e)
			{
				
				return null;
			}
			
		
	}catch (NullPointerException e)
	{
		return null;
	}
		
		
}



private MenusBean _getIndividualMenus(String individualtype) {
	MenusBean menusBean = new MenusBean();
	menusBean.setUserType(individualtype);
	try {
		MenuBean home = new MenuBean();
		menusBean.add(home);
		home.setDefault(false);
		home.setKey("profileHome");
		home.setLabel("Home");
		
		MenuBean homeSubmenu = new MenuBean();
		home.addSubMenu(homeSubmenu);
		homeSubmenu.setDefault(true);
		homeSubmenu.setKey("Home-Master"); 
		homeSubmenu.setLabel("Home");
		
		MenuBean mySurvey = new MenuBean();
		mySurvey.setKey("mysurvey");
		mySurvey.setLabel("My Surveys");
		mySurvey.setDefault(false);
		
		menusBean.add(mySurvey);
	 	
		MenuBean overview = new MenuBean();
		mySurvey.addSubMenu(overview);
		overview.setDefault(true);
		overview.setKey("mysurvey-SurveyOverview");	
		overview.setLabel("Overview");
		
		MenuBean mandatory = new MenuBean();
		mySurvey.addSubMenu(mandatory);
		mandatory.setDefault(false);
		mandatory.setKey("mysurvey-Mandatory");	
		mandatory.setLabel("Mandatory");
		
		
		MenuBean desirable = new MenuBean();

		mySurvey.addSubMenu(desirable);
				desirable.setDefault(false);
		desirable.setKey("mysurvey-Desirable");	
		desirable.setLabel("Desirable");
		
		
		MenuBean highlydesirable = new MenuBean();
		
		mySurvey.addSubMenu(highlydesirable);
		highlydesirable.setDefault(false);
		highlydesirable.setKey("mysurvey-HighlyDesirable");	
		highlydesirable.setLabel("Highly Desirable");
	
//		/////////
		
		
		MenuBean myReport = new MenuBean();
		menusBean.add(myReport);
		myReport.setKey("myreport");
		myReport.setLabel("My Reports");
		myReport.setDefault(false);
		
		
		
	 
		MenuBean mandatoryReport = new MenuBean();
		myReport.addSubMenu(mandatoryReport);
		mandatoryReport.setDefault(false);
		mandatoryReport.setKey("myreport-MandatoryReport");	
		mandatoryReport.setLabel("Mandatory");
		
		
		MenuBean desirableReport = new MenuBean();
		myReport.addSubMenu(desirableReport);
		desirableReport.setDefault(false);
		desirableReport.setKey("myreport-DesirableReport");	
		desirableReport.setLabel("Desirable");
		
		MenuBean highlydesirableReport = new MenuBean();
		myReport.addSubMenu(highlydesirableReport);
		highlydesirableReport.setDefault(false);
		highlydesirableReport.setKey("myreport-HighlyDesirableReport");	
		highlydesirableReport.setLabel("Highly Desirable");
		
	
		MenuBean gapReport = new MenuBean();
		myReport.addSubMenu(gapReport);
		gapReport.setDefault(false);
		gapReport.setKey("myreport-SkillsCompentencyGapReport");	
		gapReport.setLabel("Skills Compentency Gap");
		
		MenuBean recognitionReport = new MenuBean();
		myReport.addSubMenu(recognitionReport);
		recognitionReport.setDefault(false);
		recognitionReport.setKey("myreport-SkillsRecognitionReport");	
		recognitionReport.setLabel("Skills Recognition");
		
		
		
		

	
		

		
		return menusBean;
		
		
		
		
		
		
		
		
	} catch (Exception e) {
		// TODO: handle exception
	}
	return null;
}

private MenusBean _getSupervisorMenus(String individualtype) {
	MenusBean menusBean = new MenusBean();
	menusBean.setUserType(individualtype);
	try {
		MenuBean home = new MenuBean();
		menusBean.add(home);
		home.setDefault(false);
		home.setKey("profileHome");
		home.setLabel("Home");
		
		MenuBean homeSubmenu = new MenuBean();
		home.addSubMenu(homeSubmenu);
		homeSubmenu.setDefault(true);
		homeSubmenu.setKey("Home-Master"); 
		homeSubmenu.setLabel("Home");
		
		MenuBean mySurvey = new MenuBean();
		mySurvey.setKey("mysurvey");
		mySurvey.setLabel("My Surveys");
		mySurvey.setDefault(false);
		
		menusBean.add(mySurvey);
	 	
		MenuBean overview = new MenuBean();
		mySurvey.addSubMenu(overview);
		overview.setDefault(true);
		overview.setKey("mysurvey-SurveyOverview");	
		overview.setLabel("Overview");
		
		MenuBean mandatory = new MenuBean();
			mandatory.setDefault(false);
		mandatory.setKey("mysurvey-Mandatory");	
		mandatory.setLabel("Mandatory");
		
		MenuBean supervisor = new MenuBean();
			supervisor.setDefault(false);
		supervisor.setKey("mysurvey-Supervisor");	
		supervisor.setLabel("Supervisor");
		
		MenuBean highlydesirable = new MenuBean();
			highlydesirable.setDefault(false);
		highlydesirable.setKey("mysurvey-HighlyDesirable");	
		highlydesirable.setLabel("Highly Desirable");
		
		MenuBean desirable = new MenuBean();
			desirable.setDefault(false);
		desirable.setKey("mysurvey-Desirable");	
		desirable.setLabel("Desirable");
		
//		/////////
		
		
		MenuBean myReport = new MenuBean();
		menusBean.add(myReport);
		myReport.setKey("myreport");
		myReport.setLabel("My Reports");
		myReport.setDefault(false);
		
		
		
	 
		MenuBean mandatoryReport = new MenuBean();
			mandatoryReport.setDefault(false);
		mandatoryReport.setKey("myreport-MandatoryReport");	
		mandatoryReport.setLabel("Mandatory");
		
		MenuBean highlydesirableReport = new MenuBean();
			highlydesirableReport.setDefault(false);
		highlydesirableReport.setKey("myreport-HighlyDesirableReport");	
		highlydesirableReport.setLabel("Highly Desirable");
		
		MenuBean desirableReport = new MenuBean();
		desirableReport.setDefault(false);
		desirableReport.setKey("myreport-DesirableReport");	
		desirableReport.setLabel("Desirable");
	
		MenuBean gapReport = new MenuBean();
		gapReport.setDefault(false);
		gapReport.setKey("myreport-SkillsCompentencyGapReport");	
		gapReport.setLabel("Skills Compentency Gap");
		
		MenuBean recognitionReport = new MenuBean();
		recognitionReport.setDefault(false);
		recognitionReport.setKey("myreport-SkillsRecognitionReport");	
		recognitionReport.setLabel("Skills Recognition");
		
		MenuBean supervisorReport = new MenuBean();
		supervisorReport.setDefault(false);
		supervisorReport.setKey("myreport-SupervisorReport");	
		supervisorReport.setLabel("Supervisor");
	
		
		mySurvey.addSubMenu(mandatory);
		mySurvey.addSubMenu(desirable);
		mySurvey.addSubMenu(highlydesirable);
		mySurvey.addSubMenu(supervisor);
		
		
		myReport.addSubMenu(mandatoryReport);
		myReport.addSubMenu(desirableReport);
		myReport.addSubMenu(highlydesirableReport);
		
		myReport.addSubMenu(supervisorReport);
		myReport.addSubMenu(gapReport);
		myReport.addSubMenu(recognitionReport);
		
		
		
		
		
		return menusBean;
		
		
		
		
		
		
		
		
	} catch (Exception e) {
		// TODO: handle exception
	}
	return null;
}

private String _getMenu1(){
	String loginId =	user.getLogin();
	String fileName = null;
	if(loginId.startsWith(SurveyDataServiceHelper.adminType)){
		fileName = "admin.json";
	} else 
	if(loginId.startsWith(SurveyDataServiceHelper.reportingType)){
		fileName = "report.json";
	}else {
		UserType userType = user.getUsertypefk();
		String userTypeName =userType.getUserType();
		if(userTypeName.equalsIgnoreCase(SurveyDataServiceHelper.individualType))
		fileName= "individual.json";
		else if(userTypeName.equalsIgnoreCase(SurveyDataServiceHelper.supervisorType))
			fileName= "supervisor.json";
		
	}
	
	String menu = SurveyDataService.readMenuJSON(fileName, request);
	return menu;
	
}

public String getMenu1(){
	try {

	return	_getMenu1();
	} catch (Exception e) {
	return null;
	}
}

public MenusBean getMenu(){
	try {

	return	_getMenu();
	} catch (Exception e) {
	return null;
	}
}


public String getRoleName(){
	
	boolean status = false;
	status = request.isUserInRole(adminType);
	if (status)
		return adminType;
	status = request.isUserInRole(individualType);
	if (status)
		return individualType;
	status = request.isUserInRole(reportingType);
	if (status)
		return reportingType;
	return "NoRole";

}
public ReportSurveyBean getNeedReport (String needName){
	
	ReportSurveyBean report = new ReportSurveyBean();
	List<Uoc> uocs = new ArrayList<Uoc>();
	Need need = null;
	try {

		
		 need = _getNeed(needName);

		report.setNeedName(need.getName());
		report.setNeedDescription(need.getDescription());
		report.setTitle(need.getDescription()+" Training");
		
		uocs= _getUocCollectionByNeedDapsso(  need);
 
		List<UocQuestion> uocQuestions = _getUocQuestions(uocs);
		Survey survey= _getSurvey(need);
		List<SurveryAnswer> answers = _getSurveyAnswersByNeed(need, survey);
			
		List<UocQuestion> allPrimaryQuestion =_getQuestionByQtnType(uocQuestions, questionTypePrimary);
		List<SurveryAnswer> allPrimaryAnswers = _filterAnswersByQtnType(answers, allPrimaryQuestion);
		
		
		List<SurveryAnswer> primaryYesAnswered =_filterAnswersByAnsType( allPrimaryAnswers, SurveyDataServiceHelper.answerYes );
		List<SurveryAnswer> primaryNoAnswered =_filterAnswersByAnsType( allPrimaryAnswers, SurveyDataServiceHelper.answerNo );
		List<SurveryAnswer> primaryNotAnswered =_filterAnswersByAnsType( allPrimaryAnswers, SurveyDataServiceHelper.answerNotAnswered );
		
		List<Uoc> uocsYesAnswered = _getUocByAnswered(primaryYesAnswered, allPrimaryQuestion );
		List<Uoc> uocsNoAnswered =  _getUocByAnswered(primaryNoAnswered, allPrimaryQuestion );
		List<Uoc> uocsNotAnswered =  _getUocByAnswered(primaryNotAnswered, allPrimaryQuestion );
	 
		List<UocCourseStatusBean> yesUOCCourseStatusBeans =_convertIntoUOCCourstatusBeans(uocsYesAnswered,SurveyDataServiceHelper.answerYes );
		List<UocCourseStatusBean> noUOCCourseStatusBeans =_convertIntoUOCCourstatusBeans(uocsNoAnswered, SurveyDataServiceHelper.answerNo);
		List<UocCourseStatusBean> notAnsweredUOCCourseStatusBeans =_convertIntoUOCCourstatusBeans(uocsNotAnswered, SurveyDataServiceHelper.answerNotAnswered );
		
		
		

		report.addAll(yesUOCCourseStatusBeans);
		report.addAll(noUOCCourseStatusBeans);
		report.addAll(notAnsweredUOCCourseStatusBeans);
		
		
		
		
		
		
		
		
		
		
		
		
			
	
		 
		
		return report;
		
		
	} catch (NoSuchNeedExistException e) {
		report.setNeedName(needName);
		
	}  
	catch (NoUOCExistException e) {
		report.setNeedName(need.getName());
		
	}catch (NoSuchSurveyExistException e) {
		report.setNeedName(need.getName());
		List<UocCourseStatusBean> notAnsweredUOCCourseStatusBeans =_convertIntoUOCCourstatusBeans(uocs, SurveyDataServiceHelper.answerNotAnswered );
		report.setUocCourses(notAnsweredUOCCourseStatusBeans);
		
		}  
	catch (NoAnsweredFoundForExistingSurvey e) {
		report.setNeedName(need.getName());
		List<UocCourseStatusBean> notAnsweredUOCCourseStatusBeans =_convertIntoUOCCourstatusBeans(uocs, SurveyDataServiceHelper.answerNotAnswered );
		report.setUocCourses(notAnsweredUOCCourseStatusBeans);
	
	} catch (PrimaryQuestionNotExistsException e) {
		 
	} 
	return report;
	
}

private List<Uoc> _filterUniqueUocs(List<Uoc> tempUocs) {
	List<Uoc> filteredUocs = new ArrayList<Uoc>();
	try {
		for (Iterator iterator = tempUocs.iterator(); iterator.hasNext();) {
			Uoc uoc = (Uoc) iterator.next();
			boolean isContain = filteredUocs.contains(uoc);
			if(!isContain)
				filteredUocs.add(uoc);
			
		}
		return filteredUocs;
	} catch (Exception e) {
		return filteredUocs;
	}
}


private List<UocCourseStatusBean> _convertIntoUOCCourstatusBeans(
		List<Uoc> uocsYesAnswered, String completed) {
	
	List<UocCourseStatusBean> beans = new ArrayList<UocCourseStatusBean>();
	try {
		
		for (Iterator iterator = uocsYesAnswered.iterator(); iterator.hasNext();) {
			Uoc uoc = (Uoc) iterator.next();
			UocCourseStatusBean bean = new UocCourseStatusBean();
			bean.setCourseName(uoc.getName());
			if((completed.equalsIgnoreCase(SurveyDataServiceHelper.answerYes)) || (completed.equalsIgnoreCase(SurveyDataServiceHelper.answerNo))){
			bean.setCompleted("Yes");
			bean.setFututeLearning("");
		} else {
			bean.setCompleted("");
			bean.setFututeLearning("Yes");
			
		}
			
 
			beans.add(bean);
		}
		return beans;
	} catch (Exception e) {
		return beans;
	}
}


private List<Uoc> _getUocByAnswered(List<SurveryAnswer> primaryYesAnswered,
		List<UocQuestion> allPrimaryQuestion) {
	List<Uoc> uocs = new ArrayList<Uoc>();
	try {
	for (Iterator iterator = primaryYesAnswered.iterator(); iterator.hasNext();) {
		SurveryAnswer answer = (SurveryAnswer) iterator.next();
		for (Iterator iterator2 = allPrimaryQuestion.iterator(); iterator2
				.hasNext();) {
			UocQuestion uocQuestion = (UocQuestion) iterator2.next();
			if(uocQuestion.getIduocquestion().equalsIgnoreCase(answer.getUocQuestionId()))
			{
				uocs.add(uocQuestion.getUoc());
				break;
			}
			
		}
		
	}	
	return uocs;
	} catch (Exception e) {
		return uocs;
	}
}


private List<SurveryAnswer> _filterAnswersByAnsType(
		List<SurveryAnswer> allPrimaryAnswers, String answerValue) {
	
	List<SurveryAnswer> answers = new ArrayList<SurveryAnswer>();
	try {
		for (Iterator iterator = allPrimaryAnswers.iterator(); iterator
				.hasNext();) {
			SurveryAnswer surveryAnswer = (SurveryAnswer) iterator.next();
			if(surveryAnswer.getValue().equalsIgnoreCase(answerValue)){
				answers.add(surveryAnswer);
			}
		}
		return answers;
	} catch (Exception e) {
		return answers;
	}
}


private List<SurveryAnswer> _filterAnswersByQtnType(
		List<SurveryAnswer> answers, List<UocQuestion> allPrimaryQuestion) {
	
	List<SurveryAnswer> resultAnswers = new ArrayList<SurveryAnswer>();
try {
	for (Iterator iterator = answers.iterator(); iterator.hasNext();) {
		SurveryAnswer answer = (SurveryAnswer) iterator.next();
		for (Iterator iterator2 = allPrimaryQuestion.iterator(); iterator2.hasNext();) {
			UocQuestion question = (UocQuestion) iterator2.next();
			if(answer.getUocQuestionId().equalsIgnoreCase(question.getIduocquestion()))
			{
				resultAnswers.add(answer);
				break;
			}
			
		}
		
		
	}
	return resultAnswers;
} catch (Exception e) {
	return resultAnswers;
}
}


private List<UocQuestion> _getQuestionByQtnType(List<UocQuestion> uocQuestions,
		short questiontype) throws PrimaryQuestionNotExistsException {
	List<UocQuestion> questions = new ArrayList<UocQuestion>();
	try {
		for (Iterator iterator = uocQuestions.iterator(); iterator.hasNext();) {
			UocQuestion uocQuestion = (UocQuestion) iterator.next();
			if(uocQuestion.isIsprimay().shortValue()== questiontype)
				questions.add(uocQuestion);
			
		}
		
		if(questions.size()==0)
			throw new PrimaryQuestionNotExistsException("No Question Found");
		
		return questions;
		
	} catch (Exception e) {
		throw new PrimaryQuestionNotExistsException("No Question Found");
	}
}

public ProfileListItemBean getBlankUserProfile( ){
	ProfileListItemBean bean = new ProfileListItemBean();
	try {
		
		List<UserTypeBean> userTypes = _getUserTypes();
		List<FunctionBean> functions = _getFunctions();
		List<PathwayBean> pathways = _getPathways();
		List<GenderBean> genders = _getGenders();
		List<LocationBean> locations = _getlocations();
		List<LevelBean> levels =_getLevels(null);
		bean.setLoginId("");
		bean.setPassword("");
		bean.setMylock(false);
		bean.setMylockedOn(null);
		bean.setPwChangeOn(null);
		
		bean.setLocation(locations.get(0));
		 	bean.setFunction(functions.get(0));
		bean.setLearningPathway(pathways.get(0));
		bean.setGender(genders.get(0));
		bean.setUserType(userTypes.get(0));
		bean.setLevel(levels.get(0));
		 
		bean.setGenders(_getGenders());
		bean.setPathways(pathways);
		bean.setUserTypes(userTypes);
		bean.setFunctions(functions);
		bean.setLocations(locations);
		bean.setLevels(levels );
		
		
		return bean;
		
	} catch (Exception e) {
return new ProfileListItemBean();
}
	
}


private List<LocationBean> _getlocations() {

	
	 List<LocationBean> beans = new ArrayList<LocationBean>();

	 LocationBean pleaseSelect = new LocationBean();
	 pleaseSelect.setLocationId(-1);
	 pleaseSelect.setLocationName("Please Select ");
	 beans.add(pleaseSelect);
	
	try {
	 	LocationDAO dao = new LocationDAO();
		List<Location> entities = dao.getAll();
		for (Iterator iterator = entities.iterator(); iterator.hasNext();) {
			Location locatin = (Location) iterator.next();
			LocationBean bean = LocationBean.get(locatin);
			beans.add(bean);
			
		}
		return beans;
	} catch (Exception e) {
		return beans;
	} 


}

public ProfileListItemBean getSelectedUserProfile(String selectedUserLoginId){
	ProfileListItemBean bean = new ProfileListItemBean();
	try {
		IndividualDAO dao = new IndividualDAO();
		Individual selectedIndividual =dao.getByLogin(selectedUserLoginId);

	bean =  _getProfileItem(selectedIndividual);
		
		bean.setGenders(_getGenders());
		bean.setPathways(_getPathways());
		bean.setUserTypes(_getUserTypes());
		bean.setFunctions(_getFunctions());
		Function function =selectedIndividual.getFunction();
		bean.setJobTitles(_getJobTitles(function));
		Occupation occupation = selectedIndividual.getOccupation();
		bean.setLevels(_getLevels(occupation));
		return bean;
		
	} catch (Exception e) {
return new ProfileListItemBean();
}
	
}



private List<SurveryAnswer> _getSurveyAnswersByNeed(Need need, Survey survey) throws NoSuchSurveyExistException, NoAnsweredFoundForExistingSurvey {
	try {
		
	//	Survey survey =_getSurvey(need);
	 
		List<SurveryAnswer> answers  =surveyAnswerDao.getBySurveyId(survey.getIdsurvey());
		if(answers==null || answers.size()==0)
			throw new NullPointerException();
		return answers;
		
	} catch (NullPointerException e) {
		throw new NoAnsweredFoundForExistingSurvey();
	}
}


private List<UocQuestion> _getUocQuestions(List<Uoc> uocs) {
	List<UocQuestion> questions = new ArrayList<UocQuestion>();
	try {
		for (Iterator iterator = uocs.iterator(); iterator.hasNext();) {
			Uoc uoc = (Uoc) iterator.next();
			questions.addAll(uoc.getUocQuestions());
			
		}
		return questions;
		
	} catch (Exception e) {
		return questions;
	}
}


private List<Uoc> _getUocCollectionByNeedDapsso( Need need) throws NoUOCExistException{
	try {
		List<Uoc> uocs = new ArrayList<Uoc>();
		
		List<UocGroup> uocGroupsByDapssco =dapssco.getUocGroups();
		List<UocGroup> uocGroupsByNeed = need.getUocGroups();
		if(uocGroupsByDapssco.size()==0 || uocGroupsByNeed.size()==0)
			throw new NoUOCExistException("No UOCGROUPS Mapping exist");
		

		try {
			List<UocGroup> filteredUocGroups = new ArrayList<UocGroup>();
			for (Iterator iterator = uocGroupsByDapssco.iterator(); iterator
					.hasNext();) {
				UocGroup uocGroupofDapssco = (UocGroup) iterator.next();
				boolean isContains = uocGroupsByNeed.contains(uocGroupofDapssco);
				if(isContains){
					filteredUocGroups.add(uocGroupofDapssco);
				}
			}
			
			// getting uoc from filtered uocgrups
			for (Iterator iterator = filteredUocGroups.iterator(); iterator
					.hasNext();) {
				UocGroup uocGroup = (UocGroup) iterator.next();
				List<Uoc> temp = uocGroup.getUocs();
				if(temp!=null && temp.size()>0)
					uocs.addAll(temp);
				
				
			}
			/// checking any duplicate uoc in collection of uocs
			
			List<Uoc> uniqueUocs = new ArrayList<Uoc>();
			for (Iterator iterator = uocs.iterator(); iterator.hasNext();) {
				Uoc uoc = (Uoc) iterator.next();
				if(!uniqueUocs.contains(uoc))
					uniqueUocs.add(uoc);
			}
			return uniqueUocs;
			
			
			
		} catch (Exception e1) {
		throw  new NoUOCExistException(e1.getMessage()) ;
		}
		
		
	} catch (Exception e) {
		throw new NoUOCExistException(e.getMessage());
	}
}

private Survey _getSurvey(Need need) throws NoSuchSurveyExistException{
	try {
		
		 surveyDao = new SurveyDAO();
		Survey  survey = surveyDao.getSurveyByPathwayofIndividual(user, need, dapssco);
		survey.getIdsurvey();
		
		return survey;
	} catch (Exception e) {
		throw new NoSuchSurveyExistException("There is no survey Exist");
	}
}


private Need _getNeed(String needName) throws NoSuchNeedExistException{
			Need need = null;
			try {
				NeedDAO needDao = new NeedDAO();
				need =needDao.getNeedByName(needName);
				need.getIdneed();
				return need;
			} catch (Exception e) {
				throw new NoSuchNeedExistException("No  Such Need Exist");
			}
		}



private ProfileListItemBean _getProfileItem (Individual user){
	 ProfileListItemBean bean = new ProfileListItemBean();
	try {
		
		
		 Level level = user.getLevel();
		 Function function = user.getFunction();
		 Occupation occupation=user.getOccupation();
		 Location location = user.getLocation();
		 UserType userType =user.getUsertypefk();
		 long pathwayId = user.getPathway();
		 PathwayBean pathway  = _getPathway(pathwayId);
		 pathway.setName("");
		 
		 
		 FunctionBean functionBean =  null;
		 OccupationBean occupationBean =  null;
		 LevelBean  levelBean =null;
		 LocationBean locationBean = null;
		 UserTypeBean userTypeBean = null;
	
		 if (function!=null){
		 functionBean = FunctionBean.get(function);
		 }
	
		 if(level!=null)
		 levelBean =LevelBean.get(level);
		
		 if (occupation!=null)
		 occupationBean = OccupationBean.get(occupation);
		 
		 if(location!=null)
		 locationBean = LocationBean.get(location);
		 
		 if(userType!=null)
		 userTypeBean = UserTypeBean.get(userType);
		 
		 bean.setMylockedOn(user.getMylockedOn());
		 bean.setMylock(user.isMylock());
		 bean.setPwChangeOn(user.getPwChangeon());
		 
		 
		String genderName = user.getGender();
 
		 GenderBean genderBean = _getGender(genderName);
		 genderBean.setGenderName("");
		   
		   	 
		   
 
		   bean.setFunction(functionBean);
		   bean.setGender(genderBean);
		   bean.setJobTitle(occupationBean);
		   bean.setLearningPathway(pathway);
		   bean.setLevel(levelBean);
		   bean.setLocation(locationBean);
		   bean.setLoginId(user.getLogin());
		   bean.setUserType(userTypeBean);
		  return bean;
		 
		 
		 
		 
		
	} catch (Exception e) {
		return new ProfileListItemBean();
	}
	
}
 




 
private ChoiceBean _getChoice1(Individual individual) {
	List<ChoiceBean> beans = _getChoices();
	ChoiceBean bean = new ChoiceBean();
	bean= beans.get(0);
	try {
		
	String ans1= individual.getAnsofqtn1();
	if(ans1!=null){
	for (Iterator iterator = beans.iterator(); iterator.hasNext();) {
		ChoiceBean choiceBean = (ChoiceBean) iterator.next();
		if (choiceBean.getId()==Long.parseLong(ans1)){
		return choiceBean;	
		}
		
	}
	return bean;
	} ///
	
return bean;
	} catch (Exception e) {
		return bean;
		 
	}
	 
}


 private ChoiceBean _getChoice2(Individual individual) {
		List<ChoiceBean> beans = _getChoices();
		ChoiceBean bean = new ChoiceBean();
		bean= beans.get(0);
		try {
			
		String ans1= individual.getAnsofqtn2();
		if(ans1!=null){
		for (Iterator iterator = beans.iterator(); iterator.hasNext();) {
			ChoiceBean choiceBean = (ChoiceBean) iterator.next();
			if (choiceBean.getId()== Long.parseLong((ans1))){
			return choiceBean;	
			}
			
		}
		
		} ///
		return bean;
		} catch (Exception e) {
			return bean;
// TODO: handle exception
		}
	}


private List<ChoiceBean> _getChoices() {
	List<ChoiceBean> beans = new ArrayList<ChoiceBean >();
	 try {
		
		ChoiceBean bean2 = new ChoiceBean();
		bean2.setId(0);
		bean2.setName("No");
		beans.add(bean2);
		
		
		ChoiceBean bean = new ChoiceBean();
		bean.setId(1);
		bean.setName("Yes");
		beans.add(bean);
		
		return beans;
	} catch (Exception e) {
	return beans;
	}
}

private List<GenderBean> _getGenders() {
	List<GenderBean> beans = null;
	beans = SurveyDataService.readGenderProperties(request);
	return beans;
//
//	GenderBean pleaseSelect = new GenderBean();
//	pleaseSelect.setGenderId(-1);
//	pleaseSelect.setGenderName(SurveyDataServiceHelper.pleaseSelect);
//	beans.add(pleaseSelect);
//	
//	GenderBean male = new GenderBean();
//	male.setGenderId(1);
//	male.setGenderName("Male");
//	beans.add(male);
//	
//	GenderBean female = new GenderBean();
//	female.setGenderId(2);
//	female.setGenderName("Female");
//	beans.add(female);

	 
}

private GenderBean _getGender(String genderName) {
	GenderBean genderBean ;
	List<GenderBean> genders = _getGenders();
		
	try {
	 		if(genderName!=null){
		for (Iterator iterator = genders.iterator(); iterator.hasNext();) {
			 genderBean = (GenderBean) iterator.next();
			if (genderBean.getGenderName().equalsIgnoreCase(genderName)){
			return genderBean;	
			}
			}
		
		}
	 		genderBean = genders.get(0);

		return genderBean;
		
	} catch (Exception e) {
		genderBean = genders.get(0);

		 return genderBean;
		
	}
}


private PathwayBean _getPathway(long pathwayid) {

	List<PathwayBean> pathways = SurveyDataService.readPathwayProperts(request);
 try {
 
	
	for (Iterator iterator = pathways.iterator(); iterator.hasNext();) {
		PathwayBean pathwayBean = (PathwayBean) iterator.next();
		if(pathwayBean.getId()== pathwayid ){
			return pathwayBean;
		}
	}
	return pathways.get(0);
} catch (Exception e) {
	return pathways.get(0);
}

}





private List<PathwayBean> _getPathways() {
 List<PathwayBean> pathways = SurveyDataService.readPathwayProperts(request);
return pathways;
 // try {
//	 
//	 
//	 PathwayBean p1 = new PathwayBean();
//	 p1.setId(-1);
//	 p1.setName(SurveyDataServiceHelper.pleaseSelect);
//	 pathways.add(p1);
//
//	 PathwayBean p2 = new PathwayBean();
//	 p2.setId(1);
//	 p2.setName("Accredited");
//	 pathways.add(p2);
//
//	 PathwayBean p3 = new PathwayBean();
//	 p3.setId(2);
//	 p3.setName("People");
//	 pathways.add(p3);
//	 
//	 PathwayBean p4 = new PathwayBean();
//	 p4.setId(3);
//	 p4.setName("Corporate");
//	 pathways.add(p4);
//
//	 return pathways;
// } catch (Exception e) {
//	return pathways;
//}

}
public ProfileDetailsBean getProfiles(){
	ProfileDetailsBean bean = new ProfileDetailsBean();
	try {
		IndividualDAO dao = new IndividualDAO();
		List<Individual> individuals =dao.getAll();
		for (Iterator iterator = individuals.iterator(); iterator.hasNext();) {
			Individual individual = (Individual) iterator.next();
			ProfileListItemBean item =_getProfileItem(individual );
			bean.add(item);
			
		}
		
	
		
		
		
		return bean;
	} catch (Exception e) {
		return bean;
	}
	
}


private List<LevelBean> _getLevels(Occupation occupation ) {
	
	List<LevelBean> beans = new ArrayList<LevelBean>();
	LevelBean pleaseSelect = new LevelBean();
	pleaseSelect.setId(-1);
	pleaseSelect.setCode("Please Select");
	pleaseSelect.setDescription("Please Select");
	beans.add(pleaseSelect);
	
	
	try {

		List<Level> entites = new ArrayList<Level>();
		entites =occupation.getLevels();
		for (Iterator iterator = entites.iterator(); iterator.hasNext();) {
			Level level = (Level) iterator.next();
			LevelBean bean = LevelBean.get(level);
			beans.add(bean);
			
		}
		return beans;
	} catch (Exception e) {
		return beans;
	}
	
	

	
	 
}


private List<OccupationBean> _getJobTitles(Function function) {

	 List<OccupationBean> beans = new ArrayList<OccupationBean>();
	 OccupationBean pleaseSelect = new OccupationBean();
	 pleaseSelect.setId(-1);
	 pleaseSelect.setName("Please Select");
	 pleaseSelect.setDescription("Please Select");
	 beans.add(pleaseSelect);

	try {
		OccupationDAO dao = new OccupationDAO();
		List<Occupation> entities = new ArrayList<Occupation>();
		if(function!=null){
		entities =		function.getOccupations();
		
		for (Iterator iterator = entities.iterator(); iterator.hasNext();) {
			Occupation level = (Occupation) iterator.next();
			OccupationBean bean = OccupationBean.get(level);
			beans.add(bean);
			
		}
		return beans;
		
		} 
		return beans;	
	
	} catch (Exception e) {
		return beans;
	}
	//////////
	 
		 

}

private List<FunctionBean> _getFunctions( ) {
List<FunctionBean> beans = new ArrayList<FunctionBean>();
List<Function> entities = null;
FunctionDAO dao = new FunctionDAO(); 
	 try {
		 entities = dao.getAll();
		 
		 for (Iterator iterator = entities.iterator(); iterator.hasNext();) {
			Function function = (Function) iterator.next();
			FunctionBean bean = FunctionBean.get(function)
;
			beans.add(bean);
			}
		 return beans;
	} catch (Exception e) {
		return beans;
	}
}


 

public SurveyGapReport getGapReport(){
	SurveyGapReport report = new SurveyGapReport();
	try {
		 
		List<Need> userTypeNeed =_getUserTypeNeed();

		for (Iterator iterator = userTypeNeed.iterator(); iterator.hasNext();) {
			Need need = (Need) iterator.next();
			ReportSurveyBean bean = getNeedReport(need.getName());
			report.addItem(bean);

			
		}
		
		report.setTitle("Gap Report"); 
		report.setProfile(_getReportProfileInfo());
		 
		return report;
		
	} catch (Exception e) {
		return report;
	}
	
}

private  List<ReportProfileInfoBean> _getReportProfileInfo(){
	 List<ReportProfileInfoBean> cProfileInfo = new ArrayList<ReportProfileInfoBean>();
		
	try {
		

	//	
	 ReportProfileInfoBean rpi1 = new ReportProfileInfoBean();
	  rpi1.setName("PM Keys Number");
	  rpi1.setValue(user.getLogin());
	  cProfileInfo.add(rpi1);

	  String levelName = user.getLevel().getDescription();
	  String occupationName = user.getOccupation().getDescription();
	  ReportProfileInfoBean rpi2 = new ReportProfileInfoBean();
	  rpi2.setName("Occupation");
	  rpi2.setValue(levelName+ " " +occupationName);
	  cProfileInfo.add(rpi2);
	   
	  ReportProfileInfoBean rpiLoca = new ReportProfileInfoBean();
	  rpiLoca.setName("Location");
	  rpiLoca.setValue(user.getLocation().getName());
	  cProfileInfo.add(rpiLoca);
	   
	  

	  ReportProfileInfoBean rpi3 = new ReportProfileInfoBean();
	  rpi3.setName("Preferred Learning Path");
	  long pathwayId =user.getPathway();
	 PathwayBean pathway = _getPathway(pathwayId);
	  rpi3.setValue(pathway.getName());
	  cProfileInfo.add(rpi3);

	  ReportProfileInfoBean rpi4 = new ReportProfileInfoBean();
	  rpi4.setName("Are you a Supervisor/Manager");

	  String  userTypeName =user.getUsertypefk().getUserType();
	      if(userTypeName.equalsIgnoreCase(SurveyDataServiceHelper.individualType)){
	  	 rpi4.setValue("No");
	   } else if (userTypeName.equalsIgnoreCase(SurveyDataServiceHelper.supervisorType)){
	  	 rpi4.setValue("Yes");
	   } 
	  cProfileInfo.add(rpi4);

	return cProfileInfo;
	  
	} catch (Exception e) {
	return cProfileInfo;
	}
} 

private List<UserTypeBean> _getUserTypes() {
	List<UserTypeBean> beans = new ArrayList<UserTypeBean>();
	UserTypeDAO dao = new UserTypeDAO();
	try {
		
		UserTypeBean pleaseSelect = new UserTypeBean();
		pleaseSelect.setUserId(-1);
		pleaseSelect.setUserTypeName(SurveyDataServiceHelper.pleaseSelect);
		beans.add(pleaseSelect);
		List<UserType> entities = dao.getAll();
		for (Iterator iterator = entities.iterator(); iterator.hasNext();) {
			UserType userType = (UserType) iterator.next();
			UserTypeBean bean = new UserTypeBean();
			bean.setUserId(userType.getId());
			bean.setUserTypeName(userType.getUserType());
			beans.add(bean);
		}
		return beans;
	} catch (Exception e) {
		return beans;
	}
}
private SkillRecogReportBean _getReognitionReport(Need need){
	SkillRecogReportBean item = new SkillRecogReportBean();
	item.setNeedName(need.getName());
	item.setNeedDescription(need.getDescription());
	
	
	
	List<Uoc> uocs =null;
	try {
 
		 
		uocs = _getUocCollectionByNeedDapsso(  need);
		List<UocQuestion> uocQuestions = _getUocQuestions(uocs);
		Survey survey= _getSurvey(need);
		List<SurveryAnswer> answers = _getSurveyAnswersByNeed(need, survey);
			
		List<UocQuestion> allPrimaryQuestion =_getQuestionByQtnType(uocQuestions, questionTypePrimary);
		List<SurveryAnswer> allPrimaryAnswers = _filterAnswersByQtnType(answers, allPrimaryQuestion);
	
		List<SurveryAnswer> primaryYesAnswered =_filterAnswersByAnsType( allPrimaryAnswers, SurveyDataServiceHelper.answerYes );
		List<SurveryAnswer> primaryNoAnswered =_filterAnswersByAnsType( allPrimaryAnswers, SurveyDataServiceHelper.answerNo );
		List<SurveryAnswer> primaryNotAnswered =_filterAnswersByAnsType( allPrimaryAnswers, SurveyDataServiceHelper.answerNotAnswered );
		
		int yesSize = primaryYesAnswered.size();
		int noSize = primaryNoAnswered.size();
		int notAnsweredSize = primaryNotAnswered.size();
		
		int totalPrimary = yesSize+noSize+notAnsweredSize;
		int answeredPrimary = yesSize+noSize;
		int percentagePrimary = (answeredPrimary*100)/totalPrimary;
		
		if(percentagePrimary==100){
			
			List<UnitOfCompetencyBean> unitBeans = _convertIntoUnitofCompetencyBeanCollection(uocs, SurveyDataServiceHelper.statusNo, SurveyDataServiceHelper.questionTypePrimary);
		
			 item.setItems(unitBeans);
			 return item;
		}
		
		
		
	 
	 	List<Uoc> yesUocs =_getUocfromAnswers(primaryYesAnswered, allPrimaryQuestion);
		List<UnitOfCompetencyBean> yesUnitBeans = _convertIntoUnitofCompetencyBeanCollection(yesUocs, SurveyDataServiceHelper.statusNo, SurveyDataServiceHelper.questionTypePrimary);
		item.addAll(yesUnitBeans);
	
		if(notAnsweredSize>0){
		 	List<Uoc> notAnsweredUocs =_getUocfromAnswers(primaryNotAnswered, allPrimaryQuestion);
		 	List<UnitOfCompetencyBean> unitBeans = _convertIntoUnitofCompetencyBeanCollection(notAnsweredUocs, SurveyDataServiceHelper.statusNotApplicable, SurveyDataServiceHelper.questionTypePrimary);
			item.addAll(unitBeans);
		}
		
		
		
		
		
 /// if answres is set to No in primary Question
		
		List<Uoc> noAnsweredUOCS =_getUocfromAnswers(primaryNoAnswered, uocQuestions);
		
		
		List<UocQuestion> noSecondaryUocQuestions =  _getUOCQuestionByType(noAnsweredUOCS,uocQuestions, SurveyDataServiceHelper.questionTypesecondary);
		List<SurveryAnswer> allSecondaryQuestinAnswers =_filterAnswersByQtnType(answers, noSecondaryUocQuestions);
			
		List<SurveryAnswer> secondaryYesAnswered =_filterAnswersByAnsType(  allSecondaryQuestinAnswers, SurveyDataServiceHelper.answerYes );
		List<SurveryAnswer> secondaryNoAnswered =_filterAnswersByAnsType( allSecondaryQuestinAnswers, SurveyDataServiceHelper.answerNo );
		List<SurveryAnswer> secondaryNotAnswered =_filterAnswersByAnsType( allSecondaryQuestinAnswers, SurveyDataServiceHelper.answerNotAnswered );
	
		List<Uoc> yesSecondaryUocs =_getUocfromAnswers(secondaryYesAnswered, noSecondaryUocQuestions);
		List<UnitOfCompetencyBean> yesSecondaryUnitBeans = _convertIntoUnitofCompetencyBeanCollection(yesSecondaryUocs, SurveyDataServiceHelper.statusYes, SurveyDataServiceHelper.questionTypesecondary);
		item.addAll(yesSecondaryUnitBeans);
		
		List<Uoc> noSecondaryUocs =_getUocfromAnswers(secondaryNoAnswered, noSecondaryUocQuestions);
		List<UnitOfCompetencyBean> noSecondaryUnitBeans = _convertIntoUnitofCompetencyBeanCollection(noSecondaryUocs, SurveyDataServiceHelper.statusNo, SurveyDataServiceHelper.questionTypesecondary);
		item.addAll(noSecondaryUnitBeans);
		
		
		List<Uoc> notSecondaryUocs =_getUocfromAnswers(secondaryNotAnswered, noSecondaryUocQuestions);
		List<UnitOfCompetencyBean> notSecondaryUnitBeans = _convertIntoUnitofCompetencyBeanCollection(notSecondaryUocs, SurveyDataServiceHelper.statusYes, SurveyDataServiceHelper.questionTypesecondary);
		item.addAll(notSecondaryUnitBeans);
		
		int seoncdaryNotAnswered = secondaryNotAnswered.size();
		 	return item;
		
		 
	
		
	}catch (NoUOCExistException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (NoSuchSurveyExistException e) {
	
		

		List<UnitOfCompetencyBean> unitBeans = _convertIntoUnitofCompetencyBeanCollection(uocs, SurveyDataServiceHelper.statusNotApplicable, SurveyDataServiceHelper.questionTypePrimary);
	
		 item.setItems(unitBeans);
		 return item;

	} catch (NoAnsweredFoundForExistingSurvey e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (PrimaryQuestionNotExistsException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	
	return item;
}



 
//private List<UocQuestion> _getUOC(List<SurveryAnswer> primaryNoORNotAnswered, List<UocQuestion> uocQuestions) {
//	List<Uoc> uocs = new ArrayList<Uoc>();, 
//	try {
//		for (Iterator iterator = primaryNoORNotAnswered.iterator(); iterator
//				.hasNext();) {
//			SurveryAnswer surveryAnswer = (SurveryAnswer) iterator.next();
//			String uocQuestionId = surveryAnswer.getUocQuestionId();
//			_getUocByUocQuestionId(uocQuestionId, uocQuestions);
//		}
//		
//	} catch (Exception e) {
//		// TODO: handle exception
////	}
//private List<UocQuestion> _getUOCQuestionByType(List<Uoc> noORNotAnsweredUOCS,
//		List<UocQuestion> uocQuestions, short questiontypesecondary2) {
//	// TODO Auto-generated method stub
//	return null;
//}




//}



private List<UocQuestion> _getUOCQuestionByType(List<Uoc> noORNotAnsweredUOCS,
		List<UocQuestion> uocQuestions, short questiontypesecondary2) {
	
	List<UocQuestion> result = new ArrayList<UocQuestion>();
	try {
		for (Iterator iterator = noORNotAnsweredUOCS.iterator(); iterator.hasNext();) {
			Uoc uoc = (Uoc) iterator.next();
			for (Iterator iterator2 = uocQuestions.iterator(); iterator2
					.hasNext();) {
				UocQuestion uocQuestion = (UocQuestion) iterator2.next();
				if(uocQuestion.getUoc().equals(uoc) && uocQuestion.isIsprimay()==questiontypesecondary2){
					result.add(uocQuestion);
				}
				
			}
			
		}
		return result;
	} catch (Exception e) {
		return result;
	}
}



private List<UnitOfCompetencyBean> _convertIntoUnitofCompetencyBeanCollection(
		List<Uoc> uocs, String string, short qtnType) {
	List<UnitOfCompetencyBean> beans = new ArrayList<UnitOfCompetencyBean>();
	for (Iterator iterator = uocs.iterator(); iterator
			.hasNext();) {
		Uoc uoc = (Uoc) iterator.next();
		
		UnitOfCompetencyBean bean = __convertUOCIntoUnitofCompetencyBean( uoc, string , qtnType);		
		beans.add(bean);
	}
	return beans;
}



private List<Uoc> _getUocfromAnswers(List<SurveryAnswer> answered, List<UocQuestion> uocQuestions) {
	List<Uoc> uocs = new ArrayList<Uoc>();
	try {
		for (Iterator iterator = answered.iterator(); iterator.hasNext();) {
			SurveryAnswer answer = (SurveryAnswer) iterator.next();
			String uocQuestionId = answer.getUocQuestionId();
			Uoc uoc =_getUocByUocQuestionId(uocQuestionId, uocQuestions);
			uocs.add(uoc);
		}
		return uocs;
	} catch (Exception e) {
		return uocs;
	}
}



private Uoc _getUocByUocQuestionId(String uocQuestionId,
		List<UocQuestion> uocQuestions) {
	 
	try {
		for (Iterator iterator = uocQuestions.iterator(); iterator.hasNext();) {
			UocQuestion uocQuestion = (UocQuestion) iterator.next();
			if(uocQuestion.getIduocquestion().equalsIgnoreCase(uocQuestionId))
				return uocQuestion.getUoc();
		}
		return null;
	} catch (Exception e) {
		return null;
	}
}



private UnitOfCompetencyBean __convertUOCIntoUnitofCompetencyBean(Uoc uoc,
		String status, short qtnType) {
	UnitOfCompetencyBean bean = new UnitOfCompetencyBean();
	try {
		bean.setUocName(uoc.getName());
		
		if(qtnType==SurveyDataServiceHelper.questionTypePrimary){
			
			bean.setRecognition(status);
		}
		if(qtnType==SurveyDataServiceHelper.questionTypesecondary){
		 	bean.setRecognition(status);
		 }
		return bean;
		
	} catch (Exception e) {
		return bean;
	}
}



public SurveyReportSkillRecognitionBean getRecognitionReport(){
SurveyReportSkillRecognitionBean report = new SurveyReportSkillRecognitionBean();
	
report.setTitle("Skills Recognition Report");
try {
		
		List<Need> needs = _getNeeds();
		for (Iterator iterator = needs.iterator(); iterator.hasNext();) {
			Need need = (Need) iterator.next();
			
			if(need.getName().equalsIgnoreCase(SurveyDataServiceHelper.desirable ) || need.getName().equalsIgnoreCase(SurveyDataServiceHelper.highlyDesirable ))
			{SkillRecogReportBean item =_getReognitionReport(need);
			report.add(item);
			}
			
		}

		report.setProfile(_getReportProfileInfo());
		
		return report;

	} catch (Exception e) {
		return report;
	}
	
	
}



private List<Need> _getNeeds() {
	try {
		NeedDAO dao = new NeedDAO();
		List<Need> needs = dao.getAll();
		return needs;
		
	} catch (Exception e) {
	return null;
	}
}



public void editUserByAdmin(ProfileListItemBean bean) {
	try {
		long functionId =	functionId =bean.getFunction().getId();
		long occupationId = bean.getJobTitle().getId();
		long levelId = bean.getLevel().getId();
		long location = bean.getLocation().getLocationId();
		long genderId = bean.getGender().getGenderId();	
		String password= bean.getPassword();
		boolean mylock = bean.isMylock();
		
	} catch (Exception e) {
		// TODO: handle exception
	}
	
}



public void createNewUserByAdmin(ProfileListItemBean bean) {
  
	
	try {
		 	
		
		String loginId = bean.getLoginId();
		Individual individual = _getIndividual(loginId);
		
	} catch (NoSuchUserExistException e) {
	
		Individual individual = new Individual();
		long functionId =	functionId =bean.getFunction().getId();
		long occupationId = bean.getJobTitle().getId();
		long levelId = bean.getLevel().getId();
		long locationId = bean.getLocation().getLocationId();
		long genderId = bean.getGender().getGenderId();	
		String password= bean.getPassword();
		boolean mylock = bean.isMylock();
		PathwayBean pathwayBean = bean.getLearningPathway();
		long pathwayId = pathwayBean.getId();
		GenderBean genderBean = bean.getGender();
		
		Function function = null;
		Occupation occupation = null;
		Level level = null;
		Location location = null;
		
		
		individual.setLogin(bean.getLoginId());
		individual.setPassword(bean.getPassword());
		
		if(functionId>0)
		function =_getFunction(functionId);
		individual.setFunction(function);
		
		if(occupationId>0)
		occupation = _getOccupation(occupationId);
		individual.setOccupation(occupation);

		if(levelId>0)
		level =_getLevel(levelId);
		individual.setLevel(level);
		
		if(locationId>0)
		location = _getlocation(locationId);
		individual.setLocation(location);
			
		individual.setPathway(pathwayId);
	
		individual.setMylock(mylock);
		if(mylock)
		individual.setMylockedOn(new Date());
		
		IndividualDAO dao = new IndividualDAO();
		dao.saveNew(individual);
		
	
		
		
		
	}	
}

private void _getReportingGapReportByFunction(){
	
	try {
		
		FunctionDAO functionDao = new FunctionDAO();
		IndividualDAO individualDao = new IndividualDAO();
		DapsscoDAO dapsscoDao = new DapsscoDAO();
		List<Function> functions = functionDao.getAll();
		for (Iterator iterator = functions.iterator(); iterator.hasNext();) {
			Function function = (Function) iterator.next();
			List<Occupation> occupations = function.getOccupations();
			for (Iterator iterator2 = occupations.iterator(); iterator2.hasNext();) {
				Occupation occupation = (Occupation) iterator2.next();
				List<Level> levels =	occupation.getLevels();
				for (Iterator iterator3 = levels.iterator(); iterator3
						.hasNext();) {
					Level level = (Level) iterator3.next();
				//	List<Individual> individuals = 
			 		Dapssco dapsscoEntity = dapsscoDao.getByLevelOccuFunc(level, occupation, function);
					
//					List<Individual> individuals =level.getIndividuals();
//						for (Iterator iterator4 = individuals.iterator(); iterator4
//								.hasNext();) {
//							Individual individual = (Individual) iterator4
//									.next();
//							List<Survey> surveys =individual.getSurveyes();
//							for (Iterator iterator5 = surveys.iterator(); iterator5
//									.hasNext();) {
//								Survey survey = (Survey) iterator5.next();
//								
//								
//							}
//						}
				}
				
			}

			
		}
		
	} catch (Exception e) {
		// TODO: handle exception
	}
	
}

//private void _getReportingGapReportByFunction(Function function2) {
//	try {
//		
//	List<Occupation> occupations =	function2.getOccupations();
//	
//		for (Iterator iterator = occupations.iterator(); iterator.hasNext();) {
//			Occupation occupation = (Occupation) iterator.next();
//			List<Level> levels =	occupation.getLevels();
//			
//		}
//	
//	} catch (Exception e) {
//		// TODO: handle exception
//	}
//	
//}



private Location _getlocation(long locationId) {
	Location entitiy = null;
	try {
		LocationDAO	 dao = new LocationDAO();
		entitiy = dao.getById(locationId);
		return entitiy;
	} catch (Exception e) {
		return entitiy;
	}
}






private Level _getLevel(long levelId) {
	Level entitiy = null;
	try {
		LevelDAO dao = new LevelDAO();
		entitiy = dao.getById(levelId);
		return entitiy;
	} catch (Exception e) {
		return entitiy;
	}
}



private Occupation _getOccupation(long occupationId) {
	Occupation entitiy = null;
	try {
		OccupationDAO dao = new OccupationDAO();
		entitiy = dao.getById(occupationId);
		return entitiy;
	} catch (Exception e) {
		return entitiy;
	}
}



private Function _getFunction(long functionId) {
	Function function = null;
	try {
		FunctionDAO dao = new FunctionDAO();
		function = dao.getById(functionId);
		return function;
	} catch (Exception e) {
		return function;
	}
}



private Individual _getIndividual(String loginId)  throws NoSuchUserExistException {
	
	try {
		IndividualDAO individualDao = new IndividualDAO();
		Individual individual = individualDao.getByLogin(loginId);
		return individual;
} catch (Exception e) {throw new NoSuchUserExistException("No User Exist");

}
}

public ProfileSurveyBean getProfile( ){
	Individual individual = null;
	 Level level = null;
	 Occupation occupation= null;
	 Function function = null;
	 Location location = null;
	 UserType userType = null;
	 PathwayBean pathway  =null;
	 
	 List<Level> levels = null;
	 List<Occupation> occupatios = null;
	 List<Function> functions = null;
	 List<Location> locations = null;
	 List<UserType> userTypes = null;
	 
	 List<GenderBean> gendersBean = null;
	 
	
	  
 try {
	    level = user.getLevel();
	   function = user.getFunction(); //_getFunction(individual);
	   occupation = user.getOccupation(); //_getOccupation(individual);
		 
	   location = user.getLocation();//_getLocation(individual);
	   
	   userType = user.getUsertypefk() ;//_getUserType(individual);
	   long pathwayId = user.getPathway();
	   pathway=_getPathway(pathwayId);
	   
	   LevelBean  levelBean =LevelBean.get(level);
	   FunctionBean functionBean = FunctionBean.get(function);
	   OccupationBean occupationBean = OccupationBean.get(occupation);
	   LocationBean locationBean = LocationBean.get(location);
	   UserTypeBean userTypeBean = UserTypeBean.get(userType);
	   GenderBean genderBean = _getGender(user.getGender());
	   ChoiceBean ans1Choice = _getChoice1(individual);
	   ChoiceBean ans2Choice = _getChoice2(individual);
	   
	   
	   List<FunctionBean> functionBeans = _getFunctions();//_convertFunctions(functions);
	   List<OccupationBean> occupationBeans = _getOccupations(function);
	   List<LevelBean> levelBeans = _getLevels(occupation); //convertLevels(levels);
		 	   
	       List<LocationBean> locationBeans = _getlocations();//_convertLocations(locations);
	   List<UserTypeBean> userTypeBeans=_getUserTypes();// _convertUserTypes(userTypes);
	   List<GenderBean> genders = SurveyDataService.readGenderProperties(request);//_getGenders();
	   List<ChoiceBean> choices =_getChoices();
	   List<PathwayBean> pathways = _getPathways();
	   
	   ProfileSurveyBean profile = new ProfileSurveyBean();
	   
	   profile.setLoginId(user.getLogin());
	   
	   profile.setUserType(userTypeBean);
	   profile.setUserTypes(userTypeBeans);
	   
	   profile.setGender(genderBean);
	   profile.setGenders(genders);
	   
	   profile.setLocation(locationBean);
	   profile.setLocations(locationBeans);
	   
	   profile.setFunction(functionBean);
	   profile.setFunctions(functionBeans);
	   
	   profile.setJobTitle(occupationBean);
	   profile.setJobTitles(occupationBeans);
	   
	   profile.setLevel(levelBean);
	   profile.setLevels(levelBeans);
	  
	   profile.setLearningPathway(pathway);
	   profile.setPathways(pathways);
	   
	   List<QuestionBean> questions = SurveyDataService.readQuestionProperties(request);
	   
//	   profile.setQuestion1("Do you currently hold or are you currently undertaking Higher Education/Tertiary Qualifications ?");

//	   profile.setQuestion2("If supported by Studybank, would you like to pursue Higher Education/Tertiary Qualification?");

	   profile.setQuestion1(questions.get(1).getQuestion());
	   profile.setQuestion2(questions.get(0).getQuestion());	
	   
	   
	   profile.setAnswerQuestion1(ans1Choice);
	   profile.setAnswerQuestion2(ans2Choice);
	   
	   profile.setResponseTypes(choices);
	   
	   
	 
	 return profile;
	 
} catch (Exception e) {
	return new ProfileSurveyBean();
}

}


private List<OccupationBean> _getOccupations(Function function ) {
	List<OccupationBean> occupationBeans = new ArrayList<OccupationBean>();
	OccupationBean pleaseSelect = new OccupationBean();
	
	try {
		if(function!=null){
//		long id =	function.getIdfunction();
//		if (id!=0){
			List<Occupation> entities =		function.getOccupations();
		
		for (Iterator iterator = entities.iterator(); iterator.hasNext();) {
			Occupation occupation = (Occupation) iterator.next();
			OccupationBean bean = OccupationBean.get(occupation);
			occupationBeans.add(bean);
		}
		}  
		return occupationBeans;
	} catch (Exception e) {
		return occupationBeans;
	}
}

public boolean saveProfile(ProfileSurveyBean profile){
	try {
		
 	UserTypeBean userTypeBean  =profile.getUserType();
	long genderId = profile.getGender().getGenderId();
	GenderBean genderBean = _getGenderById(profile.getGender().getGenderId());
	LocationBean locationBean = profile.getLocation();
	FunctionBean functionBean = profile.getFunction();
	OccupationBean jobTitleBean = profile.getJobTitle();
	LevelBean levelBean= profile.getLevel();
	ChoiceBean answerBean1 = profile.getAnswerQuestion1();
	ChoiceBean answerBean2 = profile.getAnswerQuestion2();
	 
	long userTypeId= userTypeBean.getUserId();
	 	UserTypeDAO userTypeDao = new UserTypeDAO();
	UserType userType= userTypeDao.getById(userTypeId);
		user.setUsertypefk(userType);

	
	user.setGender(genderBean.getGenderName());
	
	long locationId = locationBean.getLocationId();
	 	LocationDAO dao = new LocationDAO();
		Location location = dao.getById(locationId);
		user.setLocation(location);
 
	long functionId = functionBean.getId();
 	FunctionDAO fdao = new FunctionDAO();
	Function functionN = fdao.getById(functionId);
		user.setFunction(functionN);
 	
	long occupationId = jobTitleBean.getId();
 	OccupationDAO cdao = new OccupationDAO();
	Occupation entity = cdao.getById(occupationId);
		user.setOccupation(entity);
 	
	long levelId = levelBean.getId();
		LevelDAO ldao = new LevelDAO();
	Level entityl = ldao.getById(levelId);

	user.setLevel(entityl);
	long pathwayid = profile.getLearningPathway().getId();
	user.setPathway(pathwayid);
	
	
	
	user.setAnsofqtn1(String.valueOf(answerBean1.getId()));
	user.setAnsofqtn2(String.valueOf(answerBean2.getId()));

	
	
	IndividualDAO IndividualDao = new IndividualDAO();

	user  = IndividualDao.save(user);
	IndividualDao.refresh(user); 
	
	
	DapsscoDAO dapsscoDao = new DapsscoDAO();
  
	 
	 if(level!=null && occupation!=null && function!=null){
		Dapssco existDapssco = dapsscoDao.getByLevelOccuFunc(level, occupation, function);
		if(existDapssco==null){
		Dapssco dapsscoEntity = new Dapssco();
		 dapsscoEntity.setLevelId(level );
		 dapsscoEntity.setOccupation(occupation );
		 dapsscoEntity.setFunction(function );
		 dapsscoDao.saveNew(dapsscoEntity);
		 
		}
	 }
	return true;
	} catch (Exception e) {
	return	false;
	}
 
	
}



private GenderBean _getGenderById(long genderId) {
	GenderBean genderBean ;
	List<GenderBean> genders = _getGenders();
	genderBean = genders.get(0);
	
	try {
	 		if(genderId>0){
		for (Iterator iterator = genders.iterator(); iterator.hasNext();) {
			 genderBean = (GenderBean) iterator.next();
			if (genderBean.getGenderId()==genderId){
			return genderBean;	
			}
			}
		
		}
		return genderBean;
		
	} catch (Exception e) {
		 return genderBean;
		
	}
}


}
