import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApiModuleBase } from "./base/api.module.base";
import { ApiService } from "./api.service";
import { ApiController } from "./api.controller";
import { ApiResolver } from "./api.resolver";

@Module({
  imports: [ApiModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApiController],
  providers: [ApiService, ApiResolver],
  exports: [ApiService],
})
export class ApiModule {}
