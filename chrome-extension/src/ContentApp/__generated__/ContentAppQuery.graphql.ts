/**
 * @generated SignedSource<<75c69b1fc76daa564bc569902cb088dc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ContentAppQuery$variables = Record<PropertyKey, never>;
export type ContentAppQuery$data = {
  readonly conversations: ReadonlyArray<{
    readonly id: any;
    readonly messages: ReadonlyArray<{
      readonly content: string;
      readonly id: any;
      readonly role: string;
    }>;
  }>;
};
export type ContentAppQuery = {
  response: ContentAppQuery$data;
  variables: ContentAppQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Conversation",
    "kind": "LinkedField",
    "name": "conversations",
    "plural": true,
    "selections": [
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
      },
      (v0/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ContentAppQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ContentAppQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9dd0d278eb5ae4f74c9ec68d51bfde81",
    "id": null,
    "metadata": {},
    "name": "ContentAppQuery",
    "operationKind": "query",
    "text": "query ContentAppQuery {\n  conversations {\n    messages {\n      id\n      role\n      content\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "341745bc04ec9febd4a103dc3234f059";

export default node;
