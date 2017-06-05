import * as Vue from "vue";

import { NavigationComponent } from "../components/navigation/navigationComponent";
import { NavigationService, RouteItem } from "../services/navigation/index";

import { HomeComponent } from "../modules/home/homeModule";

class ApplicationModel {

  public navigationService = new NavigationService();

  public init(): void {
    this.initNavigation();
  }

  get routes(): RouteItem[] {
    return this.navigationService.routes;
  }

  get currentRoute(): RouteItem {
    return this.navigationService.current;
  }

  public navigateTo(item: RouteItem) {
    console.log(`Navigate to "${item.label}"`);
    this.navigationService.navigateTo(item);
  }

  private initNavigation() {
    const homeItem = new RouteItem("Home", "home", "HomeComponent");
    this.navigationService.add(homeItem);
    this.navigationService.add(new RouteItem("Problem of the month", "potm", "ProblemOfTheMonthComponent"));
    this.navigationService.navigateTo(homeItem);
  }
}

Vue.component("HomeComponent", HomeComponent);


export = {
  init(element: string) {
    console.log("App started");

    const vm = new ApplicationModel();
    vm.init();
    const vue = new Vue({
      el: element,
      data: {
        model: vm,
      },
      components: {
        NavigationComponent,
      },
    });
  },
};
