import React from "react";
import BookModel from "../models/BookModel";
import { my_request } from "./Request";
import PictureModel from "../models/PictureModel";

async function getPicturesOfSpecificBook(endPoint:string):Promise<PictureModel[]> {
  const result:PictureModel[]=[];

  // Xác định endpoint
  //const endPoint: string= `http://localhost:8080/books/${idOfBook}/listOfPicture`;


  // Gọi phương thức request
  const response = await my_request(endPoint);

  // Lấy json sách
  const responseData = response._embedded.pictures;

  for(const key in responseData){
    result.push({
      idOfPicture: responseData[key].idOfBook,
      nameOfPicture: responseData[key].nameOfPicture,
      icon: responseData[key].icon,
      link: responseData[key].link,
      data: responseData[key].data
    });
  }

  return result;
}

export async function getAllPicturesOfSpecificBook(idOfBook: number):Promise<PictureModel[]>{
  // Xác định endpoint
  const endPoint: string= `http://localhost:8080/books/${idOfBook}/listOfPicture`;
  return getPicturesOfSpecificBook(endPoint);
}

export async function getOnePictureOfSpecificBook(idOfBook: number):Promise<PictureModel[]>{
  // Xác định endpoint
  const endPoint: string= `http://localhost:8080/books/${idOfBook}/listOfPicture?sort=idOfPicture,asc&page=0&size=1`;
  return getPicturesOfSpecificBook(endPoint);
}

