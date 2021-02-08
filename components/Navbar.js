import React from 'react';
import Link from 'next/link';
// image component from nextjs instead of img tag; better speed
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav>
			<div className='logo'>
				{/* <img src="/logo.png" alt=""/> */}
				<Image src='/logo.png' height={77} width={128} />
			</div>
			<Link href='/'>
				<a>Home</a>
			</Link>
			<Link href='/about'>
				<a>About</a>
			</Link>
			<Link href='/ninjas'>
				<a>Ninja Listing</a>
			</Link>
		</nav>
	);
};

export default Navbar;
