import { Component, OnInit } from '@angular/core';
//import { jsonSchema } from './jsonSchema';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular 6';
  jsonFormOptions = {
    loadExternalAssets: false,
  };


  layout = [ "*" ];

  // layout = [
  //   { "type": "flex", "flex-flow": "row wrap", "items": [ "first_name", "last_name" ] },
  //   { "key": "address.street_1", "title": "Address", "placeholder": "Street" },
  //   { "key": "address.street_2", "notitle": true },
  //   { "type": "div",
  //     "display": "flex",
  //     "flex-direction": "row",
  //     "items": [
  //       { "key": "address.city", "flex": "3 3 150px",
  //         "notitle": true, "placeholder": "City"
  //       },
  //       { "key": "address.state", "flex": "1 1 50px",
  //         "notitle": true, "placeholder": "State"
  //       },
  //       { "key": "address.zip_code", "flex": "2 2 100px",
  //         "notitle": true, "placeholder": "Zip Code"
  //       }
  //     ]
  //   },
  //   { "key": "birthday", "type": "date" },
  //   { "key": "phone_numbers",
  //     "type": "array",
  //     "listItems": 3,
  //     "items": [ {
  //       "type": "div",
  //       "displayFlex": true,
  //       "flex-direction": "row",
  //       "items": [
  //         { "key": "phone_numbers[].type", "flex": "1 1 50px",
  //           "notitle": true, "placeholder": "Type"
  //         },
  //         { "key": "phone_numbers[].number", "flex": "4 4 200px",
  //           "notitle": true, "placeholder": "Phone Number"
  //         }
  //       ]
  //     } ]
  //   },
  //   { "type": "section",
  //     "title": "Notes",
  //     "expandable": true,
  //     "expanded": false,
  //     "items": [ { "key": "notes", "type": "textarea", "notitle": true } ]
  //   }
  // ];

  jsonSchema = {};


  submittedFormData;
  ngOnInit() {
    console.log('hello');
  }

  onSubmit(data: any) {
    this.submittedFormData = data;
  }

   showFormSchemaFn($event) {
    console.log($event);
  }

  showFormLayoutFn($event) {
    console.log($event);
  }
}
