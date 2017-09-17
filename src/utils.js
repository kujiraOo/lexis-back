/* eslint { "global-require": 0 } */
/* @flow */
'use strict'

import config from './config'
import logger from 'winston'
import path from 'path'

import type {
  UserWithCreds,
  User
} from './types'

export default class Utils {
  static stripCreds (
    fullUser: UserWithCreds
  ): User {
    return {
      email: fullUser.email || '',
      firstName: fullUser.firstName || '',
      lastName: fullUser.lastName || '',
      registrationDate: fullUser.registrationDate || '',
      birthday: fullUser.birthday || '',
      gender: fullUser.gender || ''
    }
  }
}
