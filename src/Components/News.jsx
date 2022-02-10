import React, { useState, useEffect } from "react";
import NewItem from "./NewItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);
  const [totalArticles, settotalArticles] = useState(0);
  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${currentPage}&pageSize=${props.pagesize}`;
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(60);
    let parsedData = await data.json();
    props.setProgress(80);
    setArticles(parsedData.articles);
    settotalArticles(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    updateNews();
    //eslint-disable-next-line
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // onNextClick = async () => {
  //   setState({
  //     currentPage: currentPage + 1,
  //   });
  //   updateNews();
  // };
  const fetchMoreData = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${
      process.env.REACT_APP_NEWS_API
    }&page=${currentPage + 1}&pageSize=${props.pagesize}`;
    setcurrentPage(currentPage + 1);
    props.setProgress(40);
    let data = await fetch(url);
    props.setProgress(60);
    let parsedData = await data.json();
    props.setProgress(80);
    setArticles(articles.concat(parsedData.articles));
    settotalArticles(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  return (
    <>
      <center>
        <h1 style={{ color: "white", paddingTop:"90px" }}>
          Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
      </center>
      <br></br>
      {loading && <Spinner />}
      {
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalArticles}
          loader={<Spinner></Spinner>}
        >
          <div className="container">
            <div className="row">
              {articles.map((article) => {
                return (
                  <div className="col-md-4 my-3" key={article.url}>
                    <NewItem
                      title={article.title ? article.title : " "}
                      description={
                        article.description ? article.description : " "
                      }
                      imgUrl={article.urlToImage}
                      newsUrl={article.url}
                      date={article.publishedAt}
                      author={article.author}
                      source={article.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      }
    </>
  );
}
News.propTypes = {
  pagesize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};
News.defaultProps = {
  pagesize: 5,
  country: "in",
  category: "general",
};
