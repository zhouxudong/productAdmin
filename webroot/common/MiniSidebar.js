import React from 'react'

const MiniSidebar = React.createClass({
    minimalize(){
        $("body").toggleClass("mini-navbar");
        if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
            $('#side-menu').hide();
            $("#header .navbar-brand").text("云仓管理");
            setTimeout(
                function () {
                    $('#side-menu').fadeIn(500);
                }, 100);
        } else if ($('body').hasClass('fixed-sidebar')){
            $('#side-menu').hide();
            setTimeout(
                function () {
                    $('#side-menu').fadeIn(500);
                }, 300);
        } else {
            $("#header .navbar-brand").text("云仓");
            $('#side-menu').removeAttr('style');
        }
    },
    render(){
        return (
            <div className="minimalize" onClick={this.minimalize} style={{width:"100%",height: "30px",textAlign:'center'}}>
                <a className="navbar-minimalize"><i className="fa fa-bars"></i></a>
            </div>
        )
    }
})

export default MiniSidebar;