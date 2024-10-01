
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Hi, I’m [Your Name], a DevOps Enthusiast!</h1>
        <p className={styles.description}>
          I specialize in AWS, Kubernetes, CI/CD, Docker, and more. Currently, I’m looking for new opportunities.
        </p>
        <Image src="/dummy-photo.png" alt="Profile Photo" width={200} height={200} />
        <section className={styles.section}>
          <h2>Skills</h2>
          <ul>
            <li>AWS (EC2, S3, ECS)</li>
            <li>Kubernetes</li>
            <li>CI/CD Automation (Jenkins)</li>
            <li>Docker</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Projects</h2>
          <ul>
            <li>CentOS to Ubuntu Migration</li>
            <li>OTRS System Migration</li>
            <li>AWS ECS Migration</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Contact</h2>
          <p>Email: dummy@example.com</p>
        </section>
      </main>
    </div>
  );
}
