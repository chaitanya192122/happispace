import img1 from '../images/gallery/Theatre9.jpg.jpeg'
import img2 from '../images/gallery/Theatre10.jpg.jpeg'
import img3 from '../images/gallery/Theatre8.jpg.jpeg'
import img4 from '../images/gallery/Theatre7.jpg.jpeg'
import img5 from '../images/gallery/Theatre6.webp'
import img6 from '../images/gallery/Theatre4.jpeg'

function Gallery(){
    return(
        <section className='gallery p-5'>
            <div>
                <h1>Gallery</h1>
            </div>
            <div class="card-group">
  <div class="card m-3">
    <img src={img1} class="card-img-top" alt="..."/>
  </div>
  <div class="card m-3">
    <img src={img2} class="card-img-top" alt="..."/>
  </div>
  <div class="card m-3">
    <img src={img3} class="card-img-top" alt="..."/>
  </div>
</div>
<div class="card-group">
  <div class="card m-3">
    <img src={img4} class="card-img-top" alt="..."/>
  </div>
  <div class="card m-3">
    <img src={img5} class="card-img-top" alt="..."/>
  </div>
  <div class="card m-3">
    <img src={img6} class="card-img-top" alt="..."/>
  </div>
  </div>
 

        </section>
    );
}
export default Gallery;