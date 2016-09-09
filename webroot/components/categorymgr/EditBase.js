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
                <input type="hidden" defaultValue={category.id} name="id"/>
                <input type="hidden" defaultValue={category.parent_id} name="parent_id"/>
                <div className="form-group">
                    <label className="control-label col-sm-2">分类名称:</label>
                    <div className="col-sm-8">
                        <input name="name" value={category.name} onChange={this.handleInput} placeholder={category.name}  type="text" className="form-control" />
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
        var {categoryForm} = this.refs;
        var params = $(categoryForm).serializeArray();

        $.ajax({
            url: API.category_edit,
            data: params,
            success: function(data){
                if(data.response_data){
                    alert("修改成功");
                    this.props.ajaxAllCategory();
                }
            }.bind(this)
        })
    },
    saveCategory(){
        var {categoryForm} = this.refs;
        var params = $(categoryForm).serializeArray();

        $.ajax({
            url: API.category_add,
            data: params,
            success: function(data){
                if(data.response_data){
                    alert("添加成功");
                    this.props.ajaxAllCategory();
                }
            }.bind(this)
        })
    }
})

export default EditBase;