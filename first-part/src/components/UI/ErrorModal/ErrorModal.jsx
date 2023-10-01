import Card from '../Card/Card';
import Button from '../Button/Button';

import styles from './ErrorModal.module.css';

function ErrorModal({ title, message }) {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2 className=''>{title}</h2>
      </header>
      <div className={styles.content}>
        <p className=''>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button>I agree</Button>
      </footer>
    </Card>
  );
}

export default ErrorModal;
