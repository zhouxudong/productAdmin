import React from 'react'
import {BreadCrumb, IBoxTool} from '../../common/Birdie'
import API from '../../conf/API'

import EditBase from './EditBase'
import EditAttr from './EditAttr'
import EditSpecif from './EditSpecif'

const CategoryEdit = React.createClass({
    getInitialState(){
        return {
            category: {
                name: "",
                name_en: "",
                name_es: ""
            }
        }
    },
    componentDidMount(){
        this.ajaxCategory(this.props.id);
    },
    componentWillReceiveProps(nextProps){
        this.ajaxCategory(nextProps.id);
    },
    render(){
        var {category} = this.state;
        return (
            <IBoxTool title={`${category.name || "添加分类"} 》 编辑`}>
                <ul ref="navTabs" className="nav nav-tabs">
                    <li className="active">
                        <a onClick={e=>this.switchPanel(e,"base")}>
                            <tab-heading >
                                基本信息
                            </tab-heading>
                        </a>
                    </li>
                    <li>
                        <a onClick={e=>this.switchPanel(e,"attr")}>
                        <tab-heading>
                            属性信息
                        </tab-heading></a>
                    </li>
                    <li>
                        <a onClick={e=>this.switchPanel(e,"specif")}>
                            <tab-heading>
                                规格信息
                            </tab-heading>
                        </a>
                    </li>
                </ul>
                <div ref="tabContent" className="tab-content">
                    <div id="panel_base" className="tab-pane active">
                        <EditBase category={category} />
                    </div>
                    <div id="panel_attr" className="tab-pane">
                        <EditAttr />
                    </div>
                    <div id="panel_specif" className="tab-pane">
                        <EditSpecif />
                    </div>
                </div>
            </IBoxTool>
        )
    },
    ajaxCategory(id){
        var { parent_id } = this.props;
        if(id){

            $.ajax({
                url: API.category_info,
                data:{
                    id: id
                },
                success: function(data){
                    this.setState({
                        category: data.response_data
                    })
                }.bind(this)
            })
        }else{
            this.setState({
                category: {
                    name: "",
                    name_en: "",
                    name_es: "",
                    parent_id: parent_id
                }
            })
        }
    },
    switchPanel(event, sel){
        var {tabContent, navTabs} = this.refs;
        $(navTabs).find("li").removeClass("active");
        $(tabContent).find(".tab-pane").removeClass("active");

        $(event.currentTarget).closest("li").addClass("active");
        $("#panel_" + sel).addClass("active");
    }
})
export default CategoryEdit;