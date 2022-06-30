import { EmployerDTO } from "../../signup-page/Entities/EmployerDTO";

export class JobDTO {
    id: number = 0;
    name: string = "";
    description: string = "";
    salary: number = 0;
    keywords: string[] = [];
    category: string = "";
    minimumExperience: number = 0;
    employerId: number = 0;
}
