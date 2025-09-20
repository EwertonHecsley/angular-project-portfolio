import { Component, inject, signal } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPainelClass } from '../../enum/EDialogPainelClass.enum';
import { IProjects } from '../../interface/IProjects.interface';
import { DialogProjects } from '../dialog/dialog-projects/dialog-projects';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  #dialog = inject(MatDialog);

  public arrayProjects = signal([
    {
      src: 'assets/img/productService.jpeg',
      alt: 'Imagem api de servicos e produtos',
      title: 'API Product Service',
      width: '100px',
      height: '51px',
      description: `<p>Microserviço para gestão de produtos, seguindo DDD e Clean Architecture, com logs estruturados e testes unitários.</p>`,
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://github.com/EwertonHecsley/node-projetc-sercive-rabbitmq'
        }
      ]
    },
    {
      src: 'assets/img/financial.jpeg',
      alt: 'Imagem api de servico de transacoes financeiras',
      title: 'Financial Transactions',
      width: '100px',
      height: '51px',
      description: `<p>API REST para controle de transações financeiras com autenticação JWT, categorização e extração de saldo.</p>`,
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://github.com/EwertonHecsley/node-sistema-financial-transactions'
        }
      ]
    },
    {
      src: 'assets/img/doctor.jpeg',
      alt: 'Imagem api de IA doctor',
      title: 'MedAssist',
      width: '100px',
      height: '51px',
      description: `<p>API inteligente que transforma descrições clínicas simples em laudos técnicos usando IA generativa.</p>`,
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://github.com/EwertonHecsley/node-api-medAssist'
        }
      ]
    }
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjects,{
      data,
      panelClass:EDialogPainelClass.PROJECTS
    });
  }
}
