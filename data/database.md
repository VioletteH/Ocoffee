CREATE TABLE IF NOT EXISTS "product" (
  "reference" INT NOT NULL PRIMARY KEY,
  "name" VARCHAR(128), 
  "description" VARCHAR(255),
  "origine_id" INT NOT NULL, 
  "price" DECIMAL(10, 2) NOT NULL,
  "type_id" INT NOT NULL, 
  "availability" BOOLEAN
);

CREATE TABLE IF NOT EXISTS "origine" (
  "id" INT NOT NULL PRIMARY KEY,
  "country" VARCHAR(128)
); 
     
CREATE TABLE IF NOT EXISTS "type" (
  "id" INT NOT NULL PRIMARY KEY,
  "strenght" VARCHAR(50) 
);

INSERT INTO "origine" ("id", "country") VALUES
(1, 'Italie'),
(2, 'Colombie'),
(3, 'Éthiopie'),
(4, 'Brésil'),
(5, 'Guatemala'),
(6, 'Kenya'),
(7, 'Indonésie'),
(8, 'Costa Rica'),
(9, 'Vietnam'),
(10, 'Tanzanie'),
(11, 'Jamaïque'),
(12, 'Rwanda'),
(13, 'Panama'),
(14, 'Pérou'),
(15, 'Hawaï'),
(16, 'Nicaragua');

INSERT INTO "type" ("id", "strenght") VALUES
(1, 'Corsé'),
(2, 'Acide'),
(3, 'Fruité'),
(4, 'Doux'),
(5, 'Épicé'),
(6, 'Chocolaté');

INSERT INTO "product" ("reference", "name", "description", "origine_id", "price", "type_id", "availability") VALUES
(100955890, 'Espresso', 'Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu.', 1, 20.99, 1, TRUE),
(100955894, 'Columbian', 'Café moyennement corsé avec une acidité vive et une saveur riche.', 2, 18.75, 2, TRUE),
(105589090, 'Ethiopian Yirgacheffe', 'Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.', 3, 22.50, 3, TRUE),
(134009550, 'Brazilian Santos', 'Café doux et lisse avec un profil de saveur de noisette.', 4, 17.80, 4, TRUE),
(256505890, 'Guatemalan Antigua', 'Café corsé avec des nuances chocolatées et une pointe d''épice.', 5, 21.25, 1, TRUE),
(295432730, 'Kenyan AA', 'Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.', 6, 23.70, 2, TRUE),
(302932754, 'Sumatra Mandheling', 'Café profond et terreux avec un corps lourd et une faible acidité.', 7, 19.95, 1, TRUE),
(327302954, 'Costa Rican Tarrazu', 'Café vif et net avec une finition propre et une acidité vive.', 8, 24.50, 2, TRUE),
(549549090, 'Vietnamese Robusta', 'Café audacieux et fort avec une saveur robuste distinctive.', 9, 16.75, 5, TRUE),
(582954954, 'Tanzanian Peaberry', 'Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.', 10, 26.80, 3, TRUE),
(589100954, 'Jamaican Blue Mountain', 'Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.', 11, 39.25, 4, TRUE),
(650753915, 'Rwandan Bourbon', 'Café avec des notes florales prononcées, une acidité vive et un corps moyen.', 12, 21.90, 3, TRUE),
(795501340, 'Panamanian Geisha', 'Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.', 13, 42.00, 3, TRUE),
(954589100, 'Peruvian Arabica', 'Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.', 14, 19.40, 6, FALSE),
(958090105, 'Hawaiian Kona', 'Café rare au goût riche, une acidité douce et des nuances subtiles.', 15, 55.75, 4, FALSE),
(691550753, 'Nicaraguan Maragogipe', 'Café avec des notes de fruits, une acidité vive et un corps plein.', 16, 28.60, 3, FALSE);


RESULTS

 reference |          name          |                                            description                                             | origine_id | price | type_id | availability 
-----------+------------------------+----------------------------------------------------------------------------------------------------+------------+-------+---------+--------------
 100955890 | Espresso               | Café fort et concentré préparé en faisant passer de l'eau chaude à travers du café finement moulu. |          1 | 20.99 |       1 | t
 100955894 | Columbian              | Café moyennement corsé avec une acidité vive et une saveur riche.                                  |          2 | 18.75 |       2 | t
 105589090 | Ethiopian Yirgacheffe  | Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.                   |          3 | 22.50 |       3 | t


ocoffee=> \dt
         List of relations
 Schema |  Name   | Type  |  Owner  
--------+---------+-------+---------
 public | origine | table | ocoffee
 public | product | table | ocoffee
 public | type    | table | ocoffee
(3 rows)