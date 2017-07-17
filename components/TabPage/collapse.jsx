export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           isOpen: false,
           contentHeight: 0,
        }
    }

    handleClick(){
        var divId = this.props.id;
        var height = this.refs[divId].scrollHeight;
        if(this.state.isOpen){
            height = 0;
        }        
        this.setState({isOpen: !this.state.isOpen, contentHeight: height});
    }

    render() {
        let {title,description,items,id} = this.props;
        let height = this.state.contentHeight + 'px';
        let content =<div className="acs-tablebulk-mutilist">
                        {items.map((item)=>{
                            return React.cloneElement(this.props.children, {
                                itemData:item
                            });
                        })}
                    </div>;

        return (
          <div className="acs-collapse-tab">
            <div className="acs-collapse-tab-head">
               <div>    
                    <div className={this.state.isOpen?"acs-collapse-icon in":"acs-collapse-icon"} onClick={this.handleClick.bind(this)} ></div>
                    <div className="acs-collapse-title" onClick={this.handleClick.bind(this)}>{title}</div>
               </div>
               <div className="acs-collapse-description"> 
                    {description}
               </div>
            </div>
            <div className="acs-collapse-content" ref={id} style={{height: height}}>
                {content}
            </div>
          </div>
        )
    }
}