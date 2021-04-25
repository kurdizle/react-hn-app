import { Col, Container, Row, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ShowList(props) {
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup variant="flush">
            {props.item.map((v, i) => {
              return (
                <ListGroup.Item key={i}>
                  <a href={v.url} target="_blank">
                    {v.title}
                  </a>
                  <div className="item-info">
                    <span>by</span>
                    <Link to={'user/' + v.user}>{v.user}</Link>
                    <span>|</span>
                    <span>{v.time_ago}</span>
                    <span>|</span>
                    <span>{v.comments_count} comments</span>
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ShowList;
