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

import au.com.redbackconsulting.skillsurvey.api.bean.FunctionOccupationBean;
import au.com.redbackconsulting.skillsurvey.persistence.FunctionOccupationsDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.FunctionOccupations;

@Path("/functionoccupation")
public class FunctionOccupationService  extends BaseService{
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	 private FunctionOccupationsDAO dao =null;
	
		 public FunctionOccupationService() {
				dao = new FunctionOccupationsDAO();
		 }
		
		/// To get single record according to ID 
		@GET
		@Path("/info/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public FunctionOccupationBean getbyId( @PathParam("id") String id)
		{
			long lID = Long.parseLong(id);
		FunctionOccupations entity = dao.getById(lID);
		FunctionOccupationBean bean = FunctionOccupationBean.get(entity);
		return bean;
		
		}
		
		
		@GET
		@Path("/managed")
		@Produces(MediaType.APPLICATION_JSON)
		public List<FunctionOccupationBean> getManaged() throws IOException {
	
			List<FunctionOccupationBean> result = new ArrayList<>();
			for (FunctionOccupations entity : dao.getAll()) {
				FunctionOccupationBean bean = FunctionOccupationBean.get(entity);
				result.add(bean);
			}
			return result;
		}
	

		
		
	 @GET
	 @Path("/delete/{id}")
	    public Response delete(@PathParam("id") String id) {
		 if (id!=null){
		 long lId = Long.parseLong(id);
	     FunctionOccupations  entity = dao.getById(Long.parseLong(id)); 
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
				@FormParam("functionid") String functionId,
	               @FormParam("occupationid") String occupationid
	              ) {
		{

	        final FunctionOccupations entity = dao.getById(Long.parseLong( id));
	        try {
				
//	      /  	entity.setFunctionId(Long.valueOf(functionId));
//				entity.setOccupationid(Long.valueOf(occupationid));
				
			   
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
		   @FormParam("functionid") String functionId,
           @FormParam("occupationid") String occupationid) {
	
       
       final FunctionOccupations entity = new FunctionOccupations();
      // entity.setIdneed(Long.parseLong(id));
      entity.setFunctionId(Long.valueOf(functionId));
		entity.setOccupationid(Long.valueOf(occupationid));
		
       dao.saveNew(entity);
       return createOkResponse();
   }






	
	

}
