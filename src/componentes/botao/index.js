import styles from './index.module.css';

export default function Botao({children}) {
    return(
        <button type="button" className={styles.botao}>
            {children}
        </button>
    ); 
}