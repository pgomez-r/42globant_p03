import React from 'react';

const Header = () => {
	return (
	<header className="bg-green-700 p-4 text-white">
	  <h1 className="text-2xl">42 Trip Recommendator</h1>
	  <nav>
		<a href="#" className="mr-4">Home</a>
		<a href="#">Login</a>
	  </nav>
	</header>
  );
};

export default Header;
