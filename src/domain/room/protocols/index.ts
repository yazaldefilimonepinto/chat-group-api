import { AlreadyExistsError, InvalidCredentials, InvalidParamsError, JoinGroupError, NotFoundError } from '@/domain/errors';
import { mensagemCreate } from '@/domain/mensagem/protocols';
import { Either } from '@/shared/error-handler/either';

export type room = {
  name: string;
  description: string;
};
export type roomInput = {
  name: string;
  description: string;
  userId: string;
};
export type roomSimples = {
  id?: string;
  name: string;
  description: string;
  created_at: string;
};
export type roomCreate = {
  id: string;
  name: string;
  description: string;
  created_at: string;
};
export type TypeRoom = {
  id: string;
  name: string;
  description: string;
  created_at: string;
  users: {
    id: string;
    name: string;
    email: string;
    created_at: string;
  }[];
};

type CreateRoomError = InvalidParamsError | AlreadyExistsError | NotFoundError | JoinGroupError;

export type ResponseBuildRoom = Either<InvalidParamsError, roomCreate>;
export type ResponseRoom = Either<CreateRoomError, TypeRoom>;
