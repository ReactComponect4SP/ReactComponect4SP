import $ from 'jquery';
export default class ArticlesSearchFrame extends React.Component{
     constructor(props){
        super(props);
        this.state={
            businessArticles:null,
            articlePageCount:2
        }
    }
    
    componentDidMount() {  
        window.addEventListener('keydown', this.enterSearch.bind(this,this.event));
    }  

    componentWillMount(){
        window.removeEventListener('keydown', this.enterSearch.bind(this,this.event)); 
        this.setState({
            businessArticles:this.props.config.data
        })
    }

    showMobileSearch(){
      if(this.refs.searchInput.style.left ==='-300px' ||this.refs.searchInput.style.display ===''){
          this.refs.searchInput.style.display ='flex';
          this.refs.searchInput.style.left = '0';
      } 
      else{
          this.refs.searchInput.style.left = '-300px';
           // this.refs.searchInput.style.display ='none';
      }
    }

    searchArticles(){
        if(this.refs.searchInfo.value !==''){ 
            global.searchTitle = "Title";
            this.state.articlePageCount =1;
            document.getElementById('searchinput').style.display = 'none';
            document.getElementById('clearsearch').style.display = 'block';
            this.loadDataCommon(true);
        }
    }

    clearSearchArticles(){
        global.searchTitle = "";
        document.getElementById('searchinput').style.display = 'block';
        document.getElementById('clearsearch').style.display = 'none';
        this.refs.searchInfo.value = '';
        this.loadDataCommon(true);
    }

    tabTitleSearch(condition){
        this.refs.latest.className = 'acs-searchpanel-tabbtn';
        this.refs.popular.className = 'acs-searchpanel-tabbtn';
        if(condition === 'Latest'){
            this.refs.latest.className = 'acs-searchpanel-tabbtn acs-searchpanel-tabselect';
           global.articleType = "ACSArticleDate";
        }
        else{
            this.refs.popular.className = 'acs-searchpanel-tabbtn acs-searchpanel-tabselect';
            global.articleType = "LikesCount";
        }
        this.state.articlePageCount =1;
        this.loadDataCommon(true);
    }

    loadMore(){
        var loadmore = this.state.articlePageCount +1;
        this.setState({
            articlePageCount:loadmore
        },function(){
            this.loadDataCommon(false);
        });
    }

    loadDataCommon(clearData){
        let reactThis = this;
        let tempConfig = this.props.config;
         let filterObj={
             filter:{
                CategoryName: "ACSArticleCategories",
                CategoryValue: this.props.category,
                OrderBy: global.articleType,
                Ascending: false,
                SearchTitle: global.searchTitle===''?null:global.searchTitle,
                SearchValue: this.refs.searchInfo.value === ''?null:this.refs.searchInfo.value,
                PageNo: clearData?1:this.state.articlePageCount,
                PageSize: clearData?8:4
             }
        }
        EnsureScriptFunc("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", function () {
              var waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('loading...');
                $.ajax({
                    url: reactThis.props.config.searchUrl,
                    headers: {
                        "Accept": "application/json;odata=verbose",
                        "Content-Type": "application/json;odata=verbose",
                    },
                    type: "POST",
                    dataType:'json',
                    data: JSON.stringify(filterObj),
                    success:function(data){
                        var tempData =[];
                        if(!clearData){
                            tempData = reactThis.state.businessArticles;
                        }
                        else{
                            reactThis.state.articlePageCount = 2;
                        }
                        tempData.push.apply(tempData,data.SearchArticlesResult);
                        reactThis.setState(
                            {businessArticles:tempData}
                        );
                        waitDialog.close(SP.UI.DialogResult.OK);
                    },
                    error:function(er){
                        console.log(er);
                        waitDialog.close(SP.UI.DialogResult.OK);
                    }
                });
        })
    }

    loadData(clearData){
        let reactThis = this;
        let tempConfig = this.props.config;
        tempConfig.order.Name = global.articleType;
         let dataConfig={
            condition: tempConfig.condition,
            order: JSON.stringify(tempConfig.order),
            pageNo:clearData?1:this.state.articlePageCount,
            pageSize:clearData?8:4
        }

        $.ajax({
            url: this.props.config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            type: "POST",
            dataType:'json',
            data: JSON.stringify(dataConfig),
            success:function(data){
                var tempData =[];
                if(!clearData){
                    tempData = reactThis.state.businessArticles;
                }
                tempData.push.apply(tempData,data.RetreiveArticlesResult);
                reactThis.setState(
                    {businessArticles:tempData}
                )
            },
            error:function(er){
                console.log(er);
            }
        });
    }

    enterSearch(e) {
        if (!e) {
            e = window.event;
        }
        if ((e.keyCode || e.which) == 13) {
            this.searchArticles();
        }
    }

    render(){
        let children = React.Children.map(this.props.children, (item, i) => {
            return React.cloneElement(item, {
                data: this.state.businessArticles,
                articlePageCount:this.state.articlePageCount,
                category:this.props.config.categoryType
            });
        });

        global.articleType = "Created";
        global.searchTitle = "";

        return (<div>
                    <div className="acs-searchpanel">
                        <div  ref="latest" className="acs-searchpanel-tabbtn acs-searchpanel-tabselect" onClick={this.tabTitleSearch.bind(this,'Latest')}>
                            <span>Latest</span>
                            <div></div>
                        </div>
                        <div ref="popular" className="acs-searchpanel-tabbtn" onClick={this.tabTitleSearch.bind(this,'Most Popular')}>
                            <span>Most Popular</span>
                            <div></div>
                        </div>
                        <div ref="searchInput" className="acs-searchpanel-div">
                            <input type="text" ref="searchInfo" onKeyDown={this.enterSearch.bind(this,event)} placeholder="Search for articles"/>
                            <span id="searchinput" className="acs-searchicon" onClick={this.searchArticles.bind(this)}  ></span>
                            <span id="clearsearch" className="acs-clearsearchicon" onClick={this.clearSearchArticles.bind(this)}>X</span>
                        </div>
                        <div className="acs-searchpanel-ctrlbtn" onClick={this.showMobileSearch.bind(this)}>
                            <span id="mobile-searchinput" className="acs-searchicon"></span>
                        </div>
                    </div>
                    {children}
                    <div className="acs-articles-loadmore" onClick={this.loadMore.bind(this)}>Load More</div>
                </div>);
    }
}

