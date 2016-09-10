import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import TopNavBar from './TopNavBar'
import Header from './Header'

const Main = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    componentWillMount(){
        var {location} = this.props;
        if(location.pathname == "/"){
            this.context.router.push("/categorymgr/list");
        }
    },
    render(){
        return (
            <div id="wrapper">
                <Header {...this.props}/>
                <div className="nav">
                    <Navigation {...this.props}/>
                </div>
                <div id="page-wrapper" className="gray-bg">
                    <div>
                        {this.props.children}
                    </div>
                    <div className="footer">
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
})
export default Main;