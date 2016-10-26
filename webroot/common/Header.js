import React from 'react'
import {Link} from 'react-router'
import NavMap from '../conf/NavMap';
require("../statics/less/header.less");

const Header = React.createClass({

    render(){

        var {pathname} = this.props.location,
            liArr = [];

        var index = 0;
        for(var key in NavMap){
            index++;
            var nav = NavMap[key];
            liArr.push(<li key={index} className={pathname.startsWith("/" + key) ? "active" : ""}>
                        <Link to={nav.url}><i className={nav.icon}></i><span className="nav-label">{nav.title}</span></Link>
                    </li>)
        }

        return (
            <header id="header" className="animated fadeInDown">
                <div className="navbar-header">
                    <a href="#" className="navbar-brand">后台管理</a>
                </div>
                <div>
                    <ul className="nav navbar-nav">
                        {liArr}
                    </ul>
                </div>
            </header>
        )
    }
})
export default Header;