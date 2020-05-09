import { ApiMockService, ApiMockRootRoute, ApiMockDataCallback } from '@ng-stack/api-mock';

import { Hero } from './hero';

export class FakeApiService implements ApiMockService {
  getRoutes(): ApiMockRootRoute[] {
    return [
      {
        path: 'heroes/:heroId',
        dataCallback: this.getDataCallback()
      }
    ];
  }

  private getDataCallback(): ApiMockDataCallback<Hero[]> {
    return ({ httpMethod, items }) => {
      if (httpMethod == 'GET') {
        return [
          { id: 1, name: 'Windstorm' },
          { id: 2, name: 'Bombasto' },
          { id: 3, name: 'Magneta' },
          { id: 4, name: 'Tornado' },
        ];
      } else {
        return items;
      }
    };
  }
}
