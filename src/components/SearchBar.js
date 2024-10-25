import React from 'react';

const SearchBar = () => {
	return (
	<div className="flex justify-center mt-8">
		<input
			type="text"
			placeholder="Search..."
			className="border p-2 w-1/2"
		/>
		<button className="bg-green-400 text-white p-2 ml-2 font-bold">Search</button>
	</div>
  );
};

export default SearchBar;
