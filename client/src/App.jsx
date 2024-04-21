import { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import Card from './components/Card';

//DataBase response of all products:
import productsData from './db/data';


//App component will be treated as StoreComponent
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  // -------- Input Filter (top user search text)------------
  const [query, setQuery] = useState("");




  //text input top field
  const handleInputTextUserChange = event => {
    setQuery(event.target.value);
  };

  const filteredItems = productsData.filter(product => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);



  //---------- Radio Filter (Black, white, red, $151 - $200 ....) --------------
const handleChangeRadioBTN = event => {
  selectedCategory(event.target.value);
};



  //---------- Buttons Filter (All Products, Nike, Adidas, Puma, Kappa, Runners) --------------
  const handleClickButton = event => {
    setSelectedCategory(event.target.value);
  };
   




  function filteredData(productsData, selected, query) {
    let filteredProducts = productsData;

    //Filtering input items
    if(query) {
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if (selected) {
      // filteredProducts = filteredProducts.filter( ({ category, color, company, newPrice, title }) => 
      filteredProducts = filteredProducts.filter( ({ ...productsData }) => 
      productsData.category === selected || 
      productsData.color === selected || 
      productsData.company === selected || 
      productsData.newPrice === selected || 
      productsData.title === selected );
    }

    //return function /filteredData/ results:
    return filteredProducts.map( ({id, img, title, star, reviews, prevPrice, newPrice}) => (
      <Card
        key = {id}
        img = {img}
        title = {title}
        star = {star}
        reviews = {reviews}
        prevPrice = {prevPrice}
        newPrice = {newPrice}
      />
    ))
  };



  //call function & pass user input to filter
  const resultOfFilter = filteredData(productsData, selectedCategory, query);


  return (
      <>
        <Sidebar handleChangeRadioBTN={handleChangeRadioBTN}/>
        <Navbar query={query} handleInputTextUserChange={handleInputTextUserChange}/>
        <Recommended handleClickButton={handleClickButton}/>
        <Products resultOfFilter={resultOfFilter}/>
      </>
  );
}

export default App;
