package au.com.redbackconsulting.skillsurvey.persistence.model;

import java.io.Serializable;

import javax.persistence.*;

import java.util.List;


/**
 * The persistent class for the uoc_question database table.
 * 
 */
@Entity
@Table(name="uoc_question")
@NamedQuery(name="UocQuestion.findAll", query="SELECT u FROM UocQuestion u")
public class UocQuestion implements Serializable , IDBEntity{
	private static final long serialVersionUID = 1L;

	@Id
	private String iduocquestion;
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
//	private long iduocquestion;

	//bi-directional many-to-one association to Question

	public String getStyle() {
		return style;
	}

	public void setStyle(String style) {
		this.style = style;
	}

//	public String getText() {
//		return text;
//	}
//
//	public void setText(String text) {
//		this.text = text;
//	}

	private String style;
public String getText() {
	try {
		
	int len = text.length;
	byte[] bytes = new byte[len];
	
	for (int i = 0; i < text.length; i++) {
		bytes[i]= text[i];
		
		
	}
	
	return new String(bytes);

	} catch (Exception e) {
	return null;	// TODO: handle exception
	}		
//		return text;
	}

	public void setText(String text) {
		try {
			
		byte[] bytes = text.getBytes();
		int len = bytes.length;
		Byte[] Bytes = new Byte[len];
		for (int i = 0; i < bytes.length; i++) {
			Bytes[i]= Byte.valueOf(bytes[i]);
		}
				this.text = Bytes;

		} catch (Exception e) {
			this.text = null; // TODO: handle exception
		}
	}
   
//@Column(name="text", nullable=false, columnDefinition = "text")
//	private String text;
	@Lob  
	@Column(name="text", nullable=false )
private Byte[] text;
	
private Short isprimay;
//	@ManyToOne
//	@JoinColumn(name="questionid" , nullable=false)
//
//	private Question question;
//
	//bi-directional many-to-one association to Uoc

	public Short isIsprimay() {
	return isprimay;
}

public void setIsprimay(Short isprimay) {
	this.isprimay = isprimay;
}

	@ManyToOne
	@JoinColumn(name="uocid", nullable=false)
	private Uoc uoc;

	public UocQuestion() {
	}

	public String getIduocquestion() {
		return this.iduocquestion;
	}

	public void setIduocquestion(String iduocquestion) {
		this.iduocquestion = iduocquestion;
	}

//	public List<SurveryAnswer> getSurveryAnswers() {
//		return this.surveryAnswers;
//	}
//
//	public void setSurveryAnswers(List<SurveryAnswer> surveryAnswers) {
//		this.surveryAnswers = surveryAnswers;
//	}
//
//	public SurveryAnswer addSurveryAnswer(SurveryAnswer surveryAnswer) {
//		getSurveryAnswers().add(surveryAnswer);
//		surveryAnswer.setUocQuestion(this);
//
//		return surveryAnswer;
//	}
//
//	public SurveryAnswer removeSurveryAnswer(SurveryAnswer surveryAnswer) {
//		getSurveryAnswers().remove(surveryAnswer);
//		surveryAnswer.setUocQuestion(null);
//
//		return surveryAnswer;
//	}

//	public Question getQuestion() {
//		return this.question;
//	}
//
//	public void setQuestion(Question question) {
//		this.question = question;
//	}

	public Uoc getUoc() {
		return this.uoc;
	}

	public void setUoc(Uoc uoc) {
		this.uoc = uoc;
	}

//	@Override
//	public Long getId() {
//		// TODO Auto-generated method stub
//		return iduocquestion;
//	}

}