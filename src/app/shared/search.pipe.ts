import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'search',
    pure: false
})
export class SearchPipe implements PipeTransform {
    transform(data: any[], searchTerm: string): any[] {
        searchTerm = searchTerm.toUpperCase();
        return data.filter(item => {
            return item.stateName.toUpperCase().indexOf(searchTerm) !== -1
        });
    }
}
