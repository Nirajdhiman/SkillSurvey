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

import au.com.redbackconsulting.skillsurvey.api.bean.OccupationBean;
import au.com.redbackconsulting.skillsurvey.persistence.OccupationDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.Occupation;

@Path("/occupation")
public class OccupationService extends BaseService {

	 private final Logger logger = LoggerFactory.getLogger(this.getClass());
	 private OccupationDAO dao =null;
	
		public OccupationService() {
			dao = new OccupationDAO();
		}
		
		/// To get single record according to ID 
		@GET
		@Path("/info/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public OccupationBean getbyId( @PathParam("id") String id)
		{
			long lID = Long.parseLong(id);
		Occupation entity = dao.getById(lID);
		OccupationBean bean = OccupationBean.get(entity);
		return bean;
		
		}
		
		
		@GET
		@Path("/managed")
		@Produces(MediaType.APPLICATION_JSON)
		public List<OccupationBean> getManaged() throws IOException {
	
			List<OccupationBean> result = new ArrayList<>();
			for (Occupation entity : dao.getAll()) {
				OccupationBean bean = OccupationBean.get(entity);
				result.add(bean);
			}
			return result;
		}
	

		
		
	 @GET
	 @Path("/delete/{id}")
	    public Response delete(@PathParam("id") String id) {
		 if (id!=null){
		 long lId = Long.parseLong(id);
	     Occupation  entity = dao.getById(Long.parseLong(id)); 
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
		 
//		GsonFactory gsf = GsonFactory.getInstance();
//	Gson gs = gsf.getGson();
//		LevelBean bean = gs.fromJson(formData, LevelBean.class);
//		
//		
	 
	        final Occupation entity = dao.getById(Long.parseLong( id));
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
   public Response addNew( 
   		               @FormParam("name") String name,
   		               @FormParam("description") String description) {
	
       
       final Occupation entity = new Occupation();
      // entity.setIdneed(Long.parseLong(id));
       entity.setName(name);
       entity.setDescription(description);

       dao.saveNew(entity);
       return createOkResponse();
   }





}
