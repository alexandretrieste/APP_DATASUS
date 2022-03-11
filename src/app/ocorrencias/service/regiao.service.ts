import { Injectable } from '@angular/core';
import { Regiao } from '../model/regiao';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {

  constructor() { }

  listRegioes(): Regiao[] {
    //mock para teste, será retirado no refactoring
    return[{
      id: 1,
      regiao:'norte',
      total_exames: 1564

    }];
  }
}
