import { Auth } from './twitch'

export type Command = (
  req: FastifyRequest<
    RouteGenericInterface,
    Server,
    IncomingMessage,
    unknown,
    FastifyLoggerInstance
  >,
  res: FastifyReply<
    Server,
    IncomingMessage,
    ServerResponse,
    RouteGenericInterface,
    unknown
  >,
  authFile: Auth | undefined
) => Promise<void>

export interface CommandDescription {
  endpoint: string
  options?: string
  description: string
}

export interface CommandDescriptionExport {
  description: CommandDescription
}

export interface FollowingParams {
  from_id: string
  to_name: string
}

export interface FollowingPayload {
  followingFor: number | string
  isFollowing: boolean
  error: object | null
}

export interface Fact {
  text: string
  source: string
}
