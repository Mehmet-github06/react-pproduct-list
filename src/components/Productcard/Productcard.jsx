import "./Productcard.scss";

const Productcard = ({ veri }) => {
  return (
    <div className="cards">
      {veri.map(({ id, title, description, price, image }) => (
        <div className="card" key={id}>
          <div className="image">
            <img src={image} alt="" width={"100px"} />

            <div className="price">
              <span>{price} $</span>
            </div>
            <div className="title">
              <p>{title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productcard;
