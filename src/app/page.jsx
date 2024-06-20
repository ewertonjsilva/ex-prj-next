import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <h1 className={styles.titulo}>Projeto Next JS</h1>
      <Image
        src="/promoSuco.jpg"
        width={1000}
        height={1212}
        alt="Foto promoção suco"
        className={styles.imagem}
      />
    </div>
  );
}
