/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * TargetingGeoLocationMarket
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingGeoLocationMarket extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      country: 'country',
      key: 'key',
      market_type: 'market_type',
      name: 'name',
      id: 'id'
    });
  }

  get (fields, params): TargetingGeoLocationMarket {
    return this.read(
      fields,
      params
    );
  }
}
