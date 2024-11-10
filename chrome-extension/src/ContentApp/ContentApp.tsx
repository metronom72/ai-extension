import React, { memo } from "react";
import MUIWrapper from "components/v1/MUIWrapper";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "libs/environment";
import SidebarStateProvider from "providers/SidebarStateProvider";
import SceneWrapper from "./SceneWrapper";

const ContentApp = (): JSX.Element => {
  return (
    <MUIWrapper>
      <RelayEnvironmentProvider environment={environment}>
        <SidebarStateProvider>
          <SceneWrapper />
        </SidebarStateProvider>
      </RelayEnvironmentProvider>
    </MUIWrapper>
  );
};

export default memo(ContentApp);
