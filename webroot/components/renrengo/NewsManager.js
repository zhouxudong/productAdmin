import React from 'react'
import { Link } from "react-router"
import {BreadCrumb, IBoxTool, TreeNode} from '../../common/Birdie'
import API from "../../conf/API"
import moment from "moment"

const NewsManager = React.createClass({

    getInitialState(){
        return {
            newsArr: []
        }
    },
    getNewsList(){
        $.ajax({
            url: API.news_list,
            success: function(data){
                if(!data.error_code){
                    data = data.response_data;
                    this.setState({
                        newsArr: data
                    })
                }else{
                    alert(data.error_msg);
                }
            }.bind(this)
        })
    },
    componentDidMount(){
        this.getNewsList();
    },
    render(){
        var {newsArr} = this.state;
        var crumbs = [
            {name: "新闻管理", url:"#"},
            {name: "新闻列表", url: "#"}
        ]
        return (
            <div className="newmanager">
                <BreadCrumb crumbs={crumbs} title="新闻管理"/>
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                新闻列表
                            </div>
                            <div className="panel-body">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th width="40%">新闻标题</th>
                                        <th width="20%">标签</th>
                                        <th width="20%">创建时间</th>
                                        <th width="20%">操作</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        newsArr.map( news => {
                                            return (
                                                <tr key={news.id}>
                                                    <td>{news.title}</td>
                                                    <td>{news.tags}</td>
                                                    <td>{moment(news.ctime).format("YYYY-MM-DD HH:mm")}</td>
                                                    <td>
                                                        <Link to={"/newsmgr/add?id=" + news.id}>编辑</Link> | {" "}
                                                        <a onClick={this.handleOn.bind(this,news.id)} href="#">发布</a> | {" "}
                                                        <a onClick={this.handleOff.bind(this,news.id)} href="#">下架</a>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    handleOn(id){
        $.ajax({
            url: API.new_on,
            data: {
                id: id
            },
            success: function(data){
                if(!data.error_code){
                    alert("已上架");
                    this.getNewsList();
                }else{
                    alert(data.error_msg);
                }
            }.bind(this)
        })
    },
    handleOff(id){
        $.ajax({
            url: API.new_off,
            data: {
                id: id
            },
            success: function(data){
                if(!data.error_code){
                    alert("已下架");
                    this.getNewsList();
                }else{
                    alert(data.error_msg);
                }
            }.bind(this)
        })
    }

})

export default NewsManager;