---
title: Créer une horloge avec une matrice de LEDs
categories: [tutoriels, projets]
date: 2021-04-12
---

_Premier projet à voir le jour sur blog ! Nous allons voir ici comment créer une horloge abordable
qui se déclenche au toucher à l'aide d'un Raspberry Pi, d'un Touchpad et d'une matrice de LEDs._

<!--more-->

<youtube video="VBNRIcA_Ppg"></youtube>

## Matériel nécessaire

Le projet est très accessible mais nécessite pas mal de matériel. Vous aurez besoin de :

* 1 **Raspberry Pi Zero WH** \[[Amazon](https://amzn.to/2RvB484),
  [AliExpress](https://s.click.aliexpress.com/e/_A9UaSn)\]
  (n'importe quel Raspberry Pi muni de ports GPIO devrait suffire, mais cette solution me semble être la moins
  chère).
* 1 **Matrice de LEDs** \[[Amazon](https://amzn.to/3dTBa0U),
  [AliExpress](https://s.click.aliexpress.com/e/_9zTnPl)\] (je vous conseille celle d'AZ-Delivery,
  abordable et de bonne qualité).
* 1 **Touchpad USB** \[[Amazon](https://amzn.to/3wRrQmQ),
  [AliExpress](https://fr.aliexpress.com/item/32981629578.html)\] (cela a l'avantage d'être généralement moins couteux
  que l'achat d'un détecteur de mouvements et de boutons).
* 1 **Câble micro USB - USB OTG** \[[Amazon](https://amzn.to/3wP0QEr),
  [AliExpress](https://s.click.aliexpress.com/e/_ABy4z9)\].
* 1 **Chargeur secteur USB**.
* 1 **Câble d'alimentation USB - micro USB**.
* 1 **Micro SD** (prévoyez minimum 8Go pour n'importe quel projet).
* 1 **Adaptateur SD**.

Tout cela pour un coût total d'environ 60€ (si vous ne possédez rien).

## Effectuer les branchements

On va effectuer les branchements à l'aide du tableau suivant :

| Pin Matrice | Nom | Signification | Pin RPi | Fonction          |
|-------------|-----|---------------|---------|-------------------|
| 1           | VCC | +5V Power     | 2       | 5V0               |
| 2           | GND | Ground        | 6       | GND               |
| 3           | DIN | Data In       | 19      | GPIO 10 (MOSI)    |
| 4           | CS  | Chip Select   | 24      | GPIO 8 (SPI CE0)  |
| 5           | CLK | Clock         | 23      | GPIO 11 (SPI CLK) |

[Source](https://luma-led-matrix.readthedocs.io/en/latest/install.html#max7219-devices-spi).

Chaque port de la matrice de LEDs doit être relié au port correspondant sur le Raspberry.
Voici la carte des ports GPIO sur les modèles les plus récents :

![Carte des ports GPIO](/images/articles/creer-horloge-matrice-leds/gpio-pinout.png)

[Source](https://www.raspberrypi.org/documentation/usage/gpio/).

Ce qui devrait vous donner quelque-chose comme ça :

![Branchements](/images/articles/creer-horloge-matrice-leds/branchements.png)

Branchez ensuite le touchpad à l'aide du câble micro USB - USB.

## Mettre en place le script

Insérez votre micro SD dans votre ordinateur et flashez Raspberry Pi OS dessus (un tutoriel a été rédigé à ce sujet,
il est disponible [ici](/article/installation-minimale-raspberry-pi#télécharger-et-flasher-raspberry-os)). Activez SSH
et la connexion à votre réseau Wi-Fi en suivant les étapes disponibles
[ici](/article/installation-minimale-raspberry-pi#activer-ssh-et-se-connecter-au-wi-fi).
Enlevez votre carte de l'ordinateur, et insérez-la dans le Raspberry que vous pouvez désormais mettre sous tension.

Commencez par vous [connecter en SSH](/article/installation-minimale-raspberry-pi/#se-connecter-en-ssh).
On va activer l'interface SPI en lançant l'utilitaire `raspi-config` (il suffit pour cela d'exécuter la
commande `sudo raspi-config`). Sélectionnez _Interfacing Options_, puis _SPI_, et _Yes_.
Tant qu'on y est, on va changer le fuseau horaire de votre Pi. Pour ce faire, sortez de ce menu et rendez-vous dans
le menu _Localisation Options_. À partir de ce menu, sélectionnez _Change Timezone_ et choisissez _Europe (Paris)_.

Sortez de l'utilitaire et  redémarrez (si `raspi-config` ne vous propose pas de redémarrer,
la commande `sudo reboot now` fera l'affaire).

J'ai créé un petit script Python pour ce projet qui nécessite cependant quelques commandes pour fonctionner.
Tout d'abord, il faut s'assurer que la version de Python utilisée par défaut soit la version 3 :

```shell
sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.7 2
```

La commande `python --version` doit maintenant vous renvoyer `Python 3.7.x`. On va maintenant pouvoir installer les
dépendances :

```shell
sudo usermod -a -G spi,gpio pi
sudo apt install build-essential libfreetype6-dev libjpeg-dev libopenjp2-7 libtiff5
sudo pip3 install luma.led_matrix
sudo apt install libsdl-dev libportmidi-dev libsdl-ttf2.0-dev libsdl-mixer1.2-dev libsdl-image1.2-dev
sudo pip3 install pygame
sudo pip3 install luma.emulator
sudo pip3 install pynput
```

(Il s'agit d'un condensé des informations d'installation de
[Luma LED Matrix](https://luma-led-matrix.readthedocs.io/en/latest/install.html),
[Luma Emulator](https://luma-emulator.readthedocs.io/en/latest/install.html), et
[Pynput](https://pypi.org/project/pynput/)). Vous pouvez maintenant télécharger le script directement depuis Github :

```shell
sudo apt install git
git clone https://github.com/Skyost/Anaclock.git
```

On va désactiver toutes les interactions possibles avec Raspberry Pi OS à la souris (pour éviter qu'un mauvais clic
vienne éteindre le système, voire pire). Pour cela, on va éditer le fichier `~/.config/lxsession/LXDE-pi/autostart` à
l'aide de Nano :

```shell
sudo nano ~/.config/lxsession/LXDE-pi/autostart
```

Cherchez la ligne commençant par `@lxpanel` et éditez le fichier comme suit :

```shell
# @lxpanel --profile LXDE-pi # Désactive lxpanel.
# @pcmanfm --desktop --profile LXDE-pi # Désactive PCManFM.
# @xscreensaver -no-splash # Désactive xscreensaver.
@xset s off # Désactive l’économiseur d’écran.
@xset -dpms # Désactive DPMS.
@xset s noblank # Empêche l'écran de devenir blanc.
@point-rpi # Positionne la souris sur le bouton du menu.
```

Faîtes _CTRL + X_ pour enregistrer le fichier, puis _Y_ pour valider. On va maintenant supprimer le menu contextuel
d'OpenBox. Éditez le fichier `~/.config/openbox/lxde-pi-rc.xml` avec Nano :

```shell
sudo nano ~/.config/openbox/lxde-pi-rc.xml
```

Et supprimez les lignes qui sont responsables du clic droit :

```xml
<!-- Supprimez ou commentez ce qui se trouve entre cette balise... -->
<mousebind button="Right" action="Press">
  <!-- ... -->
</mousebind> 
<!-- ... Et cette balise. -->
```

Au lieu de faire tout cela, une autre possibilité aurait été de lancer Chromium en mode kiosk au démarrage
(les étapes pour faire ceci sont disponibles [ici](https://gist.github.com/jongrover/6831346)).
De même, faîtes _CTRL + X_ pour enregistrer le fichier, et validez avec _Y_. On peut maintenant redémarrer le système
avec `sudo reboot now`.

## Faire fonctionner l'horloge

Une fois le système redémarré, on se dirige dans le répertoire du script, et on l'exécute en fond :

```shell
cd Anaclock
export DISPLAY=:0.0
nohup python ./anaclock.py >/dev/null 2>&1 &
```

N'hésitez pas à mettre ceci dans un petit script qui se lance automatiquement, cela peut toujours faire gagner du temps.
Et voilà, normalement si vous bougez la souris en effectuant un mouvement sur le touchpad... La matrice de LEDs
devrait s'animer !

![Résultat](/images/articles/creer-horloge-matrice-leds/resultat.gif)

Voici les commandes programmées :

* **Clic gauche / mouvement** : affiche l'heure.
* **Clic droit** : affiche la date.
* **Appui consécutif d'au moins 5 secondes sur le clic gauche** : éteint l'appareil.

C'est terminé ! En espérant que ce petit projet vous ait plu, n'hésitez pas à m'envoyer vos retours 😉
