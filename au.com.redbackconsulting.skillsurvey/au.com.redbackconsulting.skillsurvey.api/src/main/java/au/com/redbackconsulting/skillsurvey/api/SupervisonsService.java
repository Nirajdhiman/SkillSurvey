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

import au.com.redbackconsulting.skillsurvey.api.bean.SupervisonsBean;
import au.com.redbackconsulting.skillsurvey.persistence.IndividualDAO;
import au.com.redbackconsulting.skillsurvey.persistence.SupervisonsDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.Individual;
import au.com.redbackconsulting.skillsurvey.persistence.model.Supervisons;

@Path("/supervisons")

public class SupervisonsService extends BaseService{
	 private final Logger logger = LoggerFactory.getLogger(this.getClass());
	 private SupervisonsDAO dao =null;
	
		public SupervisonsService() {
			dao = new SupervisonsDAO();
		}
		
		/// To get single record according to ID 
		@GET
		@Path("/info/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public SupervisonsBean getbyId( @PathParam("id") String id)
		{
			long lID = Long.parseLong(id);
		Supervisons entity = dao.getById(lID);
		SupervisonsBean bean = SupervisonsBean.get(entity);
		return bean;
		
		}
		
		
		@GET
		@Path("/managed")
		@Produces(MediaType.APPLICATION_JSON)
		public List<SupervisonsBean> getManaged() throws IOException {
	
			List<SupervisonsBean> result = new ArrayList<>();
			long supervisorid;
			long supervisedid;
			IndividualDAO individualDao = new IndividualDAO();
			for (Supervisons entity : dao.getAll()) {
				
				SupervisonsBean bean = SupervisonsBean.get(entity);
				supervisorid =entity.getSupervisorId();
				supervisedid = entity.getSupervisedId();
				Individual supervisorEntity =individualDao.getById(supervisorid);
				Individual supervisedEntity = individualDao.getById(supervisedid);
				
				bean.setSupervisorName(supervisorEntity.getName());
				bean.setSupervisedName(supervisedEntity.getName());
				result.add(bean);
			}
			return result;
		}
	

		
		
	 @GET
	 @Path("/delete/{id}")
	    public Response delete(@PathParam("id") String id) {
		 if (id!=null){
		 long lId = Long.parseLong(id);
	     Supervisons  entity = dao.getById(Long.parseLong(id)); 
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
				
	               @FormParam("supervisedid") String supervisedId,
	               @FormParam("supervisorid") String supervisorId) {


		{
		 
//		GsonFactory gsf = GsonFactory.getInstance();
//	Gson gs = gsf.getGson();
//		LevelBean bean = gs.fromJson(formData, LevelBean.class);
//		
//		
	 
	        final Supervisons entity = dao.getById(Long.parseLong( id));
	        try {
			//	entity.setSupervisedId(Long.valueOf(supervisedId));
			//	entity.setSupervisorId(Long.valueOf(supervisorId));
			   
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
           @FormParam("supervisorid") String supervisorId,
		   @FormParam("supervisedid") String supervisedId

   		             ) {
	
//       IndividualDAO individualDao = new IndividualDAO();
//       Individual supervisor =individualDao.getById(Long.parseLong(supervisorId));
//       Individual supervised =individualDao.getById(Long.parseLong(supervisedId));
//	
       final Supervisons entity = new Supervisons();
		entity.setSupervisorId(Long.valueOf(supervisorId));
       entity.setSupervisedId(Long.valueOf(supervisedId));


       dao.saveNew(entity);
       return createOkResponse();
   }





}
