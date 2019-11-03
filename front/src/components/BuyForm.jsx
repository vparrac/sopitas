import React from 'react';
import Flavor from '../components/Flavor';

const BuyForm = (props) => {
  return (
    <div>
  <ol><li>
  <h2>CHOOSE YOUR PLAN</h2>

  <div className="grilla">
    <div><img src="https://comidasperuanas.net/wp-content/uploads/2017/01/Sopa-de-Pollo-Peruana.jpg" width="250px" height="250px"></img></div>
    <div><img src="https://comidasperuanas.net/wp-content/uploads/2017/01/Sopa-de-Pollo-Peruana.jpg" width="250px" height="250px"></img></div>
    <div><img src="https://comidasperuanas.net/wp-content/uploads/2017/01/Sopa-de-Pollo-Peruana.jpg" width="250px" height="250px"></img></div>
  </div>
  </li>


  <li><h2>CHOOSE YOUR FRECUENCY</h2>

  <div className="stepTwo">
    <form className="aa"><h4>DELIVER EVERY {" "}
    <select>
      <option default value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select> {" "}
    WEEKS</h4></form>
  </div>
  </li>
  <li>
  <h2>CHOOSE FLAVORS</h2>
  <div className="grilla">
  {props.flavors.map((p,i)=>(<Flavor  key={i} image={p.imageurl} ></Flavor>))}
  </div>
  </li></ol>
  </div>
  )
}

export default BuyForm;
