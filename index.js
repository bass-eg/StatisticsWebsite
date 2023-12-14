import * as list1A from "./list1A.js";
import * as list1B from "./list1B.js";
import * as list1C from "./list1C.js";
import * as list2 from "./list2.js";
import * as list4 from "./list4.js";
import * as list5 from "./list5.js";
import * as list6 from "./list6.js";
import * as list7 from "./list7.js";
import * as list9A from "./list9A.js";
import * as list9B from "./list9B.js";
import * as list9C from "./list9C.js";
import * as list9D from "./list9D.js";
import * as list9E from "./list9E.js";
import * as list9F from "./list9F.js";
import * as list10 from "./list10.js";
import * as list11 from "./list11.js";
import * as list8 from "./list8.js";

import { getLanguage } from "./lang.js";
import { getArabicTranslation } from "./arabicTranslation.js";
import * as fetchData from "./jsonData.js";

const startProgram = async () => {
  $(".nav-link").each(function (i, el) {
    let $this = $(this); // only need to create the object once
    $this.attr({
      href: $this.attr("href") + window.location.search,
    });
  });
  const arabicTranslation = getArabicTranslation();
  const lang = getLanguage();
  const datatableData = await fetchData.getDatatableData();
  const chartsData = await fetchData.getChartsData();

  const template = document.createElement("div");
  template.classList.add("container");

  const listName = location.pathname.split("/").pop().split(".")[0];

  const translateTableHeaders = (object) => {
    for (const key in object) {
      const htmlElements = document.querySelector(`.${key}`);
      htmlElements.textContent = object[key];
    }
  };

  if (listName === "list1A") {
    translateTableHeaders(arabicTranslation[0].list1A);
    if (!datatableData[0].list1A && !chartsData[0].list1A) {
      document.querySelector(".search-container").style.display = "none";
      template.innerHTML =
        "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بتزامن المخالفات<h3>";
      document.body.appendChild(template);
    }
    list1A.startTable(
      datatableData[0].list1A,
      chartsData[0].list1A,
      lang,
      datatableData[0].NINs
    );
  }
  if (listName === "list1B") {
    translateTableHeaders(arabicTranslation[0].list1B);

    if (!datatableData[0].list1B && !chartsData[0].list1B) {
      document.querySelector(".search-container").style.display = "none";
      template.innerHTML =
        "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بتزامن عمليات التداول</h3>";
      document.body.appendChild(template);
    }
    list1B.startTable(
      datatableData[0].list1B,
      chartsData[0].list1B,
      lang,
      datatableData[0].NINs
    );
  }
  if (listName === "list1C") {
    translateTableHeaders(arabicTranslation[0].list1C);

    if (!datatableData[0].list1C && !chartsData[0].list1C) {
      document.querySelector(".search-container").style.display = "none";
      template.innerHTML =
        "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بنشاط التداول</h3>";
      document.body.appendChild(template);
    }
    list1C.startTable(
      datatableData[0].list1C,
      chartsData[0].list1C,
      lang,
      datatableData[0].NINs
    );
  }
  if (listName === "list2") {
    translateTableHeaders(arabicTranslation[0].list2);

    if (!datatableData[0].list2 && !chartsData[0].list2) {
      document.querySelector(".search-container").style.display = "none";
      template.innerHTML =
        "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بنسبة الملكية</h3>";
      document.body.appendChild(template);
    }
    list2.startTable(
      datatableData[0].list2,
      chartsData[0].list2,
      lang,
      datatableData[0].NINs
    );
  }
  if (listName === "list4") {
    translateTableHeaders(arabicTranslation[0].list4);

    if (!datatableData[0].list4 && !chartsData[0].list4) {
      document.querySelector(".search-container").style.display = "none";
      template.innerHTML =
        "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بنسبة الأوامر</h3>";
      document.body.appendChild(template);
    }
    list4.startTable(
      datatableData[0].list4,
      chartsData[0].list4,
      lang,
      datatableData[0].NINs
    );
  }
  if (listName === "list5") {
    translateTableHeaders(arabicTranslation[0].list5);

    if (!datatableData[0].list5 && !chartsData[0].list5) {
      document.querySelector(".search-container").style.display = "none";
      template.innerHTML =
        "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بعدد الأوامر</h3>";
      document.body.appendChild(template);
    }
    list5.startTable(
      datatableData[0].list5,
      chartsData[0].list5,
      lang,
      datatableData[0].NINs
    );
  }
  if (listName === "list6") {
    translateTableHeaders(arabicTranslation[0].list6);

    if (!datatableData[0].list6 && !chartsData[0].list6) {
      document.querySelector(".search-container").style.display = "none";
      template.innerHTML =
        "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بقيمة المحفظة في اليوم</h3>";
      document.body.appendChild(template);
    }
    list6.startTable(
      datatableData[0].list6,
      chartsData[0].list6,
      lang,
      datatableData[0].NINs
    );
  }
  if (listName === "list7") {
    translateTableHeaders(arabicTranslation[0].list7);

    if (!datatableData[0].list7 && !chartsData[0].list7) {
      document.querySelector(".search-container").style.display = "none";
      template.innerHTML =
        "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بمجموع التداولات</h3>";
      document.body.appendChild(template);
    }
    list7.startTable(
      datatableData[0].list7,
      chartsData[0].list7,
      lang,
      datatableData[0].NINs
    );
  }
  if (listName === "list8") {
    translateTableHeaders(arabicTranslation[0].list8);

    if (!datatableData[0].list8 && !chartsData[0].list8) {
      template.innerHTML =
        "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بالتشابه في الIP address</h3>";
      document.body.appendChild(template);
    }
    list8.startTable(
      datatableData[0].list8,
      chartsData[0].list8,
      lang,
      datatableData[0].NINs
    );
  }
  if (listName === "list9A") {
    translateTableHeaders(arabicTranslation[0].list9A);

    if (!datatableData[0].list9A && !chartsData[0].list9A) {
      document.querySelector(".search-container").style.display = "none";
      template.innerHTML =
        "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بإجمالي ونسبة التداولات</h3>";
      document.body.appendChild(template);
    }
    list9A.startTable(
      datatableData[0].list9A,
      chartsData[0].list9A,
      lang,
      datatableData[0].NINs
    );
  }
  if (listName === "list9B") {
    translateTableHeaders(arabicTranslation[0].list9B);

    if (!datatableData[0].list9B && !chartsData[0].list9B) {
      document.querySelector(".search-container").style.display = "none";
      template.innerHTML =
        "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بمتوسط سعر التنفيذ</h3>";
      document.body.appendChild(template);
    }
    list9B.startTable(
      datatableData[0].list9B,
      chartsData[0].list9B,
      lang,
      datatableData[0].NINs
    );
  }
  if (listName === "list9C") {
    translateTableHeaders(arabicTranslation[0].list9C);

    if (!datatableData[0].list9C && !chartsData[0].list9C) {
      document.querySelector(".search-container").style.display = "none";
      template.innerHTML =
        "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بالأسعار قبل، بعد و خلال المخالفة</h3>";
      document.body.appendChild(template);
    }
    list9C.startTable(
      datatableData[0].list9C,
      chartsData[0].list9C,
      lang,
      datatableData[0].NINs
    );
  }
  if (listName === "list9D") {
    translateTableHeaders(arabicTranslation[0].list9D);

    if (!datatableData[0].list9D && !chartsData[0].list9D) {
      document.querySelector(".search-container").style.display = "none";
      template.innerHTML =
        "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بعدد الصفقات المتقابلة</h3>";
      document.body.appendChild(template);
    }
    list9D.startTable(
      datatableData[0].list9D,
      chartsData[0].list9D,
      lang,
      datatableData[0].NINs
    );
  }
  if (listName === "list9E") {
    translateTableHeaders(arabicTranslation[0].list9E);

    if (!datatableData[0].list9E && !chartsData[0].list9E) {
      document.querySelector(".search-container").style.display = "none";
      template.innerHTML =
        "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بنسبة الأسهم المتبقية/المدخلة</h3>";
      document.body.appendChild(template);
    }
    list9E.startTable(
      datatableData[0].list9E,
      chartsData[0].list9E,
      lang,
      datatableData[0].NINs
    );
  }
  if (listName === "list9F") {
    translateTableHeaders(arabicTranslation[0].list9F);

    if (!datatableData[0].list9F && !chartsData[0].list9F) {
      document.querySelector(".search-container").style.display = "none";
      template.innerHTML =
        "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بعدد الأوامر الملغاة/المنفذة</h3>";
      document.body.appendChild(template);
    }
    list9F.startTable(
      datatableData[0].list9F,
      chartsData[0].list9F,
      lang,
      datatableData[0].NINs
    );
  }
  if (listName === "list10") {
    translateTableHeaders(arabicTranslation[0].list10);

    if (!datatableData[0].list10 && !chartsData[0].list10) {
      document.querySelector(".search-container").style.display = "none";
      template.innerHTML =
        "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بالمعدل التراكمي لحجم وقيمة الشراء/البيع</h3>";
      document.body.appendChild(template);
    }
    list10.startTable(
      datatableData[0].list10,
      chartsData[0].list10,
      lang,
      datatableData[0].NINs
    );
  }
  if (listName === "list11") {
    translateTableHeaders(arabicTranslation[0].list11);

    if (!datatableData[0].list11 && !chartsData[0].list11) {
      document.querySelector(".search-container").style.display = "none";
      template.innerHTML =
        "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بأداء السهم بحركة المؤشر</h3>";
      document.body.appendChild(template);
    }
    list11.startTable(
      datatableData[0].list11,
      chartsData[0].list11,
      lang,
      datatableData[0].NINs
    );
  }
};
startProgram();
