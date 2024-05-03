"use client";
import { useState, useEffect } from "react";
import Module from "./components/Module";

import { makeQueriesData } from "./makeChatData";
const queries = makeQueriesData();

const Chat = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-full flex flex-col justify-center items-center">
        {queries.map((query) => (
          <Module key={query.id} query={query} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
