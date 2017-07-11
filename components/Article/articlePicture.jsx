export default class ArticlePicture extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { picturePath, hasTitle } = this.props;

        return (
                <div className={hasTitle?"acs-articleframe-picturesingle":"acs-articleframe-picture"}>
                    <img src={picturePath}></img>
                </div>
        );
    }
}