__NUXT_JSONP__("/article/creer-horloge-matrice-leds", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA){return {data:[{}],fetch:{"0":{hostName:"https:\u002F\u002Fframboise-pi.skyost.eu",article:{slug:"creer-horloge-matrice-leds",description:U,title:"Créer une horloge avec une matrice de LEDs",categories:[Z,_],date:"2021-04-12T00:00:00.000Z",toc:[{id:$,depth:G,text:aa},{id:ab,depth:G,text:ac},{id:ad,depth:G,text:ae},{id:af,depth:G,text:ag}],body:{type:ah,children:[{type:b,tag:f,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:U}]}]},{type:a,value:e},{type:a,value:e},{type:b,tag:"youtube",props:{id:"VBNRIcA_Ppg"},children:[{type:a,value:e}]},{type:a,value:e},{type:b,tag:H,props:{id:$},children:[{type:a,value:aa},{type:b,tag:i,props:{href:"#mat%C3%A9riel-n%C3%A9cessaire",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K]},children:[]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Le projet est très accessible mais nécessite pas mal de matériel. Vous aurez besoin de :"}]},{type:a,value:e},{type:b,tag:ai,props:{},children:[{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:v},{type:b,tag:q,props:{},children:[{type:a,value:"Raspberry Pi Zero WH"}]},{type:a,value:L},{type:b,tag:i,props:{href:"https:\u002F\u002Famzn.to\u002F2RvB484",rel:[k,l,m],target:n},children:[{type:a,value:M}]},{type:a,value:E},{type:b,tag:i,props:{href:"https:\u002F\u002Ffr.aliexpress.com\u002Fitem\u002F1005001993063894.html",rel:[k,l,m],target:n},children:[{type:a,value:N}]},{type:a,value:"]\n(n'importe quel Raspberry Pi muni de ports GPIO devrait suffire, mais cette solution me semble être la moins\nchère)."}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:v},{type:b,tag:q,props:{},children:[{type:a,value:"Matrice de LEDs"}]},{type:a,value:L},{type:b,tag:i,props:{href:"https:\u002F\u002Famzn.to\u002F3dTBa0U",rel:[k,l,m],target:n},children:[{type:a,value:M}]},{type:a,value:E},{type:b,tag:i,props:{href:"https:\u002F\u002Ffr.aliexpress.com\u002Fitem\u002F32834030893.html",rel:[k,l,m],target:n},children:[{type:a,value:N}]},{type:a,value:"] (je vous conseille celle d'AZ-Delivery,\nabordable et de bonne qualité)."}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:v},{type:b,tag:q,props:{},children:[{type:a,value:"Touchpad USB"}]},{type:a,value:L},{type:b,tag:i,props:{href:"https:\u002F\u002Famzn.to\u002F3wRrQmQ",rel:[k,l,m],target:n},children:[{type:a,value:M}]},{type:a,value:E},{type:b,tag:i,props:{href:"https:\u002F\u002Ffr.aliexpress.com\u002Fitem\u002F32981629578.html",rel:[k,l,m],target:n},children:[{type:a,value:N}]},{type:a,value:"] (cela a l'avantage d'être généralement moins couteux\nque l'achat d'un détecteur de mouvements et de boutons)."}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:v},{type:b,tag:q,props:{},children:[{type:a,value:"Câble micro USB - USB OTG"}]},{type:a,value:L},{type:b,tag:i,props:{href:"https:\u002F\u002Famzn.to\u002F3wP0QEr",rel:[k,l,m],target:n},children:[{type:a,value:M}]},{type:a,value:E},{type:b,tag:i,props:{href:"https:\u002F\u002Ffr.aliexpress.com\u002Fitem\u002F1005001586058974.html",rel:[k,l,m],target:n},children:[{type:a,value:N}]},{type:a,value:"]."}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:v},{type:b,tag:q,props:{},children:[{type:a,value:"Chargeur secteur USB"}]},{type:a,value:C}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:v},{type:b,tag:q,props:{},children:[{type:a,value:"Câble d'alimentation USB - micro USB"}]},{type:a,value:C}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:v},{type:b,tag:q,props:{},children:[{type:a,value:"Micro SD"}]},{type:a,value:" (prévoyez minimum 8Go pour n'importe quel projet)."}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:v},{type:b,tag:q,props:{},children:[{type:a,value:"Adaptateur SD"}]},{type:a,value:C}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Tout cela pour un coût total d'environ 60€ (si vous ne possédez rien)."}]},{type:a,value:e},{type:b,tag:H,props:{id:ab},children:[{type:a,value:ac},{type:b,tag:i,props:{href:"#effectuer-les-branchements",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K]},children:[]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"On va effectuer les branchements à l'aide du tableau suivant :"}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:"table",props:{},children:[{type:b,tag:"thead",props:{},children:[{type:b,tag:D,props:{},children:[{type:b,tag:F,props:{},children:[{type:a,value:"Pin Matrice"}]},{type:b,tag:F,props:{},children:[{type:a,value:"Nom"}]},{type:b,tag:F,props:{},children:[{type:a,value:"Signification"}]},{type:b,tag:F,props:{},children:[{type:a,value:"Pin RPi"}]},{type:b,tag:F,props:{},children:[{type:a,value:"Fonction"}]}]}]},{type:b,tag:"tbody",props:{},children:[{type:b,tag:D,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"1"}]},{type:b,tag:h,props:{},children:[{type:a,value:"VCC"}]},{type:b,tag:h,props:{},children:[{type:a,value:"+5V Power"}]},{type:b,tag:h,props:{},children:[{type:a,value:O}]},{type:b,tag:h,props:{},children:[{type:a,value:"5V0"}]}]},{type:b,tag:D,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:O}]},{type:b,tag:h,props:{},children:[{type:a,value:aj}]},{type:b,tag:h,props:{},children:[{type:a,value:"Ground"}]},{type:b,tag:h,props:{},children:[{type:a,value:"6"}]},{type:b,tag:h,props:{},children:[{type:a,value:aj}]}]},{type:b,tag:D,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"3"}]},{type:b,tag:h,props:{},children:[{type:a,value:"DIN"}]},{type:b,tag:h,props:{},children:[{type:a,value:"Data In"}]},{type:b,tag:h,props:{},children:[{type:a,value:"19"}]},{type:b,tag:h,props:{},children:[{type:a,value:"GPIO 10 (MOSI)"}]}]},{type:b,tag:D,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"4"}]},{type:b,tag:h,props:{},children:[{type:a,value:"CS"}]},{type:b,tag:h,props:{},children:[{type:a,value:"Chip Select"}]},{type:b,tag:h,props:{},children:[{type:a,value:"24"}]},{type:b,tag:h,props:{},children:[{type:a,value:"GPIO 8 (SPI CE0)"}]}]},{type:b,tag:D,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"5"}]},{type:b,tag:h,props:{},children:[{type:a,value:"CLK"}]},{type:b,tag:h,props:{},children:[{type:a,value:"Clock"}]},{type:b,tag:h,props:{},children:[{type:a,value:"23"}]},{type:b,tag:h,props:{},children:[{type:a,value:"GPIO 11 (SPI CLK)"}]}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:i,props:{href:"https:\u002F\u002Fluma-led-matrix.readthedocs.io\u002Fen\u002Flatest\u002Finstall.html#max7219-devices-spi",rel:[k,l,m],target:n},children:[{type:a,value:ak}]},{type:a,value:C}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Chaque port de la matrice de LEDs doit être relié au port correspondant sur le Raspberry.\nVoici la carte des ports GPIO sur les modèles les plus récents :"}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:V,props:{alt:"Carte des ports GPIO",src:"\u002Fimages\u002Farticles\u002Fcreer-horloge-matrice-leds\u002Fgpio-pinout.png"},children:[]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:i,props:{href:"https:\u002F\u002Fwww.raspberrypi.org\u002Fdocumentation\u002Fusage\u002Fgpio\u002F",rel:[k,l,m],target:n},children:[{type:a,value:ak}]},{type:a,value:C}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Ce qui devrait vous donner quelque-chose comme ça :"}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:V,props:{alt:"Branchements",src:"\u002Fimages\u002Farticles\u002Fcreer-horloge-matrice-leds\u002Fbranchements.png"},children:[]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Branchez ensuite le touchpad à l'aide du câble micro USB - USB."}]},{type:a,value:e},{type:b,tag:H,props:{id:ad},children:[{type:a,value:ae},{type:b,tag:i,props:{href:"#mettre-en-place-le-script",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K]},children:[]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Insérez votre micro SD dans votre ordinateur et flashez Raspberry Pi OS dessus (un tutoriel a été rédigé à ce sujet,\nil est disponible "},{type:b,tag:al,props:{to:"\u002Farticle\u002Finstallation-minimale-raspberry-pi#t%C3%A9l%C3%A9charger-et-flasher-raspberry-os"},children:[{type:a,value:W}]},{type:a,value:"). Activez SSH\net le Wi-Fi en suivant les étapes disponibles "},{type:b,tag:al,props:{to:"\u002Farticle\u002Finstallation-minimale-raspberry-pi#activer-ssh-et-se-connecter-au-wi-fi"},children:[{type:a,value:W}]},{type:a,value:".\nEnlevez votre carte de l'ordinateur, et insérez-la dans le Raspberry que vous pouvez désormais mettre sous tension."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Commencez par vous connecter en SSH. On va activer l'interface SPI en lançant l'utilitaire "},{type:b,tag:j,props:{},children:[{type:a,value:am}]},{type:a,value:"\n(il suffit pour cela d'exécuter la commande "},{type:b,tag:j,props:{},children:[{type:a,value:"sudo raspi-config"}]},{type:a,value:"). Sélectionnez "},{type:b,tag:u,props:{},children:[{type:a,value:"Interfacing Options"}]},{type:a,value:", puis "},{type:b,tag:u,props:{},children:[{type:a,value:"SPI"}]},{type:a,value:",\net "},{type:b,tag:u,props:{},children:[{type:a,value:"Yes"}]},{type:a,value:". Sortez de l'utilitaire et redémarrez (si "},{type:b,tag:j,props:{},children:[{type:a,value:am}]},{type:a,value:" ne vous propose pas de redémarrer,\nla commande "},{type:b,tag:j,props:{},children:[{type:a,value:an}]},{type:a,value:" fera l'affaire)."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"J'ai créé un petit script Python pour ce projet qui nécessite cependant quelques commandes pour fonctionner.\nTout d'abord, il faut s'assurer que la version de Python utilisée par défaut soit la version 3 :"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,A]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:r}]},{type:a,value:" update-alternatives --install \u002Fusr\u002Fbin\u002Fpython python \u002Fusr\u002Fbin\u002Fpython3.7 "},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:O}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"La commande "},{type:b,tag:j,props:{},children:[{type:a,value:"python --version"}]},{type:a,value:" doit maintenant vous renvoyer "},{type:b,tag:j,props:{},children:[{type:a,value:"Python 3.7.x"}]},{type:a,value:". On va maintenant pouvoir installer les\ndépendances :"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,A]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:r}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"usermod"}]},{type:a,value:" -a -G spi,gpio pi\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:r}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:X}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:a,value:" build-essential libfreetype6-dev libjpeg-dev libopenjp2-7 libtiff5\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:r}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:a,value:" luma.led_matrix\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:r}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:X}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:a,value:" libsdl-dev libportmidi-dev libsdl-ttf2.0-dev libsdl-mixer1.2-dev libsdl-image1.2-dev\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:r}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:a,value:" pygame\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:r}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:a,value:" luma.emulator\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:r}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:a,value:" pynput\n"}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"(Il s'agit d'un condensé des informations d'installation de\n"},{type:b,tag:i,props:{href:"https:\u002F\u002Fluma-led-matrix.readthedocs.io\u002Fen\u002Flatest\u002Finstall.html",rel:[k,l,m],target:n},children:[{type:a,value:"Luma LED Matrix"}]},{type:a,value:E},{type:b,tag:i,props:{href:"https:\u002F\u002Fluma-emulator.readthedocs.io\u002Fen\u002Flatest\u002Finstall.html",rel:[k,l,m],target:n},children:[{type:a,value:"Luma Emulator"}]},{type:a,value:", et\n"},{type:b,tag:i,props:{href:"https:\u002F\u002Fpypi.org\u002Fproject\u002Fpynput\u002F",rel:[k,l,m],target:n},children:[{type:a,value:"Pynput"}]},{type:a,value:"). Vous pouvez maintenant télécharger le script directement depuis Github :"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,A]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:r}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:X}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ao}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ao}]},{type:a,value:" clone https:\u002F\u002Fgithub.com\u002FSkyost\u002FAnaclock.git\n"}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"On va désactiver toutes les interactions possibles avec Raspberry Pi OS à la souris (pour éviter qu'un mauvais clic\nvienne éteindre le système, voire pire). Pour cela, on va éditer le fichier "},{type:b,tag:j,props:{},children:[{type:a,value:"~\u002F.config\u002Flxsession\u002FLXDE-pi\u002Fautostart"}]},{type:a,value:" à\nl'aide de Nano :"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,A]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:r}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ap}]},{type:a,value:" ~\u002F.config\u002Flxsession\u002FLXDE-pi\u002Fautostart\n"}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Cherchez la ligne commençant par "},{type:b,tag:j,props:{},children:[{type:a,value:"@lxpanel"}]},{type:a,value:" et éditez le fichier comme suit :"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,A]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# @lxpanel --profile LXDE-pi # Désactive lxpanel."}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# @pcmanfm --desktop --profile LXDE-pi # Désactive PCManFM."}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# @xscreensaver -no-splash # Désactive xscreensaver."}]},{type:a,value:"\n@xset s off "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# Désactive l’économiseur d’écran."}]},{type:a,value:"\n@xset -dpms "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# Désactive DPMS."}]},{type:a,value:"\n@xset s noblank "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# Empêche l'écran de devenir blanc."}]},{type:a,value:"\n@point-rpi "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# Positionne la souris sur le bouton du menu."}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Faîtes "},{type:b,tag:u,props:{},children:[{type:a,value:aq}]},{type:a,value:" pour enregistrer le fichier, puis "},{type:b,tag:u,props:{},children:[{type:a,value:ar}]},{type:a,value:" pour valider. On va maintenant supprimer le menu contextuel\nd'OpenBox. Éditez le fichier "},{type:b,tag:j,props:{},children:[{type:a,value:"~\u002F.config\u002Fopenbox\u002Flxde-pi-rc.xml"}]},{type:a,value:" avec Nano :"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,A]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:r}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ap}]},{type:a,value:" ~\u002F.config\u002Fopenbox\u002Flxde-pi-rc.xml\n"}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Et supprimez les lignes qui sont responsables du clic droit :"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,"language-xml"]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\u003C!-- Supprimez ou commentez ce qui se trouve entre cette balise... --\u003E"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,Q]},children:[{type:b,tag:c,props:{className:[d,Q]},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u003C"}]},{type:a,value:as}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"button"}]},{type:b,tag:c,props:{className:[d,au]},children:[{type:b,tag:c,props:{className:[d,t,av]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:R}]},{type:a,value:"Right"},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:R}]}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"action"}]},{type:b,tag:c,props:{className:[d,au]},children:[{type:b,tag:c,props:{className:[d,t,av]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:R}]},{type:a,value:"Press"},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:R}]}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:S}]}]},{type:a,value:"\n  "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\u003C!-- ... --\u003E"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,Q]},children:[{type:b,tag:c,props:{className:[d,Q]},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u003C\u002F"}]},{type:a,value:as}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:S}]}]},{type:a,value:" \n"},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\u003C!-- ... Et cette balise. --\u003E"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Au lieu de faire tout cela, une autre possibilité aurait été de lancer Chromium en mode kiosk au démarrage\n(les étapes pour faire ceci sont disponibles "},{type:b,tag:i,props:{href:"https:\u002F\u002Fgist.github.com\u002Fjongrover\u002F6831346",rel:[k,l,m],target:n},children:[{type:a,value:W}]},{type:a,value:").\nDe même, faîtes "},{type:b,tag:u,props:{},children:[{type:a,value:aq}]},{type:a,value:" pour enregistrer le fichier, et validez avec "},{type:b,tag:u,props:{},children:[{type:a,value:ar}]},{type:a,value:". On peut maintenant redémarrer le système\navec "},{type:b,tag:j,props:{},children:[{type:a,value:an}]},{type:a,value:C}]},{type:a,value:e},{type:b,tag:H,props:{id:af},children:[{type:a,value:ag},{type:b,tag:i,props:{href:"#faire-fonctionner-lhorloge",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K]},children:[]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Une fois le système redémarré, on se dirige dans le répertoire du script, et on l'exécute en fond :"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,A]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,aw,ax]},children:[{type:a,value:"cd"}]},{type:a,value:" Anaclock\n"},{type:b,tag:c,props:{className:[d,aw,ax]},children:[{type:a,value:"export"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,"assign-left","variable"]},children:[{type:b,tag:c,props:{className:[d,"environment","constant"]},children:[{type:a,value:"DISPLAY"}]}]},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:Y}]},{type:a,value:":0.0\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"nohup"}]},{type:a,value:" python .\u002Fanaclock.py "},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:S}]},{type:a,value:"\u002Fdev\u002Fnull "},{type:b,tag:c,props:{className:[d,T]},children:[{type:b,tag:c,props:{className:[d,ay,az]},children:[{type:a,value:O}]},{type:a,value:S}]},{type:b,tag:c,props:{className:[d,ay,az]},children:[{type:a,value:"&1"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:"&"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"N'hésitez pas à mettre ceci dans un petit script qui se lance automatiquement, cela peut toujours faire gagner du temps.\nEt voilà, normalement si vous bougez la souris en effectuant un mouvement sur le touchpad... La matrice de LEDs\ndevrait s'animer !"}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:V,props:{alt:"Résultat",src:"\u002Fimages\u002Farticles\u002Fcreer-horloge-matrice-leds\u002Fresultat.gif"},children:[]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Voici les commandes programmées :"}]},{type:a,value:e},{type:b,tag:ai,props:{},children:[{type:a,value:e},{type:b,tag:p,props:{},children:[{type:b,tag:q,props:{},children:[{type:a,value:"Clic gauche \u002F mouvement"}]},{type:a,value:" : affiche l'heure."}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:b,tag:q,props:{},children:[{type:a,value:"Clic droit"}]},{type:a,value:" : affiche la date."}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:b,tag:q,props:{},children:[{type:a,value:"Appui consécutif d'au moins 5 secondes sur le clic gauche"}]},{type:a,value:" : éteint l'appareil."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"C'est terminé ! En espérant que ce petit projet vous ait plu, n'hésitez pas à m'envoyer vos retours 😉"}]}]},excerpt:{type:ah,children:[{type:b,tag:f,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:U}]}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fcreer-horloge-matrice-leds",extension:".md",createdAt:aA,updatedAt:aA},author:{name:"Skyost",link:"https:\u002F\u002Fskyost.eu"}},"data-v-37386b08:0":{categories:["annonces",_,Z]}},mutations:void 0}}("text","element","span","token","\n","p","function","td","a","code","nofollow","noopener","noreferrer","_blank"," ","li","strong","sudo","comment","punctuation","em","1 ","div","nuxt-content-highlight","pre","line-numbers","language-shell","install",".","tr",",\n","th",2,"h2","true",-1,"anchor"," [","Amazon","AliExpress","2"," pip3 ","tag","\"","\u003E","operator","Premier projet à voir le jour sur blog ! Nous allons voir ici comment créer une horloge abordable\nqui se déclenche au toucher à l'aide d'un Raspberry Pi, d'un Touchpad et d'une matrice de LEDs.","img","ici","apt","=","tutoriels","projets","matériel-nécessaire","Matériel nécessaire","effectuer-les-branchements","Effectuer les branchements","mettre-en-place-le-script","Mettre en place le script","faire-fonctionner-lhorloge","Faire fonctionner l'horloge","root","ul","GND","Source","nuxt-link","raspi-config","sudo reboot now","git","nano","CTRL + X","Y","mousebind","attr-name","attr-value","attr-equals","builtin","class-name","file-descriptor","important","2021-04-13T13:48:20.775Z")));