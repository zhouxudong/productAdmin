import React from 'react'
import {render} from 'react-dom'
import {BreadCrumb, IBoxTool} from '../../common/Birdie'
import AttrList from './AttrList'
import AttrEdit from "./AttrEdit"

const Attribute = React.createClass({

    render(){
        var crumbs = [
            {name: "商品管理", url:"#"},
            {name: "商品属性", url: "#"}
        ]
        return (
            <div id="product_attr">
                <BreadCrumb crumbs={crumbs} title="商品管理"/>
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                            <IBoxTool title="商品属性列表">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>组名</th>
                                        <th>状态</th>
                                        <th>操作</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>公共</td>
                                        <td>显示</td>
                                        <td>
                                            <a onClick={ e => {this.showFiledList("公共")}} href="#">字段列表</a>{" "}
                                            <a href="#">修改</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>衣服</td>
                                        <td>显示</td>
                                        <td>
                                            <a onClick={ e => {this.showFiledList("衣服")}} href="#">字段列表</a>{" "}
                                            <a href="#">修改</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>电脑</td>
                                        <td>隐藏</td>
                                        <td>
                                            <a onClick={ e => {this.showFiledList("电脑")}} href="#">字段列表</a>{" "}
                                            <a href="#">修改</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <button className="btn btn-primary">添加分组</button>
                            </IBoxTool>
                        </div>
                        <div ref="attrlist_wraper" className="col-sm-4 col-xs-12"></div>
                        <div ref="filededit_wraper" className="col-sm-4 col-xs-12"></div>
                    </div>
                </div>
            </div>
        )
    },
    category: "",
    showFiledEdit(subCategory){
        var {filededit_wraper} = this.refs;

        render(<AttrEdit category={this.category} subCategory={subCategory}/>,filededit_wraper);
        this.runAnim(filededit_wraper,"slideInRight");
    },
    showFiledList(category){
        this.category = category;
        var {attrlist_wraper} = this.refs;

        render(<AttrList category={category} showFiledEdit={this.showFiledEdit}/>,attrlist_wraper);
        this.runAnim(attrlist_wraper,"slideInRight");
    },
    runAnim(selector,x,callback){
        $(selector).addClass(x + " animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
            $(this).removeClass(x + " animated")
            if(callback) callback();
        })
    }
})

export default Attribute;