// src/components/CardScientist.jsx
import "../Styles/CardScientist.css"; 

const CardScientist = ({ name, image, profession, awards, discoveries }) => {
  return (
    <div className="card-scientist">
      <h2>{name}</h2>
      <img src={image} alt={name} className="card-image" />
      <ul>
        <li><strong>Profesion:</strong> {profession}</li>
        <li><strong>Premios:</strong> {awards}</li>
        <li><strong>Descubrio:</strong> {discoveries}</li>
      </ul>
    </div>
  );
};

export default CardScientist;