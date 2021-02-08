import React, { useEffect } from 'react';
import Link from 'next/link';
// to redirect the user
import { useRouter } from 'next/router';

const NotFound = () => {
	const router = useRouter();

	useEffect(() => {
		setInterval(() => {
			router.push('/');
		}, 3000);
	}, []);

	return (
		<div className='not-found'>
			<h1>Opssss.....</h1>
			<h2>That page cannot be found.</h2>
			<p>
				Go back to the{' '}
				<Link href='/'>
					<a>homepage</a>
				</Link>
			</p>
		</div>
	);
};

export default NotFound;
