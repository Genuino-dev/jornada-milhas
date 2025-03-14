// src/app/promocoes/promocoes.component.ts
import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/types/type';
import { PROMOCOES_MOCK } from './promocaomock';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit {
  promocoes!: Promocao[];

  constructor(private service: PromocaoService) {}

  ngOnInit(): void {
    // Use o mock para definir as promoções
    this.promocoes = PROMOCOES_MOCK;

    // Se quiser manter a chamada ao serviço, pode fazer assim:
    // this.service.listar().subscribe(
    //   res => {
    //     this.promocoes = res;
    //   }
    // )
  }
}