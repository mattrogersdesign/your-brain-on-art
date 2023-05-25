var progress_bar_var, q1, totalscore, cumulative, q2, appreciation_tot, q3, experience_tot, appreciation, q4, behavior_tot, q5, experience, q6, q7, behavior, q8, q9, q10, q11, q12, q13, q14, results_tab;

// Describe this function...
function Calculate_overall_score() {
  totalscore = 0;
  appreciation_tot = 0;
  experience_tot = 0;
  behavior_tot = 0;
  if (q1 == 1) {
    totalscore += 1;
    appreciation_tot += 1;
  } else if (q1 == 2) {
    totalscore += 2;
    appreciation_tot += 2;
  } else if (q1 == 3) {
    totalscore += 3;
    appreciation_tot += 3;
  } else if (q1 == 4) {
    totalscore += 4;
    appreciation_tot += 4;
  } else if (q1 == 5) {
    totalscore += 5;
    appreciation_tot += 5;
  }
  if (q2 == 1) {
    totalscore += 1;
    appreciation_tot += 1;
  } else if (q2 == 2) {
    totalscore += 2;
    appreciation_tot += 2;
  } else if (q2 == 3) {
    totalscore += 3;
    appreciation_tot += 3;
  } else if (q2 == 4) {
    totalscore += 4;
    appreciation_tot += 4;
  } else if (q2 == 5) {
    totalscore += 5;
    appreciation_tot += 5;
  }
  if (q3 == 1) {
    totalscore += 1;
    appreciation_tot += 1;
  } else if (q3 == 2) {
    totalscore += 2;
    appreciation_tot += 2;
  } else if (q3 == 3) {
    totalscore += 3;
    appreciation_tot += 3;
  } else if (q3 == 4) {
    totalscore += 4;
    appreciation_tot += 4;
  } else if (q3 == 5) {
    totalscore += 5;
    appreciation_tot += 5;
  }
  if (q4 == 1) {
    totalscore += 1;
    appreciation_tot += 1;
  } else if (q4 == 2) {
    totalscore += 2;
    appreciation_tot += 2;
  } else if (q4 == 3) {
    totalscore += 3;
    appreciation_tot += 3;
  } else if (q4 == 4) {
    totalscore += 4;
    appreciation_tot += 4;
  } else if (q4 == 5) {
    totalscore += 5;
    appreciation_tot += 5;
  }
  if (q5 == 1) {
    totalscore += 1;
    behavior_tot += 1;
  } else if (q5 == 2) {
    totalscore += 2;
    behavior_tot += 2;
  } else if (q5 == 3) {
    totalscore += 3;
    behavior_tot += 3;
  } else if (q5 == 4) {
    totalscore += 4;
    behavior_tot += 4;
  } else if (q5 == 5) {
    totalscore += 5;
    behavior_tot += 5;
  }
  if (q6 == 1) {
    totalscore += 1;
    appreciation_tot += 1;
  } else if (q6 == 2) {
    totalscore += 2;
    appreciation_tot += 2;
  } else if (q6 == 3) {
    totalscore += 3;
    appreciation_tot += 3;
  } else if (q6 == 4) {
    totalscore += 4;
    appreciation_tot += 4;
  } else if (q6 == 5) {
    totalscore += 5;
    appreciation_tot += 5;
  }
  if (q7 == 1) {
    totalscore += 1;
    behavior_tot += 1;
  } else if (q7 == 2) {
    totalscore += 2;
    behavior_tot += 2;
  } else if (q7 == 3) {
    totalscore += 3;
    behavior_tot += 3;
  } else if (q7 == 4) {
    totalscore += 4;
    behavior_tot += 4;
  } else if (q7 == 5) {
    totalscore += 5;
    behavior_tot += 5;
  }
  if (q8 == 1) {
    totalscore += 1;
    experience_tot += 1;
  } else if (q8 == 2) {
    totalscore += 2;
    experience_tot += 2;
  } else if (q8 == 3) {
    totalscore += 3;
    experience_tot += 3;
  } else if (q8 == 4) {
    totalscore += 4;
    experience_tot += 4;
  } else if (q8 == 5) {
    totalscore += 5;
    experience_tot += 5;
  }
  if (q9 == 1) {
    totalscore += 1;
    appreciation_tot += 1;
  } else if (q9 == 2) {
    totalscore += 2;
    appreciation_tot += 2;
  } else if (q9 == 3) {
    totalscore += 3;
    appreciation_tot += 3;
  } else if (q9 == 4) {
    totalscore += 4;
    appreciation_tot += 4;
  } else if (q9 == 5) {
    totalscore += 5;
    appreciation_tot += 5;
  }
  if (q10 == 1) {
    totalscore += 1;
    behavior_tot += 1;
  } else if (q10 == 2) {
    totalscore += 2;
    behavior_tot += 2;
  } else if (q10 == 3) {
    totalscore += 3;
    behavior_tot += 3;
  } else if (q10 == 4) {
    totalscore += 4;
    behavior_tot += 4;
  } else if (q10 == 5) {
    totalscore += 5;
    behavior_tot += 5;
  }
  if (q11 == 1) {
    totalscore += 1;
    behavior_tot += 1;
  } else if (q11 == 2) {
    totalscore += 2;
    behavior_tot += 2;
  } else if (q11 == 3) {
    totalscore += 3;
    behavior_tot += 3;
  } else if (q11 == 4) {
    totalscore += 4;
    behavior_tot += 4;
  } else if (q11 == 5) {
    totalscore += 5;
    behavior_tot += 5;
  }
  if (q12 == 1) {
    totalscore += 1;
    experience_tot += 1;
  } else if (q12 == 2) {
    totalscore += 2;
    experience_tot += 2;
  } else if (q12 == 3) {
    totalscore += 3;
    experience_tot += 3;
  } else if (q12 == 4) {
    totalscore += 4;
    experience_tot += 4;
  } else if (q12 == 5) {
    totalscore += 5;
    experience_tot += 5;
  }
  if (q13 == 1) {
    totalscore += 1;
    appreciation_tot += 1;
    experience_tot += 1;
  } else if (q13 == 2) {
    totalscore += 2;
    appreciation_tot += 2;
    experience_tot += 2;
  } else if (q13 == 3) {
    totalscore += 3;
    appreciation_tot += 3;
    experience_tot += 3;
  } else if (q13 == 4) {
    totalscore += 4;
    appreciation_tot += 4;
    experience_tot += 4;
  } else if (q13 == 5) {
    totalscore += 5;
    appreciation_tot += 5;
    experience_tot += 5;
  }
  if (q14 == 1) {
    totalscore += 1;
    appreciation_tot += 1;
  } else if (q14 == 2) {
    totalscore += 2;
    appreciation_tot += 2;
  } else if (q14 == 3) {
    totalscore += 3;
    appreciation_tot += 3;
  } else if (q14 == 4) {
    totalscore += 4;
    appreciation_tot += 4;
  } else if (q14 == 5) {
    totalscore += 5;
    appreciation_tot += 5;
  }
  $('[bloc=totalscore]').text(totalscore);
  $('[bloc=appreciation_tot]').text(appreciation_tot);
  $('[bloc=experience_tot]').text(experience_tot);
  $('[bloc=behavior_tot]').text(behavior_tot);
}

