import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss'
})
export class Experiences {
  public arrayExperiences = signal([
    {
      sumary: {
        strong: "Desenvolvedor Backend",
        p: "EHM Labs | Fev 2022 - Atual"
      },
      text: `
      <p>- Criação de APIs RESTful utilizando Node.js, Express, Fastify, NestJS, Java (Spring Boot);</p>
      <p>- Utilizei RabbitMQ e Kafka para mensageria assíncrona e escalável entre serviços;</p>
      <p>- Apliquei testes automatizados com Jest, usando TDD para garantir robustez;</p>
      <p>- Modelei domínios complexos utilizando Value Objects, Use Cases e Repositórios com Clean Architecture;</p>
      `
    },
    {
      sumary:{
        strong:'Consultor de Vendas',
        p:'Experiencia anterior na área comercial | Jan 2010 - Jan 2022',
      },
      text:`
      <p>Experiência anterior desenvolvida na área comercial, onde passei pelos cargos de: Analista, Consultor, Supervisor e Gerente Comercial</p>
      <p>Este background é muito importante, pois me destaca dos demais em relação á: Trabalho em equipe, metas e entregas, Planejamento e execução.</p>
      `
    }
  ])
}
