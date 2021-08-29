__NUXT_JSONP__("/article/creer-horloge-matrice-leds", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al){return {data:[{}],fetch:{"0":{hostName:"https:\u002F\u002Fframboise-pi.skyost.eu",article:{slug:"creer-horloge-matrice-leds",description:J,title:"Créer une horloge avec une matrice de LEDs",categories:[P,Q],date:"2021-04-12T00:00:00.000Z",toc:[{depth:z,text:R},{depth:z,text:S},{depth:z,text:T},{depth:z,text:U}],body:{type:V,children:[{type:b,tag:f,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:J}]}]},{type:a,value:c},{type:a,value:c},{type:b,tag:"youtube",props:{video:"VBNRIcA_Ppg"},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:A,props:{},children:[{type:a,value:R}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Le projet est très accessible mais nécessite pas mal de matériel. Vous aurez besoin de :"}]},{type:a,value:c},{type:b,tag:W,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:q},{type:b,tag:m,props:{},children:[{type:a,value:"Raspberry Pi Zero WH"}]},{type:a,value:B},{type:b,tag:i,props:{href:"https:\u002F\u002Famzn.to\u002F2RvB484"},children:[{type:a,value:C}]},{type:a,value:y},{type:b,tag:i,props:{href:"https:\u002F\u002Fs.click.aliexpress.com\u002Fe\u002F_A9UaSn"},children:[{type:a,value:D}]},{type:a,value:"]\n(n'importe quel Raspberry Pi muni de ports GPIO devrait suffire, mais cette solution me semble être la moins\nchère)."}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:q},{type:b,tag:m,props:{},children:[{type:a,value:"Matrice de LEDs"}]},{type:a,value:B},{type:b,tag:i,props:{href:"https:\u002F\u002Famzn.to\u002F3dTBa0U"},children:[{type:a,value:C}]},{type:a,value:y},{type:b,tag:i,props:{href:"https:\u002F\u002Fs.click.aliexpress.com\u002Fe\u002F_9zTnPl"},children:[{type:a,value:D}]},{type:a,value:"] (je vous conseille celle d'AZ-Delivery,\nabordable et de bonne qualité)."}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:q},{type:b,tag:m,props:{},children:[{type:a,value:"Touchpad USB"}]},{type:a,value:B},{type:b,tag:i,props:{href:"https:\u002F\u002Famzn.to\u002F3wRrQmQ"},children:[{type:a,value:C}]},{type:a,value:y},{type:b,tag:i,props:{href:"https:\u002F\u002Ffr.aliexpress.com\u002Fitem\u002F32981629578.html"},children:[{type:a,value:D}]},{type:a,value:"] (cela a l'avantage d'être généralement moins couteux\nque l'achat d'un détecteur de mouvements et de boutons)."}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:q},{type:b,tag:m,props:{},children:[{type:a,value:"Câble micro USB - USB OTG"}]},{type:a,value:B},{type:b,tag:i,props:{href:"https:\u002F\u002Famzn.to\u002F3wP0QEr"},children:[{type:a,value:C}]},{type:a,value:y},{type:b,tag:i,props:{href:"https:\u002F\u002Fs.click.aliexpress.com\u002Fe\u002F_ABy4z9"},children:[{type:a,value:D}]},{type:a,value:"]."}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:q},{type:b,tag:m,props:{},children:[{type:a,value:"Chargeur secteur USB"}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:q},{type:b,tag:m,props:{},children:[{type:a,value:"Câble d'alimentation USB - micro USB"}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:q},{type:b,tag:m,props:{},children:[{type:a,value:"Micro SD"}]},{type:a,value:" (prévoyez minimum 8Go pour n'importe quel projet)."}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:q},{type:b,tag:m,props:{},children:[{type:a,value:"Adaptateur SD"}]},{type:a,value:v}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Tout cela pour un coût total d'environ 60€ (si vous ne possédez rien)."}]},{type:a,value:c},{type:b,tag:A,props:{},children:[{type:a,value:S}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"On va effectuer les branchements à l'aide du tableau suivant :"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"| Pin Matrice | Nom | Signification | Pin RPi | Fonction          |\n|-------------|-----|---------------|---------|-------------------|\n| 1           | VCC | +5V Power     | 2       | 5V0               |\n| 2           | GND | Ground        | 6       | GND               |\n| 3           | DIN | Data In       | 19      | GPIO 10 (MOSI)    |\n| 4           | CS  | Chip Select   | 24      | GPIO 8 (SPI CE0)  |\n| 5           | CLK | Clock         | 23      | GPIO 11 (SPI CLK) |"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:i,props:{href:"https:\u002F\u002Fluma-led-matrix.readthedocs.io\u002Fen\u002Flatest\u002Finstall.html#max7219-devices-spi"},children:[{type:a,value:X}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Chaque port de la matrice de LEDs doit être relié au port correspondant sur le Raspberry.\nVoici la carte des ports GPIO sur les modèles les plus récents :"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:K,props:{alt:"Carte des ports GPIO",src:"\u002Fimages\u002Farticles\u002Fcreer-horloge-matrice-leds\u002Fgpio-pinout.png"},children:[]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:i,props:{href:"https:\u002F\u002Fwww.raspberrypi.org\u002Fdocumentation\u002Fusage\u002Fgpio\u002F"},children:[{type:a,value:X}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Ce qui devrait vous donner quelque-chose comme ça :"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:K,props:{alt:"Branchements",src:"\u002Fimages\u002Farticles\u002Fcreer-horloge-matrice-leds\u002Fbranchements.png"},children:[]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Branchez ensuite le touchpad à l'aide du câble micro USB - USB."}]},{type:a,value:c},{type:b,tag:A,props:{},children:[{type:a,value:T}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Insérez votre micro SD dans votre ordinateur et flashez Raspberry Pi OS dessus (un tutoriel a été rédigé à ce sujet,\nil est disponible "},{type:b,tag:L,props:{to:"\u002Farticle\u002Finstallation-minimale-raspberry-pi#t%C3%A9l%C3%A9charger-et-flasher-raspberry-os"},children:[{type:a,value:M}]},{type:a,value:"). Activez SSH\net la connexion à votre réseau Wi-Fi en suivant les étapes disponibles\n"},{type:b,tag:L,props:{to:"\u002Farticle\u002Finstallation-minimale-raspberry-pi#activer-ssh-et-se-connecter-au-wi-fi"},children:[{type:a,value:M}]},{type:a,value:".\nEnlevez votre carte de l'ordinateur, et insérez-la dans le Raspberry que vous pouvez désormais mettre sous tension."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Commencez par vous "},{type:b,tag:L,props:{to:"\u002Farticle\u002Finstallation-minimale-raspberry-pi\u002F#se-connecter-en-ssh"},children:[{type:a,value:"connecter en SSH"}]},{type:a,value:".\nOn va activer l'interface SPI en lançant l'utilitaire "},{type:b,tag:h,props:{},children:[{type:a,value:Y}]},{type:a,value:" (il suffit pour cela d'exécuter la\ncommande "},{type:b,tag:h,props:{},children:[{type:a,value:"sudo raspi-config"}]},{type:a,value:"). Sélectionnez "},{type:b,tag:k,props:{},children:[{type:a,value:"Interfacing Options"}]},{type:a,value:", puis "},{type:b,tag:k,props:{},children:[{type:a,value:"SPI"}]},{type:a,value:", et "},{type:b,tag:k,props:{},children:[{type:a,value:"Yes"}]},{type:a,value:".\nTant qu'on y est, on va changer le fuseau horaire de votre Pi. Pour ce faire, sortez de ce menu et rendez-vous dans\nle menu "},{type:b,tag:k,props:{},children:[{type:a,value:"Localisation Options"}]},{type:a,value:". À partir de ce menu, sélectionnez "},{type:b,tag:k,props:{},children:[{type:a,value:"Change Timezone"}]},{type:a,value:" et choisissez "},{type:b,tag:k,props:{},children:[{type:a,value:"Europe (Paris)"}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Sortez de l'utilitaire et  redémarrez (si "},{type:b,tag:h,props:{},children:[{type:a,value:Y}]},{type:a,value:" ne vous propose pas de redémarrer,\nla commande "},{type:b,tag:h,props:{},children:[{type:a,value:Z}]},{type:a,value:" fera l'affaire)."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"J'ai créé un petit script Python pour ce projet qui nécessite cependant quelques commandes pour fonctionner.\nTout d'abord, il faut s'assurer que la version de Python utilisée par défaut soit la version 3 :"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,w]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:n}]},{type:a,value:" update-alternatives --install \u002Fusr\u002Fbin\u002Fpython python \u002Fusr\u002Fbin\u002Fpython3.7 "},{type:b,tag:d,props:{className:[e,"number"]},children:[{type:a,value:_}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"La commande "},{type:b,tag:h,props:{},children:[{type:a,value:"python --version"}]},{type:a,value:" doit maintenant vous renvoyer "},{type:b,tag:h,props:{},children:[{type:a,value:"Python 3.7.x"}]},{type:a,value:". On va maintenant pouvoir installer les\ndépendances :"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,w]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:n}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:"usermod"}]},{type:a,value:" -a -G spi,gpio pi\n"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:n}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:N}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:" build-essential libfreetype6-dev libjpeg-dev libopenjp2-7 libtiff5\n"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:n}]},{type:a,value:E},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:" luma.led_matrix\n"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:n}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:N}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:" libsdl-dev libportmidi-dev libsdl-ttf2.0-dev libsdl-mixer1.2-dev libsdl-image1.2-dev\n"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:n}]},{type:a,value:E},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:" pygame\n"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:n}]},{type:a,value:E},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:" luma.emulator\n"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:n}]},{type:a,value:E},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:" pynput\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"(Il s'agit d'un condensé des informations d'installation de\n"},{type:b,tag:i,props:{href:"https:\u002F\u002Fluma-led-matrix.readthedocs.io\u002Fen\u002Flatest\u002Finstall.html"},children:[{type:a,value:"Luma LED Matrix"}]},{type:a,value:y},{type:b,tag:i,props:{href:"https:\u002F\u002Fluma-emulator.readthedocs.io\u002Fen\u002Flatest\u002Finstall.html"},children:[{type:a,value:"Luma Emulator"}]},{type:a,value:", et\n"},{type:b,tag:i,props:{href:"https:\u002F\u002Fpypi.org\u002Fproject\u002Fpynput\u002F"},children:[{type:a,value:"Pynput"}]},{type:a,value:"). Vous pouvez maintenant télécharger le script directement depuis Github :"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,w]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:n}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:N}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:$}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:$}]},{type:a,value:" clone https:\u002F\u002Fgithub.com\u002FSkyost\u002FAnaclock.git\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"On va désactiver toutes les interactions possibles avec Raspberry Pi OS à la souris (pour éviter qu'un mauvais clic\nvienne éteindre le système, voire pire). Pour cela, on va éditer le fichier "},{type:b,tag:h,props:{},children:[{type:a,value:"~\u002F.config\u002Flxsession\u002FLXDE-pi\u002Fautostart"}]},{type:a,value:" à\nl'aide de Nano :"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,w]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:n}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:aa}]},{type:a,value:" ~\u002F.config\u002Flxsession\u002FLXDE-pi\u002Fautostart\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Cherchez la ligne commençant par "},{type:b,tag:h,props:{},children:[{type:a,value:"@lxpanel"}]},{type:a,value:" et éditez le fichier comme suit :"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,w]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:"# @lxpanel --profile LXDE-pi # Désactive lxpanel."}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:"# @pcmanfm --desktop --profile LXDE-pi # Désactive PCManFM."}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:"# @xscreensaver -no-splash # Désactive xscreensaver."}]},{type:a,value:"\n@xset s off "},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:"# Désactive l’économiseur d’écran."}]},{type:a,value:"\n@xset -dpms "},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:"# Désactive DPMS."}]},{type:a,value:"\n@xset s noblank "},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:"# Empêche l'écran de devenir blanc."}]},{type:a,value:"\n@point-rpi "},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:"# Positionne la souris sur le bouton du menu."}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Faîtes "},{type:b,tag:k,props:{},children:[{type:a,value:ab}]},{type:a,value:" pour enregistrer le fichier, puis "},{type:b,tag:k,props:{},children:[{type:a,value:ac}]},{type:a,value:" pour valider. On va maintenant supprimer le menu contextuel\nd'OpenBox. Éditez le fichier "},{type:b,tag:h,props:{},children:[{type:a,value:"~\u002F.config\u002Fopenbox\u002Flxde-pi-rc.xml"}]},{type:a,value:" avec Nano :"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,w]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:n}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:aa}]},{type:a,value:" ~\u002F.config\u002Fopenbox\u002Flxde-pi-rc.xml\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Et supprimez les lignes qui sont responsables du clic droit :"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,"language-xml"]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:"\u003C!-- Supprimez ou commentez ce qui se trouve entre cette balise... --\u003E"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,F]},children:[{type:b,tag:d,props:{className:[e,F]},children:[{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:"\u003C"}]},{type:a,value:ad}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,ae]},children:[{type:a,value:"button"}]},{type:b,tag:d,props:{className:[e,af]},children:[{type:b,tag:d,props:{className:[e,p,ag]},children:[{type:a,value:O}]},{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:G}]},{type:a,value:"Right"},{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:G}]}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,ae]},children:[{type:a,value:"action"}]},{type:b,tag:d,props:{className:[e,af]},children:[{type:b,tag:d,props:{className:[e,p,ag]},children:[{type:a,value:O}]},{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:G}]},{type:a,value:"Press"},{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:G}]}]},{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:H}]}]},{type:a,value:"\n  "},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:"\u003C!-- ... --\u003E"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,F]},children:[{type:b,tag:d,props:{className:[e,F]},children:[{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:"\u003C\u002F"}]},{type:a,value:ad}]},{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:H}]}]},{type:a,value:" \n"},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:"\u003C!-- ... Et cette balise. --\u003E"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Au lieu de faire tout cela, une autre possibilité aurait été de lancer Chromium en mode kiosk au démarrage\n(les étapes pour faire ceci sont disponibles "},{type:b,tag:i,props:{href:"https:\u002F\u002Fgist.github.com\u002Fjongrover\u002F6831346"},children:[{type:a,value:M}]},{type:a,value:").\nDe même, faîtes "},{type:b,tag:k,props:{},children:[{type:a,value:ab}]},{type:a,value:" pour enregistrer le fichier, et validez avec "},{type:b,tag:k,props:{},children:[{type:a,value:ac}]},{type:a,value:". On peut maintenant redémarrer le système\navec "},{type:b,tag:h,props:{},children:[{type:a,value:Z}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:A,props:{},children:[{type:a,value:U}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Une fois le système redémarré, on se dirige dans le répertoire du script, et on l'exécute en fond :"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,w]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,ah,ai]},children:[{type:a,value:"cd"}]},{type:a,value:" Anaclock\n"},{type:b,tag:d,props:{className:[e,ah,ai]},children:[{type:a,value:"export"}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,"assign-left","variable"]},children:[{type:b,tag:d,props:{className:[e,"environment","constant"]},children:[{type:a,value:"DISPLAY"}]}]},{type:b,tag:d,props:{className:[e,I]},children:[{type:a,value:O}]},{type:a,value:":0.0\n"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:"nohup"}]},{type:a,value:" python .\u002Fanaclock.py "},{type:b,tag:d,props:{className:[e,I]},children:[{type:a,value:H}]},{type:a,value:"\u002Fdev\u002Fnull "},{type:b,tag:d,props:{className:[e,I]},children:[{type:b,tag:d,props:{className:[e,aj,ak]},children:[{type:a,value:_}]},{type:a,value:H}]},{type:b,tag:d,props:{className:[e,aj,ak]},children:[{type:a,value:"&1"}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,I]},children:[{type:a,value:"&"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"N'hésitez pas à mettre ceci dans un petit script qui se lance automatiquement, cela peut toujours faire gagner du temps.\nEt voilà, normalement si vous bougez la souris en effectuant un mouvement sur le touchpad... La matrice de LEDs\ndevrait s'animer !"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:K,props:{alt:"Résultat",src:"\u002Fimages\u002Farticles\u002Fcreer-horloge-matrice-leds\u002Fresultat.gif"},children:[]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Voici les commandes programmées :"}]},{type:a,value:c},{type:b,tag:W,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"Clic gauche \u002F mouvement"}]},{type:a,value:" : affiche l'heure."}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"Clic droit"}]},{type:a,value:" : affiche la date."}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"Appui consécutif d'au moins 5 secondes sur le clic gauche"}]},{type:a,value:" : éteint l'appareil."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"C'est terminé ! En espérant que ce petit projet vous ait plu, n'hésitez pas à m'envoyer vos retours 😉"}]}]},excerpt:{type:V,children:[{type:b,tag:f,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:J}]}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fcreer-horloge-matrice-leds",extension:".md",createdAt:al,updatedAt:al,bodyHtml:"*Premier projet à voir le jour sur blog ! Nous allons voir ici comment créer une horloge abordable\nqui se déclenche au toucher à l'aide d'un Raspberry Pi, d'un Touchpad et d'une matrice de LEDs.*\n\n\n\n\u003Ciframe width=\"640\"\n  height=\"360\"\n  src=\"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002FVBNRIcA_Ppg\"\n  title=\"YouTube video player\"\n  frameborder=\"0\"\n  allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n  allowfullscreen\n\u003E\u003C\u002Fiframe\u003E\n\u003Cbr\u003E\u003Ca href=\"https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=VBNRIcA_Ppg\"\u003ELien vers la vidéo YouTube\u003C\u002Fa\u003E.\n\n## Matériel nécessaire\n\nLe projet est très accessible mais nécessite pas mal de matériel. Vous aurez besoin de :\n\n*   1 **Raspberry Pi Zero WH** \\[[Amazon](https:\u002F\u002Famzn.to\u002F2RvB484),\n    [AliExpress](https:\u002F\u002Fs.click.aliexpress.com\u002Fe\u002F\\_A9UaSn)]\n    (n'importe quel Raspberry Pi muni de ports GPIO devrait suffire, mais cette solution me semble être la moins\n    chère).\n*   1 **Matrice de LEDs** \\[[Amazon](https:\u002F\u002Famzn.to\u002F3dTBa0U),\n    [AliExpress](https:\u002F\u002Fs.click.aliexpress.com\u002Fe\u002F\\_9zTnPl)] (je vous conseille celle d'AZ-Delivery,\n    abordable et de bonne qualité).\n*   1 **Touchpad USB** \\[[Amazon](https:\u002F\u002Famzn.to\u002F3wRrQmQ),\n    [AliExpress](https:\u002F\u002Ffr.aliexpress.com\u002Fitem\u002F32981629578.html)] (cela a l'avantage d'être généralement moins couteux\n    que l'achat d'un détecteur de mouvements et de boutons).\n*   1 **Câble micro USB - USB OTG** \\[[Amazon](https:\u002F\u002Famzn.to\u002F3wP0QEr),\n    [AliExpress](https:\u002F\u002Fs.click.aliexpress.com\u002Fe\u002F\\_ABy4z9)].\n*   1 **Chargeur secteur USB**.\n*   1 **Câble d'alimentation USB - micro USB**.\n*   1 **Micro SD** (prévoyez minimum 8Go pour n'importe quel projet).\n*   1 **Adaptateur SD**.\n\nTout cela pour un coût total d'environ 60€ (si vous ne possédez rien).\n\n## Effectuer les branchements\n\nOn va effectuer les branchements à l'aide du tableau suivant :\n\n| Pin Matrice | Nom | Signification | Pin RPi | Fonction          |\n|-------------|-----|---------------|---------|-------------------|\n| 1           | VCC | +5V Power     | 2       | 5V0               |\n| 2           | GND | Ground        | 6       | GND               |\n| 3           | DIN | Data In       | 19      | GPIO 10 (MOSI)    |\n| 4           | CS  | Chip Select   | 24      | GPIO 8 (SPI CE0)  |\n| 5           | CLK | Clock         | 23      | GPIO 11 (SPI CLK) |\n\n[Source](https:\u002F\u002Fluma-led-matrix.readthedocs.io\u002Fen\u002Flatest\u002Finstall.html#max7219-devices-spi).\n\nChaque port de la matrice de LEDs doit être relié au port correspondant sur le Raspberry.\nVoici la carte des ports GPIO sur les modèles les plus récents :\n\n![Carte des ports GPIO](\u002Fimages\u002Farticles\u002Fcreer-horloge-matrice-leds\u002Fgpio-pinout.png)\n\n[Source](https:\u002F\u002Fwww.raspberrypi.org\u002Fdocumentation\u002Fusage\u002Fgpio\u002F).\n\nCe qui devrait vous donner quelque-chose comme ça :\n\n![Branchements](\u002Fimages\u002Farticles\u002Fcreer-horloge-matrice-leds\u002Fbranchements.png)\n\nBranchez ensuite le touchpad à l'aide du câble micro USB - USB.\n\n## Mettre en place le script\n\nInsérez votre micro SD dans votre ordinateur et flashez Raspberry Pi OS dessus (un tutoriel a été rédigé à ce sujet,\nil est disponible [ici](\u002Farticle\u002Finstallation-minimale-raspberry-pi#télécharger-et-flasher-raspberry-os)). Activez SSH\net la connexion à votre réseau Wi-Fi en suivant les étapes disponibles\n[ici](\u002Farticle\u002Finstallation-minimale-raspberry-pi#activer-ssh-et-se-connecter-au-wi-fi).\nEnlevez votre carte de l'ordinateur, et insérez-la dans le Raspberry que vous pouvez désormais mettre sous tension.\n\nCommencez par vous [connecter en SSH](\u002Farticle\u002Finstallation-minimale-raspberry-pi\u002F#se-connecter-en-ssh).\nOn va activer l'interface SPI en lançant l'utilitaire `raspi-config` (il suffit pour cela d'exécuter la\ncommande `sudo raspi-config`). Sélectionnez *Interfacing Options*, puis *SPI*, et *Yes*.\nTant qu'on y est, on va changer le fuseau horaire de votre Pi. Pour ce faire, sortez de ce menu et rendez-vous dans\nle menu *Localisation Options*. À partir de ce menu, sélectionnez *Change Timezone* et choisissez *Europe (Paris)*.\n\nSortez de l'utilitaire et  redémarrez (si `raspi-config` ne vous propose pas de redémarrer,\nla commande `sudo reboot now` fera l'affaire).\n\nJ'ai créé un petit script Python pour ce projet qui nécessite cependant quelques commandes pour fonctionner.\nTout d'abord, il faut s'assurer que la version de Python utilisée par défaut soit la version 3 :\n\n```shell\nsudo update-alternatives --install \u002Fusr\u002Fbin\u002Fpython python \u002Fusr\u002Fbin\u002Fpython3.7 2\n```\n\nLa commande `python --version` doit maintenant vous renvoyer `Python 3.7.x`. On va maintenant pouvoir installer les\ndépendances :\n\n```shell\nsudo usermod -a -G spi,gpio pi\nsudo apt install build-essential libfreetype6-dev libjpeg-dev libopenjp2-7 libtiff5\nsudo pip3 install luma.led_matrix\nsudo apt install libsdl-dev libportmidi-dev libsdl-ttf2.0-dev libsdl-mixer1.2-dev libsdl-image1.2-dev\nsudo pip3 install pygame\nsudo pip3 install luma.emulator\nsudo pip3 install pynput\n```\n\n(Il s'agit d'un condensé des informations d'installation de\n[Luma LED Matrix](https:\u002F\u002Fluma-led-matrix.readthedocs.io\u002Fen\u002Flatest\u002Finstall.html),\n[Luma Emulator](https:\u002F\u002Fluma-emulator.readthedocs.io\u002Fen\u002Flatest\u002Finstall.html), et\n[Pynput](https:\u002F\u002Fpypi.org\u002Fproject\u002Fpynput\u002F)). Vous pouvez maintenant télécharger le script directement depuis Github :\n\n```shell\nsudo apt install git\ngit clone https:\u002F\u002Fgithub.com\u002FSkyost\u002FAnaclock.git\n```\n\nOn va désactiver toutes les interactions possibles avec Raspberry Pi OS à la souris (pour éviter qu'un mauvais clic\nvienne éteindre le système, voire pire). Pour cela, on va éditer le fichier `~\u002F.config\u002Flxsession\u002FLXDE-pi\u002Fautostart` à\nl'aide de Nano :\n\n```shell\nsudo nano ~\u002F.config\u002Flxsession\u002FLXDE-pi\u002Fautostart\n```\n\nCherchez la ligne commençant par `@lxpanel` et éditez le fichier comme suit :\n\n```shell\n# @lxpanel --profile LXDE-pi # Désactive lxpanel.\n# @pcmanfm --desktop --profile LXDE-pi # Désactive PCManFM.\n# @xscreensaver -no-splash # Désactive xscreensaver.\n@xset s off # Désactive l’économiseur d’écran.\n@xset -dpms # Désactive DPMS.\n@xset s noblank # Empêche l'écran de devenir blanc.\n@point-rpi # Positionne la souris sur le bouton du menu.\n```\n\nFaîtes *CTRL + X* pour enregistrer le fichier, puis *Y* pour valider. On va maintenant supprimer le menu contextuel\nd'OpenBox. Éditez le fichier `~\u002F.config\u002Fopenbox\u002Flxde-pi-rc.xml` avec Nano :\n\n```shell\nsudo nano ~\u002F.config\u002Fopenbox\u002Flxde-pi-rc.xml\n```\n\nEt supprimez les lignes qui sont responsables du clic droit :\n\n```xml\n\n\u003Cmousebind button=\"Right\" action=\"Press\"\u003E\n  \n\u003C\u002Fmousebind\u003E \n\n```\n\nAu lieu de faire tout cela, une autre possibilité aurait été de lancer Chromium en mode kiosk au démarrage\n(les étapes pour faire ceci sont disponibles [ici](https:\u002F\u002Fgist.github.com\u002Fjongrover\u002F6831346)).\nDe même, faîtes *CTRL + X* pour enregistrer le fichier, et validez avec *Y*. On peut maintenant redémarrer le système\navec `sudo reboot now`.\n\n## Faire fonctionner l'horloge\n\nUne fois le système redémarré, on se dirige dans le répertoire du script, et on l'exécute en fond :\n\n```shell\ncd Anaclock\nexport DISPLAY=:0.0\nnohup python .\u002Fanaclock.py \u003E\u002Fdev\u002Fnull 2\u003E&1 &\n```\n\nN'hésitez pas à mettre ceci dans un petit script qui se lance automatiquement, cela peut toujours faire gagner du temps.\nEt voilà, normalement si vous bougez la souris en effectuant un mouvement sur le touchpad... La matrice de LEDs\ndevrait s'animer !\n\n![Résultat](\u002Fimages\u002Farticles\u002Fcreer-horloge-matrice-leds\u002Fresultat.gif)\n\nVoici les commandes programmées :\n\n*   **Clic gauche \u002F mouvement** : affiche l'heure.\n*   **Clic droit** : affiche la date.\n*   **Appui consécutif d'au moins 5 secondes sur le clic gauche** : éteint l'appareil.\n\nC'est terminé ! En espérant que ce petit projet vous ait plu, n'hésitez pas à m'envoyer vos retours 😉\n"},author:{name:"Skyost",link:"https:\u002F\u002Fskyost.eu"}},"data-v-7ac399df:0":{categories:["annonces","astuces","news",Q,P]}},mutations:void 0}}("text","element","\n","span","token","p","function","code","a"," ","em","li","strong","sudo","comment","punctuation","1 ","div","nuxt-content-highlight","pre","line-numbers",".","language-shell","install",",\n",2,"h2"," [","Amazon","AliExpress"," pip3 ","tag","\"","\u003E","operator","Premier projet à voir le jour sur blog ! Nous allons voir ici comment créer une horloge abordable\nqui se déclenche au toucher à l'aide d'un Raspberry Pi, d'un Touchpad et d'une matrice de LEDs.","img","nuxt-link","ici","apt","=","tutoriels","projets","Matériel nécessaire","Effectuer les branchements","Mettre en place le script","Faire fonctionner l'horloge","root","ul","Source","raspi-config","sudo reboot now","2","git","nano","CTRL + X","Y","mousebind","attr-name","attr-value","attr-equals","builtin","class-name","file-descriptor","important","2021-08-29T10:33:14.713Z")));