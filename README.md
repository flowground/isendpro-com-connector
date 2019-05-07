# ![LOGO](logo.png) API iSendPro **flow**ground Connector

## Description

A generated **flow**ground connector for the API iSendPro API (version 1.1.1).

Generated from: https://api.apis.guru/v2/specs/isendpro.com/1.1.1/swagger.json<br/>
Generated at: 2019-05-07T17:42:29+03:00

## API Description

[1] Liste des fonctionnalités :
- envoi de SMS à un ou plusieurs destinataires,
- lookup HLR,
- récupération des récapitulatifs de campagne,
- gestion des répertoires,
- ajout en liste noire.
- comptage du nombre de caractères des SMS

[2] Pour utiliser cette API vous devez:
- Créer un compte iSendPro sur https://isendpro.com/
- Créditer votre compte 
    - Remarque: obtention d'un crédit de test possible sous conditions
- Noter votre clé de compte (keyid)
  - Elle vous sera indispensable à l'utilisation de l'API
  - Vous pouvez la trouver dans le rubrique mon "compte", sous-rubrique "mon API"
- Configurer le contrôle IP
  - Le contrôle IP est configurable dans le rubrique mon "compte", sous-rubrique "mon API"
  - Il s'agit d'un système de liste blanche, vous devez entrer les IP utilisées pour appeler l'API
  - Vous pouvez également désactiver totalement le contrôle IP


## Authorization

This API does not require authorization.

## Actions

### Retourne les SMS envoyes sur une periode donnee

> Retourne les SMS envoyes sur une periode donnee en fonction d'une date de debut et d'une date de fin. <br/>
> <br/>
> Les dates sont au format YYYY-MM-DD hh:mm. <br/>
> <br/>
> Le fichier rapport de campagne est sous la forme d'un fichier zip + contenant un fichier csv contenant le detail des envois.

*Tags:* `campagne`

#### Input Parameters
* `keyid` - _required_ - Cle API
* `rapportCampagne` - _required_ - Doit valoir "1"
    Possible values: 1.
* `date_deb` - _required_ - date de debut au format YYYY-MM-DD hh:mm
* `date_fin` - _required_ - date de fin au format YYYY-MM-DD hh:mm

### Compter le nombre de caractere

> Compte le nombre de SMS necessaire a un envoi

*Tags:* `comptage`

### Interrogation credit

> Retourne le credit existant associe au compte.

*Tags:* `credit`

#### Input Parameters
* `keyid` - _required_ - Cle API
* `credit` - _required_ - Type de reponse demandee, 1 pour euro, 2 pour euro + estimation quantite
    Possible values: 1, 2.

### Ajoute un numero en liste noire

> Supprime un numero en liste noire

*Tags:* `delListeNoire`

#### Input Parameters
* `keyid` - _required_ - Cle API
* `delListeNoire` - _required_ - Doit valoir "1"
    Possible values: 1.
* `num` - _required_ - numero de mobile a supprimer

### Retourne le liste noire

> Retourne un fichier csv zippe contenant la liste noire

*Tags:* `getListeNoire`

#### Input Parameters
* `keyid` - _required_ - Cle API
* `getListeNoire` - _required_ - Doit valoir "1"
    Possible values: 1.

### Verifier la validite d'un numero

> Realise un lookup HLR sur les numeros

*Tags:* `hlr`

### Gestion repertoire (creation)

> Cree un nouveau repertoire et retourne son identifiant. Cet identifiant pourra etre utilise pour ajouter ou supprimer des numeros via l'API.

*Tags:* `repertoire`

### Gestion repertoire (modification)

> Ajoute ou supprime une liste de numeros a un repertoire existant.

*Tags:* `repertoire`

### Ajoute un numero en liste noire

> Ajoute un numero en liste noire. Une fois ajoute, les requetes d'envoi de SMS marketing vers ce numero seront refusees.

*Tags:* `setListeNoire`

#### Input Parameters
* `keyid` - _required_ - Cle API
* `setlisteNoire` - _required_ - Doit valoir "1"
    Possible values: 1.
* `num` - _required_ - numero de mobile a inserer en liste noire

### add a shortlink

*Tags:* `add shortlink`

### Envoyer un sms

> Envoi un sms vers un unique destinataire

*Tags:* `sms`

### Envoyer des SMS

> Envoi de SMS vers 1 ou plusieurs destinataires

*Tags:* `sms`

### Ajoute un sous compte

*Tags:* `add subaccount`

### Edit a subaccount

*Tags:* `edit subaccount`

## License

**flow**ground :- Telekom iPaaS / isendpro-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
