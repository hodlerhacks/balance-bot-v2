const _0x3f213f=_0x4dee;function _0x3c8d(){const _0x56e0ba=['inherit','keys','kill','update','47912XWAEgY','107434lBeYuE','2vPrOPk','207qDBSzj','log','error','apply','bm.js','Balance\x20Bot\x20>\x20','constructor','27096uFVQzc','toString','search','host','2113420IaCHNo','(((.+)+)+)+$','yargs/yargs','fork','--host','374680aeOxci','ipc','child_process','argv','Unexpected\x20error:','slice','restore','push','message','user','port',',\x20must\x20be\x20a\x204\x20digit\x20number','897342ajiLgF','57fXzddS','exit','--user','53578OpMfaX'];_0x3c8d=function(){return _0x56e0ba;};return _0x3c8d();}(function(_0x1db3dd,_0xa08251){const _0x145c00=_0x4dee,_0xe5de00=_0x1db3dd();while(!![]){try{const _0x459dde=parseInt(_0x145c00(0x197))/0x1*(parseInt(_0x145c00(0x198))/0x2)+parseInt(_0x145c00(0x18e))/0x3*(-parseInt(_0x145c00(0x1a0))/0x4)+-parseInt(_0x145c00(0x181))/0x5+parseInt(_0x145c00(0x18d))/0x6+-parseInt(_0x145c00(0x191))/0x7+-parseInt(_0x145c00(0x196))/0x8*(parseInt(_0x145c00(0x199))/0x9)+parseInt(_0x145c00(0x17c))/0xa;if(_0x459dde===_0xa08251)break;else _0xe5de00['push'](_0xe5de00['shift']());}catch(_0x2128c5){_0xe5de00['push'](_0xe5de00['shift']());}}}(_0x3c8d,0x1d1fa));const fs=require('fs'),argv=require(_0x3f213f(0x17e))(process['argv'][_0x3f213f(0x186)](0x2))[_0x3f213f(0x184)],childProcess=require(_0x3f213f(0x183));if(argv[_0x3f213f(0x18b)]){const pattern=/^[0-9]{2,4}$/;!pattern['test'](argv['port'])&&(console[_0x3f213f(0x19a)]('Error:\x20Invalid\x20argument\x20'+argv['port']+_0x3f213f(0x18c)),process[_0x3f213f(0x18f)](0x1));}let args=[];argv[_0x3f213f(0x18b)]&&(args['push']('--port'),args[_0x3f213f(0x188)](argv[_0x3f213f(0x18b)]));argv[_0x3f213f(0x17b)]&&(args[_0x3f213f(0x188)](_0x3f213f(0x180)),args[_0x3f213f(0x188)](argv[_0x3f213f(0x17b)]));function _0x4dee(_0x4a56fb,_0x689991){const _0x564ad3=_0x3c8d();return _0x4dee=function(_0x1373c2,_0x3bdd95){_0x1373c2=_0x1373c2-0x179;let _0x3c8d7c=_0x564ad3[_0x1373c2];return _0x3c8d7c;},_0x4dee(_0x4a56fb,_0x689991);}argv[_0x3f213f(0x18a)]&&(args[_0x3f213f(0x188)](_0x3f213f(0x190)),args[_0x3f213f(0x188)](argv['user']));let bmpath='bb/';const bmfile=_0x3f213f(0x19d),updatefile='install.js';!fs['existsSync'](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];startBM();function startBM(){const _0x1ab924=_0x3f213f,_0x26595f=function(){let _0x2f14fb=!![];return function(_0x26ed0c,_0x158de8){const _0x3d6693=_0x2f14fb?function(){const _0x1d78f6=_0x4dee;if(_0x158de8){const _0x360037=_0x158de8[_0x1d78f6(0x19c)](_0x26ed0c,arguments);return _0x158de8=null,_0x360037;}}:function(){};return _0x2f14fb=![],_0x3d6693;};}(),_0x4504d3=_0x26595f(this,function(){const _0x5b4eee=_0x4dee;return _0x4504d3[_0x5b4eee(0x179)]()[_0x5b4eee(0x17a)](_0x5b4eee(0x17d))[_0x5b4eee(0x179)]()[_0x5b4eee(0x19f)](_0x4504d3)['search']('(((.+)+)+)+$');});_0x4504d3();let _0x344993=![];const _0x2fb610={'cwd':'','stdio':['inherit','inherit','inherit','ipc']};pid1=childProcess['fork'](bmpath+bmfile,args,_0x2fb610),pid1['on'](_0x1ab924(0x189),_0x72150e=>{const _0x29d1c4=_0x1ab924;switch(Object[_0x29d1c4(0x193)](_0x72150e)[0x0]){case _0x29d1c4(0x195):startUpdate();break;case _0x29d1c4(0x187):handleRestore();break;}}),pid1['on'](_0x1ab924(0x19b),function(_0x1eb7e7){const _0x4777c7=_0x1ab924;if(_0x344993)return;_0x344993=!![],logging(_0x4777c7(0x185),_0x1eb7e7);}),pid1['on'](_0x1ab924(0x18f),function(_0x2eb676){if(_0x344993)return;_0x344993=!![];if(!updating)startBM();});}function startUpdate(){const _0x28443d=_0x3f213f;updating=!![];if(pid1)pid1[_0x28443d(0x194)]();let _0x27ab03=![];const _0x1be8af={'cwd':'','stdio':[_0x28443d(0x192),_0x28443d(0x192),_0x28443d(0x192),_0x28443d(0x182)]};let _0x4f5e82=[];if(argv['s'])_0x4f5e82[_0x28443d(0x188)]('2s');else _0x4f5e82[_0x28443d(0x188)]('2');pid2=childProcess[_0x28443d(0x17f)](updatefile,_0x4f5e82,_0x1be8af),pid2['on'](_0x28443d(0x19b),function(_0x3c5846){updating=![];if(_0x27ab03)return;_0x27ab03=!![],logging('Error\x20while\x20updating\x20Balance\x20Bot:',_0x3c5846);}),pid2['on']('exit',function(_0x4edfc7){updating=![];if(_0x27ab03)return;_0x27ab03=!![],startBM();});}function handleRestore(){const _0x57e998=_0x3f213f;if(pid1)pid1[_0x57e998(0x194)]();}function logging(_0xa37163){const _0xfe3710=_0x3f213f;console[_0xfe3710(0x19a)](_0xfe3710(0x19e)+_0xa37163);}