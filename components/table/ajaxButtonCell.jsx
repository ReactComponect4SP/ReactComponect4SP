export default class AjaxButtonCell extends React.Component {
    constructor(props) {
        super(props);
    }

    buttonAction(){
        this.props.tableOperation(this.props.itemData.Url,this.props.itemData.Parameter);
    }


    render() {
        let {itemData} = this.props;
        return (
          <button type="button" className="acs-turningframe-operationbtn" id={"ajaxButton" + this.props.index} onClick={this.buttonAction.bind(this)}>
                {this.props.itemData.Name}
          </button>
        )
    }
}
