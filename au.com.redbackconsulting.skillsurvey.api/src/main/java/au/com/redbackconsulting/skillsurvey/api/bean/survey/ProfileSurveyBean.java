package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import java.util.List;

import au.com.redbackconsulting.skillsurvey.api.bean.FunctionBean;
import au.com.redbackconsulting.skillsurvey.api.bean.LevelBean;
import au.com.redbackconsulting.skillsurvey.api.bean.NeedBean;
import au.com.redbackconsulting.skillsurvey.api.bean.OccupationBean; 

import com.google.gson.annotations.Expose;

public class ProfileSurveyBean {

	@Expose
	private String loginId;
	
	@Expose
	private String name ;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


	@Expose
	private UserTypeBean userType;

	@Expose
	private GenderBean gender;

	@Expose
	private LocationBean location;

	@Expose
	private FunctionBean function;

	@Expose
	private LevelBean level;

	@Expose
	private OccupationBean jobTitle;
	
	@Expose
	private PathwayBean learningPathway;

 
	public PathwayBean getLearningPathway() {
		return learningPathway;
	}

	public void setLearningPathway(PathwayBean learningPathway) {
		this.learningPathway = learningPathway;
	}



	@Expose
	private String question1; //= "Do you currently hold or are you currently undertaking Higher Education/Tertiary Qualifications" ;

	@Expose
	private ChoiceBean answerQuestion1 ;

	@Expose
	private String question2; //= "If supported by Studybank, would you like to pursue Higher Education/Tertiary Qualifications ?";

	@Expose
	private ChoiceBean answerQuestion2;
	

	@Expose
	private List<ChoiceBean> responseTypes ;

	 

	   

	public ChoiceBean getAnswerQuestion1() {
		return answerQuestion1;
	}

	public void setAnswerQuestion1(ChoiceBean answerQuestion1) {
		this.answerQuestion1 = answerQuestion1;
	}

	public ChoiceBean getAnswerQuestion2() {
		return answerQuestion2;
	}

	public void setAnswerQuestion2(ChoiceBean answerQuestion2) {
		this.answerQuestion2 = answerQuestion2;
	}

	public List<ChoiceBean> getResponseTypes() {
		return responseTypes;
	}

	public void setResponseTypes(List<ChoiceBean> responseTypes) {
		this.responseTypes = responseTypes;
	}


	@Expose
	private List<UserTypeBean> userTypes;

	@Expose
	private List<GenderBean> genders;

	@Expose
	private List<LocationBean> locations;

	@Expose
	private List<FunctionBean> functions;

	@Expose
	private List<LevelBean> levels;

	 
	@Expose
	private List<OccupationBean> jobTitles;
	
	@Expose
	private List<PathwayBean> pathways;

	public List<PathwayBean> getPathways() {
		return pathways;
	}

	public void setPathways(List<PathwayBean> pathways) {
		this.pathways = pathways;
	}

	public List<OccupationBean> getJobTitles() {
		return jobTitles;
	}

	public void setJobTitles(List<OccupationBean> jobTitles) {
		this.jobTitles = jobTitles;
	}

	 
	public List<LevelBean> getLevels() {
		return levels;
	}

	public void setLevels(List<LevelBean> levels) {
		this.levels = levels;
	}

	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	public UserTypeBean getUserType() {
		return userType;
	}

	public void setUserType(UserTypeBean userType) {
		this.userType = userType;
	}

	public GenderBean getGender() {
		return gender;
	}

	public void setGender(GenderBean gender) {
		this.gender = gender;
	}

	public LocationBean getLocation() {
		return location;
	}

	public void setLocation(LocationBean location) {
		this.location = location;
	}

	public FunctionBean getFunction() {
		return function;
	}

	public void setFunction(FunctionBean function) {
		this.function = function;
	}

	public LevelBean getLevel() {
		return level;
	}

	public void setLevel(LevelBean level) {
		this.level = level;
	}

	public OccupationBean getJobTitle() {
		return jobTitle;
	}

	public void setJobTitle(OccupationBean jobTitle) {
		this.jobTitle = jobTitle;
	}

 

	public String getQuestion1() {
		return question1;
	}

	public void setQuestion1(String question1) {
		this.question1 = question1;
	}

	public String getQuestion2() {
		return question2;
	}

	public void setQuestion2(String question2) {
		this.question2 = question2;
	}

	public List<UserTypeBean> getUserTypes() {
		return userTypes;
	}

	public void setUserTypes(List<UserTypeBean> userTypes) {
		this.userTypes = userTypes;
	}

	public List<GenderBean> getGenders() {
		return genders;
	}

	public void setGenders(List<GenderBean> genders) {
		this.genders = genders;
	}

	public List<LocationBean> getLocations() {
		return locations;
	}

	public void setLocations(List<LocationBean> locations) {
		this.locations = locations;
	}

	public List<FunctionBean> getFunctions() {
		return functions;
	}

	public void setFunctions(List<FunctionBean> functions) {
		this.functions = functions;
	}

}
