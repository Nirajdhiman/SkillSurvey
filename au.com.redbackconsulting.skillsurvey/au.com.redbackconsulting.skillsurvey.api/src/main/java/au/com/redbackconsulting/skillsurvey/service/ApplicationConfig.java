package au.com.redbackconsulting.skillsurvey.service;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.core.Application;

import au.com.redbackconsulting.skillsurvey.api.ClaimAssignmentsService;
import au.com.redbackconsulting.skillsurvey.api.ClaimService;
import au.com.redbackconsulting.skillsurvey.api.DapsscoLevelsService;
import au.com.redbackconsulting.skillsurvey.api.DapsscoService;
import au.com.redbackconsulting.skillsurvey.api.DapsscoSkillsService;
import au.com.redbackconsulting.skillsurvey.api.DepartmentService;
import au.com.redbackconsulting.skillsurvey.api.FunctionOccupationService;
import au.com.redbackconsulting.skillsurvey.api.FunctionService;
import au.com.redbackconsulting.skillsurvey.api.IndividualService;
import au.com.redbackconsulting.skillsurvey.api.LevelService;
import au.com.redbackconsulting.skillsurvey.api.NeedService;
import au.com.redbackconsulting.skillsurvey.api.OccupationService;
import au.com.redbackconsulting.skillsurvey.api.PathwayService;
import au.com.redbackconsulting.skillsurvey.api.QuestionService;
import au.com.redbackconsulting.skillsurvey.api.RoleAssignmentService;
import au.com.redbackconsulting.skillsurvey.api.RoleService;
import au.com.redbackconsulting.skillsurvey.api.SupervisonsService;
import au.com.redbackconsulting.skillsurvey.api.SurveyAnswerService;
import au.com.redbackconsulting.skillsurvey.api.SurveyDataService;
import au.com.redbackconsulting.skillsurvey.api.SurveyService;
import au.com.redbackconsulting.skillsurvey.api.UocGroupMemberService;
import au.com.redbackconsulting.skillsurvey.api.UocGroupService;
import au.com.redbackconsulting.skillsurvey.api.UocQuestionService;
import au.com.redbackconsulting.skillsurvey.api.UocService;
import au.com.redbackconsulting.skillsurvey.api.util.GsonMessageBodyHandler;


public class ApplicationConfig extends Application {

    private Set<Object> singletons = new HashSet<Object>();

    public ApplicationConfig() {
        singletons.add(new GsonMessageBodyHandler<>());
        singletons.add(new ClaimAssignmentsService() );
        singletons.add(new ClaimService());
        singletons.add(new DapsscoLevelsService());
        singletons.add(new DapsscoSkillsService());
        
        singletons.add(new DapsscoService());
        singletons.add(new DepartmentService());
        singletons.add(new FunctionService());
        singletons.add(new FunctionOccupationService());
        singletons.add(new IndividualService());
        singletons.add(new LevelService());
        singletons.add(new NeedService());
        singletons.add(new OccupationService());
        singletons.add(new PathwayService());
        singletons.add(new QuestionService());
        singletons.add(new RoleAssignmentService());
        singletons.add(new RoleService() );
        singletons.add(new SupervisonsService());
        singletons.add(new SurveyAnswerService());
        singletons.add(new SurveyService());
           singletons.add(new UocGroupMemberService());
        singletons.add(new UocGroupService());
        singletons.add(new UocQuestionService());
        singletons.add(new UocService());
        singletons.add(new SurveyDataService());
        
    }

    @Override
    public Set<Object> getSingletons() {
        return singletons;
    }
}
