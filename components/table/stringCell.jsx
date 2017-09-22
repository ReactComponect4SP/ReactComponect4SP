export default class StringCell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let item = this.props.itemData;
       let titleCell = (typeof item ==="object" && item !==null) ?<a title={item.Title} target={this.props.openTab?"_blank":"_self"} href={item.Href}><span>{item.Title}</span></a>:<span>{item}</span>;
       return <div className="acs-table-stringcell" style={{width:this.props.itemWidth+"%"}}>
       <span>{this.props.itemTitle+": "}</span>{titleCell}
       </div>
    }
}