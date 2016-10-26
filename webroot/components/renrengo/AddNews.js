import React from "react"
import {BreadCrumb, IBoxTool, TreeNode} from '../../common/Birdie'

const AddNews = React.createClass({

    ue: null,
    componentDidMount(){
        var {container} = this.refs;
        this.ue = UE.getEditor(container);

    },
    addNews(){
        var {addNewForm} = this.refs;
        var postdata = $(addNewForm).serializeArray()

    },
    render(){
        var crumbs = [
            {name: "新闻管理", url:"#"},
            {name: "新闻添加", url: "#"}
        ]
        return (
            <div className="addNew">
                <BreadCrumb crumbs={crumbs} title="新闻管理"/>
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <IBoxTool title="新闻添加">
                        <form className="form-horizontal" ref="addNewForm">
                            <div className="form-group">
                                <label className="control-label col-sm-2">新闻标题：</label>
                                <div className="col-sm-8">
                                    <input className="form-control" name="title" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2">标签：</label>
                                <div className="col-sm-8">
                                    <input className="form-control" name="tags" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2">新闻内容：</label>
                                <div className="col-sm-8">
                                    <textarea ref="container" name="content" style={{width: "100%", height: "180px"}}>hello world</textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-4">
                                    <button type="button" onClick={this.addNews} className="btn btn-primary">确定添加</button>
                                </div>
                            </div>
                        </form>
                        </IBoxTool>
                    </div>
                </div>
            </div>
        )
    }
})

export default AddNews;