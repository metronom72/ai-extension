import { memo } from "react";
import MUIWrapper from "components/v1/MUIWrapper";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "libs/environment";
import SidebarStateProvider from "providers/SidebarStateProvider";
import SceneWrapper from "./SceneWrapper";
import CurrentConversationProvider from "providers/CurrentConversationProvider";

const ContentApp = (): JSX.Element => {
  return (
    <MUIWrapper>
      <RelayEnvironmentProvider environment={environment}>
        <CurrentConversationProvider>
          <SidebarStateProvider>
            <SceneWrapper />
          </SidebarStateProvider>
        </CurrentConversationProvider>
      </RelayEnvironmentProvider>
    </MUIWrapper>
  );
};

export default memo(ContentApp);
