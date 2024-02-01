class BookModel{
  idOfBook: number;
  nameOfBook?: string;
  nameOfAuthor?: string;
  ISBN?: string;
  description?: string;
  listPrice?: number
  price?: number
  quantity?: number
  averageRating?: number;

  constructor(
  idOfBook: number,
  nameOfBook?: string,//co the bi null
  nameOfAuthor?: string,
  ISBN?: string,
  description?: string,
  listPrice?: number,
  price?: number,
  quantity?: number,
  averageRating?: number
  ){
      this.idOfBook=idOfBook;
      this.nameOfBook=nameOfBook;
      this.nameOfAuthor=nameOfAuthor;
      this.ISBN=ISBN;
      this.description=description;
      this.price=price;
      this.listPrice=listPrice;
      this.quantity=quantity;
      this.averageRating=averageRating;
  }
}
export default BookModel;