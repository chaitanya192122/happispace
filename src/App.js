import logo from './logo.png';

import './App.css';

function App() {
  return (
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse happi-nav" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">about</a>
        <a className="nav-link" href="#">book</a>
        <a className="nav-link " href="#">Gallery</a>
        <a className="nav-link" href="#">contact</a>
        <a className="nav-link" href="#">refund policy</a>
        <a className="nav-link " href="#">location</a>
      </div>
    </div>
  </div>
</nav>
    
  );
}

export default App;
