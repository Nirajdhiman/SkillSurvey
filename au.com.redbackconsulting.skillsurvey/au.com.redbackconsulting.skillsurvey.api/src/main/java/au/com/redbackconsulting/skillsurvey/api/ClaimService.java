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

import au.com.redbackconsulting.skillsurvey.api.bean.ClaimBean;
import au.com.redbackconsulting.skillsurvey.persistence.ClaimDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.Claim;

@Path("/claim")
public class ClaimService extends BaseService {

	 private final Logger logger = LoggerFactory.getLogger(this.getClass());
	 private ClaimDAO dao =null;
	
		public ClaimService() {
			dao = new ClaimDAO();
		}
		
		/// To get single record according to ID 
		@GET
		@Path("/info/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public ClaimBean getbyId( @PathParam("id") String id)
		{
			long lID = Long.parseLong(id);
		Claim entity = dao.getById(lID);
		ClaimBean bean = ClaimBean.get(entity);
		
		return bean;
		
		}
		
		
		@GET
		@Path("/managed")
		@Produces(MediaType.APPLICATION_JSON)
		public List<ClaimBean> getManaged() throws IOException {
	
			List<ClaimBean> result = new ArrayList<>();
			for (Claim entity : dao.getAll()) {
				ClaimBean bean = ClaimBean.get(entity);
				result.add(bean);
			}
			return result;
		}
	

		
		
	 @GET
	 @Path("/delete/{id}")
	    public Response delete(@PathParam("id") String id) {
		 if (id!=null){
		 long lId = Long.parseLong(id);
	     Claim  entity = dao.getById(Long.parseLong(id)); 
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
		
	               @FormParam("code") String code
	            ) {


		{
		 
	 
	        final Claim entity = dao.getById(Long.parseLong( id));
	        try {
				entity.setCode(code);
				
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
   		   @FormParam("code") String code) {
	
       
       final Claim entity = new Claim();
      // entity.setIdneed(Long.parseLong(id));
   	entity.setCode(code);
   	//entity.s
       dao.saveNew(entity);
       return createOkResponse();
   }





}
