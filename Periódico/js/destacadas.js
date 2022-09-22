
function aviso(id) {
    if (document.getElementById) {
        w = screen.availWidth;
        h = screen.availHeight;
    }

    var popW = 800, popH = 500;
    var leftPos = (w - popW) / 2;
    var topPos = (h - popH) / 2;

    if (id == 1) {
        msgWindow1 = window.open('', 'popup', 'width=' + popW + ',height=' + popH +
            ',top=' + topPos + ',left=' + leftPos + ',       scrollbars=yes');
        msgWindow1.document.write
            ('<HTML><HEAD><TITLE>Centered Window</TITLE></HEAD><BODY><FORM    NAME="form1">' +
                '<h1 style="text-align: center;">VENDO CHEVROLET </h1>' +
                '<img src="https://cdn.wheel-size.com/automobile/body/chevrolet-tracker-2017-2019-1605252054.2105825.jpg"' +
                'style="display: block;margin-left: auto;margin-right: auto;width: 50%;">' +
                '<p style="text-align: center;">' +
                ' Tracker 2019 Imcruz 18,200$us. 71909887.</p> <br />' +
                '<div style="text-align: center;">' +
                '<INPUT TYPE="button" VALUE="OK"onClick="window.close();">' +
                '</div>' +
                '</FORM></BODY></HTML>');
    }
    if (id == 2) {

        msgWindow2 = window.open('', 'popup', 'width=' + popW + ',height=' + popH +
            ',top=' + topPos + ',left=' + leftPos + ',       scrollbars=yes');
        msgWindow2.document.write
            ('<HTML><HEAD><TITLE>Centered Window</TITLE></HEAD><BODY><FORM    NAME="form1">' +
                '<h1 style="text-align: center;">VENDO TOYOTA</h1>' +
                '<img src="https://image-cdn.beforward.jp/files/pictures/201307/141772/BF146855_1.jpg"' +
                'style="display: block;margin-left: auto;margin-right: auto;width: 50%;">' +
                '<p style="text-align: center;">' +
                'Vagoneta Toyota Carib 1996 negro. Cel. 72011345. </p> <br />' +
                '<div style="text-align: center;">' +
                '<INPUT TYPE="button" VALUE="OK"onClick="window.close();">' +
                '</div>' +
                '</FORM></BODY></HTML>');
    }
    if (id == 3) {
        msgWindow3 = window.open('', 'popup', 'width=' + popW + ',height=' + popH +
            ',top=' + topPos + ',left=' + leftPos + ',       scrollbars=yes');
        msgWindow3.document.write
            ('<HTML><HEAD><TITLE>Centered Window</TITLE></HEAD><BODY><FORM    NAME="form1">' +
                '<h1 style="text-align: center;">VENDO NISSAN</h1>' +
                '<img src="https://www.nissan-cdn.net/content/dam/Nissan/BO/vehicles/patrol2021mc/Nueva-PatrolV8(packshot).jpg"' +
                'style="display: block;margin-left: auto;margin-right: auto;width: 50%;">' +
                '<p style="text-align: center;">' +
                'Nissan Patrol 2022 solo 3.000km de casa 71269341. </p> <br />' +
                '<div style="text-align: center;">' +
                '<INPUT TYPE="button" VALUE="OK"onClick="window.close();">' +
                '</div>' +
                '</FORM></BODY></HTML>');
    }

}  