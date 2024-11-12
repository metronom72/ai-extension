import graphql from "babel-plugin-relay/macro";
import QueryWrapper from "ContentApp/QueryWrapper";
import { PreloadedQuery, useFragment, usePreloadedQuery } from "react-relay";
import { ConversationScene_Query } from "./__generated__/ConversationScene_Query.graphql";

const Query = graphql`
  query ConversationScene_Query($conversationId: ID!) {
    conversation(id: $conversationId) {
      ...ConversationScene_ConversationFragment
    }
  }
`;

const ConversationScene = ({
  queryReference,
}: {
  queryReference: PreloadedQuery<ConversationScene_Query>;
}): JSX.Element => {
  const query = usePreloadedQuery<ConversationScene_Query>(
    Query,
    queryReference,
  );

  const data = useFragment(
    graphql`
      fragment ConversationScene_ConversationFragment on Conversation {
        id
        model
        adapter
        messages {
          content
        }
      }
    `,
    query.conversation,
  );
  return <div />;
};

const WrappedScene = () => {
  return (
    <QueryWrapper Query={Query}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/*  @ts-ignore */}
      <ConversationScene />
    </QueryWrapper>
  );
};

export default WrappedScene;
