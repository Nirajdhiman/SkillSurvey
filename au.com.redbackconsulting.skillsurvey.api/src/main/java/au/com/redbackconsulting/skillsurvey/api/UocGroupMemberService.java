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

import au.com.redbackconsulting.skillsurvey.api.bean.UocGroupMemberBean;
import au.com.redbackconsulting.skillsurvey.persistence.UocGroupMembersDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.UocGroupMembers;

@Path("/uocgroupmember")

public class UocGroupMemberService extends BaseService {
	 private final Logger logger = LoggerFactory.getLogger(this.getClass());
	 private UocGroupMembersDAO dao =null;
	
		public UocGroupMemberService() {
			dao = new UocGroupMembersDAO();
		}
		
		/// To get single record according to ID 
		@GET
		@Path("/info/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public UocGroupMemberBean getbyId( @PathParam("id") String id)
		{
			long lID = Long.parseLong(id);
		UocGroupMembers entity = dao.getById(lID);
		UocGroupMemberBean bean = UocGroupMemberBean.get(entity);
		return bean;
		
		}
		
		
		@GET
		@Path("/managed")
		@Produces(MediaType.APPLICATION_JSON)
		public List<UocGroupMemberBean> getManaged() throws IOException {
	
			List<UocGroupMemberBean> result = new ArrayList<>();
			for (UocGroupMembers entity : dao.getAll()) {
				UocGroupMemberBean bean = UocGroupMemberBean.get(entity);
				result.add(bean);
			}
			return result;
		}
	

		
		
	 @GET
	 @Path("/delete/{id}")
	    public Response delete(@PathParam("id") String id) {
		 if (id!=null){
		 long lId = Long.parseLong(id);
	     UocGroupMembers  entity = dao.getById(Long.parseLong(id)); 
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
				@FormParam("uocgroupid") String uoc_GroupId
	              
				
				) {


		{

	        final UocGroupMembers entity = dao.getById(Long.parseLong( id));
	        try {
			//	entity.setUoc_GroupId(Long.valueOf(uoc_GroupId));
				
			   
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
			@FormParam("uocgroupid") String uoc_GroupId,
			 @FormParam("uocid") String uocid) {
	
       
       final UocGroupMembers entity = new UocGroupMembers();
       
       entity.setUoc_GroupId((entity.getUoc_GroupId()));
       entity.setUoc_Id( (entity.getUoc_Id()));
	
       dao.saveNew(entity);
       return createOkResponse();
   }




}
