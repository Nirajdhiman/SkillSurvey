package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

/**
 * ID class for entity: UserTypeNeeds
 *
 */ 
public class UserTypeNeedsPK  implements Serializable {   
   
	         
	private long idusertype;         
	private long idneed;
	private static final long serialVersionUID = 1L;

	public UserTypeNeedsPK() {}

	

	public long getIdusertype() {
		return this.idusertype;
	}

	public void setIdusertype(long idusertype) {
		this.idusertype = idusertype;
	}
	

	public long getIdneed() {
		return this.idneed;
	}

	public void setIdneed(long idneed) {
		this.idneed = idneed;
	}
	
   
	/*
	 * @see java.lang.Object#equals(Object)
	 */	
	public boolean equals(Object o) {
		if (o == this) {
			return true;
		}
		if (!(o instanceof UserTypeNeedsPK)) {
			return false;
		}
		UserTypeNeedsPK other = (UserTypeNeedsPK) o;
		return true
			&& getIdusertype() == other.getIdusertype()
			&& getIdneed() == other.getIdneed();
	}
	
	/*	 
	 * @see java.lang.Object#hashCode()
	 */	
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((int) (getIdusertype() ^ (getIdusertype() >>> 32)));
		result = prime * result + ((int) (getIdneed() ^ (getIdneed() >>> 32)));
		return result;
	}
   
   
}
