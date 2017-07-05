import TitleDescriptionPanel from '../common/titleDescriptionPanel.jsx'
export default class SliderPicsWithBackground extends React.Component {
    constructor(props) {
        super(props);
    }

    redirect(url){
        window.open(url);
    }

    render() {
        let {items, left, speed, nowLocal, pagecount } = this.props;
        let count = items.length;
        let width = 100 / count + '%';

        let itemNodes = this.props.items.map((item, idx) => {
            let panel = <div></div>
            if (item.title || item.description) {
                panel = <TitleDescriptionPanel title={item.title} description={item.description} itemhref={item.itemhref} />
            }
            return <li key={'pic' + idx} className="acs-slider-pic" style={{ width: width }}>
                <div href={item.itemhref} onClick={this.redirect.bind(this, item.itemhref)}>
                    <div className="acs-slider-pic-front">
                        <img src={item.bgsrc} />                        
                        {panel}
                    </div>
                    <div className="acs-slider-pic-back">
                        <img src={item.src} />
                    </div>
                    <div className="acs-slider-pic-placeholder">
                    </div>
                </div>
                {panel}
            </li>;
        });

        return (
            <ul style={{
                left: -100 * nowLocal / pagecount + "%",
                transitionDuration: speed + "ms",
                width: count * 100 / pagecount + "%"
            }}>
                {itemNodes}
            </ul>
        );
    }
}