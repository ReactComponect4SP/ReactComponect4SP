import { render } from 'react-dom';
import PaginationFrame from '../../components/pagination/paginationFrame.jsx';
import PaginationBackFrame from '../../components/pagination/paginationBackFrame.jsx';
import LetterSearchFrame from '../../components/pagination/letterSearchFrame.jsx';
import TableListFrame from '../../components/table/table.jsx';
import TableTemplateFrame from '../../components/table/templateTable.jsx';
import TableBulk from '../../components/table/tableBulk.jsx';

import StringCell from '../../components/table/stringCell.jsx';
import ServiceItem from '../../components/table/serviceItem.jsx';
import LyncItem from '../../components/table/lyncHeadCell.jsx';
import DocumentItem from '../../components/table/documentItem.jsx';
import SiteItem from '../../components/table/siteItem.jsx';
import CheckboxCell from '../../components/table/checkboxCell.jsx';

import $ from 'jquery';

function tableListBackRender(config){
    const tempConfig = {
            url: '',
            debug: true,
            pageSize: 5,
            pageCount: 1,
            divId: config.divId,
            hasPagination: true,
            search: { hasSearch: true, hasDrop: true,dropList:[{Value:'All'},{Value:'Open'},{Value:'Pending'}] },
            hasCheckbox: true,
            canOperationTable: true,
            data: {
               Header:[{Key:'ItemId',Value:"",Width:10},{Key:'RequestType',Value:"Request Type",Width:18},{Key:'RequestDate',Value:"Request Date",Width:18},{Key:'Status',Value:"Status",Width:18},
                {Key:'ProcessedBy',Value:"Processed By",Width:18},{Key:'ProcessedDate',Value:"Processed Date",Width:18}],
                Items:[
                { 'ItemId':'i0001','RequestType': {Title:"11111",Href:"http://www.baidu.com"}, 'RequestDate': '9/3/1021', 'Status': 'Open', 'ProcessedBy': 'Bill','ProcessedDate':'9/3/10211' },
                { 'ItemId':'i0002','RequestType': {Title:"11112",Href:"http://www.baidu.com"}, 'RequestDate': '9/3/1021', 'Status': 'Pending', 'ProcessedBy': 'Bill','ProcessedDate':'9/3/1021' },
                { 'ItemId':'i0003','RequestType': "ddddd", 'RequestDate': '9/3/1021', 'Status': 'Open', 'ProcessedBy': 'Bill','ProcessedDate':'9/3/10421' }
                ]
            },
            buttons: [{Type:"ajax",Options:{ Name: "test", Url: "http://bing.com", Parameter: "requestIds" }},{Type:"js",Options:{ Name: "test", Action:test}}],
            dropList: [{ Value: 4 }, { Value: 5 }, { Value: 6 }, { Value: 7 }, { Value: 8 }]
        }

    let param = null;
    function renderUI(data) {
        
        let cellArrary =data.Header.map((item,index)=>{
            if(index===0 && config.hasCheckbox){
                return <CheckboxCell selectFun={null}></CheckboxCell>
            }
            else{
                 return <StringCell itemData={null} key={"head"+index}></StringCell>
            }
        });

        let tempTable = <TableTemplateFrame hasOrder={config.hasOrder} titleData={data.Header}  listData={data.Items} hasCheckBox={config.hasCheckbox} divModule={config.divId}>
                        {cellArrary}
                </TableTemplateFrame>;

        if (document.getElementById(config.divId)) {
            render(
                <PaginationBackFrame canChangeSize={config.canChangeSize} hasTitle={false} hasTurning={config.hasPagination} canOperationTable={config.canOperationTable}
                    hasSearch={{hasSearch:config.search.hasSearch,hasDrop:config.search.hasDrop,dropList:config.search.dropList}} 
                    config={{data:data.Items,pageSize:config.pageSize,frameTitle:config.tableTitle,dropList:config.dropList,header:data.Header,buttons:config.buttons}} 
                     dataUrl={config.url} totalCount={data.TotalCount}>
                   {tempTable}
                </PaginationBackFrame>,
                document.getElementById(config.divId)
            );
        }
    }

    function loadData(param) {
        $.ajax({
            type: "POST",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            dataType: "json",
            data: {},
            cache:false,
            config: param,
            async: false,
            success: function (dataInput) {
                renderUI(dataInput);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    if(config.isBogusData){
        config = tempConfig;
    }
    renderUI(config.data);
}

global.tableListBackRender = tableListBackRender;


function tableListRender(config){
    const tempConfig = {
            url: '',
            debug: true,
            pageSize: 5,
            pageCount: 1,
            divId: config.divId,
            hasPagination: true,
            search: { hasSearch: true, hasDrop: true,dropList:[{Value:'All'},{Value:'Open'},{Value:'Pending'}] },
            hasCheckbox: true,
            canOperationTable: true,
            data: {
               Header:[{Key:'ItemId',Value:"",Width:10},{Key:'RequestType',Value:"Request Type",Width:18},{Key:'RequestDate',Value:"Request Date",Width:18},{Key:'Status',Value:"Status",Width:18},
                {Key:'ProcessedBy',Value:"Processed By",Width:18},{Key:'ProcessedDate',Value:"Processed Date",Width:18}],
                Items:[
                { 'ItemId':'i0001','RequestType': {Title:"11111",Href:"http://www.baidu.com"}, 'RequestDate': '9/3/1021', 'Status': 'Open', 'ProcessedBy': 'Bill','ProcessedDate':'9/3/10211' },
                { 'ItemId':'i0002','RequestType': {Title:"11112",Href:"http://www.baidu.com"}, 'RequestDate': '9/3/1021', 'Status': 'Pending', 'ProcessedBy': 'Bill','ProcessedDate':'9/3/1021' },
                { 'ItemId':'i0003','RequestType': "ddddd", 'RequestDate': '9/3/1021', 'Status': 'Open', 'ProcessedBy': 'Bill','ProcessedDate':'9/3/10421' }
                ]
            },
            buttons: [{Type:"ajax",Options:{ Name: "test", Url: "http://bing.com", Parameter: "requestIds" }},{Type:"js",Options:{ Name: "test", Action:test}}],
            dropList: [{ Value: 4 }, { Value: 5 }, { Value: 6 }, { Value: 7 }, { Value: 8 }]
        }

    let param = null;
    function renderUI(data) {
        
        let cellArrary =data.Header.map((item,index)=>{
            if(index===0 && config.hasCheckbox){
                return <CheckboxCell selectFun={null}></CheckboxCell>
            }
            else{
                 return <StringCell itemData={null} key={"head"+index}></StringCell>
            }
        });

        let tempTable = <TableTemplateFrame hasOrder={config.hasOrder} titleData={data.Header}  listData={data.Items} hasCheckBox={config.hasCheckbox} divModule={config.divId}>
                        {cellArrary}
                </TableTemplateFrame>;

        if (document.getElementById(config.divId)) {
            render(
                <PaginationFrame canChangeSize={config.canChangeSize} hasTitle={false} hasSearch={{hasSearch:config.search.hasSearch,hasDrop:config.search.hasDrop,dropList:config.search.dropList}} 
                    config={{data:data.Items,pageSize:config.pageSize,frameTitle:config.tableTitle,dropList:config.dropList,header:data.Header,buttons:config.buttons}} 
                    hasTurning={config.hasPagination} canOperationTable={config.canOperationTable} searchInBack={config.searchInBack} dataInBack={config.dataInBack}>
                   {tempTable}
                </PaginationFrame>,
                document.getElementById(config.divId)
            );
        }
    }

    function loadData(param) {
        $.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            dataType: "json",
            data: {},
            cache:false,
            config: param,
            async: false,
            success: function (dataInput) {
                renderUI(dataInput);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    if(config.isBogusData){
        config = tempConfig;
    }
    renderUI(config.data);
}
global.tableListRender = tableListRender;


function serviceLyncListRender(config) {
     const tempConfig = {
                url: '',
                debug: true,
                divId: config.divId,
                itemType: 'Site',
                Title: 'Site I am Following',
                pageSize: 5,
                searchInBack: false,
                loadData: false,
                isMultiply: false,
                columnCount:1,
                data:[{Email:"test1",ItemId:1,Photo:'Ddd',Name:'Sdds',Department:'ccss'},{Email:"test1",ItemId:1,Photo:'ddd',Name:'ddds',Department:'ccss'},
        {Email:"test1",ItemId:1,Photo:'Fdd',Name:'Ddds',Department:'Acss'},{Email:"test1",ItemId:1,Photo:'ddd',Name:'ddds',Department:'ccss'},
        {Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},{Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},
        {Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},{Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},
        {Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},{Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},
        {Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},{Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'}]
            }; 

    let param = { };

    function renderUI() {
        config.data.map((item,index)=>{
            item.ItemId = index;
        })
        if (document.getElementById(config.divId)) {
            render(
                <PaginationFrame hasLetterSearch={true} hasTitle={true} hasSearch={{hasSearch:false,hasDrop:false}}
                 config={{data:config.data,pageSize:6,frameTitle:config.Title,frameDesc:null}} hasTurning={true}>
                    <TableBulk columnCount={2} listData={config.data}>
                        <LyncItem itemData={null}></LyncItem>
                    </TableBulk>   
                </PaginationFrame>,
                document.getElementById(config.divId)
            );
             let imgs = document.getElementsByClassName('ms-spimn-img');
            for(var i=imgs.length-1;i>-1;i--){
                imgs[i].setAttribute('sip',imgs[i].getAttribute('data-sip'));
            }
            ProcessImn();
        }
    }

    function loadData(param) {
        $.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            dataType: "json",
            data: {},
            config: param,
            cache:false,
            async: false,
            success: function (dataInput) {
                config.data = dataInput;
                renderUI();
            },
            error: function (data) {

            }
        });
    }

    if (config.isBogusData) {
        config = tempConfig;
    }
    renderUI();
}
global.serviceLyncListRender = serviceLyncListRender;


function itemListRender(config) {
    const tempConfig = {
                url: '',
                debug: true,
                divId: config.divId,
                itemType: 'Site',
                Title: 'Site I am Following',
                pageSize: 5,
                searchInBack: false,
                loadData: false,
                isMultiply: true,
                columnCount:1,
                search: { hasSearch: false, hasDrop: false,dropList:[{Value:'Open'},{Value:'Pending'}] },
                tableDesc:{hasTableDesc:false,content:"dlfjsifj dijfsdld sijsdidjfs sijflsdijfs isdjfid josjof osdji dj dsifjs osdjfo "},
                data:[{Href:'http://www.baidu.com',Value:'itemData1'},{Href:'http://www.baidu.com',Value:'itemData1'},
                        {Href:'http://www.baidu.com',Value:'itemData13'},{Href:'http://www.baidu.com',Value:'itemData14'},
                        {Href:'http://www.baidu.com',Value:'itemData15'},{Href:'http://www.baidu.com',Value:'itemData16'}]
            }; 
    

    let param = { };

    function renderUI() {
        if(config.isMultiply){
             multiplyList();
        }
        else{
            singleList();
        }
    }

    function singleList(){
        let templeteItem = selectItemType(config.itemType);
        if (document.getElementById(config.divId)) {
            render(
               <PaginationFrame searchInBack={config.searchInBack} dataInBack={config.dataInBack} hasTitle={true} hasSearch={{hasSearch:config.search.hasSearch,hasDrop:false,dropList:config.search.dropList}} 
                config={{data:config.data,pageSize:config.pageSize,frameTitle:config.Title,totalCount:config.totalCount,frameDesc:null}} hasTurning={true}>
                    <TableBulk columnCount={config.columnCount} listData={config.data}>
                        {templeteItem}
                    </TableBulk>
                </PaginationFrame>,
                document.getElementById(config.divId)
            );
        }
    }

    function multiplyList(){
        let templeteItem = selectItemType(config.itemType);
        let serviceType = config.data.map((item,index)=>{
            return <div className="acs-servicerequest-type" key={"servicetype"+index}>
                        <PaginationFrame hasTitle={true} hasSearch={{hasSearch:false,hasDrop:false}} config={{data:item.Items,pageSize:item.Items.length,frameTitle:item.Title,frameDesc:item.Description}} hasTurning={false}>
                            <TableBulk columnCount={config.columnCount} >
                                {templeteItem}
                            </TableBulk>
                        </PaginationFrame>
                    </div>
        });

        if (document.getElementById(config.divId)) {
            render(
                <div>
                    {serviceType}
                </div>,
                document.getElementById(config.divId)
            );
        }
    }


    function selectItemType(type){
        let itemFrame = null;
        switch(type){
            case "Link":itemFrame = <ServiceItem></ServiceItem>;break;
            case "Site":itemFrame= <SiteItem></SiteItem>; break;
            case "Document":itemFrame = <DocumentItem></DocumentItem>;break;
        }
        return itemFrame;
    }

    function loadData(param) {
        $.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            dataType: "json",
            data: {},
            cache:false,
            config: param,
            async: false,
            success: function (dataInput) {
                config.data = dataInput;
                renderUI();
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    if(config.isBogusData){
        config = tempConfig;
    }
    renderUI();
}
global.itemListRender = itemListRender;

function setStatus(){
    let imgs = document.getElementsByClassName('ms-spimn-img');
    for(var i=imgs.length-1;i>-1;i--){
        imgs[i].setAttribute('sip',imgs[i].getAttribute('data-sip'));
    }
    ProcessImn();
}


function test(){
    alert('dddd');
}