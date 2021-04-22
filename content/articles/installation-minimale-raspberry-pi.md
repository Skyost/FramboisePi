---
title: Installation minimale d'un Raspberry Pi
categories: [astuces, tutoriels]
date: 2021-04-12
---

_Flasher une image, activer SSH, se connecter au Wi-Fi, afficher l'écran de votre Raspberry sur votre PC, ...
Nous allons détailler dans cet article ces étapes fondamentales, mais néanmoins très simples qui vous
permettront de (bien) débuter avec votre Raspberry._

<!--more-->

## Télécharger et flasher Raspberry OS

Commencez par télécharger et installer le logiciel [Raspberry Pi Imager](https://www.raspberrypi.org/software/)
(cliquez sur le lien correspondant à votre système d'exploitation). Connectez votre micro SD à votre ordinateur, puis
ouvrez le logiciel qui se présente comme suit :

![Raspberry Pi Imager](/images/articles/installation-minimale-raspberry-pi/raspberry-pi-imager.png)

Cliquez sur le bouton _Choisissez l'OS_, puis sélectionnez _Raspberry Pi OS (32-bit)_ dans la boîte de dialogue
qui s'affiche. Maintenant, cliquez sur _Choisissez le stockage_ et choisissez votre micro SD.
Pour terminer, cliquez sur _Écrire_, patientez quelques instants, et voilà !

Pour plus d'informations sur toutes les possibilités que vous offre Raspberry Pi Imager,
je vous conseille la lecture de l'article <q>[Maîtriser Raspberry Pi Imager](/article/maitriser-raspberry-pi-imager)</q>
disponible sur ce site 😉

## Activer SSH et se connecter au Wi-Fi

Pour activer le serveur SSH intégré à l'OS, il vous suffit de créer un fichier nommé `ssh` sur la partition boot de
votre micro SD (la partition qui s'affiche lorsque vous connectez votre carte à votre ordinateur).

Ce serveur SSH ne vous servira à rien s'il n'est pas connecté à votre réseau local. Pour remédier à cela, on va créer
un fichier `wpa_supplicant.conf` ayant pour contenu :

```
country=fr
update_config=1
ctrl_interface=/var/run/wpa_supplicant

network={
 scan_ssid=1
 ssid="ID_DE_VOTRE_RESEAU"
 psk="MOT_DE_PASSE_DE_VOTRE_RESEAU"
}
```

N'oubliez pas de remplacer `ID_DE_VOTRE_RESEAU` et `MOT_DE_PASSE_DE_VOTRE_RESEAU` par leur valeur respective.
Et voilà, vous pouvez retirer la micro SD de votre ordinateur pour la remettre dans votre Raspberry Pi et brancher
celui-ci !

## Se connecter en SSH

Vous aurez besoin d'un client SSH pour réaliser cette étape (si vous êtes sous Windows, je vous conseille
[PuTTY](https://www.putty.org/)). Vous aurez également besoin de connaître l'adresse IP locale de votre framboise.
Il y a beaucoup de façons d'arriver à cela (un article à ce sujet a même été rédigé
[sur le site officiel](https://www.raspberrypi.org/documentation/remote-access/ip-address.md) de la fondation
Raspberry Pi), la manière la plus simple étant d'utiliser l'interface web de votre routeur, couramment accessible
en tapant `192.168.1.1` dans la barre d'URL de votre navigateur.

Un petit exemple sur ma box SFR (en allant dans _État_ > _Réseau local_) :

![Raspberry Pi Imager](/images/articles/installation-minimale-raspberry-pi/reseau-local.png)

Petite astuce [trouvée sur StackExchange](https://raspberrypi.stackexchange.com/a/100513) :
les adresses MAC des Raspberry Pi commencent généralement par `B8:27:EB` ou par `DC:A6:32` pour les modèles les plus récents.
Si vous ne trouvez pas votre appareil sur le réseau, il se peut que vous ayez fait une erreur dans la configuration du
Wi-Fi lors de l'étape précédente.

Une fois l'adresse IP en poche, entrez-la dans votre client SSH et connectez-vous. Par défaut, le nom d'utilisateur
est `pi` et le mot de passe est `raspberry`. On pourrait s'arrêter là, mais tant que vous y êtes,
profitez-en pour faire les mises à jour de votre appareil en exécutant les commandes suivantes :

```
sudo apt update
sudo apt full-upgrade
```

Profitez-en également pour mettre à jour l'outil `raspi-config` ; ouvrez-le en tapant `sudo raspi-config` et sélectionnez
l'option _Update_. Cet outil est très pratique et vous permet de modifier totalement la manière dont fonctionne
votre Raspberry (il permet notamment d'overclocker votre machine).
Par exemple, si vous êtes intéressé, il est possible de changer les options de localisation à travers le menu
_Localisation Options_.

Pour terminer, notons qu'il existe une manière d'accéder aux fichiers situés sur votre Raspberry Pi à l'aide d'une
interface graphique. Il vous suffit de télécharger un client sFTP (comme [FileZilla](https://filezilla-project.org/)
par exemple), et de vous connecter à l'adresse IP de votre Pi via le port 22, en utilisant les mêmes identifiants
que pour la connexion par SSH.

![FileZilla](/images/articles/installation-minimale-raspberry-pi/filezilla.png)

## Afficher l'écran de votre Raspberry Pi grâce à VNC

Cette étape n'est clairement pas nécessaire, d'autant plus si vous ne souhaitez pas utiliser l'interface graphique
de Raspberry Pi OS (ou si vous avez installé la version Lite). Cependant, dans certains cas, il peut s'avérer utile
d'afficher l'écran de votre appareil et d'interagir directement dessus avec une interface graphique.

Pour ce faire, nous allons activer le serveur VNC intégré à l'OS. Il suffit pour cela d'ouvrir l'outil `raspi-config` à
l'aide de la commande `sudo raspi-config` et de sélectionner le menu _Interfacing Options_. Ensuite, on choisit _VNC_,
puis _Yes_, et le tour est joué !

Vous allez maintenant avoir besoin d'un client VNC pour vous y connecter. Si vous êtes sous Windows,
[VNC Viewer de RealVNC](https://www.realvnc.com/fr/connect/download/viewer/) est un bon choix.
Ouvrez votre client et entrez l'adresse IP de votre Raspberry. Par défaut, le nom d'utilisateur et le mot de passe
du serveur VNC sont les mêmes que pour SSH (nom d'utilisateur `pi` et mot de passe `raspberry`).

Et voilà, vous pouvez interagir librement avec votre appareil depuis votre PC !
