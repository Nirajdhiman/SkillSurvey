ALTER TABLE roleassignment DROP FOREIGN KEY FK_roleassignment_individualid
ALTER TABLE roleassignment DROP FOREIGN KEY FK_roleassignment_roleid
ALTER TABLE uoc_question DROP FOREIGN KEY FK_uoc_question_uocid
ALTER TABLE uoc_question DROP FOREIGN KEY FK_uoc_question_questionid
ALTER TABLE surveryanswer DROP FOREIGN KEY FK_surveryanswer_surveyid
ALTER TABLE surveryanswer DROP FOREIGN KEY FK_surveryanswer_uocquestionid
ALTER TABLE SURVEY DROP FOREIGN KEY FK_SURVEY_individualid
ALTER TABLE SURVEY DROP FOREIGN KEY FK_SURVEY_dapsscoid
ALTER TABLE SURVEY DROP FOREIGN KEY FK_SURVEY_pathwayid
ALTER TABLE dapssco DROP FOREIGN KEY FK_dapssco_occupationid
ALTER TABLE INDIVIDUAL DROP FOREIGN KEY FK_INDIVIDUAL_departmentid
ALTER TABLE INDIVIDUAL DROP FOREIGN KEY FK_INDIVIDUAL_occupation
ALTER TABLE INDIVIDUAL DROP FOREIGN KEY FK_INDIVIDUAL_level
ALTER TABLE INDIVIDUAL DROP FOREIGN KEY FK_INDIVIDUAL_functionid
ALTER TABLE dapsscolevel DROP FOREIGN KEY FK_dapsscolevel_depsscoid
ALTER TABLE dapsscolevel DROP FOREIGN KEY FK_dapsscolevel_levelid
ALTER TABLE dapsscolevel DROP FOREIGN KEY FK_dapsscolevel_dapsscoid
ALTER TABLE dapsscoskills DROP FOREIGN KEY FK_dapsscoskills_uocgroupidp
ALTER TABLE dapsscoskills DROP FOREIGN KEY FK_dapsscoskills_depsscoid
ALTER TABLE uocgroupmembers DROP FOREIGN KEY FK_uocgroupmembers_uocid
ALTER TABLE uocgroupmembers DROP FOREIGN KEY FK_uocgroupmembers_uocgroupid
ALTER TABLE uocgroup DROP FOREIGN KEY FK_uocgroup_pathway_id
ALTER TABLE uocgroup DROP FOREIGN KEY FK_uocgroup_NEED_ID
ALTER TABLE supervisons DROP FOREIGN KEY FK_supervisons_supervisedid
ALTER TABLE supervisons DROP FOREIGN KEY FK_supervisons_supervisorid
ALTER TABLE claimassignment DROP FOREIGN KEY FK_claimassignment_claimid
ALTER TABLE claimassignment DROP FOREIGN KEY FK_claimassignment_roleid
ALTER TABLE functionoccupations DROP FOREIGN KEY FK_functionoccupations_occupationid
ALTER TABLE functionoccupations DROP FOREIGN KEY FK_functionoccupations_functionid
DROP TABLE LEVEL
DROP TABLE UOC
DROP TABLE QUESTION
DROP TABLE ROLE
DROP TABLE functiontable
DROP TABLE CLAIM
DROP TABLE OCCUPATION
DROP TABLE DEPARTMENT
DROP TABLE roleassignment
DROP TABLE PATHWAY
DROP TABLE uoc_question
DROP TABLE surveryanswer
DROP TABLE SURVEY
DROP TABLE dapssco
DROP TABLE INDIVIDUAL
DROP TABLE dapsscolevel
DROP TABLE dapsscoskills
DROP TABLE uocgroupmembers
DROP TABLE uocgroup
DROP TABLE supervisons
DROP TABLE claimassignment
DROP TABLE functionoccupations
DROP TABLE NEED
DELETE FROM SEQUENCE WHERE SEQ_NAME = 'SEQ_GEN'
