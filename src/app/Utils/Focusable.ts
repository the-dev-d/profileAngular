export abstract class Focusable {

  FocusElement : HTMLElement|null = null;

  init(ref:String):void {
    this.FocusElement = document.getElementById(ref.toString());
    console.log(this.FocusElement);
  }

  public getFocus() : void {
    if(this.FocusElement instanceof HTMLElement) {
      this.FocusElement.scrollIntoView({behavior:"smooth"});
    }
  }
}
