# Angular Portfólio

Este projeto é um portfólio desenvolvido com [Angular](https://angular.dev/) e [Angular Material](https://material.angular.dev/), apresentando experiências, conhecimentos, projetos e informações de contato de Ewerton Hecsley.

## Funcionalidades

- Apresentação de perfil profissional
- Listagem de conhecimentos técnicos
- Experiências profissionais detalhadas
- Projetos desenvolvidos com links para repositórios
- Download do currículo em PDF
- Links para contato via WhatsApp, e-mail, LinkedIn e Github

## Estrutura do Projeto

```
src/
  app/
    modules/
      portfolio/
        components/
        enum/
        interface/
        pages/
    app.config.ts
    app.routes.ts
    app.ts
  scss/
    base/
    components/
    layout/
    theme/
  index.html
  main.ts
  styles.scss
public/
  assets/
    icon/
    img/
    pdf/
```

## Como executar

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm start
```

Acesse [http://localhost:4200](http://localhost:4200) no navegador.

### Build para produção

```bash
npm run build
```

Os arquivos finais estarão em `dist/`.

### Testes

```bash
npm test
```

## Personalização

- Os estilos estão em SCSS, organizados por base, componentes, layout e tema.
- Os dados de experiências, conhecimentos e projetos podem ser alterados nos arquivos correspondentes em `src/app/modules/portfolio/components/`.

## Tecnologias utilizadas

- Angular 20+
- Angular Material
- SCSS
- TypeScript

## Contato

- [LinkedIn](https://www.linkedin.com/in/ewerton-hecsley-8a613992/)
- [Github](https://github.com/EwertonHecsley)
- WhatsApp: (83) 99850-7503
- E-mail: ewerton.martinscomercial@gmail.com

---

Projeto criado por Ewerton Hecsley.
