import $ from 'jquery';
``
export default class PaginationSearch extends React.Component {
    constructor(props){
        super(props);
        this.state={
            droplistOpen:false
        }
    }

    selectOption(value){
        let searchValue = value==="All"?"":value;
        this.refs.selectInput.value = value;
        this.setState({droplistOpen:false});
        this.props.searchFun(searchValue,this.refs.searchInfo.value);
    }

    searchClick(){
        let tempValue = this.props.hasDrop?this.refs.selectInput.value:'';
        this.props.searchFun(tempValue,this.refs.searchInfo.value);
    }

    clearSearchClick(){
        let tempValue = this.props.hasDrop?this.refs.selectInput.value:'';
        this.props.searchFun(tempValue,'');
    }

    showList(event){
        event.stopPropagation();
        this.setState({droplistOpen:!this.state.droplistOpen});
    }

    listOpen(){
        this.setState({droplistOpen:true});
    }

    listClose(){
        this.setState({droplistOpen:false});
    }

    createList(){
        var items =this.props.dropList|| [{Value:'All'},{Value:'Pending'},{Value:'Acknowledged'},{Value:'Reassigned'},{Value:'Resolved'},{Value:'Cancelled'},{Value:'Closed'}];
        var reactThis = this;
        var dropList = items.map((item,index)=>{
            //var itemDiv = item.Value === 'All'? '': item.Value;
            return <div key={"select"+index} onClick={this.selectOption.bind(reactThis,item.Value)}>
                        {item.Value}
                    </div>
        })
        return dropList;
    }
   
    enterSearch(e) {
        if (!e) {
            e = window.event;
        }
        if ((e.keyCode || e.which) == 13) {
            this.props.searchFun(this.refs.selectInput.value,this.refs.searchInfo.value);
        }
    }

    componentDidMount() {  
        $(window).click(this.listClose.bind(this));
    }

    render(){
        let {dropdown,searchFun,hasDrop} = this.props;
        let listItems = this.createList();
        let searchDrop = hasDrop?<div className="acs-searchpanel-dropdown">
                                    <div className="acs-dropdown-selectedvalue" onClick={this.showList.bind(this)}><input ref="selectInput"  placeholder="Status" disabled="disabled"/><span className="acs-dropdown-icon"></span></div>
                                    <div className="acs-dropdown-list" style={{height:this.state.droplistOpen?"auto":"0"}} onMouseOver={this.listOpen.bind(this)} onMouseOut={this.listClose.bind(this)}>
                                        {listItems}
                                    </div>
                                </div>:null;
        
        return <div className="acs-searchpanel">
                    {searchDrop}
                    <div ref="searchInput" className={hasDrop?"acs-searchpanel-div":"acs-searchpanel-divsec"}>
                        <input type="text" ref="searchInfo" onKeyDown={this.enterSearch.bind(this,window.event)} placeholder="Search"/>
                        <span id="searchinput" className="acs-searchicon" onClick={this.searchClick.bind(this)}  ></span>
                        <span id="clearsearch" className="acs-clearsearchicon" onClick={this.clearSearchClick.bind(this)}>X</span>
                    </div>
                </div>
    }

}
