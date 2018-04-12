import React from 'react';
import PropTypes from 'prop-types';
import ProfileCredentialList from './ProfileCredentialList';
import ProfileInfoHeader from './ProfileInfoHeader';


// React Component for displaying a user's profile page.
export default class UserProfile extends React.Component {
  render() {
    const siteName = this.props.type === 'coach' ? 'LinkedIn' : 'Website';
    return (
      <div className="profileContainer container">
        <ProfileInfoHeader
          name={this.props.name}
          imgSrc={this.props.imgSrc}
          titles={this.props.titles}
          canModify={this.props.canModify}
          onModifyClick={this.props.onModifyClick}
        />
        {((this.props.linkedIn || null) &&
          <ul className="profileLinks">
            <li>
              {siteName}: <a href={this.props.linkedIn}>{this.props.linkedIn}</a>
            </li>
          </ul>
        )}
        <hr />
        <div className="userDescription">
          <p>
            {this.props.description}
          </p>
        </div>
        <ProfileCredentialList type={this.props.type} credentials={this.props.credentials} />
      </div>
    );
  }
}


UserProfile.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  linkedIn: PropTypes.string,
  imgSrc: PropTypes.string,
  description: PropTypes.string,
  titles: PropTypes.arrayOf(PropTypes.string),
  credentials: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  })),
  canModify: PropTypes.bool,
  onModifyClick: PropTypes.func.isRequired,
};

UserProfile.defaultProps = {
  linkedIn: '',
  imgSrc: null,
  description: '',
  titles: [],
  credentials: [],
  canModify: false,
};
