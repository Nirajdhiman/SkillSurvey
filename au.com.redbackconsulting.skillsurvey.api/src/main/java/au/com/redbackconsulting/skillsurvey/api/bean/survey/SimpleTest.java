package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import com.google.gson.annotations.Expose;

public class SimpleTest {
	@Expose
	private String id;
	
	@Expose
	private String name;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
