SET time_zone = 'UTC';

Drop table VAGUES cascade constraints purge;
Drop table UFR CASCADE CONSTRAINTS purge;
DROP TABLE GROUPES_DE_TD CASCADE CONSTRAINTS PURGE;
DROP TABLE EPREUVES CASCADE CONSTRAINTS PURGE;
DROP TABLE CORRECTEURS CASCADE CONSTRAINTS PURGE;
DROP TABLE SALLES CASCADE CONSTRAINTS PURGE;
DROP TABLE DOMAINES CASCADE CONSTRAINTS PURGE;
DROP TABLE ETUDIANTS CASCADE CONSTRAINTS PURGE;
DROP TABLE LOTS CASCADE CONSTRAINTS PURGE;
DROP TABLE SOUS_DOMAINES CASCADE CONSTRAINTS PURGE;
DROP TABLE COPIES CASCADE CONSTRAINTS PURGE;
DROP TABLE A_Lieu CASCADE CONSTRAINTS PURGE;
DROP TABLE Contient CASCADE CONSTRAINTS PURGE;
DROP TABLE Admission CASCADE CONSTRAINTS PURGE;

CREATE TABLE VAGUES(
   NumVag INT,
   DebVag DATETIME,
   FinVag DATETIME,
   PRIMARY KEY(NumVag)
);

CREATE TABLE UFR(
   NumUFR INT,
   NomUFR VARCHAR(50),
   PRIMARY KEY(NumUFR)
);

CREATE TABLE GROUPES_DE_TD(
   N_Groupe INT,
   PRIMARY KEY(N_Groupe)
);

CREATE TABLE EPREUVES(
   NomEpreuve VARCHAR(50),
   DateEpreuve INT,
   PRIMARY KEY(NomEpreuve)
);

CREATE TABLE CORRECTEURS(
   PseudoCorrec VARCHAR(50),
   PRIMARY KEY(PseudoCorrec)
);

CREATE TABLE SALLES(
   DesigSalle VARCHAR(50),
   CapOrdi INT,
   EmplacSalle VARCHAR(250),
   PRIMARY KEY(DesigSalle)
);

CREATE TABLE DOMAINES(
   NumDom INT,
   NomDom VARCHAR(50),
   PRIMARY KEY(NumDom)
);

CREATE TABLE ETUDIANTS(
   NumEtud INT,
   NomEtud VARCHAR(50),
   PrénEtud VARCHAR(50),
   NomEpreuve VARCHAR(50) NOT NULL,
   N_Groupe INT NOT NULL,
   NumUFR INT NOT NULL,
   NumVag INT NOT NULL,
   PRIMARY KEY(NumEtud),
   FOREIGN KEY(NomEpreuve) REFERENCES EPREUVES(NomEpreuve),
   FOREIGN KEY(N_Groupe) REFERENCES GROUPES_DE_TD(N_Groupe),
   FOREIGN KEY(NumUFR) REFERENCES UFR(NumUFR),
   FOREIGN KEY(NumVag) REFERENCES VAGUES(NumVag)
);

CREATE TABLE LOTS(
   N_Lot INT,
   PseudoCorrec VARCHAR(50) NOT NULL,
   PRIMARY KEY(N_Lot),
   FOREIGN KEY(PseudoCorrec) REFERENCES CORRECTEURS(PseudoCorrec)
);

CREATE TABLE SOUS_DOMAINES(
   NomSousDom VARCHAR(50),
   NumDom INT NOT NULL,
   PRIMARY KEY(NomSousDom),
   FOREIGN KEY(NumDom) REFERENCES DOMAINES(NumDom)
);

CREATE TABLE COPIES(
   NumCopie INT,
   NoteCopie REAL,
   NumEtud INT NOT NULL,
   NomSousDom VARCHAR(50),
   NumDom INT NOT NULL,
   N_Lot INT NOT NULL,
   PRIMARY KEY(NumCopie),
   FOREIGN KEY(NumEtud) REFERENCES ETUDIANTS(NumEtud),
   FOREIGN KEY(NomSousDom) REFERENCES SOUS_DOMAINES(NomSousDom),
   FOREIGN KEY(NumDom) REFERENCES DOMAINES(NumDom),
   FOREIGN KEY(N_Lot) REFERENCES LOTS(N_Lot)
);

CREATE TABLE A_Lieu(
   N_Lot INT,
   DesigSalle VARCHAR(50),
   PRIMARY KEY(N_Lot, DesigSalle),
   FOREIGN KEY(N_Lot) REFERENCES LOTS(N_Lot),
   FOREIGN KEY(DesigSalle) REFERENCES SALLES(DesigSalle)
);

CREATE TABLE Contient(
   NomEpreuve VARCHAR(50),
   NumCopie INT,
   PRIMARY KEY(NomEpreuve, NumCopie),
   FOREIGN KEY(NomEpreuve) REFERENCES EPREUVES(NomEpreuve),
   FOREIGN KEY(NumCopie) REFERENCES COPIES(NumCopie)
);

CREATE TABLE Admission(
   NumEtud INT,
   NumDom INT,
   ResQuali VARCHAR(50),
   DateCapitalisation DATE,
   ResQuanti REAL,
   PRIMARY KEY(NumEtud, NumDom),
   FOREIGN KEY(NumEtud) REFERENCES ETUDIANTS(NumEtud),
   FOREIGN KEY(NumDom) REFERENCES DOMAINES(NumDom)
);
