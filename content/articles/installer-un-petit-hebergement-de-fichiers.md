---
title: Mettre en place un petit hébergement de fichiers
categories: [astuces, tutoriels]
date: 2021-06-09
---

_On a parfois besoin d'avoir un cloud chez soi qui soit disponible en permanence et compatible avec tous les appareils
pour s'échanger des photos, des vidéos, des musiques, etc. Voici un petit tuto qui vous permettra de mettre en place
un tel service de manière ultra-simple._

<!--more-->

On va pour cela avoir recours à un petit logiciel libre qui se nomme [File Browser](https://filebrowser.org/).

## Installation

L'installation est plutôt simple ; [connectez-vous en SSH](/article/installation-minimale-raspberry-pi/#se-connecter-en-ssh)
sur votre machine et exécutez la commande suivante :

```shell
curl -fsSL https://raw.githubusercontent.com/filebrowser/get/master/get.sh | bash
```

Créez un petit maintenant un petit répertoire que l'on va appeler <q>Mes fichiers</q> (qui contiendra... vos fichiers),
et qui se situera dans votre répertoire racine :

```shell
cd "/home/pi/"
mkdir "Mes fichiers"
```

Ok, maintenant on va juste créer un petit script de lancement. Pour cela, ouvrez l'éditeur Nano :

```shell
nano filebrowser.sh
```

Puis copiez-collez le texte suivant dans le fichier :

```shell
nohup filebrowser -r "/home/pi/Mes fichiers" >/dev/null 2>&1 &
```

Fermez ensuite l'éditeur avec **CTRL+X** et validez la sauvegarde. Pour terminer, rendez exécutable le fichier
`filebrowser.sh` avec la commande :

```shell
chmod +x filebrowser.sh
```

## Configuration

Toutes les options de configuration sont disponibles [ici](https://filebrowser.org/cli/filebrowser-config-set).
Je vous recommande cependant :

* `filebrowser config set --auth.method=noauth` pour désactiver l'authentification (pratique dans le cadre d'une
  utilisation locale, avec des personnes de confiance).
* `filebrowser config set --address=adresse.ip.de.votre.pi` qui vous permettra d'accéder à File Browser depuis une
  machine se situant sur le réseau. Je vous conseille d'assigner une adresse IP fixe à votre Raspberry (soit depuis
  le routeur, soit directement depuis la bête).
* `filebrowser config set --port=80` pour démarrer le service sur le port 80 (cela évite de taper le `:port` dans
  la barre d'URL du navigateur). Veillez bien à ce qu'aucun logiciel n'utilise déjà ce port, cependant.
* `filebrowser config set --locale=fr` pour passer le logiciel en français.

## Lancement

Pour lancer votre hébergement, exécutez simplement `./filebrowser.sh` (en vous situant dans le répertoire
`/home/pi`). Si vous avez suivi les instructions de la partie précédente, File Browser devrait maintenant vous
être accessible en tapant `http://adresse.ip.de.votre.pi:port` dans la barre d'URL de votre navigateur.

![Matériel](/images/articles/installer-un-petit-hebergement-de-fichier-leger/filebrowser.png)

J'ai personnellement donné une URL plus sympathique à mon cloud (je n'ai pas testé avec d'autres routeurs,
mais pour moi il suffisait de se connecter au panel d'administration, d'aller dans _Réseau V4_ > _DNS_,
de sélectionner le Raspberry Pi, puis de saisir une adresse plus simple ; du style `hugo.cloud`).
