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
            total: 0
        }
    },
    componentDidMount(){
        this.ajaxProducts();
    },
    render(){
        var crumbs = [
            {name: "商品管理", url:"#"},
            {name: "商品列表", url: "#"}
        ]
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
                                            <input type="text" className="form-control" id="product_ID" placeholder="输入商品ID"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label className="col-sm-3 control-label" htmlFor="product_name">商品名称:</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="product_name" placeholder="输入商品名称"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label className="col-sm-3 control-label" htmlFor="status">状态:</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="status"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2"><button type="submit" className="btn btn-block btn-primary">搜索</button></div>
                                <div className="col-sm-2">
                                    <button onClick={() => {this.addProduct(0)}} type="button" className="btn btn-block btn-primary">添加商品</button>
                                </div>
                            </form>
                        </IBoxTool>
                    </div>
                    <div className="row">
                        <IBoxTool title={`总共：${this.state.total}商品`}>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th width="10%"><input type="checkbox"/> 全选</th>
                                    <th width="10%">产品名(cn)</th>
                                    <th width="20%">产品名(en)</th>
                                    <th width="20%">产品名(es)</th>
                                    <th width="10%">缩略图</th>
                                    <th width="10%">时间</th>
                                    <th width="30%">操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.products.map( product => {
                                        var statusOpe = <button onClick={e => {this.online(product.id)}} className="btn btn-primary btn-sm">上架</button>;
                                        if(product.status == 1){
                                            statusOpe = <button onClick={e => {this.offline(product.id)}} className="btn btn-primary btn-sm">下架</button>;
                                        }
                                        return (
                                            <tr key={product.id}>
                                                <td><input type="checkbox" />{product.id}</td>
                                                <td>
                                                    {product.name}
                                                </td>
                                                <td>{product.name_en}</td>
                                                <td>{product.name_es}</td>
                                                <td><img width="120px" src={product.thumb}/></td>
                                                <td>{product.otime}</td>
                                                <td>
                                                    <button onClick={ e => {this.addProduct(product.id,"info")}} className="btn btn-primary btn-sm">查看</button> {" "}
                                                    <button onClick={ e => {this.addProduct(product.id,"edit")}} className="btn btn-primary btn-sm">编辑</button> {" "}
                                                    {statusOpe}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                            <LayPage config={{pages:10,skin: "#1ab394",curr: 8, skip:true}} />
                        </IBoxTool>
                    </div>
                </div>
                <div ref="add_wraper" className="wrapper wrapper-content"></div>
            </div>
        )
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
    ajaxProducts(){
        $.ajax({
            url: API.product_list,
            success: function(data){
                if(data.response_data){
                    data = data.response_data;
                    this.setState(
                        {
                            products: data.list,
                            total: data.total
                        }
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