package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.google.gson.annotations.Expose;

public class SkillRecogReportBean {
 
	
	@Expose 
	private String needName;
	
	@Expose 
	private String needDescription;
	
	
	public String getNeedDescription() {
		return needDescription;
	}

	public void setNeedDescription(String needDescription) {
		this.needDescription = needDescription;
	}

	public String getNeedName() {
		return needName;
	}

	public void setNeedName(String needName) {
		this.needName = needName;
	}

   
	@Expose
	private List<UnitOfCompetencyBean> items= new ArrayList<UnitOfCompetencyBean>();

	
	public void add( UnitOfCompetencyBean bean){
		
		items.add(bean);
	}
public void addAll(List< UnitOfCompetencyBean> beans){
		
		items.addAll(beans);
	}
  
	public List<UnitOfCompetencyBean> getItems() {
		return items;
	}

	public void setItems(List<UnitOfCompetencyBean> items) {
		this.items = items;
	}

	  
	
   
 
	
	
	
	
	

}
