import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, tap } from 'rxjs';

const client1 = {
  name: 'Angustias',
  gender: 'female',
  age: 35,
  address: 'Ottawa, Canadá'
}

const client2 = {
  name: 'Antonio',
  gender:'male',
  age: 33,
  address: 'Toronto, Canadá'
}
@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPageComponent { 
  //i18n Select, importante cambiar palabras en un texto segun genero en este caso
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient(){
    if(this.client() == client1){
      this.client.set(client2)
      return;
    }
    this.client.set(client1);
  }

  //i18n Plural
  clientsMap = signal({
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando'
  });

  clients = signal([
    'Sony',
    'Pepe',
    'Kike',
    'Lola',
    'Antonia',
    'Amparo',
    'Juan',
  ]);

  deleteClient(){
    this.clients.update( prev => prev.slice(1));
  }

  //KeyValuePipe
  profile = {
    name: 'Carmen Eva',
    age: 56,
    address: 'Las Gabias, España',
  }
  //AsyncPipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 3500);
  });

  myObservableTimer = interval (2000).pipe(
    tap((value) => console.log(tap, value))
  )

}
