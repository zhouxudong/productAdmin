import React from 'react'
import {BreadCrumb, IBoxTool} from '../../common/Birdie'

const ParamList = React.createClass({

    render(){
        var {category, subCategory} = this.props;
        return (
            <IBoxTool title={`规格 》 ${category} 》 ${subCategory} 》 参数列表`}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>名称</th>
                        <th>值</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>黄色</td>
                        <td>yellow</td>
                    </tr>
                    <tr>
                        <td>绿色</td>
                        <td>green</td>
                    </tr>
                    </tbody>
                </table>
            </IBoxTool>
        )
    }
})
export default ParamList;