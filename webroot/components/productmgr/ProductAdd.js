import React from 'react'
import {BreadCrumb, IBoxTool} from '../../common/Birdie'
import API from '../../conf/API'
require("../../statics/js/plugins/dropzone/dropzone");
require("../../statics/less/product.less");

const ProductAdd = React.createClass({

    getInitialState(){
      return {
          categorys: [],
          product: {
              name: "",
              name_en: "",
              name_es: "",
              descript_en: "",
              descript_es: ""
          }
      }
    },
    componentDidMount(){
        var{opera} = this.props;
        this.ajaxCategory();
        this.ajaxProduct(this.props.id);
        if(!opera)
            this.registImageUpload();
    },
    componentWillReceiveProps(nextProps){
        this.ajaxProduct(nextProps.id);
    },
    render(){
        var {product} = this.state;
        var {opera} = this.props;
        return (
            <IBoxTool title="商品添加">
                <form ref="addProductForm" className="form-horizontal" method="post" encType="multipart/form-data">
                    <input name="thumb" type="hidden" defaultValue={product.thumb} ref="imgpath" />
                    <div className="form-group">
                        <label className="col-sm-2 control-label">产品名称</label>
                        <div className="col-sm-6"><input disabled={opera == "info" ? true : false} value={product.name} onChange={this.handleInput} placeholder={product.name} name="name" type="text" className="form-control"/></div>
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">产品所属分类</label>
                        <div className="col-sm-3">
                            <select disabled={opera == "info" ? true : false} value={product.pid} onChange={this.handleInput} ref="category" name="pid" className="form-control w100">
                                {
                                    this.state.categorys.map( category => {
                                        return <option key={category.id} value={category.id}>{category.name}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">产品名称(en)</label>
                        <div className="col-sm-6">
                            <input disabled={opera == "info" ? true : false} value={product.name_en} onChange={this.handleInput} placeholder={product.name_en} name="name_en" type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">产品名称(es)</label>
                        <div className="col-sm-6">
                            <input disabled={opera == "info" ? true : false} value={product.name_es} onChange={this.handleInput} placeholder={product.name_es} name="name_es" className="form-control"/>
                        </div>
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">主要参数(en)</label>
                        <div className="col-sm-6">
                            <textarea disabled={opera == "info" ? true : false} value={product.descript_en} onChange={this.handleInput} placeholder={product.descript_en} name="descript_en" style={{width: "100%",height: "125px"}}></textarea>
                        </div>
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group">
                        <label className="col-lg-2 control-label">主要参数(es)</label>
                        <div className="col-lg-6">
                            <textarea disabled={opera == "info" ? true : false} value={product.descript_es} onChange={this.handleInput} placeholder={product.descript_es} name="descript_es" style={{width: "100%",height: "125px"}}></textarea>
                        </div>
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group">
                        <label className="col-lg-2 control-label">产品主图</label>
                        {
                            product.thumb ? (<div className="col-lg-6">
                                                <img width="400" src={product.thumb} />
                                                <button type="button" onClick={this.showDropzone} className={opera == "info" ? "none":"btn btn-primary"}>修改</button>
                                                <div ref="imgupload" className="col-md-12 dropzone none"></div>
                                            </div>)
                                : <div ref="imgupload" className="col-md-6 dropzone"></div>
                        }
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group">
                        <div className="col-sm-4 col-sm-offset-2">
                            <button onClick={this.props.switchToList} type="button" className="btn btn-white">取消</button> {" "}
                            <button onClick={this.saveProduct} type="button" className={opera == "info" ? "none":"btn btn-primary"}>保存</button>
                        </div>
                    </div>
                </form>
            </IBoxTool>
        )
    },
    registImageUpload(){
        var {imgupload,imgpath} = this.refs;
        $(imgupload).dropzone({
            url: "/api/product/imgupload",
            maxFiles: 10,
            maxFilesize: 512,
            acceptedFiles: ".jpg,.png,.gif,.jpeg",
            uploadMultiple: false,
            init: function(){
                this.on("success",function(data){
                    var res = JSON.parse(data.xhr.response);
                    if(res.response_data){
                        $(imgpath).val(res.response_data['src']);
                    }
                })

            }
        });
    },
    showDropzone(){
        var {imgupload} = this.refs;
        $(imgupload).show();
        this.registImageUpload();
    },
    handleInput(e){
        var name = $(e.currentTarget).attr("name"),
            newObj = {};

        newObj[name] = e.target.value;

        var product = Object.assign({},this.state.product,newObj)
        this.setState({product: product});
    },
    ajaxProduct(id){
        if(id){
            $.ajax({
                url: API.product_info,
                data: {
                    id: id,
                },
                success: function(data){
                    this.setState({
                        product: data.response_data
                    })
                }.bind(this)
            })
        }
    },
    ajaxCategory(){
        $.ajax({
            url: API.category_list,
            data: {parent_id: 0},
            success: function(data){
                if(data.response_data){
                    data = data.response_data;
                    this.setState({
                        categorys: data.list
                    })
                }
            }.bind(this)
        })
    },
    saveProduct(){
        var {addProductForm} = this.refs;
        var {ajaxProducts, switchToList} = this.props;
        var params = $(addProductForm).serializeArray();
        $.ajax({
            url: API.product_add,
            data: params,
            success: function(data){
                if(data.response_data){
                    alert("添加成功");
                    switchToList(ajaxProducts);
                }
            }.bind(this)
        })
    }
})

export default ProductAdd;