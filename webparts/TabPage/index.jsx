import { render } from 'react-dom';
import ServiceItem from '../../components/table/serviceItem.jsx';
import Collapse from '../../components/TabPage/collapse.jsx';
import TabPage from '../../components/TabPage/tabPage.jsx';

function tabPageRender(config){
    function renderUI(){
         if (document.getElementById(config.divId)) {
            render(
               <TabPage itemListData={config.items} func={config.func}>
                </TabPage>,
                document.getElementById(config.divId)
            );
        }
    }
    renderUI();
}
global.tabPageRender = tabPageRender;


function collapseRender(config){
    function renderUI(){
         if (document.getElementById(config.divId)) {
            render(
                <div>
                    {config.data.map((item,index)=>{
                        return <Collapse title={item.Title} description={item.Description} items={item.Items} id={"acs-collapse" + index}>
                            <ServiceItem></ServiceItem>
                        </Collapse>
                    })}
                </div>,
                document.getElementById(config.divId)
            );
        }
    }
    renderUI();
}

global.collapseRender = collapseRender;