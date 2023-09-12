import { Link } from "react-router-dom";
import { Button, Card,  Col} from "react-bootstrap";

const User = ({ id, name, username, email }) => {
  return (
    <Col>
      <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{username}</Card.Subtitle>
            <Card.Text>
                email: {email}
            </Card.Text>
            <div className='btn-group'>
                <Link to={`/posts/${id}`}><Button variant="primary">Posts</Button></Link>
                <Link to={`/albums/${id}`}><Button variant="danger">Albums</Button></Link>
            </div>
        </Card.Body>
    </Col>
  );
};
export default User;
