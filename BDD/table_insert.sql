INSERT INTO VAGUES (NumVag, DebVag, FinVag)
values (1, '2021-04-09 10:30:00', '2021-04-09 12:00:00');

INSERT INTO UFR(NumUFR, NomUFR) 
values (1, "U-Paris");

INSERT INTO GROUPES_DE_TD (N_Groupe) values (1);

INSERT INTO EPREUVES (NomEpreuve, DateEpreuve) values ("C2I - U-Paris - 2021", 2021);

INSERT INTO CORRECTEURS (PseudoCorrec) values ('CLA');

INSERT INTO SALLES (DesigSalle, CapOrdi, EmplacSalle)
values ('B0-13', 20, "12 rue de la salle 75016 - batiment blériot - rez de chaussée");

INSERT INTO DOMAINES (NumDom, NomDom) values (1, 'Domaine D1: Travailler dans un environnement numérique évolutif ');
INSERT INTO DOMAINES (NumDom, NomDom) values (3, 'Domaine D3: Produire, traiter, exploiter et diffuser desdocuments numériques ')

INSERT INTO ETUDIANTS (NumEtud, NomEtud, PrénEtud, NomEpreuve, N_Groupe, NumUFR, NumVag)
values (65402, 'Lavallée', 'Clément', "C2I - U-Paris - 2021", 1, 1, 1);
INSERT INTO ETUDIANTS (NumEtud, NomEtud, PrénEtud, NomEpreuve, N_Groupe, NumUFR, NumVag)
values (65403, 'Carrières', 'Adrian-Paul', "C2I - U-Paris - 2021", 1, 1, 1);
INSERT INTO ETUDIANTS (NumEtud, NomEtud, PrénEtud, NomEpreuve, N_Groupe, NumUFR, NumVag)
values (65404, 'Pédron', 'Benjamin', "C2I - U-Paris - 2021", 1, 1, 1);
INSERT INTO ETUDIANTS (NumEtud, NomEtud, PrénEtud, NomEpreuve, N_Groupe, NumUFR, NumVag)
values (65405, 'Ben Khemis', 'David', "C2I - U-Paris - 2021", 1, 1, 1);

INSERT INTO LOTS (N_Lot, PseudoCorrec) values (1, 'CLA');

INSERT INTO SOUS_DOMAINES (NomSousDom, NumDom) 
values ('Tableur', 3);
INSERT INTO SOUS_DOMAINES (NomSousDom, NumDom) 
values ('Traitement de texte', 3);
INSERT INTO SOUS_DOMAINES (NomSousDom, NumDom) 
values ('PréAO', 3);

INSERT INTO COPIES (NumCopie, NoteCopie, NumEtud, NomSousDom, NumDom,N_Lot)
values (1, 4.5, 65402, NULL, 1, 'ABCD');
INSERT INTO COPIES (NumCopie, NoteCopie, NumEtud, NomSousDom, NumDom,N_Lot)
values (2, 2.0, 65404, NULL, 1, 'ABCD');

INSERT INTO A_Lieu (N_Lot, DesigSalle) values ('ABCD', 'B0-13');

INSERT INTO Contient (NomEpreuve, NumCopie) values ("C2I - U-Paris - 2021", 1);
INSERT INTO Contient (NomEpreuve, NumCopie) values ("C2I - U-Paris - 2021", 2);

--l'admission se fait par domaine
INSERT INTO Admission (NumEtud, NumDom, ResQuali, DateCapitalisation, ResQuanti)
values (65402, 1, 'ADM', '2021-04-09', 4.5);
INSERT INTO Admission (NumEtud, NumDom, ResQuali, DateCapitalisation, ResQuanti)
values (65402, 1, 'AJ', '2021-04-09', 2.0);