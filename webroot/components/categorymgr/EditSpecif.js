import React from 'react'

const EditSpecif = React.createClass({

    render(){
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-sm-2">规格1:</label>
                    <div className="col-sm-8">
                        <div className="radio">
                            <label>
                                <input type="radio" name="attr1" value="1"/>
                                {" "}必填
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" name="attr1" value="2"/>
                                {" "}不必填
                            </label>
                        </div>
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group">
                    <label className="control-label col-sm-2">规格2:</label>
                    <div className="col-sm-8">
                        <div className="radio">
                            <label>
                                <input type="radio" name="attr2" value="1"/>
                                {" "}必填
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" name="attr2" value="2"/>
                                {" "}不必填
                            </label>
                        </div>
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group">
                    <label className="control-label col-sm-2">&nbsp;</label>
                    <div className="col-sm-8">
                        <button className="btn btn-sm btn-primary">保存</button>
                    </div>
                </div>
            </form>
        )
    }
})

export default EditSpecif;