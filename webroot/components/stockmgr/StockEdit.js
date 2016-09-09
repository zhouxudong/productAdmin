import React from 'react'
import {IBoxTool} from '../../common/Birdie'

const StockEdit = React.createClass({

    render(){
        return (
            <IBoxTool title="修改仓库">
                <div className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-sm-2">仓库名</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" defaultValue="北京仓库" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">优先级</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" defaultValue="10" />
                        </div>
                    </div>
                    <button className="btn btn-primary">保存</button>
                </div>
            </IBoxTool>
        )
    }
})

export default StockEdit;