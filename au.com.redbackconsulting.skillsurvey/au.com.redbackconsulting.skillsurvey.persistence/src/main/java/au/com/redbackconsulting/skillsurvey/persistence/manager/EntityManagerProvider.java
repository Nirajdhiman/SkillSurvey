package au.com.redbackconsulting.skillsurvey.persistence.manager;

import javax.persistence.EntityManager;


public interface EntityManagerProvider {

    EntityManager get();

}
