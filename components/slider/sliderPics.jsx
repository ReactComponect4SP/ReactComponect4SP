import TitleDescriptionPanel from '../common/titleDescriptionPanel.jsx'
export default class SliderPics extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { items, left, speed, nowLocal, jump } = this.props;
        let count = items.length + 2;
        //let width = 100 / count + '%';
        let start = (<li key={'pic-start'} className="acs-slider-pic" style={{ width: '730px' }}>
            <a href={this.props.items[this.props.items.length - 1].itemhref}>
                <img src={this.props.items[this.props.items.length - 1].src} />
            </a>
        </li>);

        let end = (<li key={'pic-end'} className="acs-slider-pic" style={{ width: '730px' }}>
            <a href={this.props.items[0].itemhref}>
                <img src={this.props.items[0].src} />
            </a>
        </li>);


        let itemNodes = this.props.items.map((item, idx) => {
            if (idx == nowLocal) {
                return <li key={'pic' + idx} className="acs-slider-pic" style={{ width: '730px' }}>
                    <a href={item.itemhref}>
                        <img src={item.src} />
                    </a>
                </li>;
            }
            else {
                return <li key={'pic' + idx} className="acs-slider-pic" style={{ width: '730px' }}>
                    <a href={item.itemhref}>
                        <img src={item.src} />
                    </a>
                </li>;
            }
        });

        return (
            <ul style={{
                left: -100 * nowLocal + "%",
                transitionDuration: speed + "ms",
                width: count * 100 + "%"
            }}>
                {start}
                {itemNodes}
                {end}
            </ul>
        );
    }
}