import { Col, Container, Row, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AskList(props) {
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup variant="flush">
            {props.item.map((v, i) => {
              return (
                <ListGroup.Item key={i}>
                  <Link to={'ask/' + v.id}>{v.title}</Link>
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

export default AskList;
