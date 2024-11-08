import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/stockhistory/symbol";

export const getStockHistory = async (symbol: string) => {
  try {
    const response = await axios.get(`${BASE_URL}?symbol=${symbol}`);
    return response;
  } catch (error) {
    return error;
  }
};
