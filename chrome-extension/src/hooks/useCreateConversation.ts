import { useMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { useCreateConversationMutation } from "./__generated__/useCreateConversationMutation.graphql";

export const useCreateConversation = () => {
  const [mutate, loading] = useMutation<useCreateConversationMutation>(graphql`
    mutation useCreateConversationMutation(
      $conversationId: String!
      $model: String!
      $adapter: AdapterEnum!
    ) {
      startConversation(
        convId: $conversationId
        model: $model
        adapter: $adapter
      ) {
        id
        model
        adapter
        messages {
          id
          content
        }
      }
    }
  `);

  return { loading, mutate };
};

export default useCreateConversation;
