const _0x5e7296=_0x4565;(function(_0x489c06,_0xc3670b){const _0x40e30c=_0x4565,_0x1ac8d2=_0x489c06();while(!![]){try{const _0x44eba1=parseInt(_0x40e30c(0x134))/0x1+-parseInt(_0x40e30c(0x155))/0x2+-parseInt(_0x40e30c(0x143))/0x3+-parseInt(_0x40e30c(0x15a))/0x4+-parseInt(_0x40e30c(0x14a))/0x5+parseInt(_0x40e30c(0x142))/0x6*(parseInt(_0x40e30c(0x13c))/0x7)+-parseInt(_0x40e30c(0x153))/0x8*(-parseInt(_0x40e30c(0x161))/0x9);if(_0x44eba1===_0xc3670b)break;else _0x1ac8d2['push'](_0x1ac8d2['shift']());}catch(_0x507667){_0x1ac8d2['push'](_0x1ac8d2['shift']());}}}(_0x44f9,0x1ca2a));const _0xc56897=function(){let _0x43d9c8=!![];return function(_0xf577c,_0x17b98b){const _0x258035=_0x43d9c8?function(){const _0x4d173f=_0x4565;if(_0x17b98b){const _0x2443f6=_0x17b98b[_0x4d173f(0x144)](_0xf577c,arguments);return _0x17b98b=null,_0x2443f6;}}:function(){};return _0x43d9c8=![],_0x258035;};}(),_0x22ddde=_0xc56897(this,function(){const _0x548166=_0x4565;return _0x22ddde['toString']()[_0x548166(0x160)](_0x548166(0x14c))['toString']()[_0x548166(0x12e)](_0x22ddde)[_0x548166(0x160)](_0x548166(0x14c));});_0x22ddde();const fs=require('fs'),argv=require(_0x5e7296(0x15b))(process['argv'][_0x5e7296(0x159)](0x2))[_0x5e7296(0x138)],childProcess=require(_0x5e7296(0x147)),nodeversion=process[_0x5e7296(0x150)][_0x5e7296(0x146)],minversion=0x10;nodeversion[_0x5e7296(0x14f)]('.')[0x0]<minversion&&(console[_0x5e7296(0x131)](),console[_0x5e7296(0x131)](_0x5e7296(0x132)),console['log'](_0x5e7296(0x136)+nodeversion+',\x20but\x20version\x20'+minversion+_0x5e7296(0x15f)),console[_0x5e7296(0x131)](_0x5e7296(0x140)),console[_0x5e7296(0x131)](_0x5e7296(0x132)),console[_0x5e7296(0x131)](),process[_0x5e7296(0x13d)](0x1));if(argv['port']){const pattern=/^[0-9]{2,4}$/;!pattern['test'](argv[_0x5e7296(0x130)])&&(console[_0x5e7296(0x131)](_0x5e7296(0x15c)+argv[_0x5e7296(0x130)]+_0x5e7296(0x158)),process[_0x5e7296(0x13d)](0x1));}let args=[];argv['port']&&(args[_0x5e7296(0x15d)](_0x5e7296(0x13e)),args[_0x5e7296(0x15d)](argv['port']));argv[_0x5e7296(0x14b)]&&(args[_0x5e7296(0x15d)](_0x5e7296(0x157)),args[_0x5e7296(0x15d)](argv[_0x5e7296(0x14b)]));argv[_0x5e7296(0x149)]&&(args['push'](_0x5e7296(0x148)),args[_0x5e7296(0x15d)](argv[_0x5e7296(0x149)]));const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args[_0x5e7296(0x15d)]('-d');let bmpath=_0x5e7296(0x151);function _0x4565(_0x1bfec5,_0x3f3ca4){const _0x476c3b=_0x44f9();return _0x4565=function(_0x22ddde,_0xc56897){_0x22ddde=_0x22ddde-0x12e;let _0x44f9f5=_0x476c3b[_0x22ddde];return _0x44f9f5;},_0x4565(_0x1bfec5,_0x3f3ca4);}function _0x44f9(){const _0x438a31=[',\x20must\x20be\x20a\x204\x20digit\x20number','slice','837752ptEYis','yargs/yargs','Error:\x20Invalid\x20argument\x20','push','terminate','\x20or\x20above\x20is\x20required','search','63zJPwqT','Error\x20while\x20updating\x20Balance\x20Bot:','constructor','values','port','log','-----------------------------------------------------------------------------------','staging','202246trJuXN','Unexpected\x20error:','The\x20installed\x20Node.js\x20version\x20is\x20','inherit','argv','message','SIGTERM','Automatically\x20restarting\x20BM','217273RtmYHx','exit','--port','ipc','Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again','keys','42iLKCoo','421290QrkhAj','apply','bm.js','node','child_process','--user','user','135740fTSpFg','host','(((.+)+)+)+$','update','fork','split','versions','bb/','kill','304488liiHYu','SIGINT','383280anzxvU','existsSync','--host'];_0x44f9=function(){return _0x438a31;};return _0x44f9();}const bmfile=_0x5e7296(0x145),updatefile='install.js';!fs[_0x5e7296(0x156)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![],terminating=![];process['on']('exit',async()=>{handleTerminate();}),process['on'](_0x5e7296(0x13a),async()=>{handleTerminate();}),process['on'](_0x5e7296(0x154),async()=>{handleTerminate();}),startBM();function startBM(){const _0x2c46e3=_0x5e7296;let _0x310057=![];const _0x36474e={'cwd':'','stdio':[_0x2c46e3(0x137),'inherit','inherit',_0x2c46e3(0x13f)]};pid1=childProcess[_0x2c46e3(0x14e)](bmpath+bmfile,args,_0x36474e),pid1['on'](_0x2c46e3(0x139),_0x17d4a3=>{const _0x45b4b8=_0x2c46e3,_0x31f831=Object[_0x45b4b8(0x12f)](_0x17d4a3)[0x1]==_0x45b4b8(0x133);switch(Object[_0x45b4b8(0x141)](_0x17d4a3)[0x0]){case _0x45b4b8(0x14d):if(_0x31f831)startUpdate('2s');else startUpdate('2');break;case'reinstall':if(_0x31f831)startUpdate('3s');else startUpdate('3');break;case'restore':handleRestore();break;case _0x45b4b8(0x15e):handleTerminate();break;}}),pid1['on']('error',function(_0x4a3414){const _0x3db792=_0x2c46e3;if(_0x310057)return;_0x310057=!![],logging(_0x3db792(0x135),_0x4a3414);}),pid1['on'](_0x2c46e3(0x13d),function(_0x48f67a){const _0x46a978=_0x2c46e3;if(terminating)return;if(updating)return;if(_0x310057)return;_0x310057=!![],console[_0x46a978(0x131)](_0x46a978(0x13b)),startBM();});}async function handleTerminate(){const _0x2342f0=_0x5e7296;stopBM(),await sleep(0x3e8),process[_0x2342f0(0x13d)](0x0);}function stopBM(){const _0x502fdd=_0x5e7296;terminating=!![];if(pid1)pid1[_0x502fdd(0x152)]();pid1=null;}function startUpdate(_0x3ffc07){const _0x3f862e=_0x5e7296;updating=!![],stopBM();let _0xf89af3=![];const _0x183000={'cwd':'','stdio':['inherit',_0x3f862e(0x137),_0x3f862e(0x137),_0x3f862e(0x13f)]};let _0x551f7=[];if(staging)_0x551f7[_0x3f862e(0x15d)](_0x3ffc07+'s');else _0x551f7[_0x3f862e(0x15d)](_0x3ffc07);pid2=childProcess[_0x3f862e(0x14e)](updatefile,_0x551f7,_0x183000),pid2['on']('error',function(_0x1b0dce){const _0x45c6c8=_0x3f862e;updating=![];if(_0xf89af3)return;_0xf89af3=!![],logging(_0x45c6c8(0x162),_0x1b0dce);}),pid2['on']('exit',function(_0x570ed3){updating=![];if(_0xf89af3)return;_0xf89af3=!![],terminating=![],startBM();});}function handleRestore(){const _0x124d06=_0x5e7296;if(pid1)pid1[_0x124d06(0x152)]();}function logging(_0x1a4ca1){const _0x33f0e8=_0x5e7296;console[_0x33f0e8(0x131)]('Balance\x20Bot\x20>\x20'+_0x1a4ca1);}function sleep(_0x321d7c){return new Promise(_0x4d4633=>setTimeout(_0x4d4633,_0x321d7c));}