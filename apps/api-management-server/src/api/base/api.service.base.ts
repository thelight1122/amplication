/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Api as PrismaApi,
  Service as PrismaService,
} from "@prisma/client";
import { CatalogCreateInput } from "../../catalog/base/CatalogCreateInput";
import { Catalog } from "../../catalog/base/Catalog";
import { CatalogFindManyArgs } from "../../catalog/base/CatalogFindManyArgs";
import { CatalogFindUniqueArgs } from "../../catalog/base/CatalogFindUniqueArgs";
import { CatalogWhereUniqueInput } from "../../catalog/base/CatalogWhereUniqueInput";
import { CatalogUpdateInput } from "../../catalog/base/CatalogUpdateInput";

export class ApiServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ApiCountArgs, "select">): Promise<number> {
    return this.prisma.api.count(args);
  }

  async apis(args: Prisma.ApiFindManyArgs): Promise<PrismaApi[]> {
    return this.prisma.api.findMany(args);
  }
  async api(args: Prisma.ApiFindUniqueArgs): Promise<PrismaApi | null> {
    return this.prisma.api.findUnique(args);
  }
  async createApi(args: Prisma.ApiCreateArgs): Promise<PrismaApi> {
    return this.prisma.api.create(args);
  }
  async updateApi(args: Prisma.ApiUpdateArgs): Promise<PrismaApi> {
    return this.prisma.api.update(args);
  }
  async deleteApi(args: Prisma.ApiDeleteArgs): Promise<PrismaApi> {
    return this.prisma.api.delete(args);
  }

  async getService(parentId: string): Promise<PrismaService | null> {
    return this.prisma.api
      .findUnique({
        where: { id: parentId },
      })
      .service();
  }
  async CreateNewApi(args: CatalogCreateInput): Promise<Catalog> {
    throw new Error("Not implemented");
  }
  async GetAllApIs(args: CatalogFindManyArgs): Promise<Catalog[]> {
    throw new Error("Not implemented");
  }
  async GetApiById(args: CatalogFindUniqueArgs): Promise<Catalog> {
    throw new Error("Not implemented");
  }
  async RemoveApi(args: CatalogWhereUniqueInput): Promise<Catalog> {
    throw new Error("Not implemented");
  }
  async UpdateExistingApi(args: CatalogUpdateInput): Promise<Catalog> {
    throw new Error("Not implemented");
  }
}
