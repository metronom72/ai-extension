/**
 * @generated SignedSource<<75a32e62161f02b80fb8156c0dfa4665>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ConversationScene_Query$variables = {
  conversationId: any;
};
export type ConversationScene_Query$data = {
  readonly conversation: {
    readonly " $fragmentSpreads": FragmentRefs<"ConversationScene_ConversationFragment">;
  } | null | undefined;
};
export type ConversationScene_Query = {
  response: ConversationScene_Query$data;
  variables: ConversationScene_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "conversationId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "conversationId"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ConversationScene_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Conversation",
        "kind": "LinkedField",
        "name": "conversation",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ConversationScene_ConversationFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ConversationScene_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Conversation",
        "kind": "LinkedField",
        "name": "conversation",
        "plural": false,
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "97c5995eb167f7f9fb6faa06f455f30b",
    "id": null,
    "metadata": {},
    "name": "ConversationScene_Query",
    "operationKind": "query",
    "text": "query ConversationScene_Query(\n  $conversationId: GlobalID!\n) {\n  conversation(id: $conversationId) {\n    ...ConversationScene_ConversationFragment\n  }\n}\n\nfragment ConversationScene_ConversationFragment on Conversation {\n  id\n  model\n  adapter\n  messages {\n    content\n  }\n}\n"
  }
};
})();

(node as any).hash = "775f0072633d49d7ce4a3d7ee37f9a34";

export default node;
