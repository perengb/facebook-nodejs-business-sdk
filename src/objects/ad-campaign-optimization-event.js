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
 * AdCampaignOptimizationEvent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignOptimizationEvent extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      custom_conversion_id: 'custom_conversion_id',
      event_sequence: 'event_sequence',
      event_type: 'event_type',
      id: 'id'
    });
  }

  get (fields, params): AdCampaignOptimizationEvent {
    return this.read(
      fields,
      params
    );
  }
}
