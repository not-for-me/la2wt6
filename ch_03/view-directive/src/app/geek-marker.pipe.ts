import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'geekMark' })
export class GeekMarkerPipe implements PipeTransform {
    transform(value: string, level: string): string {
        switch (level) {
            case 'A':
                return `초월자 ${value}`;
            case 'I':
                return `중급자 ${value}`;
            case 'B':
            default:
                return `초보군 ${value}`;
        }
    }
}