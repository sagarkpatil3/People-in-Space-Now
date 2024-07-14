import { Component } from "react";
import "./card-list.css";

class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.astronauts.map((astronaut) => (
          <div className="card" key={astronaut.name}>
            <img
              src={astronaut.image}
              alt={astronaut.name}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">{astronaut.name}</h2>
              <p className="card-subtitle">Craft : {astronaut.craft}</p>
              <p className="card-subtitle">
                Nationality : {astronaut.nationality}
              </p>
              <p className="card-description">{astronaut.description}</p>
              <a
                href={astronaut.wikiUrl}
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
