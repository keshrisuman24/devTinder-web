import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { feedUrl } from "../utils/apiUrls";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Card from "./Card";
const Feed = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  const fetchFeed = async () => {
    try {
      if (feed) {
        return;
      }
      const res = await axios.get(feedUrl, {
        withCredentials: true,
      });
      dispatch(addFeed(res.data.data));
    } catch (error) {
      console.log("error", error);
    }
  };

  fetchFeed(() => {
    fetchUser();
  }, []);
  return <div>{feed && <Card data={feed[1]} />}</div>;
};

export default Feed;
