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

import au.com.redbackconsulting.skillsurvey.api.bean.LevelBean;
import au.com.redbackconsulting.skillsurvey.persistence.LevelDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.Level;

@Path("/level")
public class LevelService extends BaseService {
	
	

	 private final Logger logger = LoggerFactory.getLogger(this.getClass());
	 private LevelDAO dao =null;
	
		public LevelService() {
			dao = new LevelDAO();
		}
		
		/// To get single record according to ID 
		@GET
		@Path("/info/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public LevelBean getbyId( @PathParam("id") String id)
		{
			long lID = Long.parseLong(id);
		Level entity = dao.getById(lID);
		LevelBean bean = LevelBean.get(entity);
		return bean;
		
		}
		
		
		@GET
		@Path("/managed")
		@Produces(MediaType.APPLICATION_JSON)
		public List<LevelBean> getManaged() throws IOException {
	
			List<LevelBean> result = new ArrayList<>();
			for (Level entity : dao.getAll()) {
				LevelBean bean = LevelBean.get(entity);
				result.add(bean);
			}
			return result;
		}
	

		
		
	 @GET
	 @Path("/delete/{id}")
	    public Response delete(@PathParam("id") String levelId) {
		 if (levelId!=null){
		 long lId = Long.parseLong(levelId);
	     Level  level = dao.getById(lId); 
	     if (level==null){
	    		return createBadRequestResponse("Error");
				 
	    	 
	     }
		 dao.delete(level);
		 return createOkResponse();
	    }
	 return createBadRequestResponse("Error");
	 }
	 
		
		
	 @POST
	 @Path("/edit/{id}")
	 @Consumes(MediaType.APPLICATION_FORM_URLENCODED)	
		public Response edit( @PathParam("id") String id,  
				@FormParam("id") String idForm,
	               @FormParam("code") String code,
	               @FormParam("description") String description) {


		{
	 
	        final Level entity = dao.getById(Long.parseLong( id));
	        try {
				entity.setCode(code);
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
    public Response addNew(
    		               @FormParam("code") String code,
    		               @FormParam("description") String description) {
	
        
        final Level entity = new Level();
        entity.setCode(code);
        entity.setDescription(description);
        dao.saveNew(entity);
        return createOkResponse();
    }


	
}
