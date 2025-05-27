import { useContext } from 'react';

import './style.css';
import UserCardContext from '../../context/UserCardsContext';

const Slider = () => {
  const { userCards } = useContext(UserCardContext);

  return (
    <div className="slider-wrapper">
      {!!userCards.length &&
        userCards.map((card, index) => {
          return (
            <div key={index} className="card-container">
              <div className="card-header">
                <div>{card.bankName || '********'}</div>
              </div>
              <div className="card-input-container">
                <div className="card-input">{card.number?.slice(0, 4)}</div>
                <div className="card-input">{card.number?.slice(4, 8)}</div>
                <div className="card-input">{card.number?.slice(8, 12)}</div>
                <div className="card-input">{card.number?.slice(12, 16)}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Slider;
