const _0x57cd4c=_0x1dc4;(function(_0x57761b,_0x5bac2a){const _0x111278=_0x1dc4,_0x264928=_0x57761b();while(!![]){try{const _0x2ac42e=parseInt(_0x111278(0x1a6))/0x1+parseInt(_0x111278(0x191))/0x2*(-parseInt(_0x111278(0x197))/0x3)+parseInt(_0x111278(0x199))/0x4*(parseInt(_0x111278(0x1b5))/0x5)+parseInt(_0x111278(0x1a3))/0x6+parseInt(_0x111278(0x18e))/0x7+parseInt(_0x111278(0x19f))/0x8*(parseInt(_0x111278(0x1b8))/0x9)+-parseInt(_0x111278(0x189))/0xa;if(_0x2ac42e===_0x5bac2a)break;else _0x264928['push'](_0x264928['shift']());}catch(_0xec849e){_0x264928['push'](_0x264928['shift']());}}}(_0x29f0,0xd3146));const _0xda1faa=function(){let _0x3a787b=!![];return function(_0x48b46e,_0x5f6b18){const _0x83ba43=_0x3a787b?function(){if(_0x5f6b18){const _0x3c8fa2=_0x5f6b18['apply'](_0x48b46e,arguments);return _0x5f6b18=null,_0x3c8fa2;}}:function(){};return _0x3a787b=![],_0x83ba43;};}(),_0x23d302=_0xda1faa(this,function(){const _0xe00c71=_0x1dc4;return _0x23d302[_0xe00c71(0x1a2)]()[_0xe00c71(0x18d)](_0xe00c71(0x1aa))[_0xe00c71(0x1a2)]()[_0xe00c71(0x18f)](_0x23d302)[_0xe00c71(0x18d)](_0xe00c71(0x1aa));});_0x23d302();const fs=require('fs'),argv=require(_0x57cd4c(0x1b7))(process[_0x57cd4c(0x192)][_0x57cd4c(0x193)](0x2))[_0x57cd4c(0x192)],childProcess=require('child_process'),nodeversion=process[_0x57cd4c(0x1b6)][_0x57cd4c(0x1ab)],minversion=0x10;nodeversion['split']('.')[0x0]<minversion&&(console[_0x57cd4c(0x1b4)](),console[_0x57cd4c(0x1b4)](_0x57cd4c(0x1a9)),console[_0x57cd4c(0x1b4)]('The\x20installed\x20Node.js\x20version\x20is\x20'+nodeversion+_0x57cd4c(0x19d)+minversion+'\x20or\x20above\x20is\x20required'),console[_0x57cd4c(0x1b4)](_0x57cd4c(0x195)),console[_0x57cd4c(0x1b4)]('-----------------------------------------------------------------------------------'),console['log'](),process[_0x57cd4c(0x1a0)](0x1));if(argv[_0x57cd4c(0x1b2)]){const pattern=/^[0-9]{2,4}$/;!pattern[_0x57cd4c(0x187)](argv[_0x57cd4c(0x1b2)])&&(console['log'](_0x57cd4c(0x18a)+argv[_0x57cd4c(0x1b2)]+',\x20must\x20be\x20a\x204\x20digit\x20number'),process[_0x57cd4c(0x1a0)](0x1));}let args=[];argv[_0x57cd4c(0x1b2)]&&(args[_0x57cd4c(0x1af)]('--port'),args[_0x57cd4c(0x1af)](argv['port']));argv['host']&&(args[_0x57cd4c(0x1af)](_0x57cd4c(0x198)),args[_0x57cd4c(0x1af)](argv[_0x57cd4c(0x185)]));argv[_0x57cd4c(0x186)]&&(args[_0x57cd4c(0x1af)](_0x57cd4c(0x190)),args['push'](argv[_0x57cd4c(0x186)]));function _0x1dc4(_0x4a2636,_0x321709){const _0x311ab3=_0x29f0();return _0x1dc4=function(_0x23d302,_0xda1faa){_0x23d302=_0x23d302-0x184;let _0x29f09b=_0x311ab3[_0x23d302];return _0x29f09b;},_0x1dc4(_0x4a2636,_0x321709);}const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args[_0x57cd4c(0x1af)]('-d');let bmpath=_0x57cd4c(0x19c);const bmfile=_0x57cd4c(0x1ae),updatefile='install.js';!fs[_0x57cd4c(0x18b)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![],terminating=![];function _0x29f0(){const _0x2780ee=['restore','26122800WWWhNe','Error:\x20Invalid\x20argument\x20','existsSync','Error\x20while\x20updating\x20Balance\x20Bot:','search','4797387iWzkRg','constructor','--user','10366sNuJQk','argv','slice','fork','Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again','SIGINT','609pbRiWb','--host','20zMVrMz','keys','values','bb/',',\x20but\x20version\x20','terminate','5992kadDFU','exit','message','toString','7973352boiPFt','staging','Automatically\x20restarting\x20BM','283286ZWtcOB','inherit','reinstall','-----------------------------------------------------------------------------------','(((.+)+)+)+$','node','Unexpected\x20error:','Balance\x20Bot\x20>\x20','bm.js','push','error','SIGTERM','port','ipc','log','1060805iPnNoF','versions','yargs/yargs','14067PriHhe','kill','update','host','user','test'];_0x29f0=function(){return _0x2780ee;};return _0x29f0();}process['on'](_0x57cd4c(0x1a0),async()=>{handleTerminate();}),process['on'](_0x57cd4c(0x1b1),async()=>{handleTerminate();}),process['on'](_0x57cd4c(0x196),async()=>{handleTerminate();}),startBM();function startBM(){const _0x169e9e=_0x57cd4c;let _0x128f4b=![];const _0x264936={'cwd':'','stdio':['inherit',_0x169e9e(0x1a7),'inherit',_0x169e9e(0x1b3)]};pid1=childProcess[_0x169e9e(0x194)](bmpath+bmfile,args,_0x264936),pid1['on'](_0x169e9e(0x1a1),_0x5e5e07=>{const _0x5dca34=_0x169e9e,_0x5635c8=Object[_0x5dca34(0x19b)](_0x5e5e07)[0x1]==_0x5dca34(0x1a4);switch(Object[_0x5dca34(0x19a)](_0x5e5e07)[0x0]){case _0x5dca34(0x184):if(_0x5635c8)startUpdate('2s');else startUpdate('2');break;case _0x5dca34(0x1a8):if(_0x5635c8)startUpdate('3s');else startUpdate('3');break;case _0x5dca34(0x188):handleRestore();break;case _0x5dca34(0x19e):handleTerminate();break;}}),pid1['on']('error',function(_0x1bf245){const _0x29be6c=_0x169e9e;if(_0x128f4b)return;_0x128f4b=!![],logging(_0x29be6c(0x1ac),_0x1bf245);}),pid1['on']('exit',function(_0x4d3141){const _0x5801c4=_0x169e9e;if(terminating)return;if(updating)return;if(_0x128f4b)return;_0x128f4b=!![],console['log'](_0x5801c4(0x1a5)),startBM();});}async function handleTerminate(){const _0x70047e=_0x57cd4c;stopBM(),await sleep(0x3e8),process[_0x70047e(0x1a0)](0x0);}function stopBM(){const _0x141db5=_0x57cd4c;terminating=!![];if(pid1)pid1[_0x141db5(0x1b9)]();pid1=null;}function startUpdate(_0x232c70){const _0x517863=_0x57cd4c;updating=!![],stopBM();let _0x50f679=![];const _0x42ecea={'cwd':'','stdio':['inherit',_0x517863(0x1a7),_0x517863(0x1a7),_0x517863(0x1b3)]};let _0x48f71c=[];if(staging)_0x48f71c['push'](_0x232c70+'s');else _0x48f71c[_0x517863(0x1af)](_0x232c70);pid2=childProcess[_0x517863(0x194)](updatefile,_0x48f71c,_0x42ecea),pid2['on'](_0x517863(0x1b0),function(_0x2bc903){const _0x2ae927=_0x517863;updating=![];if(_0x50f679)return;_0x50f679=!![],logging(_0x2ae927(0x18c),_0x2bc903);}),pid2['on'](_0x517863(0x1a0),function(_0x1b2366){updating=![];if(_0x50f679)return;_0x50f679=!![],terminating=![],startBM();});}function handleRestore(){const _0x67f566=_0x57cd4c;if(pid1)pid1[_0x67f566(0x1b9)]();}function logging(_0x52a734){const _0x15fa63=_0x57cd4c;console['log'](_0x15fa63(0x1ad)+_0x52a734);}function sleep(_0x245156){return new Promise(_0x5cb206=>setTimeout(_0x5cb206,_0x245156));}