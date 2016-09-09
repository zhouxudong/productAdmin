import React from 'react'
import {BreadCrumb, IBoxTool} from '../../common/Birdie'

const SpecifList = ({category,showParamsList}) => {

    return (
        <IBoxTool title={`规格 》 ${category} 》 列表`}>
            <table className="table">
                <thead>
                <tr>
                    <th>名称</th>
                    <th>字段类型</th>
                    <th>类型</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>颜色</td>
                    <td>自定义</td>
                    <td>系统内置</td>
                    <td>启用</td>
                    <td><a onClick={ e => {
                        showParamsList("颜色");
                    }} href="javascript:;">参数列表</a></td>
                </tr>
                <tr>
                    <td>尺寸</td>
                    <td>多选框</td>
                    <td>自定义</td>
                    <td>禁用</td>
                    <td><a onClick={ e => {
                        showParamsList("尺寸");
                    }} href="javascript:;">参数列表</a>{" "}<a href="#">禁用</a></td>
                </tr>
                </tbody>
            </table>
            <button className="btn btn-primary">添加规格</button>
        </IBoxTool>
    )
}
export default SpecifList;