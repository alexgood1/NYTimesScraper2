import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
 }

  // state = {
  //   articles: [],
  //   title: "",
  //   author: ""
  // };

  componentDidMount() {

    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=8a157db08bd34988b2104282b0c41690')
    .then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
      let articles = data.results.map((article) => {
        console.log(articles);
        return(
          <div key={article.updated_date}>
            <h3>{article.title}</h3>
            <h4>{article.byline}</h4>
          </div>
        )
      })
      console.log(articles);
      this.setState({articles: articles});
      console.log("state", this.state.articles);
    })
    // this.loadArticles();
  }

  // loadArticles = () => {
  //   API.getArticles()
  //     .then(res => this.setState({ articles: res.data, title: "", author: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteArticle = id => {
  //   API.deleteArticle(id)
  //     .then(res => this.loadArticles())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveArticle({
  //       title: this.state.title,
  //       author: this.state.author
  //     })
  //       .then(res => this.loadArticles())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div>
           {/* <Row>
          /* <Col size="md-6"> */
            /* <Jumbotron>
              <h1>Articles</h1>
            </Jumbotron> */
            /* <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Article
              </FormBtn>
            </form> */
          /* </Col> */
          /* <Col size="md-6 sm-12"> */}
            <Jumbotron>
              <h1>Articles List</h1>
            </Jumbotron>

            <div className="container2">
            <div className="container1">
            {this.state.articles}
            </div>
            </div>

            {/* {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  // <ListItem key={article._id}>
                    <Link to={"/articles/" + article._id}>
                      <strong>
                        {article.title} by {article.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                  // </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}

          {/* </Col>
        </Row> */}
    </div> 
    );
  }
}

export default Articles;
