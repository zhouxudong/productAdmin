import React from 'react'
import {BreadCrumb, IBoxTool} from '../../common/Birdie'

const AttrList = React.createClass({

    render(){
        var {showFiledEdit, category} = this.props;
        return (
            <IBoxTool title={`${category} 》 列表`}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>名称</th>
                        <th>字段类型</th>
                        <th>是否参与搜索</th>
                        <th>状态</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>包装</td>
                        <td>自定义</td>
                        <td>是</td>
                        <td>启用</td>
                        <td><a onClick={ e => {
                            showFiledEdit("包装");
                        }} href="#">修改</a></td>
                    </tr>
                    <tr>
                        <td>大小</td>
                        <td>多选框</td>
                        <td>否</td>
                        <td>禁用</td>
                        <td><a onClick={ e => {
                            showFiledEdit("大小");
                        }} href="#">修改</a></td>
                    </tr>
                    </tbody>
                </table>
                <button className="btn btn-primary">添加规格</button>
            </IBoxTool>
        )
    }
})

export default AttrList;