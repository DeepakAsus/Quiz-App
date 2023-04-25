import { useState, useEffect, useRef, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import autoAnimate from "@formkit/auto-animate";
import axios from "axios";
import {
  ArrowPathIcon,
  PlusIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import QnA from "../components/Qna";
import OptionComp from "../components/OptionComp";

export default function Home() {
  useEffect(() => {
    listRef.current && autoAnimate(listRef.current);
  }, [listRef]);

  useEffect(() => {
    async function fetchQuestion() {
      try {
        const question = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/question`,
          {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("question")).token
              }`,
            },
          }
        );

        setQuestion([...question.data]);
      } catch (error) {
        localStorage.removeItem("question");
        navigate("/");
      }
    }

    function fetchOptions() {
      if (Object.keys(options).length === 0) {
        setOptions(JSON.parse(localStorage.getItem("options")));
      }
    }

    fetchQuestion();
    fetchOptions();
  }, []);
}
