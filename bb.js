const _0x945677=_0x1d3a;(function(_0x2a1508,_0x36e6d7){const _0x1fa9d5=_0x1d3a,_0x525676=_0x2a1508();while(!![]){try{const _0x3db414=-parseInt(_0x1fa9d5(0x1f9))/0x1*(-parseInt(_0x1fa9d5(0x1e8))/0x2)+-parseInt(_0x1fa9d5(0x21a))/0x3+parseInt(_0x1fa9d5(0x1ff))/0x4+parseInt(_0x1fa9d5(0x1fb))/0x5+parseInt(_0x1fa9d5(0x212))/0x6+-parseInt(_0x1fa9d5(0x20f))/0x7+-parseInt(_0x1fa9d5(0x20b))/0x8;if(_0x3db414===_0x36e6d7)break;else _0x525676['push'](_0x525676['shift']());}catch(_0x3a9dd5){_0x525676['push'](_0x525676['shift']());}}}(_0x2105,0xe3867));const _0x35770d=function(){let _0x1defdd=!![];return function(_0x4928cc,_0x56382b){const _0x5ef882=_0x1defdd?function(){const _0x4edef7=_0x1d3a;if(_0x56382b){const _0x45e420=_0x56382b[_0x4edef7(0x214)](_0x4928cc,arguments);return _0x56382b=null,_0x45e420;}}:function(){};return _0x1defdd=![],_0x5ef882;};}(),_0x5ea289=_0x35770d(this,function(){const _0x554828=_0x1d3a;return _0x5ea289[_0x554828(0x20d)]()[_0x554828(0x204)](_0x554828(0x1fe))[_0x554828(0x20d)]()[_0x554828(0x1f6)](_0x5ea289)[_0x554828(0x204)]('(((.+)+)+)+$');});_0x5ea289();const fs=require('fs'),argv=require(_0x945677(0x203))(process['argv'][_0x945677(0x1f8)](0x2))[_0x945677(0x201)],childProcess=require(_0x945677(0x219)),nodeversion=process[_0x945677(0x1fd)][_0x945677(0x210)],minversion=0x10;nodeversion[_0x945677(0x1e7)]('.')[0x0]<minversion&&(console[_0x945677(0x215)](),console[_0x945677(0x215)](_0x945677(0x213)),console[_0x945677(0x215)](_0x945677(0x1f7)+nodeversion+',\x20but\x20version\x20'+minversion+_0x945677(0x211)),console[_0x945677(0x215)]('Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again'),console['log'](_0x945677(0x213)),console[_0x945677(0x215)](),process[_0x945677(0x1fc)](0x1));if(argv['port']){const pattern=/^[0-9]{2,4}$/;!pattern['test'](argv[_0x945677(0x20a)])&&(console[_0x945677(0x215)](_0x945677(0x1eb)+argv[_0x945677(0x20a)]+_0x945677(0x218)),process['exit'](0x1));}function _0x2105(){const _0x48e229=['5267988LrdsCw','staging','argv','fork','yargs/yargs','search','message','reinstall','--user','--port','terminate','port','5053320rthrYN','Automatically\x20restarting\x20BM','toString','inherit','1655808zTwFzY','node','\x20or\x20above\x20is\x20required','4775010lkyTOH','-----------------------------------------------------------------------------------','apply','log','Unexpected\x20error:','values',',\x20must\x20be\x20a\x204\x20digit\x20number','child_process','5307858ozmQzD','--host','split','13060zuyfbe','ipc','Balance\x20Bot\x20>\x20','Error:\x20Invalid\x20argument\x20','existsSync','update','push','kill','error','SIGINT','host','restore','user','SIGTERM','constructor','The\x20installed\x20Node.js\x20version\x20is\x20','slice','89oZjvBM','install.js','4377180IYUfKQ','exit','versions','(((.+)+)+)+$'];_0x2105=function(){return _0x48e229;};return _0x2105();}let args=[];argv[_0x945677(0x20a)]&&(args[_0x945677(0x1ee)](_0x945677(0x208)),args[_0x945677(0x1ee)](argv[_0x945677(0x20a)]));argv['host']&&(args['push'](_0x945677(0x21b)),args['push'](argv[_0x945677(0x1f2)]));argv[_0x945677(0x1f4)]&&(args[_0x945677(0x1ee)](_0x945677(0x207)),args[_0x945677(0x1ee)](argv[_0x945677(0x1f4)]));const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args[_0x945677(0x1ee)]('-d');let bmpath='bb/';const bmfile='bm.js',updatefile=_0x945677(0x1fa);!fs[_0x945677(0x1ec)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![],terminating=![];process['on'](_0x945677(0x1fc),async()=>{handleTerminate();}),process['on'](_0x945677(0x1f5),async()=>{handleTerminate();}),process['on'](_0x945677(0x1f1),async()=>{handleTerminate();}),startBM();function startBM(){const _0x320c69=_0x945677;let _0x28edda=![];const _0x283b45={'cwd':'','stdio':[_0x320c69(0x20e),_0x320c69(0x20e),'inherit',_0x320c69(0x1e9)]};pid1=childProcess[_0x320c69(0x202)](bmpath+bmfile,args,_0x283b45),pid1['on'](_0x320c69(0x205),_0x42a0dc=>{const _0x280837=_0x320c69,_0x2b73f0=Object[_0x280837(0x217)](_0x42a0dc)[0x1]==_0x280837(0x200);switch(Object['keys'](_0x42a0dc)[0x0]){case _0x280837(0x1ed):if(_0x2b73f0)startUpdate('2s');else startUpdate('2');break;case _0x280837(0x206):if(_0x2b73f0)startUpdate('3s');else startUpdate('3');break;case _0x280837(0x1f3):handleRestore();break;case _0x280837(0x209):handleTerminate();break;}}),pid1['on']('error',function(_0x5660cd){const _0x33fc88=_0x320c69;if(_0x28edda)return;_0x28edda=!![],logging(_0x33fc88(0x216),_0x5660cd);}),pid1['on'](_0x320c69(0x1fc),function(_0x6a83fd){const _0x2867b9=_0x320c69;if(terminating)return;if(updating)return;if(_0x28edda)return;_0x28edda=!![],console[_0x2867b9(0x215)](_0x2867b9(0x20c)),startBM();});}async function handleTerminate(){stopBM(),await sleep(0x3e8),process['exit'](0x0);}function stopBM(){terminating=!![];if(pid1)pid1['kill']();pid1=null;}function _0x1d3a(_0x49881b,_0x270729){const _0x2abd0b=_0x2105();return _0x1d3a=function(_0x5ea289,_0x35770d){_0x5ea289=_0x5ea289-0x1e7;let _0x2105a4=_0x2abd0b[_0x5ea289];return _0x2105a4;},_0x1d3a(_0x49881b,_0x270729);}function startUpdate(_0xc4c7ce){const _0x47a282=_0x945677;updating=!![],stopBM();let _0x5cf65c=![];const _0x324603={'cwd':'','stdio':[_0x47a282(0x20e),_0x47a282(0x20e),_0x47a282(0x20e),'ipc']};let _0xdbe0d0=[];if(staging)_0xdbe0d0['push'](_0xc4c7ce+'s');else _0xdbe0d0['push'](_0xc4c7ce);pid2=childProcess['fork'](updatefile,_0xdbe0d0,_0x324603),pid2['on'](_0x47a282(0x1f0),function(_0x534b61){updating=![];if(_0x5cf65c)return;_0x5cf65c=!![],logging('Error\x20while\x20updating\x20Balance\x20Bot:',_0x534b61);}),pid2['on'](_0x47a282(0x1fc),function(_0xc79451){updating=![];if(_0x5cf65c)return;_0x5cf65c=!![],terminating=![],startBM();});}function handleRestore(){const _0x39269c=_0x945677;if(pid1)pid1[_0x39269c(0x1ef)]();}function logging(_0x1156f4){const _0x40d611=_0x945677;console[_0x40d611(0x215)](_0x40d611(0x1ea)+_0x1156f4);}function sleep(_0x1305b1){return new Promise(_0x773aa4=>setTimeout(_0x773aa4,_0x1305b1));}