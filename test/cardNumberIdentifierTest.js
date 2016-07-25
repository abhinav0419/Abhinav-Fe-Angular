describe('card number filter test', function(){
    beforeEach(module('cardNumberApplication'));

    describe('cardNumberTest',function(){

        var cardNumberFilter;
        beforeEach(inject(function($filter){
            cardNumberFilter = $filter('cardNumberFilter',{});
        }));

        it('Should return the card Company', function(){
            expect(cardNumberFilter('4111111111111111')).toBe('visa');
            expect(cardNumberFilter('6011000990139424')).toBe('discover');
            expect(cardNumberFilter('378282246310005')).toBe('amex');
            expect(cardNumberFilter('5555555555554444')).toBe('mastercard');
            expect(cardNumberFilter('6759 0000 0000 5')).toBe('maestro');
            expect(cardNumberFilter('1234')).toBe('default');
        });

    });

})