import {EmployerDTO} from "./EmployerDTO";
import {FreelancerDTO} from "./FreelancerDTO";

export class AccountDTO {
  firstName: string = "";
  lastName: string = "";
  password: string = "";
  dateOfBirth: Date = new Date();
  email: string = "";
  city: string = "";
  employerInfo: EmployerDTO = new EmployerDTO();
  freelancerInfo: FreelancerDTO = new FreelancerDTO();
}
