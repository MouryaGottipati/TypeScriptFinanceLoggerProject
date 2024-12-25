// Lecture 17
import { HasFormatter } from "../Interfaces/HasFormatter";


export class ListTemplate{
    // When ever we create ListTemplate Object we pass in the HTMLUListElement type class/tag/id
    constructor(private container:HTMLUListElement){}

    // pos must be 'start' or 'end' strings can't be anything else
    render(item: HasFormatter,heading:string,pos:'start'|'end'){
        const li=document.createElement('li');

        const h4=document.createElement('h4');
        h4.innerText=heading;
        li.append(h4)


        const p=document.createElement('p')
        p.innerText=item.format()
        li.append(p)

        if(pos==='start'){
            this.container.prepend(li)
        }
        else{
            this.container.append(li)
        }


    }
}