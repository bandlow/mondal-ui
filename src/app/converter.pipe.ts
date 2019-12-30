import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {
  transform(array: any, id: string = 'id', parentId: string = 'pid'): any[] {
    const map = array.documentResult.documents.reduce(
      (acc, node) => ((node.subordinates = []), (acc[node.id] = node), acc),
      {}
    );
    console.log(map);
    let result = Object.keys(map).map(e => map[e])
    result.map(
        node => {
          // console.log(node);
          const tmp = node.fields['parent'];
          node.name = node.fields['title'];
          node.cssClass = 'mui-oc-ceo';
          // node.imageUrl = 'assets/employee.svg';
          node.designation = node.fields.info;
          // console.log(result)
          const osid = result.find(x => x.fields.title === tmp);
          console.log('Parent:', tmp, osid);
          console.log('PID:', node.pid);
          // console.log (map[osid]);
          // node['pid'] && map[node['pid']].subordinates.push(node), node
          osid && map[osid.id].subordinates.push(node), node;
          }
      );

      // .do( res => console.log('HTTP response:', res))
    result = result.filter(node => node.fields['parent'] === null);
    console.log(result);
    return result[0];
  }

}
