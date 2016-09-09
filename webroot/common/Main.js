import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import TopNavBar from './TopNavBar'
import Header from './Header'

const Main = React.createClass({
    componentDidMount(){

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
                        <TopNavBar/>
                    </div>
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