/**
 * @generated SignedSource<<cb96ab8dda5bc1322d9cb1edc4834541>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InitialScene_QueryFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ContentForm_modelsFragment">;
  readonly " $fragmentType": "InitialScene_QueryFragment";
};
export type InitialScene_QueryFragment$key = {
  readonly " $data"?: InitialScene_QueryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"InitialScene_QueryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InitialScene_QueryFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ContentForm_modelsFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "2d3137cf2705e8f03531aea90ef76b64";

export default node;
