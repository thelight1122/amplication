import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CatalogService } from "./catalog.service";
import { CatalogControllerBase } from "./base/catalog.controller.base";

@swagger.ApiTags("catalogs")
@common.Controller("catalogs")
export class CatalogController extends CatalogControllerBase {
  constructor(
    protected readonly service: CatalogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
