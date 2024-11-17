import { GraphQLTaggedNode, useQueryLoader } from "react-relay";
import { Children, cloneElement, memo, ReactElement, useEffect } from "react";

/**
 * A wrapper component for loading and managing GraphQL queries using React Relay.
 *
 * @param {object} props - The props for the QueryWrapper component.
 * @param {ReactElement | ReactElement[]} props.children - The child component(s) that will receive the query reference and additional props.
 * @param {GraphQLTaggedNode} props.Query - A Relay GraphQL tagged node representing the query to be executed.
 * @param {Record<string, any>} [props] - Additional props to be passed to `loadQuery` and the child component(s).
 *
 * @returns {JSX.Element} - A wrapper that manages query loading and passes data to child components.
 *
 * @example
 * ```tsx
 * import { QueryWrapper } from './QueryWrapper';
 * import { MyQuery } from './queries/MyQuery';
 * import UserComponent from './UserComponent';
 *
 * const App = () => {
 *   return (
 *     <QueryWrapper Query={MyQuery} id="123">
 *       <UserComponent />
 *     </QueryWrapper>
 *   );
 * };
 *
 * export default App;
 * ```
 */
const QueryWrapper = ({
  children,
  Query,
  ...props
}: {
  children: ReactElement | ReactElement[];
  Query: GraphQLTaggedNode;
} & Record<string, any>): JSX.Element => {
  const [queryReference, loadQuery] = useQueryLoader(Query);

  useEffect(() => {
    loadQuery({ ...props });
  }, []);

  if (!queryReference) {
    return <div>Loading...</div>;
  }

  const components = Children.map(children, (child) =>
    cloneElement(child, { queryReference, ...props }),
  );

  return <>{components}</>;
};

export default memo(QueryWrapper);
