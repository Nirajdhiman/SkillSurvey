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

import au.com.redbackconsulting.skillsurvey.api.bean.UocQuestionBean; 
import au.com.redbackconsulting.skillsurvey.persistence.UocDAO;
import au.com.redbackconsulting.skillsurvey.persistence.UocQuestionDAO; 
import au.com.redbackconsulting.skillsurvey.persistence.model.Uoc;
import au.com.redbackconsulting.skillsurvey.persistence.model.UocQuestion;

@Path("/uocquestion")

public class UocQuestionService extends BaseService{
	 private final Logger logger = LoggerFactory.getLogger(this.getClass());
	 private UocQuestionDAO dao =null;
	
		public UocQuestionService() {
			dao = new UocQuestionDAO();
		}
		
		@GET
		@Path("/mapped")
		@Produces(MediaType.APPLICATION_JSON)
		public List<UocQuestionBean> getMapped( )
		{
		
		 
			List<UocQuestionBean> result = new ArrayList<>();
		List<UocQuestion> entities = dao.getAll();
		
		for (UocQuestion entity : entities) {
			UocQuestionBean bean = UocQuestionBean.get(entity);
			result.add(bean );
		}
		
		return result;
		
		}
		
		
		
		/// To get single record according to ID 
		@GET
		@Path("/info/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public UocQuestionBean getbyId( @PathParam("id") String id)
		{
			long lID = Long.parseLong(id);
		UocQuestion entity = dao.getById(lID);
		UocQuestionBean bean = UocQuestionBean.get(entity);
		return bean;
		
		}
		
		
		@GET
		@Path("/managed")
		@Produces(MediaType.APPLICATION_JSON)
		public List<UocQuestionBean> getManaged() throws IOException {
	
			List<UocQuestionBean> result = new ArrayList<>();
			for (UocQuestion entity : dao.getAll()) {
				UocQuestionBean bean = UocQuestionBean.get(entity);
				result.add(bean);
			}
			return result;
		}
	

		
		
	 @GET
	 @Path("/delete/{id}")
	    public Response delete(@PathParam("id") String id) {
		 if (id!=null){
		 long lId = Long.parseLong(id);
	     UocQuestion  entity = dao.getById(Long.parseLong(id)); 
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
				@FormParam("idquestion") String idquestion
	             ) {


		{
	 
	        final UocQuestion entity = dao.getById(Long.parseLong( id));
	        try {
				//entity.setQuestion(question);
				//TODO
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
		   @FormParam("questionid") String questionId,		   
		   @FormParam("uocid") String uocId
   		               ) {
	
  final UocQuestion entity = new UocQuestion();
      
  Uoc uoc = new Uoc();
  uoc.setIdsuoc( (uocId));
//  Question question = new Question();
//  question.setIdquestion(Long.parseLong(questionId));
//       entity.setQuestion(question);
       entity.setUoc(uoc);

       dao.saveNew(entity);
       return createOkResponse();
  
   }





}
