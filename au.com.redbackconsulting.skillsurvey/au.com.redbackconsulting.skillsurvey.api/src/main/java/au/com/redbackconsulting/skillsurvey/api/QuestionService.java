package au.com.redbackconsulting.skillsurvey.api;

import java.io.IOException;
import java.util.ArrayList;
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

import au.com.redbackconsulting.skillsurvey.api.bean.QuestionBean;
import au.com.redbackconsulting.skillsurvey.persistence.QuestionDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.Question;

@Path("/question")

public class QuestionService extends BaseService{
	 private final Logger logger = LoggerFactory.getLogger(this.getClass());
	 private QuestionDAO dao =null;
	
		public QuestionService() {
			dao = new QuestionDAO();
		}
		
		/// To get single record according to ID 
		@GET
		@Path("/info/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public QuestionBean getbyId( @PathParam("id") String id)
		{
			long lID = Long.parseLong(id);
		Question entity = dao.getById(lID);
		QuestionBean bean = QuestionBean.get(entity);
		return bean;
		
		}
		
		
		@GET
		@Path("/managed")
		@Produces(MediaType.APPLICATION_JSON)
		public List<QuestionBean> getManaged() throws IOException {
	
			List<QuestionBean> result = new ArrayList<>();
			for (Question entity : dao.getAll()) {
				QuestionBean bean = QuestionBean.get(entity);
				result.add(bean);
			}
			return result;
		}
	

		
		
	 @GET
	 @Path("/delete/{id}")
	    public Response delete(@PathParam("id") String id) {
		 if (id!=null){
		 long lId = Long.parseLong(id);
	     Question  entity = dao.getById(Long.parseLong(id)); 
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
				@FormParam("style") String style,
	               @FormParam("text") String text
	               ) {


		{
		 
//		GsonFactory gsf = GsonFactory.getInstance();
//	Gson gs = gsf.getGson();
//		LevelBean bean = gs.fromJson(formData, LevelBean.class);
//		
//		
	 
	        final Question entity = dao.getById(Long.parseLong( id));
	        try {
	        	//TODO
				entity.setStyle(style);
				entity.setText(text);
				//entity.setUocQuestions(uocQuestions);
			   
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
   public Response addNew(
		   @FormParam("style") String style,
           @FormParam("text") String text) {
	
       
       final Question entity = new Question();

   	//TODO
		entity.setStyle(style);
		entity.setText(text);
		//entity.setUocQuestions(uocQuestions);
	   

       dao.saveNew(entity);
       return createOkResponse();
   }




}
