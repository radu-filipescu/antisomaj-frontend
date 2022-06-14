import {EmployerDTO} from "./EmployerDTO";
import {FreelancerDTO} from "./FreelancerDTO";

export class AccountDTO {
  name: string = "";
  surname: string = "";
  dateOfBirth: Date = new Date();
  email: string = "";
  city: string = "";
  employerInfo: EmployerDTO = new EmployerDTO();
  freelancerInfo: FreelancerDTO = new FreelancerDTO();
}