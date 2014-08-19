package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the survery_answer database table.
 * 
 */
//@Embeddable
public class SurveryAnswerPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column
	private long uocQuestionId;

	@Column 
	private long surveyId;

	public SurveryAnswerPK() {
	}
	public long getUocQuestionId() {
		return this.uocQuestionId;
	}
	public void setUocQuestionId(long uocQuestionId) {
		this.uocQuestionId = uocQuestionId;
	}
	public long getSurveyId() {
		return this.surveyId;
	}
	public void setSurveyId(long surveyId) {
		this.surveyId = surveyId;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof SurveryAnswerPK)) {
			return false;
		}
		SurveryAnswerPK castOther = (SurveryAnswerPK)other;
		return 
			(this.uocQuestionId == castOther.uocQuestionId)
			&& (this.surveyId == castOther.surveyId);
	}

	public int hashCode() {
		final long prime = 31;
		long hash = 17;
		hash = hash * prime + this.uocQuestionId;
		hash = hash * prime + this.surveyId;
		
		return (int) hash;
	}
}