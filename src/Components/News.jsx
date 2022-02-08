import React, { Component } from "react";
import NewItem from "./NewItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
export class News extends Component {
  static propTypes = {
    pagesize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };
  static defaultProps = {
    pagesize: 5,
    country: "in",
    category: "general",
  };
  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${this.state.currentPage}&pageSize=${this.props.pagesize}`;
    this.props.setProgress(30);
    let data = await fetch(url);
    this.props.setProgress(60);
    let parsedData = await data.json();
    this.props.setProgress(80);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      currentPage: 1,
      totalArticles: 0,
    };
    document.title = `NewsApp-${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }
  // onPreviousClick = async () => {
  //   this.setState({
  //     currentPage: this.state.currentPage - 1,
  //   });
  //   this.updateNews();
  // };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // onNextClick = async () => {
  //   this.setState({
  //     currentPage: this.state.currentPage + 1,
  //   });
  //   this.updateNews();
  // };
  fetchMoreData = async () => {
    this.props.setProgress(10);
    this.setState({ currentPage: this.state.currentPage + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${this.state.currentPage}&pageSize=${this.props.pagesize}`;
    this.props.setProgress(40);
    let data = await fetch(url);
    this.props.setProgress(60);
    let parsedData = await data.json();
    this.props.setProgress(80);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalArticles: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  };
  render() {
    return (
      <>
        <center>
          <h1 style={{ color: "white" }}>
            Top {this.capitalizeFirstLetter(this.props.category)} Headlines
          </h1>
        </center>
        <br></br>
        {
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalArticles}
            loader={<Spinner></Spinner>}
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map((article) => {
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
}

export default News;
