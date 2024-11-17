import { useMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import {
  AdapterEnum,
  useCreateConversationMutation,
} from "./__generated__/useCreateConversationMutation.graphql";
import { useCallback, useState } from "react";
import useCurrentConversation from "../providers/CurrentConversationProvider/useCurrentConversation";

export const useCreateConversation = () => {
  const [loading, setLoading] = useState(false);
  const [createConversation] = useMutation<useCreateConversationMutation>(
    graphql`
      mutation useCreateConversationMutation(
        $conversationId: String!
        $model: String!
        $adapter: AdapterEnum!
        $initialContent: String!
      ) {
        startConversation(
          convId: $conversationId
          model: $model
          adapter: $adapter
          initialContext: $initialContent
        ) {
          id
          model
          adapter
          initialContent
          messages {
            id
            content
          }
        }
      }
    `,
  );
  const { setConversationId } = useCurrentConversation();
  const mutate = useCallback(
    ({
      conversationId,
      model,
      adapter,
      initialContent,
    }: {
      conversationId: string;
      model: string;
      adapter: AdapterEnum;
      initialContent: string;
    }) => {
      setLoading(true);

      createConversation({
        variables: { conversationId, model, adapter, initialContent },
        onCompleted: (data) => {
          setLoading(false);

          setConversationId(data.startConversation.id);
        },
      });
    },
    [createConversation, setLoading],
  );

  return { loading, mutate };
};

export default useCreateConversation;
