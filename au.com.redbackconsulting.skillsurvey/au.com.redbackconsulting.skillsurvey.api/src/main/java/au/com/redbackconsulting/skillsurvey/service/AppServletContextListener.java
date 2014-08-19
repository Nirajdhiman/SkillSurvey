
package au.com.redbackconsulting.skillsurvey.service;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import au.com.redbackconsulting.skillsurvey.persistence.manager.PersistenceManager;

public class AppServletContextListener implements ServletContextListener {

	private static Logger logger = LoggerFactory.getLogger(AppServletContextListener.class);

    @Override
    public void contextDestroyed(ServletContextEvent arg0) {
    }

    @Override
    public void contextInitialized(ServletContextEvent servletContext) {
        try {
            PersistenceManager.getInstance().initEntityManagerProvider();
            //initBenefits();
        } finally {
            PersistenceManager.getInstance().closeAll();
        }
    }
}
