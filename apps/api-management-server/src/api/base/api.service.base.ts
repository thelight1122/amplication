/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Api as PrismaApi } from "@prisma/client";

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
}
