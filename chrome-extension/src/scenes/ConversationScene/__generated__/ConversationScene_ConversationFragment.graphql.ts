/**
 * @generated SignedSource<<f2cc55403ae9c3737d62d821b9a5a169>>
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
  readonly initialContent: string;
  readonly messages: ReadonlyArray<{
    readonly content: string;
    readonly id: any;
    readonly role: string;
  }>;
  readonly model: string;
  readonly " $fragmentType": "ConversationScene_ConversationFragment";
};
export type ConversationScene_ConversationFragment$key = {
  readonly " $data"?: ConversationScene_ConversationFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ConversationScene_ConversationFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ConversationScene_ConversationFragment",
  "selections": [
    (v0/*: any*/),
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
      "kind": "ScalarField",
      "name": "initialContent",
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "role",
          "storageKey": null
        },
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
})();

(node as any).hash = "beee82a9759fb515ab418340f039e23d";

export default node;
