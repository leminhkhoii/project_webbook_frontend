class PictureModel{
  idOfPicture: number;
  nameOfPicture?: string;
  icon?: boolean;
  link?: string;
  data?: string;

  constructor(
    idOfPicture: number,
    nameOfPicture: string,
    icon: boolean,
    link: string,
    data: string
  ){
    this.idOfPicture=idOfPicture;
    this.nameOfPicture=nameOfPicture;
    this.icon=icon;
    this.link=link;
    this.data=data;
  }
}

export default PictureModel