import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  topEmployee: any = {
    name: 'Sundar Pichai',
    cssClass: 'mui-oc-ceo',
    imageUrl: 'assets/employee.svg',
    designation: 'Chief Executive Officer',
    subordinates: [
      {
        name: 'Thomas Kurian',
        cssClass: 'mui-oc-ceo',
        imageUrl: 'assets/employee.svg',
        designation: 'CEO, Google Cloud',
      },
      {
        name: 'Susan Wojcicki',
        cssClass: 'mui-oc-ceo',
        imageUrl: 'assets/employee.svg',
        designation: 'CEO, YouTube',
        subordinates: [
          {
            name: 'Beau Avril',
            cssClass: 'mui-oc-head',
            imageUrl: 'assets/employee.svg',
            designation: 'Global Head of Business Operations',
            subordinates: []
          },
          {
            name: 'Tara Walpert Levy',
            cssClass: 'mui-oc-vp',
            imageUrl: 'assets/employee.svg',
            designation: 'VP, Agency and Brand Solutions',
            subordinates: []
          },
          {
            name: 'Ariel Bardin',
            cssClass: 'mui-oc-vp',
            imageUrl: 'assets/employee.svg',
            designation: 'VP, Product Management',
            subordinates: []
          }
        ]
      },
      {
        name: 'Jeff Dean',
        cssClass: 'mui-oc-head',
        imageUrl: 'assets/employee.svg',
        designation: 'Head of Artificial Intelligence',
        subordinates: [
          {
            name: 'David Feinberg',
            cssClass: 'mui-oc-ceo',
            imageUrl: 'assets/employee.svg',
            designation: 'CEO, Google Health',
            subordinates: []
          }
        ]
      }
    ]
  };
  response2 = {
    documentResult: {
      pagesize: 500,
      totalHits: 17,
      more: false,
      hash: "-722687483",
      documents: [
        {
          id: "85",
          objectTypeId: "1",
          type: "FOLDER",
          fields: {
            parent: "Legal",
            title: "Deinwl",
            info: "Mitarbeiter,13017659"
          },
          fav: false,
          typeless: false,
          pages: 0,
          lastmodified: "1577610638000"
        },
        {
          id: "86",
          objectTypeId: "1",
          type: "FOLDER",
          fields: {
            parent: "Deinwl",
            title: "Mustermann,Wolfgang",
            info: "Mitarbeiter,25162799"
          },
          fav: false,
          typeless: false,
          pages: 0,
          lastmodified: "1577610638000"
        },
        {
          id: "87",
          objectTypeId: "1",
          type: "FOLDER",
          fields: {
            parent: "Deinwl",
            title: "Baeng,Friedrich",
            info: "Mitarbeiter,13022997"
          },
          fav: false,
          typeless: false,
          pages: 0,
          lastmodified: "1577610638000"
        },
        {
          id: "88",
          objectTypeId: "1",
          type: "FOLDER",
          fields: {
            parent: "Kreiner",
            title: "Brexl,Wofram",
            info: "Mitarbeiter,13024280"
          },
          fav: false,
          typeless: false,
          pages: 0,
          lastmodified: "1577610638000"
        },
        {
          id: "89",
          objectTypeId: "1",
          type: "FOLDER",
          fields: {
            parent: "Legal",
            title: "Lendl",
            info: "Mitarbeiter,13027662"
          },
          fav: false,
          typeless: false,
          pages: 0,
          lastmodified: "1577611276000"
        },
        {
          id: "90",
          objectTypeId: "1",
          type: "FOLDER",
          fields: {
            parent: "Lendl",
            title: "Deinwl,Sabine",
            info: "Mitarbeiter,13027760"
          },
          fav: false,
          typeless: false,
          pages: 0,
          lastmodified: "1577611335000"
        },
        {
          id: "91",
          objectTypeId: "1",
          type: "FOLDER",
          fields: {
            parent: "Lendl",
            title: "Hopp",
            info: "Mitarbeiter,13028510"
          },
          fav: false,
          typeless: false,
          pages: 0,
          lastmodified: "1577611335000"
        },
        {
          id: "93",
          objectTypeId: "1",
          type: "FOLDER",
          fields: {
            parent: "Lendl",
            title: "Hanno,Andre",
            info: "Mitarbeiter,13038931"
          },
          fav: false,
          typeless: false,
          pages: 0,
          lastmodified: "1577611335000"
        },
        {
          id: "8421",
          objectTypeId: "1",
          type: "FOLDER",
          fields: {
            parent: "Lendl",
            title: "Schmich,Frieder",
            info: "Mitarbeiter,228495"
          },
          fav: false,
          typeless: false,
          pages: 0,
          lastmodified: "1577611335000"
        },
        {
          id: "14044588",
          objectTypeId: "1",
          type: "FOLDER",
          fields: {
            parent: "Lendl",
            title: "Wagner,Elfriede",
            info: "Mitarbeiter,655345"
          },
          fav: false,
          typeless: false,
          pages: 0,
          lastmodified: "1577611335000"
        },
        {
          id: "14126368",
          objectTypeId: "1",
          type: "FOLDER",
          fields: {
            parent: "Lendl",
            title: "Friedrich,Malte",
            info: "Bewerber,"
          },
          fav: false,
          typeless: false,
          pages: 0,
          lastmodified: "1577611335000"
        },
        {
          id: "14126379",
          objectTypeId: "1",
          type: "FOLDER",
          fields: {
            parent: "Baeng",
            title: "Nelson,Adriano",
            info: "Bewerber,"
          },
          fav: false,
          typeless: false,
          pages: 0,
          lastmodified: "1577611377000"
        },
        {
          id: "14131792",
          objectTypeId: "1",
          type: "FOLDER",
          fields: {
            parent: "Legal",
            title: "Kreiner",
            info: "Mitarbeiter,65589"
          },
          fav: false,
          typeless: false,
          pages: 0,
          lastmodified: "1577611276000"
        },
        {
          id: "14136126",
          objectTypeId: "1",
          type: "FOLDER",
          fields: {
            parent: null,
            title: "Legal",
            info: "Mitarbeiter,1588987"
          },
          fav: false,
          typeless: false,
          pages: 0,
          lastmodified: "1456330761000"
        },
        {
          id: "14136298",
          objectTypeId: "1",
          type: "FOLDER",
          fields: {
            parent: "Hopp",
            title: "Tobiesen,Erik",
            info: "Bewerber,"
          },
          fav: false,
          typeless: false,
          pages: 0,
          lastmodified: "1577611418000"
        },
        {
          id: "14136912",
          objectTypeId: "1",
          type: "FOLDER",
          fields: {
            parent: "Hopp",
            title: "Archiv,Horst",
            info: "Mitarbeiter,6547854"
          },
          fav: false,
          typeless: false,
          pages: 0,
          lastmodified: "1577611418000"
        },
        {
          id: "14159414",
          objectTypeId: "1",
          type: "FOLDER",
          fields: {
            parent: "Baeng",
            title: "Müller,Anja",
            info: "Mitarbeiter,1000"
          },
          fav: false,
          typeless: false,
          pages: 0,
          lastmodified: "1577611377000"
        }
      ]
    }
  }

  ngOnInit() {
    console.log('Started');
    // this.testTransform(this.response2);
  }

}

