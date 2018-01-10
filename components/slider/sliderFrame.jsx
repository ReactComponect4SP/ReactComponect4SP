import SliderDots from './sliderDots.jsx';
import SliderArrows from './sliderArrows.jsx';

export default class SliderFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowLocal: 1,
            speed: -1,
        };
    }

    turn(n) {
        var _n = this.state.nowLocal + n;
        this.setState({ nowLocal: _n });
    }

    goPlay() {
        if (this.props.autoplay || this.props.autoplay === 'True' || this.props.autoplay === 'true') {
            this.autoPlayFlag = setInterval(() => {
                this.turn(1);
            }, this.props.delay);
        }
    }

    pausePlay() {
        clearInterval(this.autoPlayFlag);
    }

    componentDidMount() {
        this.goPlay();
    }

    componentDidUpdate() {

        if (this.state.nowLocal == this.props.itemCount + 1) {
            alert("jump to 1")
            this.setState({ nowLocal: 1 });
        }
        else if (this.state.nowLocal == 0) {
            alert("jump to end")
            this.setState({ nowLocal: this.props.itemCount});
        }

    }

    render() {
        x
    }
}

SliderFrame.defaultProps = {
    speed: 1000,
    delay: 2000,
    pause: true,
    autoplay: false,
    dots: true,
    arrows: true,
    itemCount: 0,
};
SliderFrame.autoPlayFlag = null;