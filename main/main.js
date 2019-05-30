module.exports = function main(str) {
    var m = new Map();
    var result =new Array();
    m.set('0', "._.|.||_|");
    m.set('1', ".....|..|");
    m.set('2', "._.._||_.");
    m.set('3', "._.._|._|");
    m.set('4', "...|_|..|");
    m.set('5', "._.|_.._|");
    m.set('6', "._.|_.|_|");
    m.set('7', "._...|..|");
    m.set('8', "._.|_||_|");
    m.set('9', "._.|_|..|");
    for (var i = 0; i < str.length; i++) {
        m.forEach(function (value,key,map) {
            if(str.charAt(i)==key)
                result.push(value);

        })
    }
    var st='';
    var s='';
    for (var a=0;a<9;a=a+3){
        var st='';
        for(var j=0;j<result.length;j++) {
            if(j!=result.length-1)
                st+=result[j].substring(a,a + 3)+' ';
            else
                st+=result[j].substring(a,a + 3);
        }
        s+=st+'\n';
    }
    // for(var t=0;t<s.length;t++)
    return s;
};