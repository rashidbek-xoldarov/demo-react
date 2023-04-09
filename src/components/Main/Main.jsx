import React, { useRef } from "react";

const Main = () => {
  const text = useRef();
  console.log(text.current);

  let cards = [
    {
      src: "https://picsum.photos/100/150",
      title: "Samsung",
      price: 230,
    },
    {
      src: "https://picsum.photos/100/150",
      title: "Apple",
      price: 520,
    },
    {
      src: "https://picsum.photos/100/150",
      title: "ReadMi",
      price: 300,
    },
    {
      src: "https://picsum.photos/100/150",
      title: "Nokia",
      price: 130,
    },
  ];

  return (
    <div>
      <h2>Card</h2>
      <ul className="card-list">
        {cards.map((item) => {
          return (
            <li className="card-item">
              <img src={item.src} alt={item.title} />
              <h3 className="card-title">{item.title}</h3>
              <span>{item.price}</span>
            </li>
          );
        })}
        <p ref={text}>lorem</p>
      </ul>
    </div>
  );
};

export default Main;
