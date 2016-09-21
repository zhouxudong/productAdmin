import React from 'react'
import {BreadCrumb, IBoxTool, SelectGroup} from '../../common/Birdie'
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
        this.ajaxProduct(this.props.id);
        if(!opera)
            this.registImageUpload();
    },
    componentWillReceiveProps(nextProps){
        this.ajaxProduct(nextProps.id);
    },
    render(){
        var {product,categorys} = this.state;
        var {opera,id} = this.props;
        return (
            <IBoxTool title="产品添加">
                <form ref="addProductForm" className="form-horizontal" method="post" encType="multipart/form-data">
                    <input name="thumb" type="hidden" defaultValue={(product.thumb || "/uploads/images/EWwjc2338434_8_14.jpg")} ref="imgpath" />
                    <input name="bigThumb" type="hidden" defaultValue={(product.bitThumb || "/uploads/images/EWwjc2338434_8_14.jpg")} ref="bigimgpath" />
                    <input name="id" type="hidden" defaultValue={id} ref="product_id" />
                    <div className="form-group">
                        <label className="col-sm-2 control-label">产品名称</label>
                        <div className="col-sm-6"><input disabled={opera == "info" ? true : false} value={product.name} onChange={this.handleInput} placeholder={product.name} name="name" type="text" className="form-control"/></div>
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">产品所属分类</label>
                        <div ref="selectGroup" className="col-sm-10">
                            <SelectGroup categorys={categorys} ajaxCategory={this.ajaxCategory} />
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
                        <label className="col-lg-2 control-label">产品缩略图</label>
                        {
                            product.thumb ? (<div className="col-lg-6">
                                                <img width="200" src={product.thumb} />
                                                <button type="button" onClick={e =>{this.showDropzone("small")}} className={opera == "info" ? "none":"btn btn-primary"}>修改</button>
                                                <div ref="imgupload" className="col-md-12 dropzone none"></div>
                                            </div>)
                                : <div ref="imgupload" className="col-md-6 dropzone"></div>
                        }
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group">
                        <label className="col-lg-2 control-label">产品大图</label>
                        {
                            product.bigThumb ? (<div className="col-lg-6">
                                <img width="400" src={product.bigThumb} />
                                <button type="button" onClick={e => {this.showDropzone("big")}} className={opera == "info" ? "none":"btn btn-primary"}>修改</button>
                                <div ref="bigimgupload" className="col-md-12 dropzone none"></div>
                            </div>)
                                : <div ref="bigimgupload" className="col-md-6 dropzone"></div>
                        }
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group">
                        <div className="col-sm-4 col-sm-offset-2">
                            <button onClick={this.props.switchToList} type="button" className="btn btn-white">取消</button> {" "}
                            {
                                opera == "info" ?
                                    ""
                                    :
                                (opera == "edit" ?
                                        <button onClick={this.updateProduct} type="button" className="btn btn-primary">确定修改</button>
                                        :
                                        <button onClick={this.saveProduct} type="button" className="btn btn-primary">保存</button>
                                )

                            }

                        </div>
                    </div>
                </form>
            </IBoxTool>
        )
    },
    registImageUpload(imgupload,imgpath){

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
    showDropzone(type){
        var {imgupload, imgpath, bigimgupload, bigimgpath} = this.refs;
        if(type == "small"){
            var {imgupload} = this.refs;
            $(imgupload).show();
            this.registImageUpload(imgupload,imgpath);
        }else{
            var {bigimgupload} = this.refs;
            $(bigimgupload).show();
            this.registImageUpload(bigimgupload, bigimgpath);
        }
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
                    if(data.response_data){
                        data = data.response_data;
                        this.setState({
                            product: data
                        })
                        this.ajaxCategoryParents(data.pid);
                    }
                }.bind(this)
            })
        }else{
            this.ajaxCategory();
        }
    },
    ajaxCategoryParents(id){
        $.ajax({
            url: API.category_parents,
            data: {id: id},
            success: function(data){
                if(data.response_data){
                    this.setState({
                        categorys: data.response_data
                    })
                }
            }.bind(this)
        })
    },
    ajaxCategory(pid, selIndex){

        var {categorys} = this.state;
        $.ajax({
            url: API.category_list,
            data: {parent_id: (pid || 0)},
            success: function(data){
                if(data.response_data){
                    data = data.response_data;

                    if(data.list.length == 0) categorys.splice(selIndex+1,3);
                    else categorys.splice(selIndex+1,3,data);

                    this.setState({
                        categorys: categorys
                    })
                }
            }.bind(this)
        })
    },
    updateProduct(){
        var {addProductForm, selectGroup} = this.refs;
        var {ajaxProducts, switchToList} = this.props;
        var params = $(addProductForm).serializeArray();

        var $pidEl = $(selectGroup).find("[name=pid]");

        if($pidEl.val() == "-1"){
            alert("请选择所属分类");
            return false;
        }
        $.ajax({
            url: API.product_edit,
            data: params,
            success: function(data){
                if(data.response_data){
                    alert("修改成功");
                    switchToList(ajaxProducts);
                }
            }.bind(this)
        })
    },
    saveProduct(){
        var {addProductForm, selectGroup} = this.refs;
        var {ajaxProducts, switchToList} = this.props;
        var params = $(addProductForm).serializeArray();

        var $pidEl = $(selectGroup).find("[name=pid]");

        if($pidEl.val() == "-1"){
            alert("请选择所属分类");
            return false;
        }
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