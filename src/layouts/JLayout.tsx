import styles from './JLayout.module.css';

interface Props {
  children: React.ReactNode;
}

const JLogo = () => {
  return <div className={styles.jlogo}>
    <img className={styles.sponsor} src="/img/devoxx-logo.png" alt="Devoxx logo" width={128}/>
    <img className={styles.sponsor} src="/img/jlogo.svg" alt="J-labs logo"  width={128}/>
  </div>;
}

const JLayout = ({ children }: Props) => {
  return (
    <div>
      {children}
      <JLogo />
    </div>
  );
};

export default JLayout;