package au.com.redbackconsulting.skillsurvey.api.bean.survey;

import au.com.redbackconsulting.skillsurvey.persistence.model.Location;

import com.google.gson.annotations.Expose;

public class LocationBean {
@Expose
private long locationId;

@Expose
private String locationName;

public long getLocationId() {
	return locationId;
}

public void setLocationId(long locationId) {
	this.locationId = locationId;
}

public String getLocationName() {
	return locationName;
}

public void setLocationName(String locationName) {
	this.locationName = locationName;
}

public static  LocationBean get (Location entity){
	
	try {
		if (entity!=null){
			LocationBean bean = new LocationBean();
			bean.setLocationId(entity.getId());
			bean.setLocationName(entity.getName());
			return bean;
			
		}
		return new LocationBean();
	} catch (Exception e) {
		return new LocationBean();
	}
}
}

