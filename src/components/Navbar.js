import React,{useState} from "react";
import menuItem from "../Data/menuItems";
import DisplayMenuItem from "./DisplayMenuItem";


  
const Navbar = ()=>{
    const[category, setCategory] = useState('All');
    const[filteredItem, setFilteredItem] = useState(menuItem);

    function displayItems(selectedCategory){
         setCategory(selectedCategory);
         let filteredItem1 = menuItem.filter((item)=>{
            return selectedCategory=="All" ||item['category'] == selectedCategory;
         });
         setFilteredItem(filteredItem1);
         console.log(filteredItem);
       
    }
   return (
      <div>
           <div className="navbar-heading-container">
                <h3>Our Menu</h3>
                <hr/>
           </div>
           <div className="category-container"> 
              <p  id="main"onClick={()=>displayItems("All")}>All</p>
              <p id="filter-btn-1" onClick={()=>displayItems("breakfast")}>Breakfast</p>
              <p id="filter-btn-2" onClick={()=>displayItems("lunch")}>Lunch</p>
              <p id="filter-btn-3" onClick={()=>displayItems("shakes")}>Shakes</p>
           </div>
           <div className="menu-item-list">
              {filteredItem.map((item)=><DisplayMenuItem data={item}/>)}
           </div>
      </div>
   )
}
 
export default Navbar;