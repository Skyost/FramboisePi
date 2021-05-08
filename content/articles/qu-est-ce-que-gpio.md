---
title: Qu'est-ce que GPIO ? À quoi ça sert ?
categories: [astuces]
date: 2021-05-08
---

_Si vous avez déjà touché un peu à l'univers Rasbperry Pi -et à électronique de manière générale-, vous avez
probablement entendu parler de **GPIO**. Alors du coup, qu'est-ce-que c'est ? Ça se mange ça, GPIO ?_

<!--more-->

## GPIO, c'est quoi ?

**GPIO** ou **Entrée/sortie à usage général** (traduit de l'expression anglaise **General Purpose Input/Output**),
est un ensemble de ports destinés à contrôler l'entrée et la sortie de données entre composants électroniques.

Nous en avons notamment fait usage dans deux projets précédents : celui de
[l'horloge de matrices de LEDs](/article/creer-horloge-matrice-leds/), et celui de
[l'horloge du complotiste](/article/construire-horloge-complotiste/).
Dans le premier projet, nous avons utilisé les ports GPIO du Raspberry pour lui relier une matrice de LEDs et
interagir avec (afficher des chiffres, des lettres, etc.). Dans le deuxième, nous avons fait pareil mais avec
un affichage à encre électronique cette fois-ci.

Tout ça pour dire que les possibilités qu'offrent les ports GPIO intégrés aux RPi sont nombreuses, il est possible de
brancher à peu près n'importe quoi dessus, pour peu que cela soit compatible (un ventilateur, une LED, un écran
tactile, ...).

## Connecteurs, broches et Pinout

Dans les modèles les plus récents, les Raspberry Pi sont munis de 40 **broches** (26 pour les premiers modèles).
Cet ensemble de broches forme un **connecteur**. C'est à ces broches que l'on va venir relier nos composants électroniques.

Attention cependant, on ne peut pas relier n'importe quel composant à n'importe quelle broche : chacune d'elles a une
utilité bien précise. Certains servent à donner du courant, d'autres sont des masses, d'autres encore servent à
transmettre des données, ... C'est pour cela que chacune des broches porte un nom qui représente sa fonction.
Pour connaître le nom donné à une broche en particulier, on se réfère au **Pinout**.
Voici celui des modèles les plus récents :

![Pinout](/images/articles/qu-est-ce-que-gpio/gpio-pinout.png)

Il est également accessible sur [ce petit site utilitaire](https://pinout.xyz/) ainsi que sur le site officiel du
[Raspberry Pi](https://www.raspberrypi.org/documentation/usage/gpio/). À noter une information très sympathique :
il vous suffit d'entrer la commande `pinout` sur votre framboise pour voir son Pinout s'afficher (si vous êtes
sous Raspberry Pi OS Desktop du moins).

Certains modèles sont dépourvus de ports GPIO mais offrent cependant la possibilité de
[les souder](https://www.youtube.com/watch?v=gtCwC4VAQZo). C'est par exemple le cas du Raspberry Pi Zero W,
qui est moins cher que le modèle WH (mais ce dernier arrive avec les ports GPIO déjà soudés).

## Où trouver des composants GPIO ?

Vous pouvez en trouver sur tous les sites web qui vendent des composants Raspberry Pi, mes recommandations personnelles
étant :

* [Pimoroni](https://shop.pimoroni.com/), mon choix du cœur ! Ils sont très créatifs et ont un large choix de composants
  (et de projets à faire avec). Beaucoup de leurs composants sont d'ailleurs réalisés par eux-mêmes et sont très qualitatifs.
  Notez cependant que le site est basé en Angleterre, et n'est disponible qu'en anglais.
* [The Pi Hut](https://thepihut.com/), comme Pimoroni mais à l'aspect un peu moins <q>familial</q> (sans que ce soit
  péjoratif pour autant). Ils ont racheté ModMyPi en 2019, ce qui leur permet eux aussi de créer leurs propres composants.
* [Kubii](https://www.kubii.fr/), distributeur français agréé par la fondation Raspberry Pi. Ils proposent pas mal
  de produits de qualité.
* Et bien sûr les incontournables [AliExpress](https://fr.aliexpress.com/) et [Amazon](https://www.amazon.fr/) (mais
  ils sont un peu hors catégorie étant donné que leur champ d'activité va bien au-delà du Raspberry Pi ; et de
  l'électronique en général).

Nota Bene : généralement les instructions de connexion (à quelles broches relier celles du composant)
sont fournies par le constructeur du composant en question.
