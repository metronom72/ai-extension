import React, { memo, useEffect } from "react";
import MUIWrapper from "components/v1/MUIWrapper";
import ContentArea from "components/shared/ContentArea";
import { Stack } from "@mui/joy";
import ContentHeader from "components/shared/ContentHeader";
import ContentForm from "components/shared/ContentForm";
import ContentAppSidebar from "components/shared/ContentSidebar";
import {
  RelayEnvironmentProvider,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { environment } from "libs/environment";
import graphql from "babel-plugin-relay/macro";
import GlobalStateProvider from "providers/GlobalStateProvider";

const Query = graphql`
  query ContentAppQuery {
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

const Content = ({ queryReference }: { queryReference: any }) => {
  const data = usePreloadedQuery(Query, queryReference);

  console.log(data);

  return (
    <Stack
      direction="row"
      sx={{
        height: "100vh",
        position: "relative",
        backgroundColor: "white",
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
        <ContentForm />
      </Stack>
      <ContentAppSidebar />
    </Stack>
  );
};

const ContentApp = () => {
  const [queryReference, loadQuery, disposeQuery] = useQueryLoader(Query);
  useEffect(() => {
    loadQuery({});
  }, []);

  console.log(queryReference, loadQuery, disposeQuery);
  return (
    <MUIWrapper>
      <RelayEnvironmentProvider environment={environment}>
        <GlobalStateProvider>
          <Content queryReference={queryReference} />
        </GlobalStateProvider>
      </RelayEnvironmentProvider>
    </MUIWrapper>
  );
};

export default memo(ContentApp);
