module.exports = {
    rootpath: __dirname,
    prod_webpartStyleoutput: 'CSS',
    prod_webpartScriptoutput: 'JS',
    prod_root: '../NTUCIncome/',
    replacepath: '../../Common/Img/',
    webparts: [
        {
            'name': 'Articles',
            'src': ['webparts/Articles/index.jsx'],
            'style': ['webparts/Articles/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Articles/Script',
            'prod_output_css':'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Articles/CSS'
        },
        {
            'name': 'CategoryArticles',
            'src': ['webparts/CategoryArticles/index.jsx'],
            'style': ['webparts/Articles/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/BusinessArticle/Script',
            'prod_output_css':'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/BusinessArticle/CSS'
        },
        {
            'name': 'Calendar',
            'src': ['webparts/Calendar/index.jsx'],
            'style': ['webparts/Calendar/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Calendar/Script',
            'prod_output_css':'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Calendar/CSS'
        },
        {
            'name': 'Links',
            'src': ['webparts/Links/index.jsx'],
            'style': ['webparts/Links/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Birthday/Script',
            'prod_output_css':'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Birthday/CSS'
        },
        {
            'name': 'popularList',
            'src': ['webparts/Lists/popularList.jsx'],
            'style': ['webparts/Lists/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': '',
            'prod_output_css':''
        },
        {
            'name': 'newsListWithPic',
            'src': ['webparts/Lists/newsListWithPic.jsx'],
            'style': ['webparts/Lists/styleNewsListWithPic.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'AvePointSP2013HomePageLayout/AvePointSP2013HomePageLayout/Style Library/js',
            'prod_output_css':'AvePointSP2013HomePageLayout/AvePointSP2013HomePageLayout/Style Library/css'
        },
        {
            'name': 'serviceRequest',
            'src': ['webparts/ServiceRequest/index.jsx'],
            'style': ['webparts/ServiceRequest/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13ServiceRequest/APPSSP13ServiceRequest/Module/Script',
            'prod_output_css':'APPSSP13ServiceRequest/APPSSP13ServiceRequest/Module/CSS'
        },
        {
            'name': 'Panels',
            'src': ['webparts/Panels/index.jsx'],
            'style': ['webparts/Panels/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Panels/Script',
            'prod_output_css':'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Panels/CSS'
        },
        {
            'name': 'Message',
            'src': ['webparts/Message/index.jsx'],
            'style': ['webparts/Message/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Message/Script',
            'prod_output_css':'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Message/CSS'
        },
        {
            'name': 'QuickSearch',
            'src': ['webparts/QuickSearch/index.jsx'],
            'style': ['webparts/QuickSearch/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/QuickSearch/Script',
            'prod_output_css':'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/QuickSearch/CSS'
        },
        {
            'name': 'Slider',
            'src': ['webparts/Slider/index.jsx'],
            'style': ['webparts/Slider/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/NewsSlider/Script',
            'prod_output_css': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/NewsSlider/CSS'
        },
        {
            'name': 'Event',
            'src': ['webparts/Events/index.jsx'],
            'style': ['webparts/Events/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Discussion/Script',
            'prod_output_css': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Discussion/CSS'
        },
        {
            'name': 'MicroSlider',
            'src': ['webparts/MicroSlider/index.jsx'],
            'style': ['webparts/MicroSlider/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/MicroSlider/Script',
            'prod_output_css': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/MicroSlider/CSS'
        },
        {
            'name': 'Navigation',
            'src': ['webparts/Navigation/index.jsx'],
            'style': ['webparts/Navigation/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'AvePointSP2013HomePageSuiteBar/ConfigFile/AvePoint/Script',
            'prod_output_css': 'AvePointSP2013HomePageSuiteBar/ConfigFile/AvePoint/CSS'
        },
        {
            'name': 'App',
            'src': ['webparts/App/index.jsx'],
            'style': ['webparts/App/style.less'],
            'output': 'dist/webparts',
            'prod_output_js':'APPSSP13MeetingRoom/APPSSP13MeetingRoom/Module/JS',
            'prod_output_css':'APPSSP13MeetingRoom/APPSSP13MeetingRoom/Module/CSS'
        },
		{
            'name': 'ItemInformation',
            'src': ['webparts/ServiceRequest/index.jsx'],
            'style': ['webparts/ServiceRequest/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/ItemInformation/Script',
            'prod_output_css': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/ItemInformation/CSS'
        },
        {
            'name': 'TabPage',
            'src': ['webparts/TabPage/index.jsx'],
            'style': ['webparts/TabPage/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13ServiceRequest/APPSSP13ServiceRequest/Module/Script',
            'prod_output_css':'APPSSP13ServiceRequest/APPSSP13ServiceRequest/Module/CSS'
        }

    ],

    layouts: [
        {
            'name': 'ArticleWithRecommendedPageLayout',
            'src': ['layouts/ArticleWithRecommended/script.js'],
            'style': ['layouts/ArticleWithRecommended/style.less'],
            'output': 'dist/layouts',
            'prod_output_css': 'AvePointSP2013HomePageLayout/AvePointSP2013HomePageLayout/Style Library/css',
            'prod_include': true
        }
    ],

    jslibrary: [
        {
            'name': 'react.min',
            'src': 'node_modules/react/dist/react.min.js',
            'output': 'dist/jslibrary',
            'prod_output': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Common/Script',
            'prod_include': true
        },
        {
            'name': 'react-dom.min',
            'src': 'node_modules/react-dom/dist/react-dom.min.js',
            'output': 'dist/jslibrary',
            'prod_output': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Common/Script',
            'prod_include': true
        },
        {
            'name': 'jquery.min',
            'src': 'node_modules/jquery/dist/jquery.min.js',
            'output': 'dist/jslibrary',
            'prod_output': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Common/Script',
            'prod_include': true
        },
    ],

    webglobal: [
        {
            'name': 'campusGlobal',
            'src': ['webparts/Navigation/index.jsx'],
            'style': ['stylelibrary/commonstyle.less'],
            'output': 'dist/webglobal',
            'prod_output': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Common/CSS',
            'prod_include': true
        },
    ],
    concats:{
        js:[{
            'name': 'CategoryArticles',
            'src': ['../NTUCIncome/APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/BusinessArticle/Script/CategoryArticles.js','jslibrary/Commonjs.js'],
            'output': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/BusinessArticle/Script',
        },{
            'name': 'Slider',
            'src': ['../NTUCIncome/APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/NewsSlider/Script/Slider.js','jslibrary/Commonjs.js'],
            'output': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/NewsSlider/Script',
        }],
        css:[{
            'name': 'Navigation',
            'src': ['../NTUCIncome/AvePointSP2013HomePageSuiteBar/ConfigFile/Avepoint/css/Navigation.css','stylelibrary/CommonStyle.less'],
            'output': 'AvePointSP2013HomePageSuiteBar/ConfigFile/Avepoint/css',
        }]
    },
    images: [
        {
            'src': ['stylelibrary/images/*'],
            output: 'dist/webglobal/images',
            prod_output: 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Common/Img',
            'prod_include': true

        },
    ],

    font: {
        'src': ['stylelibrary/fonts/*'],
        'output': 'dist/webglobal/fonts',
         prod_output: 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Common/Fonts',
        'prod_include': false
    }
}

