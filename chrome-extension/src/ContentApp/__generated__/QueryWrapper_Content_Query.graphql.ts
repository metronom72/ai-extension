/**
 * @generated SignedSource<<a898ee19c0c555b3d1254f63d2d8947a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QueryWrapper_Content_Query$variables = Record<PropertyKey, never>;
export type QueryWrapper_Content_Query$data = {
  readonly " $fragmentSpreads": FragmentRefs<"InitialScene_QueryFragment">;
};
export type QueryWrapper_Content_Query = {
  response: QueryWrapper_Content_Query$data;
  variables: QueryWrapper_Content_Query$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QueryWrapper_Content_Query",
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
    "name": "QueryWrapper_Content_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "models",
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9fb770774c0dbcd4f59a1af3e81027ea",
    "id": null,
    "metadata": {},
    "name": "QueryWrapper_Content_Query",
    "operationKind": "query",
    "text": "query QueryWrapper_Content_Query {\n  ...InitialScene_QueryFragment\n}\n\nfragment ContentForm_modelsFragment on Query {\n  models\n}\n\nfragment InitialScene_QueryFragment on Query {\n  ...ContentForm_modelsFragment\n}\n"
  }
};

(node as any).hash = "ad91397b060b1454ac8bd35596547e63";

export default node;
