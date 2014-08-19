package au.com.redbackconsulting.skillsurvey.api.bean;

import au.com.redbackconsulting.skillsurvey.persistence.model.Question;

import com.google.gson.annotations.Expose;

public class QuestionBean {
	@Expose
	private Long id;
	@Expose
	private String text;
	@Expose
	private String style;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getStyle() {
		return style;
	}

	public void setStyle(String style) {
		this.style = style;
	}

	public static QuestionBean get(Question entity) {
	QuestionBean bean = new QuestionBean();
	bean.setId(entity.getIdquestion());
	bean.setStyle(entity.getStyle());
	bean.setText(entity.getText());
		return bean;
	}
	

}
