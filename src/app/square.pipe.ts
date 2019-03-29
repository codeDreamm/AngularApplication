import { Pipe,PipeTransform } from "@angular/core";


@Pipe({
    name: 'squarePipe'
})

export class SquarePipe implements PipeTransform{
    transform(value:number):number{
        return (value * value);
    }
}