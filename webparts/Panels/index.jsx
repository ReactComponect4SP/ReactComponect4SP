import { render } from 'react-dom';
import $ from 'jquery';
import PanelFrame from '../../components/Common/panelFrame.jsx';

function panelRender(config) {
    let panels = [{
        title: 'My Tasks',
        msgCount: 3,
        iconPosition: '0 -214px',
        url: '#'
    }, {
        title: 'HR Connect',
        msgCount: 0,
        iconPosition: '-66px -214px',
        url: '#'
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
        panels[0].url = config.myTaskUrl;
        panels[1].msgCount = config.hrConnectCount;
        panels[1].url = config.hrConnectUrl;
    }
    renderUI(panels);
}

global.panelRender = panelRender;