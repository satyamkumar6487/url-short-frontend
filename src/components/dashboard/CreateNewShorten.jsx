import React, { useState } from 'react';
import { useStoreContext } from '../../contextApi/ContextApi';
import { useForm } from 'react-hook-form';
import TextField from '../TextField';
import { Tooltip } from '@mui/material';
import { RxCross2 } from 'react-icons/rx'; // import add kiya

const CreateNewShorten = ({ setOpen, refetch }) => {
  const { token } = useStoreContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      OrignalUrl: "",
    },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (data) => {
    // logic here
  };

  return (
    <div className="flex justify-center items-center bg-white rounded-md relative">
      <form
        onSubmit={handleSubmit(createShortUrlHandler)}
        className="sm:w-[400px] w-[90%] sm:p-8 p-4"
      >
        <h1 className="font-montserrat sm:mt-0 mt-3 text-center font-bold sm:text-2xl text-[22px]">
          Create New Short URL
        </h1>
        <hr className="mb-2 sm:mb-5 mb-3 text-slate-950" />

        <div>
          <TextField
            label="Enter URL"
            required
            id="OrignalUrl"
            placeholder="https://example.com"
            type="url"
            message="url is required"
            register={register}
            errors={errors}
          />

          <button
            className="bg-blue-600 font-semibold text-white w-full py-2 rounded-md hover:bg-blue-700 transition duration-300 mt-4"
            type="submit"
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </form>

      {/* Close button with tooltip */}
      {!loading && (
        <Tooltip title="Close">
          <button
            disabled={loading}
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-600 transition duration-300"
          >
            <RxCross2 className="text-slate-800 text-3xl" />
          </button>
        </Tooltip>
      )}
    </div>
  );
};

export default CreateNewShorten;
