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

import au.com.redbackconsulting.skillsurvey.api.bean.ClaimAssignmentsBean;
import au.com.redbackconsulting.skillsurvey.persistence.ClaimAssingmentsDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.ClaimAssignments;

@Path("/claimassignments")
public class ClaimAssignmentsService extends BaseService {

	 private final Logger logger = LoggerFactory.getLogger(this.getClass());
	 private ClaimAssingmentsDAO dao =null;
	
		public ClaimAssignmentsService() {
			dao = new ClaimAssingmentsDAO();
		}
		
		/// To get single record according to ID 
		@GET
		@Path("/info/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public ClaimAssignmentsBean getbyId( @PathParam("id") String id)
		{
			long lID = Long.parseLong(id);
		ClaimAssignments entity = dao.getById(lID);
		ClaimAssignmentsBean bean = ClaimAssignmentsBean.get(entity);
		
		return bean;
		
		}
		
		
		@GET
		@Path("/managed")
		@Produces(MediaType.APPLICATION_JSON)
		public List<ClaimAssignmentsBean> getManaged() throws IOException {
	
			List<ClaimAssignmentsBean> result = new ArrayList<>();
			for (ClaimAssignments entity : dao.getAll()) {
				ClaimAssignmentsBean bean = ClaimAssignmentsBean.get(entity);
				result.add(bean);
			}
			return result;
		}
	

		
		
	 @GET
	 @Path("/delete/{id}")
	    public Response delete(@PathParam("id") String id) {
		 if (id!=null){
		  
	     ClaimAssignments  entity = dao.getById(Long.parseLong(id)); 
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
		
	               @FormParam("claimid") String claimId,
	               @FormParam("description") String roleId) {


		{
		 
	 
	        final ClaimAssignments entity = dao.getById(Long.parseLong( id));
	        try {
		//		entity.setClaimid(Long.parseLong(claimId));
		//		entity.setRoleId((roleId));
				
			   
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
    		   @FormParam("claimId") String claimId,
               @FormParam("roleId") String roleId) {
	
        
        final ClaimAssignments entity = new ClaimAssignments();
       entity.setClaimid(Long.parseLong(claimId));

entity.setRoleId(Long.parseLong(roleId));
       
       
        dao.saveNew(entity);
        return createOkResponse();
    }





}
