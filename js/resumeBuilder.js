//BIO

var skills = ["HTML5","CSS3","JavaScript","jQuery"];
var bio = {
    "name"      : "Debbie Miksiewicz",
    "role"      : "Web Developer Newbie",
      "contacts"  : {
      "mobile"  : "(123) 456-7890",
      "email"   : "debbiemiks@debbiemiks.com",
      "twitter" : "DebbieMiks",
      "github"  : "https://github.com/debbiemiks",
      "blog"    : "http://inletsandoutlets.blogspot.com",
      "location": "New Jersey"
    },
	"biopic" : "images/DebbieMiks.jpg",
    "welcomeMsg": "Welcome to my online resume for my Udacity Nanodegree!",
    "skills" : skills
};
bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
  var formattedGitHub = HTMLgithub.replace("%data%",bio.contacts.github);
  var formattedBlog = HTMLblog.replace("%data%",bio.contacts.blog);
  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  var formattedbiopic = HTMLbiopic.replace("images/DebbieMiks.jpg");
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedMobile);
  $("#header").append(formattedEmail);
  $("#header").append(formattedTwitter);
  $("#header").append(formattedGitHub);
  $("#header").append(formattedBlog);
  $("#header").append(formattedLocation);
  $("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);
  // for (i = 0; i < bio.skills.length; i++) {
  //   $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
  // }
  for (skill in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
  }
 }
}
bio.display();

//Work
var work = {
  "jobs" : [
    {
      "employer" : "AT&T",
      "title" : "Requirements Engineer",
      "location" : "Middletown, NJ",
      "dates" : "6/2013 - present",
      "description" : "A member of the Matrex training program, working on various projects."
    },
	{
      "employer" : "NJIT",
      "title" : "Teaching Assistant",
      "location" : "Newark, NJ",
      "dates" : "2013",
      "description" : "Assisted the professor with the class students."
    }
  ],
};

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedWorkEmployer);
    $(".work-entry:last").append(formattedWorkTitle);
    $(".work-entry:last").append(formattedWorkDates);
    $(".work-entry:last").append(formattedWorkLocation);
    $(".work-entry:last").append(formattedWorkDescription);
  };
};

displayWork();


//Projects

var projects = {
  "projects" : [
    {
     "title" : "Matrex Interview Tool",
     "dates" : "2013",
     "description" : "A web based interview tool that ramdomly generates interview questions.",
     "images" :  ""
    },
	{
     "title" : "Matrex Evolution Tracking Tool",
     "dates" : "2014",
     "description" : "A web based portal to track employee training and progress.",
     "images" :  ""
    }
  ],
};

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDates);
    $(".project-entry:last").append(formattedProjectDescription);
    $(".project-entry:last").append(formattedProjectImage);
  };
};

projects.display();

//Education
var education = {
		"schools": [
	    {
	    	"name"     : "NJIT - New Jersey Institute of Technology",
	    	"location" : "Newark, New Jersey",
	    	"dates"    : "2010 - 2013",
	    	"major"    : "Masters",
	    	"degree"   : "Professional and Technical Communications",
	    	"url"      : "http://www.njit.edu/"
	    },
	  ]
,
	"onlineCourses"  : [
		   {
			"school"     : "Udacity",
			"location"   : "Online",
			"title"      : "Front End Web Developer Nanodegree",
			"dates"      : "2015",
			"url"        : "https://www.udacity.com"
		   },
		]
	};
function displayEducation() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedURL = HTMLonlineURL.replace("%data%", education.schools[school].url);
		$(".education-entry:last").append(formattedURL);
	}

	$("#education").append(HTMLonlineClasses);
	for (school in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
		var formattedSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedSchoolTitle);
		var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
		$(".education-entry:last").append(formattedOnlineDate);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
		$(".education-entry:last").append(formattedURL);
	}
};
displayEducation();
//misc
$("#main").append(internationalizeButton);
$('#mapDiv').append(googleMap);

