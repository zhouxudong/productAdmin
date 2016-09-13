import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import API from "../../conf/API"
import {BreadCrumb, IBoxTool, LayPage} from '../../common/Birdie'
import ProductAdd from "./ProductAdd"
import Ztil from '../../statics/js/public'

const ProdList = React.createClass({
    getInitialState(){
        return {
            products: [],
            categorys: [],
            total: 1,
            curr: 1
        }
    },
    componentDidMount(){
        this.ajaxProducts();
        this.ajaxCategory();
    },
    render(){
        var crumbs = [
            {name: "商品管理", url:"#"},
            {name: "商品列表", url: "#"}
        ]
        var pagesNum = 10;
        var {total, curr} = this.state;
        var pages = (total % pagesNum == 0) ? parseInt(total/pagesNum) : parseInt(total/pagesNum) + 1;
        return (
            <div id="product_list" className="">
                <BreadCrumb crumbs={crumbs} title="商品管理"/>
                <div ref="list_wraper" className="wrapper wrapper-content animated fadeInRight">

                    <div className="row">
                        <IBoxTool title="商品搜索">
                            <form className="form-horizontal" onSubmit={()=>{return false}}>
                                <div className="row">
                                    <div className="form-group col-sm-4">
                                        <label className="col-sm-3 control-label" htmlFor="product_ID">商品ID:</label>
                                        <div className="col-sm-9">
                                            <input ref="product_id" type="text" className="form-control" id="product_ID" placeholder="输入商品ID"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label className="col-sm-3 control-label" htmlFor="product_name">商品名称:</label>
                                        <div className="col-sm-9">
                                            <input ref="product_name" type="text" className="form-control" id="product_name" placeholder="输入商品名称"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label className="col-sm-3 control-label" htmlFor="status">状态:</label>
                                        <div className="col-sm-9">
                                            <select ref="product_status" className="form-control">
                                                <option value="-1">全部</option>
                                                <option value="1">上架</option>
                                                <option value="2">下架</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label className="col-sm-3 control-label" htmlFor="status">商品分类:</label>
                                        <div className="col-sm-9">
                                            <select ref="product_category" name="pid" className="form-control w100">
                                                <option value="-1">全部</option>
                                                {
                                                    this.state.categorys.map( category => {
                                                        return <option key={category.id} value={category.id}>{category.name}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2"><button onClick={this.searchProduct} type="button" className="btn btn-block btn-primary">搜索</button></div>
                                <div className="col-sm-2">
                                    <button onClick={() => {this.addProduct(0)}} type="button" className="btn btn-block btn-primary">添加商品</button>
                                </div>
                            </form>
                        </IBoxTool>
                    </div>
                    <div className="row">
                        <IBoxTool title={`总共：${total}商品`}>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th width="10%"><input type="checkbox"/> 全选</th>
                                    <th width="10%">产品名(cn)</th>
                                    <th width="15%">产品名(en)</th>
                                    <th width="15%">产品名(es)</th>
                                    <th width="10%">所属分类</th>
                                    <th width="10%">缩略图</th>
                                    <th width="10%">时间</th>
                                    <th width="25%">操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.products.map( product => {
                                        var statusOpe = <button onClick={e => {this.online(product.id)}} className="btn btn-primary btn-sm">上架</button>;
                                        if(product.status == 1){
                                            statusOpe = <button onClick={e => {this.offline(product.id)}} className="btn btn-primary btn-sm">下架</button>;
                                        }
                                        var otime = new Date(product.otime);
                                        otime = `${otime.getFullYear()}-${otime.getMonth()+1}-${otime.getDate()}`;
                                        return (
                                            <tr key={product.id}>
                                                <td><input type="checkbox" />{product.id}</td>
                                                <td>
                                                    {product.name}
                                                </td>
                                                <td>{product.name_en}</td>
                                                <td>{product.name_es}</td>
                                                <td>{product.category_name}</td>
                                                <td><img width="120px" src={product.thumb}/></td>
                                                <td>{otime}</td>
                                                <td>
                                                    <button onClick={ e => {this.addProduct(product.id,"info")}} className="btn btn-primary btn-sm">查看</button> {" "}
                                                    <button onClick={ e => {this.addProduct(product.id,"edit")}} className="btn btn-primary btn-sm">编辑</button> {" "}
                                                    <button onClick={ e => {this.delProduct(product.id)}} className="btn btn-primary btn-sm">删除</button> {" "}
                                                    {statusOpe}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                            <LayPage jump={this.jump} config={{pages:pages,skin: "#1ab394",curr: curr}} />
                        </IBoxTool>
                    </div>
                </div>
                <div ref="add_wraper" className="wrapper wrapper-content"></div>
            </div>
        )
    },
    searchProduct(){
        var {product_id, product_name, product_status, product_category} = this.refs;

        this.ajaxProducts({
            curr: 1,
            pid: product_category.value == -1 ? "" : product_category.value,
            keyWord: product_name.value,
            status: product_status.value == -1 ? "" : product_status.value
        });
        
    },
    jump(curr){
        this.ajaxProducts({curr: curr});
    },
    online(id){
        $.ajax({
            url: API.product_on,
            data: {id: id},
            success: function(data){
                if(data.response_data){
                    this.ajaxProducts();
                }
            }.bind(this)
        })
    },
    offline(id){
        $.ajax({
            url: API.product_off,
            data: {id: id},
            success: function(data){
                if(data.response_data){
                    this.ajaxProducts();
                }
            }.bind(this)
        })
    },
    handleInput(e){
        var name = $(e.currentTarget).attr("name"),
            newObj = {};

        newObj[name] = e.target.value;

        //var product = Object.assign({},this.state.product,newObj)
        //this.setState({product: product});
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
    ajaxProducts(option){
        $.ajax({
            url: API.product_list,
            data: option,
            success: function(data){
                if(data.response_data){
                    data = data.response_data;
                    this.setState(
                        Object.assign(this.state,{
                            products: data.list,
                            total: data.count,
                            curr: option && option.curr || 1
                        })
                    );
                }
            }.bind(this)
        })
    },
    switchToList(callback){
        var {list_wraper, add_wraper} = this.refs;
        Ztil.runAnim(add_wraper,"zoomOut",function(){unmountComponentAtNode(add_wraper);})

        $(list_wraper).show();
        Ztil.runAnim(list_wraper,"fadeInRight");

        if(typeof callback === "function") callback();
    },
    delProduct(id){
        $.ajax({
            url: API.product_del,
            data: {id: id},
            success: function(data){
                if(data.response_data){
                    this.ajaxProducts({curr: 1})
                }
            }.bind(this)

        })
    },
    addProduct(id,opera){
        var {list_wraper, add_wraper} = this.refs;
        Ztil.runAnim(list_wraper,"zoomOut",function(){$(list_wraper).removeClass("fadeInRight").hide();});
        var events = {
            opera: opera || "",
            id: id || "",
            switchToList: this.switchToList,
            ajaxProducts: this.ajaxProducts
        }
        render(<ProductAdd {...events}/>,add_wraper);
        Ztil.runAnim(add_wraper,"fadeInRight");
    }
})

export default ProdList;