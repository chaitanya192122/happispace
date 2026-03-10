import theater1 from '../images/gallery/Theatre1.jpg.jpeg';
import theater2 from '../images/gallery/Theatre5.jpg.jpeg';
import theater3 from '../images/gallery/Theatre3.jpg.jpeg';
import theater4 from '../images/gallery/Theatre4.jpeg';


function Celebrate() {
  return (
    <section className="celebrate p-5">
      <div>
        <h1>What Can You Celebrate at Carnival Castle?</h1>
      </div>
      <div id="carouselExampleAutoplayin" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
              <div className="col">
                <div className="card">
                  <img src={theater1} claclassNamess="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">birthday</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={theater1} claclassNamess="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">kids birthday</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={theater1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">anniversay</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
              <div className="col">
                <div className="card">
                  <img src={theater1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">bride to be</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={theater1} claclassNamess="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">marrige proposal</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={theater1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">love proposal</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
              <div className="col">
                <div className="card">
                  <img src={theater1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">groom to be</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={theater1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">mom to be</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={theater1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">others</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplayin" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplayin" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>













    </section>
  );
}
export default Celebrate;