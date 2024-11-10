import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
import useSidebarState from "../providers/SidebarStateProvider/useSidebarState";
import { Stack } from "@mui/joy";
import { sidebarWidth } from "../content";
import ContentAppSidebar from "components/shared/ContentSidebar";
import React, { memo, useEffect } from "react";
import graphql from "babel-plugin-relay/macro";
import { QueryWrapper_Content_Query } from "./__generated__/QueryWrapper_Content_Query.graphql";
import InitialScene from "scenes/InitialScene";

const Query = graphql`
  query QueryWrapper_Content_Query {
    ...InitialScene_QueryFragment
  }
`;

const QueryWrapper = (): JSX.Element => {
  const [queryReference, loadQuery] =
    useQueryLoader<QueryWrapper_Content_Query>(Query);

  useEffect(() => {
    loadQuery({});
  }, []);

  if (!queryReference) {
    return <div />;
  }

  return <Content queryReference={queryReference} />;
};

const Content = ({
  queryReference,
}: {
  queryReference: PreloadedQuery<QueryWrapper_Content_Query>;
}): JSX.Element => {
  const data = usePreloadedQuery<QueryWrapper_Content_Query>(
    Query,
    queryReference,
  );
  const { isOpen } = useSidebarState();

  return (
    <Stack
      direction="row"
      sx={{
        height: "100vh",
        position: "relative",
        backgroundColor: "white",
        maxWidth: isOpen ? sidebarWidth : 0,
      }}
    >
      <Stack
        direction="column"
        sx={{
          flex: 1,
          position: "relative",
          justifyContent: "space-between",
        }}
      >
        <InitialScene queryFragmentRef={data} />
      </Stack>
      <ContentAppSidebar />
    </Stack>
  );
};

export default memo(QueryWrapper);
