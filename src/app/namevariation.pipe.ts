import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namevariation'
})
export class NamevariationPipe implements PipeTransform {
  transform(data: { name: string }[]): { name: string; count: number; bgColor: string }[] {
    const distinctNames: { [name: string]: number } = {};

    data.forEach((item) => {
      const name = item.name;
      distinctNames[name] = (distinctNames[name] || 0) + 1;
    });

    return Object.keys(distinctNames).map((name) => {
      const count = distinctNames[name];
      let bgColor = '';

      if (count > 0 && count < 3) {
        bgColor = 'red';
      } else if (count > 3 && count < 10) {
        bgColor = 'yellow';
      } else if (count >= 10) {
        bgColor = 'green';
      }

      return {
        name,
        count,
        bgColor
      };
    });
  }
}
