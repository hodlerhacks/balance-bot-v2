const _0xc0b92e=_0x1e08;(function(_0x535db5,_0x1b8ee8){const _0x44a92b=_0x1e08,_0x5a9b67=_0x535db5();while(!![]){try{const _0x3e4a99=parseInt(_0x44a92b(0x1f1))/0x1+-parseInt(_0x44a92b(0x1ce))/0x2+parseInt(_0x44a92b(0x1e0))/0x3*(-parseInt(_0x44a92b(0x1c5))/0x4)+parseInt(_0x44a92b(0x1c6))/0x5*(-parseInt(_0x44a92b(0x1f3))/0x6)+parseInt(_0x44a92b(0x1c3))/0x7+parseInt(_0x44a92b(0x1c8))/0x8*(-parseInt(_0x44a92b(0x1de))/0x9)+parseInt(_0x44a92b(0x1ee))/0xa;if(_0x3e4a99===_0x1b8ee8)break;else _0x5a9b67['push'](_0x5a9b67['shift']());}catch(_0x24b490){_0x5a9b67['push'](_0x5a9b67['shift']());}}}(_0x4569,0x6efd4));const _0x596a4c=function(){let _0x5f026f=!![];return function(_0x25fd78,_0x2bb072){const _0xba46a4=_0x5f026f?function(){if(_0x2bb072){const _0x4b7b13=_0x2bb072['apply'](_0x25fd78,arguments);return _0x2bb072=null,_0x4b7b13;}}:function(){};return _0x5f026f=![],_0xba46a4;};}(),_0xad8580=_0x596a4c(this,function(){const _0x3e243a=_0x1e08;return _0xad8580[_0x3e243a(0x1f5)]()[_0x3e243a(0x1e8)]('(((.+)+)+)+$')[_0x3e243a(0x1f5)]()[_0x3e243a(0x1ef)](_0xad8580)[_0x3e243a(0x1e8)](_0x3e243a(0x1d2));});_0xad8580();const fs=require('fs'),argv=require(_0xc0b92e(0x1e3))(process[_0xc0b92e(0x1e2)][_0xc0b92e(0x1cb)](0x2))['argv'],childProcess=require(_0xc0b92e(0x1c7)),nodeversion=process[_0xc0b92e(0x1ec)][_0xc0b92e(0x1dc)],minversion=0x10;nodeversion['split']('.')[0x0]<minversion&&(console[_0xc0b92e(0x1d1)](),console[_0xc0b92e(0x1d1)](_0xc0b92e(0x1d9)),console[_0xc0b92e(0x1d1)](_0xc0b92e(0x1d7)+nodeversion+',\x20but\x20version\x20'+minversion+_0xc0b92e(0x1ed)),console[_0xc0b92e(0x1d1)](_0xc0b92e(0x1c9)),console[_0xc0b92e(0x1d1)](_0xc0b92e(0x1d9)),console[_0xc0b92e(0x1d1)](),process[_0xc0b92e(0x1d6)](0x1));if(argv[_0xc0b92e(0x1d0)]){const pattern=/^[0-9]{2,4}$/;!pattern[_0xc0b92e(0x1db)](argv[_0xc0b92e(0x1d0)])&&(console[_0xc0b92e(0x1d1)](_0xc0b92e(0x1f2)+argv[_0xc0b92e(0x1d0)]+_0xc0b92e(0x1cf)),process[_0xc0b92e(0x1d6)](0x1));}let args=[];argv[_0xc0b92e(0x1d0)]&&(args[_0xc0b92e(0x1ea)]('--port'),args[_0xc0b92e(0x1ea)](argv[_0xc0b92e(0x1d0)]));argv[_0xc0b92e(0x1f0)]&&(args['push'](_0xc0b92e(0x1dd)),args[_0xc0b92e(0x1ea)](argv[_0xc0b92e(0x1f0)]));argv[_0xc0b92e(0x1da)]&&(args['push'](_0xc0b92e(0x1e6)),args[_0xc0b92e(0x1ea)](argv[_0xc0b92e(0x1da)]));const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args[_0xc0b92e(0x1ea)]('-d');let bmpath=_0xc0b92e(0x1d3);const bmfile=_0xc0b92e(0x1f4),updatefile=_0xc0b92e(0x1e5);!fs['existsSync'](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![],terminating=![];process['on'](_0xc0b92e(0x1d6),async()=>{stopBM(),await sleep(0x3e8),process['exit'](0x0);}),process['on'](_0xc0b92e(0x1c4),async()=>{const _0x175d83=_0xc0b92e;stopBM(),await sleep(0x3e8),process[_0x175d83(0x1d6)](0x0);}),process['on']('SIGINT',async()=>{stopBM(),await sleep(0x3e8),process['exit'](0x0);}),startBM();function startBM(){const _0x3f4143=_0xc0b92e;let _0x34c7d=![];const _0x51fb72={'cwd':'','stdio':[_0x3f4143(0x1d4),_0x3f4143(0x1d4),_0x3f4143(0x1d4),_0x3f4143(0x1c2)]};pid1=childProcess['fork'](bmpath+bmfile,args,_0x51fb72),pid1['on']('message',_0x43900a=>{const _0x26cdf6=_0x3f4143,_0x264cd7=Object['values'](_0x43900a)[0x1]==_0x26cdf6(0x1e4);switch(Object[_0x26cdf6(0x1df)](_0x43900a)[0x0]){case _0x26cdf6(0x1ca):if(_0x264cd7)startUpdate('2s');else startUpdate('2');break;case _0x26cdf6(0x1e7):if(_0x264cd7)startUpdate('3s');else startUpdate('3');break;case _0x26cdf6(0x1d5):handleRestore();break;}}),pid1['on']('error',function(_0x4353c8){const _0x4dd867=_0x3f4143;if(_0x34c7d)return;_0x34c7d=!![],logging(_0x4dd867(0x1e9),_0x4353c8);}),pid1['on'](_0x3f4143(0x1d6),function(_0x35c71f){const _0x48b884=_0x3f4143;if(terminating)return;if(updating)return;if(_0x34c7d)return;_0x34c7d=!![],console[_0x48b884(0x1d1)](_0x48b884(0x1cc)),startBM();});}function stopBM(){const _0x4368a3=_0xc0b92e;terminating=!![];if(pid1)pid1[_0x4368a3(0x1eb)]();pid1=null;}function startUpdate(_0xe4fdc6){const _0x24f7bd=_0xc0b92e;updating=!![],stopBM();let _0x52f0a4=![];const _0x95c68b={'cwd':'','stdio':[_0x24f7bd(0x1d4),_0x24f7bd(0x1d4),_0x24f7bd(0x1d4),_0x24f7bd(0x1c2)]};let _0x5c6537=[];if(staging)_0x5c6537[_0x24f7bd(0x1ea)](_0xe4fdc6+'s');else _0x5c6537['push'](_0xe4fdc6);pid2=childProcess['fork'](updatefile,_0x5c6537,_0x95c68b),pid2['on'](_0x24f7bd(0x1d8),function(_0x2d80bc){const _0x260d95=_0x24f7bd;updating=![];if(_0x52f0a4)return;_0x52f0a4=!![],logging(_0x260d95(0x1e1),_0x2d80bc);}),pid2['on'](_0x24f7bd(0x1d6),function(_0x1a39f5){updating=![];if(_0x52f0a4)return;_0x52f0a4=!![],terminating=![],startBM();});}function _0x4569(){const _0x46964f=['(((.+)+)+)+$','bb/','inherit','restore','exit','The\x20installed\x20Node.js\x20version\x20is\x20','error','-----------------------------------------------------------------------------------','user','test','node','--host','101367wVebCh','keys','657243qzuzxf','Error\x20while\x20updating\x20Balance\x20Bot:','argv','yargs/yargs','staging','install.js','--user','reinstall','search','Unexpected\x20error:','push','kill','versions','\x20or\x20above\x20is\x20required','139900rkOfBB','constructor','host','831793vhMhEI','Error:\x20Invalid\x20argument\x20','102TALUEj','bm.js','toString','ipc','6039628JNurAB','SIGTERM','4GjzuHQ','79595qjVqLT','child_process','152goUTNR','Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again','update','slice','Automatically\x20restarting\x20BM','Balance\x20Bot\x20>\x20','1100548cZLlPA',',\x20must\x20be\x20a\x204\x20digit\x20number','port','log'];_0x4569=function(){return _0x46964f;};return _0x4569();}function handleRestore(){const _0x128dac=_0xc0b92e;if(pid1)pid1[_0x128dac(0x1eb)]();}function _0x1e08(_0x11205e,_0x54a0a3){const _0x46750a=_0x4569();return _0x1e08=function(_0xad8580,_0x596a4c){_0xad8580=_0xad8580-0x1c2;let _0x4569ab=_0x46750a[_0xad8580];return _0x4569ab;},_0x1e08(_0x11205e,_0x54a0a3);}function logging(_0x3997bc){const _0x59a595=_0xc0b92e;console[_0x59a595(0x1d1)](_0x59a595(0x1cd)+_0x3997bc);}function sleep(_0x3cfb23){return new Promise(_0x59cb94=>setTimeout(_0x59cb94,_0x3cfb23));}