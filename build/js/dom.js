"use strict";
// my variation
/*
const catchYearTag: HTMLElement = document.getElementById("year")!;
const thisYear: number = new Date().getFullYear();
const getHtmlFullYearTag = <HTMLHeadElement>document.querySelector("h1");
getHtmlFullYearTag.setAttribute("datetime", thisYear.toString());
catchYearTag.textContent = thisYear.toString();

 */
// Dave Gray Variation
const catchYearTag = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
const getHtmlFullYearTag = document.querySelector("h1");
getHtmlFullYearTag.setAttribute("datetime", thisYear);
catchYearTag.textContent = thisYear;
