/**
 * @generated SignedSource<<b7665e9ae2cf6939b683ac892d8dc49f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AdapterEnum = "NVIDIA" | "OLLAMA" | "%future added value";
export type QueryModel = {
  format?: string | null | undefined;
  model?: string;
  prompt: string;
};
export type useAddMessageMutation$variables = {
  conversationId: string;
  query: QueryModel;
};
export type useAddMessageMutation$data = {
  readonly addMessage: {
    readonly adapter: AdapterEnum;
    readonly id: any;
    readonly messages: ReadonlyArray<{
      readonly content: string;
      readonly id: any;
    }>;
    readonly model: string;
  };
};
export type useAddMessageMutation = {
  response: useAddMessageMutation$data;
  variables: useAddMessageMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "conversationId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "query"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "convId",
        "variableName": "conversationId"
      },
      {
        "kind": "Variable",
        "name": "query",
        "variableName": "query"
      }
    ],
    "concreteType": "Conversation",
    "kind": "LinkedField",
    "name": "addMessage",
    "plural": false,
    "selections": [
      (v1/*: any*/),
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
          (v1/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useAddMessageMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useAddMessageMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "f612b3b682fe161981265cfcb882f9f2",
    "id": null,
    "metadata": {},
    "name": "useAddMessageMutation",
    "operationKind": "mutation",
    "text": "mutation useAddMessageMutation(\n  $conversationId: String!\n  $query: QueryModel!\n) {\n  addMessage(convId: $conversationId, query: $query) {\n    id\n    model\n    adapter\n    messages {\n      id\n      content\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d176f1ce951a94b4a2021e428aa7e7d7";

export default node;
