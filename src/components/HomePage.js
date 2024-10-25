import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchBar from './SearchBar';
import Map from './Map';

const HomePage = () => {
	return (
	<div className="flex flex-col min-h-screen">
		<Header />
		<main className="flex-grow">
		<SearchBar />
			{/* Add more content here */}
		<Map />
		</main>
	  <Footer />
	</div>
  );
};

export default HomePage;
