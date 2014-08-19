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

import au.com.redbackconsulting.skillsurvey.api.bean.DapsscoLevelsBean;
import au.com.redbackconsulting.skillsurvey.persistence.DapsscoLevelDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.DapsscoLevel;


@Path("/dapsscolevels")
public class DapsscoLevelsService extends BaseService{
	 private final Logger logger = LoggerFactory.getLogger(this.getClass());
	 private DapsscoLevelDAO dao =null;
	
		public DapsscoLevelsService() {
			dao = new DapsscoLevelDAO();
		}
		
		/// To get single record according to ID 
		@GET
		@Path("/info/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public DapsscoLevelsBean getbyId( @PathParam("id") String id)
		{
			long lID = Long.parseLong(id);
		DapsscoLevel entity = dao.getById(lID);
		DapsscoLevelsBean bean = DapsscoLevelsBean.get(entity);
		
		return bean;
		
		}
		
		
		@GET
		@Path("/managed")
		@Produces(MediaType.APPLICATION_JSON)
		public List<DapsscoLevelsBean> getManaged() throws IOException {
	
			List<DapsscoLevelsBean> result = new ArrayList<>();
			for (DapsscoLevel entity : dao.getAll()) {
				DapsscoLevelsBean bean = DapsscoLevelsBean.get(entity);
				result.add(bean);
			}
			return result;
		}
	

		
		
	 @GET
	 @Path("/delete/{id}")
	    public Response delete(@PathParam("id") String id) {
		 if (id!=null){
	      DapsscoLevel  entity = dao.getById(Long.parseLong(id)); 
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
				  @FormParam("dapsscoid") String dapsscoId,
	               @FormParam("levelid") String levelId
	            ) {


		{
		 
	 
	        final DapsscoLevel entity = dao.getById(Long.parseLong( id));
	        try {
			//	entity.setDapssco_id(Long.valueOf(dapsscoId));
			//	entity.setLevelId(Long.valueOf(levelId));
				
			        dao.save(entity);
			        
			        return createOkResponse();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return createBadRequestResponse("Error");
			}
	       
		}
	 }

//@POST
//@Path("/create")
//@Consumes(MediaType.APPLICATION_JSON  )	
//   public Response addNew(
//		   @FormParam("dapsscoid") String dapsscoId,
//           @FormParam("levelid") String levelId
//           ) {
//	
//       
//       final DapsscoLevel entity = new DapsscoLevel();
//
//entity.setDapssco_id((entity.getDapssco_id()));
//entity.setLevelId(Long.valueOf(entity.getLevelId()));
//		
//       dao.saveNew(entity);
//       return createOkResponse();
//   }





}
