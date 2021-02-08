import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Meta from '../components/Meta';

export default function Home() {
	return (
		<>
			<Meta title='Home' />
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vitae hic laudantium,
					nostrum maiores minima soluta tenetur iure ex? Et molestiae, excepturi praesentium
					iure animi, assumenda consequuntur fugit quis aliquid, delectus ipsum aperiam modi
					adipisci? Provident minima similique sint optio maxime neque voluptatem ut? Nesciunt
					nisi non aspernatur aliquid doloremque!
				</p>
				<Link href='/ninjas'>
					<a className={styles.btn}>See Ninja Listing</a>
				</Link>
			</div>
		</>
	);
}
