import test from 'node:test';
import assert from 'node:assert/strict';
import * as product from '../product.js';
import {splitExpenses,weightedScore,daysUntil,streak,readingPercent,zoneTime} from '../core.js';
import {today,datePlus,sum,esc} from '../ui.js';
const {config,seed,validateMeta,initialMeta,validateItem}=product;
test('sample workspace satisfies the product field contract',()=>{const ids=new Set();for(const item of seed()){assert.ok(!ids.has(item.id));ids.add(item.id);for(const f of config.fields){assert.ok(f.key in item,f.key);if(f.type==='number')assert.ok(item[f.key]>=(f.min??0)&&item[f.key]<=(f.max??10000000));if(f.options)assert.ok(f.options.includes(item[f.key]));}validateItem?.(item);}if(initialMeta)validateMeta?.(initialMeta());});
test('user-provided text is escaped for HTML attributes and content',()=>{assert.equal(esc('<img src="x" onerror="alert(1)">'), '&lt;img src=&quot;x&quot; onerror=&quot;alert(1)&quot;&gt;');});
test('packing data accepts booleans and rejects malformed items',()=>{validateMeta(initialMeta());assert.throws(()=>validateMeta({packing:[{title:'Passport',done:'yes'}]}));});
