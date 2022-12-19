import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Canchas, CanchasRelations} from '../models';

export class CanchasRepository extends DefaultCrudRepository<
  Canchas,
  typeof Canchas.prototype.id,
  CanchasRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Canchas, dataSource);
  }
}
