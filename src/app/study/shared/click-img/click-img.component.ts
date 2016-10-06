import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "click-img",
    template: require("./click-img.component.html"),
    styles:  [require("./click-img.component.scss")]
})
export class ClickImgComponent implements OnInit{

    @Input()  url: string;
    @Output() click = new EventEmitter<MouseEvent>();

    private fading: boolean;

    public ngOnInit(): void {
        this.fading = false;
    }

    private onClick($event: MouseEvent): void {
        this.fading = true;
        setTimeout(() => {
            this.fading = false;
        }, 1000);

        this.click.emit($event);
    }
}