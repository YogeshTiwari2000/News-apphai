import React from 'react'

const Newsitems=(props)=>{
    let {title,description,imgUrl,newsUrl,date,source}=props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{left :'98%',/*zIndex:'1'*/}}>{source}</span>
  <img src={imgUrl?imgUrl:"https://media.licdn.com/dms/image/C510BAQGszYfsvJBnoA/company-logo_200_200/0/1585989903842?e=2147483647&v=beta&t=siaKWap17wEUSyVhGIkny87_CIPHJMqFBBOcOfZuTes"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}  
</h5>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className='text-muted'>Date : {new Date(date).toGMTString()}</small></p>
    <a  rel="noreferrer" href={newsUrl} target={"_blank"} className="btn btn-sm btn-primary ">Read More</a>
  </div>
</div>
      </div>
    )
  }

export default Newsitems
