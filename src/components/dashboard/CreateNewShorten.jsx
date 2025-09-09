


import React, { useState } from "react";
import { useStoreContext } from "../../contextApi/ContextApi";
import { useForm } from "react-hook-form";
import TextField from "../TextField";
import { Tooltip } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import api from "../../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      originalUrl: "", 
    },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (data) => {
    setLoading(true);
    try {
      const { data: res } = await api.post(
        "/api/urls/shorten", 
        { originalUrl: data.originalUrl }, 
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      const shortenUrl = `${import.meta.env.VITE_REACT_SUBDOMAIN}/${res.shortUrl}`;
      await navigator.clipboard.writeText(shortenUrl);

      toast.success("Short URL copied to clipboard", {
        position: "bottom-center",
        className: "mb-5",
        duration: 3000,
      });
//await refetch();
      reset();
      setOpen(false);
      if (refetch) refetch();
    } catch (error) {
      console.error(error);
      toast.error("Create short URL failed.");
    } finally {
      setLoading(false);
    }
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
            id="originalUrl" 
            placeholder="https://example.com"
            type="url"
            message="url is required"
            register={register}
            errors={errors}
          />

          <button
            className="bg-blue-600 font-semibold text-white w-full py-2 rounded-md hover:bg-blue-700 transition duration-300 mt-4"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </form>

      {!loading && (
        <Tooltip title="Close">
          <button
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
