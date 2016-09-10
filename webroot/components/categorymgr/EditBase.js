import React from 'react'
import {BreadCrumb, IBoxTool} from '../../common/Birdie'
import API from '../../conf/API'

const EditBase = React.createClass({

    getInitialState(){
        return {
            category: {
                name: "",
                name_en: "",
                name_es: ""
            }
        }
    },
    componentWillReceiveProps(nextProps){
        this.setState({
            category: nextProps.category
        })
    },
    render(){
        var {category} = this.state;
        return (
            <form ref="categoryForm" className="form-horizontal">
                <input type="hidden" ref="category_id" defaultValue={category.id} name="id"/>
                <input type="hidden" ref="parent_id" defaultValue={category.parent_id} name="parent_id"/>
                <div className="form-group">
                    <label className="control-label col-sm-2">分类名称:</label>
                    <div className="col-sm-8">
                        <input ref="category_name" name="name" value={category.name} onChange={this.handleInput} placeholder={category.name}  type="text" className="form-control" />
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group">
                    <label className="control-label col-sm-2">分类名称(en):</label>
                    <div className="col-sm-8">
                        <input name="name_en" value={category.name_en} onChange={this.handleInput} placeholder={category.name_en} type="text" className="form-control" />
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group">
                    <label className="control-label col-sm-2">分类名称(es):</label>
                    <div className="col-sm-8">
                        <input name="name_es" value={category.name_es} onChange={this.handleInput} placeholder={category.name_es} type="text" className="form-control" />
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group">
                    <label className="control-label col-sm-2">缩略图地址:</label>
                    <div className="col-sm-8">
                        <span style={{border: "1px solid #DDD",display: "inline-block"}}><img src="http://img3x8.ddimg.cn/24/19/60558918-1_x_4533.jpg"/></span>
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group">
                    <label className="control-label col-sm-2">状态:</label>
                    <div className="col-sm-8">
                        <div className="radio">
                            <label>
                                <input defaultChecked type="radio" name="status" value="1"/>
                                {" "}启用
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" name="status" value="2"/>
                                {" "}禁用
                            </label>
                        </div>
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group">
                    <label className="col-sm-2">&nbsp;</label>
                    <div className="col-sm-8">
                        {
                            category.id ? <button onClick={this.editCategory} type="button" className="btn btn-primary">确认修改</button>
                                : <button onClick={this.saveCategory} type="button" className="btn btn-primary">保存</button>
                        }

                    </div>
                </div>
            </form>
        )
    },
    handleInput(e){
        var name = $(e.target).attr("name"),
            newObj = {};

        newObj[name] = e.target.value;

        var category = Object.assign({},this.state.category,newObj)
        this.setState({category: category});
    },
    editCategory(){
        var {categoryForm, category_id, category_name} = this.refs;
        var categoryid = category_id.value;
        var params = $(categoryForm).serializeArray();
        var $curTreeNode = $(".tree-root .tree-node[data-node-id="+categoryid+"]");

        $.ajax({
            url: API.category_edit,
            data: params,
            success: function(data){
                if(data.response_data){
                    alert("修改成功");
                    $curTreeNode.find(".nodeName").text(category_name.value);
                }
            }.bind(this)
        })
    },
    saveCategory(){
        var {categoryForm, parent_id,category_name} = this.refs;
        var params = $(categoryForm).serializeArray();
        var pid = parent_id.value;
        console.log(params);

        $.ajax({
            url: API.category_add,
            data: params,
            success: function(data){
                if(data.response_data){
                    alert("添加成功");
                    var {insertId} = data.response_data;
                    var $curTreeNode = $(".tree-root li[data-pid="+pid+"]");
                    var $newNode = $curTreeNode.find(".newNode");
                    var $treeNode = $newNode.children(".tree-node");

                    $treeNode.removeClass("zoomIn animated").attr("data-node-id",insertId);
                    $treeNode.find(".nodeName").text(category_name.value);

                    var $newNodeChild = $newNode.children();
                    $newNode.remove();
                    $curTreeNode.append($newNodeChild)
                }
            }.bind(this)
        })
    }
})

export default EditBase;