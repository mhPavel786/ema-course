import React from 'react';
import "./Shop.css";
import fakedata from '../../fakeData/data';
import Course from '../Course/Course';
import { useState } from 'react';
import Cart from '../Cart/Cart';


const Shop = () => {
    const [course, setcourse] = useState(fakedata);
    const [cart,setCart] = useState([]);
    const addCourse = (course) =>{
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
      <div className="shop-container">
        <div className="product-container">
          <div className="d-flex justify-content-between">
            <h1>The Courses We Oferr:</h1>
            <Cart cart={cart}></Cart>
          </div>
          {
          course.map(courseData =>  <Course Course={courseData} key={courseData.id} addCourse={addCourse} ></Course>)
          }
        </div>
      </div>
    );
};

export default Shop;