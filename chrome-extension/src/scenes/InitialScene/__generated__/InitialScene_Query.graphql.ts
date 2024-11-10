/**
 * @generated SignedSource<<2b6851cd01223a71fadefc4ec9375a8f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InitialScene_Query$variables = Record<PropertyKey, never>;
export type InitialScene_Query$data = {
  readonly " $fragmentSpreads": FragmentRefs<"InitialScene_QueryFragment">;
};
export type InitialScene_Query = {
  response: InitialScene_Query$data;
  variables: InitialScene_Query$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "InitialScene_Query",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "InitialScene_QueryFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "InitialScene_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "models",
        "storageKey": null
      },
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
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7b7f4a90934273d40e16b94c290735aa",
    "id": null,
    "metadata": {},
    "name": "InitialScene_Query",
    "operationKind": "query",
    "text": "query InitialScene_Query {\n  ...InitialScene_QueryFragment\n}\n\nfragment ContentForm_modelsFragment on Query {\n  models\n}\n\nfragment InitialScene_QueryFragment on Query {\n  ...ContentForm_modelsFragment\n  conversations {\n    id\n  }\n}\n"
  }
};

(node as any).hash = "abea87969efdc93c09a4cfc21547d605";

export default node;
