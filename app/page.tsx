import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main >
        <h1 >
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>
        <h1 className='text-3xl font-bold underline'>test</h1>
      </main>
    </div>
  );
}
