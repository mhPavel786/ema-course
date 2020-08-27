import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
  const { name,img,price} = props.Course;
    return (
      <div className="box">
        <div>
          <img src={img} alt=""/>
        </div>
        <div className="course-box">
          <h5>{name}</h5>
          <h4>=>{price} ৳</h4>
          <button className="btn btn-primary" onClick={() => props.addCourse(props.Course)}>Enroll Now <FontAwesomeIcon icon={faShoppingBasket} />
</button>
        </div>
      </div>
    );
};

export default Course;