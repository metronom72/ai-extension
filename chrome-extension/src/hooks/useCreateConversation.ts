import { useMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";

export const useCreateConversation = () => {
  const [mutate, loading] = useMutation(graphql`
    mutation useCreateConversationMutation($conversationId: String!) {
      startConversation(convId: $conversationId)
    }
  `);

  return { loading, mutate };
};
