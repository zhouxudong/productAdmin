import React from 'react'
import {IBoxTool} from '../../common/Birdie'

const StockCity = React.createClass({

    render(){

        return (
            <IBoxTool title="选择区域">
                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <td width="20%"><input type="checkbox" />华北地区 </td>
                        <td width="80%">
                            <input type="checkbox" />北京
                            <input type="checkbox" />天津
                            <input type="checkbox" />河北
                            <input type="checkbox" />山西
                        </td>
                    </tr>
                    <tr>
                        <td width="20%"><input type="checkbox" />华北地区 </td>
                        <td width="80%">
                            <input type="checkbox" />北京
                            <input type="checkbox" />天津
                            <input type="checkbox" />河北
                            <input type="checkbox" />山西
                        </td>
                    </tr>
                    <tr>
                        <td width="20%"><input type="checkbox" />华北地区 </td>
                        <td width="80%">
                            <input type="checkbox" />北京
                            <input type="checkbox" />天津
                            <input type="checkbox" />河北
                            <input type="checkbox" />山西
                        </td>
                    </tr>
                    </tbody>
                </table>
            </IBoxTool>
        )
    }
})
export default StockCity;