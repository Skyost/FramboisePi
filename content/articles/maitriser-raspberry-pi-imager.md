---
title: Maîtriser Raspberry Pi Imager
categories: [tutoriels]
---

_Raspberry Pi Imager est un petit logiciel mis à disposition par la fondation Raspberry Pi. Mis à disposition des
utilisateurs il y a un peu plus d'un an, ce programme représente la manière la plus directe et la plus simple de
flasher une image pour votre framboise. Petit tour d'horizon._

<!--more-->

## Installation

L'installation est plutôt rapide : rendez-vous sur
[la page officielle de Raspberry Pi OS](https://www.raspberrypi.org/software/),
puis cliquez sur le lien correspondant à votre système d'exploitation. Pour vous faciliter la vie,
je vous ai compilé lesdits liens :

* [Windows](https://downloads.raspberrypi.org/imager/imager_latest.exe).
* [macOS](https://downloads.raspberrypi.org/imager/imager_latest.dmg).
* [Ubuntu x86](https://downloads.raspberrypi.org/imager/imager_latest_amd64.deb).

Une fois l'installateur téléchargé, installez le logiciel en l'exécutant. Si vous êtes déjà sous Raspberry Pi OS,
vous pouvez également installer Raspberry Pi Imager en exécutant la commande `sudo apt install rpi-imager`.

## Flasher une image

Commencez par insérer votre micro SD dans votre ordinateur (à l'aide d'un
[adaptateur SD](https://www.amazon.fr/dp/B07FCMKK5X) par exemple).
Puis, vous pouvez démarrer Raspberry Pi Imager.

![Raspberry Pi Imager](/images/articles/maitriser-raspberry-pi-imager/raspberry-pi-imager.png)

Cliquez sur le bouton _Choisissez l'OS_ et sélectionnez le système d'exploitation
que vous souhaitez installer (le choix le plus simple étant Raspberry Pi OS ; mais si vous n'avez pas besoin d'interface
graphique vous pouvez vous contenter de Raspberry Pi OS Lite qui est, comme son nom l'indique, plus léger).
Dans la partie _Stockage_, sélectionnez votre micro SD. Enfin, cliquez sur _Écrire_, et patientez quelques minutes
(le temps d'attente dépend de [la classe](https://fr.wikipedia.org/wiki/Carte_SD#D%C3%A9bit) de votre carte).

Une fois les vérifications terminées, vous pouvez éjecter votre micro SD de votre ordinateur : le flash est terminé !

## Options avancées

Depuis la version 1.6,
le logiciel propose [des options avancées](https://www.raspberrypi.org/blog/raspberry-pi-imager-update-to-v1-6/).
Pour les afficher, appuyez sur **CTRL+Maj+X**. Nous allons décortiquer tout cela ensemble (à date de cet article,
les options ne sont pas encore traduites en français) :

* **Image customization options for this session only / to always use** : choisissez si vous souhaitez sauvegarder les
  changements apportés aux options avancées ci-dessous pour des futurs usages ou non.
  * **Disable overscan** : permet de désactiver le surbalayage (peut être utile si jamais des bandes noires apparaissent
    aux bordures de votre écran).
  * **Set hostname** : permet de changer le nom d'hôte de votre appareil (pour accès par réseau local).
  * **Enable SSH** : permet d'activer l'accès SSH ; les options dessous concernent les identifiants SSH.
  * **Configure wifi** : permet de configurer les paramètres Wi-Fi afin que votre framboise se connecte d'elle-même à votre
    réseau sans que vous n'ayez à entrer quoi que ce soit. Peut se révéler très utile si vous envisagez un accès SSH et
    que vous n'avez ni écran ni clavier.
  * **Set locale settings** : permet de configurer les paramètres locaux (fuseau horaire, agencement du clavier, ...).
* **Persitent settings** : les paramètres ci-dessous persistent entre chaque redémarrage de l'application.
  * **Play sound when finished** : joue un son quand le flash est terminé.
  * **Eject media when finished** : éjecte la carte une fois le flash terminé.
  * **Enable telemetry** : active l'envoi de pings à [raspberrypi.org](https://raspberrypi.org) à des fins statistiques.

Personnellement, je vous conseille d'activer SSH et de configurer votre Wi-Fi une bonne fois pour toutes.
