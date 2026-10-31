import test from 'node:test'
import assert from 'node:assert/strict'
import {areas,roles,companies} from './nexus-content.js'
import {filterEntries} from './nexus-search.js'
test('все необходимые карточки присутствуют',()=>{assert.equal(areas.length,7);assert.equal(roles.length,7);assert.equal(companies.length,6)})
test('поиск работает по названиям, описаниям и навыкам',()=>{assert.ok(filterEntries(areas,'React').some(x=>x.id==='web'));assert.ok(filterEntries(roles,'React').some(x=>x.id==='frontend'));assert.deepEqual(filterEntries(roles,'неизвестный-термин'),[])})
test('поиск нечувствителен к пробелам и регистру',()=>{assert.equal(filterEntries(areas,'  ОБЛАЧНЫЕ  ').length,1);assert.equal(filterEntries(roles,'  ai  ').length,1)})
