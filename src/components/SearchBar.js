import React, { useState } from 'react';

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const [submittedText, setSubmittedText] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetchAIResponse(inputValue);
        setSubmittedText(response);
        setInputValue('');
    };

    const fetchAIResponse = async (prompt) => {
        try {
            const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAJpVjJ8zJAWyMwYttVoBaK54jlCrPIaNE', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: prompt,
                                },
                            ],
                        },
                    ],
                }),
            });
            const data = await response.json();
            console.log('API response:', data); // Debugging line
            if (data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
                return data.candidates[0].content.parts[0].text;
            } else {
                return 'No response from API';
            }
        } catch (error) {
            console.error('Error fetching AI response:', error);
            return 'Error fetching AI response';
        }
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <form onSubmit={handleSubmit} className="flex justify-center w-full">
                <input
                    type="text"
                    placeholder="Search..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border p-2 w-1/2"
                />
                <button type="submit" className="bg-green-400 text-white p-2 ml-2 font-bold">
                    Search
                </button>
            </form>
            {submittedText && (
                <div className="m-8 p-2 border w-1/2 text-center break-words">
                    {submittedText}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
