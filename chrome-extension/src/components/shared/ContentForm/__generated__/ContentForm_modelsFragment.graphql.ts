/**
 * @generated SignedSource<<3551123e43178e7f2d6e646220ae087c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContentForm_modelsFragment$data = {
  readonly models: ReadonlyArray<string>;
  readonly " $fragmentType": "ContentForm_modelsFragment";
};
export type ContentForm_modelsFragment$key = {
  readonly " $data"?: ContentForm_modelsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContentForm_modelsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContentForm_modelsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "models",
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "506da32bf195d00fab97d10fc7dc2d5c";

export default node;
