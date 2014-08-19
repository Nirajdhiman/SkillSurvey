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

import au.com.redbackconsulting.skillsurvey.api.bean.DapsscoBean;
import au.com.redbackconsulting.skillsurvey.persistence.DapsscoDAO;
import au.com.redbackconsulting.skillsurvey.persistence.OccupationDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.Dapssco;
import au.com.redbackconsulting.skillsurvey.persistence.model.Occupation;

@Path("/dapssco")
public class DapsscoService extends BaseService{


	 private final Logger logger = LoggerFactory.getLogger(this.getClass());
	 private DapsscoDAO dao =null;
	
		public DapsscoService() {
			dao = new DapsscoDAO();
		}
		
		/// To get single record according to ID 
		@GET
		@Path("/info/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public DapsscoBean getbyId( @PathParam("id") String id)
		{
			long lID = Long.parseLong(id);
		Dapssco entity = dao.getById(lID);
		DapsscoBean bean = DapsscoBean.get(entity);
		
		return bean;
		
		}
		
		
		@GET
		@Path("/managed")
		@Produces(MediaType.APPLICATION_JSON)
		public List<DapsscoBean> getManaged() throws IOException {
	
			List<DapsscoBean> result = new ArrayList<>();
			for (Dapssco entity : dao.getAll()) {
				DapsscoBean bean = DapsscoBean.get(entity);
				Occupation occupationEntity =entity.getOccupation();
				bean.setOccupatioId(occupationEntity.getIdoccupation());
				bean.setOccupationName(occupationEntity.getName());
				result.add(bean);
			}
			return result;
		}
	

		
		
	 @GET
	 @Path("/delete/{id}")
	    public Response delete(@PathParam("id") String id) {
		 if (id!=null){
		 long lId = Long.parseLong(id);
	     Dapssco  entity = dao.getById(Long.parseLong(id)); 
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
				    @FormParam("levelid") String levelId
	            ) {


		{
		 
	 
	        final Dapssco entity = dao.getById(Long.parseLong( id));
	        try {
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

@POST
@Path("/create")
@Consumes(MediaType.APPLICATION_JSON  )	
  public Response addNew(
		    @FormParam("levelId") String levelId,
		    @FormParam("occupationId") String occuptionId
          ) {
	
      OccupationDAO occupationDAO = new OccupationDAO();
      Occupation refOccupation =occupationDAO.getReferenceById(Long.parseLong(occuptionId));
      final Dapssco entity = new Dapssco();
     //	entity.setLevelId(Long.valueOf(levelId));
     	entity.setOccupation(refOccupation);
		
      dao.saveNew(entity);
      return createOkResponse();
  }





}
