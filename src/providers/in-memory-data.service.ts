import { Curriculo } from './../negocio/models';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

    createDb(): {} {
        let curriculos: Curriculo[] = [
            
        ];

        return {'curriculos' : curriculos};
    }
}
