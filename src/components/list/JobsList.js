import { Col, Container, Row, ListGroup } from 'react-bootstrap';

function JobsList(props) {
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
                    <a href={v.url} target="_blank">
                      {v.domain}
                    </a>
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

export default JobsList;
