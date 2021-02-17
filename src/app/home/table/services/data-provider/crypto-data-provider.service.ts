import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CryptoResponse } from '../../models/crypto-response';

@Injectable()
export class CryptoDataProviderService {

  constructor(private http: HttpClient) { }

  refreshList() {
    return this.http.get<CryptoResponse>("https://localhost:44323/coinmarket/latest")
  }
}
