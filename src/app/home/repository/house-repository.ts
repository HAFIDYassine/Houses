import { House } from 'src/app/home/data/house';
export abstract class HouseRepository {
    public abstract get houses(): House[]
}
