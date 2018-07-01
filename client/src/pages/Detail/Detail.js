import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import Panel from "../../components/UI/Panel/Panel";
import List from "../../components/List/List"

class Detail extends Component {
  state = {
    savedArticles: []
  };
  
  componentDidMount(){
    this.getArticlesHandler();
  }

  getArticlesHandler(){
    API.getArticles()
    .then(res => this.setState({savedArticles: res.data}))
    .catch(err => console.log(err));
  }

  deleteArticleHandler = (event, id) => {
    API.deleteArticle(id)
    .then(res => this.getArticlesHandler())
    .catch(err => console.log(err));
  }

  render() {
    let saved = <p> Currently, no saved articles!</p>

    if(this.state.savedArticles.length > 0){
      saved = this.state.savedArticles.map((article, index) => {
        return <List key={article._id} articleId={article._id} headline={article.title} author={article.author} date={article.dateOfArticle} URL={article.URL} action={this.deleteArticleHandler} title="Delete"/>
      });
    }

    return (
      <Container>
        <Panel title="Saved Articles">
        {saved}
        </Panel>
        </Container>
    ) 
  }
}

export default Detail;
