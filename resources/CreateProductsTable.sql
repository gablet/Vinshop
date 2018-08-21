Create Table Academy_Projekt2.dbo.Product (
Nr int NOT NULL,
Artikelnr int NOT NULL,
Namn nvarchar(50) NOT NULL,
Namn2 nvarchar(50),
Prisinklmoms decimal(18, 2) NOT NULL,
Volymiml decimal(18, 0) NOT NULL,
PrisPerLiter decimal(18, 2) NOT NULL,
Varugrupp nvarchar(50) NOT NULL,
Flaska nvarchar(50) NOT NULL,
Ursprung nvarchar(50),
Ursprungsland nvarchar(50) NOT NULL,
Producent nvarchar(50),
Leverantor nvarchar(50),
Argang int,
Alkoholhalt decimal(18, 2) NOT NULL,

CONSTRAINT PC_Artikelnr PRIMARY KEY (Artikelnr)
);