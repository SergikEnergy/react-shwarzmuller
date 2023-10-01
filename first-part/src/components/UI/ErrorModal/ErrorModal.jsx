import Card from '../Card/Card';
import Button from '../Button/Button';

import styles from './ErrorModal.module.css';

function ErrorModal({ title, message, onErrorClick }) {
  return (
    <div>
      <div className={styles.backdrop} onClick={onErrorClick} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2 className=''>{title}</h2>
        </header>
        <div className={styles.content}>
          <p className=''>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onErrorClick}>I agree</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
