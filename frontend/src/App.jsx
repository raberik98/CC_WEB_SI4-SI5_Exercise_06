import Navbar from "./components/Navbar";
import img from "./assets/404.png"
import "./App.css"
function App() {

  return (
    <div>
      <Navbar/>
      <div className="itemsGoHere">
        <div className="card" style={{ width: "350px" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Name comes here</h5>
            <p className="card-text">Price comes here</p>
          </div>
          <div className="card-body">
            <button className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
