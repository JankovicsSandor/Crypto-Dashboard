import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface NewsState {
   key: string;
}

export function createInitialState(): NewsState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'news' })
export class NewsStore extends Store<NewsState> {

  constructor() {
    super(createInitialState());
  }

}
