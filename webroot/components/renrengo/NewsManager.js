import React from 'react'
import {BreadCrumb, IBoxTool, TreeNode} from '../../common/Birdie'

const NewsManager = React.createClass({

    render(){
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
                                    <tr>
                                        <td>墨西哥商会宗旨</td>
                                        <td>机械、大</td>
                                        <td>2016-10-25 10:23</td>
                                        <td>
                                            <a href="#">编辑</a> | {" "}
                                            <a href="#">发布</a> | {" "}
                                            <a href="#">下架</a>
                                        </td>
                                    </tr>
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