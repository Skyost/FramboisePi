__NUXT_JSONP__("/article/construire-horloge-complotiste", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa){return {data:[{}],fetch:{"0":{hostName:"https:\u002F\u002Fframboise-pi.skyost.eu",article:{slug:"construire-horloge-complotiste",description:G,title:"Construire l'horloge du complotiste !",categories:[I,J],date:"2021-04-18T00:00:00.000Z",toc:[{id:K,depth:q,text:L},{id:M,depth:q,text:N},{id:O,depth:q,text:P},{id:Q,depth:q,text:R},{id:S,depth:q,text:T},{id:U,depth:q,text:V}],body:{type:W,children:[{type:b,tag:d,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:G}]}]},{type:a,value:c},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Voici donc ce que l'on va construire :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:D,props:{alt:"Horloge",src:"\u002Fimages\u002Farticles\u002Fconstruire-horloge-complotiste\u002Fhorloge.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Vous aurez sans doute reconnu le meme "},{type:b,tag:"q",props:{},children:[{type:a,value:"Wait, It's All Ohio ?"}]},{type:a,value:" (cf.\n"},{type:b,tag:f,props:{href:"https:\u002F\u002Fknowyourmeme.com\u002Fmemes\u002Fwait-its-all-ohio-always-has-been",rel:[k,l,m],target:n},children:[{type:a,value:"Know Your Meme"}]},{type:a,value:" pour la référence). Le rendu\nest plutôt sympathique, et a notamment pour avantage de ne pas produire de lumière et de ne pas consommer d'énergie\n(en dehors de la consommation du Raspberry) car la consommation d'un affichage à encre électronique est\nvraiment négligeable."}]},{type:a,value:c},{type:b,tag:r,props:{id:K},children:[{type:a,value:L},{type:b,tag:f,props:{href:"#mat%C3%A9riel-n%C3%A9cessaire",ariaHidden:s,tabIndex:t},children:[{type:b,tag:e,props:{className:[u]},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Voici le matériel dont nous aurons besoin :"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:p},{type:b,tag:v,props:{},children:[{type:a,value:"Raspberry Pi Zero WH"}]},{type:a,value:H},{type:b,tag:f,props:{href:"https:\u002F\u002Famzn.to\u002F2RvB484",rel:[k,l,m],target:n},children:[{type:a,value:X}]},{type:a,value:Y},{type:b,tag:f,props:{href:"https:\u002F\u002Fs.click.aliexpress.com\u002Fe\u002F_A9UaSn",rel:[k,l,m],target:n},children:[{type:a,value:"AliExpress"}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:p},{type:b,tag:v,props:{},children:[{type:a,value:"Inky pHAT"}]},{type:a,value:H},{type:b,tag:f,props:{href:"https:\u002F\u002Famzn.to\u002F3uY0kCb",rel:[k,l,m],target:n},children:[{type:a,value:X}]},{type:a,value:Y},{type:b,tag:f,props:{href:"https:\u002F\u002Fshop.pimoroni.com\u002Fproducts\u002Finky-phat?variant=12549254938707",rel:[k,l,m],target:n},children:[{type:a,value:_}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:p},{type:b,tag:v,props:{},children:[{type:a,value:"Chargeur secteur USB"}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:p},{type:b,tag:v,props:{},children:[{type:a,value:"Câble d'alimentation USB - micro USB"}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:p},{type:b,tag:v,props:{},children:[{type:a,value:"Micro SD"}]},{type:a,value:" (prévoyez minimum 8Go pour n'importe quel projet)."}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:p},{type:b,tag:v,props:{},children:[{type:a,value:"Adaptateur SD"}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:p},{type:b,tag:j,props:{},children:[{type:a,value:"Boitier Pibow"}]},{type:a,value:H},{type:b,tag:f,props:{href:"https:\u002F\u002Fshop.pimoroni.com\u002Fproducts\u002Fpibow-zero-w",rel:[k,l,m],target:n},children:[{type:a,value:_}]},{type:a,value:"] (facultatif)."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Tout cela pour un coût total d'environ 50€ (si vous ne possédez rien)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:D,props:{alt:"Matériel",src:"\u002Fimages\u002Farticles\u002Fconstruire-horloge-complotiste\u002Fmateriel.png"},children:[]}]},{type:a,value:c},{type:b,tag:r,props:{id:M},children:[{type:a,value:N},{type:b,tag:f,props:{href:"#flasher-los",ariaHidden:s,tabIndex:t},children:[{type:b,tag:e,props:{className:[u]},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Insérez votre micro SD dans votre ordinateur à l'aide de l'adaptateur SD, et flashez Raspberry Pi OS Lite dessus\n(pas besoin de la version standard qui est plus gourmande en ressources). Si vous ne savez pas comment faire,\nj'ai rédigé "},{type:b,tag:E,props:{to:"\u002Farticle\u002Finstallation-minimale-raspberry-pi#t%C3%A9l%C3%A9charger-et-flasher-raspberry-os"},children:[{type:a,value:"un petit tutoriel"}]},{type:a,value:" à\nce propos. Profitez-en pour configurer votre Wi-Fi et activer SSH (je vous renvoie toujours à\n"},{type:b,tag:E,props:{to:"\u002Farticle\u002Finstallation-minimale-raspberry-pi#activer-ssh-et-se-connecter-au-wi-fi"},children:[{type:a,value:"ce même tutoriel"}]},{type:a,value:")."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Une fois fait, vous pouvez déconnecter votre micro SD de votre ordinateur et l'insérer dans votre Raspberry."}]},{type:a,value:c},{type:b,tag:r,props:{id:O},children:[{type:a,value:P},{type:b,tag:f,props:{href:"#monter-le-bo%C3%AEtier-et-laffichage",ariaHidden:s,tabIndex:t},children:[{type:b,tag:e,props:{className:[u]},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Si vous avez opté pour un boîtier Pibow, je vous renvoie vers\n"},{type:b,tag:f,props:{href:"https:\u002F\u002Flearn.pimoroni.com\u002Ftutorial\u002Fsandyj\u002Fpibow-zero-assembly",rel:[k,l,m],target:n},children:[{type:a,value:"le guide officiel"}]},{type:a,value:" disponible sur le site de Pimoroni.\nIl est très explicite, et est facile à suivre (même pour les plus anglophobes d'entre vous 😁)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:D,props:{alt:"Avec Pibow",src:"\u002Fimages\u002Farticles\u002Fconstruire-horloge-complotiste\u002Favec-pibow.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Une fois votre boitier monté, branchez votre Inky pHAT sur les ports GPIO de votre framboise. Il vous faudra sans doute\nappuyer un peu, mais cela ne devrait pas poser de problèmes."}]},{type:a,value:c},{type:b,tag:r,props:{id:Q},children:[{type:a,value:R},{type:b,tag:f,props:{href:"#configurer-lappareil",ariaHidden:s,tabIndex:t},children:[{type:b,tag:e,props:{className:[u]},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Mettez sous tension votre Raspberry, puis\n"},{type:b,tag:E,props:{to:"\u002Farticle\u002Finstallation-minimale-raspberry-pi\u002F#se-connecter-en-ssh"},children:[{type:a,value:"connectez-vous en SSH"}]},{type:a,value:".\nCommencez par entrer la commande suivante :"}]},{type:a,value:c},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,A]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:e,props:{className:[g,i]},children:[{type:a,value:F}]},{type:a,value:" raspi-config\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Elle vous permettra de vous rendre dans "},{type:b,tag:h,props:{},children:[{type:a,value:"raspi-config"}]},{type:a,value:". Rendez-vous ensuite dans le menu "},{type:b,tag:j,props:{},children:[{type:a,value:"Interfaces"}]},{type:a,value:",\npuis activez "},{type:b,tag:j,props:{},children:[{type:a,value:"SPI"}]},{type:a,value:" et "},{type:b,tag:j,props:{},children:[{type:a,value:"I2C"}]},{type:a,value:" (sélectionnez l'option, puis validez avec "},{type:b,tag:j,props:{},children:[{type:a,value:"Yes"}]},{type:a,value:"). Ensuite, dans le menu principal de\nl'utilitaire, sélectionnez "},{type:b,tag:j,props:{},children:[{type:a,value:"Localisation Options"}]},{type:a,value:", puis "},{type:b,tag:j,props:{},children:[{type:a,value:"Change Timezone"}]},{type:a,value:" et choisissez "},{type:b,tag:j,props:{},children:[{type:a,value:"Europe (Paris)"}]},{type:a,value:".\nUne fois tout ceci effectué, vous pouvez redémarrer votre Pi."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour continuer, il vous faudra d'abord vous assurer que la version de Python utilisée par défaut soit bien la\nversion 3 :"}]},{type:a,value:c},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,A]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:e,props:{className:[g,i]},children:[{type:a,value:F}]},{type:a,value:" update-alternatives --install \u002Fusr\u002Fbin\u002Fpython python \u002Fusr\u002Fbin\u002Fpython3.7 "},{type:b,tag:e,props:{className:[g,"number"]},children:[{type:a,value:"2"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"La commande "},{type:b,tag:h,props:{},children:[{type:a,value:"python --version"}]},{type:a,value:" doit maintenant vous renvoyer quelque chose comme "},{type:b,tag:h,props:{},children:[{type:a,value:"Python 3.7.x"}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:r,props:{id:S},children:[{type:a,value:T},{type:b,tag:f,props:{href:"#installer-le-script",ariaHidden:s,tabIndex:t},children:[{type:b,tag:e,props:{className:[u]},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Comme pour "},{type:b,tag:E,props:{to:"\u002Farticle\u002Fcreer-horloge-matrice-leds"},children:[{type:a,value:"l'horloge de matrices LEDs"}]},{type:a,value:", j'ai créé un petit script pour vous\nfaciliter l'installation de ce projet. Il va d'abord falloir installer la dépendance principale :"}]},{type:a,value:c},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,A]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:e,props:{className:[g,i]},children:[{type:a,value:"curl"}]},{type:a,value:" https:\u002F\u002Fget.pimoroni.com\u002Finky "},{type:b,tag:e,props:{className:[g,"operator"]},children:[{type:a,value:"|"}]},{type:a,value:C},{type:b,tag:e,props:{className:[g,i]},children:[{type:a,value:"bash"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"L'assistant d'installation vous proposera diverses options. Personnellement, je vous déconseille l'installation\ncomplète (avec l'aide et les exemples) car elle prend plus de temps et de place.\nLes instructions complètes de l'installation de cette librairie sont disponibles sur\n"},{type:b,tag:f,props:{href:"https:\u002F\u002Flearn.pimoroni.com\u002Ftutorial\u002Fsandyj\u002Fgetting-started-with-inky-phat",rel:[k,l,m],target:n},children:[{type:a,value:"le site de Pimoroni"}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Maintenant, on peut installer le script :"}]},{type:a,value:c},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,A]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:e,props:{className:[g,i]},children:[{type:a,value:F}]},{type:a,value:C},{type:b,tag:e,props:{className:[g,i]},children:[{type:a,value:"apt"}]},{type:a,value:C},{type:b,tag:e,props:{className:[g,i]},children:[{type:a,value:"install"}]},{type:a,value:C},{type:b,tag:e,props:{className:[g,i]},children:[{type:a,value:$}]},{type:a,value:c},{type:b,tag:e,props:{className:[g,i]},children:[{type:a,value:$}]},{type:a,value:" clone https:\u002F\u002Fgithub.com\u002FSkyost\u002FComplotistClock.git\n"}]}]}]},{type:a,value:c},{type:b,tag:r,props:{id:U},children:[{type:a,value:V},{type:b,tag:f,props:{href:"#lancer-le-script",ariaHidden:s,tabIndex:t},children:[{type:b,tag:e,props:{className:[u]},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"C'est presque terminé, allez dans le répertoire du script (en utilisant "},{type:b,tag:h,props:{},children:[{type:a,value:"cd ComplotistClock"}]},{type:a,value:").\nOn va rendre exécutable le fichier "},{type:b,tag:h,props:{},children:[{type:a,value:"run.sh"}]},{type:a,value:". Pour cela, tapez simplement :"}]},{type:a,value:c},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,A]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:e,props:{className:[g,i]},children:[{type:a,value:F}]},{type:a,value:C},{type:b,tag:e,props:{className:[g,i]},children:[{type:a,value:"chmod"}]},{type:a,value:" +x .\u002Frun.sh\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et c'est bon ! Pour lancer le script en arrière-plan, vous pouvez vous contenter de rentrer :"}]},{type:a,value:c},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,A]},children:[{type:b,tag:h,props:{},children:[{type:a,value:".\u002Frun.sh\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"L'heure et l'illustration devraient apparaître sur votre affichage Inky. N'hésitez pas à personnaliser tout cela\nà votre guise en modifiant le script !"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:D,props:{alt:"Horloge animée",src:"\u002Fimages\u002Farticles\u002Fconstruire-horloge-complotiste\u002Fhorloge-animation.gif"},children:[]}]}]},excerpt:{type:W,children:[{type:b,tag:d,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:G}]}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fconstruire-horloge-complotiste",extension:".md",createdAt:aa,updatedAt:aa,bodyHtml:"\u003Cp\u003E\u003Cem\u003ENouveau projet d'horloge originale utilisant cette fois un affichage à base d'encre électronique\npour afficher l'heure sur un meme bien connu et plutôt sympathique !\u003C\u002Fem\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EVoici donc ce que l'on va construire :\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fframboise-pi.skyost.eu\u002Fimages\u002Farticles\u002Fconstruire-horloge-complotiste\u002Fhorloge.png\" alt=\"Horloge\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003EVous aurez sans doute reconnu le meme &laquo; Wait, It's All Ohio ? &raquo; (cf.\n\u003Ca href=\"https:\u002F\u002Fknowyourmeme.com\u002Fmemes\u002Fwait-its-all-ohio-always-has-been\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003EKnow Your Meme\u003C\u002Fa\u003E pour la référence). Le rendu\nest plutôt sympathique, et a notamment pour avantage de ne pas produire de lumière et de ne pas consommer d'énergie\n(en dehors de la consommation du Raspberry) car la consommation d'un affichage à encre électronique est\nvraiment négligeable.\u003C\u002Fp\u003E\n\u003Ch2 id=\"matériel-nécessaire\"\u003EMatériel nécessaire\u003C\u002Fh2\u003E\n\u003Cp\u003EVoici le matériel dont nous aurons besoin :\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E1 \u003Cstrong\u003ERaspberry Pi Zero WH\u003C\u002Fstrong\u003E [\u003Ca href=\"https:\u002F\u002Famzn.to\u002F2RvB484\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003EAmazon\u003C\u002Fa\u003E,\n\u003Ca href=\"https:\u002F\u002Fs.click.aliexpress.com\u002Fe\u002F_A9UaSn\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003EAliExpress\u003C\u002Fa\u003E].\u003C\u002Fli\u003E\n\u003Cli\u003E1 \u003Cstrong\u003EInky pHAT\u003C\u002Fstrong\u003E [\u003Ca href=\"https:\u002F\u002Famzn.to\u002F3uY0kCb\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003EAmazon\u003C\u002Fa\u003E,\n\u003Ca href=\"https:\u002F\u002Fshop.pimoroni.com\u002Fproducts\u002Finky-phat?variant=12549254938707\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003EPimoroni\u003C\u002Fa\u003E].\u003C\u002Fli\u003E\n\u003Cli\u003E1 \u003Cstrong\u003EChargeur secteur USB\u003C\u002Fstrong\u003E.\u003C\u002Fli\u003E\n\u003Cli\u003E1 \u003Cstrong\u003ECâble d'alimentation USB - micro USB\u003C\u002Fstrong\u003E.\u003C\u002Fli\u003E\n\u003Cli\u003E1 \u003Cstrong\u003EMicro SD\u003C\u002Fstrong\u003E (prévoyez minimum 8Go pour n'importe quel projet).\u003C\u002Fli\u003E\n\u003Cli\u003E1 \u003Cstrong\u003EAdaptateur SD\u003C\u002Fstrong\u003E.\u003C\u002Fli\u003E\n\u003Cli\u003E1 \u003Cem\u003EBoitier Pibow\u003C\u002Fem\u003E [\u003Ca href=\"https:\u002F\u002Fshop.pimoroni.com\u002Fproducts\u002Fpibow-zero-w\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003EPimoroni\u003C\u002Fa\u003E] (facultatif).\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003ETout cela pour un coût total d'environ 50€ (si vous ne possédez rien).\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fframboise-pi.skyost.eu\u002Fimages\u002Farticles\u002Fconstruire-horloge-complotiste\u002Fmateriel.png\" alt=\"Matériel\"\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"flasher-los\"\u003EFlasher l'OS\u003C\u002Fh2\u003E\n\u003Cp\u003EInsérez votre micro SD dans votre ordinateur à l'aide de l'adaptateur SD, et flashez Raspberry Pi OS Lite dessus\n(pas besoin de la version standard qui est plus gourmande en ressources). Si vous ne savez pas comment faire,\nj'ai rédigé \u003Ca href=\"https:\u002F\u002Fframboise-pi.skyost.eu\u002Farticle\u002Finstallation-minimale-raspberry-pi#t%C3%A9l%C3%A9charger-et-flasher-raspberry-os\"\u003Eun petit tutoriel\u003C\u002Fa\u003E à\nce propos. Profitez-en pour configurer votre Wi-Fi et activer SSH (je vous renvoie toujours à\n\u003Ca href=\"https:\u002F\u002Fframboise-pi.skyost.eu\u002Farticle\u002Finstallation-minimale-raspberry-pi#activer-ssh-et-se-connecter-au-wi-fi\"\u003Ece même tutoriel\u003C\u002Fa\u003E).\u003C\u002Fp\u003E\n\u003Cp\u003EUne fois fait, vous pouvez déconnecter votre micro SD de votre ordinateur et l'insérer dans votre Raspberry.\u003C\u002Fp\u003E\n\u003Ch2 id=\"monter-le-boîtier-et-laffichage\"\u003EMonter le boîtier et l'affichage\u003C\u002Fh2\u003E\n\u003Cp\u003ESi vous avez opté pour un boîtier Pibow, je vous renvoie vers\n\u003Ca href=\"https:\u002F\u002Flearn.pimoroni.com\u002Ftutorial\u002Fsandyj\u002Fpibow-zero-assembly\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003Ele guide officiel\u003C\u002Fa\u003E disponible sur le site de Pimoroni.\nIl est très explicite, et est facile à suivre (même pour les plus anglophobes d'entre vous 😁).\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fframboise-pi.skyost.eu\u002Fimages\u002Farticles\u002Fconstruire-horloge-complotiste\u002Favec-pibow.png\" alt=\"Avec Pibow\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003EUne fois votre boitier monté, branchez votre Inky pHAT sur les ports GPIO de votre framboise. Il vous faudra sans doute\nappuyer un peu, mais cela ne devrait pas poser de problèmes.\u003C\u002Fp\u003E\n\u003Ch2 id=\"configurer-lappareil\"\u003EConfigurer l'appareil\u003C\u002Fh2\u003E\n\u003Cp\u003EMettez sous tension votre Raspberry, puis\n\u003Ca href=\"https:\u002F\u002Fframboise-pi.skyost.eu\u002Farticle\u002Finstallation-minimale-raspberry-pi\u002F#se-connecter-en-ssh\"\u003Econnectez-vous en SSH\u003C\u002Fa\u003E.\nCommencez par entrer la commande suivante :\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Esudo raspi-config\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EElle vous permettra de vous rendre dans \u003Ccode\u003Eraspi-config\u003C\u002Fcode\u003E. Rendez-vous ensuite dans le menu \u003Cem\u003EInterfaces\u003C\u002Fem\u003E,\npuis activez \u003Cem\u003ESPI\u003C\u002Fem\u003E et \u003Cem\u003EI2C\u003C\u002Fem\u003E (sélectionnez l'option, puis validez avec \u003Cem\u003EYes\u003C\u002Fem\u003E). Ensuite, dans le menu principal de\nl'utilitaire, sélectionnez \u003Cem\u003ELocalisation Options\u003C\u002Fem\u003E, puis \u003Cem\u003EChange Timezone\u003C\u002Fem\u003E et choisissez \u003Cem\u003EEurope (Paris)\u003C\u002Fem\u003E.\nUne fois tout ceci effectué, vous pouvez redémarrer votre Pi.\u003C\u002Fp\u003E\n\u003Cp\u003EPour continuer, il vous faudra d'abord vous assurer que la version de Python utilisée par défaut soit bien la\nversion 3 :\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Esudo update-alternatives --install \u002Fusr\u002Fbin\u002Fpython python \u002Fusr\u002Fbin\u002Fpython3.7 2\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003ELa commande \u003Ccode\u003Epython --version\u003C\u002Fcode\u003E doit maintenant vous renvoyer quelque chose comme \u003Ccode\u003EPython 3.7.x\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\u003Ch2 id=\"installer-le-script\"\u003EInstaller le script\u003C\u002Fh2\u003E\n\u003Cp\u003EComme pour \u003Ca href=\"https:\u002F\u002Fframboise-pi.skyost.eu\u002Farticle\u002Fcreer-horloge-matrice-leds\"\u003El'horloge de matrices LEDs\u003C\u002Fa\u003E, j'ai créé un petit script pour vous\nfaciliter l'installation de ce projet. Il va d'abord falloir installer la dépendance principale :\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Ecurl https:\u002F\u002Fget.pimoroni.com\u002Finky | bash\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EL'assistant d'installation vous proposera diverses options. Personnellement, je vous déconseille l'installation\ncomplète (avec l'aide et les exemples) car elle prend plus de temps et de place.\nLes instructions complètes de l'installation de cette librairie sont disponibles sur\n\u003Ca href=\"https:\u002F\u002Flearn.pimoroni.com\u002Ftutorial\u002Fsandyj\u002Fgetting-started-with-inky-phat\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003Ele site de Pimoroni\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\u003Cp\u003EMaintenant, on peut installer le script :\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Esudo apt install git\ngit clone https:\u002F\u002Fgithub.com\u002FSkyost\u002FComplotistClock.git\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"lancer-le-script\"\u003ELancer le script\u003C\u002Fh2\u003E\n\u003Cp\u003EC'est presque terminé, allez dans le répertoire du script (en utilisant \u003Ccode\u003Ecd ComplotistClock\u003C\u002Fcode\u003E).\nOn va rendre exécutable le fichier \u003Ccode\u003Erun.sh\u003C\u002Fcode\u003E. Pour cela, tapez simplement :\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Esudo chmod +x .\u002Frun.sh\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EEt c'est bon ! Pour lancer le script en arrière-plan, vous pouvez vous contenter de rentrer :\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003E.\u002Frun.sh\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EL'heure et l'illustration devraient apparaître sur votre affichage Inky. N'hésitez pas à personnaliser tout cela\nà votre guise en modifiant le script !\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fframboise-pi.skyost.eu\u002Fimages\u002Farticles\u002Fconstruire-horloge-complotiste\u002Fhorloge-animation.gif\" alt=\"Horloge animée\"\u003E\u003C\u002Fp\u003E\n"},author:{name:"Skyost",link:"https:\u002F\u002Fskyost.eu"}},"data-v-37386b08:0":{categories:["annonces",J,I]}},mutations:void 0}}("text","element","\n","p","span","a","token","code","function","em","nofollow","noopener","noreferrer","_blank","li","1 ",2,"h2","true",-1,"anchor","strong","div","nuxt-content-highlight","pre","language-shell","line-numbers","."," ","img","nuxt-link","sudo","Nouveau projet d'horloge originale utilisant cette fois un affichage à base d'encre électronique\npour afficher l'heure sur un meme bien connu et plutôt sympathique !"," [","tutoriels","projets","matériel-nécessaire","Matériel nécessaire","flasher-los","Flasher l'OS","monter-le-boîtier-et-laffichage","Monter le boîtier et l'affichage","configurer-lappareil","Configurer l'appareil","installer-le-script","Installer le script","lancer-le-script","Lancer le script","root","Amazon",",\n","].","Pimoroni","git","2021-04-18T19:22:59.581Z")));