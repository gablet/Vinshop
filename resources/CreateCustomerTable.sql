Create Table dbo.Customer (
CustomerID int IDENTITY(1,1) NOT NULL,
FirstName nvarchar(50) NOT NULL,
LastName nvarchar(50) NOT NULL,
Email nvarchar(50) NOT NULL,
Adress nvarchar(100) NOT NULL,
Adress2 nvarchar(50) NOT NULL,
Zipcode int NOT NULL,
City nvarchar(50) NOT NULL,
Country nvarchar(50) NOT NULL,

CONSTRAINT PC_CustomerID PRIMARY KEY (CustomerID)
)