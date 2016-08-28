var React = require('react');

var WorkExpirence = React.createClass({

  render: function() {

    var highlights = this.props.work.highlights;
    var highlightsNode = highlights.map(function(highlight,index) {
      return (
        <li key={index}>{highlight}</li>
      );
    });

    return  (
      <div className="work-experience-detail">
        <p className="company-position"><strong>{this.props.work.position}</strong>, {this.props.work.company}</p>
        <p className="company-position-timerange"><small>{this.props.work.startDate} - {this.props.work.endDate}</small></p>
        <blockquote>
          <p className="company-description">{this.props.work.summary}</p>
        </blockquote>
        <ul>
          {highlightsNode}
        </ul> 
      </div>      
    );
  }
});

module.exports = WorkExpirence;