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

import au.com.redbackconsulting.skillsurvey.api.bean.UocGroupBean;
import au.com.redbackconsulting.skillsurvey.persistence.NeedDAO; 
import au.com.redbackconsulting.skillsurvey.persistence.UocGroupDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.Need; 
import au.com.redbackconsulting.skillsurvey.persistence.model.UocGroup;

@Path("/uocgroup")

public class UocGroupService extends BaseService {
	 private final Logger logger = LoggerFactory.getLogger(this.getClass());
	 private UocGroupDAO dao =null;
	
		public UocGroupService() {
			dao = new UocGroupDAO();
		}
		
		/// To get single record according to ID 
		@GET
		@Path("/info/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public UocGroupBean getbyId( @PathParam("id") String id)
		{
			long lID = Long.parseLong(id);
		UocGroup entity = dao.getById(lID);
		UocGroupBean bean = UocGroupBean.get(entity);
		return bean;
		
		}
		
		
		@GET
		@Path("/managed")
		@Produces(MediaType.APPLICATION_JSON)
		public List<UocGroupBean> getManaged() throws IOException {
	
			List<UocGroupBean> result = new ArrayList<>();
			for (UocGroup entity : dao.getAll()) {
				UocGroupBean bean = UocGroupBean.get(entity);
				result.add(bean);
			}
			return result;
		}
	

		
		
	 @GET
	 @Path("/delete/{id}")
	    public Response delete(@PathParam("id") String id) {
		 if (id!=null){
		 long lId = Long.parseLong(id);
	     UocGroup  entity = dao.getById(Long.parseLong(id)); 
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
				@FormParam("notes") String notes,
				 @FormParam("dapsscos") String dapsscos,
				 @FormParam("need") String need,
	                  @FormParam("uocs") String uocs) {


		{
		 
//		GsonFactory gsf = GsonFactory.getInstance();
//	Gson gs = gsf.getGson();
//		LevelBean bean = gs.fromJson(formData, LevelBean.class);
//		
//		
	 
			NeedDAO needDAo = new NeedDAO();
			Need needEntity = needDAo.getById(Long.parseLong(need));
			
			
			
			
	        final UocGroup entity = dao.getById(Long.parseLong( id));
	        try {
	        	//TODO 
			if(needEntity!=null && needEntity!=null){
				entity.setNotes(notes);
				entity.setNeed(needEntity);
		  	   
			        dao.save(entity);
			        
			        return createOkResponse();}
			else {throw new NullPointerException();}
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
   public Response addNew(@FormParam("notes") String notes,
			 
			 @FormParam("need") String need,
             @FormParam("pathway") String pathway
             ) {
	NeedDAO needDAo = new NeedDAO();
	Need needEntity = needDAo.getById(Long.parseLong(need));
	
	 
	if (needEntity!=null  ){
       
       final UocGroup entity = new UocGroup();
		entity.setNotes(notes);
		entity.setNeed(needEntity);
	   

       dao.saveNew(entity);
       return createOkResponse();
	}
	return createBadRequestResponse("Need or Pathway not found");
   }






}
