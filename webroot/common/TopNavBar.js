import React from 'react'
import MiniSidebar from './MiniSidebar'
const TopNavBar = () => {
    return (
        <div className="row border-bottom">
            <nav className="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: 0}}>
                <div className="navbar-header">
                    <MiniSidebar/>
                    <form role="search" className="navbar-form-custom" method="post" action="">
                        <div className="form-group">
                            <input type="text" placeholder="Search for something..." className="form-control" name="top-search" id="top-search"/>
                        </div>
                    </form>
                </div>
                <ul className="nav navbar-top-links navbar-right">
                    <li>
                        <a href="">
                            <i className="fa fa-sign-out"></i> Log out
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default TopNavBar;