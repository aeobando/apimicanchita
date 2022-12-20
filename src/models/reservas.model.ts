import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Reservas extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'object',
    required: true,
  })
  usuario: object;

  @property({
    type: 'object',
    required: true,
  })
  cancha: object;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  horas: string;

  @property({
    type: 'string',
    required: true,
  })
  minutos: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Reservas>) {
    super(data);
  }
}

export interface ReservasRelations {
  // describe navigational properties here
}

export type ReservasWithRelations = Reservas & ReservasRelations;
