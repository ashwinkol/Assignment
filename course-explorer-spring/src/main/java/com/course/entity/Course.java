package com.course.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="courses")
public class Course {
	
	@Id
	@Column
	private int courseId;
	@Column
    private String courseName;
	@Column
    private String instructorName;
	@Column
    private String description;
	@Column
    private String enrollmentStatus;
	@Column
    private Integer courseDuration;
	@Column
    private String schedule;
	@Column
    private String location;
	@Column
    private String prerequisites;
	@Column
    private String syllabus;
	
	public Course(int courseId, String courseName, String instructorName, String description, String enrollmentStatus,
			Integer courseDuration, String schedule, String location, String prerequisites, String syllabus) {
		super();
		this.courseId = courseId;
		this.courseName = courseName;
		this.instructorName = instructorName;
		this.description = description;
		this.enrollmentStatus = enrollmentStatus;
		this.courseDuration = courseDuration;
		this.schedule = schedule;
		this.location = location;
		this.prerequisites = prerequisites;
		this.syllabus = syllabus;
	}

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getInstructorName() {
		return instructorName;
	}

	public void setInstructorName(String instructorName) {
		this.instructorName = instructorName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getEnrollmentStatus() {
		return enrollmentStatus;
	}

	public void setEnrollmentStatus(String enrollmentStatus) {
		this.enrollmentStatus = enrollmentStatus;
	}

	public Integer getCourseDuration() {
		return courseDuration;
	}

	public void setCourseDuration(Integer courseDuration) {
		this.courseDuration = courseDuration;
	}

	public String getSchedule() {
		return schedule;
	}

	public void setSchedule(String schedule) {
		this.schedule = schedule;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getPrerequisites() {
		return prerequisites;
	}

	public void setPrerequisites(String prerequisites) {
		this.prerequisites = prerequisites;
	}

	public String getSyllabus() {
		return syllabus;
	}

	public void setSyllabus(String syllabus) {
		this.syllabus = syllabus;
	}

	@Override
	public String toString() {
		return "Course [courseId=" + courseId + ", courseName=" + courseName + ", instructorName=" + instructorName
				+ ", description=" + description + ", enrollmentStatus=" + enrollmentStatus + ", courseDuration="
				+ courseDuration + ", schedule=" + schedule + ", location=" + location + ", prerequisites="
				+ prerequisites + ", syllabus=" + syllabus + "]";
	}
	
	
	
	
	
	

}
