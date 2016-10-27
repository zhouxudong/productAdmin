import React from "react"
import {BreadCrumb, IBoxTool, TreeNode} from '../../common/Birdie'
import API from "../../conf/API"

const AddNews = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },
    ue: null,
    getInitialState(){
        return {
            newsInfo: {
                title: "",
                tags: "",
                content: "新闻内容"
            }
        }
    },
    getNewsInfo(id){
        return new Promise( (resolve, reject) => {
            $.ajax({
                url: API.news_info,
                data: {
                    id: id
                },
                success: function(data){
                    if(!data.error_code){
                        data = data.response_data;
                        resolve(data);
                    }else{
                        alert(data.error_msg);
                        reject(data);
                    }
                }.bind(this),
                error: function(x){
                    reject(x)
                }
            })
        })
    },
    componentDidMount(){
        var {container} = this.refs;
        var {query} = this.props.location;
        var id = query.id;
        if(id){
            this.getNewsInfo(id)
            .then( data => {
                this.setState({
                    newsInfo: data
                })
                UE.delEditor(container);
                this.ue = UE.getEditor(container);
            })
        }else{
            UE.delEditor(container);
            this.ue = UE.getEditor(container);
        }


    },
    addNews(){
        var {addNewForm} = this.refs;

        var postdata = $(addNewForm).serializeArray();
        console.log(postdata);
        $.ajax({
            url: API.news_add,
            data: postdata,
            success: function(data){
                if(!data.error_code){
                    alert("添加成功！");
                    this.context.router.push("/newsmgr/list")
                }else{
                    alert(data.error_msg);
                }
            }.bind(this),
            error: function(x,s,t){
                throw x;
            }
        })
    },
    updateNews(){
        var {addNewForm} = this.refs;
        var {query} = this.props.location;
        var id = query.id;
        var postdata = $(addNewForm).serializeArray();
        $.ajax({
            url: API.new_edit + "?id=" + id,
            data: postdata,
            success: function(data){
                if(!data.error_code){
                    alert("修改成功！");
                    this.context.router.push("/newsmgr/list")
                }else{
                    alert(data.error_msg);
                }
            }.bind(this)
        })
    },
    render(){
        var {newsInfo} = this.state;
        var {query} = this.props.location;
        var id = query.id;
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
                                    <input onChange={this.handleNewsChange} className="form-control" name="title" value={newsInfo.title} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2">标签：</label>
                                <div className="col-sm-8">
                                    <input onChange={this.handleNewsChange} className="form-control" name="tags" value={newsInfo.tags}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2">新闻内容：</label>
                                <div className="col-sm-8">
                                    <textarea onChange={this.handleNewsChange} value={newsInfo.content} ref="container" name="content"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-4">
                                    {
                                        id ? <button type="button" onClick={this.updateNews} className="btn btn-primary">确定修改</button>
                                            :<button type="button" onClick={this.addNews} className="btn btn-primary">确定添加</button>

                                    }
                                </div>
                            </div>
                        </form>
                        </IBoxTool>
                    </div>
                </div>
            </div>
        )
    },
    handleNewsChange(e){
        var $ele = e.target;
        var name = $ele.name;
        var value = $ele.value;
        var {newsInfo} = this.state;
        this.setState({
            newsInfo : Object.assign({},newsInfo,{
                [name] : value
            })
        })
    }
})

export default AddNews;