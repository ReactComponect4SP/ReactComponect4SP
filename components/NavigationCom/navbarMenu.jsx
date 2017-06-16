import MenuItem from './navbarItem.jsx';
import MenuItemTile from './navbarItemTile.jsx';

export default class navbarMenuList extends React.Component{
    constructor(props){
        super(props);
    }
    
    render() {
        let {data,menuStyle} = this.props;
        return (
                <div className="acs-navbar">
                    {data.map((el ,index)=>{
                        switch(menuStyle){
                            case 0:{
                                return (<MenuItem key={index} menuData={el} hasGrandChild={el.hasGrandChild}/>)
                            }
                            case 1:{
                                return (<MenuItemTile key={index} menuData={el} hasGrandChild={el.hasGrandChild}/>)
                            }
                        }
                    })}
                </div>
            )
    }

}
