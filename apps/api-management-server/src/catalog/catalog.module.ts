import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CatalogModuleBase } from "./base/catalog.module.base";
import { CatalogService } from "./catalog.service";
import { CatalogController } from "./catalog.controller";
import { CatalogResolver } from "./catalog.resolver";

@Module({
  imports: [CatalogModuleBase, forwardRef(() => AuthModule)],
  controllers: [CatalogController],
  providers: [CatalogService, CatalogResolver],
  exports: [CatalogService],
})
export class CatalogModule {}
