__NUXT_JSONP__("/article/creer-horloge-matrice-leds", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA){return {data:[{}],fetch:{"0":{hostName:"https:\u002F\u002Fframboise-pi.skyost.eu",article:{slug:"creer-horloge-matrice-leds",description:U,title:"Créer une horloge avec une matrice de LEDs",categories:[_,$],date:"2021-04-12T00:00:00.000Z",toc:[{id:aa,depth:G,text:ab},{id:ac,depth:G,text:ad},{id:ae,depth:G,text:af},{id:ag,depth:G,text:ah}],body:{type:ai,children:[{type:b,tag:f,props:{},children:[{type:b,tag:p,props:{},children:[{type:a,value:U}]}]},{type:a,value:e},{type:a,value:e},{type:b,tag:"youtube",props:{video:"VBNRIcA_Ppg"},children:[{type:a,value:e}]},{type:a,value:e},{type:b,tag:H,props:{id:aa},children:[{type:a,value:ab},{type:b,tag:i,props:{href:"#mat%C3%A9riel-n%C3%A9cessaire",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K]},children:[]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Le projet est très accessible mais nécessite pas mal de matériel. Vous aurez besoin de :"}]},{type:a,value:e},{type:b,tag:aj,props:{},children:[{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:v},{type:b,tag:r,props:{},children:[{type:a,value:"Raspberry Pi Zero WH"}]},{type:a,value:L},{type:b,tag:i,props:{href:"https:\u002F\u002Famzn.to\u002F2RvB484",rel:[k,l,m],target:n},children:[{type:a,value:M}]},{type:a,value:E},{type:b,tag:i,props:{href:"https:\u002F\u002Fs.click.aliexpress.com\u002Fe\u002F_A9UaSn",rel:[k,l,m],target:n},children:[{type:a,value:N}]},{type:a,value:"]\n(n'importe quel Raspberry Pi muni de ports GPIO devrait suffire, mais cette solution me semble être la moins\nchère)."}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:v},{type:b,tag:r,props:{},children:[{type:a,value:"Matrice de LEDs"}]},{type:a,value:L},{type:b,tag:i,props:{href:"https:\u002F\u002Famzn.to\u002F3dTBa0U",rel:[k,l,m],target:n},children:[{type:a,value:M}]},{type:a,value:E},{type:b,tag:i,props:{href:"https:\u002F\u002Fs.click.aliexpress.com\u002Fe\u002F_9zTnPl",rel:[k,l,m],target:n},children:[{type:a,value:N}]},{type:a,value:"] (je vous conseille celle d'AZ-Delivery,\nabordable et de bonne qualité)."}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:v},{type:b,tag:r,props:{},children:[{type:a,value:"Touchpad USB"}]},{type:a,value:L},{type:b,tag:i,props:{href:"https:\u002F\u002Famzn.to\u002F3wRrQmQ",rel:[k,l,m],target:n},children:[{type:a,value:M}]},{type:a,value:E},{type:b,tag:i,props:{href:"https:\u002F\u002Ffr.aliexpress.com\u002Fitem\u002F32981629578.html",rel:[k,l,m],target:n},children:[{type:a,value:N}]},{type:a,value:"] (cela a l'avantage d'être généralement moins couteux\nque l'achat d'un détecteur de mouvements et de boutons)."}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:v},{type:b,tag:r,props:{},children:[{type:a,value:"Câble micro USB - USB OTG"}]},{type:a,value:L},{type:b,tag:i,props:{href:"https:\u002F\u002Famzn.to\u002F3wP0QEr",rel:[k,l,m],target:n},children:[{type:a,value:M}]},{type:a,value:E},{type:b,tag:i,props:{href:"https:\u002F\u002Fs.click.aliexpress.com\u002Fe\u002F_ABy4z9",rel:[k,l,m],target:n},children:[{type:a,value:N}]},{type:a,value:"]."}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:v},{type:b,tag:r,props:{},children:[{type:a,value:"Chargeur secteur USB"}]},{type:a,value:A}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:v},{type:b,tag:r,props:{},children:[{type:a,value:"Câble d'alimentation USB - micro USB"}]},{type:a,value:A}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:v},{type:b,tag:r,props:{},children:[{type:a,value:"Micro SD"}]},{type:a,value:" (prévoyez minimum 8Go pour n'importe quel projet)."}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:v},{type:b,tag:r,props:{},children:[{type:a,value:"Adaptateur SD"}]},{type:a,value:A}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Tout cela pour un coût total d'environ 60€ (si vous ne possédez rien)."}]},{type:a,value:e},{type:b,tag:H,props:{id:ac},children:[{type:a,value:ad},{type:b,tag:i,props:{href:"#effectuer-les-branchements",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K]},children:[]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"On va effectuer les branchements à l'aide du tableau suivant :"}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:"table",props:{},children:[{type:b,tag:"thead",props:{},children:[{type:b,tag:D,props:{},children:[{type:b,tag:F,props:{},children:[{type:a,value:"Pin Matrice"}]},{type:b,tag:F,props:{},children:[{type:a,value:"Nom"}]},{type:b,tag:F,props:{},children:[{type:a,value:"Signification"}]},{type:b,tag:F,props:{},children:[{type:a,value:"Pin RPi"}]},{type:b,tag:F,props:{},children:[{type:a,value:"Fonction"}]}]}]},{type:b,tag:"tbody",props:{},children:[{type:b,tag:D,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"1"}]},{type:b,tag:h,props:{},children:[{type:a,value:"VCC"}]},{type:b,tag:h,props:{},children:[{type:a,value:"+5V Power"}]},{type:b,tag:h,props:{},children:[{type:a,value:O}]},{type:b,tag:h,props:{},children:[{type:a,value:"5V0"}]}]},{type:b,tag:D,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:O}]},{type:b,tag:h,props:{},children:[{type:a,value:ak}]},{type:b,tag:h,props:{},children:[{type:a,value:"Ground"}]},{type:b,tag:h,props:{},children:[{type:a,value:"6"}]},{type:b,tag:h,props:{},children:[{type:a,value:ak}]}]},{type:b,tag:D,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"3"}]},{type:b,tag:h,props:{},children:[{type:a,value:"DIN"}]},{type:b,tag:h,props:{},children:[{type:a,value:"Data In"}]},{type:b,tag:h,props:{},children:[{type:a,value:"19"}]},{type:b,tag:h,props:{},children:[{type:a,value:"GPIO 10 (MOSI)"}]}]},{type:b,tag:D,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"4"}]},{type:b,tag:h,props:{},children:[{type:a,value:"CS"}]},{type:b,tag:h,props:{},children:[{type:a,value:"Chip Select"}]},{type:b,tag:h,props:{},children:[{type:a,value:"24"}]},{type:b,tag:h,props:{},children:[{type:a,value:"GPIO 8 (SPI CE0)"}]}]},{type:b,tag:D,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"5"}]},{type:b,tag:h,props:{},children:[{type:a,value:"CLK"}]},{type:b,tag:h,props:{},children:[{type:a,value:"Clock"}]},{type:b,tag:h,props:{},children:[{type:a,value:"23"}]},{type:b,tag:h,props:{},children:[{type:a,value:"GPIO 11 (SPI CLK)"}]}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:i,props:{href:"https:\u002F\u002Fluma-led-matrix.readthedocs.io\u002Fen\u002Flatest\u002Finstall.html#max7219-devices-spi",rel:[k,l,m],target:n},children:[{type:a,value:al}]},{type:a,value:A}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Chaque port de la matrice de LEDs doit être relié au port correspondant sur le Raspberry.\nVoici la carte des ports GPIO sur les modèles les plus récents :"}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:V,props:{alt:"Carte des ports GPIO",src:"\u002Fimages\u002Farticles\u002Fcreer-horloge-matrice-leds\u002Fgpio-pinout.png"},children:[]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:i,props:{href:"https:\u002F\u002Fwww.raspberrypi.org\u002Fdocumentation\u002Fusage\u002Fgpio\u002F",rel:[k,l,m],target:n},children:[{type:a,value:al}]},{type:a,value:A}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Ce qui devrait vous donner quelque-chose comme ça :"}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:V,props:{alt:"Branchements",src:"\u002Fimages\u002Farticles\u002Fcreer-horloge-matrice-leds\u002Fbranchements.png"},children:[]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Branchez ensuite le touchpad à l'aide du câble micro USB - USB."}]},{type:a,value:e},{type:b,tag:H,props:{id:ae},children:[{type:a,value:af},{type:b,tag:i,props:{href:"#mettre-en-place-le-script",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K]},children:[]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Insérez votre micro SD dans votre ordinateur et flashez Raspberry Pi OS dessus (un tutoriel a été rédigé à ce sujet,\nil est disponible "},{type:b,tag:W,props:{to:"\u002Farticle\u002Finstallation-minimale-raspberry-pi#t%C3%A9l%C3%A9charger-et-flasher-raspberry-os"},children:[{type:a,value:X}]},{type:a,value:"). Activez SSH\net la connexion à votre réseau Wi-Fi en suivant les étapes disponibles\n"},{type:b,tag:W,props:{to:"\u002Farticle\u002Finstallation-minimale-raspberry-pi#activer-ssh-et-se-connecter-au-wi-fi"},children:[{type:a,value:X}]},{type:a,value:".\nEnlevez votre carte de l'ordinateur, et insérez-la dans le Raspberry que vous pouvez désormais mettre sous tension."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Commencez par vous "},{type:b,tag:W,props:{to:"\u002Farticle\u002Finstallation-minimale-raspberry-pi\u002F#se-connecter-en-ssh"},children:[{type:a,value:"connecter en SSH"}]},{type:a,value:".\nOn va activer l'interface SPI en lançant l'utilitaire "},{type:b,tag:j,props:{},children:[{type:a,value:am}]},{type:a,value:" (il suffit pour cela d'exécuter la\ncommande "},{type:b,tag:j,props:{},children:[{type:a,value:"sudo raspi-config"}]},{type:a,value:"). Sélectionnez "},{type:b,tag:p,props:{},children:[{type:a,value:"Interfacing Options"}]},{type:a,value:", puis "},{type:b,tag:p,props:{},children:[{type:a,value:"SPI"}]},{type:a,value:", et "},{type:b,tag:p,props:{},children:[{type:a,value:"Yes"}]},{type:a,value:".\nTant qu'on y est, on va changer le fuseau horaire de votre Pi. Pour ce faire, sortez de ce menu et rendez-vous dans\nle menu "},{type:b,tag:p,props:{},children:[{type:a,value:"Localisation Options"}]},{type:a,value:". À partir de ce menu, sélectionnez "},{type:b,tag:p,props:{},children:[{type:a,value:"Change Timezone"}]},{type:a,value:" et choisissez "},{type:b,tag:p,props:{},children:[{type:a,value:"Europe (Paris)"}]},{type:a,value:A}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Sortez de l'utilitaire et  redémarrez (si "},{type:b,tag:j,props:{},children:[{type:a,value:am}]},{type:a,value:" ne vous propose pas de redémarrer,\nla commande "},{type:b,tag:j,props:{},children:[{type:a,value:an}]},{type:a,value:" fera l'affaire)."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"J'ai créé un petit script Python pour ce projet qui nécessite cependant quelques commandes pour fonctionner.\nTout d'abord, il faut s'assurer que la version de Python utilisée par défaut soit la version 3 :"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,B]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:" update-alternatives --install \u002Fusr\u002Fbin\u002Fpython python \u002Fusr\u002Fbin\u002Fpython3.7 "},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:O}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"La commande "},{type:b,tag:j,props:{},children:[{type:a,value:"python --version"}]},{type:a,value:" doit maintenant vous renvoyer "},{type:b,tag:j,props:{},children:[{type:a,value:"Python 3.7.x"}]},{type:a,value:". On va maintenant pouvoir installer les\ndépendances :"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,B]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"usermod"}]},{type:a,value:" -a -G spi,gpio pi\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Y}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:" build-essential libfreetype6-dev libjpeg-dev libopenjp2-7 libtiff5\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:" luma.led_matrix\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Y}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:" libsdl-dev libportmidi-dev libsdl-ttf2.0-dev libsdl-mixer1.2-dev libsdl-image1.2-dev\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:" pygame\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:" luma.emulator\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:" pynput\n"}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"(Il s'agit d'un condensé des informations d'installation de\n"},{type:b,tag:i,props:{href:"https:\u002F\u002Fluma-led-matrix.readthedocs.io\u002Fen\u002Flatest\u002Finstall.html",rel:[k,l,m],target:n},children:[{type:a,value:"Luma LED Matrix"}]},{type:a,value:E},{type:b,tag:i,props:{href:"https:\u002F\u002Fluma-emulator.readthedocs.io\u002Fen\u002Flatest\u002Finstall.html",rel:[k,l,m],target:n},children:[{type:a,value:"Luma Emulator"}]},{type:a,value:", et\n"},{type:b,tag:i,props:{href:"https:\u002F\u002Fpypi.org\u002Fproject\u002Fpynput\u002F",rel:[k,l,m],target:n},children:[{type:a,value:"Pynput"}]},{type:a,value:"). Vous pouvez maintenant télécharger le script directement depuis Github :"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,B]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Y}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ao}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ao}]},{type:a,value:" clone https:\u002F\u002Fgithub.com\u002FSkyost\u002FAnaclock.git\n"}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"On va désactiver toutes les interactions possibles avec Raspberry Pi OS à la souris (pour éviter qu'un mauvais clic\nvienne éteindre le système, voire pire). Pour cela, on va éditer le fichier "},{type:b,tag:j,props:{},children:[{type:a,value:"~\u002F.config\u002Flxsession\u002FLXDE-pi\u002Fautostart"}]},{type:a,value:" à\nl'aide de Nano :"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,B]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ap}]},{type:a,value:" ~\u002F.config\u002Flxsession\u002FLXDE-pi\u002Fautostart\n"}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Cherchez la ligne commençant par "},{type:b,tag:j,props:{},children:[{type:a,value:"@lxpanel"}]},{type:a,value:" et éditez le fichier comme suit :"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,B]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"# @lxpanel --profile LXDE-pi # Désactive lxpanel."}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"# @pcmanfm --desktop --profile LXDE-pi # Désactive PCManFM."}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"# @xscreensaver -no-splash # Désactive xscreensaver."}]},{type:a,value:"\n@xset s off "},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"# Désactive l’économiseur d’écran."}]},{type:a,value:"\n@xset -dpms "},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"# Désactive DPMS."}]},{type:a,value:"\n@xset s noblank "},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"# Empêche l'écran de devenir blanc."}]},{type:a,value:"\n@point-rpi "},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"# Positionne la souris sur le bouton du menu."}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Faîtes "},{type:b,tag:p,props:{},children:[{type:a,value:aq}]},{type:a,value:" pour enregistrer le fichier, puis "},{type:b,tag:p,props:{},children:[{type:a,value:ar}]},{type:a,value:" pour valider. On va maintenant supprimer le menu contextuel\nd'OpenBox. Éditez le fichier "},{type:b,tag:j,props:{},children:[{type:a,value:"~\u002F.config\u002Fopenbox\u002Flxde-pi-rc.xml"}]},{type:a,value:" avec Nano :"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,B]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ap}]},{type:a,value:" ~\u002F.config\u002Fopenbox\u002Flxde-pi-rc.xml\n"}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Et supprimez les lignes qui sont responsables du clic droit :"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,"language-xml"]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u003C!-- Supprimez ou commentez ce qui se trouve entre cette balise... --\u003E"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,Q]},children:[{type:b,tag:c,props:{className:[d,Q]},children:[{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\u003C"}]},{type:a,value:as}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"button"}]},{type:b,tag:c,props:{className:[d,au]},children:[{type:b,tag:c,props:{className:[d,u,av]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:R}]},{type:a,value:"Right"},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:R}]}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"action"}]},{type:b,tag:c,props:{className:[d,au]},children:[{type:b,tag:c,props:{className:[d,u,av]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:R}]},{type:a,value:"Press"},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:R}]}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:S}]}]},{type:a,value:"\n  "},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u003C!-- ... --\u003E"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,Q]},children:[{type:b,tag:c,props:{className:[d,Q]},children:[{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\u003C\u002F"}]},{type:a,value:as}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:S}]}]},{type:a,value:" \n"},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\u003C!-- ... Et cette balise. --\u003E"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Au lieu de faire tout cela, une autre possibilité aurait été de lancer Chromium en mode kiosk au démarrage\n(les étapes pour faire ceci sont disponibles "},{type:b,tag:i,props:{href:"https:\u002F\u002Fgist.github.com\u002Fjongrover\u002F6831346",rel:[k,l,m],target:n},children:[{type:a,value:X}]},{type:a,value:").\nDe même, faîtes "},{type:b,tag:p,props:{},children:[{type:a,value:aq}]},{type:a,value:" pour enregistrer le fichier, et validez avec "},{type:b,tag:p,props:{},children:[{type:a,value:ar}]},{type:a,value:". On peut maintenant redémarrer le système\navec "},{type:b,tag:j,props:{},children:[{type:a,value:an}]},{type:a,value:A}]},{type:a,value:e},{type:b,tag:H,props:{id:ag},children:[{type:a,value:ah},{type:b,tag:i,props:{href:"#faire-fonctionner-lhorloge",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K]},children:[]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Une fois le système redémarré, on se dirige dans le répertoire du script, et on l'exécute en fond :"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,B]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,aw,ax]},children:[{type:a,value:"cd"}]},{type:a,value:" Anaclock\n"},{type:b,tag:c,props:{className:[d,aw,ax]},children:[{type:a,value:"export"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,"assign-left","variable"]},children:[{type:b,tag:c,props:{className:[d,"environment","constant"]},children:[{type:a,value:"DISPLAY"}]}]},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:Z}]},{type:a,value:":0.0\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"nohup"}]},{type:a,value:" python .\u002Fanaclock.py "},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:S}]},{type:a,value:"\u002Fdev\u002Fnull "},{type:b,tag:c,props:{className:[d,T]},children:[{type:b,tag:c,props:{className:[d,ay,az]},children:[{type:a,value:O}]},{type:a,value:S}]},{type:b,tag:c,props:{className:[d,ay,az]},children:[{type:a,value:"&1"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:"&"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"N'hésitez pas à mettre ceci dans un petit script qui se lance automatiquement, cela peut toujours faire gagner du temps.\nEt voilà, normalement si vous bougez la souris en effectuant un mouvement sur le touchpad... La matrice de LEDs\ndevrait s'animer !"}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:V,props:{alt:"Résultat",src:"\u002Fimages\u002Farticles\u002Fcreer-horloge-matrice-leds\u002Fresultat.gif"},children:[]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Voici les commandes programmées :"}]},{type:a,value:e},{type:b,tag:aj,props:{},children:[{type:a,value:e},{type:b,tag:q,props:{},children:[{type:b,tag:r,props:{},children:[{type:a,value:"Clic gauche \u002F mouvement"}]},{type:a,value:" : affiche l'heure."}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:b,tag:r,props:{},children:[{type:a,value:"Clic droit"}]},{type:a,value:" : affiche la date."}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:b,tag:r,props:{},children:[{type:a,value:"Appui consécutif d'au moins 5 secondes sur le clic gauche"}]},{type:a,value:" : éteint l'appareil."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"C'est terminé ! En espérant que ce petit projet vous ait plu, n'hésitez pas à m'envoyer vos retours 😉"}]}]},excerpt:{type:ai,children:[{type:b,tag:f,props:{},children:[{type:b,tag:p,props:{},children:[{type:a,value:U}]}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fcreer-horloge-matrice-leds",extension:".md",createdAt:aA,updatedAt:aA,bodyHtml:"\u003Cp\u003E\u003Cem\u003EPremier projet à voir le jour sur blog ! Nous allons voir ici comment créer une horloge abordable\nqui se déclenche au toucher à l'aide d'un Raspberry Pi, d'un Touchpad et d'une matrice de LEDs.\u003C\u002Fem\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ciframe width=\"640\"\n  height=\"360\"\n  src=\"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002FVBNRIcA_Ppg\"\n  title=\"YouTube video player\"\n  frameborder=\"0\"\n  allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n  allowfullscreen\n\u003E\u003C\u002Fiframe\u003E\n\u003Cbr\u003E\u003Ca href=\"https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=VBNRIcA_Ppg\"\u003ELien vers la vidéo YouTube\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\u003Ch2 id=\"matériel-nécessaire\"\u003EMatériel nécessaire\u003C\u002Fh2\u003E\n\u003Cp\u003ELe projet est très accessible mais nécessite pas mal de matériel. Vous aurez besoin de :\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E1 \u003Cstrong\u003ERaspberry Pi Zero WH\u003C\u002Fstrong\u003E [\u003Ca href=\"https:\u002F\u002Famzn.to\u002F2RvB484\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003EAmazon\u003C\u002Fa\u003E,\n\u003Ca href=\"https:\u002F\u002Fs.click.aliexpress.com\u002Fe\u002F_A9UaSn\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003EAliExpress\u003C\u002Fa\u003E]\n(n'importe quel Raspberry Pi muni de ports GPIO devrait suffire, mais cette solution me semble être la moins\nchère).\u003C\u002Fli\u003E\n\u003Cli\u003E1 \u003Cstrong\u003EMatrice de LEDs\u003C\u002Fstrong\u003E [\u003Ca href=\"https:\u002F\u002Famzn.to\u002F3dTBa0U\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003EAmazon\u003C\u002Fa\u003E,\n\u003Ca href=\"https:\u002F\u002Fs.click.aliexpress.com\u002Fe\u002F_9zTnPl\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003EAliExpress\u003C\u002Fa\u003E] (je vous conseille celle d'AZ-Delivery,\nabordable et de bonne qualité).\u003C\u002Fli\u003E\n\u003Cli\u003E1 \u003Cstrong\u003ETouchpad USB\u003C\u002Fstrong\u003E [\u003Ca href=\"https:\u002F\u002Famzn.to\u002F3wRrQmQ\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003EAmazon\u003C\u002Fa\u003E,\n\u003Ca href=\"https:\u002F\u002Ffr.aliexpress.com\u002Fitem\u002F32981629578.html\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003EAliExpress\u003C\u002Fa\u003E] (cela a l'avantage d'être généralement moins couteux\nque l'achat d'un détecteur de mouvements et de boutons).\u003C\u002Fli\u003E\n\u003Cli\u003E1 \u003Cstrong\u003ECâble micro USB - USB OTG\u003C\u002Fstrong\u003E [\u003Ca href=\"https:\u002F\u002Famzn.to\u002F3wP0QEr\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003EAmazon\u003C\u002Fa\u003E,\n\u003Ca href=\"https:\u002F\u002Fs.click.aliexpress.com\u002Fe\u002F_ABy4z9\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003EAliExpress\u003C\u002Fa\u003E].\u003C\u002Fli\u003E\n\u003Cli\u003E1 \u003Cstrong\u003EChargeur secteur USB\u003C\u002Fstrong\u003E.\u003C\u002Fli\u003E\n\u003Cli\u003E1 \u003Cstrong\u003ECâble d'alimentation USB - micro USB\u003C\u002Fstrong\u003E.\u003C\u002Fli\u003E\n\u003Cli\u003E1 \u003Cstrong\u003EMicro SD\u003C\u002Fstrong\u003E (prévoyez minimum 8Go pour n'importe quel projet).\u003C\u002Fli\u003E\n\u003Cli\u003E1 \u003Cstrong\u003EAdaptateur SD\u003C\u002Fstrong\u003E.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003ETout cela pour un coût total d'environ 60€ (si vous ne possédez rien).\u003C\u002Fp\u003E\n\u003Ch2 id=\"effectuer-les-branchements\"\u003EEffectuer les branchements\u003C\u002Fh2\u003E\n\u003Cp\u003EOn va effectuer les branchements à l'aide du tableau suivant :\u003C\u002Fp\u003E\n\u003Ctable\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth\u003EPin Matrice\u003C\u002Fth\u003E\n\u003Cth\u003ENom\u003C\u002Fth\u003E\n\u003Cth\u003ESignification\u003C\u002Fth\u003E\n\u003Cth\u003EPin RPi\u003C\u002Fth\u003E\n\u003Cth\u003EFonction\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E1\u003C\u002Ftd\u003E\n\u003Ctd\u003EVCC\u003C\u002Ftd\u003E\n\u003Ctd\u003E+5V Power\u003C\u002Ftd\u003E\n\u003Ctd\u003E2\u003C\u002Ftd\u003E\n\u003Ctd\u003E5V0\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E2\u003C\u002Ftd\u003E\n\u003Ctd\u003EGND\u003C\u002Ftd\u003E\n\u003Ctd\u003EGround\u003C\u002Ftd\u003E\n\u003Ctd\u003E6\u003C\u002Ftd\u003E\n\u003Ctd\u003EGND\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E3\u003C\u002Ftd\u003E\n\u003Ctd\u003EDIN\u003C\u002Ftd\u003E\n\u003Ctd\u003EData In\u003C\u002Ftd\u003E\n\u003Ctd\u003E19\u003C\u002Ftd\u003E\n\u003Ctd\u003EGPIO 10 (MOSI)\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E4\u003C\u002Ftd\u003E\n\u003Ctd\u003ECS\u003C\u002Ftd\u003E\n\u003Ctd\u003EChip Select\u003C\u002Ftd\u003E\n\u003Ctd\u003E24\u003C\u002Ftd\u003E\n\u003Ctd\u003EGPIO 8 (SPI CE0)\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E5\u003C\u002Ftd\u003E\n\u003Ctd\u003ECLK\u003C\u002Ftd\u003E\n\u003Ctd\u003EClock\u003C\u002Ftd\u003E\n\u003Ctd\u003E23\u003C\u002Ftd\u003E\n\u003Ctd\u003EGPIO 11 (SPI CLK)\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fluma-led-matrix.readthedocs.io\u002Fen\u002Flatest\u002Finstall.html#max7219-devices-spi\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003ESource\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\u003Cp\u003EChaque port de la matrice de LEDs doit être relié au port correspondant sur le Raspberry.\nVoici la carte des ports GPIO sur les modèles les plus récents :\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fframboise-pi.skyost.eu\u002Fimages\u002Farticles\u002Fcreer-horloge-matrice-leds\u002Fgpio-pinout.png\" alt=\"Carte des ports GPIO\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwww.raspberrypi.org\u002Fdocumentation\u002Fusage\u002Fgpio\u002F\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003ESource\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\u003Cp\u003ECe qui devrait vous donner quelque-chose comme ça :\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fframboise-pi.skyost.eu\u002Fimages\u002Farticles\u002Fcreer-horloge-matrice-leds\u002Fbranchements.png\" alt=\"Branchements\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003EBranchez ensuite le touchpad à l'aide du câble micro USB - USB.\u003C\u002Fp\u003E\n\u003Ch2 id=\"mettre-en-place-le-script\"\u003EMettre en place le script\u003C\u002Fh2\u003E\n\u003Cp\u003EInsérez votre micro SD dans votre ordinateur et flashez Raspberry Pi OS dessus (un tutoriel a été rédigé à ce sujet,\nil est disponible \u003Ca href=\"https:\u002F\u002Fframboise-pi.skyost.eu\u002Farticle\u002Finstallation-minimale-raspberry-pi#t%C3%A9l%C3%A9charger-et-flasher-raspberry-os\"\u003Eici\u003C\u002Fa\u003E). Activez SSH\net la connexion à votre réseau Wi-Fi en suivant les étapes disponibles\n\u003Ca href=\"https:\u002F\u002Fframboise-pi.skyost.eu\u002Farticle\u002Finstallation-minimale-raspberry-pi#activer-ssh-et-se-connecter-au-wi-fi\"\u003Eici\u003C\u002Fa\u003E.\nEnlevez votre carte de l'ordinateur, et insérez-la dans le Raspberry que vous pouvez désormais mettre sous tension.\u003C\u002Fp\u003E\n\u003Cp\u003ECommencez par vous \u003Ca href=\"https:\u002F\u002Fframboise-pi.skyost.eu\u002Farticle\u002Finstallation-minimale-raspberry-pi\u002F#se-connecter-en-ssh\"\u003Econnecter en SSH\u003C\u002Fa\u003E.\nOn va activer l'interface SPI en lançant l'utilitaire \u003Ccode\u003Eraspi-config\u003C\u002Fcode\u003E (il suffit pour cela d'exécuter la\ncommande \u003Ccode\u003Esudo raspi-config\u003C\u002Fcode\u003E). Sélectionnez \u003Cem\u003EInterfacing Options\u003C\u002Fem\u003E, puis \u003Cem\u003ESPI\u003C\u002Fem\u003E, et \u003Cem\u003EYes\u003C\u002Fem\u003E.\nTant qu'on y est, on va changer le fuseau horaire de votre Pi. Pour ce faire, sortez de ce menu et rendez-vous dans\nle menu \u003Cem\u003ELocalisation Options\u003C\u002Fem\u003E. À partir de ce menu, sélectionnez \u003Cem\u003EChange Timezone\u003C\u002Fem\u003E et choisissez \u003Cem\u003EEurope (Paris)\u003C\u002Fem\u003E.\u003C\u002Fp\u003E\n\u003Cp\u003ESortez de l'utilitaire et  redémarrez (si \u003Ccode\u003Eraspi-config\u003C\u002Fcode\u003E ne vous propose pas de redémarrer,\nla commande \u003Ccode\u003Esudo reboot now\u003C\u002Fcode\u003E fera l'affaire).\u003C\u002Fp\u003E\n\u003Cp\u003EJ'ai créé un petit script Python pour ce projet qui nécessite cependant quelques commandes pour fonctionner.\nTout d'abord, il faut s'assurer que la version de Python utilisée par défaut soit la version 3 :\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Esudo update-alternatives --install \u002Fusr\u002Fbin\u002Fpython python \u002Fusr\u002Fbin\u002Fpython3.7 2\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003ELa commande \u003Ccode\u003Epython --version\u003C\u002Fcode\u003E doit maintenant vous renvoyer \u003Ccode\u003EPython 3.7.x\u003C\u002Fcode\u003E. On va maintenant pouvoir installer les\ndépendances :\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Esudo usermod -a -G spi,gpio pi\nsudo apt install build-essential libfreetype6-dev libjpeg-dev libopenjp2-7 libtiff5\nsudo pip3 install luma.led_matrix\nsudo apt install libsdl-dev libportmidi-dev libsdl-ttf2.0-dev libsdl-mixer1.2-dev libsdl-image1.2-dev\nsudo pip3 install pygame\nsudo pip3 install luma.emulator\nsudo pip3 install pynput\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E(Il s'agit d'un condensé des informations d'installation de\n\u003Ca href=\"https:\u002F\u002Fluma-led-matrix.readthedocs.io\u002Fen\u002Flatest\u002Finstall.html\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003ELuma LED Matrix\u003C\u002Fa\u003E,\n\u003Ca href=\"https:\u002F\u002Fluma-emulator.readthedocs.io\u002Fen\u002Flatest\u002Finstall.html\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003ELuma Emulator\u003C\u002Fa\u003E, et\n\u003Ca href=\"https:\u002F\u002Fpypi.org\u002Fproject\u002Fpynput\u002F\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003EPynput\u003C\u002Fa\u003E). Vous pouvez maintenant télécharger le script directement depuis Github :\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Esudo apt install git\ngit clone https:\u002F\u002Fgithub.com\u002FSkyost\u002FAnaclock.git\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EOn va désactiver toutes les interactions possibles avec Raspberry Pi OS à la souris (pour éviter qu'un mauvais clic\nvienne éteindre le système, voire pire). Pour cela, on va éditer le fichier \u003Ccode\u003E~\u002F.config\u002Flxsession\u002FLXDE-pi\u002Fautostart\u003C\u002Fcode\u003E à\nl'aide de Nano :\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Esudo nano ~\u002F.config\u002Flxsession\u002FLXDE-pi\u002Fautostart\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003ECherchez la ligne commençant par \u003Ccode\u003E@lxpanel\u003C\u002Fcode\u003E et éditez le fichier comme suit :\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003E# @lxpanel --profile LXDE-pi # Désactive lxpanel.\n# @pcmanfm --desktop --profile LXDE-pi # Désactive PCManFM.\n# @xscreensaver -no-splash # Désactive xscreensaver.\n@xset s off # Désactive l’économiseur d’écran.\n@xset -dpms # Désactive DPMS.\n@xset s noblank # Empêche l'écran de devenir blanc.\n@point-rpi # Positionne la souris sur le bouton du menu.\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EFaîtes \u003Cem\u003ECTRL + X\u003C\u002Fem\u003E pour enregistrer le fichier, puis \u003Cem\u003EY\u003C\u002Fem\u003E pour valider. On va maintenant supprimer le menu contextuel\nd'OpenBox. Éditez le fichier \u003Ccode\u003E~\u002F.config\u002Fopenbox\u002Flxde-pi-rc.xml\u003C\u002Fcode\u003E avec Nano :\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Esudo nano ~\u002F.config\u002Fopenbox\u002Flxde-pi-rc.xml\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EEt supprimez les lignes qui sont responsables du clic droit :\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-xml\"\u003E&#x3C;!-- Supprimez ou commentez ce qui se trouve entre cette balise... --\u003E\n&#x3C;mousebind button=\"Right\" action=\"Press\"\u003E\n  &#x3C;!-- ... --\u003E\n&#x3C;\u002Fmousebind\u003E \n&#x3C;!-- ... Et cette balise. --\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EAu lieu de faire tout cela, une autre possibilité aurait été de lancer Chromium en mode kiosk au démarrage\n(les étapes pour faire ceci sont disponibles \u003Ca href=\"https:\u002F\u002Fgist.github.com\u002Fjongrover\u002F6831346\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\u003Eici\u003C\u002Fa\u003E).\nDe même, faîtes \u003Cem\u003ECTRL + X\u003C\u002Fem\u003E pour enregistrer le fichier, et validez avec \u003Cem\u003EY\u003C\u002Fem\u003E. On peut maintenant redémarrer le système\navec \u003Ccode\u003Esudo reboot now\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\u003Ch2 id=\"faire-fonctionner-lhorloge\"\u003EFaire fonctionner l'horloge\u003C\u002Fh2\u003E\n\u003Cp\u003EUne fois le système redémarré, on se dirige dans le répertoire du script, et on l'exécute en fond :\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Ecd Anaclock\nexport DISPLAY=:0.0\nnohup python .\u002Fanaclock.py \u003E\u002Fdev\u002Fnull 2\u003E&#x26;1 &#x26;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EN'hésitez pas à mettre ceci dans un petit script qui se lance automatiquement, cela peut toujours faire gagner du temps.\nEt voilà, normalement si vous bougez la souris en effectuant un mouvement sur le touchpad... La matrice de LEDs\ndevrait s'animer !\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fframboise-pi.skyost.eu\u002Fimages\u002Farticles\u002Fcreer-horloge-matrice-leds\u002Fresultat.gif\" alt=\"Résultat\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003EVoici les commandes programmées :\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cstrong\u003EClic gauche \u002F mouvement\u003C\u002Fstrong\u003E : affiche l'heure.\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cstrong\u003EClic droit\u003C\u002Fstrong\u003E : affiche la date.\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cstrong\u003EAppui consécutif d'au moins 5 secondes sur le clic gauche\u003C\u002Fstrong\u003E : éteint l'appareil.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EC'est terminé ! En espérant que ce petit projet vous ait plu, n'hésitez pas à m'envoyer vos retours 😉\u003C\u002Fp\u003E\n"},author:{name:"Skyost",link:"https:\u002F\u002Fskyost.eu"}},"data-v-37386b08:0":{categories:["annonces",$,_]}},mutations:void 0}}("text","element","span","token","\n","p","function","td","a","code","nofollow","noopener","noreferrer","_blank"," ","em","li","strong","sudo","comment","punctuation","1 ","div","nuxt-content-highlight","pre","line-numbers",".","language-shell","install","tr",",\n","th",2,"h2","true",-1,"anchor"," [","Amazon","AliExpress","2"," pip3 ","tag","\"","\u003E","operator","Premier projet à voir le jour sur blog ! Nous allons voir ici comment créer une horloge abordable\nqui se déclenche au toucher à l'aide d'un Raspberry Pi, d'un Touchpad et d'une matrice de LEDs.","img","nuxt-link","ici","apt","=","tutoriels","projets","matériel-nécessaire","Matériel nécessaire","effectuer-les-branchements","Effectuer les branchements","mettre-en-place-le-script","Mettre en place le script","faire-fonctionner-lhorloge","Faire fonctionner l'horloge","root","ul","GND","Source","raspi-config","sudo reboot now","git","nano","CTRL + X","Y","mousebind","attr-name","attr-value","attr-equals","builtin","class-name","file-descriptor","important","2021-04-18T19:20:14.123Z")));