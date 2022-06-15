import { Component, OnInit } from '@angular/core';
import {AccountDTO} from "../signup-page/Entities/AccountDTO";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../freelancers-page/service/user.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  userId: number = -1;
  userProfile: AccountDTO = new AccountDTO();

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {
    // get user to be displayed based on route
    this.route.queryParams.subscribe(params => {
      this.userId = params['id'];
    });

    // fetch that user
    this.userService.getUserById(this.userId)
      .subscribe( data => {
        this.userProfile = data;
      });

    this.userProfile.firstName = "Dragan";
    this.userProfile.lastName = "Mihaita";
    this.userProfile.city = "Balotesti";
    this.userProfile.email = "sobelelesti@mata.com";
    this.userProfile.dateOfBirth = new Date();


    this.userProfile.freelancerInfo.accountId = 1;
    this.userProfile.freelancerInfo.cvLink = "pornhub.md";
    this.userProfile.freelancerInfo.education = "universitatea de arte si meserii zimnicea";
    this.userProfile.freelancerInfo.description = "buna eu sunt conformitate cu prevederile Regulamentului de functionare a Marii Adunari Nationale, tovarasul Manea Manescu, membru al Comitetului Politic Executiv al Comitetului Central al Partidului Comunist Roman, prim-vicepresedinte al Consiliului National al Frontului Democratiei si Unitatii Socialiste, a propus realegerea in inalta functie de Presedinte al Republicii Socialiste Romania a tovarasului Nicolae Ceausescu, secretar general al Partidului Comunist Roman, presedintele Frontului Democratiei si Unitatii Socialiste, chezasie sigura a transpunerii in viata a maretului program de faurire a societatii socialiste multilateral dezvoltate si de inaintare a Romaniei spre comunism.\n" +
      "\n" +
      "Dind expresie vointei unanime si entuziaste a intregului popor, Marea Adunare Nationala a reales, intr-o atmosfera de puternica vibratie patriotica, cu unanimitate de voturi, pe tovarasul Nicolae Ceausescu, cel mai vrednic si iubit fiu al poporului roman, in suprema functie de Presedinte al Republicii Socialiste Romania.\n" +
      "\n" +
      "Presedintele Marii Adunari Nationale a inminat tovarasului Nicolae Ceausescu insemnele prezidentiale si de comandant suprem al fortelor armate.\n" +
      "\n" +
      "Tovarasul Nicolae Ceausescu, Presedintele Republicii Socialiste Romania, a depus in fata Marii Adunari Nationale juramintul prevazut in articolul 73 din Constitutie."

    this.userProfile.employerInfo.accountId = 1;
    this.userProfile.employerInfo.name = "santierul cucu";
    this.userProfile.employerInfo.description = "Videochatul nu cunoaște criza! (Merge cel mai bine pe timp de criza financiară)\n" +
      "\n" +
      "Deschidem studiouri de videochat la cheie!\n" +
      "Oferim consultanta, de la a la z plus aparatura tehnica și pașii juridici pentu legalitate, fiscalitate pentru una dintre cele mai prospere afacere din România!\n" +
      "\n" +
      "In România exista peste 5000 de studiouri de videochat in care lucrează peste 100 de mii de de persoane!\n" +
      "Afacerea este perfect legală atata timp cât se plătesc taxele aferente!\n" +
      "\n" +
      "Puteți accesa pe google cele mai mari site-uri internaționale de videochat sa vedeți ce trafic de membrii imens au și sa va faceți o idee despre afacere!\n" +
      "\n" +
      "Enumeram cateva dintre ele:\n" +
      "\n" +
      "Livejasmin. Com-site de privat(membrul accesează o discuție privată cu modelul,plătită la minut)\n" +
      "Chaturbate. Com-(modelele primesc tipsuri in free(tokens) plus sesiuni private cu membrii)\n" +
      "MyFreeCams. Com-(modelele primesc tipsuri in free(tokens) plus sesiuni private cu membrii!\n" +
      "Stripchat. Com-(modelele primesc tipsuri in free(tokens) plus sesiuni private cu membrii!\n" +
      "Streamate. Com-(site de privat)\n" +
      "Adultwork. Com-(site de privat)\n" +
      "Flirt4free. Com-(site de privat)\n" +
      "\n" +
      "Puteți accesa site-urile mai sus menționate sa va faceti o idee despre ce înseamnă aceasta industrie de live cam!\n" +
      "\n" +
      "Clienții care au abonamente la site-uri sunt in mare parte din Statele Unite,Canada, Australia, Europa de vest, etc..\n" +
      "\n" +
      "Puteți caută pe YouTube sau google foarte multe detalii despre afacere, scriind afacere videochat!\n" +
      "\n" +
      "Modelele sunt entertaineri online, industria nu mai este de mult o industrie exclusiv adult, se poate compara foarte bine cu vlogerii care Creează conținut pe YouTube, doar ca la un nivel worldwide!\n" +
      "In acest business vindem către pietele externe iar clienții sunt exclusiv din străinătate!\n" +
      "\n" +
      "Un studio de videochat cu 3 posturi de lucru cu 6 angajate produce in medie un venit de 15.000-20.000 dolari , media fiind de 3000-4000 dolari/model lunar!\n" +
      "Profitul se împarte de obicei in mod egal între studio și modele! 50-50\n";
      this.userProfile.employerInfo.location = "Grozavesti pula beletsit";

  }

}
