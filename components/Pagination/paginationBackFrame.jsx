import PaginationArrows from './paginationArrows.jsx';
import PaginationDataFrame from './paginationDataFrame.jsx';
import PaginationSearch from './paginationSearch.jsx';
import LetterSearchFrame from './letterSearchFrame.jsx';
import DropDownList from './../Common/dropDownList.jsx';
import AjaxButtonCell from './../table/ajaxButtonCell.jsx';
import JsButtonCell from './../table/jsActionButtonCell.jsx';

export default class PaginationFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowPage: 1,
            currentItems:this.props.config.data,
            tempPageSize:this.props.config.pageSize,
            itemsToDo:'',
            totalCount:this.props.totalCount,
            searchInfo:'',
            tempStatus:''
        };
    }

    componentWillMount(){
    }

    componentDidMount(){
        if(this.refs.jsButton){
            this.refs.jsButton.disabled = true;
        }
        $("button[id^='ajaxButton']").attr('disabled',true);
    }

    changePageSize(size){
        this.state.tempPageSize = parseInt(size);
        this.getEveryPageData(this.props.dataUrl,this.state.tempPageSize,1,this.state.tempStatus,this.state.searchInfo);
    }

    turnPage(n){
        let pageCount = this.state.nowPage + n;
        this.getEveryPageData(this.props.dataUrl,this.state.tempPageSize,pageCount,this.state.tempStatus,this.state.searchInfo);
        this.setState({nowPage:pageCount});
    }

    searchFun(cond1,cond2){
        this.state.tempStatus = cond1;
        this.state.searchInfo = cond2;
        this.getEveryPageData(this.props.dataUrl,this.state.tempPageSize,1,this.state.tempStatus,this.state.searchInfo);
    }


    getToDoItems(items,canAction){
        this.state.itemsToDo = items;
        if(this.refs.jsButton){
            if(canAction){
                this.refs.jsButton.disabled = false;            
            }
            else{
                this.refs.jsButton.disabled = true;
            }
        }
        for(var i=0;i<this.props.config.buttons.length;i++){
            if(this.props.config.buttons[i].Type == "ajax"){
                var name = this.props.config.buttons[i].Options.Name;
                $("button:contains('" + name + "')").attr('disabled', this.state.itemsToDo == "");
            }
        }
    }

    createOperationBtn(buttons){
      return  buttons.map((item,index)=>{
            if(item.Type === "js"){
                return <button type="button" className="acs-turningframe-operationbtn" onClick={this.executeJsFun.bind(this,item.Options.Action)} ref="jsButton">
                            {item.Options.Name}
                        </button>
            }
            else{
                return <AjaxButtonCell itemData={item.Options} tableOperation={this.tableOperation.bind(this)} key={"btn"+index} index={index}></AjaxButtonCell>
            }
        }) ;
    }

    executeJsFun(funName){
        funName(this.state.itemsToDo);
    }

    tableOperation(url,parameter){
        let data = this.state.itemsToDo;
        let finalUrl = url+"?"+parameter+"="+data;
        let waitDialog = null;
        if(data !==''){
            EnsureScriptFunc("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", function () {
                waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose("Loading...");
                $.ajax({
                    type: "GET",
                    url: finalUrl,
                    headers: {
                        "Accept": "application/json;odata=verbose",
                        "Content-Type": "application/json;odata=verbose",
                    },
                    dataType: "json",
                    cache:false,
                    async: true,
                    success: function () {
                        waitDialog.close(SP.UI.DialogResult.OK);
                        window.location.reload();
                    },
                    error: function (error) {
                        waitDialog.close(SP.UI.DialogResult.OK);
                        window.location.reload();
                        console.log(error);
                    }
                });
            });
        }
    }


    getEveryPageData(url,pageSize,pageCount,status,searchinfo){
        let finalUrl = url + "?pageSize="+pageSize+"&pageCount="+pageCount+"&status="+status+"&searchinfo="+searchinfo;
        let thisReact = this;
         EnsureScriptFunc("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", function () {
            var waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose("Loading..."); 
            $.ajax({
                type: "POST",
                url: url,
                headers: {
                    "Accept": "application/json;odata=verbose",
                    "Content-Type": "application/json;odata=verbose",
                },
                dataType: "json",
                cache:false,
                async: false,
                data:JSON.stringify({pageNumber:pageCount,count:pageSize,searchString:searchinfo,status:status}),
                success: function (dataInput) {
                    thisReact.setState({
                        currentItems:dataInput.Items,
                        totalCount:dataInput.TotalCount
                    },function(){waitDialog.close(SP.UI.DialogResult.OK);});
                },
                error: function (error) {
                    console.log(error);
                    waitDialog.close(SP.UI.DialogResult.OK);
                }
            });
        });
    }

    render() {
        let {config,hasTitle,hasTurning,hasSearch,hasLetterSearch,canChangeSize,canOperationTable} = this.props;
        let currentpage = this.state.nowPage;
        let child =  React.cloneElement(this.props.children, {
            listData: this.state.currentItems,
            selectItems:this.getToDoItems.bind(this)
        });

        child = hasLetterSearch?<LetterSearchFrame letterSearch={this.letterFun.bind(this)}>{child} </LetterSearchFrame>:child;

        let turningPanel = hasTurning?<PaginationArrows turnPage={this.turnPage.bind(this)} currentPage={currentpage} countInPage={this.state.tempPageSize} totalCount={this.state.totalCount}></PaginationArrows>:null;
        let dataFrame = hasTitle?<PaginationDataFrame frameTitle={config.frameTitle} frameDesc={config.frameDesc}>{child}</PaginationDataFrame>:<div>{child}</div>;
        let searchPanel = hasSearch.hasSearch?<PaginationSearch hasDrop={hasSearch.hasDrop} searchFun={this.searchFun.bind(this)} dropList={hasSearch.dropList}></PaginationSearch>:null;
        let tableOperation = <div className="acs-turningframe-operation">
                                {canChangeSize? <div><span>Show</span><DropDownList selectAction={this.changePageSize.bind(this)} listData={config.dropList} defaultValue={""}></DropDownList><span>entries</span></div>:null}
                                {canOperationTable?<div>{this.createOperationBtn(config.buttons)}</div>:null}
                             </div>   ;


        return <div className="acs-turningframe">
                    {tableOperation}
                    {searchPanel}
                    <div style={{clear:"both"}}></div>
                    {dataFrame}
                    {turningPanel}
                </div>
    }
}
