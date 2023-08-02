export default function Navbar() {
    
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <h1 className="navbar-brand">Cheap navbar</h1>
        <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <button className="nav-link active">Login</button>
            </li>
            <li className="nav-item">
                <button className="nav-link active">Shop</button>
            </li>
            </ul>
        </div>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
            Search:
        </span>
        <input
            type="text"
            className="form-control"
            placeholder="Type here..."
            aria-label="Type here..."
            aria-describedby="basic-addon1"
        />
        </div>
    </nav>
  )
}