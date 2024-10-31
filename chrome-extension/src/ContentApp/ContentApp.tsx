import React, { memo } from "react";
import MUIWrapper from "components/v1/MUIWrapper";
import ContentArea from "components/shared/ContentArea";
import { Stack } from "@mui/joy";
import ContentHeader from "components/shared/ContentHeader";
import ContentForm from "components/shared/ContentForm";
import ContentAppSidebar from "components/shared/ContentSidebar";
import { RelayEnvironmentProvider, useLazyLoadQuery } from "react-relay";
import { environment } from "libs/environment";
import graphql from "babel-plugin-relay/macro";

const Query = graphql`
  query ContentAppQuery {
    conversations {
      messages {
        id
        role
        content
      }
      id
    }
  }
`;

const Content = () => {
  const query = useLazyLoadQuery(Query, {}, {});

  console.log(query);
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
  return (
    <MUIWrapper>
      <RelayEnvironmentProvider environment={environment}>
        <Content />
      </RelayEnvironmentProvider>
    </MUIWrapper>
  );
};

export default memo(ContentApp);
