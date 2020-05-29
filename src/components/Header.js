import React from 'react'

export default function Header() {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>

    <li className="nav-item d-none d-sm-inline-block">
      <a href="/ContentHome" className="nav-link">Home</a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="/ContentAllBar" className="nav-link">All Sensors Graph View</a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="./Slider" className="nav-link">About the Project</a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="./ContentAllBar" className="nav-link">TESTING_TAB_JUST_FOR_TESTING</a>
    </li>
  </ul>
 
  
</nav>

    )
}
