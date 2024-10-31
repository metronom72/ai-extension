import { graphql, useMutation } from "react-relay";

export const useCreateConversation = () => {
  const [mutate, loading] = useMutation(graphql`
    mutation useCreateConversationMutation($conversationId: String!) {
      startConversation(convId: $conversationId)
    }
  `);

  return { loading, mutate };
};
