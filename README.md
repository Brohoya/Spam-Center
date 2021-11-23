# Spam-Center
Conçu uniquement pour arroser les arroseurs. Ne pas l'utiliser pour arroser une personne qui ne vous aurait pas arrosé, je ne suis pas responsable de l'usage de chacun.


***Installation***

+ Installer et lancer [WampServer](https://www.wampserver.com/)
+ Télécharger le zip **Spam-Center** et l'extraire dans le dossier **.../wamp64/www/**
+ Déplacer le dossier **sendmail/** dans le dossier : **.../wamp64/**
+ [Se créer une adresse mail *Gmail*](https://accounts.google.com/SignUp?hl=en)
+ Aller dans les paramêtres du compte et activer le **Accès moins sécurisé des applications** ![ici](https://manava.abricode.fr/images/aide/gmail_7.png)
+ Modifier fichier **sendmail.ini** pour ajouter les données de l'adresse email dans **auth_username=** et **auth_password=** puis mettre **smtp_server=*smtp.gmail.com*** et **smtp_port=*587***
+ Modifier le fichier **php.ini** de WampServer 
+ Ajouter la localisation de **sendmail.exe** à **sendmail_path =** (par exemple: "C:\wamp64\sendmail\sendmail.exe" avec les guillemets ) **ET** enlever le ";" devant
![ici](https://i.stack.imgur.com/66eSX.png)
