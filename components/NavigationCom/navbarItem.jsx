import NavTitleBtn from './navbarTitleBtn.jsx';

export default class NavbarItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            ulWidth:'402px'
        };
    }

    menushow(isSecond) {
        if (!isSecond) {
            this.setState({
                open: true
            });
        }
        else {
            this.setState({
                ulWidth:'800px'
            });
        }
    }

    menuhidden(isSecond) {
        if (!isSecond) {
            this.setState({
                open: false,
                ulWidth:'402px'
            });
        }
        else {
            this.setState({
                ulWidth:'402px'
            });
        }
    }



    render() {
        let minWidth = Math.ceil(this.props.menuData.Items.length / 9) * 400 + 'px';
        let maxCount = 9;
        let itemNodes = [];
        for (let i = 0, len = this.props.menuData.Items.length; i < len; i += maxCount) {
            itemNodes.push(this.props.menuData.Items.slice(i, i + maxCount));
        }


        let secondMenuC = (<ul onMouseOver={this.menushow.bind(this, false)} onMouseOut={this.menuhidden.bind(this, false)} className="acs-navbaritem-second acs-navbaritem-secondO" style={{ display: this.state.open ? "flex" : "none", top: this.state.open ? "65px" : "60px", "flexDirection": "row", minWidth: minWidth }}>
            {itemNodes.map((item, index) => {
                return (<div style={{ "flexDirection": "column" }}>
                    {item.map((els, index) => {
                        return (<a href={els.ItemHref === ''?'javascript:void(0);':els.ItemHref} className="acs-itemlink" style={{cursor:els.ItemHref === ''?'default':'pointer'}}  key={index}><span className="acs-itemlink-icon"></span>{els.Title}</a>)
                    })}
                </div>)
            })}
        </ul>);


        let secondMenu = (<ul onMouseOver={this.menushow.bind(this, false)} onMouseOut={this.menuhidden.bind(this, false)} className="acs-navbaritem-second"
         style={{ display: this.state.open ? "block" : "none", top: this.state.open ? "65px" : "60px",width:this.state.ulWidth}}>
            {this.props.menuData.Items.map((els, index) => {
                if (typeof els.Items === 'object') {
                    if (els.Items.length === 0) {
                        return (<a href={els.ItemHref === ''?'javascript:void(0);':els.ItemHref}  className="acs-secondnav-item" style={{cursor:els.ItemHref === ''?'default':'pointer'}} key={index} >{els.Title}</a>)
                    }
                    else {
                        return (<SecondItem key={index} menuData={els} menushow={this.menushow.bind(this,true)} menuhidden={this.menuhidden.bind(this,true)}/>)
                    }
                }
                else {
                    return (<a href={els.ItemHref===''?'javascript:void(0);':els.ItemHref} className="acs-itemlink" style={{ float: (index > 7) ? "right" : "none" ,cursor:els.ItemHref === ''?'default':'pointer'}} key={index}><span className="acs-itemlink-icon"></span>{els.Title}</a>)
                }
            })}
        </ul>);
        secondMenu = this.props.hasGrandChild ? secondMenu : secondMenuC;
        secondMenu = this.props.menuData.hasChild ? secondMenu : null;

        return (
            <div className="acs-navbar-item" style={{cursor:'default'}} onMouseOver={this.menushow.bind(this, false)} onMouseOut={this.menuhidden.bind(this, false)}>
                <NavTitleBtn classname={"acs-navbaritem-titlebtn"} isSecond={false} name={this.props.menuData.Title} open={this.state.open} hasChild={this.props.menuData.hasChild} ItemHref={this.props.menuData.ItemHref} />
                {secondMenu}
            </div>)
    }
}

class SecondItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sopen: false
        };
    }

    menushow() {
        this.props.menushow();
        this.setState({
                 sopen: true
            });
    }

    menuhidden() {
        this.props.menuhidden();
        this.setState({
                sopen: false
            });
    }


    render() {
        return (
            <div className="acs-secondnav-item" onMouseOver={this.menushow.bind(this)} onMouseOut={this.menuhidden.bind(this)}>
                <NavTitleBtn classname={""} isSecond={true} name={this.props.menuData.Title} open={this.state.sopen} hasChild={true} ItemHref={this.props.menuData.ItemHref} />
                <ul onMouseOver={this.menushow.bind(this)} onMouseOut={this.menuhidden.bind(this)} className="acs-thirdnav-itemlist" style={{ display: this.state.sopen ? "block" : "none", width: "400px" }}>
                    {this.props.menuData.Items.map((el, index) => {
                        return (<a href={el.ItemHref===''?'javascript:void(0);':el.ItemHref} style={{cursor:el.ItemHref === ''?'default':'pointer'}} className="acs-itemlink" key={index}><span className="acs-itemlink-icon"></span>{el.Title}</a>)
                    })}
                </ul>
            </div>
        )
    }
}
