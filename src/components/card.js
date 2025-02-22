import React from 'react'

export default function Card(props) {

  let options =props.options;
  let priceOptions =Object.keys(options)
  return (
    <div>
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src={props.imgSrc} className="card-img-top" alt="..." style={{height:"120px",ObjectFit:"fill"}}/>
        <div className="card-body">
          <h5 className="card-title">{props.foodNamele}</h5>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {" "}
                    {i + 1}{" "}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              {priceOptions.map((data)=>{
                return<options key={data} value={data}>{data}</options>
              })}
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
    </div>
      
  )
}
