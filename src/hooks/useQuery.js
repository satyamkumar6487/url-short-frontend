import api from '../api/api.jsx';
import { useQuery } from '@tanstack/react-query';

export const useFetchTotalClicks = (token, onError) => {
  return useQuery({
    queryKey: ["url-totalclick"],
    queryFn: async () => {
      const response = await api.get(
        "/api/urls/totalClicks?startDate=2025-01-01&endDate=2025-09-30", // abhi 30 tak kar de
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      return response.data; // backend already array de raha hai
    },
    onError,
    staleTime: 5000,
  });
};







































