import React, { Component } from "react";
import NewItem from "./NewItem";

export class News extends Component {
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=49481f7367e94488bd8d1bb8a3621319&page=${this.state.currentPage}&pageSize=6`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      currentPage: 1,
      totalArticles: 0,
    };
  }
  onPreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=49481f7367e94488bd8d1bb8a3621319&page=${
      this.state.currentPage - 1
    }&pageSize=6`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      currentPage: this.state.currentPage - 1,
    });
  };
  onNextClick = async () => {
    if (this.state.currentPage + 1 > Math.ceil(this.state.totalArticles / 6)) {

    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=49481f7367e94488bd8d1bb8a3621319&page=${
        this.state.currentPage + 1
      }&pageSize=6`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        currentPage: this.state.currentPage + 1,
      });
    }
  };
  render() {
    return (
      <div className="container">
        <center>
          <h1 style={{color:"white"}}>Top News Headlines</h1>
        </center>
        <br></br>
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
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between py-3">
          <button
            disabled={this.state.currentPage < 2}
            className="btn btn-dark"
            onClick={this.onPreviousClick}
          >
            &larr; Previous
          </button>
          <button className="btn btn-dark" onClick={this.onNextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
