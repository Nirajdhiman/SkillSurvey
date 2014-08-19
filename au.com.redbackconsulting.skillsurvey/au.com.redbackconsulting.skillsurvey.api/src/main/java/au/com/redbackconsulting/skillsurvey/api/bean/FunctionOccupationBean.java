package au.com.redbackconsulting.skillsurvey.api.bean;

import au.com.redbackconsulting.skillsurvey.persistence.model.FunctionOccupations;

import com.google.gson.annotations.Expose;

public class FunctionOccupationBean {
	
	@Expose
	private Long functionId;
	
	@Expose
	private Long occupationid;
	
	@Expose
	
	private String functionName;
	
@Expose
	
	private String occupationName;

	public String getFunctionName() {
	return functionName;
}

public void setFunctionName(String functionName) {
	this.functionName = functionName;
}

public String getOccupationName() {
	return occupationName;
}

public void setOccupationName(String occupationName) {
	this.occupationName = occupationName;
}

	public Long getFunctionId() {
		return functionId;
	}

	public void setFunctionId(Long functionId) {
		this.functionId = functionId;
	}

	public Long getOccupationid() {
		return occupationid;
	}

	public void setOccupationid(Long occupationid) {
		this.occupationid = occupationid;
	}

	public static FunctionOccupationBean get(FunctionOccupations entity) {
		FunctionOccupationBean bean = new FunctionOccupationBean();

		bean.setFunctionId(Long.valueOf(entity.getFunctionId()));
		bean.setOccupationid(Long.valueOf(entity.getOccupationid()));
		bean.setFunctionName("functionName");
		bean.setOccupationName("occupationName");
		
		return bean;
	}
	
	

}
