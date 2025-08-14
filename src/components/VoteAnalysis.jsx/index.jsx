import { useState } from "react";
import ModalComment from "./ModalComment";

const VoteAnalysis = () => {
  

  return (
    <div className="card shadow" style={{
      height: "150px"
    }}>
      <div className=" row row-cols-1 row-cols-sm-2 p-2 text-center" style={{ height: '100%' }}>
        <div className="col row row-cols-2">
          <div className="col">
            <button data-bs-toggle="modal" data-bs-target='#comment_modal' className="btn btn-danger">Viết đánh giá</button>
          </div>
          <div className="col">
            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="progress">
              <div className="progress-bar bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>

        <div className="col">
          ahahha
        </div>
      </div>

      <ModalComment/>

    </div>
  )
}

export default VoteAnalysis