import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { sendRequest } from "../../utils/sendRequest";
import { API_URL } from "../../configs/API";
import {Row, Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const Albums = () => {
  const params = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sendRequest(`${API_URL}/albums?userId=${params.userId}`).then((results) => {
      setPosts([...results]);
    });
  }, [params]);

  const postsList = posts.map(({ id, title }) => (
    <Row key={id} className="m-5">
      <Card>
        <Card.Header>Albums for userID {params.userId}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </Row>
  ));
  return (
    <>
      <div>
        <h1>Albums for userID {params.userId}</h1>
        <Link to={`/users`}>
          <Button variant="success">Go to Users</Button>
        </Link>
      </div>      
      {postsList}
    </>
  );
};
export default Albums;
