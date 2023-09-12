import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { sendRequest } from "../../utils/sendRequest";
import { API_URL } from "../../configs/API";
import {Row, Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sendRequest(`${API_URL}/posts?userId=${params.userId}`).then((results) => {
      setPosts([...results]);
    });
  }, [params]);

  const postsList = posts.map(({ id, title, body }) => (
    <Row key={id} className="m-5">
      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    </Row>
  ));
  return (
    <>
      <div>
        <h1>Post for userID {params.userId}</h1>
        <Link to={`/users`}>
          <Button variant="success">Go to Users</Button>
        </Link>
      </div>      
      {postsList}
    </>
  );
};
export default Posts;
