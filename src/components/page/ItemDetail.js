import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { fetchItemDetail } from '../../api';

function ItemDetail() {
  const { id } = useParams();
  const [askItem, setAskItem] = useState({});

  useEffect(() => {
    fetchItemDetail(id)
      .then((response) => {
        setAskItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h3>{askItem.title}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="item-info">
            <span>by</span>
            <Link to={'/user/' + askItem.user}>{askItem.user}</Link>
            <span>|</span>
            <span>{askItem.time_ago}</span>
            <span>|</span>
            <span>{askItem.comments_count} comments</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <article
            dangerouslySetInnerHTML={{ __html: askItem.content }}
          ></article>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail;
