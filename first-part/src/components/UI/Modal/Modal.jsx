import ReactDOM from 'react-dom';
import { useContext } from 'react';
import ModalContext from '../../../contexts/ModalContext';
import classes from './Modal.module.css';

const BackDrop = () => {
  const context = useContext(ModalContext);
  return <div className={classes.backdrop} onClick={context.hideHandler}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      return <div className={classes.content}>{props.children}</div>
    </div>
  );
};
function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <BackDrop />
          <ModalOverlay>{props.children}</ModalOverlay>
        </>,
        document.getElementById('modalRoot')
      )}
    </>
  );
}

export default Modal;
