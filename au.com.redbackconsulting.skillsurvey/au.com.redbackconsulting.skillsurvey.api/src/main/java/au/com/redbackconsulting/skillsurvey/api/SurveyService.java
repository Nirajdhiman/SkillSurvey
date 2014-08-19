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

import au.com.redbackconsulting.skillsurvey.api.bean.SurveyBean;
import au.com.redbackconsulting.skillsurvey.persistence.SurveyDAO;
import au.com.redbackconsulting.skillsurvey.persistence.model.Survey;

@Path("/survey")
public class SurveyService extends BaseService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	private SurveyDAO dao = null;

	public SurveyService() {
		dao = new SurveyDAO();
	}

	// / To get single record according to ID
	@GET
	@Path("/info/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public SurveyBean getbyId(@PathParam("id") String id) {
		long lID = Long.parseLong(id);

		Survey entity = dao.getById(lID);
		SurveyBean bean = SurveyBean.get(entity);
		return bean;

	}

	@GET
	@Path("/managed")
	@Produces(MediaType.APPLICATION_JSON)
	public List<SurveyBean> getManaged() throws IOException {

		List<SurveyBean> result = new ArrayList<>();
		for (Survey entity : dao.getAll()) {
			SurveyBean bean = SurveyBean.get(entity);
			result.add(bean);
		}
		return result;
	}

	@GET
	@Path("/delete/{id}")
	public Response delete(@PathParam("id") String id) {
		if (id != null) {
			long lId = Long.parseLong(id);
			Survey entity = dao.getById(Long.parseLong(id));
			if (entity == null) {
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
	public Response edit(@PathParam("id") String id,
			@FormParam("completedat") String completedAt,
			@FormParam("dapssco") String dapssco,
			@FormParam("individual") String individual,
			@FormParam("pathway") String pathway,
			@FormParam("startedat") String startedAt,
			@FormParam("surveryanswers") String surveryAnswers) {

		{

			// GsonFactory gsf = GsonFactory.getInstance();
			// Gson gs = gsf.getGson();
			// LevelBean bean = gs.fromJson(formData, LevelBean.class);
			//
			//

			final Survey entity = dao.getById(Long.parseLong(id));
			try {
				// TODO
				// entity.setCompletedAt(completedAt);
				// entity.setDapssco(dapssco);
				// entity.setIndividual(individual);
				// entity.setPathway(pathway);
				// entity.setStartedAt(startedAt);
				// entity.setSurveryAnswers(surveryAnswers);

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
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addNew(@FormParam("completedat") String completedAt,
			@FormParam("dapssco") String dapssco,
			@FormParam("individual") String individual,
			@FormParam("pathway") String pathway,
			@FormParam("startedat") String startedAt,
			@FormParam("surveryanswers") String surveryAnswers) {

		final Survey entity = new Survey();
		// entity.setIdneed(Long.parseLong(id));
		// entity.setCompletedAt(completedAt);
		// entity.setDapssco(dapssco);
		// entity.setIndividual(individual);
		// entity.setPathway(pathway);
		// entity.setStartedAt(startedAt);
		// entity.setSurveryAnswers(surveryAnswers);

		dao.saveNew(entity);
		return createOkResponse();
	}

	@GET
	@Path("/survey/{individual}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<SurveyBean> getSurveyByIndividual(@PathParam("id") String id) {
List<SurveyBean> result = new ArrayList<SurveyBean>();

		List<Survey> entities = dao.getSurveyByIndividual(Long.parseLong(id));
		for (Survey entity : entities) {
			SurveyBean  bean= SurveyBean.get(entity);
			result.add(bean);
		}
		
		return result;
	}

}
