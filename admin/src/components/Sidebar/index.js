import React, { Component } from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';

import SidebarOption from '../SidebarOption';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    const pages = this.props.pages;
    return (
      <div className="sidebar">
        <div className="sidebar__header">
          <DashboardIcon />
          <p>Dashboard</p>
        </div>
        <div>
          {pages.map(( {icon, title}, index) => {
            return <SidebarOption Icon={icon} Title={title} key={index} />
          })}
        </div>
      </div>
    )
  }
}

export default Sidebar;