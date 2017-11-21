

export default class ButtonCell extends React.Component {
    constructor(props) {
        super(props);
    }

    buttonAction(){
        if(confirm("Would you want to cancel this booked meeting?")){
             $.ajax({
                type: "POST",
                url: this.props.itemData.Action,
                headers: {
                    "Accept": "application/json;odata=verbose",
                    "Content-Type": "application/json;odata=verbose",
                },
                dataType: "json",
                cache: false,
                async: true,
                success: function () {
                    window.location.reload();
                },
                error: function (error) {
                    window.location.reload();
                    console.log(error);
                }
            });
        }
    }


    render() {
        return (
            <button type="button" className="acs-turningframe-operationbtn" onClick={this.buttonAction.bind(this)}>
                {this.props.itemData.Name}
            </button>
        )
    }
}