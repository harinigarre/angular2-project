import { Http, RequestOptions, RequestMethod, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core'

@Injectable()
export class Service{
    constructor(private http: Http){

    }
    getDatafromJsonServer():any{
        let headers=new Headers();
        headers.append('Content-Type','application/json');
        let options=new RequestOptions({headers:headers,method:RequestMethod.Get});
        return this.http.get("http://localhost:3000/login",options).map((res:Response)=>res.json());
    }  
}