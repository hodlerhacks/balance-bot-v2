const _0x290037=_0x3fb9;(function(_0x41bb46,_0x29b6d1){const _0x4e328a=_0x3fb9,_0x32a8f1=_0x41bb46();while(!![]){try{const _0x2985ad=-parseInt(_0x4e328a(0x1aa))/0x1*(-parseInt(_0x4e328a(0x1a4))/0x2)+parseInt(_0x4e328a(0x1a9))/0x3+-parseInt(_0x4e328a(0x1a2))/0x4*(parseInt(_0x4e328a(0x1a8))/0x5)+parseInt(_0x4e328a(0x19a))/0x6*(parseInt(_0x4e328a(0x194))/0x7)+parseInt(_0x4e328a(0x1a3))/0x8*(-parseInt(_0x4e328a(0x1a6))/0x9)+-parseInt(_0x4e328a(0x1ac))/0xa+-parseInt(_0x4e328a(0x19f))/0xb*(-parseInt(_0x4e328a(0x196))/0xc);if(_0x2985ad===_0x29b6d1)break;else _0x32a8f1['push'](_0x32a8f1['shift']());}catch(_0x3dcfbe){_0x32a8f1['push'](_0x32a8f1['shift']());}}}(_0x598a,0x84959));const _0x11eda4=function(){let _0xd3f05c=!![];return function(_0x3646d0,_0x117ceb){const _0xfc0fe2=_0xd3f05c?function(){if(_0x117ceb){const _0x356f99=_0x117ceb['apply'](_0x3646d0,arguments);return _0x117ceb=null,_0x356f99;}}:function(){};return _0xd3f05c=![],_0xfc0fe2;};}(),_0x5998cf=_0x11eda4(this,function(){const _0xe738ee=_0x3fb9;return _0x5998cf[_0xe738ee(0x19c)]()[_0xe738ee(0x1a0)](_0xe738ee(0x195))['toString']()[_0xe738ee(0x1ab)](_0x5998cf)['search']('(((.+)+)+)+$');});_0x5998cf();function _0x3fb9(_0x41f7e7,_0xbce24d){const _0x1a2bd0=_0x598a();return _0x3fb9=function(_0x5998cf,_0x11eda4){_0x5998cf=_0x5998cf-0x194;let _0x598a7b=_0x1a2bd0[_0x5998cf];return _0x598a7b;},_0x3fb9(_0x41f7e7,_0xbce24d);}const clients=[],addClient=(_0x52d3de,_0x400674,_0x274d1d)=>{const _0x33c2ef=_0x3fb9;let _0x1ac37e;const _0x1d9383=existsClient(_0x400674,_0x274d1d);return _0x1d9383?_0x1ac37e=updateClient(_0x1d9383['id'],{'id':_0x52d3de,'server':_0x33c2ef(0x19d)}):(_0x1ac37e={'id':_0x52d3de,'uuid':_0x400674,'bot':_0x274d1d,'server':_0x33c2ef(0x197)},clients['push'](_0x1ac37e)),_0x1ac37e;},updateClient=(_0xed9070,_0x31fd9d)=>{let _0x1b374e=clients['findIndex'](_0x2711ed=>_0x2711ed['id']==_0xed9070);return _0x1b374e!=-0x1&&(clients[_0x1b374e]={...clients[_0x1b374e],..._0x31fd9d}),clients[_0x1b374e];},existsClient=(_0x141c94,_0x590523)=>{const _0x1eb7f5=_0x3fb9;let _0x5e0675=![];return clients[_0x1eb7f5(0x1a5)](_0x106479=>{const _0x5bd465=_0x1eb7f5;_0x106479[_0x5bd465(0x19b)]===_0x141c94&&_0x106479[_0x5bd465(0x198)]===_0x590523&&(_0x5e0675=_0x106479);}),_0x5e0675;},removeClient=_0x1e1f72=>{const _0x279d0e=_0x3fb9;let _0x1bc104=clients['find'](_0x41c6c1=>_0x41c6c1['id']===_0x1e1f72);if(_0x1bc104)return _0x1bc104[_0x279d0e(0x1a1)]=_0x279d0e(0x1ad),clients;},getClient=_0x46791c=>{const _0x1889b1=_0x3fb9;return clients[_0x1889b1(0x1a7)](_0x50d672=>_0x50d672['id']===_0x46791c&&_0x50d672[_0x1889b1(0x1a1)]!==_0x1889b1(0x1ad));},getAllClients=(_0x580157=![])=>{const _0x6b1e62=_0x3fb9;if(_0x580157)return clients;else return clients['filter'](_0x4299ad=>_0x4299ad[_0x6b1e62(0x1a1)]!==_0x6b1e62(0x1ad));},getClientsWithBotID=_0x4e4b73=>{const _0xa2b296=_0x3fb9;return clients[_0xa2b296(0x199)](_0x39b5d3=>_0x39b5d3[_0xa2b296(0x198)]===_0x4e4b73&&_0x39b5d3[_0xa2b296(0x1a1)]!==_0xa2b296(0x1ad));},getClientsWithUuid=_0x16dfc0=>{const _0x886d11=_0x3fb9;return clients['filter'](_0x21acc7=>_0x21acc7[_0x886d11(0x19b)]===_0x16dfc0&&_0x21acc7['server']!==_0x886d11(0x1ad));};module[_0x290037(0x19e)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};function _0x598a(){const _0x3e340a=['exports','7279954SyVSCW','search','server','2494484oYBekb','200HDJVAj','6ViKUrk','forEach','170811hjjKkY','find','5qvnWgO','2479530zjiWpp','294347gBwSbn','constructor','9371440NCLFvu','disconnected','21dhGjAq','(((.+)+)+)+$','12pjVovb','starting','bot','filter','413880NeHfDA','uuid','toString','connected'];_0x598a=function(){return _0x3e340a;};return _0x598a();}