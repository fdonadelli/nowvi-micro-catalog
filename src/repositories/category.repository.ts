import {DefaultCrudRepository} from '@loopback/repository';
import {Category, CategoryRelations} from '../models';
import {Elastic7DataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CategoryRepository extends DefaultCrudRepository<
  Category,
  typeof Category.prototype.id,
  CategoryRelations
> {
  constructor(
    @inject('datasources.elastic7') dataSource: Elastic7DataSource,
  ) {
    super(Category, dataSource);
  }
}
