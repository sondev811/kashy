import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from './Button';
import '@styles/Modal.css';

interface Props {
  children?: React.ReactNode;
  callback?: () => void;
  modalWithButton?: boolean;
  btnName?: string;
  isActiveModal: boolean;
  setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal: React.FC<Props> = (props) => {
  const { 
    children, 
    isActiveModal, 
    setIsActiveModal,
    callback,
    btnName, 
    modalWithButton 
  } = props;

  return (
    <div className={`modal ${isActiveModal ? 'active' : ''}`}>
      <div className='modal__content'>
        <span 
          className='modal__close' 
          onClick={() => setIsActiveModal(false)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </span>
        <div className='modal__children'>
          { children }
        </div>
        <div className='modal__button'>
          {
            modalWithButton && 
            <Button 
              buttonName={btnName ? btnName : ''} 
              type='button'
              size='normal'
              onClick={callback}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Modal;