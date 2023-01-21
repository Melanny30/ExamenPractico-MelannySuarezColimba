import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

    componentes: Componente[] = [

    {
      icon: 'close-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
      },
    {
      icon: 'document-text-outline',
      name: 'Input-Forms',
      redirectTo: '/input-forms'
    },

  ];
  

  constructor() {}
  ngOnInit(): void {
    
  }

}
