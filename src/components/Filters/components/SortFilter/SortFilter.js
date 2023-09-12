import { Button } from "react-bootstrap";

const SortFilter = ({onSort}) => {
  

  return (
    <>
      <Button className="me-1" onClick={() => onSort("asc")} variant="outline-primary">
        Asc
      </Button>
      <Button className="me-1" onClick={() => onSort("desc")} variant="outline-success">
        Desc
      </Button>
    </>
  );
};

export default SortFilter;
