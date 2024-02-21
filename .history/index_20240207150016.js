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
import * as list3 from "./list3.js";

const listName = location.pathname.split("/").pop().split(".")[0];

const NavLinks = () => {
  const links = [
    { pageLink: "list1A.html", pageName: "تزامن المخالفات" },
    { pageLink: "list1B.html", pageName: "تزامن عمليات التداول" },
    { pageLink: "list1C.html", pageName: "نشاط التداول" },
    { pageLink: "list2.html", pageName: "نسبة الملكية" },
    { pageLink: "list4.html", pageName: "نسبة الأوامر" },
    { pageLink: "list5.html", pageName: "عدد الأوامر" },
    { pageLink: "list6.html", pageName: "قيمة المحفظة في اليوم" },
    { pageLink: "list7.html", pageName: "مجموع التداولات" },
    { pageLink: "list9A.html", pageName: "إجمالي ونسبة التداولات" },
    { pageLink: "list9B.html", pageName: "متوسط سعر التنفيذ" },
    { pageLink: "list9C.html", pageName: "الأسعار قبل، بعد و خلال المخالفة" },
    { pageLink: "list9D.html", pageName: "عدد الصفقات المتقابلة" },
    { pageLink: "list9E.html", pageName: "نسبة الأسهم المتبقية/المدخلة" },
    { pageLink: "list9F.html", pageName: "نسبة الأوامر الملغاة/المنفذة" },
    {
      pageLink: "list10.html",
      pageName: "المعدل التراكمي لحجم وقيمة الشراء/البيع",
    },
    { pageLink: "list11.html", pageName: "أداء السهم بحركة المؤشر" },
    { pageLink: "list8.html", pageName: "التشابه في الIP address</address>" },
    { pageLink: "list3.html", pageName: "العلاقات بين المشتبه بيهم" },
  ];

  return `${links
    .map((navLink) => {
      return ` <li class="nav-item">
          <a class="nav-link" href=${navLink.pageLink}>
            ${navLink.pageName}
          </a>
        </li>`;
    })
    .join("")}`;
};

const nav = `<div class="container-fluid">

<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
  ${NavLinks()}
  </ul>
</div>
</div>`;

let listFiles = {
  list1A: list1A,
  list1B: list1B,
  list1C: list1C,
  list2: list2,
  list4: list4,
  list5: list5,
  list6: list6,
  list7: list7,
  list9A: list9A,
  list9B: list9B,
  list9C: list9C,
  list9D: list9D,
  list9E: list9E,
  list9F: list9F,
  list10: list10,
  list11: list11,
  list8: list8,
  list3: list3,
};

let noDataMsg = {
  list1A: "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بتزامن المخالفات<h3>",
  list1B:
    "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بتزامن عمليات التداول</h3>",
  list1C: "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بنشاط التداول</h3>",
  list2: "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بنسبة الملكية</h3>",
  list4: "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بنسبة الأوامر</h3>",
  list5: "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بعدد الأوامر</h3>",
  list6:
    "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بقيمة المحفظة في اليوم</h3>",
  list7: "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بمجموع التداولات</h3>",
  list9A:
    "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بإجمالي ونسبة التداولات</h3>",
  list9B:
    "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بمتوسط سعر التنفيذ</h3>",
  list9C:
    "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بالأسعار قبل، بعد و خلال المخالفة</h3>",
  list9D:
    "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بعدد الصفقات المتقابلة</h3>",
  list9E:
    "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بنسبة الأسهم المتبقية/المدخلة</h3>",
  list9F:
    "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بعدد الأوامر الملغاة/المنفذة</h3>",
  list10:
    "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بالمعدل التراكمي لحجم وقيمة الشراء/البيع</h3>",
  list11:
    "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بأداء السهم بحركة المؤشر</h3>",
  list8:
    "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بالتشابه في الIP address</h3>",
  list3:
    "<h3>هذه القضية لا تحتوي على الإحصائيات الخاصة بأداء السهم بحركة المؤشر</h3>",
};

let lists = [
  "list1A",
  "list1B",
  "list1C",
  "list2",
  "list3",
  "list4",
  "list5",
  "list6",
  "list7",
  "list8",
  "list9A",
  "list9B",
  "list9C",
  "list9D",
  "list9E",
  "list9F",
  "list10",
  "list11",
];

import { getLanguage } from "./lang.js";
import { tableStructure } from "./tablesStructure.js";
import { constructDataTable } from "./helperFunctions.js";
import * as fetchData from "./jsonData.js";

const generateNavbar = () => {
  const navbar = document.getElementById("navbar");
  navbar.innerHTML = nav;

  // highlighting the current page link
  let arrayOfNavLinks = Array.from(document.getElementsByClassName("nav-link"));

  let activeLink = arrayOfNavLinks.find((link) => {
    return link.href.includes(listName + ".html");
  });

  if (activeLink) {
    activeLink.classList.add("active");
    activeLink["aria-current"] = "page";
  }

  // adding case number to links so when you click on any link it navigates with the case number
  $(".nav-link").each(function (i, el) {
    let $this = $(this); // only need to create the object once
    $this.attr({
      href: $this.attr("href") + window.location.search,
    });
  });
};

const startProgram = async () => {
  generateNavbar();

  const lang = getLanguage();
  const datatableData = await fetchData.getDatatableData();
  const chartsData = await fetchData.getChartsData();

  const template = document.createElement("div");
  template.classList.add("container");

  let isPageListExist = !(Object.klists.indexOf(listName) === -1);
  console.log("isListFound is ", isListFound);
  if (isPageListExist) {
    //column array which used to initialize the datatabl in jquery
    let columnArray = constructDataTable(tableStructure()[listName]);
    if (!datatableData[0][listName] && !chartsData[0][listName]) {
      document.querySelector(".search-container")
        ? (document.querySelector(".search-container").style.display = "none")
        : "";
      template.innerHTML = noDataMsg[listName];
      document.body.appendChild(template);
    } else if (listName === "list11") {
      listFiles[listName].startTable(
        datatableData[0][listName],
        {
          securities: chartsData[0].list11Securities,
          sectors: chartsData[0].list11Sectors,
        },
        lang,
        datatableData[0].NINs,
        columnArray
      );
    } else {
      listFiles[listName].startTable(
        datatableData[0][listName],
        chartsData[0][listName],
        lang,
        datatableData[0].NINs,
        columnArray
      );
    }
  }
};
startProgram();
