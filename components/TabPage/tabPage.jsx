export default class TabPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex:0
        }
    }

    activeTabTitle(index){
        return this.state.currentIndex === index?"acs-tabpage-title":"acs-tabpage-title-active";
    }

    activeTabContent(index){
        return this.state.currentIndex === index?"acs-tabpage-content":"acs-tabpage-content-active";
    }


    setCurrentIndex(index){
        this.setState({currentIndex : index});
    }

    render() {
        let {itemListData} = this.props;
        let tabTitle = itemListData.map((item,index)=>{
                    return <div key={'tabT'+index} onClick={this.setCurrentIndex.bind(this,index)} className={this.activeTabContent.bind(this,index)}>
                                {item.Title}
                            </div>
                });

        let tabContent = itemListData.map((item,index)=>{
            return <div id={item.Id} key={'tabC'+index} className={this.activeTabContent.bind(this,index)}></div>
        })

        return (
          <div>
            <div>
                {tabTitle}
            </div>
            <div>
                {tabContent}
            </div>
          </div>
        )
    }
}

