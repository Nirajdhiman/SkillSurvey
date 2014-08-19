package au.com.redbackconsulting.skillsurvey.api.utility;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ReportOverViewUtility {
	private List<UOCCourseStautsReport> cUocCourseStatus = new ArrayList<UOCCourseStautsReport>();
	
	public List<UOCCourseStautsReport> get(){
		return this.cUocCourseStatus;
	}
	
	public void add(String uocCourseName, boolean status){
		UOCCourseStautsReport newObj=null;
		for (Iterator iterator = cUocCourseStatus.iterator(); iterator.hasNext();) {
			UOCCourseStautsReport obj = (UOCCourseStautsReport) iterator.next();
			
			
			if(obj.getCourseName().equalsIgnoreCase(uocCourseName)){
				newObj= obj;
				if(!status){
					obj.setcompleted("");
					obj.setFutureLearning("Yes");
					
				}  				
			}
			 
		}
		
		if(newObj==null){
		UOCCourseStautsReport	obj = new UOCCourseStautsReport();
			obj.setCourseName(uocCourseName);
			if(!status){
				obj.setcompleted("");
				obj.setFutureLearning("Yes");
			} else {obj.setcompleted("Yes"); obj.setFutureLearning("");} 
			cUocCourseStatus.add(obj);
		}
		
	}
}
