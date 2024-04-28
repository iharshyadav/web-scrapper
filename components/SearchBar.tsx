"use client"

import { scrapeAndStoreProduct } from '@/lib/actions'
import React, { FormEvent, useState } from 'react'

const SearchBar = () => {

  const [searchPrompt, setSearchPrompt] = useState("")
 
  const isValidProductLink = (url:string) =>{
    console.log(url);
    try {
      const parsedUrl = new URL(url);
      const hostName = parsedUrl.hostname;
      console.log(hostName);
      if(
        hostName.includes('amazon.com') || 
        hostName.includes ('amazon.') || 
        hostName.endsWith('amazon') || 
        hostName.includes ('amazon.in')
      ) {
        return true;
      }
    } catch (error) {
      console.log(error)
      return false;
    }

    return false;
  }

  const handleSubmit = (e : FormEvent<HTMLFormElement>) =>{

    e.preventDefault();
    // console.log(searchPrompt);
    const isValidLink = isValidProductLink(searchPrompt)
   
    if(!isValidLink) return alert ("please enter the correct url")

      try {
        const scrape =  scrapeAndStoreProduct(searchPrompt);

      } catch (error) {
        console.log(error)
      }

  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 mt-12">
        <input
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
          type="text"
          placeholder="Enter product link"
          className="searchbar-input"
        />

        <button type="submit" className="searchbar-btn">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar