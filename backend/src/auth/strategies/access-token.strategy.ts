import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { cookieExtractor } from 'src/common/extractors/cookie.extractor';

type JwtPayload = {
  sub: string;
  login: string;
};

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey: process.env.JWT_ACCESS_SECRET,
      passReqToCallback: false,
    });
  }

  validate(payload: JwtPayload) {
    return payload;
  }
}
