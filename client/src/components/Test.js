import React from "react";
import '../styles/Test.css'; //for suggested content

const SimilarProducts = () => {

  fetch('./CourseProject.Structures.json')
    .then(response => response.json())
    .then(data => {
      // Access the products array
      data.forEach(item => {
        console.log(item.structure_type);
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

export default SimilarProducts;