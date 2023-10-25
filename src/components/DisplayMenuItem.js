import React from "react";

const DisplayMenuItem = (item)=>{
    console.log(item);
     return (
        <div className="menu-item-container">
              <div> 
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-UJaO6XHo7ZSLsl_MDsQkE9Iu3fJ-cJA1pg0F-mO1LpaFv1fG_HVyzGIFRNni42d1r8&usqp=CAU" alt="food-image"/>
                </div>
              <div>
                   <div className="item-detail-container">
                      <p>{item.data.title}</p>
                      <p>{"$ "+item.data.price}</p>
                   </div>
                   <hr/>
                   <p>{item.data.desc}</p>
              </div>
        </div>
     )
}

export default DisplayMenuItem;