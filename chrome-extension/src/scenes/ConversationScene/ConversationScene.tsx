import graphql from "babel-plugin-relay/macro";
import QueryWrapper from "ContentApp/QueryWrapper";
import { PreloadedQuery, useFragment, usePreloadedQuery } from "react-relay";
import { ConversationScene_Query } from "./__generated__/ConversationScene_Query.graphql";
import useCurrentConversation from "../../providers/CurrentConversationProvider/useCurrentConversation";
import { Alert, Stack } from "@mui/joy";
import { ConversationScene_ConversationFragment$key } from "./__generated__/ConversationScene_ConversationFragment.graphql";
import ContentHeader from "components/shared/ContentHeader";
import ContentForm from "components/shared/ContentForm";

const Query = graphql`
  query ConversationScene_Query($conversationId: GlobalID!) {
    conversation(id: $conversationId) {
      ...ConversationScene_ConversationFragment
    }
    ...ContentForm_modelsFragment
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

  const data = useFragment<ConversationScene_ConversationFragment$key>(
    graphql`
      fragment ConversationScene_ConversationFragment on Conversation {
        id
        model
        adapter
        initialContent
        messages {
          id
          role
          content
        }
      }
    `,
    query.conversation,
  );

  return (
    <Stack>
      <ContentHeader />
      <Stack sx={{ width: "530px" }} p={2} useFlexGap spacing={1}>
        <Alert
          variant="soft"
          sx={{ maxWidth: "300px", alignItems: "flex-start" }}
        >
          Context was updated
        </Alert>
        {data?.messages?.map((message) => (
          <Alert
            variant={message.role === "user" ? "outlined" : "soft"}
            key={message.id}
            sx={{
              maxWidth: "300px",
              alignItems: message.role === "user" ? "flex-end" : "flex-start",
            }}
          >
            {message.content}
          </Alert>
        ))}
        <ContentForm queryFragmentRef={query} />
      </Stack>
    </Stack>
  );
};

const WrappedScene = () => {
  const { conversationId } = useCurrentConversation();
  return (
    <QueryWrapper Query={Query} conversationId={conversationId}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <ConversationScene />
    </QueryWrapper>
  );
};

export default WrappedScene;
