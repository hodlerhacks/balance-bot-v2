const _0x5ca4fd=_0x434f;(function(_0x3fd849,_0x5caa61){const _0x27ffb1=_0x434f,_0x4c0934=_0x3fd849();while(!![]){try{const _0x2c0973=-parseInt(_0x27ffb1(0x166))/0x1*(-parseInt(_0x27ffb1(0x164))/0x2)+parseInt(_0x27ffb1(0x177))/0x3*(parseInt(_0x27ffb1(0x16e))/0x4)+parseInt(_0x27ffb1(0x16b))/0x5*(parseInt(_0x27ffb1(0x162))/0x6)+parseInt(_0x27ffb1(0x16f))/0x7*(-parseInt(_0x27ffb1(0x179))/0x8)+parseInt(_0x27ffb1(0x178))/0x9+-parseInt(_0x27ffb1(0x169))/0xa+-parseInt(_0x27ffb1(0x167))/0xb;if(_0x2c0973===_0x5caa61)break;else _0x4c0934['push'](_0x4c0934['shift']());}catch(_0x2321b0){_0x4c0934['push'](_0x4c0934['shift']());}}}(_0xaf82,0x7dc8c));const _0x31cd2e=function(){let _0x1e3591=!![];return function(_0x5b4632,_0xbeca98){const _0x38e700=_0x1e3591?function(){const _0x4cfd75=_0x434f;if(_0xbeca98){const _0x23538b=_0xbeca98[_0x4cfd75(0x173)](_0x5b4632,arguments);return _0xbeca98=null,_0x23538b;}}:function(){};return _0x1e3591=![],_0x38e700;};}(),_0x148f19=_0x31cd2e(this,function(){const _0x12be7e=_0x434f;return _0x148f19[_0x12be7e(0x16a)]()[_0x12be7e(0x174)](_0x12be7e(0x161))[_0x12be7e(0x16a)]()[_0x12be7e(0x165)](_0x148f19)[_0x12be7e(0x174)]('(((.+)+)+)+$');});_0x148f19();function _0x434f(_0x63dadd,_0x5aa96a){const _0x1ad834=_0xaf82();return _0x434f=function(_0x148f19,_0x31cd2e){_0x148f19=_0x148f19-0x161;let _0xaf82b1=_0x1ad834[_0x148f19];return _0xaf82b1;},_0x434f(_0x63dadd,_0x5aa96a);}const clients=[],addClient=(_0x3cbd87,_0x358456,_0x673c62)=>{const _0x20ea25=_0x434f;let _0x2fb1dc;const _0x5c825b=existsClient(_0x358456,_0x673c62);return _0x5c825b?_0x2fb1dc=updateClient(_0x5c825b['id'],{'id':_0x3cbd87,'server':'connected'}):(_0x2fb1dc={'id':_0x3cbd87,'uuid':_0x358456,'bot':_0x673c62,'server':'starting'},clients[_0x20ea25(0x16d)](_0x2fb1dc)),_0x2fb1dc;},updateClient=(_0x487d06,_0x3b2995)=>{const _0x3b5478=_0x434f;let _0xf94458=clients[_0x3b5478(0x16c)](_0x3302f0=>_0x3302f0['id']==_0x487d06);return _0xf94458!=-0x1&&(clients[_0xf94458]={...clients[_0xf94458],..._0x3b2995}),clients[_0xf94458];},existsClient=(_0x2126d6,_0x1aa1f0)=>{const _0x581a01=_0x434f;let _0x5f0ac7=![];return clients[_0x581a01(0x17a)](_0x3df125=>{const _0x26c365=_0x581a01;_0x3df125[_0x26c365(0x168)]===_0x2126d6&&_0x3df125[_0x26c365(0x176)]===_0x1aa1f0&&(_0x5f0ac7=_0x3df125);}),_0x5f0ac7;},removeClient=_0x4e1777=>{const _0x2486d5=_0x434f;let _0x474824=clients[_0x2486d5(0x171)](_0x4a9e42=>_0x4a9e42['id']===_0x4e1777);if(_0x474824)return _0x474824['server']=_0x2486d5(0x172),clients;},getClient=_0x27cea0=>{const _0x5c1ca1=_0x434f;return clients[_0x5c1ca1(0x171)](_0x52be85=>_0x52be85['id']===_0x27cea0&&_0x52be85['server']!==_0x5c1ca1(0x172));},getAllClients=(_0xdc8785=![])=>{const _0x5c16c2=_0x434f;if(_0xdc8785)return clients;else return clients[_0x5c16c2(0x170)](_0x3b1f7c=>_0x3b1f7c[_0x5c16c2(0x175)]!=='disconnected');},getClientsWithBotID=_0x32d8dc=>{const _0x847156=_0x434f;return clients[_0x847156(0x170)](_0x5c96e2=>_0x5c96e2[_0x847156(0x176)]===_0x32d8dc&&_0x5c96e2[_0x847156(0x175)]!==_0x847156(0x172));},getClientsWithUuid=_0x128fb1=>{const _0x450d62=_0x434f;return clients[_0x450d62(0x170)](_0x267666=>_0x267666[_0x450d62(0x168)]===_0x128fb1&&_0x267666[_0x450d62(0x175)]!==_0x450d62(0x172));};module[_0x5ca4fd(0x163)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};function _0xaf82(){const _0xc549b1=['constructor','407080qeJVwO','11301180aKbNZD','uuid','7580000FBNFVW','toString','595xEfdCS','findIndex','push','16HMqXgZ','11018HIsWgM','filter','find','disconnected','apply','search','server','bot','620058RMaeQt','5868513xFhoQE','1688zvrARN','forEach','(((.+)+)+)+$','17130gHAfYt','exports','4mUIlVh'];_0xaf82=function(){return _0xc549b1;};return _0xaf82();}