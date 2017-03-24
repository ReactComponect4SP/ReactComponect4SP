import { render } from 'react-dom';
import $ from 'jquery';
import PanelFrame from '../../components/Common/panelFrame.jsx';

function panelRender(config) {
    let panels = [{
        title: 'My Task',
        msgCount: 3,
        iconPosition: '0 -214px',
        url: 'www.baidu.com'
    }, {
        title: 'HR Connect',
        msgCount: 0,
        iconPosition: '-66px -214px',
        url: 'www.baidu.com'
    }];

    function renderUI(panels) {
        let panelsFrame = panels.map((panel, idn) => {
            return (<PanelFrame
                title={panel.title}
                msgCount={panel.msgCount}
                iconPosition={panel.iconPosition}
                url={panel.url}>
            </PanelFrame>)
        });
        render(
            <div>{panelsFrame}</div>,
            document.getElementById('panel')
        );
    }

    if (config && !config.debug) {
        panels[0].msgCount = config.myTaskCount;
        panels[1].msgCount = config.hrConnectCount;
    }
    renderUI(panels);
}

global.panelRender = panelRender;