# Spam-Center
Conçu pour arroser les arroseurs


***Installation***

+ Installer [WampServer](https://www.wampserver.com/)
+ Télécharger le zip **Spam-Center** et l'extraire dans le dossier **.../wamp64/www/**
+ Déplacer le dossier **sendmail/** dans le dossier : **.../wamp64/**
+ [Se créer une adresse mail *Gmail*](https://accounts.google.com/SignUp?hl=en)
+ Aller dans les paramêtres du compte et activer le **Accès moins sécurisé des applications** ![ici](https://manava.abricode.fr/images/aide/gmail_7.png)
+ Modifier fichier **sendmail.ini** pour ajouter les données de l'adresse email dans **auth_username=** et **auth_password=**
+ Modifier le fichier **php.ini** de WampServer et ajouter la localisation de **sendmail.exe** à **sendmail_path =** (par exemple: "C:\wamp64\sendmail\sendmail.exe") 
![php](https://john-dugan.com/wp-content/uploads/2014/07/update-php-wamp-php-ini.png)
+ 
