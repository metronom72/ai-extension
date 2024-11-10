/**
 * @generated SignedSource<<2b2bc1d1593eadb7cc5186c497981c18>>
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
  model: string;
};
export type useCreateConversationMutation$data = {
  readonly startConversation: {
    readonly adapter: AdapterEnum;
    readonly id: any;
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
  "name": "model"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
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
        "name": "model",
        "variableName": "model"
      }
    ],
    "concreteType": "Conversation",
    "kind": "LinkedField",
    "name": "startConversation",
    "plural": false,
    "selections": [
      (v3/*: any*/),
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
          (v3/*: any*/),
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
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useCreateConversationMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "useCreateConversationMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "e5f0cf29dd5b2452814369ded3e458d0",
    "id": null,
    "metadata": {},
    "name": "useCreateConversationMutation",
    "operationKind": "mutation",
    "text": "mutation useCreateConversationMutation(\n  $conversationId: String!\n  $model: String!\n  $adapter: AdapterEnum!\n) {\n  startConversation(convId: $conversationId, model: $model, adapter: $adapter) {\n    id\n    model\n    adapter\n    messages {\n      id\n      content\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ab84b92f28849c76f5c2b73f95fba243";

export default node;
