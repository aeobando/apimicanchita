import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Reservas, ReservasRelations} from '../models';

export class ReservasRepository extends DefaultCrudRepository<
  Reservas,
  typeof Reservas.prototype.id,
  ReservasRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Reservas, dataSource);
  }
}
