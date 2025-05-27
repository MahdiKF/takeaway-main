import { useState, useEffect, useContext, useRef } from 'react';
import getBanks from '../../services/api';

import './style.css';
import UserCardContext from '../../context/UserCardsContext';

function CardInput() {
  const inputRef = useRef([]);
  const [inputs, setInputs] = useState(['', '', '', '']);
  const [bankName, setBankName] = useState('********');
  const [banks, setBanks] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true)

  const { userCards,setUserCards } = useContext(UserCardContext);

    useEffect(() => {
    getBanks().then(data => {
      setBanks(data);
    });
    
  }, [userCards]);

  const handleInputChange = (e,index) => {
    // TODO: Handle input changes and check for PAN matches
    // Bonus: Go to next input if currunt filled and back to prevois if currunt is clear
    
    const meghdar = e.target.value.replace(/\D/g, "");
    if (meghdar.length <= 4) {
      const newNum = [...inputs];
      newNum[index] = meghdar;
      setInputs(newNum);
    }

    if (meghdar.length === 4 && index < 3 ) {
      inputRef.current[index + 1].focus();
    }

    const str = inputs.join('');
    
    if(str.length == 6){
      
      const pans = banks.map(re => re.pan);
      const matched = pans.findIndex(inner => inner.includes(str));
      console.log(str)
      setBankName(banks[matched].name.fa);
      console.log(inputs)
    }
    if(str.length < 6){
      setBankName('********')
    }
    
    if(str.length==15){
      setIsDisabled(false)
    }else{
      setIsDisabled(true)
    }
    


  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && inputs[index] === "" && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {

    const cardNumber = inputs.join('');

  const newCard = {
    number: cardNumber,
    bankName: bankName
  };

  setUserCards([...userCards, newCard]);

  setInputs(['', '', '', '']);
  setBankName('********');
  setIsDisabled(true);
  inputRef.current[0].focus();
    
    
     
    
  };

  return (
    <div className="card-container">
      <div className="card-header">
        <div>{bankName}</div>
      </div>
      <div className="card-input-container">
        {inputs.map((input, index) => (
          <input
            key={index}
            ref={(el) => (inputRef.current[index] = el)}
            className="card-input"
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="card-input"
            maxLength={4}
            value={input}
            onChange={(e) => handleInputChange(e , index)}
          />
        ))}
      </div>
      <div className="button-container ">
        <button className="button" onClick={handleSubmit} disabled={isDisabled}>
          افزودن
        </button>
      </div>
    </div>
  );
}

export default CardInput;