const _0x518b09=_0x37b2;(function(_0x5da498,_0x2bae92){const _0x2eac00=_0x37b2,_0x52d5e7=_0x5da498();while(!![]){try{const _0x253b5f=-parseInt(_0x2eac00(0x1c4))/0x1*(-parseInt(_0x2eac00(0x1c0))/0x2)+-parseInt(_0x2eac00(0x1d6))/0x3+-parseInt(_0x2eac00(0x1bb))/0x4*(-parseInt(_0x2eac00(0x1ba))/0x5)+parseInt(_0x2eac00(0x1b9))/0x6*(-parseInt(_0x2eac00(0x1dc))/0x7)+parseInt(_0x2eac00(0x1e2))/0x8+parseInt(_0x2eac00(0x1cd))/0x9*(-parseInt(_0x2eac00(0x1be))/0xa)+parseInt(_0x2eac00(0x1dd))/0xb;if(_0x253b5f===_0x2bae92)break;else _0x52d5e7['push'](_0x52d5e7['shift']());}catch(_0x14de13){_0x52d5e7['push'](_0x52d5e7['shift']());}}}(_0x14d1,0x1eb67));function _0x37b2(_0x5739a7,_0x9c13e6){const _0x5aac7f=_0x14d1();return _0x37b2=function(_0x3de499,_0x3deaea){_0x3de499=_0x3de499-0x1b2;let _0x14d18e=_0x5aac7f[_0x3de499];return _0x14d18e;},_0x37b2(_0x5739a7,_0x9c13e6);}const fs=require('fs'),argv=require(_0x518b09(0x1b7))(process[_0x518b09(0x1d3)]['slice'](0x2))[_0x518b09(0x1d3)],childProcess=require(_0x518b09(0x1c2)),nodeversion=process[_0x518b09(0x1b2)][_0x518b09(0x1c8)],minversion=0xe;nodeversion[_0x518b09(0x1df)]('.')[0x0]<minversion&&(console['log'](),console['log']('-----------------------------------------------------------------------------------'),console[_0x518b09(0x1e1)](_0x518b09(0x1ca)+nodeversion+',\x20but\x20version\x20'+minversion+_0x518b09(0x1c5)),console[_0x518b09(0x1e1)](_0x518b09(0x1d7)),console['log'](_0x518b09(0x1b5)),console[_0x518b09(0x1e1)](),process['exit'](0x1));if(argv[_0x518b09(0x1db)]){const pattern=/^[0-9]{2,4}$/;!pattern[_0x518b09(0x1d2)](argv[_0x518b09(0x1db)])&&(console[_0x518b09(0x1e1)](_0x518b09(0x1d5)+argv[_0x518b09(0x1db)]+_0x518b09(0x1b4)),process[_0x518b09(0x1de)](0x1));}let args=[];argv['port']&&(args[_0x518b09(0x1c7)](_0x518b09(0x1d4)),args[_0x518b09(0x1c7)](argv[_0x518b09(0x1db)]));argv['host']&&(args[_0x518b09(0x1c7)](_0x518b09(0x1bc)),args[_0x518b09(0x1c7)](argv[_0x518b09(0x1b6)]));function _0x14d1(){const _0x330559=['3189582GQyWzV','exit','split','Error\x20while\x20updating\x20Balance\x20Bot:','log','1237864QLHsee','restore','versions','--user',',\x20must\x20be\x20a\x204\x20digit\x20number','-----------------------------------------------------------------------------------','host','yargs/yargs','search','714030qyvxGP','26430QebOLx','48ETQBzm','--host','inherit','1341770wjDJri','update','48286nPtrNG','Balance\x20Bot\x20>\x20','child_process','apply','2juLNbD','\x20or\x20above\x20is\x20required','Unexpected\x20error:','push','node','toString','The\x20installed\x20Node.js\x20version\x20is\x20','ipc','bm.js','9VWYhgR','bb/','constructor','(((.+)+)+)+$','install.js','test','argv','--port','Error:\x20Invalid\x20argument\x20','532296VGBTrA','Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again','error','user','kill','port','7QUyxqp'];_0x14d1=function(){return _0x330559;};return _0x14d1();}argv['user']&&(args[_0x518b09(0x1c7)](_0x518b09(0x1b3)),args[_0x518b09(0x1c7)](argv[_0x518b09(0x1d9)]));let bmpath=_0x518b09(0x1ce);const bmfile=_0x518b09(0x1cc),updatefile=_0x518b09(0x1d1);!fs['existsSync'](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];startBM();function startBM(){const _0x1dc19c=_0x518b09,_0xf10c91=function(){let _0x1cac8d=!![];return function(_0x3df252,_0x1e3bd2){const _0x38502e=_0x1cac8d?function(){const _0x5e8a87=_0x37b2;if(_0x1e3bd2){const _0x3b3652=_0x1e3bd2[_0x5e8a87(0x1c3)](_0x3df252,arguments);return _0x1e3bd2=null,_0x3b3652;}}:function(){};return _0x1cac8d=![],_0x38502e;};}(),_0x4a8530=_0xf10c91(this,function(){const _0x4503ed=_0x37b2;return _0x4a8530['toString']()[_0x4503ed(0x1b8)](_0x4503ed(0x1d0))[_0x4503ed(0x1c9)]()[_0x4503ed(0x1cf)](_0x4a8530)[_0x4503ed(0x1b8)]('(((.+)+)+)+$');});_0x4a8530();let _0x4cfb09=![];const _0x24f980={'cwd':'','stdio':[_0x1dc19c(0x1bd),'inherit','inherit',_0x1dc19c(0x1cb)]};pid1=childProcess['fork'](bmpath+bmfile,args,_0x24f980),pid1['on']('message',_0x3fb5f2=>{const _0x37f036=_0x1dc19c;switch(Object['keys'](_0x3fb5f2)[0x0]){case _0x37f036(0x1bf):startUpdate();break;case _0x37f036(0x1e3):handleRestore();break;}}),pid1['on']('error',function(_0x18a54f){const _0x176b39=_0x1dc19c;if(_0x4cfb09)return;_0x4cfb09=!![],logging(_0x176b39(0x1c6),_0x18a54f);}),pid1['on'](_0x1dc19c(0x1de),function(_0x4df558){if(_0x4cfb09)return;_0x4cfb09=!![];if(!updating)startBM();});}function startUpdate(){const _0x5dc7d9=_0x518b09;updating=!![];if(pid1)pid1[_0x5dc7d9(0x1da)]();let _0x1fccf0=![];const _0x26d992={'cwd':'','stdio':[_0x5dc7d9(0x1bd),_0x5dc7d9(0x1bd),'inherit',_0x5dc7d9(0x1cb)]};let _0x3b1a48=[];if(argv['s'])_0x3b1a48[_0x5dc7d9(0x1c7)]('2s');else _0x3b1a48['push']('2');pid2=childProcess['fork'](updatefile,_0x3b1a48,_0x26d992),pid2['on'](_0x5dc7d9(0x1d8),function(_0x26f986){const _0x2bf903=_0x5dc7d9;updating=![];if(_0x1fccf0)return;_0x1fccf0=!![],logging(_0x2bf903(0x1e0),_0x26f986);}),pid2['on'](_0x5dc7d9(0x1de),function(_0x26f5bb){updating=![];if(_0x1fccf0)return;_0x1fccf0=!![],startBM();});}function handleRestore(){const _0x533363=_0x518b09;if(pid1)pid1[_0x533363(0x1da)]();}function logging(_0x55d2aa){const _0x50ee1f=_0x518b09;console[_0x50ee1f(0x1e1)](_0x50ee1f(0x1c1)+_0x55d2aa);}