import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform{
    //Cambiar de mayusculas a minusculas y al reves
    transform(value: string, upperCase: boolean = true): string {
    if (typeof value !== 'string') return value;
    return upperCase ? value.toUpperCase() : value.toLowerCase();
  }
}