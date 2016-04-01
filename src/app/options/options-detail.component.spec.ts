import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {OptionsDetailComponent} from './options-detail.component';
import {Router, RouteParams} from 'angular2/router';
import {Option} from '../shared/interfaces/option';
import {OptionsProvider} from '../services/options-provider/options-provider';

class MockOptionsProvider {
  get() {
    return Promise.resolve(
      [{id:1, label:'one', value:0, dirty:false, values:['Default'], tags:[], children:[]}]
    );
  }
}

class MockRouter {
  navigate() { }
}

class MockRouteParams {
  get() { return 1; }
}

describe('OptionsDetailComponent', () => {

  beforeEachProviders(() => [
    provide(OptionsProvider, {useClass: MockOptionsProvider}),
    provide(Router, {useClass: MockRouter}),
    provide(RouteParams, {useClass: MockRouteParams}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(OptionsDetailComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
