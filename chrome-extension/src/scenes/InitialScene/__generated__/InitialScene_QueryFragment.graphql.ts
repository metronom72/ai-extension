/**
 * @generated SignedSource<<2f33afb996267b86de17aeca5a09b4e5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InitialScene_QueryFragment$data = {
  readonly conversations: ReadonlyArray<{
    readonly id: any;
  }>;
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
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "8375432ccacad02f11e9162de061e9c7";

export default node;
