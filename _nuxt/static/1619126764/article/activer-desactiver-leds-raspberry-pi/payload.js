__NUXT_JSONP__("/article/activer-desactiver-leds-raspberry-pi", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R){return {data:[{}],fetch:{"0":{hostName:"https:\u002F\u002Fframboise-pi.skyost.eu",article:{slug:"activer-desactiver-leds-raspberry-pi",description:t,title:"Activer ou désactiver les LEDs intégrées d'un Raspberry Pi",categories:[A],date:"2021-04-22T00:00:00.000Z",toc:[{id:B,depth:u,text:C},{id:D,depth:u,text:E},{id:F,depth:u,text:G}],body:{type:H,children:[{type:b,tag:f,props:{},children:[{type:b,tag:I,props:{},children:[{type:a,value:t}]}]},{type:a,value:c},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Cela peut être utile, par exemple pour réduire la consommation globale de la bête,\nou tout simplement pour faire moins de lumière."}]},{type:a,value:c},{type:b,tag:v,props:{id:B},children:[{type:a,value:C},{type:b,tag:h,props:{href:"#choisir-quelle-led-contr%C3%B4ler",ariaHidden:w,tabIndex:x},children:[{type:b,tag:d,props:{className:[y]},children:[]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Si votre carte a deux LEDs (c'est le cas d'un Raspberry Pi 4 par exemple), voici les LEDs que vous pouvez contrôler :"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:J,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:z}]},{type:a,value:" qui désigne la LED ACT (LED d'activité)."}]},{type:a,value:c},{type:b,tag:J,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:K}]},{type:a,value:" qui désigne la LED PWR (LED d'alimentation). Attention, cela ne fonctionne que sur les modèles les plus récents."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Si elle n'en possède qu'une seule (c'est le cas pour les Raspberry Pi Zero), votre seule possibilité est la "},{type:b,tag:e,props:{},children:[{type:a,value:z}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Choisissez la LED que vous souhaitez contrôler et rendez-vous dans l'étape suivante."}]},{type:a,value:c},{type:b,tag:v,props:{id:D},children:[{type:a,value:E},{type:b,tag:h,props:{href:"#d%C3%A9sactiver-la-led",ariaHidden:w,tabIndex:x},children:[{type:b,tag:d,props:{className:[y]},children:[]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Commencez par "},{type:b,tag:"nuxt-link",props:{to:"\u002Farticle\u002Finstallation-minimale-raspberry-pi\u002F#se-connecter-en-ssh"},children:[{type:a,value:"vous connecter en SSH"}]},{type:a,value:".\nTout d'abord, il va falloir modifier un petit peu le comportement par défaut de la LED choisie en entrant :"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{className:[g,n,o]},children:[{type:a,value:p}]},{type:a,value:" none "},{type:b,tag:d,props:{className:[g,q]},children:[{type:a,value:r}]},{type:a,value:L}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Ensuite pour désactiver la LED, entrez :"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{className:[g,n,o]},children:[{type:a,value:p}]},{type:a,value:s},{type:b,tag:d,props:{className:[g,M]},children:[{type:a,value:N}]},{type:a,value:s},{type:b,tag:d,props:{className:[g,q]},children:[{type:a,value:r}]},{type:a,value:O}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Si vous souhaitez la réactiver, remplacez simplement le "},{type:b,tag:e,props:{},children:[{type:a,value:N}]},{type:a,value:P},{type:b,tag:e,props:{},children:[{type:a,value:Q}]},{type:a,value:" :"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{className:[g,n,o]},children:[{type:a,value:p}]},{type:a,value:s},{type:b,tag:d,props:{className:[g,M]},children:[{type:a,value:Q}]},{type:a,value:s},{type:b,tag:d,props:{className:[g,q]},children:[{type:a,value:r}]},{type:a,value:O}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"N'oubliez pas de remplacer "},{type:b,tag:e,props:{},children:[{type:a,value:z}]},{type:a,value:P},{type:b,tag:e,props:{},children:[{type:a,value:K}]},{type:a,value:" si vous préférez agir sur la LED PWR (si votre modèle la supporte)."}]},{type:a,value:c},{type:b,tag:v,props:{id:F},children:[{type:a,value:G},{type:b,tag:h,props:{href:"#revenir-au-comportement-par-d%C3%A9faut",ariaHidden:w,tabIndex:x},children:[{type:b,tag:d,props:{className:[y]},children:[]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"De même, pour revenir au comportement par défaut de la LED, il suffit d'entrer une seule petite commande :"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{className:[g,n,o]},children:[{type:a,value:p}]},{type:a,value:" mmc0 "},{type:b,tag:d,props:{className:[g,q]},children:[{type:a,value:r}]},{type:a,value:L}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:"strong",props:{},children:[{type:a,value:"Bonus :"}]},{type:a,value:" Il y a beaucoup d'autres comportements disponibles pour votre LED ("},{type:b,tag:e,props:{},children:[{type:a,value:"heartbeat"}]},{type:a,value:", "},{type:b,tag:e,props:{},children:[{type:a,value:"timer"}]},{type:a,value:", et même\nmanipulation par GPIO !), consultez "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgist.github.com\u002Ftaktran\u002F1b691c08216dd30b70bf",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"ce gist"}]},{type:a,value:" si vous souhaitez\nun peu plus d'infos."}]}]},excerpt:{type:H,children:[{type:b,tag:f,props:{},children:[{type:b,tag:I,props:{},children:[{type:a,value:t}]}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Factiver-desactiver-leds-raspberry-pi",extension:".md",createdAt:R,updatedAt:R,bodyHtml:"\u003Cp\u003E\u003Cem\u003EIl se peut, pour une raison quelconque, que vous souhaitiez (dés)activer les LEDs intégrées de votre Raspberry Pi\n(c'est-à-dire, les témoins d'activité et d'alimentation). Cet article va vous expliquer comment faire.\u003C\u002Fem\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003ECela peut être utile, par exemple pour réduire la consommation globale de la bête,\nou tout simplement pour faire moins de lumière.\u003C\u002Fp\u003E\n\u003Ch2 id=\"choisir-quelle-led-contrôler\"\u003EChoisir quelle LED contrôler\u003C\u002Fh2\u003E\n\u003Cp\u003ESi votre carte a deux LEDs (c'est le cas d'un Raspberry Pi 4 par exemple), voici les LEDs que vous pouvez contrôler :\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Ccode\u003Eled0\u003C\u002Fcode\u003E qui désigne la LED ACT (LED d'activité).\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003Eled1\u003C\u002Fcode\u003E qui désigne la LED PWR (LED d'alimentation). Attention, cela ne fonctionne que sur les modèles les plus récents.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003ESi elle n'en possède qu'une seule (c'est le cas pour les Raspberry Pi Zero), votre seule possibilité est la \u003Ccode\u003Eled0\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\u003Cp\u003EChoisissez la LED que vous souhaitez contrôler et rendez-vous dans l'étape suivante.\u003C\u002Fp\u003E\n\u003Ch2 id=\"désactiver-la-led\"\u003E(Dés)activer la LED\u003C\u002Fh2\u003E\n\u003Cp\u003ECommencez par \u003Ca href=\"https:\u002F\u002Fframboise-pi.skyost.eu\u002Farticle\u002Finstallation-minimale-raspberry-pi\u002F#se-connecter-en-ssh\"\u003Evous connecter en SSH\u003C\u002Fa\u003E.\nTout d'abord, il va falloir modifier un petit peu le comportement par défaut de la LED choisie en entrant :\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Eecho none \u003E\u002Fsys\u002Fclass\u002Fleds\u002Fled0\u002Ftrigger\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EEnsuite pour désactiver la LED, entrez :\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Eecho 0 \u003E\u002Fsys\u002Fclass\u002Fleds\u002Fled0\u002Fbrightness\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003ESi vous souhaitez la réactiver, remplacez simplement le \u003Ccode\u003E0\u003C\u002Fcode\u003E par \u003Ccode\u003E1\u003C\u002Fcode\u003E :\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Eecho 1 \u003E\u002Fsys\u002Fclass\u002Fleds\u002Fled0\u002Fbrightness\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EN'oubliez pas de remplacer \u003Ccode\u003Eled0\u003C\u002Fcode\u003E par \u003Ccode\u003Eled1\u003C\u002Fcode\u003E si vous préférez agir sur la LED PWR (si votre modèle la supporte).\u003C\u002Fp\u003E\n\u003Ch2 id=\"revenir-au-comportement-par-défaut\"\u003ERevenir au comportement par défaut\u003C\u002Fh2\u003E\n\u003Cp\u003EDe même, pour revenir au comportement par défaut de la LED, il suffit d'entrer une seule petite commande :\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Eecho mmc0 \u003E\u002Fsys\u002Fclass\u002Fleds\u002Fled0\u002Ftrigger\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E\u003Cstrong\u003EBonus :\u003C\u002Fstrong\u003E Il y a beaucoup d'autres comportements disponibles pour votre LED (\u003Ccode\u003Eheartbeat\u003C\u002Fcode\u003E, \u003Ccode\u003Etimer\u003C\u002Fcode\u003E, et même\nmanipulation par GPIO !), consultez \u003Ca href=\"https:\u002F\u002Fgist.github.com\u002Ftaktran\u002F1b691c08216dd30b70bf\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003Ece gist\u003C\u002Fa\u003E si vous souhaitez\nun peu plus d'infos.\u003C\u002Fp\u003E\n"},author:{name:"Skyost",link:"https:\u002F\u002Fskyost.eu"}},"data-v-37386b08:0":{categories:["annonces",A,"projets","tutoriels"]}},mutations:void 0}}("text","element","\n","span","code","p","token","a","div","nuxt-content-highlight","pre","language-shell","line-numbers","builtin","class-name","echo","operator","\u003E"," ","Il se peut, pour une raison quelconque, que vous souhaitiez (dés)activer les LEDs intégrées de votre Raspberry Pi\n(c'est-à-dire, les témoins d'activité et d'alimentation). Cet article va vous expliquer comment faire.",2,"h2","true",-1,"anchor","led0","astuces","choisir-quelle-led-contrôler","Choisir quelle LED contrôler","désactiver-la-led","(Dés)activer la LED","revenir-au-comportement-par-défaut","Revenir au comportement par défaut","root","em","li","led1","\u002Fsys\u002Fclass\u002Fleds\u002Fled0\u002Ftrigger\n","number","0","\u002Fsys\u002Fclass\u002Fleds\u002Fled0\u002Fbrightness\n"," par ","1","2021-04-22T21:25:12.355Z")));