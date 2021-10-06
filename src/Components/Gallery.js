import data from "./data";
import "../styles/Gallery.css";


function Gallery (props) {
    return (
    

    
      
    <div className="gallery">
         <img 
         src={props.cover}
      // src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
      alt="apartment view"
      />
    </div>
    )
}

export default Gallery;