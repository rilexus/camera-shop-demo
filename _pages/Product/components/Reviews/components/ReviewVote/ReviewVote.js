import { useState } from "react";
import { ButtonStyleless, Flex } from "../../../../../../ui";
import { DownvoteOutlined, UpvoteOutlined } from "../../../../../../ui/icons";

const UpvoteButton = ({ fill, ...props }) => {
  return (
    <ButtonStyleless {...props}>
      <UpvoteOutlined width={"1.3em"} height={"1.3em"} fill={fill} />
    </ButtonStyleless>
  );
};

const DownvoteButton = ({ fill, ...props }) => {
  return (
    <ButtonStyleless {...props}>
      <DownvoteOutlined width={"1.3em"} height={"1.3em"} fill={fill} />
    </ButtonStyleless>
  );
};

const Vote = ({ count = 0, onDownvote, onUpvote, state = "none" }) => {
  return (
    <Flex
      direction={"column"}
      align={"center"}
      style={{
        marginRight: "1em",
      }}
    >
      <UpvoteButton
        onClick={onUpvote}
        fill={state === "upvoted" ? "red" : "currentColor"}
      />
      <div
        style={{
          fontSize: ".9em",
          margin: ".27em 0",
          color:
            state === "upvoted"
              ? "red"
              : state === "downvoted"
              ? "blue"
              : "black",
        }}
      >
        {count}
      </div>
      <DownvoteButton
        onClick={onDownvote}
        fill={state === "downvoted" ? "blue" : "currentColor"}
      />
    </Flex>
  );
};

const useCounter = (initial = 0) => {
  const [state, setState] = useState(initial);

  const increment = () => {
    setState(state + 1);
  };

  const decrement = () => {
    setState(state - 1);
  };

  return [state, { increment, decrement }];
};

const ReviewVote = ({ id }) => {
  const [state, setState] = useState("none"); // TODO: handle initial state;
  const [count, { increment, decrement }] = useCounter(299);

  // TODO: implement API communication

  const upvote = () => {
    // NOTE: allow clicking only once
    if (state === "none" || state === "downvoted") {
      setState("upvoted");
      increment();
    }
  };
  const downvote = () => {
    // NOTE: allow clicking only once
    if (state === "none" || state === "upvoted") {
      setState("downvoted");
      decrement();
    }
  };
  return (
    <Vote count={count} onUpvote={upvote} state={state} onDownvote={downvote} />
  );
};

export default ReviewVote;
