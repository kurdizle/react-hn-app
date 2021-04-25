import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchUserDetail } from '../../api';

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUserDetail(id)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <div>user: {user.id}</div>
          <div>created: {user.created}</div>
          <div>karma: {user.karma}</div>
          <div>
            <span>about:</span>
            <div dangerouslySetInnerHTML={{ __html: user.about }}></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default UserDetail;
