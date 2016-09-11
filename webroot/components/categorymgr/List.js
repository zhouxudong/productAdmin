import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import CategoryEdit from './CategoryEdit'
import {BreadCrumb, IBoxTool, TreeNode} from '../../common/Birdie'
import Ztil from '../../statics/js/public'
import API from '../../conf/API'

const CateList = React.createClass({

    getInitialState(){
        return {
            treeJson:[]
        }
    },
    componentDidMount(){
        this.ajaxAllCategory();
    },
    render(){
        var crumbs = [
            {name: "分类管理", url:"#"},
            {name: "分类列表", url: "#"}
        ]
        var treeNodeEvents = {
            showSubsNode: this.showSubsNode,
            edit: this.showEdit,
            delCategory: this.delCategory
        }
        return (
            <div id="category_list">
                <BreadCrumb crumbs={crumbs} title="分类管理"/>
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <div className="col-sm-6">
                            <IBoxTool title="分类列表">
                                <TreeNode {...treeNodeEvents} treeJson={this.state.treeJson}/>
                            </IBoxTool>
                        </div>
                        <div ref="catedit_wraper" className="col-sm-6 ui-tab"></div>
                    </div>
                </div>
            </div>
        )
    },
    delCategory(id,$parentli){
        if(id){
            $.ajax({
                url:API.category_del,
                data: {id: id},
                success: function(data){
                    if(data.response_data){
                        //this.ajaxAllCategory();
                        Ztil.runAnim($parentli,"zoomOut",function(){
                            $parentli.remove();
                        })
                    }
                }.bind(this)
            })
        }else{
            $parentli.remove();
        }
    },
    showSubsNode(parent_id,callback){
        $.ajax({
            url: API.category_list,
            data: {parent_id: parent_id},
            success: function(data){
                if(data.response_data){
                    data = data.response_data;
                    var curNode = data.list;
                    var categorys = this.state.treeJson[0].subs;
                    var nextCategorys = categorys.map( subNode => {
                        if(subNode.id == parent_id){
                            return Object.assign({},subNode,{
                                subs: curNode
                            })
                        }else{
                            return subNode
                        }
                    })
                    var treeJson = [
                        {
                            id: 0,
                            name: "全部分类",
                            status: 1,
                            subs: nextCategorys
                        }
                    ]
                    this.setState({
                        treeJson: treeJson
                    })
                }
            }.bind(this)
        })
    },
    ajaxAllCategory(){
        $.ajax({
            url: API.category_list,
            data: {parent_id: 0},
            success: function(data){
                if(data.response_data){
                    data = data.response_data;
                    var treeJson = [
                        {
                            id: 0,
                            name: "全部分类",
                            status: 1,
                            subs: data.list
                        }
                    ]
                    this.setState({
                        treeJson: treeJson
                    })
                }
            }.bind(this)
        })
    },
    showEdit(e,id){
        var $element = $(e.target);
        var parent_id = 0;
        if(!id) parent_id = $element.closest("li").data("pid");
        var {catedit_wraper} = this.refs;
        var traslateData = {
            parent_id: parent_id,
            id: id,
            ajaxAllCategory: this.ajaxAllCategory,
            ajaxCategoryByPid: this.ajaxCategoryByPid
        }
        unmountComponentAtNode(catedit_wraper);
        render(<CategoryEdit {...traslateData} />,catedit_wraper);
        Ztil.runAnim(catedit_wraper,"zoomIn")
    }
})

export default CateList;