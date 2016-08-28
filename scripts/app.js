var ReactDOM = require('react-dom');
var React = require('react');
var BackgroundBox = require("./ui/BackgroundBox");
var ProfileHeaderBox = require("./ui/ProfileHeaderBox");
var ProfileBodyBox = require("./ui/ProfileBodyBox");
var Loader = require('halogen/PulseLoader');

var ResumeBox = React.createClass({
  getInitialState: function() {
      return {data: null};
  },
  componentDidMount: function() {
      this.loadResumeFromServer();
  },
  loadResumeFromServer: function() {
    var that = this;
    firebase.database().ref('/viniciuslima').once('value').then(function(snapshot) {
      that.setState({data: snapshot.val()});
    });
  },
  render: function() {


    var profileContent;
    var backgroundContent;
    if (this.state.data !== null)
    {
      profileContent = (
        <div className="resume-card">
          <ProfileHeaderBox basics={this.state.data.basics} />
          <ProfileBodyBox basics={this.state.data.basics} languages={this.state.data.languages} />
        </div>
      );

      backgroundContent = (
        <div className="resume-card">
          <BackgroundBox education={this.state.data.education} works={this.state.data.work} basics={this.state.data.basics} />
        </div>
      );
    }
    else
    {
      backgroundContent = <Loader color="#26A65B" size="16px" margin="4px"/>
      profileContent = <Loader color="#26A65B" size="16px" margin="4px"/>
    }

    return (
        <div>
          <section className="col-md-3 resume-section">
            {profileContent}
          </section>

          <section className="col-md-9 resume-section">
            {backgroundContent}
          </section>
        </div>
    );
  }
});

ReactDOM.render(<ResumeBox/>,document.getElementById('vinicius-resume-root'));