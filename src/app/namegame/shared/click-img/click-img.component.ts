import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "click-img",
    template: require("./click-img.component.html"),
    styles:  [require("./click-img.component.scss")]
})
export class ClickImgComponent implements OnInit{

    @Input()  url: string;
    @Output() click = new EventEmitter<MouseEvent>();

    private rotation: number;

    public ngOnInit(): void {
        this.rotation = 0;
    }

    private onClick($event: MouseEvent): void {
        this.rotation += 90;
        this.rotation %= 360;

        this.click.emit($event);
    }

    private getRotation(): any {
        return `rotate(${ this.rotation}deg)`;
    }
}