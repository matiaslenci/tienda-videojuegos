import React from "react";

const Item = (props) => {
  return (
    <div class="card--producto">
      <img src={props.image} alt={props.imgname} class="item--image"></img>
      <div class="item--info container-fluid">
        <h3 class="item--name">{props.name}</h3>
        <p class="item--price">ARS${props.price}</p>
        <p class="item--description">{props.description}</p>
        <button class="item--button">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Item;