// Describe this function...
function calculate_cumulative_score() {
  cumulative = totalscore / 14;
  $('[bloc=cumulative]').text((Math.round(cumulative*100))/100);
  appreciation = appreciation_tot / 8;
  $('[bloc=appreciation]').text((Math.round(appreciation*100))/100);
  experience = experience_tot / 3;
  $('[bloc=experience]').text((Math.round(experience*100))/100);
  behavior = behavior_tot / 4;
  $('[bloc=behavior]').text((Math.round(behavior*100))/100);
}


var we_tabs_next_button = '[bloc=next-question]';
    var we_tabs_prev_button = '[bloc=prev-question]';
    var we_tabs_active_class = 'active';

    var we_activeTab,we_indexOfActiveTab, we_indexOfNextTab, we_indexOfPrevTab, we_prevTab, we_amountOfTabs, nextTab;

    var tabList = ['q1'];

    openTab(tabList[0]);

    $(we_tabs_next_button).on("click", function () {
      var activeTab = $(".w--tab-active").attr("data-w-tab");
      var indexOfActiveTab = tabList.indexOf(activeTab);
      var indexOfNextTab = indexOfActiveTab + 1;
      var nextTab = tabList[indexOfNextTab];
      var amountOfTabs = tabList.length;
      var attrNextTab = $('.w--tab-active').attr('next-tab');

      openTab(attrNextTab);

      attrNextTab = $('.w--tab-active').attr('next-tab');

      if (typeof attrNextTab !== 'undefined' && attrNextTab !== false) {
        $(we_tabs_next_button).addClass(we_tabs_active_class);
      } else {
        $(we_tabs_next_button).removeClass(we_tabs_active_class);
      }

      if (amountOfTabs > 1) {
        $(we_tabs_prev_button).addClass(we_tabs_active_class);
      }
    });

    $(we_tabs_prev_button).on("click", function () {
      var activeTab = $(".w--tab-active").attr("data-w-tab");
      var indexOfActiveTab = tabList.indexOf(activeTab);
      var indexOfPrevTab = indexOfActiveTab - 1;
      var prevTab = tabList[indexOfPrevTab];

      var attrPrevTab = $('.w--tab-active').attr('prev-tab');

      if (indexOfActiveTab > 0) {
        openTab(attrPrevTab);
        $(we_tabs_next_button).addClass(we_tabs_active_class);
      }

      if (indexOfActiveTab <= 1) {
        $(we_tabs_prev_button).removeClass(we_tabs_active_class);
      } else {
        $(we_tabs_prev_button).addClass(we_tabs_active_class);
      }
    });

    function openTab(tab) {
      var tab_link = "a[data-w-tab=" + tab;
      tab = "div[data-w-tab=" + tab;

      $(tab).siblings().removeClass("w--tab-active");
      $(tab).addClass("w--tab-active");
      $(tab_link).siblings("a").removeClass("w--current");
      $(tab_link).addClass("w--current");
    }$("[name=q1]").on("input", function () {
    q1 = getValueFromInput("q1");

      nextTab = 'q2';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q2]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'7'+'%',
    });
  });
});

    $("[name=q1]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      q1 = getValueFromInput("q1");

      nextTab = 'q2';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q2]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'7'+'%',
    });
  });
});
    $("[name=q2]").on("input", function () {
    q2 = getValueFromInput("q2");

      nextTab = 'q3';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q3]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'14'+'%',
    });
  });
});

    $("[name=q2]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      q2 = getValueFromInput("q2");

      nextTab = 'q3';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q3]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'14'+'%',
    });
  });
});
    $("[name=q3]").on("input", function () {
    q3 = getValueFromInput("q3");

      nextTab = 'q4';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q4]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'21'+'%',
    });
  });
});

    $("[name=q3]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      q3 = getValueFromInput("q3");

      nextTab = 'q4';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q4]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'21'+'%',
    });
  });
});
    $("[name=q4]").on("input", function () {
    q4 = getValueFromInput("q4");

      nextTab = 'q5';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q5]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'28'+'%',
    });
  });
});

    $("[name=q4]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      q4 = getValueFromInput("q4");

      nextTab = 'q5';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q5]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'28'+'%',
    });
  });
});
    $("[name=q5]").on("input", function () {
    q5 = getValueFromInput("q5");

      nextTab = 'q6';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q6]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'35'+'%',
    });
  });
});

    $("[name=q5]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      q5 = getValueFromInput("q5");

      nextTab = 'q6';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q6]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'35'+'%',
    });
  });
});
    $("[name=q6]").on("input", function () {
    q6 = getValueFromInput("q6");

      nextTab = 'q7';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q7]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'42'+'%',
    });
  });
});

    $("[name=q6]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      q6 = getValueFromInput("q6");

      nextTab = 'q7';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q7]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'42'+'%',
    });
  });
});
    $("[name=q7]").on("input", function () {
    q7 = getValueFromInput("q7");

      nextTab = 'q8';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q8]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'49'+'%',
    });
  });
});

    $("[name=q7]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      q7 = getValueFromInput("q7");

      nextTab = 'q8';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q8]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'49'+'%',
    });
  });
});
    $("[name=q8]").on("input", function () {
    q8 = getValueFromInput("q8");

      nextTab = 'q9';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q9]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'56'+'%',
    });
  });
});

    $("[name=q8]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      q8 = getValueFromInput("q8");

      nextTab = 'q9';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q9]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'56'+'%',
    });
  });
});
    $("[name=q9]").on("input", function () {
    q9 = getValueFromInput("q9");

      nextTab = 'q10';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q10]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'63'+'%',
    });
  });
});

    $("[name=q9]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      q9 = getValueFromInput("q9");

      nextTab = 'q10';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q10]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'63'+'%',
    });
  });
});
    $("[name=q10]").on("input", function () {
    q10 = getValueFromInput("q10");

      nextTab = 'q11';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q11]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'70'+'%',
    });
  });
});

    $("[name=q10]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      q10 = getValueFromInput("q10");

      nextTab = 'q11';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q11]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'70'+'%',
    });
  });
});
    $("[name=q11]").on("input", function () {
    q11 = getValueFromInput("q11");

      nextTab = 'q12';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q12]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'77'+'%',
    });
  });
});

    $("[name=q11]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      q11 = getValueFromInput("q11");

      nextTab = 'q12';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q12]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'77'+'%',
    });
  });
});
    $("[name=q12]").on("input", function () {
    q12 = getValueFromInput("q12");

      nextTab = 'q13';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q13]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'84'+'%',
    });
  });
});

    $("[name=q12]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      q12 = getValueFromInput("q12");

      nextTab = 'q13';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q13]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'84'+'%',
    });
  });
});
    $("[name=q13]").on("input", function () {
    q13 = getValueFromInput("q13");

      nextTab = 'q14';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q14]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'91'+'%',
    });
  });
});

    $("[name=q13]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      q13 = getValueFromInput("q13");

      nextTab = 'q14';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=q14]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'91'+'%',
    });
  });
});
    $("[name=q14]").on("input", function () {
    q14 = getValueFromInput("q14");

      nextTab = 'results_tab';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=results_tab]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('#next-text').text('Results');
  $('.progress-bar-gradient').css({
    'opacity':'100'+'%',
  });
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'100'+'%',
    });
  });
});

    $("[name=q14]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      q14 = getValueFromInput("q14");

      nextTab = 'results_tab';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=results_tab]')).attr('prev-tab',we_activeTab);

      Calculate_overall_score();
  calculate_cumulative_score();
  $('#next-text').text('Results');
  $('.progress-bar-gradient').css({
    'opacity':'100'+'%',
  });
  $('[bloc=next-question]').on('click',function() {
    $('.progress-bar').css({
      'width':'100'+'%',
    });
  });
});

$('[bloc=prev-question]').on('click',function() {
  progress_bar_var -= 6.25;
  $('.progress-bar').css({
    'width':progress_bar_var+'%',
  });
});

$('[bloc=prev-question]').on('click',function() {
  $('#next-text').text('Next');
  $('.progress-bar-gradient').css({
    'opacity':'0'+'%',
  });
});
