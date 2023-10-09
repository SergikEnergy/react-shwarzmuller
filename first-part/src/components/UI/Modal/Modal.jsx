import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const BackDrop = (props) => {
  return <div className={classes.backdrop}></div>;
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
