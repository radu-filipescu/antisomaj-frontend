import { EmployerDTO } from "../../signup-page/Entities/EmployerDTO";

export class JobDTO {
    name: string = "";
    description: string = "";
    salary: number = 0;
    keywords: string[] = [];
    employer: EmployerDTO = new EmployerDTO();
}