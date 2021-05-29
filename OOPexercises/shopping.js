"use strict";

(function(){

    


    function Product (name, price, expirationDate) {
        
        if (!name || !price || !expirationDate) {
            throw new Error ("Input name, price or expiration date required")
        }
        
        this.productId = Math.floor(90000 * Math.random() + 10000);
        this.name = name;
        this.price = parseFloat(price.toFixed(2));
        this.expirationDate = new Date (expirationDate);

        

        this.getInfo = function () {
              return this.name.charAt(0).toUpperCase() 
              + this.name.charAt(this.name.lenght -1).toUpperCase() 
              + this.productId + ", " + this.name + ", " + this.price;
        }
 
    }

    
    function ShoppingBag () {
        
        this.listOfProduct = [];
        
        this.addProduct = function (product) {
            if (!product || !(product instanceof Product)) {
                throw new Error ("invalid product input");
            }
            if (product.expirationDate > new Date()) {
                this.listOfProduct.push(product);
            }  
        }

        this.averageProduct = function () {
            var sum = 0;
            var averPrice;
            this.listOfProduct.forEach(function (productPrice) {
                sum += parseFloat(productPrice.price);
            })
            averPrice = sum / this.listOfProduct.length;
            return "Average price is: " + averPrice.toFixed(3);
        }

        this.getMostExpensive = function () {
            var mostExpensive = this.listOfProduct[0].price;
            var index = 0;
            for (var i = 0; i < this.listOfProduct.length; i++){
                if(mostExpensive < this.listOfProduct[i].price){
                    mostExpensive = this.listOfProduct[i].price;
                    index = i;
                }
            }
            return "Most expensive product is: " + this.listOfProduct[index].getInfo();

        }

        this.calculateTotalPrice = function () {
            var total = 0;
            var calc = this.listOfProduct.forEach(function (productPrice) {
                total += parseFloat(productPrice.price);
            })
            return total;
        }
    }

    function PaymentCard (accountBalance, activeOrInactiveStatus, validUntilDate) {
        this.accountBalance = accountBalance;
        this.status = activeOrInactiveStatus;
        this.validUntilDate = new Date (validUntilDate);
    }

    function checkoutAndBuy (shoppingBag, paymentCard) {
        if (paymentCard.accountBalance >= shoppingBag.calculateTotalPrice()) {
            return "Your purchase is SUCCESSFUL"
        } else {
            return "You dont have enough money in an account, you are missing: " 
            + (shoppingBag.calculateTotalPrice() - parseFloat(paymentCard.accountBalance)).toFixed(2);
        }

    }

     // testing 
     var product1 = new Product("Banana", 150, "Jun 29 2025");
     var product2 = new Product("Kafa", 125, "Jun 29 2024");
     var product3 = new Product ('Pivo', 85, "jun 10 2023");
     
     var shopping = new ShoppingBag ();
     
     shopping.addProduct(product1);
     shopping.addProduct(product2);
     shopping.addProduct(product3);

     var card = new PaymentCard (31, 'Active', 'Jun 30 2026');
     
     
     console.log(shopping.averageProduct());
     console.log(shopping.getMostExpensive());
     console.log("Total price is: " + shopping.calculateTotalPrice());

     var purchase = checkoutAndBuy (shopping, card);
     console.log(purchase);
     



})();