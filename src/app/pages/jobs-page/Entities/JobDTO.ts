import { EmployerDTO } from "../../signup-page/Entities/EmployerDTO";

export class JobDTO {
    name: string = "";
    description: string = "";
    salary: number = 0;
    keywords: string[] = [];
    category: string = "";
    minimumExperience: number = 0;
    employer: EmployerDTO = new EmployerDTO();
}