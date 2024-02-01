export async function my_request(endPoint:string) {
  // Truy vấn đường dẫn
  const response = await fetch(endPoint);

  // Nếu bị trả về lỗi
  if(!response.ok){
    throw new Error(`Can not access ${endPoint}`);
  }

  // Nếu trả về Ok
  return response.json();
}