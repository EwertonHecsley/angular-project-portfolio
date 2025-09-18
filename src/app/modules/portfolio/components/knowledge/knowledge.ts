import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.scss'
})
export class Knowledge {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src:'assets/icon/knowledge/node.svg',
      alt:'Icone de conhecimento de Node.js'
    },
    {
      src:'assets/icon/knowledge/java.svg',
      alt:'Icone de conhecimento de Java'
    },
    {
      src:'assets/icon/knowledge/html.svg',
      alt:'Icone de conhecimento de HTML'
    },
    {
      src:'assets/icon/knowledge/css.svg',
      alt:'Icone de conhecimento de CSS'
    },
    {
      src:'assets/icon/knowledge/sass.svg',
      alt:'Icone de conhecimento de Sass'
    },
    {
      src:'assets/icon/knowledge/angular.svg',
      alt:'Icone de conhecimento de Angular'
    }
  ])
}
