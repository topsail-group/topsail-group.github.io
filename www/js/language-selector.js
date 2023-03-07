$(function() {
    var url = window.location.href.split('/');
    var language = url[url.length - 2];
    switch (language) {
        case 'lv':
            $('#languageSelector').selectpicker('val', "3");
          break;
        case 'ru':
            $('#languageSelector').selectpicker('val', "2");
          break;
        default:
            $('#languageSelector').selectpicker('val', "1");
    }

    $('#languageSelector').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
        var selectedValue = $(this).val();
        if(selectedValue === previousValue){
            return;
        }else{
            var url = window.location.href.split('/');
            var language = url[url.length - 2];
            switch (selectedValue) {
                case '3':
                    var page = url.pop();
                    var lang = url.pop();
                    var new_url = (url.join('/')).concat('/lv/').concat(page);
                    console.log(new_url);
                  break;
                case '2':
                    var page = url.pop();
                    var lang = url.pop();
                    var new_url = (url.join('/')).concat('/ru/').concat(page);
                    console.log(new_url);
                  break;
                default:
                    var page = url.pop();
                    var lang = url.pop();
                    var new_url = (url.join('/')).concat('/').concat(page);
            }
            window.location.replace(new_url);
        }
      });    
});