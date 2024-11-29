/**
 * @generated SignedSource<<fda62e88c6a3afe2639b0835e646e3d7>>
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
  readonly " $fragmentSpreads": FragmentRefs<"ContentForm_modelsFragment">;
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
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "model",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "adapter",
  "storageKey": null
};
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
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ContentForm_modelsFragment"
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
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
              (v2/*: any*/),
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
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Model",
        "kind": "LinkedField",
        "name": "models",
        "plural": true,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "941c546097d50f0ed8fcb5204c5e60ad",
    "id": null,
    "metadata": {},
    "name": "ConversationScene_Query",
    "operationKind": "query",
    "text": "query ConversationScene_Query(\n  $conversationId: GlobalID!\n) {\n  conversation(id: $conversationId) {\n    ...ConversationScene_ConversationFragment\n  }\n  ...ContentForm_modelsFragment\n}\n\nfragment ContentForm_modelsFragment on Query {\n  models {\n    model\n    adapter\n  }\n}\n\nfragment ConversationScene_ConversationFragment on Conversation {\n  id\n  model\n  adapter\n  initialContent\n  messages {\n    id\n    role\n    content\n  }\n}\n"
  }
};
})();

(node as any).hash = "6ed8a74615cec837c5e202f46e186df9";

export default node;
