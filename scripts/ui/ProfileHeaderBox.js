var Loader = require('halogen/PulseLoader');
var React = require('react');

var ProfileHeaderBox = React.createClass({
  render: function() {
    var content;

    if (this.props.basics === null)
    {
      return (
        <div className="resume-card">
          <Loader color="#26A65B" size="16px" margin="4px"/>
        </div>
      );
    }
    else
    {
      return  (
        <div>
          <img className="img-responsive center-block img-circle" width="100" height="100" src={this.props.basics.picture} />
          <h4 className="text-capitalize text-center"><strong>{this.props.basics.name}</strong></h4>
          <p className="text-uppercase text-center"><small>{this.props.basics.label}</small></p>
          <hr/>
        </div>
      );
    }

  }
});

module.exports = ProfileHeaderBox;