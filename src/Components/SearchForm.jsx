import React, { useState } from "react";
import { useGlobalContext } from "../Context";
const SearchForm = () => {
  const { setSearch } = useGlobalContext();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(value);
    
  };
  return (
    <div id="search">
      <h1>Search Items</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="search" 
          value={value} 
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default SearchForm;


// import React, { useState } from 'react'
// import { useGlobalContext } from '../Context'

// const SearchForm = () => {
// let {setSearch,search}=useGlobalContext()
// console.log(search);
// let [value,setvalue]=useState()

// let handleSubmit=(e)=>
//   {
//     e.preventDefault()
//     let inputValue = e.target.elements.search.value;
//     setvalue(inputValue);  //Updates local state
//     setSearch(inputValue); //Updates global context
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="search" id="" />
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default SearchForm
