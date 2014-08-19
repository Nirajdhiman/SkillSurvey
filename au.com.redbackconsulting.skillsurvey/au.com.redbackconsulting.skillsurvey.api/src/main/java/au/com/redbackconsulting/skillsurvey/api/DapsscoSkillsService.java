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

import au.com.redbackconsulting.skillsurvey.api.bean.DapsscoSkillsBean;
import au.com.redbackconsulting.skillsurvey.persistence.DapsscoSkillsDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.DapsscoSkills;

@Path("/dapsscoskills")
public class DapsscoSkillsService  extends BaseService{
	
	 private final Logger logger = LoggerFactory.getLogger(this.getClass());
	 private DapsscoSkillsDAO dao =null;
	
		public DapsscoSkillsService() {
			dao = new DapsscoSkillsDAO();
		}
		
		/// To get single record according to ID 
		@GET
		@Path("/info/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public DapsscoSkillsBean getbyId( @PathParam("id") String id)
		{
			long lID = Long.parseLong(id);
		DapsscoSkills entity = dao.getById(lID);
		DapsscoSkillsBean	 bean = DapsscoSkillsBean.get(entity);
		return bean;
		
		}
		
		
		@GET
		@Path("/managed")
		@Produces(MediaType.APPLICATION_JSON)
		public List<DapsscoSkillsBean> getManaged() throws IOException {
	
			List<DapsscoSkillsBean> result = new ArrayList<>();
			for (DapsscoSkills entity : dao.getAll()) {
			DapsscoSkillsBean bean = DapsscoSkillsBean.get(entity);
				result.add(bean);
			}
			return result;
		}
	

		
		
	 @GET
	 @Path("/delete/{id}")
	    public Response delete(@PathParam("id") String id) {
		 if (id!=null){
		 long lId = Long.parseLong(id);
	     DapsscoSkills  entity = dao.getById(Long.parseLong(id)); 
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
				@FormParam("groupid") String groupId
	               ) {


		{
		 

	        final DapsscoSkills entity = dao.getById(Long.parseLong( id));
	        try {
	//			entity.setUoc_GroupId(Long.valueOf(groupId));
				
			   
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
		   @FormParam("groupid") String groupId
   		               ) {
	
       
   final DapsscoSkills	 entity = new DapsscoSkills();
 //  entity.setUoc_GroupId(Long.valueOf(groupId));
	

       dao.saveNew(entity);
       return createOkResponse();
   }



	
}
