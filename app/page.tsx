'use client'

import React, { useState } from 'react';

export default function Home() {
  
  function MyHeading(){
    return (
      <h1 className='text-3xl font-bold'>duck you man</h1>
    );
  }

  const duckables = {
    name: 'Lio',
    imageUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/campaign_images/terminal01/2011/4/4/11/guilty-cat-2802-1301930278-5.jpg?resize=1200:*',
    imageSize: 400,
  };

  const [textInput, setTextInput] = useState("");
  const [words, setWords] = useState<string[]>([]);
  const [cardCreate, setCardCreate] = useState(false);

  const handleInputChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') { // Eğer boşluk tuşuna basılırsa
      setWords(prevWords => [...prevWords, (e.target as HTMLInputElement).value]); // Şu ana kadar yazılan kelimeyi kelimeler listesine ekleyin
      setTextInput(""); // Input'u sıfırlayın
    } else {
      setTextInput((e.target as HTMLInputElement).value); // Aksi takdirde, girdiyi normal olarak güncelleyin
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
