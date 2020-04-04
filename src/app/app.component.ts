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
    loadExternalAssets: true,
  };


  layout = [ "*" ];

  jsonSchema = {
    "roomId" : {
      "type" : "string",
      "description" : "the id of the Conference Room"
    },
    "startDate" : {
      "type" : "integer",
      "format" : "int64",
      "description" : "the start date of the Conference Room"
    },
    "endDate" : {
      "type" : "integer",
      "format" : "int64",
      "description" : "the end date of the Conference Room"
    }
  };


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
