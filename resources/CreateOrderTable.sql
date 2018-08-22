Create Table Academy_Projekt2.dbo.Orders (
OrderID int IDENTITY (1,1) NOT NULL,
CustomerID int NOT NULL,
Artikelnr int NOT NULL,
Amount int NOT NULL,
SumPrice int NOT NULL,
PaymentMethod nvarchar(50) NOT NULL,

CONSTRAINT PC_OrderID PRIMARY KEY (OrderID),
FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
FOREIGN KEY (Artikelnr) REFERENCES Product(Artikelnr)
);