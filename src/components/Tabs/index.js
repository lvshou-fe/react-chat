import React, { Component } from 'react';
import {
  withRouter,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;
    return (
      <div className="tabs-wrapper">
        <div className="tab">
          <Link to="/index">
            <svg className="icon " aria-hidden="true">
              <use xlinkHref={match.url === '/index' ? '#icon-message-copy' : '#icon-message'} />
            </svg>
          </Link>
        </div>
        <div className="tab">
          <Link to="/robot">
            <svg className="icon " aria-hidden="true">
              <use xlinkHref={match.url === '/robot' ? '#icon-robot_light-copy' : '#icon-robot_light'} />
            </svg>
          </Link>
        </div>

        <div className="tab">
          <Link to="/setting">
            <svg className="icon " aria-hidden="true">
              <use xlinkHref={match.url === '/setting' ? '#icon-setting-copy' : '#icon-setting'} />
            </svg>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Tabs);


Tabs.propTypes = {
  match: PropTypes.object,
};


Tabs.defaultProps = {
  match: { url: '/' }
};
