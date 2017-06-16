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
            searchInfo:'',
            currentItems:null,
            tempTotalItems:null,
            tempPageSize:this.props.config.pageSize,
            itemsToDo:'',
            tempBackCount:this.props.config.totalCount
        };
    }

    componentWillMount(){
        let listData = this.props.config.data.slice(0,this.state.tempPageSize);
        this.setState({
            currentItems:listData,
            tempTotalItems:this.props.config.data,

        })
    }

    componentDidMount(){
        if(this.refs.jsButton){
            this.refs.jsButton.disabled = true;
        }
    }

    changePageSize(size){
        this.state.tempPageSize = parseInt(size);
        this.state.nowPage = 1;
        this.setState({
            currentItems:this.props.config.data.slice(0,parseInt(size))
        });
    }

    turnPage(n){
        let pageCount = this.state.nowPage + n;
        if(this.props.dataInBack){
            this.getData(pageCount);
        }
        else{
            let startCount = (pageCount-1)*this.state.tempPageSize;
            let endCount = pageCount*this.state.tempPageSize > this.state.tempTotalItems.length?this.state.tempTotalItems.length:pageCount*this.state.tempPageSize;
            let listData = this.state.tempTotalItems.slice(startCount,endCount);
            this.state.nowPage = pageCount;
            this.setState({nowPage:pageCount,currentItems:listData});
        }
    }

    searchFun(cond1,cond2){
        if(cond1!==''){
            this.hasDropSearch(cond1,cond2);
        }
        else{
            this.noDropSearch(cond2);
        }
    }

    hasDropSearch(cond1,cond2){
        let tempData = this.props.config.data;
        let searchResultFirst = [],searchResultSecond = [],finalResult=[];
        tempData.map((item)=>{
            if(item['Status'] === cond1){
                searchResultFirst.push(item);
            }
        })
        if(cond2!==''){
            if(!this.props.searchInBack){
                finalResult = this.searchInFFCode(searchResultFirst,cond2);
            }
            else{
                this.searchInBGCode(cond2);
                return;
            }
        }
        else{
            finalResult = searchResultFirst;
        }
        this.setState({
            currentItems:finalResult.slice(0,this.state.tempPageSize),
            tempTotalItems:finalResult,
            nowPage:1
        });
    }

    noDropSearch(cond2){
        let tempData = this.props.config.data,header = this.props.config.header;
        let searchResultFirst = [],searchResultSecond = [],finalResult=[];
        if(cond2 === ''){
            finalResult = tempData;
            if(this.props.dataInBack){
                this.state.tempBackCount = this.props.config.totalCount;
            }
        }
        else{
            if(!this.props.searchInBack){
                finalResult = this.searchInFFCode(tempData,cond2);
            }
            else{
                this.searchInBGCode(cond2);
                return;
            }
        }
        this.setState({
            currentItems:finalResult.slice(0,this.state.tempPageSize),
            tempTotalItems:finalResult,
            nowPage:1
        });
    }

    searchInFFCode(listData,condition){
        let tempList = [];
        let header = this.props.config.header;
        if(header === null || header.length === 0){
            header = ["Title","Description"];
        }
        listData.map((item)=>{
            for(var i = 0;i<header.length;i++){
                if(item[header[i].Key] === null){
                    continue;
                }
                var tempItem = typeof item[header[i].Key] === "object"?item[header[i].Key].Title:item[header[i].Key];
                if(tempItem.toString().toLowerCase().indexOf(condition.toLowerCase()) !== -1){
                    tempList.push(item);
                    break;
                }
            }
        });
        return tempList;
    }

    searchInBGCode(condition){
        // let finalUrl = this.config.url + "?condition="+condition;
        // $.ajax({
        //     type: "GET",
        //     url: finalUrl,
        //     headers: {
        //         "Accept": "application/json;odata=verbose",
        //         "Content-Type": "application/json;odata=verbose",
        //     },
        //     dataType: "json",
        //     cache:false,
        //     async: false,
        //     success: function (dataInput) {
        //          this.setState({
        //             currentItems:dataInput.slice(0,this.state.tempPageSize),
        //             tempTotalItems:dataInput,
        //             nowPage:1
        //         });
        //     },
        //     error: function (error) {
        //         console.log(error);
        //     }
        // });
        var tempConfig = this.props.config , reactThis = this;
        var filterObj={
            PageNo: 1,
            PageSize: tempConfig.pageSize
        };
        $.when(AvePointSocialRequest.GetSharedDocument(1, tempConfig.pageSize, condition)).done(function(dataInput){
            reactThis.setState(
                {currentItems:dataInput.allItem.slice(0,reactThis.state.tempPageSize),
                 tempTotalItems:dataInput.allItem,   
                 nowPage:1,
                tempBackCount:dataInput.count}
            );
        }).fail(function(){

        })
    }

    letterFun(letter){
        let tempList = [];
        if(letter === "ALL"){
            tempList = this.props.config.data;
        }
        else{
            this.props.config.data.map((item)=>{
                if(item.Name.toUpperCase().indexOf(letter) === 0){
                    tempList.push(item);
                }
            });
        }
        this.setState({
            currentItems:tempList.slice(0,this.state.tempPageSize),
            tempTotalItems:tempList,
            nowPage:1
        })
    }

    getToDoItems(items,canAction){
        this.state.itemsToDo = items;
        if(canAction){
            this.refs.jsButton.disabled = false;            
        }
        else{
            this.refs.jsButton.disabled = true;
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
                return <AjaxButtonCell itemData={item.Options} tableOperation={this.tableOperation.bind(this)} key={"btn"+index}></AjaxButtonCell>
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

    getData(pageCount){
        var tempConfig = this.props.config , reactThis = this;
        var filterObj={
            PageNo: pageCount,
            PageSize: tempConfig.pageSize
        };
        $.when(AvePointSocialRequest.GetSharedDocument(pageCount, tempConfig.pageSize)).done(function(data){
            reactThis.setState(
                {currentItems:data.allItem,
                nowPage:pageCount}
            );
        }).fail(function(){

        })
        
    }

    render() {
        let {config,hasTitle,hasTurning,hasSearch,hasLetterSearch,canChangeSize,canOperationTable} = this.props;
        let currentpage = this.state.nowPage;
        let child =  React.cloneElement(this.props.children, {
            listData: this.state.currentItems,
            selectItems:this.getToDoItems.bind(this)
        });

        let totalcount = this.props.dataInBack?this.state.tempBackCount:this.state.tempTotalItems.length;
        child = hasLetterSearch?<LetterSearchFrame letterSearch={this.letterFun.bind(this)}>{child} </LetterSearchFrame>:child;

        let turningPanel = hasTurning?<PaginationArrows turnPage={this.turnPage.bind(this)} currentPage={currentpage} countInPage={this.state.tempPageSize} totalCount={totalcount}></PaginationArrows>:null;
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
