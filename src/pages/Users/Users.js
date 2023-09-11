import Card from 'react-bootstrap/Card';
import User from './components/User/User';
import { useEffect, useState } from 'react';
import {sendRequest} from '../../utils/sendRequest';
import { API_URL } from "../../configs/API";

const Users=()=>{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        sendRequest(`${API_URL}/users`).then((results) => {
            setUsers([...results]);
        });
    }, []);

    const userList = users?.map(({ id, name, username, email}) => (
        <Card style={{ width: '18rem' }}>
            <User key={id} id={id} name={name} username={username} email={email} />
        </Card>
        
    ));

    return (        
        <>
            {userList}
        </>
    )
}
export default Users;