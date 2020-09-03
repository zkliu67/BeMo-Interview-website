import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './SidebarOption.css';

class SidebarOption extends Component {

  constructor(props) {
    super(props);
    this.selectPage = this.selectPage.bind(this);
  }

  selectPage() {
    this.props.history.push(`/admin/page/${this.props.Title}`);
  }

  render() {
    const { Icon, Title } = this.props;
    return (
      <div className="sidebarOption" onClick={(this.selectPage)}>
        {Icon && <Icon className="sidebarOption__icon"/>} {Title}
      </div>
    )
  }
}

export default withRouter(SidebarOption);