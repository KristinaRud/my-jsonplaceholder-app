import { useEffect } from "react";
import AppRoute from "./route/app.route";

const App = () => {

  useEffect(() => {
    
  }, []);

  return (
    <div className="page__wrapper">
      {/* <Header /> */}
      <main className="main">
        <div className="container">
          <AppRoute/>
        </div>
      </main>
      {/* <Footer /> */}
      <div className="container">
        <button className="btn btn-primary">Click me</button>
      </div>
    </div>
  );
};

export default App;