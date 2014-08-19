package au.com.redbackconsulting.skillsurvey.api;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import au.com.redbackconsulting.skillsurvey.api.bean.SurveyAnswerBean;
import au.com.redbackconsulting.skillsurvey.persistence.SurveyAnswerDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.SurveryAnswer;

@Path("/surveyanswer")

public class SurveyAnswerService extends BaseService{
	 private final Logger logger = LoggerFactory.getLogger(this.getClass());
	 private SurveyAnswerDAO dao =null;
	
		public SurveyAnswerService() {
			dao = new SurveyAnswerDAO();
		}
		
		/// To get single record according to ID 
		@GET
		@Path("/info/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public SurveyAnswerBean getbyId( @PathParam("id") String id)
		{
			long lID = Long.parseLong(id);
		SurveryAnswer entity = dao.getById(lID);
		SurveyAnswerBean bean = SurveyAnswerBean.get(entity);
		return bean;
		
		}
		
		
		@GET
		@Path("/managed")
		@Produces(MediaType.APPLICATION_JSON)
		public List<SurveyAnswerBean> getManaged() throws IOException {
	
			List<SurveyAnswerBean> result = new ArrayList<>();
			for (SurveryAnswer entity : dao.getAll()) {
				SurveyAnswerBean bean = SurveyAnswerBean.get(entity);
				result.add(bean);
			}
			return result;
		}
	

		
		
	 @GET
	 @Path("/delete/{id}")
	    public Response delete(@PathParam("id") String id) {
		 if (id!=null){
		 long lId = Long.parseLong(id);
	     SurveryAnswer  entity = dao.getById(Long.parseLong(id)); 
	     if (entity==null){
	    		return createBadRequestResponse("Error");
				 
	    	 
	     }
		 dao.delete(entity);
		 return createOkResponse();
	    }
	 return createBadRequestResponse("Error");
	 }
	 
		
		
	 @POST
	 @Path("/edit/{id}")
	 @Consumes(MediaType.APPLICATION_FORM_URLENCODED)	
		public Response edit( @PathParam("id") String id,  
				@FormParam("value") String value,
	               @FormParam("answeredat") String answeredAt
	               ) {


		{
		 
//		GsonFactory gsf = GsonFactory.getInstance();
//	Gson gs = gsf.getGson();
//		LevelBean bean = gs.fromJson(formData, LevelBean.class);
//		
//		
	 
	        final SurveryAnswer entity = dao.getById(Long.parseLong( id));
	        try {
				entity.setValue(value);
				entity.setAnsweredAt(new Date());
				
			        dao.save(entity);
			        
			        return createOkResponse();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return createBadRequestResponse("Error");
			}
	       
		}
	 }

@POST
@Path("/create")
@Consumes(MediaType.APPLICATION_JSON  )	
   public Response addNew(@FormParam("id") String id,
		   @FormParam("value") String value,
           @FormParam("answeredat") String answeredAt,
           @FormParam("uocquestionid") String uocquestionid,
           @FormParam("surveyid") String surveyid) {
	
       
       final SurveryAnswer entity = new SurveryAnswer();
       entity.setValue(value);
		entity.setAnsweredAt(new Date());


       dao.saveNew(entity);
       return createOkResponse();
   }




	

}
