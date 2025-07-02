import styles from './particle-background.module.css';

const ParticleBackground = () => {
  return (
    <div className={styles.particleContainer}>
      {[...Array(25)].map((_, i) => (
        <div key={i} className={styles.particle}></div>
      ))}
    </div>
  );
};

export default ParticleBackground;
