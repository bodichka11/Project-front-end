import React, { useRef, useState } from "react";
import TypesEntry from "./TypesEntry";
import "./shop.css";

const Shop: React.FC = () => {
  const searchInputRef = useRef(null);
  const [types, setTypes] = useState([] as any);

  const loadProduct = async (event: any) => {
    try {
      const { value } = event.target;

      const searchParams = new URLSearchParams();
      if (value) {
        searchParams.set("type", value);

        console.log(searchParams.toString());
      }

      console.log(`http://localhost:3500/products?${searchParams.toString()}`);
      await fetch(`http://localhost:3500/products?${searchParams.toString()}`)
        .then((response) => {
          return response.json();
        })

        .then((data) => {
          console.log(data);

          setTypes(data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="shop">
      
      <div className="shopTitle">
      
      <img src="https://i.pinimg.com/564x/a5/12/ed/a512ed50ce0f47d9dc81c07e1136db63.jpg" alt="logo" style = {{height: "150px", width: "200px" }} />
        <h1>Mr.Himars Shop</h1>
        
        
        <input
          ref={searchInputRef}
          placeholder="start typing to search"
          className="search-input"
          onChange ={loadProduct}
        ></input>
        
        {types &&
          Array.isArray(types) &&
          types.map((tp) => {
            return <TypesEntry brand={tp} key={tp.id}  />;
            
          })}
          
      </div>
      <div className="products"></div>
    </div>
  );
};

export default Shop;
