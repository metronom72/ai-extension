import ContentHeader from "components/shared/ContentHeader";
import ContentArea from "components/shared/ContentArea";
import ContentForm from "components/shared/ContentForm";
import { PreloadedQuery, useFragment, usePreloadedQuery } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { InitialScene_Query } from "./__generated__/InitialScene_Query.graphql";
import QueryWrapper from "ContentApp/QueryWrapper";
import { InitialScene_QueryFragment$key } from "./__generated__/InitialScene_QueryFragment.graphql";

const Query = graphql`
  query InitialScene_Query {
    ...InitialScene_QueryFragment
  }
`;

const InitialScene = ({
  queryReference,
}: {
  queryReference: PreloadedQuery<InitialScene_Query>;
}): JSX.Element => {
  const query = usePreloadedQuery<InitialScene_Query>(Query, queryReference);
  const data = useFragment<InitialScene_QueryFragment$key>(
    graphql`
      fragment InitialScene_QueryFragment on Query {
        ...ContentForm_modelsFragment
        conversations {
          id
        }
      }
    `,
    query,
  );
  return (
    <>
      <ContentHeader />
      <ContentArea />
      <ContentForm queryFragmentRef={data} />
    </>
  );
};

const WrappedScene = () => {
  return (
    <QueryWrapper Query={Query}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/*  @ts-ignore */}
      <InitialScene />
    </QueryWrapper>
  );
};

export default WrappedScene;
