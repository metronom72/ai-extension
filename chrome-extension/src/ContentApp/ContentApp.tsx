import React, { memo } from "react";
import MUIWrapper from "components/v1/MUIWrapper";
import ContentArea from "components/shared/ContentArea";
import { Stack } from "@mui/joy";
import ContentHeader from "components/shared/ContentHeader";
import ContentForm from "components/shared/ContentForm";
import ContentAppSidebar from "components/shared/ContentSidebar";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "libs/environment";
import graphql from "babel-plugin-relay/macro";
import SidebarStateProvider from "../providers/SidebarStateProvider";
import useSidebarState from "providers/SidebarStateProvider/useSidebarState";
import { sidebarWidth } from "content";

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
  // const data = usePreloadedQuery(Query, queryReference);
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
        <ContentForm />
      </Stack>
      <ContentAppSidebar />
    </Stack>
  );
};

const ContentApp = () => {
  // const [queryReference, loadQuery] = useQueryLoader(Query);
  // useEffect(() => {
  //   loadQuery({});
  // }, []);

  return (
    <MUIWrapper>
      <RelayEnvironmentProvider environment={environment}>
        <SidebarStateProvider>
          <Content queryReference={null} />
        </SidebarStateProvider>
      </RelayEnvironmentProvider>
    </MUIWrapper>
  );
};

export default memo(ContentApp);
