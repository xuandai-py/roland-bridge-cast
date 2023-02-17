import { useEffect, useState, lazy } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 560,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return null;
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const useArticle = (baseURL) => {
  const [article, setArticle] = useState()

  useEffect(() => {
    axios.get(baseURL)
      .then(res => {
        setArticle(res.data)
      })
      .catch(err => console.error(err))
  }, [baseURL]);

  return [article]
}

