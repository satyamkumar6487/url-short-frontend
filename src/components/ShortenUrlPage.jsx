import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShortenUrlPage = () => {
  const { url } = useParams();

  useEffect(() => {
    if (url) {
      // backend pe redirect request
      window.location.href = `${import.meta.env.VITE_BACKEND_URL}/${url}`;
    }
  }, [url]);

  return null;
}

export default ShortenUrlPage;
