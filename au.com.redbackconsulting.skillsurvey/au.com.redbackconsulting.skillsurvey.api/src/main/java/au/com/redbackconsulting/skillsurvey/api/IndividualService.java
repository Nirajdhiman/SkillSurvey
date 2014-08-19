
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

import au.com.redbackconsulting.skillsurvey.api.bean.IndividualBean;
import au.com.redbackconsulting.skillsurvey.persistence.IndividualDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.Individual;

@Path("/individual")

public class IndividualService extends BaseService{
	 private final Logger logger = LoggerFactory.getLogger(this.getClass());
	 private IndividualDAO dao =null;
	
		public IndividualService() {
			dao = new IndividualDAO();
		}
		
		/// To get single record according to ID 
		@GET
		@Path("/info/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public IndividualBean getbyId( @PathParam("id") String id)
		{
			long lID = Long.parseLong(id);
		Individual entity = dao.getById(lID);
		IndividualBean bean = IndividualBean.get(entity);
		return bean;
		
		}
		
		@GET
		@Path("/managedself")
		@Produces(MediaType.APPLICATION_JSON)
		public List<IndividualBean> getManagedSelf() throws IOException {
	
			List<IndividualBean> result = new ArrayList<>();
			for (Individual entity : dao.getAll()) {
				IndividualBean bean = IndividualBean.get(entity);
				result.add(bean);
			}
			return result;
		}
	

		
		
		
		@GET
		@Path("/managed")
		@Produces(MediaType.APPLICATION_JSON)
		public List<IndividualBean> getManaged() throws IOException {
	
			List<IndividualBean> result = new ArrayList<>();
			for (Individual entity : dao.getAll()) {
				
				IndividualBean bean = IndividualBean.get(entity);
				result.add(bean);
			}
			return result;
		}
	

		
		
	 @GET
	 @Path("/delete/{id}")
	    public Response delete(@PathParam("id") String id) {
		 if (id!=null){
		 long lId = Long.parseLong(id);
	     Individual  entity = dao.getById(Long.parseLong(id)); 
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
				@FormParam("department") String department,
	               @FormParam("function") String function,
	               @FormParam("gender") String gender,		             
	               @FormParam("level") String level,		             
	               @FormParam("login") String login,
	               @FormParam("name") String name,		             
	               @FormParam("occupation") String occupation,		             
	               @FormParam("password") String password,		             
	               @FormParam("roleassignments") String roleAssignments,		             
	               @FormParam("surveys") String surveys
		             
	             
				) {


		{
		 
//		GsonFactory gsf = GsonFactory.getInstance();
//	Gson gs = gsf.getGson();
//		LevelBean bean = gs.fromJson(formData, LevelBean.class);
//		
//		
	 
	        final Individual entity = dao.getById(Long.parseLong( id));
	        try {
	        	//TODO
				//entity.setDepartment(department);
				//entity.setFunction(function);
				entity.setGender(gender);
				//entity.setLevel(level);
				entity.setLogin(login);
				entity.setName(name);
			//	entity.setOccupation(occupation);
				entity.setPassword(password);
			//	entity.setRoleAssignments(roleAssignments);
			//	entity.setSurveys(surveys);
	        	
				
			   
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
   public Response addNew(@FormParam("department") String department,
           @FormParam("function") String function,
           @FormParam("gender") String gender,		             
           @FormParam("level") String level,		             
           @FormParam("login") String login,
           @FormParam("name") String name,		             
           @FormParam("occupation") String occupation,		             
           @FormParam("password") String password,		             
           @FormParam("roleassignments") String roleAssignments,		             
           @FormParam("surveys") String surveys) {
	
       
       final Individual entity = new Individual();
     //TODO
		//entity.setDepartment(department);
		//entity.setFunction(function);
		entity.setGender(gender);
		//entity.setLevel(level);
		entity.setLogin(login);
		entity.setName(name);
	//	entity.setOccupation(occupation);
		entity.setPassword(password);
	//	entity.setRoleAssignments(roleAssignments);
	//	entity.setSurveys(surveys);
   	
		
       dao.saveNew(entity);
       return createOkResponse();
   }




}
