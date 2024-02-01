import React from "react"

interface PaginationInterface{
  presentPage: number;
  total: number;
  pagination: any;
}

export const Pagination: React.FC<PaginationInterface>=(props)=>{

const listOfPage=[];

// Trường hợp 1.
if(props.presentPage===1)
{
  listOfPage.push(props.presentPage);
  if(props.total>=props.presentPage+1)
    listOfPage.push(props.presentPage+1);
  if(props.total>=props.presentPage+2)
    listOfPage.push(props.presentPage+2);
}else if(props.presentPage>1){
  // Trang -2
  if(props.presentPage>=3)
    listOfPage.push(props.presentPage-2);
  // Trang -1
  if(props.presentPage>=2)
    listOfPage.push(props.presentPage-1);
  // Ban than no
    listOfPage.push(props.presentPage);
  // Trang +1 
  if(props.total>=props.presentPage+1)
    listOfPage.push(props.presentPage+1);
  // Trang +2
  if(props.total>=props.presentPage+2)
    listOfPage.push(props.presentPage+2);
}



  return(
    <nav aria-label="...">
  <ul className="pagination">
    <li className="page-item">
      <button className="page-link" onClick={()=>props.pagination(1)} >First Page</button>
    </li>
    {
      listOfPage.map(page => (
        <li className="page-item" key={page}  onClick={()=>props.pagination(page)}>
        <button className={"page-link" + (props.presentPage===page?"active":"")}>{page}</button>
        </li>
      ))
    }
    <li className="page-item">
      <button className="page-link" onClick={()=>props.pagination(props.total)} >Last Page</button>
    </li>
  </ul>
</nav>
  )
}