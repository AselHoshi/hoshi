import axios from "axios";

export const instance = axios.create({
  baseURL: "", // Подставь значение из .env файла.
});
