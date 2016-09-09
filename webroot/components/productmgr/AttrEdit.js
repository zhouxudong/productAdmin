import React from 'react'
import {BreadCrumb, IBoxTool} from '../../common/Birdie'

const AttrEdit = React.createClass({

    render(){
        var {category, subCategory} = this.props;
        return (
            <IBoxTool title={`${category} 》 ${subCategory} 》 编辑`}>
                <div className="form-group">
                    <label className="control-label col-sm-3">属性名称</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-3">字段类型</label>
                    <div className="col-sm-8">
                        <select className="form-control">
                            <option>14</option>
                            <option>13</option>
                            <option>12</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-3">数据结构</label>
                    <div className="col-sm-8">
                        <select className="form-control">
                            <option>14</option>
                            <option>13</option>
                            <option>12</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-3">状态</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" />
                    </div>
                </div>
            </IBoxTool>
        )
    }
})
export default AttrEdit;