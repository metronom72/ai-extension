/**
 * @generated SignedSource<<6c1654d260cfb99ec663e6e0be74e76c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AdapterEnum = "NVIDIA" | "OLLAMA" | "%future added value";
export type useCreateConversationMutation$variables = {
  adapter: AdapterEnum;
  conversationId: string;
  initialContent: string;
  model: string;
};
export type useCreateConversationMutation$data = {
  readonly startConversation: {
    readonly adapter: AdapterEnum;
    readonly id: any;
    readonly initialContent: string;
    readonly messages: ReadonlyArray<{
      readonly content: string;
      readonly id: any;
    }>;
    readonly model: string;
  };
};
export type useCreateConversationMutation = {
  response: useCreateConversationMutation$data;
  variables: useCreateConversationMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "adapter"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "conversationId"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "initialContent"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "model"
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "adapter",
        "variableName": "adapter"
      },
      {
        "kind": "Variable",
        "name": "convId",
        "variableName": "conversationId"
      },
      {
        "kind": "Variable",
        "name": "initialContext",
        "variableName": "initialContent"
      },
      {
        "kind": "Variable",
        "name": "model",
        "variableName": "model"
      }
    ],
    "concreteType": "Conversation",
    "kind": "LinkedField",
    "name": "startConversation",
    "plural": false,
    "selections": [
      (v4/*: any*/),
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
          (v4/*: any*/),
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
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useCreateConversationMutation",
    "selections": (v5/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "useCreateConversationMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "9017fe215d34701725804d39432a6446",
    "id": null,
    "metadata": {},
    "name": "useCreateConversationMutation",
    "operationKind": "mutation",
    "text": "mutation useCreateConversationMutation(\n  $conversationId: String!\n  $model: String!\n  $adapter: AdapterEnum!\n  $initialContent: String!\n) {\n  startConversation(convId: $conversationId, model: $model, adapter: $adapter, initialContext: $initialContent) {\n    id\n    model\n    adapter\n    initialContent\n    messages {\n      id\n      content\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2bf465e67d5f0c86e884a3afa8e3e693";

export default node;
