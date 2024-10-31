/**
 * @generated SignedSource<<64a041b18f700c94e36cabe519e00298>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type useCreateConversationMutation$variables = {
  conversationId: string;
};
export type useCreateConversationMutation$data = {
  readonly startConversation: string;
};
export type useCreateConversationMutation = {
  response: useCreateConversationMutation$data;
  variables: useCreateConversationMutation$variables;
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
        "name": "convId",
        "variableName": "conversationId"
      }
    ],
    "kind": "ScalarField",
    "name": "startConversation",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useCreateConversationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useCreateConversationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1492b12eea5f463a6f49d87dea75fbc6",
    "id": null,
    "metadata": {},
    "name": "useCreateConversationMutation",
    "operationKind": "mutation",
    "text": "mutation useCreateConversationMutation(\n  $conversationId: String!\n) {\n  startConversation(convId: $conversationId)\n}\n"
  }
};
})();

(node as any).hash = "e106d4018fba774bdab758a355736fd8";

export default node;
