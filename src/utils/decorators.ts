import i18n from "@/plugins/i18n";

export function UseTranslation(scope: string): any {
  return function (constructorFunction: any): void {
    constructorFunction.prototype.t = (key: string, ...values: any) =>
      i18n.t(`${scope}.${key}`, ...values);
  };
}
