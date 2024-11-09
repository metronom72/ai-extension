/**
 * @generated SignedSource<<9172bc0f2264340442ee43291b11c5dc>>
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
      (v0/*: any*/),
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
    "cacheID": "b4ac40ed680fe77b7390c6f3ee46a7de",
    "id": null,
    "metadata": {},
    "name": "ContentAppQuery",
    "operationKind": "query",
    "text": "query ContentAppQuery {\n  conversations {\n    id\n    messages {\n      id\n      role\n      content\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ba62926ec0c37e9616155b760b39712e";

export default node;
