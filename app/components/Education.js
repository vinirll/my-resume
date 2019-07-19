var React = require('react');

var WorkExpirence = React.createClass({

  render: function() {
    return  (
      <div className="work-experience-detail">
        <p className="company-position"><strong>{this.props.education.area}</strong>, {this.props.education.institution}</p>
        <p className="company-position-timerange"><small>{this.props.education.startDate} - {this.props.education.endDate}</small></p>
      </div>      
    );
  }
});

module.exports = WorkExpirence;