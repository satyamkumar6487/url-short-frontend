 import React, { useState } from "react";
import { FaExternalLinkAlt, FaCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const ShortenItem = ({ originalUrl, shortUrl, clickCount, createdDate }) => {
  const [isCopied, setIsCopied] = useState(false);
  const fullUrl = `${import.meta.env.VITE_REACT_SUBDOMAIN}/${shortUrl}`;
  const subDomain = import.meta.env.VITE_REACT_SUBDOMAIN.replace(/^https?:\/\//, '');

  const handleCopy = () => {
    navigator.clipboard.writeText(fullUrl).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // reset after 2 sec
    });
  };

  return (
    <div className="p-4 border rounded-md flex justify-between items-center">
      <div className="flex sm:flex-row flex-col sm:justify-between w-full sm:items-center">

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
          <FaExternalLinkAlt className="text-blue-600" />

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="ml-2 flex items-center gap-1 text-sm px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
          >
            {isCopied ? (
              <>
                <FaCheck className="text-green-600" /> Copied
              </>
            ) : (
              <>
                <FaCopy /> Copy
              </>
            )}
          </button>
        </div>

        {/* Extra details */}
        <div className="text-sm text-gray-600 mt-2 sm:mt-0">
          <p>Clicks: {clickCount}</p>
          <p>Date: {new Date(createdDate).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ShortenItem;

