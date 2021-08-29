---
title: Activer ou désactiver les LEDs intégrées d'un Raspberry Pi
categories: [astuces]
date: 2021-04-22
---

_Il se peut, pour une raison quelconque, que vous souhaitiez (dés)activer les LEDs intégrées de votre Raspberry Pi
(c'est-à-dire, les témoins d'activité et d'alimentation). Cet article va vous expliquer comment faire._

<!--more-->

Cela peut être utile, par exemple pour réduire la consommation globale de la bête,
ou tout simplement pour faire moins de lumière.

## Choisir quelle LED contrôler

Si votre carte a deux LEDs (c'est le cas d'un Raspberry Pi 4 par exemple), voici les LEDs que vous pouvez contrôler :
* `led0` qui désigne la LED ACT (LED d'activité).
* `led1` qui désigne la LED PWR (LED d'alimentation). Attention, cela ne fonctionne que sur les modèles les plus récents.

Si elle n'en possède qu'une seule (c'est le cas pour les Raspberry Pi Zero), votre seule possibilité est la `led0`.

Choisissez la LED que vous souhaitez contrôler et rendez-vous dans l'étape suivante.

## (Dés)activer la LED

Commencez par [vous connecter en SSH](/article/installation-minimale-raspberry-pi/#se-connecter-en-ssh).
Tout d'abord, il va falloir modifier un petit peu le comportement par défaut de la LED choisie en entrant :

```shell
echo none | sudo tee /sys/class/leds/led0/trigger
```

Ensuite pour désactiver la LED, entrez :

```shell
echo 0 | sudo tee /sys/class/leds/led0/brightness
```

Si vous souhaitez la réactiver, remplacez simplement le `0` par `1` :

```shell
echo 1 | sudo tee /sys/class/leds/led0/brightness
```

N'oubliez pas de remplacer `led0` par `led1` si vous préférez agir sur la LED PWR (si votre modèle la supporte).
D'ailleurs, il paraît que [les valeurs sont inversées pour un RPi Zero](https://mlagerberg.gitbooks.io/raspberry-pi/content/5.2-leds.html#pi-zero)
(je ne suis cependant pas en mesure de tester cette affirmation).

## Revenir au comportement par défaut

De même, pour revenir au comportement par défaut de la LED, il suffit d'entrer une seule petite commande :

```shell
echo mmc0 | sudo tee /sys/class/leds/led0/trigger
```

Si vous avez modifié le comportement de la `led1`, remplacez plutôt `mmc0` par `input`.

**Bonus :** Il y a beaucoup d'autres comportements disponibles pour votre LED (`heartbeat`, `timer`, et même
manipulation par GPIO !), consultez [ce gist](https://gist.github.com/taktran/1b691c08216dd30b70bf) si vous souhaitez
un peu plus d'infos.
