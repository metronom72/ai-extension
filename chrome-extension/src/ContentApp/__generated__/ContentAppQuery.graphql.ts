/**
 * @generated SignedSource<<9c992e45e18413219d94a8ae252facb2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
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
  readonly " $fragmentSpreads": FragmentRefs<"ContentForm_modelsFragment">;
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
v1 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ContentAppQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ContentForm_modelsFragment"
      },
      (v1/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ContentAppQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "models",
        "storageKey": null
      },
      (v1/*: any*/)
    ]
  },
  "params": {
    "cacheID": "77b46d6666f43438dccfd34b15422959",
    "id": null,
    "metadata": {},
    "name": "ContentAppQuery",
    "operationKind": "query",
    "text": "query ContentAppQuery {\n  ...ContentForm_modelsFragment\n  conversations {\n    id\n    messages {\n      id\n      role\n      content\n    }\n  }\n}\n\nfragment ContentForm_modelsFragment on Query {\n  models\n}\n"
  }
};
})();

(node as any).hash = "d7cf7db7c940545b341f9df2b35e7c27";

export default node;
