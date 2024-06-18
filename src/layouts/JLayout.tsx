import styles from './JLayout.module.css';

const JLogo = () => {
  return <div className={styles.jlogo}>
    <a href='https://www.j-labs.pl/en/' target='_blank'>
      <img 
        className={styles.sponsor} 
        src="/img/jlogo.svg" 
        alt="J-labs logo"
        width={128}
      />
    </a>
    <a href='https://devoxx.pl/' target='_blank'>
      <img
        className={styles.sponsor}
        src="/img/devoxx-logo.png" 
        alt="Devoxx logo" 
        width={128}
      />
    </a>
  </div>;
}

const JLayout = () => {
  return (
    <JLogo />
  );
};

export default JLayout;