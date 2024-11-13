import { GraphQLTaggedNode, useQueryLoader } from "react-relay";
import { Children, cloneElement, memo, ReactElement, useEffect } from "react";

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
    return <div />;
  }

  const components = Children.map(children, (child) =>
    cloneElement(child, { queryReference, ...props }),
  );

  return <>{components}</>;
};

export default memo(QueryWrapper);
