import {Component} from '@angular/core';
import {Httptestservice} from "./httptest.service"

@Component({
  selector: 'httptest',
  template:`
  			<label for="range">Range:</label>
	<button (click)="onTestGet()">GET Tweets</button>
	<button (click)="onGetStats()">GET Stats</button>
	<br><button (click)="delete()">Delete JSON</button>
	<br>
	<p>Output: {{getData}}</p>
	<br>` ,
  providers: [Httptestservice]		
})
export class HttptestComponent {

	private range: string='weekly';
	getData: string;
	postData: string;

	constructor (private _Httpservice: Httptestservice){}

	onTestGet(){
		this._Httpservice.getInfo()
			.subscribe(
				data => this.getData = JSON.stringify(data),
				error => alert(error),
			 	() => console.log("Finished")
			);
	}
	onTestPost(){
		this._Httpservice.postJSON()
			.subscribe(
				data => this.postData = JSON.stringify(data),
				error => alert(error),
			 	() => console.log("Finished")
			);
	
	}

	onGetStats(){
		this._Httpservice.getStats(this.range).subscribe(
			data => this.getData = JSON.stringify(data),
			error => alert(error),
			() => console.log("Finished")		
		);
	}

	delete(){

		this.getData="";
	}	

}
