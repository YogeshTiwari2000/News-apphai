import React, {useEffect,useState} from 'react'
import Newsitems from './Newsitems'
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'//impt

// import Spinner from './Spinner';
const News =(props)=>{
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState([true])
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)

    const updateNews=async()=>{
  
      setPage(page+1)

       let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4000751552e1466bab4776dc366d6cd5&page=${page}&pageSize={props.pageSize}`;
      //  this.setState({loading:true});
      setLoading(true)     
       let data=await fetch(url);
       let parsed=await data.json();
       setArticles(parsed.articles)//
       setTotalResults(parsed.totalResults)//
       setLoading(false)
      
    // props.setProgress(100);
}

    const fetchMoreData = async() => {
      
      // updateNews()

       let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4000751552e1466bab4776dc366d6cd5&page=${page+1}&pageSize=${props.pageSize}`;

       setPage(page+1)
       let data=await fetch(url);
       let parsed=await data.json();
       setArticles(articles.concat(parsed.articles))
       setTotalResults(parsed.totalResults)
    };

    useEffect(()=>{
      updateNews();
    },[])
  
    let{heading1}=props;
    heading1="India's Top Headlines";
    return (
      <>
      <div className="container  my-3">
        <h2>{heading1}</h2>
        {/* {this.state.loading&&<Spinner/>} */}
       {/* itrating over article object */}

       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<h4>Loading...</h4>}
        >
          
        <div className="row">
        {articles.map((element)=>{
            return <div className="col-md-4" key={element.newsUrl}>
            <Newsitems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,50):""} imgUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} source={element.source.name}/>
            </div>
        })}
            {/* col-md-3 means in medium devices take 3 columes as in bootstrap there are 12 columes grid */}
        </div>
        </InfiniteScroll>
      </div>
     
      </>
    )
  }
News.defaultProps={
  country:"in",
  pageSize:10,
  category:'general',
}
News.propTypes={
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}

export default News
