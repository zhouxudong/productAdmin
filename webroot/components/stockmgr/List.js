import React from 'react'
import {render} from 'react-dom'
import {BreadCrumb, IBoxTool, TreeNode} from '../../common/Birdie'
import StockEdit from './StockEdit'
import StockCity from './StockCity'
import Ztil from '../../statics/js/public'

const StockList = React.createClass({

    render(){
        var crumbs = [
            {name: "仓库管理", url:"#"},
            {name: "仓库列表", url: "#"}
        ]
        return (
            <div id="stockmgr_list">
                <BreadCrumb crumbs={crumbs} title="仓库管理"/>
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <div className="col-sm-6">
                            <IBoxTool title="仓库列表">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>仓库名</th>
                                        <th>类型</th>
                                        <th>优先级</th>
                                        <th>状态</th>
                                        <th>操作</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>北京百货仓</td>
                                        <td>自定义</td>
                                        <td>100</td>
                                        <td>显示</td>
                                        <td><a onClick={this.showEdit} href="#">编辑</a>{" "} <a onClick={this.showCity} href="#">配送城市</a></td>
                                    </tr>
                                    <tr>
                                        <td>无锡百货仓</td>
                                        <td>自定义</td>
                                        <td>100</td>
                                        <td>显示</td>
                                        <td><a onClick={this.showEdit} href="#">编辑</a>{" "} <a onClick={this.showCity} href="#">配送城市</a></td>
                                    </tr>
                                    <tr>
                                        <td>广州百货仓</td>
                                        <td>自定义</td>
                                        <td>100</td>
                                        <td>显示</td>
                                        <td><a onClick={this.showEdit} href="#">编辑</a>{" "} <a onClick={this.showCity} href="#">配送城市</a></td>
                                    </tr>
                                    <tr>
                                        <td>成都百货仓</td>
                                        <td>自定义</td>
                                        <td>100</td>
                                        <td>隐藏</td>
                                        <td><a onClick={this.showEdit} href="#">编辑</a>{" "} <a onClick={this.showCity} href="#">配送城市</a></td>
                                    </tr>
                                    <tr>
                                        <td>武汉百货仓</td>
                                        <td>自定义</td>
                                        <td>100</td>
                                        <td>显示</td>
                                        <td><a onClick={this.showEdit} href="#">编辑</a>{" "} <a onClick={this.showCity} href="#">配送城市</a></td>
                                    </tr>
                                    <tr>
                                        <td>全国</td>
                                        <td>自定义</td>
                                        <td>100</td>
                                        <td>显示</td>
                                        <td><a onClick={this.showEdit} href="#">编辑</a>{" "} <a onClick={this.showCity} href="#">配送城市</a></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </IBoxTool>
                        </div>
                        <div ref="edit_wraper" className="col-sm-6" ></div>
                    </div>
                </div>
            </div>
        )
    },
    showCity(){
        var {edit_wraper, citys_wraper} = this.refs;
        render(<StockCity/>,edit_wraper);
        Ztil.runAnim(edit_wraper,"flipInX");
    },
    showEdit(){
        var {edit_wraper, citys_wraper} = this.refs;

        render(<StockEdit/>,edit_wraper);
        Ztil.runAnim(edit_wraper,"flipInX");
    }
})
export default StockList;