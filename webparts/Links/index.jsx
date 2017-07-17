import { render } from 'react-dom';
import $ from 'jquery';
import SliderLinks from '../../components/slider/sliderLinks.jsx';
import WebPartFrame from '../../components/Common/webPartFrame.jsx';
import faker from 'faker';

function linksRender(config) {
    let data = [{ 'itemhref': 'http://www.baidu.com', 'title': 'LMS', 'src': faker.image.avatar() },
    { 'itemhref': 'http://www.baidu.com', 'title': 'PRM', 'src': faker.image.avatar()},
    { 'itemhref': 'http://www.baidu.com', 'title': 'IRMS', 'src': faker.image.avatar() },
    { 'itemhref': 'http://www.baidu.com', 'title': 'eForms', 'src': faker.image.avatar() },
    { 'itemhref': 'http://www.baidu.com', 'title': 'I-innovate', 'src': faker.image.avatar() },
    { 'itemhref': 'http://www.baidu.com', 'title': 'Webmail', 'src': faker.image.avatar() },
    { 'itemhref': 'http://www.baidu.com', 'title': 'App', 'src': faker.image.avatar() },
    { 'itemhref': 'http://www.baidu.com', 'title': 'App', 'src': faker.image.avatar() },
    { 'itemhref': 'http://www.baidu.com', 'title': 'App', 'src': faker.image.avatar() },
    { 'itemhref': 'http://www.baidu.com', 'title': 'LMS', 'src': faker.image.avatar() },
    { 'itemhref': 'http://www.baidu.com', 'title': 'PRM', 'src': faker.image.avatar() },
    { 'itemhref': 'http://www.baidu.com', 'title': 'IRMS', 'src': faker.image.avatar() }];
    let param = { url: '', listurl: '', webparttitle: 'birthday', moreurl: '', id: 'birthdays' };

    function renderUI(data, param) {
        var itemNodes = []; 
        let maxCount = data.length > 9 ? 9 : data.length;        
        itemNodes.push(data.slice(0, maxCount));
        
        if (document.getElementById(param.id)) {
            render(
                <WebPartFrame
                    title={param.webparttitle}
                    hasMore={true}
                    link={param.moreurl}
                    hasTopLine={false}>
                    <SliderLinks items={itemNodes} />
                </WebPartFrame>,
                document.getElementById(param.id)
            );;
        }
    }

    function loadData(param) {
        var data = new Array();
        for (var i = 0, l = param.data.length; i < l; i++) {
            data.push({
                'itemhref': param.data[i].PersonSite,
                'title': param.data[i].DisplayName,
                'src': param.data[i].PictureUrl,
				'birth': param.data[i].BirthForDisplay
            })
        }  
        renderUI(data, param);        
    }

    if (config && !config.debug) {     
        param.listurl = config.listurl ? config.listurl : '';
        param.webparttitle = config.webparttitle ? config.webparttitle : 'birthdays';
        param.moreurl = config.moreurl ? config.moreurl : '';
        param.id = config.id ? config.id : 'acclinks';
        param.data = config.data? config.data: [];
        loadData(param);
    }
    else {
        renderUI(data, param);
    }
}

global.linksRender = linksRender;