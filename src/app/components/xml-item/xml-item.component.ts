import { Component, OnInit } from '@angular/core';
import xml2js from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-xml-item',
  templateUrl: './xml-item.component.html',
  styleUrls: ['./xml-item.component.scss']
})
export class XmlItemComponent implements OnInit {

  xmlFilesPath: string = '/assets/files/xml/';
  title: string = 'read-xml-angular8';
  public xmlItems: any;

  constructor(private _http: HttpClient) {
    this.loadXML();
  }

  ngOnInit() { }

  // http://thecodehubs.com/reading-xml-file-in-angular-7/

  loadXML() {
    this._http.get(this.xmlFilesPath + 'CONTROL-1910070855.XML', {
      headers: new HttpHeaders()
        .set('Content-Type', 'text/xml')
        .append('Access-Control-Allow-Methods', 'GET')
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
      responseType: 'text'
    })
    .subscribe((data) => {
      this.parseXML(data)
        .then((data) => {
          this.xmlItems = data;
        });
    });
  }

  parseXML(data) {
    return new Promise(resolve => {
      var k: string | number,
        arr = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      parser.parseString(data, function (err, result) {
        var obj = result.Employee;
        for (k in obj.emp) {
          var item = obj.emp[k];
          arr.push({
            id: item.id[0],
            name: item.name[0],
            gender: item.gender[0],
            mobile: item.mobile[0]
          });
        }
        resolve(arr);
      });
    });
  }
}
