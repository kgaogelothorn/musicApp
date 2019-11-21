import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config, BaseApi } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  options = {headers: {'Content-type': 'application/json', }};
  baseApi = BaseApi;

  constructor(readonly http: HttpClient) { }

  search(value) {
    return this.http.get(`${this.baseApi}/search?q=${value}`);
  }
  getArtist(id: string) {
    return this.http.get(`${this.baseApi}/artist/${id}`);
  }
  getTracklist(req: any) {
    return this.http.get(req.replace('https://api.deezer.com', ''));
  }
  getTrackInfo(id: string) {
    return this.http.get(`${this.baseApi}/track/${id}`);
  }

}
