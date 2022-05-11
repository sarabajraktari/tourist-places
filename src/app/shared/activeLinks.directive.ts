import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: 'ActiveLinks'
})
export class ActiveLinks {
    @HostBinding('class.active') isActive = false;

    @HostListener('click')
    onMouseLeave() {
        this.isActive = true;
        console.log("Mouse clicked")
    }
}