import React, { useState } from "react";

const ItemCount = (props) => {
  const [Aumentar, setAumentar] = useState(props.initial);

  const handleAumentar = () => {
    if (Aumentar < props.stock) {
      setAumentar(Aumentar + 1);
    }
  };

  const handleDisminuir = () => {
    if (Aumentar > 1) {
      setAumentar(Aumentar - 1);
    }
  }
  return (
    <div className="ItemCount">
      <button onClick={handleDisminuir} className="ItemCount--disminuir">-</button>
      <p>{Aumentar}</p>
      <button onClick={handleAumentar} className="ItemCount--Aumentar">+</button>
    </div>
  );
};

export default ItemCount;
