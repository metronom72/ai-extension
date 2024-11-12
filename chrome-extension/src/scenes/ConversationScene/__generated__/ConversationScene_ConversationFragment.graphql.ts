/**
 * @generated SignedSource<<537526c93cc44403d9abec6561c8e38b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type AdapterEnum = "NVIDIA" | "OLLAMA" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ConversationScene_ConversationFragment$data = {
  readonly adapter: AdapterEnum;
  readonly id: any;
  readonly messages: ReadonlyArray<{
    readonly content: string;
  }>;
  readonly model: string;
  readonly " $fragmentType": "ConversationScene_ConversationFragment";
};
export type ConversationScene_ConversationFragment$key = {
  readonly " $data"?: ConversationScene_ConversationFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ConversationScene_ConversationFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ConversationScene_ConversationFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "model",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "adapter",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Message",
      "kind": "LinkedField",
      "name": "messages",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "content",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Conversation",
  "abstractKey": null
};

(node as any).hash = "f6c3db73e4b7fa29fc309f1e3fcf7903";

export default node;
