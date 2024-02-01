import React from "react";
import BookModel from "../models/BookModel";
import { my_request } from "./Request";

interface ResultInterface{
  result: BookModel[];
  totalPage: number;
  totalBook: number;
}

async function getBook(endPoint:string):Promise<ResultInterface> {
  const result:BookModel[]=[];

  // Xác định endpoint
  // const endPoint: string= 'http://localhost:8080/books';


  // Gọi phương thức request
  const response = await my_request(endPoint);

  // Lấy json sách
  const responseData = response._embedded.books;

  // Lấy thông tin trang
  const totalPage: number = response.page.totalPages;
  const totalBook: number = response.page.totalElements;

  for(const key in responseData){
    result.push({
      idOfBook: responseData[key].idOfBook,
      nameOfBook: responseData[key].nameOfBook,
      nameOfAuthor: responseData[key].nameOfAuthor,
      ISBN: responseData[key].ISBN,
      description: responseData[key].description,
      listPrice: responseData[key].listPrice,
      price: responseData[key].price,
      quantity: responseData[key].quantity,
      averageRating: responseData[key].averageRating
    });
  }

  return {result: result, totalPage:totalPage, totalBook:totalBook};
}

export async function getAllBooks(presentPage: number):Promise<ResultInterface>{
  //Xác định endpoint
  const endPoint: string= `http://localhost:8080/books?sort=idOfBook,desc&size=8&page=${presentPage}`;

  return getBook(endPoint);
}

export async function get2Books():Promise<ResultInterface>{
  //Xác định endpoint
  const endPoint: string= 'http://localhost:8080/books?sort=idOfBook,asc&page=0&size=2';

  return getBook(endPoint);
}

// http://localhost:8080/books/search/findByNameOfBookContaining?nameOfBook=na
// Hàm tìm sách

export async function search(wordForSearch: string):Promise<ResultInterface>{
  //Xác định endpoint
  let endPoint: string= `http://localhost:8080/books?sort=idOfBook,desc&size=8&page=0`;
  if(wordForSearch!="")
    endPoint=`http://localhost:8080/books/search/findByNameOfBookContaining?sort=idOfBook,desc&size=8&page=0&nameOfBook=${wordForSearch}`

  return getBook(endPoint);
}
