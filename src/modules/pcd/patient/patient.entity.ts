import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity } from "typeorm";
import { CommonEntity } from "~/common/entity/common.entity";

@Entity({ name: "pcd_patient" })
export class Patirent extends CommonEntity {}
