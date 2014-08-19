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

import au.com.redbackconsulting.skillsurvey.api.bean.DepartmentBean;
import au.com.redbackconsulting.skillsurvey.persistence.DepartmentDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.Department;

@Path("/department")
public class DepartmentService  extends BaseService{
	 private final Logger logger = LoggerFactory.getLogger(this.getClass());
	 private DepartmentDAO dao =null;
	
		public DepartmentService() {
			dao = new DepartmentDAO();
		}
		
		/// To get single record according to ID 
		@GET
		@Path("/info/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public DepartmentBean getbyId( @PathParam("id") String id)
		{
			long lID = Long.parseLong(id);
		Department entity = dao.getById(lID);
		DepartmentBean	 bean = DepartmentBean.get(entity);
		return bean;
		
		}
		
		
		@GET
		@Path("/managed")
		@Produces(MediaType.APPLICATION_JSON)
		public List<DepartmentBean> getManaged() throws IOException {
	
			List<DepartmentBean> result = new ArrayList<>();
			for (Department entity : dao.getAll()) {
				DepartmentBean bean = DepartmentBean.get(entity);
				result.add(bean);
			}
			return result;
		}
	

		
		
	 @GET
	 @Path("/delete/{id}")
	    public Response delete(@PathParam("id") String id) {
		 if (id!=null){
		 long lId = Long.parseLong(id);
	     Department  entity = dao.getById(Long.parseLong(id)); 
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
				@FormParam("code") String code,
	               @FormParam("name") String name,
	               @FormParam("description") String description) {


		{
		 

	        final Department entity = dao.getById(Long.parseLong( id));
	        try {
	        	entity.setCode(code);
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
   public Response addNew(@FormParam("code") String code,
   		               @FormParam("name") String name,
   		               @FormParam("description") String description) {
	
       
   final Department	 entity = new Department();
    
       entity.setName(name);
       entity.setDescription(description);
       entity.setCode(code);

       dao.saveNew(entity);
       return createOkResponse();
   }





}
