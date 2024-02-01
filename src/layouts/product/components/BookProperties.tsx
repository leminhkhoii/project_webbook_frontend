import React, { useEffect, useState } from "react"
import Book from '../../../models/Book';
import BookModel from '../../../models/BookModel';
import PictureModel from "../../../models/PictureModel";
import { getAllPicturesOfSpecificBook } from "../../../api/PictureApi";

interface BookPropsInterface{
  book: BookModel;
}


const BookProperties: React.FC<BookPropsInterface> = (props)=>{

    const idOfBook: number = props.book.idOfBook;

    const [listOfPicture, setListOfPicture] = useState<PictureModel[]>([]);
    const [uploading, setUploading] = useState(true);
    const [error, setError] = useState(null);

  // Chỉ gọi 1 lần
  useEffect(() => {
    getAllPicturesOfSpecificBook(idOfBook).then(
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


  return(
    <div className="col-md-3 mt-2">
            <div className="card">
                
                    <img
                    src={data}
                    className="card-img-top"
                    alt={props.book.nameOfBook}
                    style={{ height: '200px'}}
                />
                
                
                <div className="card-body">
                    <h5 className="card-title">{props.book.nameOfBook}</h5>
                    <p className="card-text">{props.book.description}</p>
                    <div className="price">
                        <span className="original-price">
                            <del>{props.book.listPrice}</del>
                        </span>
                        <span className="discounted-price">
                            <strong>{props.book.price}</strong>
                        </span>
                    </div>
                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            <a href="#" className="btn btn-secondary btn-block">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger btn-block">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
export default BookProperties;