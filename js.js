
//支撑与阻力
$(function () {
    var priceList = [
      {
          name: '50%',
          value: 1 / 2
      },
      {
          name: '63%',
          value: 63 / 100
      },
      {
          name: '75%',
          value: 3 / 4
      },

      {
          name: '1/3',
          value: 1 / 3
      },
      {
          name: '2/3',
          value: 2 / 3
      },
      {
          name: '1/8',
          value: 1 / 8
      },

      {
          name: '1/4',
          value: 1 / 4
      },
      {
          name: '3/8',
          value: 3 / 8
      },
      {
          name: '5/8',
          value: 5 / 8
      },
      {
          name: '7/8',
          value: 7 / 8
      }
    ],
    $p1 = $('#p1'),
    $p2 = $('#p2'),
    $result = $('#result'),
    template = $('#template').html();

    $('.field').keyup(function () {
        var begin = parseFloat($p1.val(), 10),
            finish = parseFloat($p2.val(), 10);

        if (!isNaN(begin) && !isNaN(finish)) {
            var html = doT.compile(template)({ begin: begin, finish: finish, priceList: priceList });
            $result.html(html);
        }
    });
});


//点位计算
$(function () {
    var priceList = [
      {
          name: '-10%',
          value: -10 / 100
      },
      {
          name: '-9%',
          value: -9 / 100
      },
      {
          name: '-8%',
          value: -8 / 100
      },

      {
          name: '-7%',
          value: -7 / 100
      },
      {
          name: '-6%',
          value: -6 / 100
      },
      {
          name: '-5%',
          value: -5 / 100
      },

      {
          name: '-4%',
          value: -4 / 100
      },
      {
          name: '-3%',
          value: -3 / 100
      },
      {
          name: '-2%',
          value: -2 / 100
      },
      {
          name: '-1%',
          value: -1 / 100
      },
      {
          name: '1%',
          value: 1 / 100
      },
      {
          name: '2%',
          value: 2 / 100
      },
      {
          name: '3%',
          value: 3 / 100
      },

      {
          name: '4%',
          value: 4 / 100
      },
      {
          name: '5%',
          value: 5 / 100
      },
      {
          name: '6%',
          value: 6 / 100
      },

      {
          name: '7%',
          value: 7 / 100
      },
      {
          name: '8%',
          value: 8 / 100
      },
      {
          name: '9%',
          value: 9 / 100
      },
      {
          name: '10%',
          value: 10 / 100
      }

    ],
    $p3 = $('#p3'),
    $result_1 = $('#result_1'),
    template_1 = $('#template_1').html();

    $('.field-1').keyup(function () {
        var begin = parseFloat($p3.val(), 10);
        var html = doT.compile(template_1)({ begin: begin, priceList: priceList });
        $result_1.html(html);
    });
});
