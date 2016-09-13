import React from 'react'
import {render,findDOMNode} from 'react-dom'
import {Link} from 'react-router'
import Ztil from '../statics/js/public'

const ColorPicker = React.createClass({

    getDefaultProps(){

        return {
            oftenColor: [
                {
                    id: 19547332,
                    name: "白色系",
                    value: "#ffffff",
                    subs: [
                        {
                            id: 28321,
                            name: "乳白色",
                            value: "#fffbf0"
                        },
                        {
                            id: 28320,
                            name: "白色",
                            value: "#ffffff"
                        },
                        {
                            id: 4266701,
                            name: "米白色",
                            value: "#eedeb0"
                        }
                    ]
                },
                {
                    id: '8121627',
                    name: "灰色系",
                    value: "#808080",
                    subs:[
                        {
                            id: 28332,
                            name: "浅灰色",
                            value: '#e4e4e4'

                        },
                        {
                            id: 3232478,
                            name: "深灰色",
                            value: '#666666'

                        },
                        {
                            id: 28334,
                            name: "灰色",
                            value: '#808080'

                        },
                        {
                            id: 28330,
                            name: "银色",
                            value: '#c0c0c0'

                        }
                    ]
                },
                {
                    id: 3516042,
                    name: "黑色系",
                    value: "#000000",
                    subs:[
                        {
                            id: 28341,
                            name: "黑色",
                            value: '#000000'

                        }
                    ]
                },
                {
                    id: 3325939,
                    name: "红色系",
                    value: "#ff0000",
                    subs:[
                        {
                            id: 4950473,
                            name: "桔红色",
                            value: '#ff7500'

                        },
                        {
                            id: 3594022,
                            name: "玫红色",
                            value: '#df1b76'

                        },
                        {
                            id: 3232480,
                            name: "粉红色",
                            value: '#ffb6c1'

                        },
                        {
                            id: 28326,
                            name: "红色",
                            value: '#ff0000'

                        },
                        {
                            id: 4464174,
                            name: "藕色",
                            value: '#eed0d8'

                        },
                        {
                            id: 3743025,
                            name: "西瓜红",
                            value: '#f05654'

                        },
                        {
                            id: 28327,
                            name: "酒红色",
                            value: '#990000'

                        }
                    ]
                },
                {
                    id: 3427736,
                    name: "黄色系",
                    value: "#ffff00",
                    subs:[
                        {
                            id: 28331,
                            name: "卡其色",
                            value: '#c3b091'

                        },
                        {
                            id: 15409374,
                            name: "姜黄色",
                            value: '#ffc773'

                        },
                        {
                            id: 20412615,
                            name: "明黄色",
                            value: '#ffff01'

                        },
                        {
                            id: 30155,
                            name: "杏色",
                            value: '#f7eed6'

                        },
                        {
                            id: 132476,
                            name: "柠檬黄",
                            value: '#ffec43'

                        },
                        {
                            id: 90554,
                            name: "桔色",
                            value: '#ffa500'

                        },
                        {
                            id: 60092,
                            name: "浅黄色",
                            value: '#faff72'

                        },
                        {
                            id: 6134424,
                            name: "荧光黄",
                            value: '#eaff56'

                        },
                        {
                            id: 28328,
                            name: "金色",
                            value: '#ffd700'

                        },
                        {
                            id: 130166,
                            name: "香槟色",
                            value: '#eee685'

                        },
                        {
                            id: 28324,
                            name: "黄色",
                            value: '#ffff00'

                        },

                    ]
                },
                {
                    id: 6303197,
                    name: "绿色系",
                    value: "#008000",
                    subs:[
                        {
                            id: 3232483,
                            name: "军绿色",
                            value: '#5d762a'
                        },
                        {
                            id: 80557,
                            name: "墨绿色",
                            value: '#057748'
                        },
                        {
                            id: 30156,
                            name: "浅绿色",
                            value: '#98fb98'
                        },
                        {
                            id: 28335,
                            name: "绿色",
                            value: '#008000'
                        },
                        {
                            id: 8588036,
                            name: "翠绿色",
                            value: '#0aa344'
                        },
                        {
                            id: 6535235,
                            name: "荧光绿",
                            value: '#23fa07'
                        },
                        {
                            id: 3455405,
                            name: "青色",
                            value: '#00e09e'
                        },


                    ]
                },
                {
                    id: 3547657,
                    name: "蓝色系",
                    value: "#0000fe",
                    subs: [
                        {
                            id: 3232484,
                            name: "天蓝色",
                            value: "#44cef6"
                        },
                        {
                            id: 5138330,
                            name: "孔雀蓝",
                            value: "#00a4c5"
                        },
                        {
                            id: 3707775,
                            name: "宝蓝色",
                            value: "#4b5cc4"
                        },
                        {
                            id: 28337,
                            name: "浅蓝色",
                            value: "#d2f0f4"
                        },
                        {
                            id: 28340,
                            name: "深蓝色",
                            value: "#041690"
                        },
                        {
                            id: 5483105,
                            name: "湖蓝色",
                            value: "#30dff3"
                        },
                        {
                            id: 28338,
                            name: "蓝色",
                            value: "#0000fe"
                        },
                        {
                            id: 28866,
                            name: "藏青色",
                            value: "#2e4e7e"
                        },
                    ]
                },
                {
                    id: 3560058,
                    name: "紫色系",
                    value: "#800080",
                    subs: [
                        {
                            id: 4104877,
                            name: "浅紫色",
                            value: "#ede0e6"
                        },
                        {
                            id: 3232479,
                            name: "深紫色",
                            value: "#430653"
                        },
                        {
                            id: 5167321,
                            name: "紫红色",
                            value: "#8b0062"
                        },
                        {
                            id: 80882,
                            name: "紫罗兰",
                            value: "#b7ace4"
                        },
                        {
                            id: 28329,
                            name: "紫色",
                            value: "#800080"
                        }
                    ]
                },
                {
                    id: 5497335,
                    name: "棕色系",
                    value: "#7c4b00",
                    subs: [
                        {
                            id: 129819,
                            name: "咖啡色",
                            value: "#603912"
                        },
                        {
                            id: 3232481,
                            name: "巧克力色",
                            value: "#d2691e"
                        },
                        {
                            id: 6071353,
                            name: "栗色",
                            value: "#60281e"
                        },
                        {
                            id: 30158,
                            name: "浅棕色",
                            value: "#b35c44"
                        },
                        {
                            id: 3232482,
                            name: "深卡其布色",
                            value: "#bdb76b"
                        },
                        {
                            id: 6588790,
                            name: "深棕色",
                            value: "#7c4b00"
                        },
                        {
                            id: 132069,
                            name: "褐色",
                            value: "#855b00"
                        },
                        {
                            id: 3224419,
                            name: "驼色",
                            value: "#a88462"
                        },
                    ]
                },
                {
                    id: 14089179,
                    name: "花色系",
                    value: "#d4a369",
                    subs: [
                        {
                            id: 130164,
                            name: "花色",
                            value: "#d4a369"
                        }
                    ]
                },
                {
                    id: 15495009,
                    name: "透明系",
                    value: "rgba(255,255,255,.1)",
                    subs: [
                        {
                            id: 107121,
                            name: "透明色",
                            value: "rgba(255,255,255,.1)"
                        }
                    ]
                }
            ]
        }
    },
    render(){
        var {oftenColor} = this.props;
        return (
            <div className="colorPick_input">
                <div className="pown">
                    <input ref="color_input" onFocus={this.focus} onBlur={this.blur} className="form-control" placeholder="选择或输入主色"/>
                </div>
                <div ref="color_picker" className="color-picker clearfix none">
                    <div className="triangle">
                        <div className="inner-triangle"></div>
                    </div>
                    <div ref="group_list" className="group-list">
                        <ul className="names">
                            {
                                oftenColor.map(color => {
                                    return (
                                        <li onMouseOver={this.mouseover} key={color.id} data-id={color.id} className="name">
                                            <span style={{background:`${color.value}`}} className="rgb-box"></span>
                                            {color.name}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div ref="color_list" className="color-list"><p>常用标准颜色：</p>
                        {
                            oftenColor.map(color => {
                                var subColors = color.subs.map( subColor => {
                                    return (
                                        <li onClick={this.choseColor} key={subColor.id} data-value={subColor.id} className="color">
                                            <span data-rgb={subColor.value} style={{background: `${subColor.value}`}} className="rgb-box"></span>
                                            {subColor.name}
                                        </li>
                                    )
                                })
                                return (
                                    <ul key={color.id + "_ul"} className="colors none" data-id={color.id}>
                                        {subColors}
                                    </ul>
                                )
                            })
                        }
                    </div>
                    <div className="search-list"><p>标准色：</p>
                        <ul className="s-list">
                            <li className="search-item">浅灰色</li>
                            <li className="search-item">亚浅灰</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    choseColor(e){
        var $element = $(e.target);
        var {color_input} = this.refs;
        $(color_input).val($element.text());
    },
    mouseover(e){
        var $element = $(e.target);
        var {group_list,color_list} = this.refs;
        var id = $element.data("id");

        $(color_list).find(".colors").addClass("none");
        $(group_list).find(".active").removeClass("active");

        $(color_list).find("[data-id="+id+"]").removeClass("none");
        $element.addClass("active");
    },
    colorPickerToggle(){
        var {color_picker} = this.refs;
        $(color_picker).slideToggle(200);
    },
    focus(){
        this.colorPickerToggle();
    },
    blur(){
        this.colorPickerToggle();
    }
})
const AutoComplete = React.createClass({

    render(){
        return (
            <div className="autoComplete">
                <input onKeyUp={this.relate} onBlur={this.blur} type="text" className="form-control" />
                <div ref="relate" className="auto_relate" style={{display: "none"}}>
                    <ul>
                        <li>async a</li>
                        <li>business</li>
                        <li>classsni</li>
                    </ul>
                </div>
            </div>
        )
    },
    relate(){
        var {relate} = this.refs;
        if($(relate).is(":hidden")){
            $(relate).slideToggle(200)
        }
    },
    blur(){
        var {relate} = this.refs;
        $(relate).slideToggle(200)
    }
})

const TreeNode = React.createClass({

    trash(event,id){
        var {delCategory} = this.props;
        var $parentli = $(event.currentTarget).closest("li");

        id = id ? id : $parentli.data("node-id");
        delCategory(id,$parentli);
    },
    plus(event,parent_id){
        console.log(event);
        console.log(parent_id);

        var $parentTreeNode = $(event.target).closest(".tree-node");
        var $toggle_arrow = $parentTreeNode.find(".toggle_arrow");

        parent_id = (parent_id == 0 || parent_id) ? parent_id : $parentTreeNode.data("node-id");
        var $treeNodes = $parentTreeNode.next(".tree-nodes");
        if(parent_id != 0 && !parent_id) return false;
        if($treeNodes.children("li").children(".newNode").length > 0) return false;

        var $newli = $("<li data-pid='"+parent_id+"'></li>").appendTo($treeNodes[0])
        var childNode = this.getChildNode({name: "子节点", status: 2},"zoomIn animated");

        //添加展开节点
        $toggle_arrow.removeClass("fa-angle-down");
        $toggle_arrow.addClass("fa-angle-right");
        if($treeNodes.children().length < 1) this.props.showSubsNode(parent_id);

        render(<div className="newNode">
            {childNode}
            <ol className="tree-nodes"></ol>
        </div>,$newli[0])
    },
    toggleArrow(e, parent_id){
        var $arrow = $(e.target);
        if(!$arrow.hasClass("fa")) $arrow = $arrow.children();

        var $nextNodes = $arrow.closest(".tree-node").next(".tree-nodes");
        if($arrow.hasClass("fa-angle-down")){   //将要展开
            $arrow.removeClass("fa-angle-down");
            $arrow.addClass("fa-angle-right");
            if($nextNodes.children().length < 1) this.props.showSubsNode(parent_id);
            $nextNodes.slideDown();
        }else{  //将要关闭
            $arrow.removeClass("fa-angle-right");
            $arrow.addClass("fa-angle-down");
            $nextNodes.slideUp();
        }
    },
    getChildNode(treeNode,aniStyle){
        if(treeNode.id == 0){
            return (
                <div data-node-id="0" className={"tree-node tree-handle tree-node tree-node-content"}>
                    <a onClick={e => {this.plus(e,0)}} className="pull-right btn btn-white btn-xs"><span className="fa fa-plus"></span></a>
                    <a className="btn btn-primary btn-xs"><span className="fa fa-angle-down"></span></a>
                    {treeNode.name}
                </div>
            )
        }
        return (
            <div data-node-id={treeNode.id} className={"tree-node tree-handle tree-node-content " + (aniStyle ? aniStyle : "")}>
                <a onClick={e => {this.trash(e,treeNode.id)}} className="pull-right btn btn-white btn-xs"><span className="fa fa-trash"></span></a>
                <a onClick={ e => {this.plus(e,treeNode.id)}} className="pull-right btn btn-white btn-xs"><span className="fa fa-plus"></span></a>
                <a onClick={ e => {this.props.edit(e,treeNode.id)} } className="pull-right btn btn-white btn-xs"><span className="fa fa-edit"></span></a>
                <a className="pull-right btn btn-white btn-xs"><span className={"fa " + (treeNode.status == 1 ? "fa-eye" : "fa-eye-slash")}></span></a>
                <a onClick={ e => {this.toggleArrow(e,treeNode.id)} } className="btn btn-primary btn-xs"><span className="fa fa-angle-down toggle_arrow"></span></a>
                <span className="nodeName">{treeNode.name}</span>
            </div>
        )
    },
    getTreeNode(treeNodes){
        return (
            <ol className="tree-nodes">
                {
                    treeNodes.map((treeNode) => {
                        var subNode = <ol className="tree-nodes"></ol>;
                        if(treeNode.subs && treeNode.subs.length > 0){
                            subNode = this.getTreeNode(treeNode.subs);
                        }
                        return (
                            <li data-node-id={treeNode.id} key={treeNode.name}>
                                {this.getChildNode(treeNode)}
                                {subNode}
                            </li>
                        )
                    })
                }
            </ol>
        )
    },
    render(){
        var {treeJson} = this.props;
        return (
            <div className="tree-root">
                {
                    this.getTreeNode(treeJson)
                }
            </div>
        )
    }
})
const BreadCrumb = React.createClass({

    render(){
        var {crumbs,title} = this.props;
        return (
            <div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-lg-10">
                    <h2>{title}</h2>
                    <ol className="breadcrumb">
                        {
                            crumbs.map((crumb,i) => {
                                var link = <Link to={crumb.url}>{crumb.name}</Link>;
                                if(i == (crumbs.length-1)) link = <strong>{crumb.name}</strong> ;
                                return (
                                    <li key={i+i} className={i == (crumbs.length-1) ? "active": ""}>
                                        {link}
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
})
const IBoxTool = React.createClass({

    render(){
        var {children,title} = this.props;
        return (
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5>{title}</h5> <span className="label label-primary">YC+</span>
                    <div className="ibox-tools dropdown">
                        <a onClick={this.showhide} > <i className="fa fa-chevron-up"></i></a>
                        <a className="dropdown-toggle">
                            <i className="fa fa-wrench"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li><a href>Config option 1</a>
                            </li>
                            <li><a href>Config option 2</a>
                            </li>
                        </ul>
                        <a onClick={this.closebox} ><i className="fa fa-times"></i></a>
                    </div>
                </div>
                <div className="ibox-content clearfix">
                    {children}
                </div>
            </div>
        )
    },
    showhide(event){
        var $element = $(event.currentTarget);
        var ibox = $element.closest("div.ibox");
        var icon = $element.find('i:first');
        var content = ibox.find('div.ibox-content');
        content.slideToggle(200);
        // Toggle icon from up to down
        icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function(){
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        },50)
    },
    closebox(event){
        var ibox = $(event.currentTarget).closest("div.ibox");
        ibox.remove();
    }
})

require('../statics/css/laypage.css');
const LayPage = React.createClass({
    getInitialState(){
        return {
            config: {
                pages: 1,
                curr: 1,
                groups: 5,
                first: "首页",
                last: "末页",
                prev: "上一页",
                next: "下一页"
            }
        }
    },
    componentWillReceiveProps(nextProp){
        var newConf = Object.assign(
            {},
            this.state.config,
            nextProp.config
        );
        this.setState({
            config: newConf
        })
    },
    render(){
        var {config} = this.state;
        console.log(config);
        var view = [], dict = {};

        if(config.pages <= 1){
            return (<div className="noPage"></div>);
        }

        if(config.groups > config.pages){
            config.groups = config.pages;
        }

        //计算当前组
        dict.index = Math.ceil((config.curr + ((config.groups > 1 && config.groups !== config.pages) ? 1 : 0))/(config.groups === 0 ? 1 : config.groups));

        //当前页非首页，则输出上一页
        if(config.curr > 1 && config.prev){
            view.push(<a onClick={this.jump} key={"page_prev"} href="javascript:;" className="laypage_prev" data-page={config.curr - 1}>{config.prev}</a>);
        }

        //当前组非首组，则输出首页
        if(dict.index > 1 && config.first && config.groups !== 0){
            view.push(
                <span key="firstGroup">
                    <a onClick={this.jump} key={config.first + "first"} href="javascript:;" className="laypage_first" data-page="1"  title="首页">{config.first}</a>
                    <span>…</span>
                </span>);
        }

        //输出当前页组
        dict.poor = Math.floor((config.groups-1)/2);
        dict.start = dict.index > 1 ? config.curr - dict.poor : 1;
        dict.end = dict.index > 1 ? (function(){
            var max = config.curr + (config.groups - dict.poor - 1);
            return max > config.pages ? config.pages : max;
        }()) : config.groups;
        if(dict.end - dict.start < config.groups - 1){ //最后一组状态
            dict.start = dict.end - config.groups + 1;
        }
        for(; dict.start <= dict.end; dict.start++){
            if(dict.start === config.curr){
                var bgColor = (/^#/.test(config.skin)) ? {backgroundColor:config.skin} : {};

                view.push(<span key={ "page_curr"} className="laypage_curr" style={bgColor}>{dict.start}</span>);
            } else {
                view.push(<a onClick={this.jump} key={dict.start} href="javascript:;" data-page={dict.start}>{dict.start}</a>);
            }
        }

        //总页数大于连续分页数，且当前组最大页小于总页，输出尾页
        if(config.pages > config.groups && dict.end < config.pages && config.last && config.groups !== 0){
            view.push(<span key={"abc+wraper"}>
                <span>…</span>
                <a onClick={this.jump} key={"page_last"} href="javascript:;" className="laypage_last" title="&#x5C3E;&#x9875;"  data-page={config.pages}>{config.last}</a>
            </span>);
        }

        //当前页不为尾页时，输出下一页
        dict.flow = !config.prev && config.groups === 0;
        if(config.curr !== config.pages && config.next || dict.flow){
            var nextOrEnd = (dict.flow && config.curr === config.pages)
                ? <span className="page_nomore">{config.next}</span>
                : <a onClick={this.jump} key={"page_next"} href="javascript:;" className="laypage_next" data-page={config.curr + 1}>{config.next}</a>;
            view.push(nextOrEnd);
        }
        var skipInput = (
            <span key={"totla"} className="laypage_total">
                <label>跳到</label>
                <input placeholder={config.pages} onKeyUp={ this.skipFN } className="laypage_skip"/>
                <label>页</label>{" "}
                <button type="button" className="btn btn-xs btn-primary">确定</button>
            </span>
        )
        var skip = config.skip ? skipInput : "";
        return (
            <div id={"laypage_0"} style={{textAlign:"center"}}
                 className={"laypage_main laypageskin_" + (config.skin ? (function(skin){return /^#/.test(skin) ? 'molv' : skin;})(config.skin):"default") }>
                {view}
                {skip}
            </div>
        )
    },
    skipFN(event){
        event.target.value = event.target.value.replace(/[^0-9]/,'')
    },
    jump(e){
        var $element = $(e.target);
        var curPage = $element.data("page");

        var nowState = Object.assign({}, this.state.config,{
            curr: curPage
        })
        this.setState({
            config: nowState
        })
        this.props.jump(curPage);
    }
})
const ICheck = React.createClass({
    render(){
        var {className} = this.props;
        return (
            <div onClick={this.handleClick} className="icheckbox_square-green"  style={{position: "relative"}}>
                <input onChange={this.handleChange} ref="checkbox" type="checkbox" className={className} style={{opacity: 0, cursor: "pointer"}}/>
            </div>
        )
    },
    handleChange(e){
        var $element = $(e.target);

        if($element.is(":checked")){
            $element.parent().addClass("checked");
        }else{
            $element.parent().removeClass("checked");
        }
    },
    handleClick(e){
        var $element = $(e.target);
        if($element[0].nodeName == "INPUT") {
            $element = $element.parent();
        }
        var {checkbox} = this.refs;
        $element.toggleClass("checked");

        if($element.hasClass("checked")){
            $(checkbox).prop("checked",true);
        }else{
            $(checkbox).prop("checked",false);
        }
        this.props.clickCallback($element);
    }
})
const AreaPicker = React.createClass({
    componentDidMount(){
        //Ztil.iCheckInit();
    },
    render(){
        return (
            <table className="table table-striped area-picker">
                <tbody>
                {
                    AreaList.map( distract => {
                        return (
                            <tr key={distract.name}>
                                <td width="20%"><input type="checkbox" className="chk_all_1"/>{distract.name}</td>
                                <td>
                                    {this.province(distract.list,distract.name)}
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    },
    closeCitysPanel(e){
        var $element = $(e.target);
        $element.closest(".sub_list").hide();
    },
    cityCheck(e){
        var $element = $(e.target);
        var $subListWraper = $element.closest(".sub_list");
        //所有选中城市的长度
        var checkCityLn = $subListWraper.find(".chk_sub_list:checked").length;
        $subListWraper.prev().text(`(${checkCityLn})`);
    },
    cityHtml(citys){
        var cityHtml = citys.map(city => (
            <label key={city.id}>
                <input onClick={this.cityCheck} className="chk_sub_list" type="checkbox" data-code={city.id}/> {city.name}
            </label>
        ));
        return (
            <div>
                {cityHtml}
                <div className="tc">
                    <button onClick={this.closeCitysPanel} className="btn btn-xs">关闭</button>
                </div>
            </div>
        )
    },
    provinceCheck($element){
        var $citysWraper = $element.closest(".p_wrap").find(".sub_list");
        var citysCheckbox = $citysWraper.find(".chk_sub_list");

        var citysCheckedLn = 0;
        if($element.hasClass("checked")){
            citysCheckbox.prop("checked",true);
            citysCheckedLn = citysCheckbox.length;
        }else{
            citysCheckbox.prop("checked",false);
        }
        console.log(citysCheckedLn);
        $citysWraper.prev().text(`(${citysCheckedLn})`);

    },
    //根据省ID 和 地区名称获取该省的所有市
    getCitysByPID_DNAME(provinceID, districtName){

        //获取当前地区： 华北、西北、东北、西南、华南、华东、华中。。。
        var district = AreaList.filter( dist => {
            if(dist['name'] == districtName) return true;
        });
        //获取当前省对象。
        var province = district[0].list.filter( arr => {
            if(arr['id'] == provinceID) return true;
        })
        //当前市数组
        var citys = Ztil.objToArr(province[0].sub);
        return citys;
    },
    renderCitys(e,provinceID, districtName){
        var $element = $(e.target);
        var citys = this.getCitysByPID_DNAME(provinceID, districtName);

        var $disWraper = $("<div class='sub_list well'></div>").insertBefore($element[0]);
        render(this.cityHtml(citys),$disWraper[0]);
        $disWraper.show()
    },
    province(provinces,districtName){
        return provinces.map(province => {
            var cityList = Ztil.objToArr(province.sub);
            var moreCitys = "";
            if(cityList.length > 1){ //非直辖市点击获取市列表
                moreCitys = <i onClick={e=>{this.renderCitys(e,province.id,districtName)}} className="fa fa-chevron-down"></i>
            }else{
                moreCitys = (   //直辖市直接获取市列表
                    <div className="sub_list">
                        <input type="checkbox" className="chk_sub_list" data-code={cityList[0].id}/>
                    </div>
                );
            }
            return (
                <span key={province.id} className="p_wrap" data-subln={cityList.length} >
                    <ICheck clickCallback={this.provinceCheck} data-code={province.id} className="chk_list"/>
                    {province.name}
                    <span className="arrow_down">
                        <span className="sub_ln"></span>
                        {moreCitys}
                    </span>
                </span>
            )
        })
    }
})
const SelectGroup = React.createClass({

    render(){
        var {categorys} = this.props;
        return (
            <div>
                {
                    categorys.map( (selects,i) => {
                        var options = selects.list || [];


                        return <div className="w200 fl mr10" key={i+"_select"}>
                            <select name={categorys.length == (i+1) ? "pid" : ""} data-index={i} className="form-control" onChange={this.handleSelectChange}>
                                {
                                    options.map(option => {
                                        return <option key={option.id + "_option"} value={option.id}>{option.name}</option>
                                    })
                                }
                            </select>
                        </div>
                    })
                }
            </div>
        )
    },
    handleSelectChange(e){
        var {ajaxCategory} = this.props;
        var $element = $(e.target);
        var optionID = $element.val();
        var selIndex = $element.data("index");

        ajaxCategory(optionID,selIndex);
    }
})

export {
    BreadCrumb,
    IBoxTool,
    TreeNode,
    LayPage,
    ColorPicker,
    AutoComplete,
    ICheck,
    AreaPicker,
    SelectGroup
}