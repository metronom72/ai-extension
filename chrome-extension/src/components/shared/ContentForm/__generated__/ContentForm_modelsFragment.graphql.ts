/**
 * @generated SignedSource<<cf5853f5d3a0a7dea29d3eee89d141f6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type AdapterEnum = "NVIDIA" | "OLLAMA" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ContentForm_modelsFragment$data = {
  readonly models: ReadonlyArray<{
    readonly adapter: AdapterEnum;
    readonly model: string;
  }>;
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
      "concreteType": "Model",
      "kind": "LinkedField",
      "name": "models",
      "plural": true,
      "selections": [
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "8e16025196843330d7a2f01c6836d940";

export default node;
