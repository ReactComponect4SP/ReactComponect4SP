import Gallery from './gallery.jsx';

export default class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myData: this.props.myData,
            workingData: this.props.workingData,
            allData: this.props.allData,
            dragId: "",
            sourtype: ""
        }
    }

    addcallback(id){
        this.refreshData("add","remove",id);
    }

    removecallback(id){
        this.refreshData("remove","add",id);
    }

    drop(type, position){
        this.refreshData(this.state.sourtype, type, this.state.dragId, position);
    }

    dragstartcallback(id, type){
        this.setState({ dragId:id, sourtype:type});
    }

    dragendcallback(type){
        
    }
    
    saveHandle(){
        this.props.save(this.state.myData);
    }

    refreshData(sourtype, desttype, id, position){        
        var result = null;
        var removeData = null;
        var addData = null;        
        if(sourtype == "remove"){
            removeData = this.state.myData;
        }else if(sourtype == "add"){
            removeData = this.state.allData;
        }
        if(desttype == "remove"){
            addData = this.state.myData;
        }else if(desttype == "add"){
            addData = this.state.allData;
        }

        for(var i=0; i<removeData.length; i++) {
            if(removeData[i].id == id) {
                result = removeData.splice(i, 1);
                if(sourtype == "remove"){
                    this.setState({ myData : removeData });
                }else{
                    this.setState({ allData : removeData });
                }
                break;
            }
        }

        if(!position){
            addData.push(result[0]);            
        }else{
            addData.splice(position-1,0,result[0]);
        }
        if(desttype == "remove"){
            this.setState({ myData:addData});
        }else{
            this.setState({ allData:addData});
        }
    }

    render() {
        return (<div>
            <Gallery children={this.state.myData} type="remove" addcallback={this.addcallback.bind(this)} removecallback={this.removecallback.bind(this)} 
            drop={this.drop.bind(this)} dragstartcallback={this.dragstartcallback.bind(this)} dragendcallback={this.dragendcallback.bind(this)} title="My Favorite Apps"
            description='Personalise your favourite apps by:</br>- Click "+" sign on selected apps in all apps list below</br>- Click "Save" button to save the changes'/>
            <Gallery children={this.state.workingData} type="display" addcallback={this.addcallback.bind(this)} removecallback={this.removecallback.bind(this)} title="My Working Apps"/>
            <Gallery children={this.state.allData} type="add" addcallback={this.addcallback.bind(this)} removecallback={this.removecallback.bind(this)} 
            drop={this.drop.bind(this)} dragstartcallback={this.dragstartcallback.bind(this)} dragendcallback={this.dragendcallback.bind(this)} title="All Apps"/>
            <div className='acs-app-saveBtn' onClick={this.saveHandle.bind(this)}>Save</div>
        </div>);
    }
}
