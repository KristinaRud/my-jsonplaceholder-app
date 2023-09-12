import Card from "react-bootstrap/Card";
import User from "./components/User/User";
import { useEffect, useState } from "react";
import { sendRequest } from "../../utils/sendRequest";
import { API_URL } from "../../configs/API";
import Row from "react-bootstrap/Row";
import Filters from "../../components/Filters/Filters";
import useDebounce from "../../hooks/useDebounce";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortType, setSorted] = useState("asc");
  const debounceSearchValue = useDebounce(searchValue, 1000);

  useEffect(() => {
    sendRequest(`${API_URL}/users`).then((results) => {
      setUsers([...results]);
    });
  }, []);

  useEffect(() => {
    const search =
      debounceSearchValue !== "" ? `?username=${debounceSearchValue}` : "";
    sendRequest(`${API_URL}/users${search}`).then((results) => {
      setUsers([...results]);
    });
  }, [debounceSearchValue]);
  
  const sorted = users.sort((a, b) => {
    const isReversed = sortType === "asc" ? 1 : -1;
    return isReversed * a.username.localeCompare(b.username);
  });

  const onSort = () => {
    const sortOrder = sortType === "asc" ? "desc" : "asc";
    setSorted(sortOrder);
  };

  const userList = sorted?.map(({ id, name, username, email }) => (
    <Card key={id} style={{ width: "18rem" }} className="m-3">
      <User id={id} name={name} username={username} email={email} />
    </Card>
  ));

  return (
    <>
    <Filters searchValue={searchValue} setSearchValue={setSearchValue} onSort={onSort}/>
      {userList.length === 0 ? (
        <h1>Not found</h1>
      ) : (
        <>
          <Row>{userList}</Row>
        </>
      )}
    </>
  );
};
export default Users;
