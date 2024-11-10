import ContentHeader from "components/shared/ContentHeader";
import ContentArea from "components/shared/ContentArea";
import ContentForm from "components/shared/ContentForm";
import React, { memo } from "react";
import { useFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { InitialScene_QueryFragment$key } from "./__generated__/InitialScene_QueryFragment.graphql";

const InitialScene = ({
  queryFragmentRef,
}: {
  queryFragmentRef: InitialScene_QueryFragment$key;
}): JSX.Element => {
  const data = useFragment(
    graphql`
      fragment InitialScene_QueryFragment on Query {
        ...ContentForm_modelsFragment
      }
    `,
    queryFragmentRef,
  );
  return (
    <>
      <ContentHeader />
      <ContentArea />
      <ContentForm queryFragmentRef={data} />
    </>
  );
};

export default memo(InitialScene);
