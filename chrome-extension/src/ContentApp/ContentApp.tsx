import React, { memo } from "react";
import MUIWrapper from "components/v1/MUIWrapper";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "libs/environment";
import SidebarStateProvider from "providers/SidebarStateProvider";
import QueryWrapper from "./QueryWrapper";

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
