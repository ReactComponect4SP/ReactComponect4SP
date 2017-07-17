export default class TabPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex:0
        }
    }

    activeTabTitle(index){
        return this.state.currentIndex === index?"acs-tabpage-title-active":"acs-tabpage-title";
    }

    activeTabContent(index){
        return this.state.currentIndex === index?"acs-tabpage-content-active":"acs-tabpage-content";
    }


    setCurrentIndex(index){
        this.setState({currentIndex : index});
        this.props.func(this.props.itemListData[index].Id);
    }

    render() {
        let {itemListData} = this.props;
        let tabTitle = itemListData.map((item,index)=>{
                    let activeTitleClass = this.activeTabTitle(index);
                    return <div key={'tabT'+index} onClick={this.setCurrentIndex.bind(this,index)} className={activeTitleClass}>
                                <div className="acs-tabpage-title-icon"></div>
                                <div className="acs-tabpage-title-content">{item.Title}</div>
                            </div>
        });

        let tabContent = itemListData.map((item,index)=>{
            let activeContentClass = this.activeTabContent(index);
            return <div id={item.Id} key={'tabC'+index} className={activeContentClass}></div>
        })

        return (
          <div>
            <div className="acs-section-panel">
                {tabTitle}
            </div>
            <div>
                
            </div>
          </div>
        )
    }
}

