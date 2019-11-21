import { Component, OnInit } from '@angular/core';

@Component ({
    selector: 'app-loader',
    template: `
    <div class="loader-container">
       <div class="lds-spinner">
         <div></div><div></div><div></div>
         <div></div><div></div><div></div>
         <div></div><div></div><div></div>
         <div></div><div></div><div></div>
       </div>
    </div>`
})

export class LoaderComponent implements  OnInit {
    ngOnInit() {

    }
}
