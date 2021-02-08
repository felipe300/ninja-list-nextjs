import React from 'react';

const url = 'https://jsonplaceholder.typicode.com/users';

export const getStaticPaths = async () => {
	const res = await fetch(url);
	const data = await res.json();

	const paths = data.map((ninja) => {
		return {
			params: { id: ninja.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(`${url}/${id}`);
	const data = await res.json();
	return {
		props: { ninja: data },
	};
};

const Ninja = ({ ninja }) => {
	const { name, email, website, address } = ninja;
	return (
		<div>
			<h1>{name}</h1>
			<p>{email}</p>
			<p>{website}</p>
			<p>{address.city}</p>
		</div>
	);
};

export default Ninja;
