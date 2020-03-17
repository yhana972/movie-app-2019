import React from 'react';

const foodLike = [
  {
    id:1,
    name : "kimchi",
    image: "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/Kimchi.jpg?itok=5WuwwXnQ&mtime=1378968122"
  },
  {
    id:2,
    name : "kimbap",
    image: "https://www.seriouseats.com/recipes/assets_c/2009/09/20090723-kimbap-intro-thumb-625xauto-33859.jpg"
  },
  {
    id:3,
    name : "soup",
    image: "https://mylovelylittlelunchbox.com/wp-content/uploads/2017/05/IMG_0680.jpg"
  },
  {
    id:4,
    name : "curry",
    image: "https://www.cookingclassy.com/wp-content/uploads/2018/08/chicken-curry-11.jpg"
  }
];

function Food({name, picture}){
  return(
    <div>
      <h1>I like {name}</h1>
      <img src={picture} alt={name}/>
    </div>
  ); 
}


function App() {
  return(
    <div>
      {foodLike.map(dish =>( //dish는 object
        <Food key={dish.id} name={dish.name} picture={dish.image}/>
      ))}
    </div>
  ); 
}

export default App;
