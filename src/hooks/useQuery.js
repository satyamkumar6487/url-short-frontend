import api from '../api/api.jsx';
import { useQuery } from '@tanstack/react-query';

// Fetch user's short URLs
export const useFetchMyShortUrls = (token, onError) => {
  return useQuery({
    queryKey: ["my-shorteurls"],
    queryFn: async () => {
      const response = await api.get("/api/urls/myurls", {   // match backend
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      return response.data;
    },
    select: (data) => data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    onError,
    staleTime: 5000,
  });
};

// Fetch total clicks for graph
export const useFetchTotalClicks = (token, onError) => {
  return useQuery({
    queryKey: ["url-totalclick", "2025-01-01", "2025-09-30"], // include dates for cache
    queryFn: async () => {
      const response = await api.get(
        "/api/urls/totalClicks?startDate=2025-01-01&endDate=2025-09-30",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      return response.data;
    },
    onError,
    staleTime: 5000,
  });
};
