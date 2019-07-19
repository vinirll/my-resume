var React = require('react');

var Course = React.createClass({
	render: function() {
		
		var showDescription = false;
		if (this.props.course.description !== "" && this.props.course.description !== null)
			showDescription = true;

		return  (
			<div className="work-experience-detail">
				<p className="company-position"><strong><a target="_blank" href={this.props.course.url}>{this.props.course.name}</a></strong> - {this.props.course.institution}</p>
				{(function(showMe,description) {
					if (showMe) {
					    return (
						    <blockquote>
						    	<p className="company-position-timerange">{description}</p>  
						    </blockquote>
					    ); 
					} 
				})(showDescription,this.props.course.description)}
			</div>      
		);
	}
});

module.exports = Course;