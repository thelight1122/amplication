import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApiService } from "./api.service";
import { ApiControllerBase } from "./base/api.controller.base";

@swagger.ApiTags("apis")
@common.Controller("apis")
export class ApiController extends ApiControllerBase {
  constructor(
    protected readonly service: ApiService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
