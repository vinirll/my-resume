var React = require('react');
var MdPhone = require('react-icons/lib/md/phone');
var MdAccountCircle = require('react-icons/lib/md/account-circle');
var MdWork = require('react-icons/lib/md/work');
var WorkExpirence = require('./WorkExpirence');


var BackgroundBox = React.createClass({
    render: function() {    	

    	var summary = this.props.basics.summary;
    	var works = this.props.works;

    	var worksNode = works.map(function(work,index) {
	      return (
	      	<WorkExpirence work={work} />
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
							{worksNode}
						</div>
					</div>
				</div>

			</div>
        )
    }
});

module.exports = BackgroundBox;