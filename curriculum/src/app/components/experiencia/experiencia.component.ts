import { Component,OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})

// minhas experiencias previa
export class ExperienciaComponent implements OnInit , OnDestroy {
  experiencia = [
    {
      empresa: "NTT Data",
      descricao:'Projeto vivo: criação de dashboard para melhoria continua, monitoramento de pagamentos Governo e Coorporate, suporte a operação, manutenção e melhoria do Power BI'
      ,tempo:'1 ano e 4 meses'
    },
    {
      empresa: "NTT Data",
      descricao: 'Renner: Analise de pedidos fraudulentos, contestaçao de pedidos ',
      tempo: '1 ano e 3 meses'
    },
    {
      empresa: "Polistampo",
      descricao: 'Suporte técnico e manutenção de computadores e redes, atendimento a usuários e implantação de novos sistemas.',
      tempo: '4 meses'
    },
    {
      empresa: "Craos.Net",
      descricao: 'Criação de paginas web utilizando HTML, CSS, JavaScript e React. Manutenção e reparos em computadores e laptops',
      tempo: 'Freelance'
    }

  ]
// slide
  currentSlide = 0;
  private slideInterval: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);
  }

  startCarousel() {
    this.slideInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.experiencia.length;
    }, 5000);
  }

}
