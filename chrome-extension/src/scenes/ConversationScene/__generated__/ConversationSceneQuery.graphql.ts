/**
 * @generated SignedSource<<5f4ca2b692dacbc6ab38c98241d5dd6f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ConversationSceneQuery$variables = {
  conversationId: string;
};
export type ConversationSceneQuery$data = {
  readonly conversation: {
    readonly id: any;
  } | null | undefined;
};
export type ConversationSceneQuery = {
  response: ConversationSceneQuery$data;
  variables: ConversationSceneQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "conversationId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "conversationId"
      }
    ],
    "concreteType": "Conversation",
    "kind": "LinkedField",
    "name": "conversation",
    "plural": false,
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ConversationSceneQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ConversationSceneQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a0c2b464447ef502796c68c9025fff7f",
    "id": null,
    "metadata": {},
    "name": "ConversationSceneQuery",
    "operationKind": "query",
    "text": "query ConversationSceneQuery(\n  $conversationId: ID!\n) {\n  conversation(id: $conversationId) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "a224b0cada18cf619dd25272b2213241";

export default node;
