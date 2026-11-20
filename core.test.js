import {test} from 'node:test';
import assert from 'node:assert/strict';
import {seed,safe,getAppointmentsForDay,formatDate,initials} from './core.js';
test('escape markup',()=>assert.equal(safe('<x a="b">'),'&lt;x a=&quot;b&quot;&gt;'));
test('new synthetic seed',()=>{const a=seed(),b=seed();a.patients[0].first='Changed';assert.equal(b.patients[0].first,'Jordan')});
test('schedule filters and sorts',()=>assert.deepEqual(getAppointmentsForDay(seed().appointments,'2026-11-20').map(x=>x.time),['08:30','09:15','10:00','11:30']));
test('dates are stable',()=>assert.match(formatDate('2026-11-20'),/Nov 20, 2026/));
test('initials',()=>assert.equal(initials(seed().patients[0]),'JS'));