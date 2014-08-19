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

import au.com.redbackconsulting.skillsurvey.api.bean.FunctionBean;
import au.com.redbackconsulting.skillsurvey.persistence.FunctionDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.Function;

@Path("/function")
public class FunctionService extends BaseService {
	
	 private final Logger logger = LoggerFactory.getLogger(this.getClass());
	 private FunctionDAO dao =null;
	
		public FunctionService() {
			dao = new FunctionDAO();
		}
		
		/// To get single record according to ID 
		@GET
		@Path("/info/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public FunctionBean getbyId( @PathParam("id") String id)
		{
			long lID = Long.parseLong(id);
		Function entity = dao.getById(lID);
		FunctionBean bean = FunctionBean.get(entity);
		return bean;
		
		}
		
		
		@GET
		@Path("/managed")
		@Produces(MediaType.APPLICATION_JSON)
		public List<FunctionBean> getManaged() throws IOException {
	
			List<FunctionBean> result = new ArrayList<>();
			for (Function entity : dao.getAll()) {
				FunctionBean bean = FunctionBean.get(entity);
				result.add(bean);
			}
			return result;
		}
	

		
		
	 @GET
	 @Path("/delete/{id}")
	    public Response delete(@PathParam("id") String id) {
		 if (id!=null){
		 long lId = Long.parseLong(id);
	     Function  entity = dao.getById(Long.parseLong(id)); 
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
				@FormParam("id") String idForm,
	               @FormParam("name") String name,
	               @FormParam("description") String description) {
		{

	        final Function entity = dao.getById(Long.parseLong( id));
	        try {
				
	        	entity.setName(name);
				entity.setDescription(description);
				
			   
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
    		               @FormParam("name") String name,
    		               @FormParam("description") String description) {
	
        
        final Function entity = new Function();
       // entity.setIdneed(Long.parseLong(id));
        entity.setName(name);
        entity.setDescription(description);

        dao.saveNew(entity);
        return createOkResponse();
    }






	
	
}
