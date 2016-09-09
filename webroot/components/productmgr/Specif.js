import React from 'react'
import {render} from 'react-dom'
import Ztil from '../../statics/js/public'

import SpecifList from './SpecifList'
import ParamList from './ParamList'
import {BreadCrumb, IBoxTool} from '../../common/Birdie'

const Specif = React.createClass({

    render(){
        var crumbs = [
            {name: "商品管理", url:"#"},
            {name: "商品规格", url: "#"}
        ]

        return (
            <div id="product_specif" className="">
                <BreadCrumb crumbs={crumbs} title="商品管理"/>

                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <div className="col-sm-3 col-xs12">
                            <IBoxTool title="商品规格列表">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>类别</th>
                                        <th>状态</th>
                                        <th>操作</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>公共</td>
                                        <td>显示</td>
                                        <td><a onClick={ e => {this.showSpeciflist("公共")}} href="#">规格列表</a>{" "}<a href="#">修改</a></td>
                                    </tr>
                                    <tr>
                                        <td>衣服</td>
                                        <td>显示</td>
                                        <td><a onClick={ e => {this.showSpeciflist("衣服")}} href="#">规格列表</a>{" "}<a href="#">修改</a></td>
                                    </tr>
                                    <tr>
                                        <td>手机</td>
                                        <td>显示</td>
                                        <td><a onClick={ e => {this.showSpeciflist("手机")}} href="#">规格列表</a>{" "}<a href="#">修改</a></td>
                                    </tr>
                                    </tbody>
                                </table>
                                <button className="btn btn-primary">添加分组</button>
                            </IBoxTool>
                        </div>
                        <div ref="speciflist_wraper" className="col-sm-5 col-xs12"></div>
                        <div ref="paramlist_wraper" className="col-sm-4 col-xs12"></div>
                    </div>
                </div>
            </div>
        )
    },
    category: "",
    showParamsList(subCategory){
        var {paramlist_wraper} = this.refs;

        render(<ParamList category={this.category} subCategory={subCategory}/>,paramlist_wraper);
        Ztil.runAnim(paramlist_wraper,"slideInRight");

    },
    showSpeciflist(category){
        this.category = category;
        var {speciflist_wraper, paramlist_wraper} = this.refs;

        render(<SpecifList showParamsList={this.showParamsList} category={category}/>,speciflist_wraper);
        Ztil.runAnim(speciflist_wraper,"slideInRight");

        Ztil.runAnim(paramlist_wraper,"slideOutRight", () => {
            $(paramlist_wraper).empty();
        })
    }
})
export default Specif;