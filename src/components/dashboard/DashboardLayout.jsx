
import Graph from './Graph';
import { useStoreContext } from "../../contextApi/ContextApi.jsx";
import { useFetchTotalClicks } from '../../hooks/useQuery.js';  
import React, { useState } from 'react';
import ShortenPopUp from './ShortenPopUp.jsx';

const DashboardLayout = () => {

  const refetch= false
  const { token } = useStoreContext();

  const [shortenpopup, setShortenpopup] = useState(false);

  const onError = (err) => {
    console.log("ERROR fetching total clicks:", err);
  };

  const { data: totalClicks, isLoading, isError, isSuccess, error } = useFetchTotalClicks(token || "", onError);

  // Convert backend object to array for Graph
  const formattedData = totalClicks
    ? Object.entries(totalClicks).map(([date, clicks]) => ({ date, clicks }))
    : [];

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
      <div className="lg:w-[90%] w-full mx-auto py-16">
        <div className="h-[500px] relative"> {/* full height container */}
          <h3 className="mb-4">Share your short link to view where your engagement is coming from</h3>

          {isLoading && <div>Loading graph...</div>}

          {(isError || (isSuccess && formattedData.length === 0)) && (
            <div className="h-full flex flex-col items-center justify-center text-gray-600">
              <p className="text-lg mb-2">📊 No data for this time period</p>
              <Graph graphData={[]} /> {/* empty graph */}
            </div>
          )}

          {isSuccess && formattedData.length > 0 && (
            <Graph graphData={formattedData} />
          )}
        </div>

        <div className='py-5 sm:text-end text-center'>
          <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300'
           onClick={() => setShortenpopup(true)} >
            Create a new short url
          </button>
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

export default DashboardLayout 









































