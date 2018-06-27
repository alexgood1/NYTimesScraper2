import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
// import API from "../../utils/API";

class Detail extends Component {
  state = {
    article: {}
  };
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/articles/:id
  // The book id for this route can be accessed using this.props.match.params.id

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Saved Articles
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        {/* <Row>
        <Col size="md-12">
              {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                <ListItem key={article.}>
                    <Link to={"/articles/" + article._id}>
                      <strong>
                        {article.title} by {article.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
              </Col>
          </Row> */}
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to All Articles</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
