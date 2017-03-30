export default class AccordionFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: this.props.accordionData.isSearch
        }
    }

    handleShow() {
        if (!this.state.active) {
            this.setState({active: true},function () {
              if(this.props.hasInfoPanel)  {
                  this.props.informationEvent(this.props.accordionData, true);
                }
            });
        }
        else {
             this.setState({ active: false },function(){
                if(this.props.hasInfoPanel) {
                    this.props.informationEvent(null, false)
                };
            });
        }
    }

    render() {
        let {accordionData,itemHeight,informationEvent,hasInfoPanel} = this.props;
        let contentHeight =itemHeight==='auto'?itemHeight: accordionData.Items.length * itemHeight +"px";
        let divisionIcon = accordionData.Items.length===0?'acs-accordionitem-nullicon':(this.state.active?"acs-accordionitem-expandicon":"acs-accordionitem-retracticon");
        return (
            <div className="acs-accordion-item">
                <div className={"acs-accordionitem-head" + (this.state.active?" acs-accordionitem-visited":"")} onClick={this.handleShow.bind(this)}>
                    <span className={divisionIcon}></span>
                    <span className="acs-divisionhead-title">{this.props.accordionData.Title}</span>
                </div>
                <div className="acs-accordionitem-content" style={{ height: this.state.active ? contentHeight : "0" }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}