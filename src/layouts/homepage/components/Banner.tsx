import React from "react";

function Banner(){
  return(
      <div className="p-5 mb-4 bg-dark">
        <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center">
          <div>
            <h4 className="display-5 fw-bold">
                ĐỌC KHÔNG CHỈ HIỂU THẾ GIỚI <br></br> ĐỌC THẤU HIỂU CHÍNH MÌNH
            </h4>
            <p className="float-end">Sheldon</p>
            <button className="btn btn-primary btn-lg text-white">Explore at Sheldon now</button>
          </div>
        </div>
      </div>
  );
}

export default Banner;