const _0x55c9d7=_0x44bb;(function(_0x2fdee7,_0x1a14fe){const _0x4592ed=_0x44bb,_0x95f0bf=_0x2fdee7();while(!![]){try{const _0xdbd0c7=parseInt(_0x4592ed(0xae))/0x1*(parseInt(_0x4592ed(0xac))/0x2)+-parseInt(_0x4592ed(0xcb))/0x3*(parseInt(_0x4592ed(0xb9))/0x4)+parseInt(_0x4592ed(0xd2))/0x5+parseInt(_0x4592ed(0xc1))/0x6+parseInt(_0x4592ed(0xb8))/0x7+parseInt(_0x4592ed(0xc5))/0x8*(-parseInt(_0x4592ed(0xba))/0x9)+-parseInt(_0x4592ed(0xb1))/0xa*(parseInt(_0x4592ed(0xd3))/0xb);if(_0xdbd0c7===_0x1a14fe)break;else _0x95f0bf['push'](_0x95f0bf['shift']());}catch(_0x1cc590){_0x95f0bf['push'](_0x95f0bf['shift']());}}}(_0x381a,0xe932f));const fs=require('fs'),argv=require(_0x55c9d7(0xd5))(process[_0x55c9d7(0xad)][_0x55c9d7(0xc0)](0x2))[_0x55c9d7(0xad)],childProcess=require(_0x55c9d7(0xb4));if(argv[_0x55c9d7(0xd1)]){const pattern=/^[0-9]{2,4}$/;!pattern[_0x55c9d7(0xbc)](argv['port'])&&(console['log'](_0x55c9d7(0xd4)+argv[_0x55c9d7(0xd1)]+_0x55c9d7(0xcc)),process['exit'](0x1));}let args=[];argv[_0x55c9d7(0xd1)]&&(args[_0x55c9d7(0xc6)](_0x55c9d7(0xc2)),args[_0x55c9d7(0xc6)](argv['port']));argv['host']&&(args[_0x55c9d7(0xc6)](_0x55c9d7(0xce)),args[_0x55c9d7(0xc6)](argv['host']));function _0x381a(){const _0x8e6769=['constructor','child_process','inherit','exit','user','6346256PITuzC','1088YoxVtj','27IMXpPI','search','test','Unexpected\x20error:','apply','existsSync','slice','7775244DVNtED','--port','log','--user','1901160AzCeBM','push','message','fork','ipc','(((.+)+)+)+$','3273JZLPDo',',\x20must\x20be\x20a\x204\x20digit\x20number','error','--host','Balance\x20Bot\x20>\x20','Error\x20while\x20updating\x20Balance\x20Bot:','port','2076700gcQNnk','8481XEcPYQ','Error:\x20Invalid\x20argument\x20','yargs/yargs','10mkiWfY','argv','138797HGmDdJ','keys','bm.js','17470wdBhoE','toString'];_0x381a=function(){return _0x8e6769;};return _0x381a();}argv[_0x55c9d7(0xb7)]&&(args[_0x55c9d7(0xc6)](_0x55c9d7(0xc4)),args['push'](argv['user']));let bmpath='bb/';const bmfile=_0x55c9d7(0xb0),updatefile='install.js';!fs[_0x55c9d7(0xbf)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];function _0x44bb(_0x23f727,_0x468985){const _0x4de118=_0x381a();return _0x44bb=function(_0x414a46,_0x4a90f3){_0x414a46=_0x414a46-0xac;let _0x381a9b=_0x4de118[_0x414a46];return _0x381a9b;},_0x44bb(_0x23f727,_0x468985);}startBM();function startBM(){const _0x1c450a=_0x55c9d7,_0x37a2ae=function(){let _0x1240c8=!![];return function(_0x468807,_0x41b30e){const _0x3422a4=_0x1240c8?function(){const _0x13e635=_0x44bb;if(_0x41b30e){const _0x387599=_0x41b30e[_0x13e635(0xbe)](_0x468807,arguments);return _0x41b30e=null,_0x387599;}}:function(){};return _0x1240c8=![],_0x3422a4;};}(),_0x1ab72b=_0x37a2ae(this,function(){const _0x9d0823=_0x44bb;return _0x1ab72b[_0x9d0823(0xb2)]()[_0x9d0823(0xbb)](_0x9d0823(0xca))[_0x9d0823(0xb2)]()[_0x9d0823(0xb3)](_0x1ab72b)[_0x9d0823(0xbb)](_0x9d0823(0xca));});_0x1ab72b();let _0x313f3e=![];const _0x1dc644={'cwd':'','stdio':[_0x1c450a(0xb5),_0x1c450a(0xb5),_0x1c450a(0xb5),_0x1c450a(0xc9)]};pid1=childProcess[_0x1c450a(0xc8)](bmpath+bmfile,args,_0x1dc644),pid1['on'](_0x1c450a(0xc7),_0x53430e=>{const _0x5828bc=_0x1c450a;switch(Object[_0x5828bc(0xaf)](_0x53430e)[0x0]){case'update':startUpdate();break;}}),pid1['on'](_0x1c450a(0xcd),function(_0x53fe94){const _0x276758=_0x1c450a;if(_0x313f3e)return;_0x313f3e=!![],logging(_0x276758(0xbd),_0x53fe94);}),pid1['on'](_0x1c450a(0xb6),function(_0x5b82d4){if(_0x313f3e)return;_0x313f3e=!![];if(!updating)startBM();});}function startUpdate(){const _0x42af56=_0x55c9d7;updating=!![];if(pid1)pid1['kill']();let _0x37794d=![];const _0x214ec4={'cwd':'','stdio':[_0x42af56(0xb5),'inherit',_0x42af56(0xb5),_0x42af56(0xc9)]};let _0x2f003d=[];if(argv['s'])_0x2f003d[_0x42af56(0xc6)]('2s');else _0x2f003d[_0x42af56(0xc6)]('2');pid2=childProcess['fork'](updatefile,_0x2f003d,_0x214ec4),pid2['on'](_0x42af56(0xcd),function(_0x45901a){const _0x1e0349=_0x42af56;updating=![];if(_0x37794d)return;_0x37794d=!![],logging(_0x1e0349(0xd0),_0x45901a);}),pid2['on'](_0x42af56(0xb6),function(_0x247c58){updating=![];if(_0x37794d)return;_0x37794d=!![],startBM();});}function logging(_0x3dba5e){const _0x34e273=_0x55c9d7;console[_0x34e273(0xc3)](_0x34e273(0xcf)+_0x3dba5e);}