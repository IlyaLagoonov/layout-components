
  document.addEventListener("DOMContentLoaded", function() {
    const selector = document.querySelector(".choices")  
  
    const choices = new Choices(selector, {
      searchEnabled: false,
      itemSelectText:'',
      classNames: {
        containerOuter: 'choices header_choices',
       },
    });
    
  });

 var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7(999)999-99-99");
    im.mask(selector);

    const validate = new window.JustValidate('#form');
   
    new JustValidate('.form', {
        colorWrong: "#FF5C00",
        rules: {
            name: {
                required:true,
                minLength:2,
                maxLength:10
            },
            tel: {
                required:true,
                function: (name,value) => {
                    const phone = selector.inputmask.unmaskedvalue()
                    return Number(phone) && phone.length === 10
                }
            },
            mail: {
                required: true,
                email:true
            },
        },
        messages: {
            mail: "Укажите ваш e-mail",

            name: "Как вас зовут?",

            tel: {
              required: "Укажите ваш телефон",
              function: "Укажите ваш телефон"
            }
          }
    });

   
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [48.872185073737896,2.354223999999991],
            zoom: 17,
            controls: []
        });

        var myPlacemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {},{
            iconLayout:'default#image',
            iconImageHref:'img/Subtract.svg',
            iconImageSize:[28,40],
            iconImageOffset:[-3,-42]
        });

        myMap.geoObjects.add(myPlacemark);
    }

    

    new SimpleBar(document.querySelector(".customScroll"), {
        autoHide: false,
        scrollbarMaxSize: 70,
      });


      tippy('#myButton1', {
        content: 'Глава 2, страница 176',
      });

      tippy('#myButton2', {
        content: 'Глава 2, страница 176',
      });