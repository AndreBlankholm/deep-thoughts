import React from "react";
import { useParams } from "react-router-dom"; //helps to accses the id from the URL using a hook
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHT } from "../utils/queries";
import ReactionList from "../components/ReactionList";

const SingleThought = (props) => {
  
  const { id: thoughtId } = useParams();
  console.log(thoughtId); // the ID that was logged matches the ID from the URL.

  const { loading, data } = useQuery(QUERY_THOUGHT, {  //  This is how you can pass variables to queries that need them. The id property on the variables object will become the $id parameter in the GraphQL query.
    variables: { id: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (

    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {thought.username}
          </span>{" "}
          thought on {thought.createdAt}
        </p>
        <div className="card-body">
          <p>{thought.thoughtText}</p>
        </div>
      </div>

      {thought.reactionCount > 0 && <ReactionList reactions={thought.reactions} />}

    </div>
  );
};

export default SingleThought;
