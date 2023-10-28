'use client'

import React, { useState } from 'react';

export default function Home() {
  
  function MyHeading(){
    return (
      <h1 className='text-3xl font-bold'>duck you Lio</h1>
    );
  }

  const duckables = {
    name: 'Lio',
    imageUrl: 'data:image/jpeg;base64,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',
    imageSize: 400,
  };

  const [textInput, setTextInput] = useState("");
  const [words, setWords] = useState<string[]>([]);
  const [cardCreate, setCardCreate] = useState(false);

  const handleInputChange = (e) => {
    if (e.key === ' ') { // Eğer boşluk tuşuna basılırsa
      setWords(prevWords => [...prevWords, e.target.value]); // Şu ana kadar yazılan kelimeyi kelimeler listesine ekleyin
      setTextInput(""); // Input'u sıfırlayın
    } else {
      setTextInput(e.target.value); // Aksi takdirde, girdiyi normal olarak güncelleyin
    }
  }

  const clear = () => {
    setWords([]);
    setTextInput("");
  }

  const createCard = () => {
    console.log('asd');
    setCardCreate(true);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-5 w-full max-w-4xl mx-auto">
    <MyHeading />

    
    <div>
        <img src={duckables.imageUrl} className="w-full max-w-md" alt="Duckable Image"/>
    </div>

    <div className='flex  w-full justify-center' >
    <div className="relative w-1/2">
        <label
            htmlFor="name"
            className="absolute -top-2 left-2 inline-block bg-white px-2 text-xs font-medium text-gray-900"
        >
            Your Vet
        </label>
        <input
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            onKeyUp={handleInputChange}
            name="name"
            id="name"
            className="block pl-3 w-full rounded-md border-0 py-2.5 text-lg text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 leading-7"
            placeholder="Duck you joe doe"
        />
    </div>
    <button
        className="rounded-md ml-2 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={clear}
    >
        Clear
    </button>
</div>

    
    <div className="w-full max-w-md">
        <textarea
            rows={6}
            value={words.join(' ')}
            onChange={(e) => setWords(e.target.value.split(' '))}
            name="comment"
            id="comment"
            className="block w-full rounded-md border-0 py-3 pl-3 text-lg text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 leading-7"
            defaultValue={'Duck you'}
        />
    </div>

    <button
        onClick={createCard}
        type="button"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Create a card     
      </button>

      {cardCreate? 
        
        <div className="card w-96 glass">
          <figure><img className='mt-10' src={duckables.imageUrl} alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title"><MyHeading/></h2>
            <p>{words.join(' ')}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Share!</button>
              </div>
            </div>
          </div>
      : <p>You are a bitch</p>
      }
</main>

  );
}
