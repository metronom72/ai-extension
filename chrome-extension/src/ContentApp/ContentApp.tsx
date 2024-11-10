import React, { memo, useEffect } from "react";
import MUIWrapper from "components/v1/MUIWrapper";
import ContentArea from "components/shared/ContentArea";
import { Stack } from "@mui/joy";
import ContentHeader from "components/shared/ContentHeader";
import ContentForm from "components/shared/ContentForm";
import ContentAppSidebar from "components/shared/ContentSidebar";
import {
  PreloadedQuery,
  RelayEnvironmentProvider,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { environment } from "libs/environment";
import graphql from "babel-plugin-relay/macro";
import SidebarStateProvider from "../providers/SidebarStateProvider";
import useSidebarState from "providers/SidebarStateProvider/useSidebarState";
import { sidebarWidth } from "content";
import { ContentAppQuery } from "./__generated__/ContentAppQuery.graphql";

const Query = graphql`
  query ContentAppQuery {
    ...ContentForm_modelsFragment
    conversations {
      id
      messages {
        id
        role
        content
      }
      id
    }
  }
`;

const Content = ({
  queryReference,
}: {
  queryReference: PreloadedQuery<ContentAppQuery>;
}): JSX.Element => {
  const data = usePreloadedQuery<ContentAppQuery>(Query, queryReference);
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
        <ContentHeader />
        <ContentArea />
        <ContentForm queryFragmentRef={data} />
      </Stack>
      <ContentAppSidebar />
    </Stack>
  );
};

const QueryWrapper = (): JSX.Element => {
  const [queryReference, loadQuery] = useQueryLoader<ContentAppQuery>(Query);
  useEffect(() => {
    loadQuery({});
  }, []);

  if (!queryReference) {
    return <div />;
  }

  return <Content queryReference={queryReference} />;
};

const ContentApp = (): JSX.Element => {
  return (
    <MUIWrapper>
      <RelayEnvironmentProvider environment={environment}>
        <SidebarStateProvider>
          <QueryWrapper />
        </SidebarStateProvider>
      </RelayEnvironmentProvider>
    </MUIWrapper>
  );
};

export default memo(ContentApp);
