import { GraphQLTaggedNode, useQueryLoader } from "react-relay";
import { Children, cloneElement, memo, ReactElement, useEffect } from "react";

const QueryWrapper = ({
  children,
  Query,
}: {
  children: ReactElement | ReactElement[];
  Query: GraphQLTaggedNode;
}): JSX.Element => {
  const [queryReference, loadQuery] = useQueryLoader(Query);

  useEffect(() => {
    loadQuery({});
  }, []);

  if (!queryReference) {
    return <div />;
  }

  const components = Children.map(children, (child) =>
    cloneElement(child, { queryReference }),
  );

  return <>{components}</>;
};

export default memo(QueryWrapper);
