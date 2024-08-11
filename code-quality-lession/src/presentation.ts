export default class Presentation {
  private message = document.getElementById("message") as HTMLInputElement;
  private trigger = document.getElementById("trigger") as HTMLButtonElement;
  private toggle = document.getElementById("toggle") as HTMLButtonElement;

  private toggleListener?: () => void;
  private submitListener?: (message: string) => void;

  constructor() {
    this.trigger?.addEventListener("click", () => {
      this.submitListener?.(this.message.value);
    });

    this.toggle?.addEventListener("click", () => {
      this.toggleListener?.();
    });
  }

  onSubmit(callback: (message: string) => void) {
    this.submitListener = callback;
  }

  onToggle(callback: VoidFunction) {
    this.toggleListener = callback;
  }
}
