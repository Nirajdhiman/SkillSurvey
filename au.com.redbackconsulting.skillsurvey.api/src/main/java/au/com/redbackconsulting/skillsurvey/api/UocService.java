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

import au.com.redbackconsulting.skillsurvey.api.bean.UocBean;
import au.com.redbackconsulting.skillsurvey.persistence.UocDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.Uoc;
@Path ("/uoc")
public class UocService extends BaseService {
	
	 private final Logger logger = LoggerFactory.getLogger(this.getClass());
	 private UocDAO dao =null;
	
		public UocService() {
			dao = new UocDAO();
		}
		
		/// To get single record according to ID 
		@GET
		@Path("/info/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public UocBean getbyId( @PathParam("id") String id)
		{
			long lID = Long.parseLong(id);
		Uoc entity = dao.getById(lID);
		UocBean bean = UocBean.get(entity);
		return bean;
		
		}
		
		
		@GET
		@Path("/managed")
		@Produces(MediaType.APPLICATION_JSON)
		public List<UocBean> getManaged() throws IOException {
	
			List<UocBean> result = new ArrayList<>();
			for (Uoc entity : dao.getAll()) {
				UocBean bean = UocBean.get(entity);
				result.add(bean);
			}
			return result;
		}
	

		
		
	 @GET
	 @Path("/delete/{id}")
	    public Response delete(@PathParam("id") String id) {
		 if (id!=null){
		 long lId = Long.parseLong(id);
	     Uoc  entity = dao.getById(lId); 
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
	               @FormParam("type") String type,
	               @FormParam("description") String description) {


		{
	 
	        final Uoc entity = dao.getById(Long.parseLong( id));
	        try {
	        	entity.setIdsuoc( (id));
				entity.setName(name);
				entity.setDescription(description);
				entity.setType(type);
			   
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
            @FormParam("name") String name,
            @FormParam("type") String type,
    		               @FormParam("description") String description) {
	
        
        final Uoc entity = new Uoc();
        entity.setName(name);
        entity.setDescription(description);
        entity.setType(type);
        dao.saveNew(entity);
        return createOkResponse();
    }



}
