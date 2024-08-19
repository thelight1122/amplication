/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ServiceService } from "../service.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ServiceCreateInput } from "./ServiceCreateInput";
import { Service } from "./Service";
import { ServiceFindManyArgs } from "./ServiceFindManyArgs";
import { ServiceWhereUniqueInput } from "./ServiceWhereUniqueInput";
import { ServiceUpdateInput } from "./ServiceUpdateInput";
import { ApiFindManyArgs } from "../../api/base/ApiFindManyArgs";
import { Api } from "../../api/base/Api";
import { ApiWhereUniqueInput } from "../../api/base/ApiWhereUniqueInput";
import { UpdateServiceArgs } from "./UpdateServiceArgs";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ServiceControllerBase {
  constructor(
    protected readonly service: ServiceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Service })
  @nestAccessControl.UseRoles({
    resource: "Service",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createService(
    @common.Body() data: ServiceCreateInput
  ): Promise<Service> {
    return await this.service.createService({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Service] })
  @ApiNestedQuery(ServiceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Service",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async services(@common.Req() request: Request): Promise<Service[]> {
    const args = plainToClass(ServiceFindManyArgs, request.query);
    return this.service.services({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Service })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Service",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async service(
    @common.Param() params: ServiceWhereUniqueInput
  ): Promise<Service | null> {
    const result = await this.service.service({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Service })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Service",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateService(
    @common.Param() params: ServiceWhereUniqueInput,
    @common.Body() data: ServiceUpdateInput
  ): Promise<Service | null> {
    try {
      return await this.service.updateService({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Service })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Service",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteService(
    @common.Param() params: ServiceWhereUniqueInput
  ): Promise<Service | null> {
    try {
      return await this.service.deleteService({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/apis")
  @ApiNestedQuery(ApiFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Api",
    action: "read",
    possession: "any",
  })
  async findApis(
    @common.Req() request: Request,
    @common.Param() params: ServiceWhereUniqueInput
  ): Promise<Api[]> {
    const query = plainToClass(ApiFindManyArgs, request.query);
    const results = await this.service.findApis(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        endpoint: true,
        id: true,
        method: true,

        service: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/apis")
  @nestAccessControl.UseRoles({
    resource: "Service",
    action: "update",
    possession: "any",
  })
  async connectApis(
    @common.Param() params: ServiceWhereUniqueInput,
    @common.Body() body: ApiWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      apis: {
        connect: body,
      },
    };
    await this.service.updateService({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/apis")
  @nestAccessControl.UseRoles({
    resource: "Service",
    action: "update",
    possession: "any",
  })
  async updateApis(
    @common.Param() params: ServiceWhereUniqueInput,
    @common.Body() body: ApiWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      apis: {
        set: body,
      },
    };
    await this.service.updateService({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/apis")
  @nestAccessControl.UseRoles({
    resource: "Service",
    action: "update",
    possession: "any",
  })
  async disconnectApis(
    @common.Param() params: ServiceWhereUniqueInput,
    @common.Body() body: ApiWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      apis: {
        disconnect: body,
      },
    };
    await this.service.updateService({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Post("/services")
  @swagger.ApiOkResponse({
    type: Service,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CreateNewService(
    @common.Body()
    body: UpdateServiceArgs
  ): Promise<Service> {
    return this.service.CreateNewService(body);
  }

  @common.Get("/services")
  @swagger.ApiOkResponse({
    type: Service,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetAllServices(
    @common.Body()
    body: UpdateServiceArgs
  ): Promise<Service[]> {
    return this.service.GetAllServices(body);
  }

  @common.Get("/services/:id")
  @swagger.ApiOkResponse({
    type: Service,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetServiceById(
    @common.Body()
    body: UpdateServiceArgs
  ): Promise<Service> {
    return this.service.GetServiceById(body);
  }

  @common.Delete("/services/:id")
  @swagger.ApiOkResponse({
    type: Service,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async RemoveService(
    @common.Body()
    body: UpdateServiceArgs
  ): Promise<Service> {
    return this.service.RemoveService(body);
  }

  @common.Put("/services/:id")
  @swagger.ApiOkResponse({
    type: Service,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async UpdateExistingService(
    @common.Body()
    body: UpdateServiceArgs
  ): Promise<Service> {
    return this.service.UpdateExistingService(body);
  }
}
