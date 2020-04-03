import {ApiService} from './api.service';

const endpoint = 'category';

export const CategoryService = {
    list(){
        return ApiService.get(endpoint);

    }
}