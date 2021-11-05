# Spam-Center
Conçu uniquement pour arroser les arroseurs. Ne pas l'utiliser pour arroser une personne qui ne vous aurait pas arrosé, je ne suis pas responsable de l'usage de chacun.


***Installation***

+ Installer [WampServer](https://www.wampserver.com/)
+ Télécharger le zip **Spam-Center** et l'extraire dans le dossier **.../wamp64/www/**
+ Déplacer le dossier **sendmail/** dans le dossier : **.../wamp64/**
+ [Se créer une adresse mail *Gmail*](https://accounts.google.com/SignUp?hl=en)
+ Aller dans les paramêtres du compte et activer le **Accès moins sécurisé des applications** ![ici](https://manava.abricode.fr/images/aide/gmail_7.png)
+ Modifier fichier **sendmail.ini** pour ajouter les données de l'adresse email dans **auth_username=** et **auth_password=**
+ Modifier le fichier **php.ini** de WampServer 
![ici](https://i.stack.imgur.com/66eSX.png)
+ Ajouter la localisation de **sendmail.exe** à **sendmail_path =** (par exemple: "C:\wamp64\sendmail\sendmail.exe") 
