import { AppInfo } from "@amplication/code-gen-types";
import { createDataService } from "../create-data-service";
import { EnumResourceType } from "../models";
import { appInfo, MODULE_EXTENSIONS_TO_SNAPSHOT } from "./appInfo";
import entities from "./entities";
import { installedPlugins } from "./pluginInstallation";
import roles from "./roles";
import { MockedLogger } from "@amplication/util/logging/test-utils";
import { AMPLICATION_MODULES } from "../generate-code";
import { join } from "path";

const newAppInfo: AppInfo = {
  ...appInfo,
  settings: {
    ...appInfo.settings,
    serverSettings: {
      generateGraphQL: true,
      generateRestApi: true,
      generateServer: true,
      serverPath: "test",
    },
    adminUISettings: {
      generateAdminUI: true,
      adminUIPath: "test-ui",
    },
  },
};

jest.setTimeout(100000);

describe("createDataService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("when server and admin are configured with custom path", () => {
    test("creates app as expected", async () => {
      const modules = await createDataService(
        {
          entities,
          buildId: "example_build_id",
          roles,
          resourceInfo: newAppInfo,
          resourceType: EnumResourceType.Service,
          pluginInstallations: installedPlugins,
        },
        MockedLogger,
        join(__dirname, "../../", AMPLICATION_MODULES)
      );

      const modulesToSnapshot = modules
        .modules()
        .filter((module) =>
          MODULE_EXTENSIONS_TO_SNAPSHOT.some((extension) =>
            module.path.endsWith(extension)
          )
        );
      const pathToCode = Object.fromEntries(
        modulesToSnapshot.map((module) => [module.path, module.code])
      );
      expect(pathToCode).toMatchSnapshot();
    });
  });
});
