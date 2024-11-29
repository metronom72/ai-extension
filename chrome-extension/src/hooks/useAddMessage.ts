import { useMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { useCallback, useState } from "react";
import {
  PromptInput,
  useAddMessageMutation,
} from "./__generated__/useAddMessageMutation.graphql";

export const useAddMessage = () => {
  const [loading, setLoading] = useState(false);
  const [addMessage] = useMutation<useAddMessageMutation>(graphql`
    mutation useAddMessageMutation(
      $conversationId: String!
      $query: PromptInput!
    ) {
      addMessage(convId: $conversationId, query: $query) {
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

  const mutate = useCallback(
    ({
      conversationId,
      query,
    }: {
      conversationId: string;
      query: PromptInput;
    }) => {
      setLoading(true);

      addMessage({
        variables: { conversationId, query },
        onCompleted: (data) => {
          setLoading(false);
        },
      });
    },
    [addMessage, setLoading],
  );

  return { loading, mutate };
};

export default useAddMessage();
