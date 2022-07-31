import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS } from "../utils/queries";
import ThoughtList from '../components/ThoughtList';


const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);  // every graphQL reponse (QUERY_THOUGHTS) comes in a big data object
  //going inside the object and requesting data.thoughts and making a var called const thoughts
  const thoughts = data?.thoughts || [];    // Optional chaining negates the need to check if an object even exists before accessing its properties
  console.log(thoughts);                    // What we're saying is, if data exists, store it in the thoughts constant we just created. If data is undefined, then save an empty array to the thoughts component.

  return (
    <main>
  <div className="flex-row justify-space-between">
    <div className="col-12 mb-3">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
      )}
    </div>
  </div>
</main>
  );
};

export default Home;
