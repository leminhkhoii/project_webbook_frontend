import React, { useEffect, useState } from "react"
import Book from "../../models/Book";
import BookModel from "../../models/BookModel";
import BookProperties from "./components/BookProperties";
import { getAllBooks, search } from "../../api/BookApi";
import { Pagination } from "../utils/Pagination";

interface ListOfProductProps{
  wordForSearch: string;
}

function ListOfProduct({wordForSearch}: ListOfProductProps){


  const [listOfBook, setListOfBook] = useState<BookModel[]>([]);
  const [uploading, setUploading] = useState(true);
  const [error, setError] = useState(null);
  const[presentPage, setPresentPage] = useState(1);
  const[totalPage, setTotalPage] = useState(0);
  const[totalBook, setTotalBook] = useState(0);

  // Chỉ gọi 1 lần
  useEffect(() => {
    if(wordForSearch===''){
    getAllBooks(presentPage-1).then(
      result => {
        setListOfBook(result.result);
        setTotalPage(result.totalPage);
        setUploading(false);
      }
    ).catch(
        error =>{
            setError(error.message);
        } 
    );}
    else{
      search(wordForSearch).then(
        result => {
          setListOfBook(result.result);
          setTotalPage(result.totalPage);
          setUploading(false);
        }
      ).catch(
          error =>{
              setError(error.message);
          } 
      );
    }
  }, [presentPage, wordForSearch]
  )

  const pagination = (page: number) => setPresentPage(page);

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

  if(listOfBook.length===0){
    return(
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <h1>Do not exist book that you search!</h1>
        </div>
      </div>
    );
  }

  return(
    <div className="container">
      <div className="row mt-4 mb-4">
        {
          listOfBook.map((book) => (
            <BookProperties key={book.idOfBook} book={book} />
          )
          )
        }
      </div>
      <Pagination presentPage={presentPage} total={totalPage} pagination={pagination}/>
    </div>
  );
}

export default ListOfProduct;