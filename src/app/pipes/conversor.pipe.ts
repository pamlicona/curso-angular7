import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conversor' })
export class ConversorPipe implements PipeTransform {
    transform(value1, value2) {
        let result = parseInt(value1) * parseInt(value2);
        return `La multiplicación es ${result}`;
    }
}