import { RouteItem } from "./routeItem";

export class NavigationService {

  public routes = new Array<RouteItem>();
  public current: RouteItem;

  public init(): void {
    console.log("Navigation initialized");
  }

  public add(item: RouteItem): void {
    this.routes.push(item);
  }

  public navigateTo(item: RouteItem): void {
    this.current = item;
  }
}
