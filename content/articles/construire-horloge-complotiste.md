---
title: Construire l'horloge du complotiste !
categories: [tutoriels, projets]
date: 2021-04-18
---

_Nouveau projet d'horloge originale utilisant cette fois un affichage à base d'encre électronique
pour afficher l'heure sur un meme bien connu et plutôt sympathique !_

<!--more-->

Voici donc ce que l'on va construire :

![Horloge](/images/articles/construire-horloge-complotiste/horloge.png)

Vous aurez sans doute reconnu le meme <q>Wait, It's All Ohio ?</q> (cf.
[Know Your Meme](https://knowyourmeme.com/memes/wait-its-all-ohio-always-has-been) pour la référence). Le rendu
est plutôt sympathique, et a notamment pour avantage de ne pas produire de lumière et de ne pas consommer d'énergie
(en dehors de la consommation du Raspberry) car la consommation d'un affichage à encre électronique est
vraiment négligeable.

## Matériel nécessaire

Voici le matériel dont nous aurons besoin :

* 1 **Raspberry Pi Zero WH** \[[Amazon](https://amzn.to/2RvB484),
  [AliExpress](https://s.click.aliexpress.com/e/_A9UaSn)\].
* 1 **Inky pHAT** \[[Amazon](https://amzn.to/3uY0kCb),
  [Pimoroni](https://shop.pimoroni.com/products/inky-phat?variant=12549254938707)\].
* 1 **Chargeur secteur USB**.
* 1 **Câble d'alimentation USB - micro USB**.
* 1 **Micro SD** (prévoyez minimum 8Go pour n'importe quel projet).
* 1 **Adaptateur SD**.
* 1 _Boitier Pibow_ \[[Pimoroni](https://shop.pimoroni.com/products/pibow-zero-w)\] (facultatif).

Tout cela pour un coût total d'environ 50€ (si vous ne possédez rien).

![Matériel](/images/articles/construire-horloge-complotiste/materiel.png)

## Flasher l'OS

Insérez votre micro SD dans votre ordinateur à l'aide de l'adaptateur SD, et flashez Raspberry Pi OS Lite dessus
(pas besoin de la version standard qui est plus gourmande en ressources). Si vous ne savez pas comment faire,
j'ai rédigé [un petit tutoriel](/article/installation-minimale-raspberry-pi#télécharger-et-flasher-raspberry-os) à
ce propos. Profitez-en pour configurer votre Wi-Fi et activer SSH (je vous renvoie toujours à
[ce même tutoriel](/article/installation-minimale-raspberry-pi#activer-ssh-et-se-connecter-au-wi-fi)).

Une fois fait, vous pouvez déconnecter votre micro SD de votre ordinateur et l'insérer dans votre Raspberry.

## Monter le boîtier et l'affichage

Si vous avez opté pour un boîtier Pibow, je vous renvoie vers
[le guide officiel](https://learn.pimoroni.com/tutorial/sandyj/pibow-zero-assembly) disponible sur le site de Pimoroni.
Il est très explicite, et est facile à suivre (même pour les plus anglophobes d'entre vous 😁).

![Avec Pibow](/images/articles/construire-horloge-complotiste/avec-pibow.png)

Une fois votre boitier monté, branchez votre Inky pHAT sur les ports GPIO de votre framboise. Il vous faudra sans doute
appuyer un peu, mais cela ne devrait pas poser de problèmes.

## Configurer l'appareil

Mettez sous tension votre Raspberry, puis
[connectez-vous en SSH](/article/installation-minimale-raspberry-pi/#se-connecter-en-ssh).
Commencez par entrer la commande suivante :

```shell
sudo raspi-config
```

Elle vous permettra de vous rendre dans `raspi-config`. Rendez-vous ensuite dans le menu _Interfaces_,
puis activez _SPI_ et _I2C_ (sélectionnez l'option, puis validez avec _Yes_). Ensuite, dans le menu principal de
l'utilitaire, sélectionnez _Localisation Options_, puis _Change Timezone_ et choisissez _Europe (Paris)_.
Une fois tout ceci effectué, vous pouvez redémarrer votre Pi.

Pour continuer, il vous faudra d'abord vous assurer que la version de Python utilisée par défaut soit bien la
version 3 :

```shell
sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.7 2
```

La commande `python --version` doit maintenant vous renvoyer quelque chose comme `Python 3.7.x`.

## Installer le script

Comme pour [l'horloge de matrices LEDs](/article/creer-horloge-matrice-leds), j'ai créé un petit script pour vous
faciliter l'installation de ce projet. Il va d'abord falloir installer la dépendance principale :

```shell
curl https://get.pimoroni.com/inky | bash
```

L'assistant d'installation vous proposera diverses options. Personnellement, je vous déconseille l'installation
complète (avec l'aide et les exemples) car elle prend plus de temps et de place.
Les instructions complètes de l'installation de cette librairie sont disponibles sur
[le site de Pimoroni](https://learn.pimoroni.com/tutorial/sandyj/getting-started-with-inky-phat).

Maintenant, on peut installer le script :

```shell
sudo apt install git
git clone https://github.com/Skyost/ComplotistClock.git
```

## Lancer le script

C'est presque terminé, allez dans le répertoire du script (en utilisant `cd ComplotistClock`).
On va rendre exécutable le fichier `run.sh`. Pour cela, tapez simplement :

```shell
sudo chmod +x ./run.sh
```

Et c'est bon ! Pour lancer le script en arrière-plan, vous pouvez vous contenter de rentrer :

```shell
./run.sh
```

L'heure et l'illustration devraient apparaître sur votre affichage Inky. N'hésitez pas à personnaliser tout cela
à votre guise en modifiant le script !

![Horloge animée](/images/articles/construire-horloge-complotiste/horloge-animation.gif)
