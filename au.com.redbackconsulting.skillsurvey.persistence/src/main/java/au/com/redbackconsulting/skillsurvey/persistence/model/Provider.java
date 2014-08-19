package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;
import java.lang.String;

import javax.persistence.*;

/**
 * Entity implementation class for Entity: Provider
 *
 */
@Entity

public class Provider implements Serializable {

	   
	
	@Id
	@Column(name="id")
	private long id;
	
	@Column(name="name")
	
	private String name;
	
	@Column(name="description")
	private String description;
	
	@Lob  
	@Column(name="courseurl", nullable=false )
 	private Byte[] courseURL;
	
	
	public String getCourseURL() {
try {
			
			int len = courseURL.length;
			byte[] bytes = new byte[len];
			
			for (int i = 0; i < courseURL.length; i++) {
				bytes[i]= courseURL[i];
				
				
			}
			String s= new String(bytes);

			return s;
			} catch (Exception e) {
			return null;	// TODO: handle exception
			}		
	}
	
	
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public void setCourseURL(String courseURL) {
try {
			
			byte[] bytes = courseURL.getBytes();
			int len = bytes.length;
			Byte[] Bytes = new Byte[len];
			for (int i = 0; i < bytes.length; i++) {
				Bytes[i]= Byte.valueOf(bytes[i]);
			}
					this.courseURL = Bytes;

			} catch (Exception e) {
				this.description = null; // TODO: handle exception
			}
	}

	private static final long serialVersionUID = 1L;

	public Provider() {
		super();
	}   
	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}   
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}
   
}
