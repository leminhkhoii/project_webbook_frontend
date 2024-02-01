import React, { useEffect, useState } from "react"
import BookModel from "../../../models/BookModel";
import { get2Books } from "../../../api/BookApi";
import CarouselItem from "./CarouselItem";

const Carousel: React.FC = () =>{

  const [listOfBook, setListOfBook] = useState<BookModel[]>([]);
  const [uploading, setUploading] = useState(true);
  const [error, setError] = useState(null);

  // Chỉ gọi 1 lần
  useEffect(() => {
    get2Books().then(
      result => {
        setListOfBook(result.result);
        setUploading(false);
      }
    ).catch(
        error =>{
            setError(error.message);
        } 
    );
  }, []
  )

  // Đang tải dữ liệu
  if(uploading){
    return (
      <div>
        <h1>Uploadinggggg</h1>
      </div>
    );
  }

  if(error){
    return (
      <div>
        <h1>Error: {error}</h1>
      </div>
    );
  }

  return(
    <div>
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <CarouselItem key={0} book={listOfBook[0]}/>
        </div>
    
    <div className="carousel-item " data-bs-interval="10000">
      <CarouselItem key={1} book={listOfBook[1]}/>
    </div>
    </div>
    
    
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}
export default Carousel;