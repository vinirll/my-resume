var Loader = require('halogen/PulseLoader');
var React = require('react');
var MdPhone = require('react-icons/lib/md/phone');
var MdLocationOn = require('react-icons/lib/md/location-on');
var MdEmail = require('react-icons/lib/md/email');
var MdLanguage = require('react-icons/lib/md/language');
var GoMarkGithub = require('react-icons/lib/go/mark-github');


var ProfileBodyBox = React.createClass({
  render: function() {
    var languages = this.props.languages;
    var basics = this.props.basics;
    var profiles = basics.profiles;
    var githubLink = "https://github.com/vinirll";

    var languagesNode = languages.map(function(language,index) {
      return (
        <span key={index}>
          {language.name} ({language.level}){(index === (languages.length-1)) ? '' : ', '}
        </span>
      );
    });

    var profilesNode = profiles.map(function(profile,index){
      return (
        <div className="detail" key={index}>
          <span className="icon"><img height={25} width={25} src={profile.icon} /></span>
          <span className="info"><a target="_blank" href={profile.url}>{profile.url}</a></span>
        </div>
      );
    })

    return  (
      <div className="contact-details">
        <div className="detail">
          <span className="icon"><MdLocationOn size={25}/></span>
          <span className="info">{basics.location.address} - {basics.location.city} - {basics.location.region}</span>
        </div>

        <div className="detail">
          <span className="icon"><MdPhone size={25}/></span>
          <span className="info">{basics.phone}</span>
        </div>

        <div className="detail">
          <span className="icon"><MdEmail size={25}/></span>
          <span className="info">{basics.email}</span>
        </div>

        <div className="detail">
          <span className="icon"><MdLanguage size={25}/></span>
          <span className="info">{languagesNode}</span>
        </div>

        <hr />

        {profilesNode}
      </div>
    );
  }
});

module.exports = ProfileBodyBox;