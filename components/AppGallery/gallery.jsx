import App from './app.jsx';

export default class DisplayGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                        
        }       
    }
    
    dragover(event){
        event.preventDefault();        
    }

    dragenter(event){
        event.preventDefault();        
    }

    drop(event){
        event.preventDefault();
        var x1 = event.clientX;
        var y1 = event.clientY;
        var x2 = $($(event.target).closest('.acs-appgallery')).offset().left;
        var y2 = $($(event.target).closest('.acs-appgallery')).offset().top;
        var x = Math.ceil((x1-x2)/140);        
        var y = Math.ceil((y1-y2-85)/120);
        var position = (y-1)*4 + x;
        this.props.drop(this.props.type, position);
    }

    addcallback(id){
        this.props.addcallback(id);
    }

    removecallback(id){
        this.props.removecallback(id);
    }

    dragstartcallback(id, type){        
        this.props.dragstartcallback(id, type);        
    }

    dragendcallback(type){
        this.props.dragendcallback(type);
    }

    renderItems(){
        var candrag = this.props.type == "display" ? false:true;
        this.props.children.sort(function(a, b){
            if(a.title == b.title){return 0;}
            if(a.title > b.title){return 1;}
            if(a.title < b.title){return -1;}
        })
        var items = this.props.children.map((item)=>{
            return (<App src={item.src} candrag={candrag} title={item.title} href={item.href} type={this.props.type} id={item.id}
            addcallback={this.addcallback.bind(this)} removecallback={this.removecallback.bind(this)}
            dragstartcallback={this.dragstartcallback.bind(this)} dragendcallback={this.dragendcallback.bind(this)}></App>)
        });
        return items;
    }

    render() {
        var items = this.renderItems();
        var className = 'acs-appgallery';
        var descriptionItem = "";
        if(this.props.description){
            descriptionItem = <div className="acs-appgallery-description" dangerouslySetInnerHTML={{__html: this.props.description}}></div>;
        }
        var galleryTitleClassName = this.props.description == null? "acs-appgallery-title":"acs-appgallery-title nobottom";
        if(this.props.type == "display"){    
            className += ' display';          
            return (<div className={className}>
                <div className="acs-appgallery-header">
                    <div className="acs-appgallery-icon"></div>
                    <div className={galleryTitleClassName}>{this.props.title}</div>
                    {descriptionItem}
                </div>
                {items}
            </div>);
        }
        else if(this.props.type == "add"){
            className += ' add';
             return (<div className={className} onDragOver={this.dragover.bind(this)} onDragEnter={this.dragenter.bind(this)} onDrop={this.drop.bind(this)}>
                <div className={galleryTitleClassName}>{this.props.title}</div>
                {descriptionItem}
                {items}
            </div>); 
        }
        else{
            className += ' remove';
            return (<div className={className} onDragOver={this.dragover.bind(this)} onDragEnter={this.dragenter.bind(this)} onDrop={this.drop.bind(this)}>
                <div className={galleryTitleClassName}>{this.props.title}</div>
                {descriptionItem}
                {items}
            </div>);
        }
    }
}