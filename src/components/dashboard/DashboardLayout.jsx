
import Graph from './Graph';
import { useStoreContext } from "../../contextApi/ContextApi.jsx";
import { useFetchMyShortUrls, useFetchTotalClicks } from '../../hooks/useQuery.js';  
import React, { useState } from 'react';
import ShortenPopUp from './ShortenPopUp.jsx';
import ShortenUrlList from './ShortenUrlList.jsx';

const DashboardLayout = () => {
  const { token } = useStoreContext();
  const [shortenpopup, setShortenpopup] = useState(false);

  const onError = (err) => {
    console.log("ERROR fetching total clicks:", err);
  };

  const { isLoading: urlsLoading, data: myShortenUrls, refetch } = useFetchMyShortUrls(token, onError);
  const { data: totalClicks, isLoading, isError, isSuccess } = useFetchTotalClicks(token || "", onError);

  // Convert backend object to array for Graph
  const formattedData = totalClicks
    ? Object.entries(totalClicks).map(([date, clicks]) => ({ date, clicks }))
    : [];

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
      <div className="lg:w-[90%] w-full mx-auto py-16">
        
        {/* Graph */}
        <div className="h-[500px] relative">
          <h3 className="mb-4">Share your short link to view where your engagement is coming from</h3>

          {isLoading && <div>Loading graph...</div>}

          {(isError || (isSuccess && formattedData.length === 0)) && (
            <div className="h-full flex flex-col items-center justify-center text-gray-600">
              <p className="text-lg mb-2">📊 No data for this time period</p>
              <Graph graphData={[]} /> 
            </div>
          )}

          {isSuccess && formattedData.length > 0 && (
            <Graph graphData={formattedData} />
          )}
        </div>

        {/* Create Button */}
        <div className='py-5 sm:text-end text-center'>
          <button 
            className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300'
            onClick={() => setShortenpopup(true)}
          >
            Create a new short url
          </button>
        </div>

        {/* Short URL List */}
        <div>
          {!urlsLoading && myShortenUrls && myShortenUrls.length === 0 ? (
            <div className="h-[300px] flex flex-col items-center justify-center text-gray-600">
              <h1 className="text-2xl font-semibold">You have not created any short URLs yet.</h1>
            </div>
          ) : (
            <ShortenUrlList data={myShortenUrls || []} />
          )}
        </div>
      </div>

      <ShortenPopUp 
        refetch={refetch}
        open={shortenpopup}
        setOpen={setShortenpopup}
      />
    </div>
  );
};

export default DashboardLayout;




























