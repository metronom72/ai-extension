import {
  Environment,
  Network,
  Observable,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from "relay-runtime";

export function fetchFunction(params: RequestParameters, variables: Variables) {
  const response = fetch("http://localhost:8000/graphql", {
    method: "POST",
    headers: [["QueryWrapper-Type", "application/json"]],
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  return Observable.from(response.then((data) => data.json()));
}

export function createEnvironment() {
  const network = Network.create(fetchFunction);
  const store = new Store(new RecordSource());
  return new Environment({ store, network });
}

export const environment = createEnvironment();
