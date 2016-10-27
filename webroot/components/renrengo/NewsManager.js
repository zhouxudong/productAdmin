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
    componentDidMount(){
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
                                                        <a href="#">发布</a> | {" "}
                                                        <a href="#">下架</a>
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
    }
})

export default NewsManager;