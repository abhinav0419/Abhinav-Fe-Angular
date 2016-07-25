(function () {
    angular.module('cardNumberApplication').filter('cardNumberFilter', [function () {
        return function (cardNumber) {

            //check for empty input
            if (cardNumber == null) {
                return "default";
            }

            //check for length of input as minimum length to be card number is 14.
            if (cardNumber.length >= 13) {
                var regex = /[ -]+/g;
                var newCardNumber = cardNumber.replace(regex,"");
                var isCardNumber = validateCardNumber(newCardNumber);
            }

            // method to check if given card number is valid or not
            function validateCardNumber(num) {
                // accept only digits, dashes or spaces
                if (/[^0-9-\s]+/.test(num)) return false;
                var total = 0;
                var oddEvenFlag = false;
                for (var i = num.length - 1; i >= 0; i--) {
                    var n = parseInt(num.substring(i, i + 1));
                    if (oddEvenFlag) {
                        n = n * 2;
                        if (n > 9) {
                            n = (n % 10) + 1;
                        }
                    }
                    total = total + n;
                    oddEvenFlag = !oddEvenFlag;
                }
                return (total % 10) == 0;
            }

            if (isCardNumber) {
                if(/^(34)|^(37)/.test(newCardNumber))
                {
                    cardCompany = "amex";
                }

                if(/^(6011)|^(622(1(2[6-9]|[3-9][0-9])|[2-8][0-9]{2}|9([01][0-9]|2[0-5])))|^(64[4-9])|^65/.test(newCardNumber))
                {
                    cardCompany = "discover";
                }
                if(/^(5018)|^(5020)|^(5038)|^(5893)|^(6304)|^(6759)|^(6761)|^(6762)|^(6763)|^(0604)/.test(newCardNumber))
                {
                    cardCompany = "maestro";
                }
                if(/^5[1-5]/.test(newCardNumber))
                {
                    cardCompany = "mastercard";
                }
                if (/^4/.test(newCardNumber))
                {
                    cardCompany = "visa";
                }
                return cardCompany;
            }

            else {
                return "default";
            }

        };
    }]);
})();