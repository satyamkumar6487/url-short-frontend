

import React from 'react';
import { FaExternalLinkAlt, FaCopy } from "react-icons/fa";
import { MdOutlineAdsClick } from "react-icons/md";
const ShortenItem = ({ orignalUrl, shortUrl, clickCount, createdDate }) => {
  const subDomain = import.meta.env.VITE_REACT_SUBDOMAIN.replace(/^https?:\/\//, ''); 
  const fullUrl = `${import.meta.env.VITE_REACT_SUBDOMAIN}/${shortUrl}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullUrl)
      .then(() => alert("Copied to clipboard!"))
      .catch(err => console.error("Clipboard error:", err));
  };

  return (
    <div className='p-4 border rounded-md flex justify-between items-center'>
      <div className='flex sm:flex-row flex-col sm:justify-between w-full sm:items-center'>
        
        {/* Short URL */}
        <div className="flex items-center space-x-2">
          <a 
            href={fullUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[17px] font-semibold text-blue-600 hover:underline"
          >
            {subDomain + "/" + shortUrl}
          </a>
          <FaExternalLinkAlt className="text-blue-600"/>
          <FaCopy className="text-gray-600 cursor-pointer hover:text-blue-600" onClick={handleCopy}/>
        </div>

        <div className="flex items-center gap-1">
          <h3 className="text-slate-700 font -[400] text-[17px]">
            {orignalUrl}</h3>
        </div>


<div className="flex items-center gap-8 pt-6 ">
  <div className="flex gap-1 items-center font-semibold text-green-800">
    <span>
      <MdOutlineAdsClick className="text-[22px] me-1" />
    </span>
    <span className="text-[16px]">{clickCount}</span>
    <span className="text-[15px]">
      {clickCount === 0 || clickCount === 1 ? "Click" : "Clicks"}
    </span>
  </div>
</div>










       
        <div className="text-sm text-gray-600 mt-2 sm:mt-0">
          <p>Clicks: {clickCount}</p>
          <p>Date: {new Date(createdDate).toLocaleDateString()}</p>
        </div>

      </div>
    </div>
  )
}

export default ShortenItem;
