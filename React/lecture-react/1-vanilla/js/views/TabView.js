import { qs, qsAll } from "../helpers.js";
import View from "./View.js";

const tag = "[TabView]";

export const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLabel = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근 검색어",
};

export default class TabView extends View {
  constructor() {
    console.log(tag, "constructor");

    super(qs("#tab-view"));

    this.template = new Template();
  }

  show(selectedTab) { // model이 selecteTab 정보를 가지고 있어야 함
    this.element.innerHTML = this.template.getTabList();
    
    qsAll("li", this.element).forEach(li => {
      li.className = li.dataset.tab === selectedTab ? "active" : "";
    });

    super.show();
  }
}

class Template {
  getTabList() {
    return `
      <ul class="tabs">
        ${Object.values(TabType)
          .map((tabType) => ({ tabType, tabLabel: TabLabel[tabType] }))
          .map(this._getTab)
          .join("")}
      </ul>
    `;
  }

  _getTab({ tabType, tabLabel }) {
    return `
      <li data-tab="${tabType}">${tabLabel}</li>
     `;
  }
}