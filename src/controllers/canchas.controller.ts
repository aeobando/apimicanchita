import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Canchas} from '../models';
import {CanchasRepository} from '../repositories';

export class CanchasController {
  constructor(
    @repository(CanchasRepository)
    public canchasRepository : CanchasRepository,
  ) {}

  @post('/canchas')
  @response(200, {
    description: 'Canchas model instance',
    content: {'application/json': {schema: getModelSchemaRef(Canchas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Canchas, {
            title: 'NewCanchas',
            exclude: ['id'],
          }),
        },
      },
    })
    canchas: Omit<Canchas, 'id'>,
  ): Promise<Canchas> {
    return this.canchasRepository.create(canchas);
  }

  @get('/canchas/count')
  @response(200, {
    description: 'Canchas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Canchas) where?: Where<Canchas>,
  ): Promise<Count> {
    return this.canchasRepository.count(where);
  }

  @get('/canchas')
  @response(200, {
    description: 'Array of Canchas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Canchas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Canchas) filter?: Filter<Canchas>,
  ): Promise<Canchas[]> {
    return this.canchasRepository.find(filter);
  }

  @patch('/canchas')
  @response(200, {
    description: 'Canchas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Canchas, {partial: true}),
        },
      },
    })
    canchas: Canchas,
    @param.where(Canchas) where?: Where<Canchas>,
  ): Promise<Count> {
    return this.canchasRepository.updateAll(canchas, where);
  }

  @get('/canchas/{id}')
  @response(200, {
    description: 'Canchas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Canchas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Canchas, {exclude: 'where'}) filter?: FilterExcludingWhere<Canchas>
  ): Promise<Canchas> {
    return this.canchasRepository.findById(id, filter);
  }

  @patch('/canchas/{id}')
  @response(204, {
    description: 'Canchas PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Canchas, {partial: true}),
        },
      },
    })
    canchas: Canchas,
  ): Promise<void> {
    await this.canchasRepository.updateById(id, canchas);
  }

  @put('/canchas/{id}')
  @response(204, {
    description: 'Canchas PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() canchas: Canchas,
  ): Promise<void> {
    await this.canchasRepository.replaceById(id, canchas);
  }

  @del('/canchas/{id}')
  @response(204, {
    description: 'Canchas DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.canchasRepository.deleteById(id);
  }
}
