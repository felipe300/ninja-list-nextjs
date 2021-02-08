import React from 'react';
import Link from 'next/link';
import Meta from '../../components/Meta';
import NinjaStyle from '../../styles/Ninja.module.css';

const url = 'https://jsonplaceholder.typicode.com/users';

export const getStaticProps = async () => {
	const res = await fetch(url);
	const data = await res.json();
	return {
		props: { ninjas: data },
	};
};

const Ninjas = ({ ninjas }) => {
	return (
		<>
			<Meta title='All cool ninjas' />
			<div>
				<h1>All Ninjas</h1>
				{ninjas.map((ninja) => {
					return (
						<Link href={`/	ninjas/${ninja.id}`} key={ninja.id}>
							<a className={NinjaStyle.single}>
								<h3>{ninja.name}</h3>
							</a>
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default Ninjas;
