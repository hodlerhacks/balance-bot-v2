const _0x312bcd=_0x3597;(function(_0x34c0c1,_0x5166ed){const _0x1e0a6d=_0x3597,_0x2a743d=_0x34c0c1();while(!![]){try{const _0x1c483d=-parseInt(_0x1e0a6d(0x168))/0x1+-parseInt(_0x1e0a6d(0x16d))/0x2+parseInt(_0x1e0a6d(0x188))/0x3*(parseInt(_0x1e0a6d(0x157))/0x4)+parseInt(_0x1e0a6d(0x153))/0x5+-parseInt(_0x1e0a6d(0x15c))/0x6*(-parseInt(_0x1e0a6d(0x156))/0x7)+parseInt(_0x1e0a6d(0x183))/0x8*(parseInt(_0x1e0a6d(0x166))/0x9)+-parseInt(_0x1e0a6d(0x17c))/0xa;if(_0x1c483d===_0x5166ed)break;else _0x2a743d['push'](_0x2a743d['shift']());}catch(_0x400268){_0x2a743d['push'](_0x2a743d['shift']());}}}(_0x1cf6,0xdcfdd));const _0x27c1eb=function(){let _0x71fa0e=!![];return function(_0x15350d,_0x11fdc5){const _0x542fc6=_0x71fa0e?function(){const _0x4378f9=_0x3597;if(_0x11fdc5){const _0x53a416=_0x11fdc5[_0x4378f9(0x173)](_0x15350d,arguments);return _0x11fdc5=null,_0x53a416;}}:function(){};return _0x71fa0e=![],_0x542fc6;};}(),_0x3004d7=_0x27c1eb(this,function(){const _0x2d7bea=_0x3597;return _0x3004d7[_0x2d7bea(0x162)]()[_0x2d7bea(0x16e)](_0x2d7bea(0x17f))[_0x2d7bea(0x162)]()['constructor'](_0x3004d7)['search']('(((.+)+)+)+$');});_0x3004d7();const fs=require('fs'),argv=require(_0x312bcd(0x174))(process[_0x312bcd(0x15a)][_0x312bcd(0x172)](0x2))[_0x312bcd(0x15a)],childProcess=require(_0x312bcd(0x155)),nodeversion=process[_0x312bcd(0x158)][_0x312bcd(0x176)],minversion=0x10;nodeversion[_0x312bcd(0x16c)]('.')[0x0]<minversion&&(console[_0x312bcd(0x184)](),console['log'](_0x312bcd(0x16b)),console[_0x312bcd(0x184)](_0x312bcd(0x180)+nodeversion+',\x20but\x20version\x20'+minversion+_0x312bcd(0x17b)),console[_0x312bcd(0x184)](_0x312bcd(0x17a)),console[_0x312bcd(0x184)]('-----------------------------------------------------------------------------------'),console['log'](),process[_0x312bcd(0x177)](0x1));if(argv[_0x312bcd(0x15f)]){const pattern=/^[0-9]{2,4}$/;!pattern[_0x312bcd(0x17e)](argv['port'])&&(console[_0x312bcd(0x184)](_0x312bcd(0x15d)+argv['port']+_0x312bcd(0x163)),process[_0x312bcd(0x177)](0x1));}let args=[];argv['port']&&(args[_0x312bcd(0x154)](_0x312bcd(0x15b)),args['push'](argv['port']));function _0x3597(_0x5e53c7,_0x2e2cba){const _0x2dbb72=_0x1cf6();return _0x3597=function(_0x3004d7,_0x27c1eb){_0x3004d7=_0x3004d7-0x152;let _0x1cf659=_0x2dbb72[_0x3004d7];return _0x1cf659;},_0x3597(_0x5e53c7,_0x2e2cba);}argv[_0x312bcd(0x185)]&&(args[_0x312bcd(0x154)](_0x312bcd(0x181)),args[_0x312bcd(0x154)](argv['host']));argv[_0x312bcd(0x152)]&&(args[_0x312bcd(0x154)](_0x312bcd(0x167)),args[_0x312bcd(0x154)](argv[_0x312bcd(0x152)]));const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args['push']('-d');function _0x1cf6(){const _0x55fb7d=['existsSync','inherit','-----------------------------------------------------------------------------------','split','391116QJtifv','search','ipc','SIGTERM','update','slice','apply','yargs/yargs','bb/','node','exit','restore','SIGINT','Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again','\x20or\x20above\x20is\x20required','21164620LEljEa','kill','test','(((.+)+)+)+$','The\x20installed\x20Node.js\x20version\x20is\x20','--host','install.js','228856AqNfgN','log','host','bm.js','Automatically\x20restarting\x20BM','316197VVBhjK','user','1643840ALcHqy','push','child_process','42PQIDMq','56zmPwvD','versions','Error\x20while\x20updating\x20Balance\x20Bot:','argv','--port','599778bnmoVJ','Error:\x20Invalid\x20argument\x20','keys','port','error','Balance\x20Bot\x20>\x20','toString',',\x20must\x20be\x20a\x204\x20digit\x20number','terminate','message','333hdGNep','--user','245390aCcBVI'];_0x1cf6=function(){return _0x55fb7d;};return _0x1cf6();}let bmpath=_0x312bcd(0x175);const bmfile=_0x312bcd(0x186),updatefile=_0x312bcd(0x182);!fs[_0x312bcd(0x169)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![],terminating=![];process['on'](_0x312bcd(0x177),async()=>{handleTerminate();}),process['on'](_0x312bcd(0x170),async()=>{handleTerminate();}),process['on'](_0x312bcd(0x179),async()=>{handleTerminate();}),startBM();function startBM(){const _0x29c620=_0x312bcd;let _0x5ee1de=![];const _0x5e16d8={'cwd':'','stdio':[_0x29c620(0x16a),'inherit','inherit','ipc']};pid1=childProcess['fork'](bmpath+bmfile,args,_0x5e16d8),pid1['on'](_0x29c620(0x165),_0x5c2ed7=>{const _0x5c5a66=_0x29c620,_0x4b4b50=Object['values'](_0x5c2ed7)[0x1]=='staging';switch(Object[_0x5c5a66(0x15e)](_0x5c2ed7)[0x0]){case _0x5c5a66(0x171):if(_0x4b4b50)startUpdate('2s');else startUpdate('2');break;case'reinstall':if(_0x4b4b50)startUpdate('3s');else startUpdate('3');break;case _0x5c5a66(0x178):handleRestore();break;case _0x5c5a66(0x164):handleTerminate();break;}}),pid1['on'](_0x29c620(0x160),function(_0x11009c){if(_0x5ee1de)return;_0x5ee1de=!![],logging('Unexpected\x20error:',_0x11009c);}),pid1['on'](_0x29c620(0x177),function(_0x1a8365){const _0x4bbdd5=_0x29c620;if(terminating)return;if(updating)return;if(_0x5ee1de)return;_0x5ee1de=!![],console[_0x4bbdd5(0x184)](_0x4bbdd5(0x187)),startBM();});}async function handleTerminate(){const _0x666313=_0x312bcd;stopBM(),await sleep(0x3e8),process[_0x666313(0x177)](0x0);}function stopBM(){terminating=!![];if(pid1)pid1['kill']();pid1=null;}function startUpdate(_0x4cad13){const _0x5528de=_0x312bcd;updating=!![],stopBM();let _0x1d002d=![];const _0x4ff39c={'cwd':'','stdio':[_0x5528de(0x16a),_0x5528de(0x16a),'inherit',_0x5528de(0x16f)]};let _0xb0620c=[];if(staging)_0xb0620c[_0x5528de(0x154)](_0x4cad13+'s');else _0xb0620c['push'](_0x4cad13);pid2=childProcess['fork'](updatefile,_0xb0620c,_0x4ff39c),pid2['on'](_0x5528de(0x160),function(_0x786aa8){const _0x114798=_0x5528de;updating=![];if(_0x1d002d)return;_0x1d002d=!![],logging(_0x114798(0x159),_0x786aa8);}),pid2['on']('exit',function(_0x4118c3){updating=![];if(_0x1d002d)return;_0x1d002d=!![],terminating=![],startBM();});}function handleRestore(){const _0x474510=_0x312bcd;if(pid1)pid1[_0x474510(0x17d)]();}function logging(_0x532c6e){const _0xa3f4b0=_0x312bcd;console['log'](_0xa3f4b0(0x161)+_0x532c6e);}function sleep(_0x5466d5){return new Promise(_0x379da6=>setTimeout(_0x379da6,_0x5466d5));}