import { useParams } from "react-router-dom";

const Posts=()=>{
    const params = useParams();
    return <p>Posts {params.userId}</p>;
}
export default Posts;