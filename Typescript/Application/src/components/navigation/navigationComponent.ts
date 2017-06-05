import * as Vue from "vue";
import Component from "vue-class-component";

import { RouteItem } from "../../services/navigation/routeItem";
import * as HtmlTemplate from "./navigationComponent.html";

@Component({
  template: HtmlTemplate,
  props: {
    route: {
      type: RouteItem,
    },
  },
})
export class NavigationComponent extends Vue {
  public route: RouteItem;

  public getRouteComponent(): any {
    return this.route.component;
  }
}
