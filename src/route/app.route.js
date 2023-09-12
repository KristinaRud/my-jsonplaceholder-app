import { Routes, Route } from "react-router-dom";
import Users from "../pages/Users/Users";
import Posts from "../pages/Posts/Posts";
import Albums from "../pages/Albums/Albums";
import NotPage
 from "../pages/NotPage/NotPage";
const AppRoute=()=>{
    return (
      <Routes>
        <Route path={'/'} element={<Users/>} />
        <Route path="/posts/:userId" element={<Posts/>} />
        <Route path={'/albums/:userId'} element={<Albums />} />
        <Route path={'*'} element={<NotPage />} />
      </Routes>
    )
}
export default AppRoute;