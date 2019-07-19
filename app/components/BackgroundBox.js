var React = require('react');
var MdPhone = require('react-icons/lib/md/phone');
var MdAccountCircle = require('react-icons/lib/md/account-circle');
var MdWork = require('react-icons/lib/md/work');
var WorkExpirence = require('./WorkExpirence');
var Education = require('./Education');
var Course = require('./Course');
var MdLocalLibrary = require('react-icons/lib/md/local-library');
var TiMortarBoard = require('react-icons/lib/ti/mortar-board');

var BackgroundBox = React.createClass({
    render: function() {    	

    	var summary = this.props.basics.summary;
    	var works = this.props.works;
    	var education = this.props.education;
    	var courses = this.props.courses;

    	var workNodes = works.map(function(work,index) {
	      return (
	      	<WorkExpirence key={index} work={work} />
	      );
	    });

	    var educationNodes = education.map(function(education,index) {
	      return (
	      	<Education key={index} education={education} />
	      );
	    });

	    var courseNodes = courses.map(function(course,index) {
	      return (
	      	<Course key={index} course={course} />
	      );
	    });

		return (
			<div>
				<div className="background-details">
				    <div className="detail">
				    	<span className="icon"><MdAccountCircle size={35}/></span>
						<div className="info">
							<h3 className="section-title">About</h3>
							<hr/>
							<p>{summary}</p>
						</div>
				    </div>
				</div>

				<div className="background-details">
				    <div className="detail">
				    	<span className="icon"><MdWork size={35}/></span>
						<div className="info">
							<h3 className="section-title">WORK EXPERIENCE</h3>
							<hr/>
							{workNodes}
						</div>
					</div>
				</div>

				<div className="background-details">
				    <div className="detail">
				    	<span className="icon"><TiMortarBoard size={35}/></span>
						<div className="info">
							<h3 className="section-title">Education</h3>
							<hr/>
							{educationNodes}
						</div>
					</div>
				</div>

				<div className="background-details">
				    <div className="detail">
				    	<span className="icon"><MdLocalLibrary size={35}/></span>
						<div className="info">
							<h3 className="section-title">Courses</h3>
							<hr/>
							{courseNodes}
						</div>
					</div>
				</div>

			</div>
        )
    }
});

module.exports = BackgroundBox;