import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const User=({id, name, username, email})=>{
    return (
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{username}</Card.Subtitle>
            <Card.Text>
                email: {email}
            </Card.Text>
            <div className='btn-group'>
                <Link to={`/posts/${id}`}><button className="btn btn-primary">Posts</button></Link>
                <Link to={`/albums/${id}`}><button className="btn btn-danger">Albums</button></Link>
            </div>
        </Card.Body>
    )
}
export default User;