import ArticleTitle from './articleTitle.jsx';
import ArticlePicture from './articlePicture.jsx';
import ArticleHeadline from './articleHeadline.jsx';
import ArticleIntro from './articleIntro.jsx';
import ArticleTime from './articleTime.jsx';
import ArticleLike from './articleLike.jsx';


export default class SingleArticle extends React.Component{
    constructor(props){
        super(props);
    }

    openItem(url){
        window.open(url);
    }

    render(){
        let {hasTitle,hasIntro,hasTime,hasLike,dataItem,itemWidth,color} = this.props;
        let intro = hasIntro && dataItem.intro != null ? (<ArticleIntro intro={dataItem.Intro}></ArticleIntro>) : null;
        let time = hasTime ? (<ArticleTime time={dataItem.Time}></ArticleTime>) : null;
        let like = hasLike ? (<ArticleLike like={dataItem.Like}></ArticleLike>) : null;
        return (
            <ArticleTitle title={dataItem.Title} width={itemWidth} hasTitle={hasTitle} color={dataItem.TitleColor} partUrl={dataItem.colleUrl} ArticleTitleIconUrl={dataItem.ArticleTitleIconUrl}> 
                <div onClick={this.openItem.bind(this,dataItem.ItemUrl)} style={{heigh:"auto"}}>
                    <ArticlePicture picturePath={dataItem.PicturePath} hasTitle={hasTitle}></ArticlePicture>
                    <div className="asc-article-content">
                        <ArticleHeadline headline={dataItem.Headline}></ArticleHeadline>
                        {intro}
                        {time}
                        {like}
                    </div>
                </div>
            </ArticleTitle>
        );
    }
}
