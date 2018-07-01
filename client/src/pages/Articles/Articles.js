import React, { Component } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Panel from "../../components/UI/Panel";
import List from "../../components/List/List"
import nyt from "../../utils/nyt/API";
import API from "../../utils/api/API"
import Container from "../../components/Container/Container";

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

  handleInputChange = ( event, id ) => {
    const labelIndex = this.state.labels.findIndex(label => label.id === id);
    const label = { ...this.state.labels[labelIndex] };
    label.val = event.target.value;
    const labels = [ ...this.state.labels ];
    labels[labelIndex] = label;
    this.setState({ labels: labels });
  }

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
    console.log(article);
    API.saveArticle({
      title: article.headline.main,
      author: article.souce,
      date: article.pub_date,
      URL: article.web_url
    })
    .then(res => alert('Article saved!'))
    .catch(err => console.log(err));
  }

  render() {
    let articlesResults = "Please enter all fields."
    if(this.state.showResults){
      articlesResults = this.state.results.map((article, index) =>{
        return <List key={article._id} articleId={article._id} headline={article.headline.main} author={article.source} date={article.pub_date} URL={article.web_url} action={this.handleArticleSaved} title="Save" />
      });
    }
    return (
      <Container>
        <Panel title="Articles">
        <SearchForm submit={this.handleFormSubmit} changed={this.handleInputChange} labels={this.state.labels} />
        </Panel>
        <Panel title="Top Results">{articlesResults}</Panel>
        </Container>
    );
  }
}

export default Articles
     