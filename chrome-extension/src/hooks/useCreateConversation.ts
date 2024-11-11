import { useMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import {
  AdapterEnum,
  useCreateConversationMutation,
} from "./__generated__/useCreateConversationMutation.graphql";
import { useCallback, useState } from "react";

export const useCreateConversation = () => {
  const [loading, setLoading] = useState(false);
  const [addMessageLoading, setAddMessageLoading] = useState(false);
  const [createConversation] = useMutation<useCreateConversationMutation>(
    graphql`
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
    `,
  );

  const mutate = useCallback(
    ({
      conversationId,
      model,
      adapter,
    }: {
      conversationId: string;
      model: string;
      adapter: AdapterEnum;
    }) => {
      setLoading(true);

      createConversation({
        variables: { conversationId, model, adapter },
        onCompleted: (data) => {
          setLoading(false);
        },
      });
    },
    [createConversation, setLoading],
  );

  return { loading, mutate };
};

export default useCreateConversation;
