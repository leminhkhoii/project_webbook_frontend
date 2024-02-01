import React, { useEffect, useState } from "react"
import Book from '../../../models/Book';
import BookModel from '../../../models/BookModel';
import PictureModel from "../../../models/PictureModel";
import { getOnePictureOfSpecificBook } from "../../../api/PictureApi";

interface CarouselItemInterface{
  book: BookModel;
}


const CarouselItem: React.FC<CarouselItemInterface> = (props)=>{

    const idOfBook: number = props.book.idOfBook;

    const [listOfPicture, setListOfPicture] = useState<PictureModel[]>([]);
    const [uploading, setUploading] = useState(true);
    const [error, setError] = useState(null);

  // Chỉ gọi 1 lần
  useEffect(() => {
    getOnePictureOfSpecificBook(idOfBook).then(
      pictureData => {
        setListOfPicture(pictureData);
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

  let data: string="";
  if(listOfPicture[0] && listOfPicture[0].data){
    data=listOfPicture[0].data;
  }


  return (
    <div className="row align-items-center">
        <div className="col-5 text center">
        <img src={data} style={{width:'150px'}} className="float-end"/>
        </div>
        <div className="col-7">
        <h5>{props.book.nameOfBook}</h5>
        <p>{props.book.description}</p>
      </div>
    </div>
  );
}
export default CarouselItem;