import React, { Component } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Panel from "../../components/UI/Panel/Panel";
import List from "../../components/List/List"
import nyt from "../../utils/nyt/API";
import API from "../../utils/api/API"
import { Col, Row, Container } from "../../components/Grid";

class Articles extends Component {
  state = {
    labels: [
      {id: "Topic", val:""},
      {id: "Start Year", val:""},
      {id: "End Year", val: ""}
    ],
    results:[],
    show: false,
    error:""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    nyt.getArticles(this.state.labels[0].val, this.state.labels[1].val, this.state.labels[2].val).then(res => {
      this.setState({
        labels: [
          {id: "Topic", val: ""},
          {id: "Start Year", val: ""},
          {id: "End Year", val: ""}
        ],
        results: res.data.response.docs,
        showResults: true
      });
    })
    .catch(err => this.setState({ error: err.message}));
  }

  handleArticleSaved = (event, id) => {
    event.preventDefault();
    const articleIndex = this.state.results.findIndex(result => result._id === id);
    const article = { ...this.state.results[articleIndex]};
    API.saveArticle({
      title: article.headline.main,
      author: article.souce,
      date: article.pub_date,
      URL: article.web_url
    })
    .then(res => alert('Article saved!'))
    .catche(err => console.log(err));
  }

  render() {
    let articlesResults = "Please enter all fields."
    if(this.state.showResults){
      articlesResults = this.state.results.map((article, index) =>{
        return <List key={article._id} headline={article.headline.main} author={article.source} date={article.pub_date} URL={article.web_url} action={this.handleArticleSaved} title="Save" />
      });
    }
    return (
      <Container>
        <Panel title="Articles">
        <Search Form submit={this.handleFormSubmit} changed={this.handleInputChange} labels={this.state.labels} />
        </Panel>
        <Panel title="Top Results">{articlesResults}</Panel>
        </Container>
    );
  }
}

export default Articles
     