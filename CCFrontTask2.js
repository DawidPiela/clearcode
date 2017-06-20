function damage(spellString){

    //initializing variables

    var spellString;
    var damage = 0;

    //cutting string into spell (fe...ai)

    var m = spellString.indexOf("fe");
    var n = spellString.lastIndexOf("ai");

    if((spellString.match(/fe/gi)||[]).length == 1) {
        var res = spellString.slice(m + 2, n + 2);
        damage += 1;

        //checking if subspell is inside of a spell

        if(res.match(/jee/gi)) {
            for(var i = (res.match(/jee/gi)||[]).length; i > 0; i--) {
                damage += 3;
                var o = res.indexOf("jee");
                var res = (res.substring(0, o) + res.substring(o + 3));
            }
        }
        if(res.match(/je/gi)) {
            for(var i = (res.match(/je/gi)||[]).length; i > 0; i--) {
                damage += 2;
                var o = res.indexOf("je");
                var res = (res.substring(0, o) + res.substring(o + 2));
            }
        }
        if(res.match(/fe/gi)) {
            for(var i = (res.match(/fe/gi)||[]).length; i > 0; i--) {
                damage += 1;
                var o = res.indexOf("fe");
                var res = (res.substring(0, o) + res.substring(o + 1));
            }
        }
        if(res.match(/ne/gi)) {
            for(var i = (res.match(/ne/gi)||[]).length; i > 0; i--) {
                damage += 2;
                var o = res.indexOf("ne");
                var res = (res.substring(0, o) + res.substring(o + 2));
            }
        }
        if(res.match(/ain/gi)) {
            for(var i = (res.match(/ain/gi)||[]).length; i > 0; i--) {
                damage += 3;
                var o = res.indexOf("ain");
                var res = (res.substring(0, o) + res.substring(o + 3));
            }
        }
        if(res.match(/dai/gi)) {
            for(var i = (res.match(/dai/gi)||[]).length; i > 0; i--) {
                damage += 5;
                var o = res.indexOf("dai");
                var res = (res.substring(0, o) + res.substring(o + 3));
            }
        }
        if(res.match(/ai/gi)) {
            for(var i = (res.match(/ai/gi)||[]).length; i > 0; i--) {
                damage += 2;
                var o = res.indexOf("ai");
                var res = (res.substring(0, o) + res.substring(o + 2));
            }
        }

        //subtracting damage if there is other letters

        if(res) {
            damage -= res.length;
        }
        if(damage < 0) {
            return 0;
        }
    } else {
        return 0;
    }
    return damage;
}