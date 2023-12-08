import { House } from 'src/app/home/data/House';
export abstract class HouseRepository {
    public abstract get houses(): House[];
    public abstract getHouse(housetype: String): House|undefined
}
