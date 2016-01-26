function NewCookie(name,value) {
   var oDate = new Date();
    oDate.setYear(oDate.getFullYear()+1);
    var oCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';expires=' + oDate.toGMTString() + ';path=/';
    document.cookie= oCookie; 
}

function GetCookie(name){
        name = name.toLowerCase();
    var oCrumbles = document.cookie.split(';');
    for(var i=0; i<oCrumbles.length;i++)
    {
        var oPair= oCrumbles[i].split('=');
        var oKey = decodeURIComponent(oPair[0].trim().toLowerCase());
        var oValue = oPair.length>1?oPair[1]:'';
        if(oKey == name)
            return decodeURIComponent(oValue);
    }
    return '';
}

function VoidCookie(name){
    NewCookie(name,'');
}
